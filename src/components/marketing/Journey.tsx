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

// Visual icon components
const VisualIcon = ({ icon, hint, isActive }: { icon: string; hint: string; isActive: boolean }) => {
  const iconComponents = {
    "wave-in": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M10,50 Q30,20 50,50 T90,50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100 animate-pulse' : 'opacity-40'}`}
        />
        <circle cx="15" cy="45" r="2" fill="currentColor" className={isActive ? 'animate-bounce' : ''} />
        <circle cx="85" cy="55" r="2" fill="currentColor" className={isActive ? 'animate-bounce' : ''} />
      </svg>
    ),
    "shield-scan": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M50,10 L30,20 L30,50 Q30,70 50,85 Q70,70 70,50 L70,20 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <line x1="40" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="1" className={isActive ? 'animate-pulse' : ''} />
        <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "lock": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect 
          x="30" y="45" width="40" height="35" rx="3" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <path 
          d="M40,45 L40,35 Q40,25 50,25 Q60,25 60,35 L60,45" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        />
        <circle cx="50" cy="62" r="3" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "flow": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M20,30 L50,30 L50,50 L80,50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <circle cx="50" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="75,45 85,50 75,55" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "ai-chip": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect 
          x="25" y="25" width="50" height="50" rx="5" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <circle cx="40" cy="40" r="3" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
        <circle cx="60" cy="40" r="3" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
        <circle cx="50" cy="60" r="3" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "eye-strike": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse 
          cx="50" cy="50" rx="30" ry="15" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="3" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "finger-brain": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse 
          cx="50" cy="40" rx="20" ry="15" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <rect x="45" y="55" width="10" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="45" cy="35" r="2" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
        <circle cx="55" cy="35" r="2" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "ledger": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect 
          x="25" y="20" width="50" height="60" rx="3" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="1" />
        <line x1="35" y1="55" x2="65" y2="55" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="35" r="2" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "api": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect 
          x="20" y="30" width="25" height="40" rx="3" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <rect x="55" y="30" width="25" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M45,45 L55,45" stroke="currentColor" strokeWidth="2" className={isActive ? 'animate-pulse' : ''} />
        <path d="M45,55 L55,55" stroke="currentColor" strokeWidth="2" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    ),
    "target": (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle 
          cx="50" cy="50" r="25" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40'}`}
        />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="5" fill="currentColor" className={isActive ? 'animate-pulse' : ''} />
      </svg>
    )
  };

  return (
    <div className="relative w-32 h-32 mx-auto mb-4 text-primary">
      {iconComponents[icon as keyof typeof iconComponents]}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground text-center">
        {hint}
      </div>
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{journeyData.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">{journeyData.subtitle}</p>
          <a 
            href="#journey-end"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Skip to end of journey"
          >
            Skip to end <ChevronDown className="ml-1 h-4 w-4" />
          </a>
        </div>

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