import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";
import { animateLetters, startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const HeroXBrainer = () => {
  console.log("🎨 HeroXBrainer component rendering with color animation!");
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col justify-center sm:justify-start">
      {/* XBrainer AI logo and company name - responsive positioning */}
      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20 flex items-center gap-1 sm:gap-4 lg:gap-6">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-10 sm:h-12 lg:h-16 w-auto mix-blend-screen opacity-90 rounded-lg sm:rounded-2xl" 
          style={{
            filter: 'blur(0.1px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="flex flex-col">
          <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-tight" style={{color: '#ffffff'}}>
            XBrainer AI
          </span>
          <span className="text-sm sm:text-base lg:text-xl font-medium" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
            Securing Neural Data in Real Time
          </span>
        </div>
      </div>
      
      
      {/* Minimal EEG stream signals - reduced from many to just 2 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-30" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="eegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="eegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* Main EEG brain wave pattern - single clean line */}
          <path d="M0,400 L40,420 L80,380 L120,440 L160,360 L200,450 L240,370 L280,420 L320,390 L360,430 L400,380 L440,440 L480,370 L520,420 L560,390 L600,430 L640,380 L680,440 L720,370 L760,420 L800,390 L840,430 L880,380 L920,440 L960,370 L1000,420 L1040,390 L1080,430 L1120,380 L1160,440 L1200,370 L1240,420 L1280,390 L1320,430 L1360,380 L1400,440 L1440,370 L1480,420 L1520,390 L1560,430 L1600,380 L1640,440 L1680,370 L1720,420 L1760,390 L1800,430 L1840,380 L1880,440 L1920,370"
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                style={{
                  opacity: 0.6,
                  animation: 'eeg-flow 6s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 4px #00d4ff)',
                  strokeLinecap: 'round'
                }} />
          
          {/* Secondary subtle EEG wave */}
          <path d="M0,600 L60,620 L120,580 L180,640 L240,560 L300,650 L360,570 L420,620 L480,590 L540,630 L600,580 L660,640 L720,570 L780,620 L840,590 L900,630 L960,580 L1020,640 L1080,570 L1140,620 L1200,590 L1260,630 L1320,580 L1380,640 L1440,570 L1500,620 L1560,590 L1620,630 L1680,580 L1740,640 L1800,570 L1860,620 L1920,590"
                stroke="url(#eegGradient2)" 
                strokeWidth="1.5" 
                fill="none" 
                style={{
                  opacity: 0.4,
                  animation: 'eeg-flow 8s ease-in-out infinite reverse',
                  filter: 'drop-shadow(0 0 3px #a855f7)',
                  strokeLinecap: 'round'
                }} />
        </svg>
      </div>
      
      {/* Large brain image on right side - optimized */}
      <div className="absolute top-10 right-1 sm:top-10 sm:right-6 lg:top-8 lg:right-8 xl:top-4 xl:right-12 z-20 flex flex-col justify-center h-full max-h-screen">
        <div className="flex flex-col justify-center">
          <img 
            src={futuristicBrain} 
            alt="Futuristic brain with neural connections"
            className="w-40 sm:w-64 lg:w-80 xl:w-96 h-auto object-contain mix-blend-screen"
            style={{
              filter: 'saturate(1.2) brightness(1.4) contrast(1.1)',
              animation: 'brainGlow 3s ease-in-out infinite alternate',
              maxHeight: '90vh',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
      
      {/* Main text content - centered and responsive */}
      <div className="absolute inset-0 flex items-center justify-start px-3 sm:px-8 lg:px-16 xl:px-20 z-10">
        <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-2/5 text-left">
          <h1 className="text-lg sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-6 lg:mb-8 xl:mb-10 leading-tight tracking-tight max-w-4xl" style={{color: '#ffffff'}}>
            Too Late
          </h1>
          <p className="text-xs sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 sm:mb-8 lg:mb-12 xl:mb-16 leading-relaxed max-w-2xl">
            As brain-computer devices become more common, the risk of brain data being misused is growing. XBrainer AI makes tools to keep this data safe.
          </p>
          
          {/* Call-to-action buttons - responsive */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 lg:gap-8">
            <button 
              className="rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-3 sm:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-4 lg:py-5 touch-manipulation text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300"
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                const interval = startHoverAnimation(btn);
                (btn as any).hoverInterval = interval;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if ((btn as any).hoverInterval) {
                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                  (btn as any).hoverInterval = null;
                }
              }}
            >
              JOIN THE WAITLIST
            </button>
            <button 
              className="rounded-full border border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/10 px-3 sm:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-4 lg:py-5 touch-manipulation text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300"
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                const interval = startHoverAnimation(btn);
                (btn as any).hoverInterval = interval;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if ((btn as any).hoverInterval) {
                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                  (btn as any).hoverInterval = null;
                }
              }}
            >
              SEE THE DEMO
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom navigation with proper spacing - responsive positioning */}
      <div className="absolute bottom-1 sm:bottom-6 lg:bottom-8 xl:bottom-12 left-3 sm:left-8 lg:left-16 xl:left-20 right-3 sm:right-8 lg:right-16 xl:right-20 z-20">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-center lg:justify-center items-center gap-1 sm:gap-8 lg:gap-12 xl:gap-16 text-center">
          {/* Navigation buttons with optimized click handlers */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-8 lg:gap-12 xl:gap-16">
            <button 
              id="problem-btn"
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded z-[99999] relative"
              onClick={(e) => {
                console.log('🚀 PROBLEM CLICKED - Starting letter animation');
                const btn = e.currentTarget as HTMLElement;
                animateLetters(btn, 'PROBLEM');
                setTimeout(() => {
                  const targetElement = document.querySelector('#problem');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 500);
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                const interval = startHoverAnimation(btn);
                (btn as any).hoverInterval = interval;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if ((btn as any).hoverInterval) {
                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                  (btn as any).hoverInterval = null;
                }
              }}
            >
              PROBLEM
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              id="urgency-btn"
              onClick={() => {
                document.querySelector('#urgency')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                const interval = startHoverAnimation(btn);
                (btn as any).hoverInterval = interval;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if ((btn as any).hoverInterval) {
                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                  (btn as any).hoverInterval = null;
                }
              }}
            >
              URGENCY
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none hidden sm:block bg-transparent border-none p-1 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              id="tech-adv-btn"
              onClick={(e) => {
                console.log('🚀 SOLUTION CLICKED - Starting letter animation');
                document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                const interval = startHoverAnimation(btn);
                (btn as any).hoverInterval = interval;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if ((btn as any).hoverInterval) {
                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                  (btn as any).hoverInterval = null;
                }
              }}
            >
              SOLUTION
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none hidden sm:block bg-transparent border-none p-1 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={(e) => {
                console.log('🚀 OUR EDGE CLICKED - Starting letter animation');
                document.querySelector('#edge')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                const interval = startHoverAnimation(btn);
                (btn as any).hoverInterval = interval;
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                if ((btn as any).hoverInterval) {
                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                  (btn as any).hoverInterval = null;
                }
              }}
            >
              OUR EDGE
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default HeroXBrainer;