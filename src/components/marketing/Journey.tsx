import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import EEGStage, { type EEGStageHandle } from '@/components/journey/EEGStage';
import JourneyPanels from '@/components/journey/JourneyPanels';
import ClientOnlyJourney from '@/components/journey/ClientOnlyJourney';
import type { JourneyConfig } from '@/components/journey/EEGEngine';

export default function Journey() {
  const [config, setConfig] = useState<JourneyConfig | null>(null);
  const [isClient, setIsClient] = useState(false);
  const stageRef = useRef<EEGStageHandle>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ensure client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load config
  useEffect(() => {
    fetch('/journeyConfig.json')
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  // Scroll binding - only after client hydration
  const { scrollYProgress } = useScroll({
    target: isClient ? scrollRef : undefined,
    offset: ["start start", "end end"]
  });

  const validationProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const encryptionProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const consentProgress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const aeProgress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const downstreamProgress = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  // Update stage - only after client hydration
  useEffect(() => {
    if (!stageRef.current || !isClient) return;
    
    const unsubscribes = [
      validationProgress.on('change', (v) => stageRef.current?.setValidation(v)),
      encryptionProgress.on('change', (v) => stageRef.current?.setEncryption(v)),
      consentProgress.on('change', (v) => stageRef.current?.setConsent(v)),
      aeProgress.on('change', (v) => stageRef.current?.setAE(v)),
      downstreamProgress.on('change', (v) => stageRef.current?.setDownstream(v))
    ];
    return () => unsubscribes.forEach(unsub => unsub());
  }, [validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress, isClient]);

  if (!config || !isClient) {
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
    <ClientOnlyJourney>
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
    </ClientOnlyJourney>
  );
}