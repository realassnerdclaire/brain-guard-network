import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

interface AnimationSequence {
  id: string;
  title: string;
  subtitle: string;
  duration: number;
  effect: 'validation' | 'encryption' | 'consent' | 'analysis' | 'complete';
}

const EEGVideoCanvas: React.FC<{ currentSequence: AnimationSequence | null }> = ({ currentSequence }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    if (!currentSequence || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 400;

    const animate = () => {
      timeRef.current += 0.05;
      
      // Clear canvas with dramatic background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 10, 30, 0.95)');
      gradient.addColorStop(1, 'rgba(0, 5, 15, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid
      ctx.strokeStyle = 'rgba(110, 226, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i + (timeRef.current * 20) % 40, 0);
        ctx.lineTo(i + (timeRef.current * 20) % 40, canvas.height);
        ctx.stroke();
      }

      // Generate cinematic EEG waveform
      ctx.strokeStyle = '#6EE2FF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      for (let x = 0; x < canvas.width; x += 2) {
        const baseY = canvas.height / 2;
        let y = baseY;
        
        // Create complex EEG-like signal
        y += 30 * Math.sin((x + timeRef.current * 50) * 0.02);
        y += 15 * Math.sin((x + timeRef.current * 30) * 0.05);
        y += 8 * Math.sin((x + timeRef.current * 80) * 0.1);
        y += 4 * Math.sin((x + timeRef.current * 120) * 0.2);
        
        // Add noise and artifacts based on sequence
        if (currentSequence.effect === 'validation') {
          y += 10 * Math.random() - 5;
          if (x % 100 < 10) y += 40 * Math.sin(x * 0.1); // Artifacts
        }
        
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Add sequence-specific effects
      switch (currentSequence.effect) {
        case 'validation':
          // Red error markers
          ctx.fillStyle = '#FF4444';
          for (let i = 0; i < 5; i++) {
            const x = (i * 200 + timeRef.current * 10) % canvas.width;
            ctx.beginPath();
            ctx.arc(x, canvas.height / 2 - 60, 8, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
          
        case 'encryption':
          // Encryption blocks
          ctx.fillStyle = 'rgba(110, 226, 255, 0.3)';
          for (let i = 0; i < canvas.width; i += 80) {
            const opacity = Math.abs(Math.sin(timeRef.current + i * 0.01));
            ctx.globalAlpha = opacity;
            ctx.fillRect(i, canvas.height / 2 - 40, 60, 80);
          }
          ctx.globalAlpha = 1;
          break;
          
        case 'consent':
          // Consent overlay effect
          ctx.fillStyle = 'rgba(0, 255, 150, 0.2)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Scanning line
          const scanX = (timeRef.current * 100) % canvas.width;
          ctx.strokeStyle = '#00FF96';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(scanX, 0);
          ctx.lineTo(scanX, canvas.height);
          ctx.stroke();
          break;
          
        case 'analysis':
          // Analysis particles
          ctx.fillStyle = '#FFD700';
          for (let i = 0; i < 20; i++) {
            const x = (Math.sin(timeRef.current + i) * 200 + canvas.width / 2);
            const y = (Math.cos(timeRef.current * 1.5 + i) * 100 + canvas.height / 2);
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
      }

      // Add glow effect to main waveform
      ctx.shadowColor = '#6EE2FF';
      ctx.shadowBlur = 15;
      ctx.strokeStyle = '#6EE2FF';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSequence]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-blue-500/30">
      <canvas 
        ref={canvasRef}
        className="w-full h-[400px] bg-black"
      />
      {currentSequence && (
        <div className="absolute top-4 left-4 right-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/70 backdrop-blur-md rounded-lg p-4 border border-blue-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-2">{currentSequence.title}</h3>
            <p className="text-blue-200">{currentSequence.subtitle}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const MetricDisplay: React.FC<{ 
  label: string; 
  value: number; 
  unit: string; 
  color: string;
  isAnimating: boolean;
}> = ({ label, value, unit, color, isAnimating }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isAnimating) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 2, repeat: Infinity }
      });
    }
  }, [isAnimating, controls]);

  return (
    <motion.div
      animate={controls}
      className="bg-black/80 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
    >
      <div className="text-sm text-gray-400 mb-2">{label}</div>
      <div className="flex items-baseline justify-center space-x-2">
        <motion.span 
          className="text-4xl font-bold"
          style={{ color }}
          animate={{ 
            textShadow: isAnimating ? 
              `0 0 20px ${color}` : 
              'none'
          }}
        >
          {value}
        </motion.span>
        <span className="text-lg text-gray-400">{unit}</span>
      </div>
    </motion.div>
  );
};

export default function EEGVideoAnimation() {
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metrics, setMetrics] = useState({
    focus: 0,
    stress: 0,
    alpha: 0,
    beta: 0
  });

  const sequences: AnimationSequence[] = [
    {
      id: 'init',
      title: 'Initializing EEG Capture',
      subtitle: 'Establishing connection with neural sensors...',
      duration: 3000,
      effect: 'validation'
    },
    {
      id: 'validation',
      title: 'Signal Validation',
      subtitle: 'Detecting and filtering artifacts from raw EEG data',
      duration: 4000,
      effect: 'validation'
    },
    {
      id: 'encryption',
      title: 'AES-256 Encryption',
      subtitle: 'Securing neural data with military-grade encryption',
      duration: 3500,
      effect: 'encryption'
    },
    {
      id: 'consent',
      title: 'Consent Enforcement',
      subtitle: 'Purpose- and role-aware policy gate; only permitted views flow.',
      duration: 4000,
      effect: 'consent'
    },
    {
      id: 'analysis',
      title: 'Neural Pattern Analysis',
      subtitle: 'Processing brain waves with advanced AI algorithms',
      duration: 5000,
      effect: 'analysis'
    },
    {
      id: 'complete',
      title: 'Analysis Complete',
      subtitle: 'Secure brain data ready for downstream applications',
      duration: 3000,
      effect: 'complete'
    }
  ];

  const startAnimation = () => {
    setIsPlaying(true);
    setCurrentSequenceIndex(0);
    setMetrics({ focus: 0, stress: 0, alpha: 0, beta: 0 });
  };

  useEffect(() => {
    if (!isPlaying || currentSequenceIndex < 0) return;

    const currentSequence = sequences[currentSequenceIndex];
    if (!currentSequence) {
      setIsPlaying(false);
      return;
    }

    // Animate metrics during sequence
    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        focus: Math.min(85, prev.focus + Math.random() * 8),
        stress: Math.max(15, Math.min(45, prev.stress + (Math.random() - 0.5) * 5)),
        alpha: Math.max(20, Math.min(70, prev.alpha + (Math.random() - 0.5) * 8)),
        beta: Math.max(30, Math.min(80, prev.beta + (Math.random() - 0.5) * 6))
      }));
    }, 200);

    // Move to next sequence
    const sequenceTimeout = setTimeout(() => {
      if (currentSequenceIndex < sequences.length - 1) {
        setCurrentSequenceIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
        setCurrentSequenceIndex(-1);
      }
    }, currentSequence.duration);

    return () => {
      clearInterval(metricsInterval);
      clearTimeout(sequenceTimeout);
    };
  }, [currentSequenceIndex, isPlaying]);

  const currentSequence = currentSequenceIndex >= 0 ? sequences[currentSequenceIndex] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            XBrainer Neural Security Demo
          </motion.h1>
          
          <motion.p
            className="text-xl text-blue-200 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Watch how XBrainer secures and processes brain data in real-time with 
            cinematic visualization of our neural security pipeline
          </motion.p>

          {!isPlaying ? (
            <motion.button
              onClick={startAnimation}
              className="mt-8 px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              ▶ Play Neural Security Demo
            </motion.button>
          ) : (
            <motion.div
              className="mt-8 bg-green-500/20 border border-green-500/30 rounded-xl p-4 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Demo Running...</span>
                <div className="text-green-400">
                  {currentSequenceIndex + 1}/{sequences.length}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Main Animation Canvas */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <EEGVideoCanvas currentSequence={currentSequence} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Metrics */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <MetricDisplay
                label="Neural Focus"
                value={Math.round(metrics.focus)}
                unit="%"
                color="#10B981"
                isAnimating={isPlaying}
              />
              <MetricDisplay
                label="Stress Index"
                value={Math.round(metrics.stress)}
                unit="%"
                color="#F59E0B"
                isAnimating={isPlaying}
              />
              <MetricDisplay
                label="Alpha Waves"
                value={Math.round(metrics.alpha)}
                unit="Hz"
                color="#6366F1"
                isAnimating={isPlaying}
              />
              <MetricDisplay
                label="Beta Activity"
                value={Math.round(metrics.beta)}
                unit="Hz"
                color="#EC4899"
                isAnimating={isPlaying}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sequence Progress */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Security Pipeline Progress</h3>
                <div className="flex space-x-2">
                  {sequences.map((seq, index) => (
                    <div
                      key={seq.id}
                      className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                        index < currentSequenceIndex 
                          ? 'bg-green-500' 
                          : index === currentSequenceIndex 
                          ? 'bg-blue-500 animate-pulse' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  {sequences.map((seq) => (
                    <span key={seq.id} className="text-center">
                      {seq.title.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}