import NeuralBackdrop from "./NeuralBackdrop";
import AnimatedEEG from "./AnimatedEEG";

const HeroXBrainer = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <NeuralBackdrop />
      <AnimatedEEG />
      
      {/* XBrainer logo wave lines spanning full background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'hsl(var(--brand))', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: 'hsl(var(--brand-2))', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: 'hsl(var(--brand))', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          {/* First wave line */}
          <path d="M0,300 Q480,250 960,300 T1920,300" 
                stroke="url(#waveGradient)" 
                strokeWidth="4" 
                fill="none" 
                className="animate-pulse" />
          
          {/* Second wave line */}
          <path d="M0,540 Q480,490 960,540 T1920,540" 
                stroke="url(#waveGradient)" 
                strokeWidth="4" 
                fill="none" 
                className="animate-pulse" 
                style={{animationDelay: '0.5s'}} />
          
          {/* Third wave line */}
          <path d="M0,780 Q480,730 960,780 T1920,780" 
                stroke="url(#waveGradient)" 
                strokeWidth="4" 
                fill="none" 
                className="animate-pulse" 
                style={{animationDelay: '1s'}} />
        </svg>
      </div>
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl leading-[1.02] font-semibold sm:text-7xl lg:text-8xl">
            <span className="text-gradient-brand">HTTPS for your brain</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;
