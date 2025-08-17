'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { JourneyConfig } from './EEGEngine';

type Props = {
  config: JourneyConfig;
  stepProgresses: number[];
};

export default function JourneyPanels({ config, stepProgresses }: Props) {
  const activeStepIndex = stepProgresses.findIndex(p => p > 0);
  
  return (
    <>
      {config.steps.map((step, index) => {
        const progress = stepProgresses[index] || 0;
        const isActive = progress > 0;
        const isLeft = step.side === 'left';
        
        return (
          <motion.div
            key={step.id}
            style={{
              position: 'sticky',
              top: '50vh',
              transform: 'translateY(-50%)',
              width: '36ch',
              zIndex: 3,
              left: isLeft ? '6vw' : 'auto',
              right: isLeft ? 'auto' : '6vw',
              textAlign: isLeft ? 'right' : 'left',
              pointerEvents: 'none'
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ 
              opacity: isActive ? Math.min(1, progress * 2) : 0,
              y: isActive ? 0 : 16
            }}
            transition={{
              duration: 0.3,
              ease: [0.2, 0.8, 0.2, 1]
            }}
          >
            <div
              role="region"
              aria-label={`Step ${index + 1}: ${step.title}`}
              className="bg-background/80 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg"
            >
              <motion.h3
                className="text-xl font-bold text-primary mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ delay: 0.1 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-foreground/80 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                {step.body}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}