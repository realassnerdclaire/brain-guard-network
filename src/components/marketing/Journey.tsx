import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import EEGStage, { type EEGStageHandle } from '@/components/journey/EEGStage';
import JourneyPanels from '@/components/journey/JourneyPanels';
import type { JourneyConfig } from '@/components/journey/EEGEngine';

export default function Journey() {
  const [config, setConfig] = useState<JourneyConfig | null>(null);
  const stageRef = useRef<EEGStageHandle>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load config
  useEffect(() => {
    fetch('/journeyConfig.json')
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  // Scroll binding
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const validationProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const encryptionProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const consentProgress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const aeProgress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const downstreamProgress = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  // Update stage
  useEffect(() => {
    if (!stageRef.current) return;
    
    const unsubscribes = [
      validationProgress.on('change', (v) => stageRef.current?.setValidation(v)),
      encryptionProgress.on('change', (v) => stageRef.current?.setEncryption(v)),
      consentProgress.on('change', (v) => stageRef.current?.setConsent(v)),
      aeProgress.on('change', (v) => stageRef.current?.setAE(v)),
      downstreamProgress.on('change', (v) => stageRef.current?.setDownstream(v))
    ];
    return () => unsubscribes.forEach(unsub => unsub());
  }, [validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress]);

  if (!config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const stepProgresses = [
    validationProgress.get(),
    encryptionProgress.get(),
    consentProgress.get(),
    aeProgress.get(),
    downstreamProgress.get()
  ];

  return (
    <div ref={scrollRef} style={{ height: '500vh' }}>
      <section 
        id="xbr-journey"
        className="relative"
        style={{ height: '500vh' }}
      >
        <div
          id="eeg-stage"
          style={{
            position: 'sticky',
            top: 'calc(50vh - 160px)',
            height: '320px',
            display: 'grid',
            placeItems: 'center',
            zIndex: 2
          }}
        >
          <EEGStage ref={stageRef} config={config} />
        </div>
        <JourneyPanels config={config} stepProgresses={stepProgresses} />
      </section>
    </div>
  );
}

// Seeded random function for deterministic results
const seededRandom = (seed: number) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// EEG Signal Generation based on config
const generateEEGSignal = (config: typeof journeyConfig, modifications: any = {}) => {
  const { duration_s, fs_hz, components, map } = config.eeg;
  const samples = duration_s * fs_hz;
  const points: [number, number][] = [];
  
  for (let i = 0; i < samples; i++) {
    const t = i / fs_hz;
    let eeg = 0;
    
    // Generate signal from components
    components.forEach(comp => {
      switch (comp.type) {
        case 'sine':
          eeg += comp.amp_uv * Math.sin(2 * Math.PI * comp.freq_hz * t + comp.phase);
          break;
        case 'pink_noise':
          eeg += (seededRandom(config.seed + i) - 0.5) * 2 * comp.sigma_uv;
          break;
      }
    });
    
    // Apply artifacts if specified
    if (modifications.addArtifacts) {
      config.artifacts.forEach(artifact => {
        const startTime = artifact.t_s;
        const endTime = artifact.t_s + (artifact.duration_ms || artifact.width_ms || 12) / 1000;
        
        if (t >= startTime && t <= endTime) {
          switch (artifact.kind) {
            case 'spike':
              eeg += artifact.peak_uv;
              break;
            case 'dropout':
              eeg = 0;
              break;
            case 'saturation':
              eeg = Math.max(-artifact.clamp_uv, Math.min(artifact.clamp_uv, eeg));
              break;
          }
        }
      });
    }
    
    // Apply band-pass visual smoothing if clean
    if (modifications.cleaned) {
      // Simple smoothing approximation
      eeg = eeg * 0.8;
    }
    
    // Clamp to visual scale
    eeg = Math.max(-config.eeg.amp_uv, Math.min(config.eeg.amp_uv, eeg));
    
    // Map to SVG coordinates
    const x = map.x_px_start + (t / duration_s) * (map.x_px_end - map.x_px_start);
    const y = map.y_px_center - (eeg / config.eeg.amp_uv) * map.y_px_scale;
    
    points.push([x, y]);
  }
  
  // Convert to SVG path
  let pathString = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    pathString += ` L${points[i][0]},${points[i][1]}`;
  }
  
  return pathString;
};

// EEG Stage Component - Single sticky SVG
const EEGStage = ({ 
  stepProgresses 
}: { 
  stepProgresses: number[] 
}) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Determine active step
  const activeStepIndex = stepProgresses.findIndex(p => p > 0);
  const activeStep = activeStepIndex >= 0 ? journeyConfig.steps[activeStepIndex] : journeyConfig.steps[0];
  const activeProgress = activeStepIndex >= 0 ? stepProgresses[activeStepIndex] : 0;

  // Generate EEG paths
  const eegRawPath = useMemo(() => {
    return generateEEGSignal(journeyConfig, { 
      addArtifacts: activeStep.id === 'validation' && activeProgress < 0.5 
    });
  }, [activeStep.id, activeProgress]);
  
  const eegCleanPath = useMemo(() => {
    return generateEEGSignal(journeyConfig, { 
      cleaned: true 
    });
  }, []);

  // Calculate encryption windows
  const encryptionWindows = Math.floor(journeyConfig.eeg.duration_s / (journeyConfig.encryption.window_ms / 1000));
  
  // Calculate consent windows and permissions
  const consentWindows = 20; // Approximate for visual
  const allowedWindows = Array.from({ length: consentWindows }, (_, i) => {
    const rnd = seededRandom(journeyConfig.seed + i);
    return rnd < journeyConfig.consent.allow_ratio;
  });

  // Calculate anomaly windows
  const anomalyWindows = Math.floor(journeyConfig.eeg.duration_s / (journeyConfig.autoencoder.window_ms / 1000));
  const anomalousIndices = Array.from({ length: anomalyWindows }, (_, i) => {
    const rnd = seededRandom(journeyConfig.seed * 2 + i);
    return rnd < journeyConfig.autoencoder.anomaly_rate;
  });

  return (
    <div 
      id="eeg-stage"
      style={{
        position: 'sticky',
        top: 'calc(50vh - 160px)',
        height: '320px',
        display: 'grid',
        placeItems: 'center',
        zIndex: 2
      }}
    >
      <svg 
        id="eeg-svg"
        width="1100" 
        height="260" 
        viewBox="0 0 1100 260"
        className="max-w-full h-auto"
        role="img"
        aria-label={journeyConfig.a11y.stage_aria}
      >
        <defs>
          {/* Ciphertext mosaic filter for encrypted capsules */}
          <filter id="xbr-cipher" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency={journeyConfig.encryption.cipher_filter.turbulence_base_freq} 
              numOctaves="1" 
              seed="7" 
              result="noise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale={journeyConfig.encryption.cipher_filter.displacement_scale} 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
          </filter>

          {/* Redaction hatch pattern for denied windows */}
          <pattern id="xbr-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform={`rotate(${journeyConfig.consent.deny_style.hatch_angle_deg})`}>
            <line x1="0" y1="0" x2="0" y2="8" stroke={journeyConfig.theme.colors.redact} strokeWidth="2" strokeOpacity={journeyConfig.consent.deny_style.opacity}></line>
          </pattern>

          {/* Glow effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Baseline grid */}
        <line 
          x1={journeyConfig.eeg.map.x_px_start} 
          y1={journeyConfig.eeg.map.y_px_center} 
          x2={journeyConfig.eeg.map.x_px_end} 
          y2={journeyConfig.eeg.map.y_px_center} 
          stroke={journeyConfig.theme.colors.ticksDark} 
          strokeWidth="1"
        />
        
        {/* Time ticks every second */}
        {Array.from({ length: journeyConfig.eeg.duration_s - 1 }, (_, i) => {
          const x = journeyConfig.eeg.map.x_px_start + ((i + 1) / journeyConfig.eeg.duration_s) * (journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start);
          return (
            <line 
              key={i}
              x1={x} 
              y1={journeyConfig.eeg.map.y_px_center - 5} 
              x2={x} 
              y2={journeyConfig.eeg.map.y_px_center + 5} 
              stroke={journeyConfig.theme.colors.ticksDark} 
              strokeWidth="1"
            />
          );
        })}

        {/* Raw EEG Path */}
        <motion.path
          id="eeg-raw"
          d={eegRawPath}
          stroke={journeyConfig.theme.colors.eeg}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity={activeStep.id === 'validation' && activeProgress < 0.5 ? 1 : 0.2}
          strokeDasharray={activeStep.id === 'validation' && activeProgress > 0.5 ? journeyConfig.steps[0].animations.dotted_rejected : "none"}
        />

        {/* Clean EEG Path */}
        <motion.path
          id="eeg-clean"
          d={eegCleanPath}
          stroke={journeyConfig.theme.colors.eeg}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity={
            activeStep.id === 'validation' && activeProgress > 0.5 ? 0.9 :
            activeStep.id === 'encryption' ? journeyConfig.steps[1].animations.base_path_dim[1] :
            activeStep.id === 'consent' ? journeyConfig.steps[2].animations.allow_underpath_opacity[1] :
            activeStep.id === 'autoencoder' ? 0.9 :
            activeStep.id === 'downstream' ? journeyConfig.steps[4].animations.restore_clean_opacity :
            1
          }
        />

        {/* Ghost reconstruction path for autoencoder step */}
        {activeStep.id === 'autoencoder' && (
          <motion.path
            id="eeg-ghost"
            d={eegCleanPath}
            stroke={journeyConfig.theme.colors.ghost}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity={activeProgress * journeyConfig.steps[3].animations.ghost_opacity[1]}
            transform="translate(0, 5)" // Slight offset
          />
        )}

        {/* Validation artifacts */}
        <AnimatePresence>
          {activeStep.id === 'validation' && activeProgress < 0.5 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Artifact markers */}
              {journeyConfig.artifacts.map((artifact, i) => {
                const x = journeyConfig.eeg.map.x_px_start + (artifact.t_s / journeyConfig.eeg.duration_s) * (journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start);
                return (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={journeyConfig.eeg.map.y_px_center - 40}
                    r="6"
                    fill={journeyConfig.steps[0].animations.mark_colors.flag}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ 
                      duration: journeyConfig.steps[0].animations.defects_blink_ms / 1000,
                      repeat: journeyConfig.steps[0].animations.defects_blink_times
                    }}
                  />
                );
              })}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Validation checkmarks */}
        <AnimatePresence>
          {activeStep.id === 'validation' && activeProgress > 0.5 && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {journeyConfig.artifacts.map((artifact, i) => {
                const x = journeyConfig.eeg.map.x_px_start + (artifact.t_s / journeyConfig.eeg.duration_s) * (journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start);
                return (
                  <motion.text
                    key={i}
                    x={x}
                    y={journeyConfig.eeg.map.y_px_center - 40}
                    textAnchor="middle"
                    fontSize="16"
                    fill={journeyConfig.steps[0].animations.mark_colors.fixed}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    ✓
                  </motion.text>
                );
              })}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Encryption elements */}
        <AnimatePresence>
          {activeStep.id === 'encryption' && (
            <motion.g id="slicers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Vertical packet slicers */}
              {Array.from({ length: encryptionWindows }, (_, i) => {
                const x = journeyConfig.eeg.map.x_px_start + (i / encryptionWindows) * (journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start);
                return (
                  <motion.line
                    key={i}
                    x1={x}
                    y1={20}
                    x2={x}
                    y2={240}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeProgress * journeyConfig.steps[1].animations.slicer_opacity }}
                    transition={{ delay: i * 0.01 }}
                  />
                );
              })}

              {/* Cipher capsules */}
              <g id="cipherCapsules">
                {activeProgress > 0.25 && Array.from({ length: Math.floor(encryptionWindows / 2) }, (_, i) => {
                  const x = journeyConfig.eeg.map.x_px_start + 20 + (i * 40);
                  return (
                    <motion.rect
                      key={i}
                      x={x}
                      y={journeyConfig.eeg.map.y_px_center - 20}
                      width="30"
                      height="40"
                      rx={journeyConfig.steps[1].animations.capsule_corner_px}
                      ry={journeyConfig.steps[1].animations.capsule_corner_px}
                      filter="url(#xbr-cipher)"
                      fill={journeyConfig.theme.colors.eeg}
                      opacity="0.7"
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 0.7, scaleY: 1 }}
                      transition={{ delay: i * 0.02 }}
                    />
                  );
                })}
              </g>

              {/* GCM tags */}
              <g id="gcmTags">
                {activeProgress > 0.4 && Array.from({ length: Math.floor(encryptionWindows / 2) }, (_, i) => {
                  const x = journeyConfig.eeg.map.x_px_start + 45 + (i * 40);
                  return (
                    <motion.rect
                      key={i}
                      x={x}
                      y={journeyConfig.eeg.map.y_px_center + 25}
                      width={journeyConfig.encryption.gcm_tag.width_px}
                      height={journeyConfig.encryption.gcm_tag.height_px}
                      fill={journeyConfig.theme.colors.allowedHalo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: i * 0.03 }}
                    />
                  );
                })}
              </g>

              {/* Lock icon */}
              {activeProgress > 0.6 && (
                <motion.g transform="translate(550, 50)">
                  <svg width="18" height="18" aria-hidden="true">
                    <use href="#xbr-lock" stroke={journeyConfig.theme.colors.eeg} />
                  </svg>
                </motion.g>
              )}

              {/* Nonce indicator */}
              <motion.circle
                cx={journeyConfig.eeg.map.x_px_start}
                cy={journeyConfig.eeg.map.y_px_center}
                r="2"
                fill={journeyConfig.theme.colors.ghost}
                animate={{ 
                  cx: [journeyConfig.eeg.map.x_px_start, journeyConfig.eeg.map.x_px_end] 
                }}
                transition={{ 
                  duration: 1 / journeyConfig.steps[1].animations.nonce_dot_hz, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Consent enforcement elements */}
        <AnimatePresence>
          {activeStep.id === 'consent' && (
            <motion.g id="policyOverlays"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Policy gate */}
              <motion.g transform="translate(550, 50)">
                <svg width="18" height="18" aria-hidden="true">
                  <use href="#xbr-gate" stroke={journeyConfig.theme.colors.eeg} />
                </svg>
              </motion.g>

              {/* Allowed/denied windows */}
              {allowedWindows.map((isAllowed, i) => {
                const x = journeyConfig.eeg.map.x_px_start + (i / consentWindows) * (journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start);
                return (
                  <motion.g key={i}>
                    {/* Allowed halo */}
                    {isAllowed && (
                      <motion.rect
                        x={x - 5}
                        y={journeyConfig.eeg.map.y_px_center - 25}
                        width="30"
                        height="50"
                        rx="8"
                        fill="none"
                        stroke={journeyConfig.theme.colors.allowedHalo}
                        strokeWidth="1"
                        opacity={activeProgress * journeyConfig.steps[2].animations.allow_halo_opacity[1]}
                        filter="url(#glow)"
                      />
                    )}
                    
                    {/* Denied hatch */}
                    {!isAllowed && (
                      <motion.rect
                        x={x - 5}
                        y={journeyConfig.eeg.map.y_px_center - 25}
                        width="30"
                        height="50"
                        fill="url(#xbr-hatch)"
                        opacity={activeProgress * journeyConfig.steps[2].animations.deny_opacity}
                      />
                    )}
                  </motion.g>
                );
              })}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Autoencoder elements */}
        <AnimatePresence>
          {activeStep.id === 'autoencoder' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Spectrogram background */}
              <motion.rect
                x={journeyConfig.eeg.map.x_px_start}
                y={160}
                width={journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start}
                height="60"
                fill={journeyConfig.theme.colors.eeg}
                opacity="0.1"
              />
              
              {/* Residual band */}
              <g id="residualBand">
                {activeProgress > 0.2 && anomalousIndices.map((isAnomalous, i) => {
                  if (!isAnomalous) return null;
                  const x = journeyConfig.eeg.map.x_px_start + (i / anomalyWindows) * (journeyConfig.eeg.map.x_px_end - journeyConfig.eeg.map.x_px_start);
                  return (
                    <motion.rect
                      key={i}
                      x={x}
                      y={journeyConfig.eeg.map.y_px_center - 15}
                      width="20"
                      height="30"
                      fill={journeyConfig.autoencoder.residual_colormap[2].color}
                      rx="4"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeProgress > 0.6 ? 0 : 0.8,
                        y: activeProgress > 0.6 ? journeyConfig.autoencoder.quarantine.tray_y_px : journeyConfig.eeg.map.y_px_center - 15
                      }}
                      transition={{ 
                        duration: journeyConfig.steps[3].animations.drop_arc_ms / 1000,
                        delay: i * 0.1
                      }}
                    />
                  );
                })}
              </g>

              {/* Quarantine tray */}
              <g id="quarantineTray">
                <motion.rect
                  x={journeyConfig.eeg.map.x_px_start + 200}
                  y={journeyConfig.autoencoder.quarantine.tray_y_px}
                  width="400"
                  height="30"
                  rx="8"
                  fill="none"
                  stroke={journeyConfig.theme.colors.error}
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity={activeProgress > 0.3 ? 1 : 0}
                />
              </g>

              {/* Clean signal glow */}
              {activeProgress > 0.6 && (
                <motion.path
                  d={eegCleanPath}
                  stroke={journeyConfig.theme.colors.ok}
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  opacity={journeyConfig.steps[3].animations.safe_halo_opacity[1]}
                  filter="url(#glow)"
                />
              )}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Downstream elements */}
        <AnimatePresence>
          {activeStep.id === 'downstream' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Destination icons */}
              <g id="destIcons" transform="translate(980, 40)">
                {journeyConfig.downstream.destinations.map((dest, i) => (
                  <motion.g 
                    key={dest.id}
                    transform={`translate(0, ${i * 30})`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <svg width="20" height="20" aria-label={dest.label}>
                      <use href={`#${dest.icon}`} stroke={journeyConfig.theme.colors.eeg} />
                    </svg>
                  </motion.g>
                ))}
              </g>

              {/* Protective shield pulse */}
              <motion.circle
                cx="990"
                cy="120"
                r="40"
                fill="none"
                stroke={journeyConfig.theme.colors.allowedHalo}
                strokeWidth="2"
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: journeyConfig.downstream.shield_pulse_ms / 1000, 
                  repeat: isReducedMotion ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Hash chain badge */}
              {journeyConfig.downstream.show_hash_chain && (
                <motion.g 
                  transform="translate(500, 180)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <svg width="18" height="18" aria-hidden="true">
                    <use href={`#${journeyConfig.downstream.hash_icon}`} stroke={journeyConfig.theme.colors.eeg} />
                  </svg>
                </motion.g>
              )}

              {/* Latency label */}
              <motion.text
                x="600"
                y="195"
                fontSize="12"
                fill={journeyConfig.theme.colors.eeg}
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {journeyConfig.downstream.latency_label}
              </motion.text>

              {/* Hash chain */}
              <g id="badges" transform="translate(500, 180)">
                <motion.g 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <svg width="18" height="18" aria-hidden="true">
                    <use href="#xbr-hashchain" stroke={journeyConfig.theme.colors.eeg} />
                  </svg>
                </motion.g>
              </g>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

// Side Panel Component
const SidePanel = ({ 
  step, 
  isActive, 
  progress,
  index
}: { 
  step: typeof journeyConfig.steps[0]; 
  isActive: boolean; 
  progress: number;
  index: number;
}) => {
  const isLeft = step.side === 'left';
  
  return (
    <motion.div
      className={`
        ${isLeft ? 'left-[6vw] text-right' : 'right-[6vw] text-left'}
      `}
      style={{
        position: 'sticky',
        top: '50vh',
        transform: 'translateY(-50%)',
        width: '36ch',
        zIndex: 3
      }}
      initial={{ y: 16, opacity: 0 }}
      animate={{ 
        y: isActive ? 0 : 16, 
        opacity: isActive ? 1 : 0.2 
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.2, 0.8, 0.2, 1] 
      }}
    >
      <motion.div 
        className="bg-card/90 backdrop-blur-sm border rounded-xl p-6 shadow-elegant"
        role={journeyConfig.a11y.step_regions_role}
        aria-live="polite"
      >
        <motion.h3 
          className="text-xl font-semibold text-foreground mb-3"
          animate={{ opacity: isActive ? 1 : 0.7 }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-muted-foreground leading-relaxed"
          animate={{ opacity: isActive ? 1 : 0.5 }}
        >
          {step.body}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Main Journey Component
const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate step progresses
  const stepProgresses = journeyConfig.steps.map((_, i) => {
    return useTransform(
      scrollYProgress,
      [i / journeyConfig.steps.length, (i + 1) / journeyConfig.steps.length],
      [0, 1]
    );
  });

  // Get current progress values
  const progressValues = stepProgresses.map(p => p.get());

  useEffect(() => {
    const unsubscribes = stepProgresses.map((progress, i) => {
      return progress.on("change", (latest) => {
        if (latest > 0 && latest > progressValues[activeStepIndex]) {
          setActiveStepIndex(i);
        }
      });
    });

    return () => {
      unsubscribes.forEach(unsub => unsub());
    };
  }, [stepProgresses, progressValues, activeStepIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && activeStepIndex < journeyConfig.steps.length - 1) {
      const nextSection = containerRef.current?.children[activeStepIndex + 1] as HTMLElement;
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && activeStepIndex > 0) {
      const prevSection = containerRef.current?.children[activeStepIndex - 1] as HTMLElement;
      prevSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="xbr-journey"
      ref={containerRef}
      className="relative bg-background"
      style={{ height: '500vh' }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="XBrainer Security Journey - use arrow keys to navigate"
    >
      {/* Skip to end link for accessibility */}
      <a 
        href="#journey-end" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to End
      </a>

      {/* Fixed EEG Stage */}
      <EEGStage stepProgresses={progressValues} />

      {/* Step sections for scroll snapping */}
      {journeyConfig.steps.map((step, index) => (
        <div 
          key={step.id}
          className="h-screen relative"
          style={{ scrollSnapAlign: 'start' }}
        >
          <SidePanel
            step={step}
            isActive={index === activeStepIndex}
            progress={index === activeStepIndex ? progressValues[index] : 0}
            index={index}
          />
        </div>
      ))}

      {/* Journey end anchor */}
      <div id="journey-end" className="sr-only">End of Journey</div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          #xbr-journey {
            scroll-snap-type: y mandatory;
          }
          @media (prefers-reduced-motion: reduce) {
            #xbr-journey {
              scroll-snap-type: none;
            }
          }
        `
      }} />
    </section>
  );
};

export default Journey;