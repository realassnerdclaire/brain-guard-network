import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="relative">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-10 text-center shadow-glow">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to make neural data trustworthy?
          </h2>
          <p className="mt-3 text-muted-foreground">
            We’re partnering with research labs, neurotech startups, and clinical teams.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" variant="hero" asChild>
              <a href="mailto:hello@xbrainer.ai?subject=Waitlist%20Request%20—%20XBrainer%20AI">Contact sales</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">See security architecture</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
