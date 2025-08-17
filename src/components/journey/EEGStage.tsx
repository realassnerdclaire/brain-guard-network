// components/journey/EEGStage.tsx
'use client';

import React, { useImperativeHandle, useMemo, useState, forwardRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { JourneyConfig, EEGSeries } from './EEGEngine';
import { generateEEG, buildPath, windowsByMs, seededMask } from './EEGEngine';

export type EEGStageHandle = {
  setValidation: (p: number) => void;
  setEncryption: (p: number) => void;
  setConsent: (p: number) => void;
  setAE: (p: number) => void;
  setDownstream: (p: number) => void;
};

type Props = {
  config: JourneyConfig;
  colors?: { eeg?: string; ghost?: string; error?: string; allowedHalo?: string; redact?: string };
};

const EEGStage = forwardRef<EEGStageHandle, Props>(function EEGStage({ config, colors }, ref) {
  const cfg = config;
  const series: EEGSeries = useMemo(() => generateEEG(cfg), [cfg]);
  const dRaw = useMemo(() => buildPath(series.x, series.yRaw), [series]);
  const dClean = useMemo(() => buildPath(series.x, series.yClean), [series]);

  // Progress states controlled by parent (sliders or scroll)
  const [pValidation, setPValidation] = useState(0);
  const [pEncryption, setPEncryption] = useState(0);
  const [pConsent, setPConsent] = useState(0);
  const [pAE, setPAE] = useState(0);
  const [pDown, setPDown] = useState(0);

  // Reduced motion detection
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useImperativeHandle(ref, () => ({
    setValidation: (p) => setPValidation(clamp01(p)),
    setEncryption: (p) => setPEncryption(clamp01(p)),
    setConsent: (p) => setPConsent(clamp01(p)),
    setAE: (p) => setPAE(clamp01(p)),
    setDownstream: (p) => setPDown(clamp01(p)),
  }), []);

  // Precompute windows
  const encWins = useMemo(() => windowsByMs(cfg, cfg.encryption.window_ms), [cfg]);
  const aeWins = useMemo(() => windowsByMs(cfg, cfg.autoencoder.window_ms), [cfg]);
  const consentMask = useMemo(() => seededMask(encWins.length, cfg.consent.allow_ratio, cfg.seed), [cfg, encWins.length]);
  const anomalyMask = useMemo(() => seededMask(aeWins.length, cfg.autoencoder.anomaly_rate, cfg.seed + 1000), [cfg, aeWins.length]);

  // Colors
  const c = {
    eeg: colors?.eeg ?? cfg.theme.colors.eeg,
    ghost: colors?.ghost ?? cfg.theme.colors.ghost,
    error: colors?.error ?? cfg.theme.colors.error,
    allowedHalo: colors?.allowedHalo ?? cfg.theme.colors.allowedHalo,
    redact: colors?.redact ?? cfg.theme.colors.redact,
  };

  // Animation calculations
  const validationArtifactsVisible = pValidation > 0 && pValidation < 0.5;
  const validationCheckmarksVisible = pValidation > 0.5;
  const rawOpacity = pValidation < 0.5 ? 1.0 : 0.2;
  const cleanOpacity = pValidation > 0.5 ? 0.9 : lerp(0.25, 0.8, pConsent);
  const basePathOpacity = lerp(1.0, 0.25, Math.max(0, Math.min(1, pEncryption * 0.8)));
  const ghostOpacity = Math.min(0.7, pAE);

  return (
    <svg width={1100} height={260} viewBox="0 0 1100 260" role="img" aria-label={cfg.a11y.stage_aria}>
      {/* defs */}
      <defs>
        <filter id="xbr-cipher" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <pattern id="xbr-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke={c.redact} strokeWidth="2" strokeOpacity="0.6" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* baseline grid (subtle) */}
      <g id="grid" opacity={0.12}>
        <line x1="60" y1={cfg.eeg.map.y_px_center} x2="1040" y2={cfg.eeg.map.y_px_center} stroke="currentColor" />
        {[1,2,3].map(i => (
          <line key={i} x1={60 + ((1040-60)/4)*i} y1="30" x2={60 + ((1040-60)/4)*i} y2="230" stroke="currentColor" />
        ))}
      </g>

      {/* encryption slicers */}
      <g id="slicers" opacity={pEncryption > 0 ? 0.2 : 0}>
        {encWins.map((w, idx) => (
          <motion.line
            key={idx}
            x1={w.x}
            y1={30}
            x2={w.x}
            y2={230}
            stroke="currentColor"
            strokeOpacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: pEncryption > 0 ? 0.2 : 0 }}
            transition={{ delay: idx * 0.01 }}
          />
        ))}
      </g>

      {/* artifacts (validation step) */}
      <AnimatePresence>
        {validationArtifactsVisible && (
          <g id="artifacts">
            {cfg.artifacts.map((artifact, i) => {
              const x = cfg.eeg.map.x_px_start + (artifact.t_s / cfg.eeg.duration_s) * (cfg.eeg.map.x_px_end - cfg.eeg.map.x_px_start);
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={cfg.eeg.map.y_px_center - 40}
                  r="6"
                  fill={c.error}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ 
                    opacity: [1, 0, 1], 
                    scale: 1
                  }}
                  transition={{ 
                    opacity: { 
                      duration: 0.16,
                      repeat: 2,
                      repeatType: "reverse"
                    },
                    scale: { duration: 0.2 }
                  }}
                />
              );
            })}
          </g>
        )}
      </AnimatePresence>

      {/* validation checkmarks */}
      <AnimatePresence>
        {validationCheckmarksVisible && (
          <g>
            {cfg.artifacts.map((artifact, i) => {
              const x = cfg.eeg.map.x_px_start + (artifact.t_s / cfg.eeg.duration_s) * (cfg.eeg.map.x_px_end - cfg.eeg.map.x_px_start);
              return (
                <motion.text
                  key={i}
                  x={x}
                  y={cfg.eeg.map.y_px_center - 40}
                  textAnchor="middle"
                  fontSize="16"
                  fill={cfg.theme.colors.ok}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  ✓
                </motion.text>
              );
            })}
          </g>
        )}
      </AnimatePresence>

      {/* raw & clean EEG paths */}
      <motion.path
        id="eeg-raw"
        d={dRaw}
        stroke={c.eeg}
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
        opacity={rawOpacity}
        strokeDasharray={pValidation > 0.5 ? "6 8" : "none"}
        animate={{ opacity: rawOpacity }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.path
        id="eeg-clean"
        d={dClean}
        stroke={c.eeg}
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
        opacity={pEncryption > 0 ? basePathOpacity : cleanOpacity}
        strokeDasharray={pAE > 0.6 ? "3 6" : "none"}
        animate={{ 
          opacity: pEncryption > 0 ? basePathOpacity : cleanOpacity 
        }}
        transition={{ duration: 0.3 }}
      />

      {/* encryption capsules & tags */}
      <AnimatePresence>
        {pEncryption > 0.25 && (
          <g id="cipherCapsules">
            {encWins.slice(0, Math.floor(encWins.length * Math.min(1, pEncryption * 2))).map((w, idx) => (
              <motion.rect
                key={idx}
                x={w.x}
                y={w.y}
                width={w.w}
                height={w.h}
                rx={6}
                ry={6}
                fill="rgba(110, 226, 255, 0.1)"
                stroke={c.eeg}
                strokeWidth={1}
                filter={pEncryption > 0.4 ? "url(#xbr-cipher)" : undefined}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.6, scaleY: 1 }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
              />
            ))}
          </g>
        )}
      </AnimatePresence>

      <g id="gcmTags">
        {pEncryption > 0.4 && encWins.slice(0, Math.floor(encWins.length * Math.min(1, pEncryption * 2))).map((w, idx) => (
          <motion.rect
            key={idx}
            x={w.x + w.w - 6}
            y={w.y + w.h - 8}
            width={6}
            height={4}
            fill={c.allowedHalo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: idx * 0.02 + 0.1 }}
          />
        ))}
      </g>

      {/* consent overlays */}
      <g id="policyOverlays">
        {pConsent > 0 && encWins.map((w, idx) => {
          const isAllowed = consentMask[idx];
          return (
            <motion.g key={idx}>
              {isAllowed ? (
                <motion.rect
                  x={w.x}
                  y={w.y}
                  width={w.w}
                  height={w.h}
                  fill="none"
                  stroke={c.allowedHalo}
                  strokeWidth={2}
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: lerp(0, 0.6, pConsent) }}
                  transition={{ delay: idx * 0.01 }}
                />
              ) : (
                <motion.rect
                  x={w.x}
                  y={w.y}
                  width={w.w}
                  height={w.h}
                  fill="url(#xbr-hatch)"
                  opacity={0.6}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: idx * 0.01 }}
                />
              )}
            </motion.g>
          );
        })}
      </g>

      {/* ghost reconstruction and residual band */}
      {pAE > 0 && (
        <motion.path
          id="eeg-ghost"
          d={dClean}
          stroke={c.ghost}
          strokeWidth={1.5}
          fill="none"
          opacity={ghostOpacity}
          transform="translate(0, 5)"
          initial={{ opacity: 0 }}
          animate={{ opacity: ghostOpacity }}
          transition={{ duration: 0.4 }}
        />
      )}

      <g id="residualBand">
        {pAE > 0.2 && pAE <= 0.6 && aeWins.map((w, idx) => {
          const isAnomalous = anomalyMask[idx];
          return (
            <motion.rect
              key={idx}
              x={w.x}
              y={w.y}
              width={w.w}
              height={w.h}
              fill={isAnomalous ? "rgba(255,90,90,0.75)" : "rgba(255,193,7,0.45)"}
              initial={{ opacity: 0 }}
              animate={{ opacity: lerp(0, 0.6, (pAE - 0.2) / 0.4) }}
              transition={{ delay: idx * 0.01 }}
            />
          );
        })}
      </g>

      {/* quarantine tray & counters */}
      <g id="quarantineTray" transform={`translate(0, ${cfg.autoencoder.quarantine.tray_y_px})`}>
        {pAE > 0.6 && aeWins.map((w, idx) => {
          const isAnomalous = anomalyMask[idx];
          if (!isAnomalous) return null;
          return (
            <motion.rect
              key={idx}
              x={60 + idx * 22}
              y={0}
              width={20}
              height={30}
              fill={c.error}
              rx={4}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ 
                type: "spring",
                damping: 20,
                stiffness: 300,
                delay: idx * 0.05 
              }}
            />
          );
        })}
      </g>

      {/* downstream icons & badges */}
      <AnimatePresence>
        {pDown > 0 && (
          <g id="destIcons">
            {cfg.downstream.destinations.map((dest, idx) => (
              <motion.g key={dest.id} transform={`translate(${980 + idx * 30}, 40)`}>
                <motion.circle
                  cx={10}
                  cy={10}
                  r={12}
                  fill="rgba(110, 226, 255, 0.1)"
                  stroke={c.eeg}
                  strokeWidth={1}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                />
                <motion.foreignObject
                  x={4}
                  y={4}
                  width={12}
                  height={12}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  <svg width="12" height="12" aria-label={dest.label}>
                    <use href={`#${dest.icon}`} />
                  </svg>
                </motion.foreignObject>
              </motion.g>
            ))}
          </g>
        )}
      </AnimatePresence>

      <g id="badges">
        {pDown > 0.7 && (
          <>
            <motion.text
              x="900"
              y="240"
              fontSize="12"
              fill={c.eeg}
              textAnchor="middle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {cfg.downstream.latency_label}
            </motion.text>
            <motion.g transform="translate(860, 225)">
              <motion.foreignObject
                width={16}
                height={16}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <svg width="16" height="16">
                  <use href="#xbr-hashchain" />
                </svg>
              </motion.foreignObject>
            </motion.g>
          </>
        )}
      </g>

      {/* Shield pulse for downstream */}
      {pDown > 0.5 && (
        <motion.circle
          cx="950"
          cy="130"
          r="30"
          fill="none"
          stroke={c.allowedHalo}
          strokeWidth={2}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
        />
      )}

      {/* Lock icon for encryption */}
      {pEncryption > 0.6 && (
        <motion.g transform="translate(550, 80)">
          <motion.foreignObject
            width={18}
            height={18}
            initial={{ opacity: 0, rotateY: -18 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.25 }}
          >
            <svg width="18" height="18" aria-hidden="true">
              <use href="#xbr-lock"/>
            </svg>
          </motion.foreignObject>
        </motion.g>
      )}

      {/* Gate icon for consent */}
      {pConsent > 0.4 && (
        <motion.g transform="translate(520, 80)">
          <motion.foreignObject
            width={18}
            height={18}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="18" height="18" aria-hidden="true">
              <use href="#xbr-gate"/>
            </svg>
          </motion.foreignObject>
        </motion.g>
      )}
    </svg>
  );
});

export default EEGStage;

function clamp01(x: number) { return Math.max(0, Math.min(1, x)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }