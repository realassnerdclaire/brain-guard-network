import heroImage from "@/assets/hero-xbrainer.jpg";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Fingerprint } from "lucide-react";
import NeuralBackdrop from "./NeuralBackdrop";

const HeroXBrainer = () => {
  return (
    <section className="relative overflow-hidden">
      <NeuralBackdrop />
      <div className="container grid gap-10 py-16 md:py-24 lg:py-32 lg:grid-cols-2 items-center">
        <div className="text-left animate-enter">
          <p className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Shield className="h-3.5 w-3.5" /> Real-time neural data security
            </span>
          </p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">HTTPS for your brain</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            XBrainer provides an end-to-end encrypted pipeline for EEG headsets—authenticates every packet, enforces user consent in microseconds, and writes an immutable audit log.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" variant="glass" className="px-8 hover-scale" asChild>
              <a href="#cta">Join the waitlist</a>
            </Button>
            <Button size="lg" variant="outline" className="hover-scale" asChild>
              <a href="#features">Explore features</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4" /> E2E encryption</span>
            <span className="inline-flex items-center gap-2"><Fingerprint className="h-4 w-4" /> Brainprint auth</span>
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4" /> Immutable audit</span>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Glowing neural waveforms flowing through a secure shield, representing encrypted brain data"
            className="w-full rounded-xl shadow-glow ring-1 ring-border"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;
