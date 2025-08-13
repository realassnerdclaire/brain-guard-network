import { Shield, Lock, Eye, Zap, CheckCircle } from "lucide-react";

const Solution = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              XBrainer: Neural Security Layer
            </h1>
            <p className="text-xl text-muted-foreground">
              The first and only security platform built specifically for brain-computer interfaces
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground shadow-glow">
              <div className="text-center mb-8">
                <Shield className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-4">Complete Neural Protection</h2>
                <p className="opacity-90">
                  End-to-end security that protects neural data from the moment it's captured 
                  to its final destination
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Real-time Encryption</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Session-specific keys encrypt every neural packet at the source, 
                  ensuring raw brainwave data never travels unprotected.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Microsecond encryption latency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Hardware-optimized primitives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Zero signal degradation</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Consent at Wire Speed</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  User-defined policies are enforced before any neural data access, 
                  with real-time grant, revoke, and scope controls.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Microsecond policy enforcement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Granular access controls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Dynamic permission updates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Architecture Overview</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                  <h3 className="font-medium mb-2">Capture Layer</h3>
                  <p className="text-sm text-muted-foreground">
                    Intercepts raw neural signals at the device level
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                  <h3 className="font-medium mb-2">Security Pipeline</h3>
                  <p className="text-sm text-muted-foreground">
                    Encrypts, validates consent, and creates audit trails
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                  <h3 className="font-medium mb-2">Secure Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Authorized applications receive protected neural data
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <h2 className="text-2xl font-semibold mb-6">Immutable Audit Ledger</h2>
              <p className="text-muted-foreground mb-6">
                Every neural data access event is cryptographically chained and timestamped, 
                creating an unalterable record for compliance and trust.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2">What We Track</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Data access timestamps</li>
                    <li>• User consent states</li>
                    <li>• Application identities</li>
                    <li>• Data usage patterns</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2">Compliance Benefits</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• GDPR audit readiness</li>
                    <li>• HIPAA compliance support</li>
                    <li>• Research ethics validation</li>
                    <li>• Regulatory transparency</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-primary p-8 rounded-xl text-primary-foreground shadow-glow">
              <h2 className="text-2xl font-semibold mb-4">Ready to Secure Neural Data?</h2>
              <p className="opacity-90 mb-6">
                Join the companies building the future of safe, compliant brain-computer interfaces
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Start Protection Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;