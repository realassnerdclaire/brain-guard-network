import brainMesh from "@/assets/brain-mesh-motif.jpg";
import { Button } from "@/components/ui/button";

const HeroXBrainer = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-black">
      {/* Background brain mesh */}
      <div className="absolute inset-0">
        <img
          src={brainMesh}
          alt="Translucent brain mesh with neural particles"
          className="w-full h-full object-cover opacity-90"
          loading="eager"
          decoding="async"
        />
      </div>
      
      {/* XBrainer AI logo and company name - top left */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-4">
        {/* SVG recreated logo with neon effect */}
        <div className="relative">
          <svg width="48" height="36" viewBox="0 0 48 36" className="drop-shadow-lg">
            <defs>
              <filter id="neonGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Three flowing wave shapes */}
            <path 
              d="M4,8 Q12,4 20,8 Q28,12 36,8 Q40,6 44,8" 
              stroke="#00d4ff" 
              strokeWidth="2.5" 
              fill="none" 
              filter="url(#neonGlow)"
              className="animate-pulse"
            />
            <path 
              d="M4,18 Q12,14 20,18 Q28,22 36,18 Q40,16 44,18" 
              stroke="#00d4ff" 
              strokeWidth="2.5" 
              fill="none" 
              filter="url(#neonGlow)"
              className="animate-pulse"
              style={{animationDelay: '0.3s'}}
            />
            <path 
              d="M4,28 Q12,24 20,28 Q28,32 36,28 Q40,26 44,28" 
              stroke="#00d4ff" 
              strokeWidth="2.5" 
              fill="none" 
              filter="url(#neonGlow)"
              className="animate-pulse"
              style={{animationDelay: '0.6s'}}
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-2xl font-bold tracking-tight" style={{
            textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff'
          }}>
            XBrainer AI
          </span>
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
            Neural Security
          </span>
        </div>
      </div>
      
      <div className="container relative z-10 flex items-center min-h-screen py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-[1.1] font-normal text-white sm:text-6xl lg:text-7xl">
            HTTPS for your brain.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            XBrainer provides an end-to-end encrypted pipeline for EEG headsets—authenticates every packet, enforces user consent in microseconds, and writes an immutable audit log.
          </p>
        </div>
        
        <div className="absolute bottom-32 right-16">
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
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container">
          <div className="flex items-center justify-center gap-12 opacity-60">
            <div className="text-white/60 text-sm font-medium">TECHCRUNCH</div>
            <div className="text-white/60 text-sm font-medium">WIRED</div>
            <div className="text-white/60 text-sm font-medium">MIT TECH REVIEW</div>
            <div className="text-white/60 text-sm font-medium">WALL ST JOURNAL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;
