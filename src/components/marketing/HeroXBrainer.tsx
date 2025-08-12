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
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
        <img 
          src="/lovable-uploads/fb4d581a-fd58-4277-baca-adfd88467402.png" 
          alt="XBrainer AI logo" 
          className="h-8 w-auto" 
        />
        <span className="text-white text-lg font-medium">XBrainer AI</span>
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
