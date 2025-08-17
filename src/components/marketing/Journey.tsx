import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue,
  AnimatePresence 
} from 'framer-motion';

// Journey data with exact copy as specified
const journeySteps = [
  {
    id: "validation",
    title: "Validation",
    body: "Timestamp, channel count, and spectral integrity checks. Malformed/late frames are flagged and dropped.",
    side: "left"
  },
  {
    id: "encryption", 
    title: "AES encryption",
    body: "Per-packet AES-256-GCM with ECDH session keys; anti-tamper & anti-replay.",
    side: "right"
  },
  {
    id: "consent",
    title: "Consent enforcement", 
    body: "Purpose- and role-aware policy gate; only compliant windows flow.",
    side: "left"
  },
  {
    id: "anomaly",
    title: "Autoencoder rejection",
    body: "Rolling 250ms windows; frames with reconstruction error > 3σ are quarantined.",
    side: "right"
  },
  {
    id: "downstream",
    title: "Safely sent to downstream application",
    body: "Only authorized, policy-checked signals reach dashboards, research tools, or therapeutic apps.",
    side: "left"
  }
];

// EEG Signal Generation
const generateEEGPath = (modifications: any = {}) => {
  const sampleRate = 512;
  const duration = 4; // 4 seconds
  const samples = sampleRate * duration;
  const points: [number, number][] = [];
  
  for (let i = 0; i < samples; i++) {
    const t = i / sampleRate;
    
    // Base EEG signal components
    const alpha = 22 * Math.sin(2 * Math.PI * 10 * t);
    const beta = 8 * Math.sin(2 * Math.PI * 20 * t + Math.PI / 4);
    const drift = 4 * Math.sin(2 * Math.PI * 0.5 * t);
    const noise = (Math.random() - 0.5) * 6; // Pink noise approximation
    
    let eeg = alpha + beta + drift + noise;
    
    // Apply modifications based on step
    if (modifications.artifacts && !modifications.cleaned) {
      // Add artifacts for validation step
      if (t >= 0.8 && t <= 0.812) eeg += 120; // Spike at 0.8s
      if (t >= 2.0 && t <= 2.08) eeg = 0; // Dropout at 2.0s
      if (t >= 3.1 && t <= 3.16) eeg = Math.max(-80, Math.min(80, eeg)); // Saturation
    }
    
    // Clamp to visual scale
    eeg = Math.max(-80, Math.min(80, eeg));
    
    const x = (t / duration) * 1000; // Map to SVG width
    const y = 120 - (eeg / 80) * 100; // Map to SVG coordinates, centered at y=120
    
    points.push([x, y]);
  }
  
  // Convert to SVG path
  let pathString = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    pathString += ` L${points[i][0]},${points[i][1]}`;
  }
  
  return pathString;
};

// EEG Stage Component - Fixed center visualization
const EEGStage = ({ activeStepId, stepProgress }: { activeStepId: string; stepProgress: number }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Generate EEG path based on active step
  const eegPath = useMemo(() => {
    switch (activeStepId) {
      case 'validation':
        return generateEEGPath({ artifacts: true, cleaned: stepProgress > 0.4 });
      default:
        return generateEEGPath();
    }
  }, [activeStepId, stepProgress]);

  // Animation values
  const packetOpacity = activeStepId === 'encryption' ? 1 - stepProgress * 0.75 : 1;
  const lockProgress = activeStepId === 'encryption' ? stepProgress : 0;
  const gateProgress = activeStepId === 'consent' ? stepProgress : 0;
  const anomalyProgress = activeStepId === 'anomaly' ? stepProgress : 0;
  const shieldProgress = activeStepId === 'downstream' ? stepProgress : 0;

  return (
    <div 
      id="eeg-stage"
      className="sticky top-[calc(50vh-160px)] h-80 flex items-center justify-center z-20"
      style={{ height: '320px' }}
    >
      <svg 
        id="eeg-svg"
        width="1000" 
        height="240" 
        viewBox="0 0 1000 240"
        className="max-w-full h-auto"
        aria-label="Visualization of EEG data changing through XBrainer's security layers"
      >
        <defs>
          {/* Cipher mosaic pattern */}
          <pattern id="cipherPattern" patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill="#1a1a1a"/>
            <rect x="0" y="0" width="2" height="2" fill="#6EE2FF" opacity="0.6"/>
            <rect x="4" y="2" width="2" height="2" fill="#6EE2FF" opacity="0.4"/>
            <rect x="2" y="4" width="2" height="2" fill="#6EE2FF" opacity="0.8"/>
            <rect x="6" y="6" width="2" height="2" fill="#6EE2FF" opacity="0.3"/>
          </pattern>
          
          {/* Turbulence for encryption effect */}
          <filter id="cipherNoise">
            <feTurbulence baseFrequency="0.8" numOctaves="1" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
          
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
        <line x1="0" y1="120" x2="1000" y2="120" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        {/* Time ticks every second */}
        {[250, 500, 750].map(x => (
          <line key={x} x1={x} y1="115" x2={x} y2="125" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        ))}

        {/* Main EEG Path */}
        <motion.path
          id="eeg-path"
          d={eegPath}
          stroke="#6EE2FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity={packetOpacity}
          animate={{
            opacity: packetOpacity
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Validation artifacts and corrections */}
        <AnimatePresence>
          {activeStepId === 'validation' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Artifact highlights */}
              {stepProgress < 0.4 && (
                <>
                  <motion.path
                    d="M200,20 L220,220"
                    stroke="#FF5A5A"
                    strokeWidth="3.5"
                    opacity={stepProgress < 0.2 ? 1 : 0}
                    animate={{ opacity: [1, 0, 1, 0] }}
                    transition={{ duration: 0.3, repeat: 2 }}
                  />
                  <motion.path
                    d="M500,120 L540,120"
                    stroke="#FF5A5A"
                    strokeWidth="3.5"
                    strokeDasharray="6 8"
                    opacity={stepProgress < 0.2 ? 1 : 0.2}
                  />
                </>
              )}
              
              {/* Green checkmarks */}
              {stepProgress > 0.4 && (
                <>
                  {[150, 400, 650, 850].map((x, i) => (
                    <motion.text
                      key={x}
                      x={x}
                      y={80}
                      textAnchor="middle"
                      fontSize="16"
                      fill="#15D27E"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    >
                      ✓
                    </motion.text>
                  ))}
                </>
              )}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Encryption packetization and lock */}
        <AnimatePresence>
          {activeStepId === 'encryption' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Vertical packet slicers */}
              {Array.from({ length: 62 }, (_, i) => (
                <motion.line
                  key={i}
                  x1={i * 16 + 16}
                  y1={20}
                  x2={i * 16 + 16}
                  y2={220}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stepProgress * 0.6 }}
                  transition={{ delay: i * 0.01 }}
                />
              ))}

              {/* Cipher mosaic overlays */}
              {stepProgress > 0.2 && Array.from({ length: 30 }, (_, i) => (
                <motion.rect
                  key={i}
                  x={i * 32 + 8}
                  y={100}
                  width={24}
                  height={40}
                  fill="url(#cipherPattern)"
                  rx="4"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 0.8, scaleY: 1 }}
                  transition={{ delay: i * 0.02 }}
                />
              ))}

              {/* Padlock */}
              <motion.g transform="translate(450, 50)">
                <motion.rect
                  x="-12"
                  y="8"
                  width="24"
                  height="20"
                  rx="4"
                  fill="#6EE2FF"
                  opacity={lockProgress}
                />
                <motion.path
                  d="M-8,-2 L-8,-8 Q-8,-16 0,-16 Q8,-16 8,-8 L8,-2"
                  fill="none"
                  stroke="#6EE2FF"
                  strokeWidth="3"
                  initial={{ rotate: -18, y: 6 }}
                  animate={{ 
                    rotate: lockProgress > 0.4 ? 0 : -18,
                    y: lockProgress > 0.4 ? 0 : 6
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.g>

              {/* Anti-replay nonce tick */}
              <motion.circle
                cx={0}
                cy={120}
                r="2"
                fill="#9BD8FF"
                animate={{ cx: [0, 1000] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Consent enforcement gate */}
        <AnimatePresence>
          {activeStepId === 'consent' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Policy gate */}
              <motion.rect
                x="480"
                y="100"
                width="40"
                height="40"
                fill="none"
                stroke="#6EE2FF"
                strokeWidth="3"
                rx="4"
              />
              
              {/* Allowed packets with halo */}
              {Array.from({ length: 20 }, (_, i) => {
                const isAllowed = i % 10 < 7; // 70% allowed
                return (
                  <motion.g key={i}>
                    <motion.rect
                      x={i * 40 + 60}
                      y={110}
                      width="20"
                      height="20"
                      rx="4"
                      fill={isAllowed ? "#6EE2FF" : "#9AA1A9"}
                      opacity={isAllowed ? 1 : 0.3}
                      animate={{
                        scaleY: isAllowed ? 1 : gateProgress > 0.5 ? 0.1 : 1,
                        opacity: isAllowed ? 1 : gateProgress > 0.5 ? 0.2 : 0.3
                      }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    />
                    {isAllowed && (
                      <motion.rect
                        x={i * 40 + 58}
                        y={108}
                        width="24"
                        height="24"
                        rx="6"
                        fill="none"
                        stroke="#00C2FF"
                        strokeWidth="1"
                        opacity={gateProgress * 0.5}
                        filter="url(#glow)"
                      />
                    )}
                  </motion.g>
                );
              })}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Anomaly detection and quarantine */}
        <AnimatePresence>
          {activeStepId === 'anomaly' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Spectrogram background */}
              <motion.rect
                x="0"
                y="140"
                width="1000"
                height="60"
                fill="url(#cipherPattern)"
                opacity={0.15}
              />
              
              {/* Anomalous packets */}
              {[150, 400, 750].map((x, i) => (
                <motion.g key={i}>
                  <motion.rect
                    x={x}
                    y={110}
                    width="20"
                    height="20"
                    rx="4"
                    fill="#FF5A5A"
                    filter="url(#glow)"
                    animate={{
                      y: anomalyProgress > 0.3 ? [110, 115, 110, 180] : 110,
                      opacity: anomalyProgress > 0.6 ? 0 : 1
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.g>
              ))}
              
              {/* Quarantine tray */}
              <motion.rect
                x="400"
                y="190"
                width="200"
                height="30"
                rx="8"
                fill="none"
                stroke="#FF5A5A"
                strokeWidth="2"
                strokeDasharray="5 5"
                opacity={anomalyProgress > 0.3 ? 1 : 0}
              />
              
              {/* Clean packets glow */}
              {anomalyProgress > 0.6 && (
                <motion.path
                  d={eegPath}
                  stroke="#15D27E"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  opacity={0.35}
                  filter="url(#glow)"
                />
              )}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Downstream delivery */}
        <AnimatePresence>
          {activeStepId === 'downstream' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Destination icons */}
              <motion.g transform="translate(920, 100)">
                {/* Dashboard */}
                <motion.rect
                  x="0"
                  y="0"
                  width="20"
                  height="15"
                  rx="2"
                  fill="#6EE2FF"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
                
                {/* Lab Tool */}
                <motion.circle
                  cx="10"
                  cy="25"
                  r="8"
                  fill="none"
                  stroke="#6EE2FF"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                />
                
                {/* Therapeutic App */}
                <motion.path
                  d="M5,35 Q10,30 15,35 Q10,40 5,35"
                  fill="#6EE2FF"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                />
              </motion.g>

              {/* Protective shield pulse */}
              <motion.circle
                cx="930"
                cy="120"
                r="30"
                fill="none"
                stroke="#00C2FF"
                strokeWidth="2"
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: isReducedMotion ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              />
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
  progress 
}: { 
  step: typeof journeySteps[0]; 
  isActive: boolean; 
  progress: number; 
}) => {
  const isLeft = step.side === 'left';
  
  return (
    <motion.div
      className={`
        sticky top-1/2 -translate-y-1/2 w-[34ch] z-30
        ${isLeft ? 'left-[6vw] text-right' : 'right-[6vw] text-left'}
      `}
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
      <motion.div className="bg-card/90 backdrop-blur-sm border rounded-xl p-6 shadow-elegant">
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

  // Calculate step progress and active step
  const stepProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, journeySteps.length]
  );

  useEffect(() => {
    return stepProgress.on("change", (latest) => {
      const newActiveIndex = Math.min(
        Math.floor(latest), 
        journeySteps.length - 1
      );
      if (newActiveIndex !== activeStepIndex) {
        setActiveStepIndex(newActiveIndex);
      }
    });
  }, [stepProgress, activeStepIndex]);

  const currentStepProgress = useTransform(
    scrollYProgress,
    [
      activeStepIndex / journeySteps.length,
      (activeStepIndex + 1) / journeySteps.length
    ],
    [0, 1]
  );

  const activeStep = journeySteps[activeStepIndex];

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && activeStepIndex < journeySteps.length - 1) {
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
      <EEGStage 
        activeStepId={activeStep.id} 
        stepProgress={currentStepProgress.get()} 
      />

      {/* Step sections for scroll snapping */}
      {journeySteps.map((step, index) => (
        <div 
          key={step.id}
          className="h-screen scroll-snap-start relative"
          style={{ scrollSnapAlign: 'start' }}
        >
          <SidePanel
            step={step}
            isActive={index === activeStepIndex}
            progress={index === activeStepIndex ? currentStepProgress.get() : 0}
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