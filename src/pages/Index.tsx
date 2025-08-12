import NavbarXBrainer from "@/components/marketing/NavbarXBrainer";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import FeatureCards from "@/components/marketing/FeatureCards";
import HowItWorks from "@/components/marketing/HowItWorks";
import FAQ from "@/components/marketing/FAQ";
import CTASection from "@/components/marketing/CTASection";
import FooterXBrainer from "@/components/marketing/FooterXBrainer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <NavbarXBrainer />
      <main>
        <HeroXBrainer />
        <section id="vision" className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">A real-time shield for neural data</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Today’s consumer EEG headsets broadcast raw neural signals with zero guardrails. XBrainer is the missing HTTPS layer—encrypts every packet, checks permissions before a read, authenticates with your brainprint, and writes an immutable audit log.
            </p>
          </div>
        </section>
        <FeatureCards />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <FooterXBrainer />
    </div>
  );
};

export default Index;
