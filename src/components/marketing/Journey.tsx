import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useMotionValue,
  AnimatePresence 
} from 'framer-motion';

const journeyData = {
  title: "How XBrainer Secures Your EEG Stream",
  subtitle: "Scroll to see our on-device security pipeline in action",
  cta: { label: "Explore SDKs", href: "/docs" },
  steps: [
    {
      id: "ingestion",
      title: "Data ingestion",
      headline: "Connect EEG/IMU streams",
      body: "Multi-protocol adapters (BLE/USB/TCP) → schema-normalized ring buffer with backpressure.",
      points: ["Schema validation", "Live→disk logging (optional)"],
      animState: "packets_in+schema_ok+buffer_fill"
    },
    {
      id: "verification",
      title: "Verification & integrity checks",
      headline: "Validate + drop malformed frames",
      body: "Timestamp/channel/µV range checks; artifact detection; late frames dropped.",
      points: ["Drift compensation", "Discard malformed"],
      animState: "validators_on+bad_drop"
    },
    {
      id: "encryption",
      title: "AES encryption",
      headline: "Seal packets with AES-256-GCM",
      body: "ECDH session keys, anti-tamper & anti-replay.",
      points: ["Per-packet AEAD", "Nonce discipline"],
      animState: "lock_tunnel+padlock_shimmer"
    },
    {
      id: "routing-consent",
      title: "Routing & consent policy",
      headline: "Purpose/user/device↦policy",
      body: "Microsecond JSON/DSL evaluation; TTL & revocation.",
      points: ["Trust boundaries", "Dynamic rewrites"],
      animState: "gate_branch+block_reject"
    },
    {
      id: "anomaly-detection",
      title: "Anomaly detection",
      headline: "Autoencoder quarantine >3σ",
      body: "Rolling window scoring; metrics exposed.",
      points: ["Jitter/loss/error counters", "Quarantine loop"],
      animState: "outlier_glow+quarantine+metrics_tick"
    },
    {
      id: "privacy-redaction",
      title: "Privacy redaction",
      headline: "Mask sensitive windows",
      body: "Policy-driven redaction of identifiable/cognitive patterns.",
      points: ["Confidence tagging", "Audit labels"],
      animState: "mask_bands+striped_packets"
    },
    {
      id: "brainprint-auth",
      title: "Brainprint authentication",
      headline: "Passive EEG biometric",
      body: "Local Siamese match (~55ms); OAuth2 fallback.",
      points: ["Revocable embeddings", "Entropy injection"],
      animState: "match_meter+halo_packets"
    },
    {
      id: "audit-logging",
      title: "Immutable audit logging",
      headline: "Hash-chained ledger",
      body: "Consent/decrypt/anomaly events chained & exportable.",
      points: ["Chain of custody", "SIEM ready"],
      animState: "ledger_blocks+hash_link"
    },
    {
      id: "sdk-access",
      title: "SDK & access gateway",
      headline: "Python/TS SDKs + APIs",
      body: "REST/gRPC/WebSocket with backpressure and heartbeats.",
      points: ["Rate limiting", "Reconnection"],
      animState: "client_node+rate_limiter"
    },
    {
      id: "downstream",
      title: "Safely sent to downstream application",
      headline: "Security preserved end-to-end",
      body: "Only authorized, policy-compliant data reaches tools and apps.",
      points: ["Traceable", "<150ms target"],
      animState: "dest_icons+shield_pulse"
    }
  ]
};

// Animated Visual Component
const StickyVisual = ({ activeStepId, stepProgress }: { activeStepId: string; stepProgress: number }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation values based on active step and progress
  const lockOpacity = activeStepId === 'encryption' ? stepProgress : 0;
  const gateAngle = activeStepId === 'routing-consent' ? stepProgress * 45 : 0;
  const anomalyGlow = activeStepId === 'anomaly-detection' ? stepProgress : 0;
  const maskWidth = activeStepId === 'privacy-redaction' ? stepProgress * 100 : 0;
  const authMeter = activeStepId === 'brainprint-auth' ? stepProgress * 100 : 0;
  const ledgerBlocks = activeStepId === 'audit-logging' ? Math.floor(stepProgress * 5) : 0;

  return (
    <div className="relative w-full h-96 bg-card border rounded-xl p-8 shadow-elegant overflow-hidden">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <pattern id="maskPattern" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="hsl(var(--muted))"/>
            <rect width="2" height="4" fill="hsl(var(--muted-foreground))"/>
          </pattern>
        </defs>

        {/* Background pipeline */}
        <motion.path
          d="M40,150 L360,150"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data packets flowing */}
        <g id="packets">
          {[...Array(5)].map((_, i) => (
            <motion.rect
              key={i}
              x={0}
              y={140}
              width="20"
              height="20"
              rx="4"
              fill="hsl(var(--primary))"
              opacity={0.7}
              animate={{
                x: [40 + i * 40, 360 + i * 40],
                opacity: [0, 0.7, 0.7, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </g>

        {/* Protocol badges (ingestion) */}
        <AnimatePresence>
          {activeStepId === 'ingestion' && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, staggerChildren: 0.1 }}
            >
              {['BLE', 'USB', 'TCP'].map((protocol, i) => (
                <motion.g key={protocol}>
                  <motion.rect
                    x={60 + i * 80}
                    y={100}
                    width="50"
                    height="20"
                    rx="10"
                    fill="hsl(var(--secondary))"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                  <motion.text
                    x={85 + i * 80}
                    y={114}
                    textAnchor="middle"
                    fontSize="10"
                    fill="hsl(var(--secondary-foreground))"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {protocol}
                  </motion.text>
                </motion.g>
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Verification validators */}
        <AnimatePresence>
          {activeStepId === 'verification' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.circle
                cx="150"
                cy="120"
                r="15"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              />
              <motion.text
                x="150"
                y="125"
                textAnchor="middle"
                fontSize="12"
                fill="hsl(var(--success))"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                ✓
              </motion.text>
            </motion.g>
          )}
        </AnimatePresence>

        {/* Encryption lock */}
        <AnimatePresence>
          {activeStepId === 'encryption' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.rect
                x="180"
                y="130"
                width="40"
                height="40"
                rx="8"
                fill="hsl(var(--primary))"
                fillOpacity={lockOpacity}
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, ease: "backOut" }}
              />
              <motion.path
                d="M190,140 L190,135 Q190,125 200,125 Q210,125 210,135 L210,140"
                fill="none"
                stroke="hsl(var(--primary-foreground))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Policy gate */}
        <AnimatePresence>
          {activeStepId === 'routing-consent' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.rect
                x="200"
                y="140"
                width="30"
                height="20"
                fill="hsl(var(--secondary))"
                animate={{ rotate: gateAngle }}
                style={{ transformOrigin: '200px 150px' }}
              />
              <motion.path
                d="M240,150 L280,130"
                stroke="hsl(var(--success))"
                strokeWidth="3"
                opacity={stepProgress}
              />
              <motion.path
                d="M240,150 L280,170"
                stroke="hsl(var(--destructive))"
                strokeWidth="3"
                opacity={1 - stepProgress}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Anomaly detection */}
        <AnimatePresence>
          {activeStepId === 'anomaly-detection' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.circle
                cx="200"
                cy="150"
                r="20"
                fill="none"
                stroke="hsl(var(--destructive))"
                strokeWidth="2"
                opacity={anomalyGlow}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.path
                d="M220,150 Q240,130 260,150"
                fill="none"
                stroke="hsl(var(--warning))"
                strokeWidth="2"
                opacity={stepProgress}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Privacy redaction mask */}
        <AnimatePresence>
          {activeStepId === 'privacy-redaction' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.rect
                x="150"
                y="130"
                width={maskWidth}
                height="40"
                fill="url(#maskPattern)"
                opacity={0.8}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Brainprint auth meter */}
        <AnimatePresence>
          {activeStepId === 'brainprint-auth' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.circle
                cx="200"
                cy="120"
                r="25"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="4"
              />
              <motion.circle
                cx="200"
                cy="120"
                r="25"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="4"
                strokeDasharray={`${authMeter * 1.57} 157`}
                strokeLinecap="round"
                transform="rotate(-90 200 120)"
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* Audit logging blocks */}
        <AnimatePresence>
          {activeStepId === 'audit-logging' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(ledgerBlocks)].map((_, i) => (
                <motion.g key={i}>
                  <motion.rect
                    x={280 + i * 15}
                    y={135}
                    width="12"
                    height="30"
                    fill="hsl(var(--secondary))"
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 135, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  />
                  {i > 0 && (
                    <motion.line
                      x1={275 + i * 15}
                      y1={150}
                      x2={280 + i * 15}
                      y2={150}
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    />
                  )}
                </motion.g>
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* Downstream shield pulse */}
        <AnimatePresence>
          {activeStepId === 'downstream' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.circle
                cx="320"
                cy="150"
                r="20"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
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
            <StickyVisual 
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
                  <StickyVisual 
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
              <ArrowDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;