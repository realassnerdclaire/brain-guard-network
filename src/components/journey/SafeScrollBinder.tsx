import React, { useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import type { EEGStageHandle } from '@/components/journey/EEGStage';

interface SafeScrollBinderProps {
  stageRef: React.RefObject<EEGStageHandle>;
  scrollRef: React.RefObject<HTMLDivElement>;
  onStepProgresses?: (progresses: number[]) => void;
}

export default function SafeScrollBinder({ stageRef, scrollRef, onStepProgresses }: SafeScrollBinderProps) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const validationProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const encryptionProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const consentProgress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const aeProgress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const downstreamProgress = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  useEffect(() => {
    if (!stageRef.current) return;
    const unsubscribes = [
      validationProgress.on('change', (v) => stageRef.current?.setValidation(v)),
      encryptionProgress.on('change', (v) => stageRef.current?.setEncryption(v)),
      consentProgress.on('change', (v) => stageRef.current?.setConsent(v)),
      aeProgress.on('change', (v) => stageRef.current?.setAE(v)),
      downstreamProgress.on('change', (v) => stageRef.current?.setDownstream(v)),
    ];
    return () => unsubscribes.forEach((u) => u());
  }, [validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress, stageRef]);

  useEffect(() => {
    if (!onStepProgresses) return;
    const unsub = scrollYProgress.on('change', () => {
      onStepProgresses([
        validationProgress.get(),
        encryptionProgress.get(),
        consentProgress.get(),
        aeProgress.get(),
        downstreamProgress.get(),
      ]);
    });
    return unsub;
  }, [scrollYProgress, validationProgress, encryptionProgress, consentProgress, aeProgress, downstreamProgress, onStepProgresses]);

  return null;
}
