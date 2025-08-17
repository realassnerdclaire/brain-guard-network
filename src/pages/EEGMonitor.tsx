import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EEGData {
  timestamp: number;
  value: number;
}

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  color: string;
  isAnimating: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, color, isAnimating }) => {
  return (
    <motion.div 
      className="bg-card rounded-2xl p-6 border border-border/50"
      animate={{ 
        scale: isAnimating ? [1, 1.02, 1] : 1,
        boxShadow: isAnimating ? 
          "0 10px 40px -10px rgba(110, 226, 255, 0.3)" : 
          "0 4px 20px -4px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className={`w-2 h-2 rounded-full ${isAnimating ? 'animate-pulse' : ''}`} 
             style={{ backgroundColor: color }} />
      </div>
      <div className="flex items-baseline space-x-2">
        <motion.span 
          className="text-3xl font-bold"
          animate={{ color: isAnimating ? color : 'inherit' }}
          transition={{ duration: 1 }}
        >
          {value}
        </motion.span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
    </motion.div>
  );
};

const CircularProgress: React.FC<{ progress: number; size: number; strokeWidth: number; color: string }> = ({
  progress, size, strokeWidth, color
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-muted"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="text-2xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {progress}%
        </motion.span>
      </div>
    </div>
  );
};

const LiveEEGWave: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dataRef = useRef<EEGData[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      timeRef.current += 0.1;
      
      // Generate realistic EEG-like data
      const newValue = 
        50 + 
        20 * Math.sin(timeRef.current * 0.8) + 
        10 * Math.sin(timeRef.current * 2.3) + 
        5 * Math.sin(timeRef.current * 4.7) +
        3 * (Math.random() - 0.5);

      dataRef.current.push({
        timestamp: timeRef.current,
        value: newValue
      });

      // Keep only last 200 points
      if (dataRef.current.length > 200) {
        dataRef.current.shift();
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(110, 226, 255, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Draw EEG wave
      if (dataRef.current.length > 1) {
        ctx.strokeStyle = '#6EE2FF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        dataRef.current.forEach((point, index) => {
          const x = (index / dataRef.current.length) * canvas.width;
          const y = canvas.height - (point.value / 100) * canvas.height;
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        
        ctx.stroke();

        // Add glow effect
        ctx.shadowColor = '#6EE2FF';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <canvas 
        ref={canvasRef}
        width={400}
        height={200}
        className="w-full h-[200px]"
      />
      {isActive && (
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-sm font-medium">Live Signal</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function EEGMonitoringDashboard() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [focusLevel, setFocusLevel] = useState(0);
  const [stressLevel, setStressLevel] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [theta, setTheta] = useState(0);
  const [currentStage, setCurrentStage] = useState('Initializing');

  const stages = [
    'Initializing',
    'Calibrating sensors',
    'Assessing brain activity',
    'Processing signals',
    'Analysis complete'
  ];

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      setFocusLevel(prev => Math.min(85, prev + Math.random() * 5));
      setStressLevel(prev => Math.max(15, Math.min(45, prev + (Math.random() - 0.5) * 3)));
      setAlpha(prev => Math.max(20, Math.min(60, prev + (Math.random() - 0.5) * 5)));
      setBeta(prev => Math.max(30, Math.min(70, prev + (Math.random() - 0.5) * 4)));
      setTheta(prev => Math.max(10, Math.min(40, prev + (Math.random() - 0.5) * 3)));
    }, 500);

    return () => clearInterval(interval);
  }, [isMonitoring]);

  useEffect(() => {
    if (!isMonitoring) return;

    let stageIndex = 0;
    const stageInterval = setInterval(() => {
      if (stageIndex < stages.length - 1) {
        stageIndex++;
        setCurrentStage(stages[stageIndex]);
      }
    }, 2000);

    return () => clearInterval(stageInterval);
  }, [isMonitoring]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    setFocusLevel(32);
    setStressLevel(28);
    setAlpha(35);
    setBeta(45);
    setTheta(25);
    setCurrentStage(stages[0]);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            EEG Brain Activity Monitor
          </motion.h1>
          
          {!isMonitoring ? (
            <motion.button
              onClick={startMonitoring}
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Brain Activity Monitoring
            </motion.button>
          ) : (
            <motion.div
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-green-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-lg font-medium text-green-500">{currentStage}...</span>
              </div>
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {isMonitoring && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Live EEG Waveform */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <span>Live EEG Signal</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </h2>
                <LiveEEGWave isActive={isMonitoring} />
              </div>

              {/* Main Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  className="bg-card rounded-2xl p-6 border border-border/50 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Sustained Focus</h3>
                  <CircularProgress 
                    progress={Math.round(focusLevel)} 
                    size={120} 
                    strokeWidth={8} 
                    color="#10B981" 
                  />
                </motion.div>

                <MetricCard
                  title="Stress Capacity"
                  value={Math.round(stressLevel)}
                  unit="%"
                  color="#F59E0B"
                  isAnimating={isMonitoring}
                />

                <MetricCard
                  title="Alpha Waves"
                  value={Math.round(alpha)}
                  unit="Hz"
                  color="#6366F1"
                  isAnimating={isMonitoring}
                />

                <MetricCard
                  title="Beta Activity"
                  value={Math.round(beta)}
                  unit="Hz"
                  color="#EC4899"
                  isAnimating={isMonitoring}
                />
              </div>

              {/* Brain Wave Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Wave Pattern Analysis</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Alpha', value: alpha, color: '#6366F1' },
                      { name: 'Beta', value: beta, color: '#EC4899' },
                      { name: 'Theta', value: theta, color: '#10B981' }
                    ].map((wave) => (
                      <div key={wave.name} className="flex items-center space-x-4">
                        <div className="w-16 text-sm font-medium">{wave.name}</div>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: wave.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(wave.value / 100) * 100}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                        <div className="w-12 text-sm text-right">{Math.round(wave.value)}%</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Real-time Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Signal Quality</span>
                      <span className="text-green-500 font-medium">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Electrode Contact</span>
                      <span className="text-green-500 font-medium">Good</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Noise Level</span>
                      <span className="text-yellow-500 font-medium">Low</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Session Duration</span>
                      <motion.span 
                        className="font-medium"
                        key={Math.floor(Date.now() / 1000)}
                      >
                        {Math.floor((Date.now() % 100000) / 1000)}s
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
