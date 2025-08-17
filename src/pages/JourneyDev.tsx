'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import EEGStage, { type EEGStageHandle } from '@/components/journey/EEGStage';
import JourneyPanels from '@/components/journey/JourneyPanels';
import ClientOnlyJourney from '@/components/journey/ClientOnlyJourney';
import type { JourneyConfig } from '@/components/journey/EEGEngine';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function JourneyDevPage() {
  const [config, setConfig] = useState<JourneyConfig | null>(null);
  const [bindToScroll, setBindToScroll] = useState(false);
  const [fps, setFps] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const stageRef = useRef<EEGStageHandle>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Manual sliders state
  const [sliders, setSliders] = useState({
    validation: 0,
    encryption: 0,
    consent: 0,
    autoencoder: 0,
    downstream: 0
  });

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

  // FPS counter
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    
    const countFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = currentTime;
      }
      requestAnimationFrame(countFPS);
    };
    
    const id = requestAnimationFrame(countFPS);
    return () => cancelAnimationFrame(id);
  }, []);

  // Scroll binding - only after client hydration
  const { scrollYProgress } = useScroll({
    target: isClient && bindToScroll ? scrollRef : undefined,
    offset: ["start start", "end end"]
  });

  const validationProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const encryptionProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const consentProgress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const aeProgress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const downstreamProgress = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  // Update stage based on mode - only after client hydration
  useEffect(() => {
    if (!stageRef.current || !isClient) return;

    if (bindToScroll) {
      const unsubscribes = [
        validationProgress.on('change', (v) => stageRef.current?.setValidation(v)),
        encryptionProgress.on('change', (v) => stageRef.current?.setEncryption(v)),
        consentProgress.on('change', (v) => stageRef.current?.setConsent(v)),
        aeProgress.on('change', (v) => stageRef.current?.setAE(v)),
        downstreamProgress.on('change', (v) => stageRef.current?.setDownstream(v))
      ];
      return () => unsubscribes.forEach(unsub => unsub());
    } else {
      stageRef.current.setValidation(sliders.validation);
      stageRef.current.setEncryption(sliders.encryption);
      stageRef.current.setConsent(sliders.consent);
      stageRef.current.setAE(sliders.autoencoder);
      stageRef.current.setDownstream(sliders.downstream);
    }
  }, [bindToScroll, sliders, validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress, isClient]);

  if (!config || !isClient) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-foreground/60">Loading journey configuration...</p>
        </div>
      </div>
    );
  }

  const stepProgresses = bindToScroll 
    ? [
        validationProgress.get(),
        encryptionProgress.get(),
        consentProgress.get(),
        aeProgress.get(),
        downstreamProgress.get()
      ]
    : [
        sliders.validation,
        sliders.encryption,
        sliders.consent,
        sliders.autoencoder,
        sliders.downstream
      ];

  return (
    <ClientOnlyJourney>
      <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">EEG Journey Dev Playground</h1>
              <p className="text-foreground/60 text-sm">Interactive development environment for the Central EEG Journey</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm font-mono bg-muted px-3 py-1 rounded">
                FPS: {fps}
              </div>
              <Button
                variant={bindToScroll ? "default" : "outline"}
                onClick={() => setBindToScroll(!bindToScroll)}
              >
                {bindToScroll ? "Scroll Bound" : "Manual Sliders"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Controls Sidebar */}
        {!bindToScroll && (
          <aside className="w-80 border-r border-border/50 bg-muted/30 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Manual Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(sliders).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <label className="text-sm font-medium capitalize">
                      {key}: {value.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={value}
                      onChange={(e) => setSliders(prev => ({
                        ...prev,
                        [key]: parseFloat(e.target.value)
                      }))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSliders({
                    validation: 0,
                    encryption: 0,
                    consent: 0,
                    autoencoder: 0,
                    downstream: 0
                  })}
                  className="w-full"
                >
                  Reset All
                </Button>
              </CardContent>
            </Card>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {bindToScroll ? (
            /* Scroll Mode */
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
          ) : (
            /* Manual Mode */
            <div className="p-8">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-center">
                  <h2 className="text-xl font-semibold mb-2">Static EEG Stage</h2>
                  <p className="text-foreground/60">Use the sliders in the sidebar to control the visualization</p>
                </div>
                
                <div className="flex justify-center mb-8">
                  <div className="border border-border/50 rounded-lg p-8 bg-card">
                    <EEGStage ref={stageRef} config={config} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {config.steps.map((step, index) => {
                    const progress = stepProgresses[index];
                    return (
                      <Card key={step.id} className={progress > 0 ? "ring-2 ring-primary/50" : ""}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center justify-between">
                            {step.title}
                            <span className="text-sm font-mono text-foreground/60">
                              {progress.toFixed(2)}
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-foreground/70">{step.body}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      </div>
    </ClientOnlyJourney>
  );
}