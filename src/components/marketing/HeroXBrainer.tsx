import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";
import { animateLetters, startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const HeroXBrainer = () => {
  console.log("🔥 EEG DEBUG: Hero component rendering with ultra-visible EEG elements");
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center sm:justify-start" style={{backgroundColor: '#1a1a1a'}}>
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
      
      {/* ULTRA BRIGHT EEG BARS - MUST BE VISIBLE */}
      <div className="absolute inset-0 pointer-events-none z-[9999]" style={{backgroundColor: 'rgba(255,0,255,0.1)'}}>
        <div className="w-full h-full relative">
          {/* Bright pink moving bar */}
          <div 
            className="absolute top-20 left-0 w-full h-2 bg-pink-500"
            style={{
              animation: 'lightning-eeg 0.8s linear infinite',
              boxShadow: '0 0 30px #FF1493, 0 0 60px #FF1493',
              backgroundColor: '#FF1493'
            }}
          />
          
          {/* Bright blue moving bar */}
          <div 
            className="absolute top-32 left-0 w-full h-2 bg-blue-500"
            style={{
              animation: 'lightning-eeg 0.6s linear infinite reverse',
              boxShadow: '0 0 30px #00BFFF, 0 0 60px #00BFFF',
              backgroundColor: '#00BFFF'
            }}
          />
          
          {/* Bright purple moving bar */}
          <div 
            className="absolute top-44 left-0 w-full h-2 bg-purple-500"
            style={{
              animation: 'lightning-eeg 1s linear infinite',
              boxShadow: '0 0 30px #9932CC, 0 0 60px #9932CC',
              backgroundColor: '#9932CC'
            }}
          />
          
          {/* More visible bars */}
          <div 
            className="absolute top-56 left-0 w-full h-2"
            style={{
              animation: 'lightning-eeg 0.4s linear infinite reverse',
              boxShadow: '0 0 30px #FF69B4, 0 0 60px #FF69B4',
              backgroundColor: '#FF69B4'
            }}
          />
          
          <div 
            className="absolute top-68 left-0 w-full h-2"
            style={{
              animation: 'lightning-eeg 0.7s linear infinite',
              boxShadow: '0 0 30px #1E90FF, 0 0 60px #1E90FF',
              backgroundColor: '#1E90FF'
            }}
          />
        </div>
      </div>

      {/* Enhanced futuristic neon brain - foreground layer */}
      <div className="absolute right-0 sm:right-0 top-1/3 sm:top-1/2 -translate-y-4 w-3/5 sm:w-2/5 h-[50vh] sm:h-[65vh] z-10">
        <img
          src={futuristicBrain}
          alt="Futuristic translucent brain with neural pathways"
          className="w-full h-full object-cover opacity-35 sm:opacity-40"
          loading="eager"
          decoding="async"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.15)) drop-shadow(0 0 50px rgba(168, 85, 247, 0.12)) brightness(0.9) contrast(1.0) blur(1px)',
            maskImage: 'radial-gradient(ellipse 150% 140% at center, rgba(0,0,0,0.9) 5%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.02) 85%, rgba(0,0,0,0.01) 95%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 150% 140% at center, rgba(0,0,0,0.9) 5%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.02) 85%, rgba(0,0,0,0.01) 95%, rgba(0,0,0,0) 100%)',
            animation: 'float 8s ease-in-out infinite',
            mixBlendMode: 'soft-light'
          }}
        />
      </div>
      
      <div className="container relative z-10 h-full flex items-start sm:items-center justify-start pt-48 sm:py-0 px-3 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl relative z-15 mt-0 sm:mt-16 lg:mt-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl leading-tight font-normal mb-2 sm:mb-8 lg:mb-12" id="hero-title">
            <span className="inline-block" style={{animation: 'color-cycle 5s ease-in-out infinite'}}>Secure Neural Data Before It's Too Late</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 max-w-xs lg:max-w-xl xl:max-w-2xl leading-tight mb-3 sm:mb-12 lg:mb-16 mt-8">
            As brain-computer devices become more common, the risk of brain data being misused is growing. XBrainer AI makes tools to keep this data safe.
          </p>
        </div>
        
        {/* Action buttons - brought significantly up */}
        <div className="absolute bottom-52 sm:bottom-40 lg:bottom-48 xl:bottom-52 right-3 sm:right-8 lg:right-16 xl:right-20 flex flex-col gap-1 sm:gap-4 lg:gap-6">
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
            onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            onClick={() => {
              const demoSection = document.getElementById('demo');
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            SEE THE DEMO
          </button>
        </div>
      </div>
      
      {/* Interactive navigation labels - brought significantly up */}
      <div className="absolute bottom-32 sm:bottom-20 lg:bottom-24 xl:bottom-28 left-0 right-0 z-[9999] pointer-events-none">
        <div className="container px-2 sm:px-8 lg:px-12 xl:px-16 pointer-events-none">
          <div className="flex items-center justify-center gap-1 sm:gap-6 lg:gap-10 xl:gap-16 flex-wrap pointer-events-auto">
            <button 
              id="problem-btn"
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded z-[99999] relative"
              style={{
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 99999,
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                const problemSection = document.getElementById('problem');
                if (problemSection) {
                  problemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              PROBLEM
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={() => {
                const urgencySection = document.getElementById('urgency');
                if (urgencySection) {
                  urgencySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              URGENCY
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none hidden sm:block bg-transparent border-none p-1 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={() => {
                const solutionSection = document.getElementById('solution');
                if (solutionSection) {
                  solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              SOLUTION
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none sm:hidden bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={() => {
                const solutionSection = document.getElementById('solution');
                if (solutionSection) {
                  solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              SOLUTION
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none hidden sm:block bg-transparent border-none p-1 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={() => {
                const edgeSection = document.getElementById('edge');
                if (edgeSection) {
                  edgeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              OUR EDGE
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none sm:hidden bg-transparent border-none p-1 sm:p-3 lg:p-4 hover:bg-white/10 rounded"
              onClick={() => {
                const edgeSection = document.getElementById('edge');
                if (edgeSection) {
                  edgeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              OUR EDGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;