import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";

const HeroXBrainer = () => {
  console.log("HeroXBrainer rendering - should have NO background images or components");
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* XBrainer AI logo and company name - top left */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-6">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-16 w-auto mix-blend-screen opacity-90 rounded-lg" 
          style={{
            filter: 'blur(0.5px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="flex flex-col">
          <span className="text-white text-4xl font-bold tracking-tight">
            XBrainer AI
          </span>
          <span className="text-white/70 text-lg font-medium">
            The firewall for your brain
          </span>
        </div>
      </div>
      
      
      {/* EEG stream signals across entire page - background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="eegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 0.8}} />
            </linearGradient>
            <linearGradient id="eegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 0.9}} />
              <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          {/* EEG waves flowing from brain area outward */}
          <path d="M1200,300 Q1400,250 1600,300 Q1800,350 1920,300" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 3s ease-in-out infinite'}} />
          
          <path d="M1100,450 Q1300,400 1500,450 Q1700,500 1920,450" 
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 4s ease-in-out infinite', animationDelay: '0.5s'}} />
          
          <path d="M1000,600 Q1200,550 1400,600 Q1600,650 1920,600" 
                stroke="url(#eegGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 5s ease-in-out infinite', animationDelay: '1s'}} />
                
          {/* EEG waves spreading across entire page */}
          <path d="M0,200 Q300,150 600,200 Q900,250 1200,200 Q1500,150 1920,200" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 6s ease-in-out infinite'}} />
          
          <path d="M0,400 Q400,350 800,400 Q1200,450 1600,400 Q1800,350 1920,400" 
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 7s ease-in-out infinite', animationDelay: '1.5s'}} />
          
          <path d="M0,600 Q350,550 700,600 Q1050,650 1400,600 Q1650,550 1920,600" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 8s ease-in-out infinite', animationDelay: '2s'}} />
                
          <path d="M0,800 Q250,750 500,800 Q750,850 1000,800 Q1250,750 1500,800 Q1700,850 1920,800" 
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 9s ease-in-out infinite', animationDelay: '2.5s'}} />
                
          {/* Additional flowing signals from brain */}
          <path d="M1150,380 Q900,330 650,380 Q400,430 0,380" 
                stroke="url(#eegGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'reverse-flow 5s ease-in-out infinite', animationDelay: '3s'}} />
                
          <path d="M1250,520 Q1000,470 750,520 Q500,570 0,520" 
                stroke="url(#eegGradient2)" 
                strokeWidth="1.5" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'reverse-flow 6s ease-in-out infinite', animationDelay: '3.5s'}} />
                
          {/* Background data streams outside brain area */}
          <path d="M0,100 Q200,80 400,100 Q600,120 800,100 Q1000,80 1200,100" 
                stroke="url(#eegGradient)" 
                strokeWidth="1" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 10s ease-in-out infinite', animationDelay: '4s'}} />
                
          <path d="M0,900 Q300,880 600,900 Q900,920 1200,900 Q1500,880 1920,900" 
                stroke="url(#eegGradient2)" 
                strokeWidth="1" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 12s ease-in-out infinite', animationDelay: '5s'}} />
                
          <path d="M0,50 Q400,30 800,50 Q1200,70 1920,50" 
                stroke="url(#eegGradient)" 
                strokeWidth="0.8" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 8s ease-in-out infinite', animationDelay: '6s'}} />
                
          <path d="M0,950 Q500,930 1000,950 Q1500,970 1920,950" 
                stroke="url(#eegGradient2)" 
                strokeWidth="0.8" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 9s ease-in-out infinite', animationDelay: '7s'}} />
        </svg>
      </div>

      {/* Enhanced futuristic neon brain - foreground layer */}
      <div className="absolute right-0 top-1/2 -translate-y-4 w-3/5 h-[80vh] z-10 animate-pulse">
        <img
          src={futuristicBrain}
          alt="Futuristic translucent brain with neural pathways"
          className="w-full h-full object-cover opacity-60 animate-pulse"
          loading="eager"
          decoding="async"
          style={{
            filter: 'drop-shadow(0 0 15px #00d4ff) drop-shadow(0 0 25px #a855f7) brightness(1.1) contrast(1.1) blur(2px)',
            maskImage: 'radial-gradient(ellipse 70% 80% at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 85%)',
            animation: 'float 6s ease-in-out infinite',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      <div className="container relative z-10 flex items-center h-screen py-24">
        <div className="max-w-2xl relative z-15">
          <h1 className="text-5xl leading-[1.1] font-normal text-white sm:text-6xl lg:text-7xl">
            Secure Neural Data Before It's Too Late
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            As brain-computer devices become more common, the risk of brain data being stolen or changed is growing. XBrainer AI makes tools to keep this data safe.
          </p>
        </div>
        
        <div className="absolute bottom-40 right-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-8 py-3"
            asChild
          >
            <a href="#cta">JOIN THE WAITLIST +</a>
          </Button>
        </div>
      </div>
      
      {/* Press logos at bottom */}
      <div className="absolute bottom-16 left-0 right-0">
        <div className="container">
          <div className="flex items-center justify-center gap-12 opacity-60">
            <div className="text-white/60 text-sm font-medium">TECHCRUNCH</div>
            <div className="text-white/60 text-sm font-medium">WIRED</div>
            <div className="text-white/60 text-sm font-medium">MIT TECH REVIEW</div>
            <div className="text-white/60 text-sm font-medium">WALL ST JOURNAL</div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroXBrainer;
