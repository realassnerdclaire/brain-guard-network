import { Brain, Activity, ReceiptText } from "lucide-react";

const FEATURES = [
  {
    title: "Encrypt every packet",
    description:
      "Session-specific keys and streaming encryption protect raw EEG at the source and in motion.",
    Icon: Brain,
  },
  {
    title: "Consent at wire speed",
    description:
      "User-driven policies are enforced before reads—grant, revoke, and scope access in microseconds.",
    Icon: Activity,
  },
  {
    title: "Immutable audit ledger",
    description:
      "Every access event is chained and time-stamped for compliance, traceability, and trust.",
    Icon: ReceiptText,
  },
];

const FeatureCards = () => {
  return (
    <section id="features" className="container py-20 md:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-3xl lg:text-4xl">Security baked into the signal flow</h2>
        <p className="mt-3 text-muted-foreground">
          We don’t decode thoughts—we defend them. XBrainer turns raw brainwaves into a trusted asset.
        </p>
      </div>
      <div className="mt-16 md:mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {FEATURES.map(({ title, description, Icon }) => (
          <article key={title} className="rounded-xl border bg-card p-8 md:p-6 lg:p-8 shadow-elegant hover-scale">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground shadow-glow">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
