import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import type { EEGStageHandle } from '@/components/journey/EEGStage';

interface ScrollBinderProps {
  stageRef: React.RefObject<EEGStageHandle>;
  onProgress?: (stepProgresses: number[]) => void;
  children: (scrollRef: React.RefObject<HTMLDivElement>) => React.ReactNode;
}

export default function ScrollBinder({ stageRef, onProgress, children }: ScrollBinderProps) {
  const [isMounted, setIsMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Only mount after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This component only handles scroll binding - render children immediately
  return (
    <>
      {children(scrollRef)}
      {isMounted && <ScrollHandler stageRef={stageRef} scrollRef={scrollRef} onProgress={onProgress} />}
    </>
  );
}

function ScrollHandler({ 
  stageRef, 
  scrollRef, 
  onProgress 
}: { 
  stageRef: React.RefObject<EEGStageHandle>;
  scrollRef: React.RefObject<HTMLDivElement>;
  onProgress?: (stepProgresses: number[]) => void;
}) {
  // Delay binding until the element ref is set post-commit
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    if (scrollRef.current) setReady(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ready ? scrollRef : undefined,
    offset: ["start start", "end end"]
  });

  const validationProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const encryptionProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const consentProgress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const aeProgress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const downstreamProgress = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  // Update stage
  useEffect(() => {
    if (!stageRef.current) return;
    
    const unsubscribes = [
      validationProgress.on('change', (v) => stageRef.current?.setValidation(v)),
      encryptionProgress.on('change', (v) => stageRef.current?.setEncryption(v)),
      consentProgress.on('change', (v) => stageRef.current?.setConsent(v)),
      aeProgress.on('change', (v) => stageRef.current?.setAE(v)),
      downstreamProgress.on('change', (v) => stageRef.current?.setDownstream(v))
    ];
    return () => unsubscribes.forEach(unsub => unsub());
  }, [validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress]);

  // Notify parent of progress changes
  useEffect(() => {
    if (!onProgress) return;
    
    const unsubscribe = scrollYProgress.on('change', () => {
      onProgress([
        validationProgress.get(),
        encryptionProgress.get(),
        consentProgress.get(),
        aeProgress.get(),
        downstreamProgress.get()
      ]);
    });
    return unsubscribe;
  }, [scrollYProgress, validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress, onProgress]);

  return null; // This component only handles scroll binding
}