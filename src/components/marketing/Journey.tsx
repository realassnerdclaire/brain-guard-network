import React, { useRef, useEffect, useState } from 'react';
import EEGStage, { type EEGStageHandle } from '@/components/journey/EEGStage';
import JourneyPanels from '@/components/journey/JourneyPanels';
import ScrollBinder from '@/components/journey/ScrollBinder';
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

  if (!config) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <ScrollBinder 
      stageRef={stageRef} 
      onProgress={setStepProgresses}
    >
      {(scrollRef) => (
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
      )}
    </ScrollBinder>
  );
}