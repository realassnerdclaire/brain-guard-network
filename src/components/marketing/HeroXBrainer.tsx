import heroImage from "@/assets/hero-xbrainer.jpg";
import NeuralBackdrop from "./NeuralBackdrop";
import AnimatedEEG from "./AnimatedEEG";

const HeroXBrainer = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <NeuralBackdrop />
      <AnimatedEEG />
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl leading-[1.02] font-semibold sm:text-7xl lg:text-8xl">
            <span className="text-gradient-brand">HTTPS for your brain</span>
          </h1>
        </div>
      </div>
      {/* Subtle brain visual on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[52%] hidden sm:block">
        <img
          src={heroImage}
          alt="Abstract brain mesh with neon EEG particles"
          className="h-full w-full object-cover opacity-80 mix-blend-screen"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default HeroXBrainer;
