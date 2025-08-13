
import { useState, useEffect } from 'react';

const HeroXBrainer = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    console.log('🎨 HeroXBrainer component rendering with color animation!');
    
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getGradientColor = () => {
    const colors = [
      'from-blue-400 to-purple-600',
      'from-purple-500 to-pink-500', 
      'from-pink-400 to-red-400',
      'from-red-400 to-orange-400',
      'from-orange-400 to-yellow-400',
      'from-yellow-400 to-blue-400'
    ];
    return colors[animationPhase];
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#1e3a8a', stopOpacity: 0.3}} />
              <stop offset="50%" style={{stopColor: '#7c3aed', stopOpacity: 0.2}} />
              <stop offset="100%" style={{stopColor: '#1e3a8a', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          
          {/* Neural connections */}
          <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none" opacity="0.4">
            <path d="M100,200 Q300,100 500,200 T900,200" />
            <path d="M200,300 Q400,200 600,300 T1000,300" />
            <path d="M150,400 Q350,300 550,400 T950,400" />
            <path d="M250,500 Q450,400 650,500 T1050,500" />
          </g>
          
          {/* Neural nodes */}
          <g fill="url(#neuralGradient)" opacity="0.6">
            <circle cx="100" cy="200" r="3" />
            <circle cx="500" cy="200" r="3" />
            <circle cx="900" cy="200" r="3" />
            <circle cx="200" cy="300" r="3" />
            <circle cx="600" cy="300" r="3" />
            <circle cx="1000" cy="300" r="3" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Logo and brand section */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.07 2.07 0 0 1-2.44-2.44 2.07 2.07 0 0 1-2.44-2.44 2.07 2.07 0 0 1-2.44-2.44A2.5 2.5 0 0 1 2.5 9.5z"/>
                  <path d="M12 4.5L19.32 8a2 2 0 0 1 1.18 1.84L20 12l-.5 2.16a2 2 0 0 1-1.18 1.84L12 19.5"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">XBrainer AI</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className={`bg-gradient-to-r ${getGradientColor()} bg-clip-text text-transparent transition-all duration-2000`}>
                Secure Neural Data Before It's Too Late
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl text-blue-100 leading-relaxed font-light">
                Securing Neural Data in Real Time
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
              <p className="text-lg text-white/90 leading-relaxed text-center">
                As brain-computer devices become more common, the risk of brain data being misused is growing. 
                XBrainer AI makes tools to keep this data safe.
              </p>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Early Access
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold text-lg rounded-full hover:bg-blue-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <p className="text-blue-200/70 text-sm mt-6">
              Join the waitlist for early access to our neural security platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;
