import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform,
  AnimatePresence 
} from 'framer-motion';

// Journey configuration (inline for SSR)
const journeyConfig = {
  eeg: {
    duration_s: 4,
    fs_hz: 512,
    amp_uv: 80,
    map: { x_px_start: 60, x_px_end: 1040, y_px_center: 130, y_px_scale: 90 }
  },
  steps: [
    {
      id: "validation",
      side: "left",
      title: "Validation",
      body: "Timestamp, channel count, and spectral integrity checks. Malformed or late frames are flagged and dropped."
    },
    {
      id: "encryption",
      side: "right", 
      title: "AES encryption",
      body: "Per-packet AES-256-GCM with ECDH session keys; anti-tamper & anti-replay."
    },
    {
      id: "consent",
      side: "left",
      title: "Consent enforcement",
      body: "Purpose- and role-aware policy gate; only permitted views flow."
    },
    {
      id: "autoencoder",
      side: "right",
      title: "Autoencoder rejection", 
      body: "Rolling 250ms windows; frames with reconstruction error > 3σ are quarantined."
    },
    {
      id: "downstream",
      side: "left",
      title: "Safely sent to downstream application",
      body: "Authorized, policy-checked data delivered to dashboards, research tools, and therapeutic apps with full traceability."
    }
  ]
};

// EEG Signal Generation
const generateEEGSignal = (stepId: string, stepProgress: number) => {
  const { duration_s, fs_hz, amp_uv, map } = journeyConfig.eeg;
  const samples = Math.floor(duration_s * fs_hz);
  const points: [number, number][] = [];
  
  for (let i = 0; i < samples; i++) {
    const t = i / fs_hz;
    
    // Base EEG components
    const alpha = 22 * Math.sin(2 * Math.PI * 10 * t);
    const beta = 8 * Math.sin(2 * Math.PI * 20 * t + 1.2);
    const drift = 3 * Math.sin(2 * Math.PI * 0.4 * t);
    const noise = (Math.random() - 0.5) * 6;
    
    let eeg = alpha + beta + drift + noise;
    
    // Apply artifacts for validation step
    if (stepId === 'validation' && stepProgress < 0.5) {
      if (t >= 0.82 && t <= 0.832) eeg += 120; // Spike
      if (t >= 2.04 && t <= 2.12) eeg = 0; // Dropout  
      if (t >= 3.12 && t <= 3.18) eeg = Math.max(-80, Math.min(80, eeg)); // Saturation
    }
    
    // Clamp to visual scale
    eeg = Math.max(-amp_uv, Math.min(amp_uv, eeg));
    
    // Map to SVG coordinates
    const x = map.x_px_start + (t / duration_s) * (map.x_px_end - map.x_px_start);
    const y = map.y_px_center - (eeg / amp_uv) * map.y_px_scale;
    
    points.push([x, y]);
  }
  
  // Convert to SVG path
  let pathString = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    pathString += ` L${points[i][0]},${points[i][1]}`;
  }
  
  return pathString;
};

// EEG Stage Component
const EEGStage = ({ activeStepId, stepProgress }: { activeStepId: string; stepProgress: number }) => {
  const eegPath = useMemo(() => generateEEGSignal(activeStepId, stepProgress), [activeStepId, stepProgress]);
  
  return (
    <div 
      id="eeg-stage"
      className="sticky top-[calc(50vh-160px)] h-80 flex items-center justify-center z-20"
    >
      <svg 
        width="1100" 
        height="260" 
        viewBox="0 0 1100 260"
        className="max-w-full h-auto"
        role="img"
        aria-label="Visualization of a single EEG waveform being secured by XBrainer in five steps"
      >
        <defs>
          <filter id="xbr-cipher" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" seed="7" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          
          <pattern id="xbr-hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#9AA1A9" strokeWidth="2" strokeOpacity="0.6"/>
          </pattern>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Baseline grid */}
        <line x1="60" y1="130" x2="1040" y2="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        {[305, 550, 795].map(x => (
          <line key={x} x1={x} y1="125" x2={x} y2="135" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        ))}

        {/* Main EEG Path */}
        <motion.path
          d={eegPath}
          stroke="#6EE2FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity={activeStepId === 'encryption' && stepProgress > 0.25 ? 0.25 : 0.9}
        />

        {/* Step-specific visualizations */}
        <AnimatePresence>
          {activeStepId === 'validation' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {stepProgress < 0.5 && (
                <>
                  <motion.circle cx={315} cy={50} r="8" fill="none" stroke="#FF5A5A" strokeWidth="3" 
                    animate={{ opacity: [1, 0, 1, 0] }} transition={{ duration: 0.16, repeat: 2 }}/>
                  <motion.rect x={520} y={125} width={40} height={10} fill="none" stroke="#FF5A5A" 
                    strokeWidth="2" strokeDasharray="6 8" opacity={0.8}/>
                </>
              )}
              {stepProgress > 0.5 && [315, 540, 765].map((x, i) => (
                <motion.text key={x} x={x} y={70} textAnchor="middle" fontSize="18" fill="#15D27E"
                  initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}>✓</motion.text>
              ))}
            </motion.g>
          )}
          
          {activeStepId === 'encryption' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {Array.from({ length: 15 }, (_, i) => (
                <motion.rect key={i} x={i * 64 + 60} y={110} width={56} height={40} rx="6"
                  fill="#6EE2FF" filter="url(#xbr-cipher)" 
                  initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 0.8, scaleY: 1 }}
                  transition={{ delay: i * 0.05 }}/>
              ))}
              <motion.svg x="500" y="60" width="18" height="18">
                <use href="#xbr-lock"/>
              </motion.svg>
            </motion.g>
          )}
          
          {activeStepId === 'consent' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {Array.from({ length: 15 }, (_, i) => {
                const isAllowed = i % 10 < 7;
                return (
                  <motion.g key={i}>
                    {isAllowed ? (
                      <motion.rect x={i * 64 + 58} y={108} width={60} height={44} rx="6" 
                        fill="none" stroke="#00C2FF" strokeWidth="2" opacity={stepProgress * 0.6} filter="url(#glow)"/>
                    ) : (
                      <>
                        <motion.rect x={i * 64 + 60} y={110} width={56} height={40} 
                          fill="url(#xbr-hatch)" opacity={stepProgress * 0.6}/>
                        <motion.svg x={i * 64 + 82} y="125" width="12" height="12">
                          <use href="#xbr-lock"/>
                        </motion.svg>
                      </>
                    )}
                  </motion.g>
                );
              })}
            </motion.g>
          )}
          
          {activeStepId === 'autoencoder' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.path d={eegPath} stroke="#B7F0FF" strokeWidth="1.5" strokeLinecap="round" 
                fill="none" opacity={stepProgress * 0.7} strokeDasharray="2 4"/>
              {[200, 500, 800].map((x, i) => (
                <motion.rect key={i} x={x} y={110} width={40} height={40} rx="4" fill="#FF5A5A" filter="url(#glow)"
                  animate={{ y: stepProgress > 0.6 ? [110, 115, 110, 220] : 110, opacity: stepProgress > 0.8 ? 0 : 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2, ease: "easeInOut" }}/>
              ))}
              <motion.rect x="400" y="220" width="200" height="30" rx="8" fill="none" 
                stroke="#FF5A5A" strokeWidth="2" strokeDasharray="5 5" 
                opacity={stepProgress > 0.3 ? 1 : 0}/>
            </motion.g>
          )}
          
          {activeStepId === 'downstream' && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.g transform="translate(980, 80)">
                {[{ icon: "xbr-dashboard", y: 0 }, { icon: "xbr-lab", y: 25 }, { icon: "xbr-therapy", y: 50 }].map((dest, i) => (
                  <motion.svg key={dest.icon} x="0" y={dest.y} width="20" height="20"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.2 }}>
                    <use href={`#${dest.icon}`}/>
                  </motion.svg>
                ))}
              </motion.g>
              <motion.circle cx="990" cy="130" r="35" fill="none" stroke="#00C2FF" strokeWidth="2"
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}/>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

// Side Panel Component  
const SidePanel = ({ step, isActive }: { step: typeof journeyConfig.steps[0]; isActive: boolean }) => {
  const isLeft = step.side === 'left';
  
  return (
    <motion.div
      className={`sticky top-1/2 -translate-y-1/2 w-[36ch] z-30 ${isLeft ? 'left-[6vw] text-right' : 'right-[6vw] text-left'}`}
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: isActive ? 0 : 16, opacity: isActive ? 1 : 0.2 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="bg-card/90 backdrop-blur-sm border rounded-xl p-6 shadow-elegant">
        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{step.body}</p>
      </div>
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

  const stepProgress = useTransform(scrollYProgress, [0, 1], [0, journeyConfig.steps.length]);

  useEffect(() => {
    return stepProgress.on("change", (latest) => {
      const newActiveIndex = Math.min(Math.floor(latest), journeyConfig.steps.length - 1);
      if (newActiveIndex !== activeStepIndex) {
        setActiveStepIndex(newActiveIndex);
      }
    });
  }, [stepProgress, activeStepIndex]);

  const currentStepProgress = useTransform(
    scrollYProgress,
    [activeStepIndex / journeyConfig.steps.length, (activeStepIndex + 1) / journeyConfig.steps.length],
    [0, 1]
  );

  const activeStep = journeyConfig.steps[activeStepIndex];

  return (
    <section 
      id="xbr-journey"
      ref={containerRef}
      className="relative bg-background"
      style={{ height: '500vh' }}
      tabIndex={0}
      aria-label="XBrainer Security Journey"
    >
      <EEGStage activeStepId={activeStep.id} stepProgress={currentStepProgress.get()}/>
      
      {journeyConfig.steps.map((step, index) => (
        <div key={step.id} className="h-screen relative">
          <SidePanel step={step} isActive={index === activeStepIndex}/>
        </div>
      ))}
    </section>
  );
};

export default Journey;