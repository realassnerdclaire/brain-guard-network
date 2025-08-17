import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';

const journeyData = {
  title: "How XBrainer Secures Your EEG Stream",
  subtitle: "A step-by-step view of our neural security pipeline",
  cta: { label: "See SDK Examples", href: "/docs" },
  steps: [
    {
      id: "ingestion",
      title: "Data ingestion",
      headline: "Connect EEG/IMU streams in real time",
      body: "We ingest multi-protocol signals (BLE, USB, TCP) into a schema-normalized buffer with overflow protection and live→disk recording options.",
      key_points: [
        "Multi-protocol adapters; schema validation",
        "Ring buffer with backpressure; lossless logging (optional)"
      ],
      visual: { icon: "wave-in", hint: "Live frames entering a buffer" }
    },
    {
      id: "verification",
      title: "Verification & integrity checks",
      headline: "Validate timestamps, channels, and spectral ranges",
      body: "We run time- and frequency-domain integrity checks, synchronize clocks, and drop malformed/late frames.",
      key_points: [
        "µV range checks; artifact detection",
        "Timestamp sync & drift compensation"
      ],
      visual: { icon: "shield-scan", hint: "Frames flagged/validated" }
    },
    {
      id: "encryption",
      title: "AES encryption",
      headline: "Encrypt every packet on device",
      body: "Packets are sealed with AES-256-GCM using session keys from ECDH. Schema is validated pre-decrypt; tampering/replay is rejected.",
      key_points: [
        "AES-256-GCM; ECDH session keys",
        "Authenticated encryption; anti-replay"
      ],
      visual: { icon: "lock", hint: "Ciphertext packets" }
    },
    {
      id: "routing-consent",
      title: "Routing & consent policy",
      headline: "Enforce consent with a programmable policy engine",
      body: "A JSON/DSL policy (cached by session) gates access path by user, device, and purpose — evaluated in microseconds per frame.",
      key_points: [
        "Role-/purpose-based rules; TTL & revocation",
        "Trust boundary enforcement; dynamic path rewrites"
      ],
      visual: { icon: "flow", hint: "Policy gate allows/blocks routes" }
    },
    {
      id: "anomaly-detection",
      title: "Anomaly detection",
      headline: "Autoencoder spots spoofed or out-of-distribution signals",
      body: "A lightweight AE scores rolling windows and quarantines frames above threshold; metrics exposed for monitoring.",
      key_points: [
        "Rolling-window AE scoring; >3σ quarantine",
        "Prometheus metrics for jitter/loss/errors"
      ],
      visual: { icon: "ai-chip", hint: "Abnormal frames highlighted" }
    },
    {
      id: "privacy-redaction",
      title: "Privacy redaction",
      headline: "Mask sensitive cognitive patterns by policy",
      body: "A CNN classifier can redact windows that likely contain identifiable or sensitive states (e.g., attention, stress) when enabled.",
      key_points: [
        "Policy-driven redaction mask",
        "Confidence scores; audit tagging"
      ],
      visual: { icon: "eye-strike", hint: "Masked regions in stream" }
    },
    {
      id: "brainprint-auth",
      title: "Brainprint authentication",
      headline: "Passive biometric login with revocable embeddings",
      body: "A Siamese model verifies the user locally within ~55ms on edge devices; falls back to OAuth2 if unavailable.",
      key_points: [
        "Local, encrypted embeddings",
        "Spoof resistance via signal entropy"
      ],
      visual: { icon: "finger-brain", hint: "Match score indicator" }
    },
    {
      id: "audit-logging",
      title: "Immutable audit logging",
      headline: "Tamper-evident, hash-chained event ledger",
      body: "We log every consent check, decrypt, and anomaly decision with cryptographic chaining for chain-of-custody.",
      key_points: [
        "Write-once store; SHA-256 hash-chain",
        "Exportable for SIEM/compliance"
      ],
      visual: { icon: "ledger", hint: "Linked audit entries" }
    },
    {
      id: "sdk-access",
      title: "SDK & access gateway",
      headline: "Controlled access via Python/TypeScript SDKs",
      body: "Downstream apps receive only policy-permitted matrices/metadata via REST/gRPC/WebSocket with backpressure handling.",
      key_points: [
        "Resilient clients; heartbeats & reconnection",
        "Rate-limited APIs; per-session tokens"
      ],
      visual: { icon: "api", hint: "Client app consuming stream" }
    },
    {
      id: "downstream",
      title: "Safely sent to downstream application",
      headline: "Security preserved end-to-end",
      body: "Only authorized, policy-compliant data flows to dashboards, research tools, or therapeutic apps — with full traceability.",
      key_points: [
        "End-to-end latency target <150ms",
        "Compliant by design (GDPR/HIPAA workflows)"
      ],
      visual: { icon: "target", hint: "Destination systems" }
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

  const activeStepIndex = journeyData.steps.findIndex(step => step.id === activeStepId);
  const progress = ((activeStepIndex + 1) / journeyData.steps.length) * 100;

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
            <div className="bg-card border rounded-xl p-8 shadow-elegant">
              <VisualIcon 
                icon={journeyData.steps.find(step => step.id === activeStepId)?.visual.icon || 'wave-in'}
                hint={journeyData.steps.find(step => step.id === activeStepId)?.visual.hint || ''}
                isActive={true}
              />
              
              {/* Progress Indicator */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">{activeStepIndex + 1} / {journeyData.steps.length}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {journeyData.steps.map((step, index) => (
                    <button
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
                      aria-label={`Go to step ${index + 1}: ${step.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {journeyData.steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  if (el) stepRefs.current[step.id] = el;
                }}
                data-step-id={step.id}
                className="min-h-screen lg:min-h-[80vh] flex flex-col justify-center py-16 lg:py-24"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Mobile Visual */}
                <div className="lg:hidden mb-8">
                  <div className="bg-card border rounded-xl p-6 shadow-elegant">
                    <VisualIcon 
                      icon={step.visual.icon}
                      hint={step.visual.hint}
                      isActive={step.id === activeStepId}
                    />
                  </div>
                </div>

                {/* Step Content */}
                <div className={`transition-all duration-300 ${
                  step.id === activeStepId && !isReducedMotion
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-70 translate-y-4'
                }`}>
                  <div className="flex items-center mb-4">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full mr-4">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                  
                  <h4 className="text-3xl lg:text-4xl font-bold mb-6">
                    {step.headline}
                  </h4>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {step.body}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.key_points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div id="journey-end" className="text-center mt-24 pt-16 border-t">
          <h3 className="text-2xl font-bold mb-6">Ready to integrate XBrainer?</h3>
          <a
            href={journeyData.cta.href}
            className="inline-flex items-center bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-200"
          >
            {journeyData.cta.label}
            <ArrowDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;