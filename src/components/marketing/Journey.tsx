import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, CheckCircle2, Brain, Database, ChevronDown, ArrowRight } from 'lucide-react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue 
} from 'framer-motion';

const journeyData = {
  title: "XBrainer EEG Security Pipeline",
  subtitle: "Watch your neural data transform through our security layers",
  cta: { label: "Explore SDKs", href: "/docs" },
  steps: [
    {
      id: "validation",
      title: "Validation",
      headline: "Signal integrity checks",
      body: "We check timestamps, channel counts, and signal integrity, dropping malformed or late frames.",
      points: ["Timestamp validation", "Channel verification", "Artifact detection"]
    },
    {
      id: "encryption",
      title: "AES Encryption", 
      headline: "Secure packet sealing",
      body: "Every packet is sealed with AES-256-GCM using session keys.",
      points: ["AES-256-GCM encryption", "Session key management", "Anti-replay protection"]
    },
    {
      id: "consent",
      title: "Consent Enforcement",
      headline: "Policy-based access control",
      body: "Only policy-compliant signals flow forward.",
      points: ["Dynamic policy evaluation", "Access control gates", "Revocation handling"]
    },
    {
      id: "anomaly",
      title: "Autoencoder Rejection",
      headline: "Anomaly detection",
      body: "Anomaly detector drops spoofed or out-of-distribution frames.",
      points: ["Real-time scoring", "Outlier quarantine", "Monitoring metrics"]
    },
    {
      id: "downstream",
      title: "Secure Delivery",
      headline: "Authorized data delivery",
      body: "Only authorized, policy-checked data is delivered to research and therapeutic tools.",
      points: ["End-to-end security", "Traceability", "Performance optimization"]
    }
  ]
};

// Generate EEG waveform data
const generateEEGData = (points: number, noise: number = 0.3, artifacts: boolean = false) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    const x = i / points;
    let y = Math.sin(x * Math.PI * 8) * 0.3 + Math.sin(x * Math.PI * 20) * 0.15; // Alpha waves + beta
    y += (Math.random() - 0.5) * noise; // Add noise
    
    if (artifacts && Math.random() < 0.1) {
      y += (Math.random() - 0.5) * 2; // Add artifacts
    }
    
    data.push({ x: x * 800, y: 150 + y * 50 });
  }
  return data;
};

// Convert data points to SVG path
const dataToPath = (data: Array<{x: number, y: number}>) => {
  return data.reduce((path, point, i) => {
    const command = i === 0 ? 'M' : 'L';
    return `${path} ${command} ${point.x} ${point.y}`;
  }, '');
};

// EEG Waveform Component
const EEGWaveform = ({ activeStepId, stepProgress }: { activeStepId: string; stepProgress: number }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Generate waveform based on active step
  const getWaveformData = () => {
    switch (activeStepId) {
      case 'validation':
        const rawData = generateEEGData(200, 0.5, true);
        const cleanData = generateEEGData(200, 0.2, false);
        return {
          raw: dataToPath(rawData),
          clean: dataToPath(cleanData),
          showArtifacts: true
        };
      
      case 'encryption':
        return {
          packets: true,
          encrypted: stepProgress > 0.5
        };
      
      case 'consent':
        return {
          gatePosition: 400,
          allowedPath: stepProgress > 0.3,
          blockedPackets: stepProgress > 0.6
        };
      
      case 'anomaly':
        return {
          spectrogram: true,
          anomalies: stepProgress > 0.4,
          quarantine: stepProgress > 0.7
        };
      
      case 'downstream':
        return {
          stable: true,
          destinations: stepProgress > 0.5
        };
      
      default:
        return { normal: dataToPath(generateEEGData(200, 0.3)) };
    }
  };

  const waveformState = getWaveformData();

  return (
    <div className="sticky top-1/2 -translate-y-1/2 w-full h-40 bg-card/50 backdrop-blur border rounded-xl p-6 shadow-lg overflow-hidden">
      <svg viewBox="0 0 800 120" className="w-full h-full" aria-label="EEG data visualization">
        <defs>
          <pattern id="cipherPattern" patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill="hsl(var(--primary)/0.1)"/>
            <rect width="4" height="4" fill="hsl(var(--primary)/0.3)"/>
            <rect x="4" y="4" width="4" height="4" fill="hsl(var(--primary)/0.3)"/>
          </pattern>
          <linearGradient id="spectrogramGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
          </linearGradient>
        </defs>

        {/* Baseline EEG waveform */}
        {activeStepId === 'validation' && (
          <>
            {/* Raw signal with artifacts */}
            <motion.path
              d={waveformState.raw}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="2"
              opacity={1 - stepProgress}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Clean signal */}
            <motion.path
              d={waveformState.clean}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              opacity={stepProgress}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
            
            {/* Validation checkmarks */}
            {stepProgress > 0.5 && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {[200, 400, 600].map((x, i) => (
                  <motion.g key={i}>
                    <motion.circle
                      cx={x}
                      cy={40}
                      r="12"
                      fill="hsl(var(--success))"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                    />
                    <motion.text
                      x={x}
                      y={45}
                      textAnchor="middle"
                      fontSize="12"
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.2 + 0.1 }}
                    >
                      ✓
                    </motion.text>
                  </motion.g>
                ))}
              </motion.g>
            )}
          </>
        )}

        {/* Encryption - packets with cipher pattern */}
        {activeStepId === 'encryption' && (
          <>
            {/* Signal as discrete packets */}
            <motion.g>
              {[...Array(8)].map((_, i) => (
                <motion.rect
                  key={i}
                  x={50 + i * 90}
                  y={50}
                  width="60"
                  height="20"
                  rx="4"
                  fill={waveformState.encrypted ? "url(#cipherPattern)" : "hsl(var(--primary))"}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                />
              ))}
            </motion.g>
            
            {/* Lock icon */}
            {stepProgress > 0.3 && (
              <motion.g
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Lock className="w-6 h-6" x={350} y={20} />
              </motion.g>
            )}
          </>
        )}

        {/* Consent - policy gate */}
        {activeStepId === 'consent' && (
          <>
            {/* Packets approaching gate */}
            <motion.g>
              {[...Array(6)].map((_, i) => (
                <motion.rect
                  key={i}
                  x={0}
                  y={50}
                  width="40"
                  height="20"
                  rx="4"
                  fill={i < 4 ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                  animate={{
                    x: [50 + i * 60, waveformState.gatePosition + (i < 4 ? 100 : -50)],
                    opacity: i >= 4 && waveformState.blockedPackets ? 0 : 1
                  }}
                  transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }}
                />
              ))}
            </motion.g>
            
            {/* Policy gate */}
            <motion.rect
              x={390}
              y={30}
              width="20"
              height="60"
              fill="hsl(var(--secondary))"
              animate={{ 
                rotateY: waveformState.allowedPath ? 60 : 0 
              }}
              style={{ transformOrigin: '400px 60px' }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Policy icon */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Shield className="w-5 h-5" x={385} y={10} />
            </motion.g>
          </>
        )}

        {/* Anomaly detection - spectrogram and quarantine */}
        {activeStepId === 'anomaly' && (
          <>
            {/* Spectrogram background */}
            <motion.rect
              x={0}
              y={80}
              width={800}
              height={40}
              fill="url(#spectrogramGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: waveformState.spectrogram ? 0.5 : 0 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Normal packets */}
            <motion.g>
              {[...Array(8)].map((_, i) => (
                <motion.rect
                  key={i}
                  x={50 + i * 90}
                  y={50}
                  width="60"
                  height="20"
                  rx="4"
                  fill="hsl(var(--success))"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </motion.g>
            
            {/* Anomalous packets */}
            {waveformState.anomalies && (
              <motion.g>
                {[2, 5].map((i) => (
                  <motion.rect
                    key={i}
                    x={50 + i * 90}
                    y={50}
                    width="60"
                    height="20"
                    rx="4"
                    fill="hsl(var(--destructive))"
                    animate={{
                      scale: [1, 1.1, 1],
                      y: waveformState.quarantine ? [50, 100] : [50]
                    }}
                    transition={{ 
                      scale: { duration: 0.5, repeat: 3 },
                      y: { duration: 0.8, delay: 1.5 }
                    }}
                  />
                ))}
              </motion.g>
            )}
            
            {/* Quarantine bin */}
            {waveformState.quarantine && (
              <motion.rect
                x={100}
                y={100}
                width={120}
                height={15}
                rx="8"
                fill="hsl(var(--destructive)/0.2)"
                stroke="hsl(var(--destructive))"
                strokeWidth="2"
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 100 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </>
        )}

        {/* Downstream - stable delivery */}
        {activeStepId === 'downstream' && (
          <>
            {/* Stable waveform */}
            <motion.path
              d={dataToPath(generateEEGData(200, 0.1))}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Destination icons */}
            {waveformState.destinations && (
              <motion.g
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, staggerChildren: 0.2 }}
              >
                <motion.g>
                  <Database className="w-8 h-8" x={700} y={20} />
                  <motion.text x={720} y={45} fontSize="10" fill="hsl(var(--muted-foreground))">
                    Research
                  </motion.text>
                </motion.g>
                
                <motion.g>
                  <Brain className="w-8 h-8" x={700} y={60} />
                  <motion.text x={720} y={85} fontSize="10" fill="hsl(var(--muted-foreground))">
                    Therapy
                  </motion.text>
                </motion.g>
                
                {/* Protection shield */}
                <motion.circle
                  cx={720}
                  cy={55}
                  r={35}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  opacity={0.3}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.g>
            )}
          </>
        )}
      </svg>
    </div>
  );
};

const Journey = () => {
  const [activeStepId, setActiveStepId] = useState(journeyData.steps[0].id);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<{ [key: string]: HTMLDivElement }>({});

  // Scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const activeStepIndex = journeyData.steps.findIndex(step => step.id === activeStepId);
  const stepProgress = useTransform(
    scrollYProgress, 
    [activeStepIndex / journeyData.steps.length, (activeStepIndex + 1) / journeyData.steps.length], 
    [0, 1]
  );

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const stepId = entry.target.getAttribute('data-step-id');
            if (stepId) setActiveStepId(stepId);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' }
    );

    Object.values(stepRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target !== document.body) return;
      
      const currentIndex = journeyData.steps.findIndex(step => step.id === activeStepId);
      let targetIndex = -1;

      if (e.key === 'ArrowDown' && currentIndex < journeyData.steps.length - 1) {
        targetIndex = currentIndex + 1;
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        targetIndex = currentIndex - 1;
      }

      if (targetIndex >= 0) {
        e.preventDefault();
        const targetStep = journeyData.steps[targetIndex];
        const targetRef = stepRefs.current[targetStep.id];
        if (targetRef) {
          targetRef.scrollIntoView({ 
            behavior: isReducedMotion ? 'auto' : 'smooth', 
            block: 'start' 
          });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeStepId, isReducedMotion]);

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="journey" className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {journeyData.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {journeyData.subtitle}
          </motion.p>
          <motion.a 
            href="#journey-end"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Skip to end of journey"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Skip to end <ChevronDown className="ml-1 h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Journey Content */}
        <div 
          ref={containerRef}
          className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start"
          style={{ scrollSnapType: 'y mandatory' }}
        >
          {/* Sticky Visual Panel - Desktop */}
          <div className="hidden lg:block lg:sticky lg:top-32">
            <EEGWaveform 
              activeStepId={activeStepId} 
              stepProgress={stepProgress.get ? stepProgress.get() : 0} 
            />
            
            {/* Progress Indicator */}
            <div className="mt-8 bg-card border rounded-xl p-6 shadow-elegant">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{activeStepIndex + 1} / {journeyData.steps.length}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div 
                  className="bg-gradient-primary h-2 rounded-full"
                  style={{ width: progress.get ? progress.get() + '%' : '0%' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-4">
                {journeyData.steps.map((step, index) => (
                  <motion.button
                    key={step.id}
                    onClick={() => {
                      const targetRef = stepRefs.current[step.id];
                      if (targetRef) {
                        targetRef.scrollIntoView({ 
                          behavior: isReducedMotion ? 'auto' : 'smooth', 
                          block: 'start' 
                        });
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index <= activeStepIndex 
                        ? 'bg-primary shadow-glow' 
                        : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {journeyData.steps.map((step, index) => (
              <motion.div
                key={step.id}
                ref={(el) => {
                  if (el) stepRefs.current[step.id] = el;
                }}
                data-step-id={step.id}
                className="min-h-screen lg:min-h-[80vh] flex flex-col justify-center py-16 lg:py-24"
                style={{ scrollSnapAlign: 'start' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Mobile Visual */}
                <div className="lg:hidden mb-8">
                  <EEGWaveform 
                    activeStepId={step.id} 
                    stepProgress={step.id === activeStepId ? 1 : 0} 
                  />
                </div>

                {/* Step Content */}
                <motion.div 
                  className="transition-all duration-300"
                  animate={{
                    opacity: step.id === activeStepId || isReducedMotion ? 1 : 0.7,
                    y: step.id === activeStepId || isReducedMotion ? 0 : 8
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div 
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span 
                      className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full mr-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {index + 1}
                    </motion.span>
                    <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wide">
                      {step.title}
                    </h3>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-3xl lg:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {step.headline}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-lg text-muted-foreground mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {step.body}
                  </motion.p>
                  
                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, staggerChildren: 0.1 }}
                  >
                    {step.points.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + pointIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + pointIndex * 0.1, type: "spring" }}
                        />
                        <span className="text-muted-foreground">{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          id="journey-end" 
          className="text-center mt-24 pt-16 border-t"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to integrate XBrainer?
          </motion.h3>
          <motion.a
            href={journeyData.cta.href}
            className="inline-flex items-center bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {journeyData.cta.label}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;