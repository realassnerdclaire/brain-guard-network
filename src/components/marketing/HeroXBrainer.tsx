
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
          {/* Logo and brand section - better desktop spacing */}
          <div className="flex items-center justify-center mb-12 lg:mb-20">
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 lg:w-10 lg:h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.07 2.07 0 0 1-2.44-2.44 2.07 2.07 0 0 1-2.44-2.44 2.07 2.07 0 0 1-2.44-2.44A2.5 2.5 0 0 1 2.5 9.5z"/>
                  <path d="M12 4.5L19.32 8a2 2 0 0 1 1.18 1.84L20 12l-.5 2.16a2 2 0 0 1-1.18 1.84L12 19.5"/>
                </svg>
              </div>
              <span className="text-2xl lg:text-4xl font-bold text-white tracking-tight">XBrainer AI</span>
            </div>
          </div>

          {/* Main headline with improved desktop spacing */}
          <div className="text-center mb-16 lg:mb-24">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight lg:leading-[0.9] mb-8 lg:mb-12">
              <span className={`bg-gradient-to-r ${getGradientColor()} bg-clip-text text-transparent transition-all duration-2000`}>
                Secure Neural Data Before It's Too Late
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
              <p className="text-xl lg:text-2xl xl:text-3xl text-blue-100 leading-relaxed lg:leading-relaxed font-light">
                Securing Neural Data in Real Time
              </p>
            </div>
          </div>

          {/* Description with better desktop layout */}
          <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
            <div className="bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl lg:rounded-3xl p-8 lg:p-12 xl:p-16">
              <p className="text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed lg:leading-loose text-center">
                As brain-computer devices become more common, the risk of brain data being misused is growing. 
                XBrainer AI makes tools to keep this data safe.
              </p>
            </div>
          </div>

          {/* CTA section with improved desktop spacing */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center max-w-2xl mx-auto">
              <button className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg lg:text-xl rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Early Access
              </button>
              <button className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-6 border-2 border-blue-500 text-blue-400 font-semibold text-lg lg:text-xl rounded-full hover:bg-blue-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <p className="text-blue-200/70 text-base lg:text-lg mt-8 lg:mt-12">
              Join the waitlist for early access to our neural security platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;
