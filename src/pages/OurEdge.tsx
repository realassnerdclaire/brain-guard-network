import { Brain, Cpu, Shield, Zap, Globe, Users } from "lucide-react";

const OurEdge = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Competitive Edge
            </h1>
            <p className="text-xl text-muted-foreground">
              Why XBrainer is the only choice for neural data security
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground shadow-glow">
              <div className="text-center mb-8">
                <Brain className="h-16 w-16 mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-4">Neural-Native Design</h2>
                <p className="opacity-90">
                  Built from the ground up for brain-computer interfaces, not adapted from generic cybersecurity
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Traditional Security</h3>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>• Generic data protection</li>
                    <li>• Network-level security</li>
                    <li>• Application-based controls</li>
                    <li>• Post-capture encryption</li>
                  </ul>
                </div>
                <div className="bg-white/20 p-4 rounded-lg border border-white/30">
                  <h3 className="font-semibold mb-2">XBrainer Advantage</h3>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>• Neural signal specialization</li>
                    <li>• Device-level interception</li>
                    <li>• Cognitive consent models</li>
                    <li>• Real-time stream protection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Ultra-Low Latency</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Hardware-optimized encryption that processes neural signals in microseconds, 
                  not milliseconds like traditional security solutions.
                </p>
                <div className="bg-muted/30 p-3 rounded text-center">
                  <div className="text-2xl font-bold text-primary">&lt;50μs</div>
                  <div className="text-sm text-muted-foreground">Processing latency</div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Zero Signal Loss</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our pipeline preserves 100% of neural data fidelity while adding 
                  military-grade security protection.
                </p>
                <div className="bg-muted/30 p-3 rounded text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Signal preservation</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Unique Capabilities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-3">Cognitive Consent</h3>
                  <p className="text-sm text-muted-foreground">
                    First platform to enforce user permissions at the neural signal level, 
                    not just the application level.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-3">Stream-Native Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Purpose-built for continuous neural data streams, not batch file processing.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-3">Cross-Device Validation</h3>
                  <p className="text-sm text-muted-foreground">
                    Unified security layer that works across all BCI manufacturers and protocols.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Market Position</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">First-Mover Advantages</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Only neural-specific security platform in market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Deep partnerships with BCI manufacturers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Regulatory compliance head start</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Patent portfolio protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Competitive Moat</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Years of neural security research and development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Hardware optimization expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Established trust with medical institutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                      <span>Network effects from device integrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Team Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                  <h3 className="font-semibold mb-3">Neurotechnology Veterans</h3>
                  <p className="text-sm text-muted-foreground">
                    Core team with decades of experience in BCI development, 
                    neural signal processing, and medical device regulations.
                  </p>
                </div>
                <div className="p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                  <h3 className="font-semibold mb-3">Cybersecurity Experts</h3>
                  <p className="text-sm text-muted-foreground">
                    Security architects from leading cybersecurity firms with 
                    specialized knowledge in real-time encryption systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-primary p-8 rounded-xl text-primary-foreground shadow-glow">
              <h2 className="text-2xl font-semibold mb-4">The Clear Choice</h2>
              <p className="opacity-90 mb-6">
                When neural data security becomes mandatory, XBrainer will be the only proven solution. 
                Partner with us now to stay ahead of the curve.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Secure Your Advantage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;