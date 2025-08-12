import { Button } from "@/components/ui/button";

const HeroXBrainer = () => {
  console.log("HeroXBrainer rendering - should have NO background images or components");
  return (
    <section className="relative min-h-screen bg-black">
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
      
      <div className="container relative z-10 flex items-center min-h-screen py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-[1.1] font-normal text-white sm:text-6xl lg:text-7xl">
            Secure Neural Data Before It's Too Late
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            As brain-computer devices become more common, the risk of brain data being stolen or changed is growing. XBrainer AI make stools to keep this data safe.
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
