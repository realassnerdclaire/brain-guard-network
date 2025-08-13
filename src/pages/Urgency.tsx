import { Clock, TrendingUp, Zap, Globe } from "lucide-react";

const Urgency = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Time is Running Out
            </h1>
            <p className="text-xl text-muted-foreground">
              Neural technology is accelerating faster than security can keep up
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            <div className="bg-gradient-primary p-8 rounded-xl text-primary-foreground shadow-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold">Exponential Growth</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">300%</div>
                  <p className="text-sm opacity-90">BCI market growth annually</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50M+</div>
                  <p className="text-sm opacity-90">Neural devices by 2030</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$30B</div>
                  <p className="text-sm opacity-90">Market value projected</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-semibold">The Security Lag</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                While neural interfaces evolve at breakneck speed, security measures 
                remain stuck in the past. Every day of delay exponentially increases risk.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h3 className="font-medium">Consumer BCIs Launch Unprotected</h3>
                    <p className="text-sm text-muted-foreground">Gaming and wellness devices hit market with zero neural security</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-warning/20 flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h3 className="font-medium">Medical Implants Go Mainstream</h3>
                    <p className="text-sm text-muted-foreground">Clinical BCIs scale without cognitive data protection standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-destructive/30 flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h3 className="font-medium">Mass Neural Surveillance</h3>
                    <p className="text-sm text-muted-foreground">Unprotected brain data becomes the ultimate surveillance tool</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border shadow-elegant">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Act Now or Face the Consequences</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <h3 className="font-medium text-destructive mb-2">If We Wait</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Massive neural data breaches</li>
                    <li>• Irreversible privacy violations</li>
                    <li>• Regulatory crackdowns</li>
                    <li>• Public trust collapse</li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h3 className="font-medium text-primary mb-2">If We Act Now</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Secure neural infrastructure</li>
                    <li>• Compliant BCI deployment</li>
                    <li>• User trust and adoption</li>
                    <li>• Competitive advantage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center bg-muted/30 p-8 rounded-xl">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-semibold mb-4">The Window is Closing</h2>
              <p className="text-muted-foreground">
                Neural security must be built into the foundation, not bolted on later. 
                The decisions we make today will determine whether BCIs liberate or exploit humanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urgency;