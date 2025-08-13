import { CircuitBoard, Brain, Activity, Timer } from "lucide-react";

const STEPS = [
  {
    title: "Authenticate",
    description: "Establish session-specific keys and verify device + user identity.",
    Icon: Brain,
  },
  {
    title: "Encrypt",
    description: "Stream EEG with low-latency end‑to‑end encryption.",
    Icon: Activity,
  },
  {
    title: "Enforce consent",
    description: "Evaluate user policies before reads; scope fields and durations.",
    Icon: Timer,
  },
  {
    title: "Audit",
    description: "Chain every access into an immutable, queryable ledger.",
    Icon: CircuitBoard,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="border-t bg-muted/40">
      <div className="container py-16 md:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-3xl lg:text-3xl">How it works</h2>
          <p className="mt-3 text-muted-foreground">A thin but unbreakable layer between headsets and apps.</p>
        </div>
        <div className="mt-10 md:mt-6 grid gap-6 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-xl border bg-card p-6 md:p-4 shadow-elegant">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
