import { Brain, Shield, AlertTriangle } from "lucide-react";

const Problem = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Brain Data Crisis
            </h1>
            <p className="text-xl text-muted-foreground">
              Neural interfaces are advancing faster than the security protecting them
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-semibold">Unprotected Neural Streams</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Brain-computer interfaces transmit raw neural data without encryption, leaving 
                thoughts and intentions vulnerable to interception and manipulation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  EEG signals transmitted in plain text
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  No consent mechanisms for neural data access
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-destructive rounded-full"></div>
                  Zero audit trails for brain data usage
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-warning" />
                </div>
                <h2 className="text-2xl font-semibold">Privacy Nightmare</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Neural data contains the most intimate information about a person - their thoughts, 
                emotions, and cognitive patterns. Yet it flows without protection.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2">Cognitive Fingerprinting</h3>
                  <p className="text-muted-foreground">Brain patterns can identify individuals more uniquely than DNA</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2">Thought Inference</h3>
                  <p className="text-muted-foreground">Neural signals reveal intentions before conscious awareness</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Regulatory Gap</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Current cybersecurity frameworks weren't designed for neural data. 
                Organizations risk compliance violations and ethical breaches.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">The Cost of Inaction</h3>
                <p className="text-sm text-muted-foreground">
                  Without neural-specific security, every BCI deployment is a potential 
                  privacy disaster waiting to happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;