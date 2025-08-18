import React, { useRef, useEffect, useState } from 'react';
import EEGStage, { type EEGStageHandle } from '@/components/journey/EEGStage';
import JourneyPanels from '@/components/journey/JourneyPanels';
import ClientOnly from '@/components/journey/ClientOnly';
import type { JourneyConfig } from '@/components/journey/EEGEngine';

export default function Journey() {
  const [config, setConfig] = useState<JourneyConfig | null>(null);
  const [stepProgresses, setStepProgresses] = useState([0, 0, 0, 0, 0]);
  const stageRef = useRef<EEGStageHandle>(null);

  // Load config
  useEffect(() => {
    fetch('/journeyConfig.json')
      .then(res => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  // Autoplay cinematic sequence: drive stages sequentially like a video
  useEffect(() => {
    if (!config || !stageRef.current) return;

    const order = ['validation','encryption','consent','autoencoder','downstream'] as const;
    const durations = [1800, 1800, 1800, 2000, 1600]; // ms per stage

    let i = 0;
    let start = performance.now();
    let raf = 0;

    const setters = {
      validation: (v: number) => stageRef.current?.setValidation(v),
      encryption: (v: number) => stageRef.current?.setEncryption(v),
      consent: (v: number) => stageRef.current?.setConsent(v),
      autoencoder: (v: number) => stageRef.current?.setAE(v),
      downstream: (v: number) => stageRef.current?.setDownstream(v),
    } as const;

    const applyFrame = (now: number) => {
      const duration = durations[i];
      const elapsed = now - start;
      const t = Math.max(0, Math.min(1, elapsed / duration));

      // Set each stage progress
      order.forEach((key, idx) => {
        if (idx < i) setters[key](1);
        else if (idx === i) setters[key](t);
        else setters[key](0);
      });

      // Update panels
      setStepProgresses(order.map((_, idx) => (idx < i ? 1 : idx === i ? t : 0)) as any);

      if (t >= 1) {
        if (i < order.length - 1) {
          i += 1;
          start = now;
        }
      }

      // Stop after final stage completes fully
      if (i === order.length - 1 && t >= 1) return;
      raf = requestAnimationFrame(applyFrame);
    };

    raf = requestAnimationFrame(applyFrame);
    return () => cancelAnimationFrame(raf);
  }, [config]);

  if (!config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <ClientOnly>
      <section 
        id="xbr-journey"
        className="relative"
        style={{ height: '100vh' }}
      >
        <div
          id="eeg-stage"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            zIndex: 2
          }}
        >
          <EEGStage ref={stageRef} config={config} />
        </div>
        <JourneyPanels config={config} stepProgresses={stepProgresses} />
      </section>
    </ClientOnly>
  );
}