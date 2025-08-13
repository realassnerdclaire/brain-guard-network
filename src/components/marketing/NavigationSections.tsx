import { AlertTriangle, Shield, Brain, Zap } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problem" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/e289f332-67c8-4420-919d-c7146bb726d9.png')`,
            filter: 'blur(0.3px) brightness(0.6)'
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container px-6 md:px-12 max-w-4xl">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Problem
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              EEG and BCI devices are moving from research labs to clinics, homes, and hybrid environments.
            </p>
            <p>
              But raw brain data is highly sensitive, and current security measures fail to protect it in real-time.
            </p>
          </div>

          {/* Warning section */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-semibold text-yellow-400">Unsecured pipelines risk:</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-purple-900/20 rounded-xl border border-purple-500/20">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Data breaches that could expose neurological health information</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-blue-900/20 rounded-xl border border-blue-500/20">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Regulatory delays blocking clinical trials and market launches</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-green-900/20 rounded-xl border border-green-500/20">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Loss of research integrity due to tampering or unauthorized access</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UrgencySection = () => {
  return (
    <section id="urgency" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Neural network background pattern - slightly different opacity */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/e289f332-67c8-4420-919d-c7146bb726d9.png')`,
            filter: 'blur(0.3px) brightness(0.4) hue-rotate(30deg)'
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container px-6 md:px-12 max-w-4xl">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Time is Running Out
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              Neural technology is accelerating faster than security can keep up
            </p>
          </div>

          {/* Urgency stats */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <p className="text-sm opacity-80">BCI market growth annually</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <p className="text-sm opacity-80">Neural devices by 2030</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$30B</div>
                <p className="text-sm opacity-80">Market value projected</p>
              </div>
            </div>
            
            <p className="text-lg text-center opacity-90">
              The window for building secure neural infrastructure is closing fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section id="solution" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Neural network background pattern - different variation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url('/lovable-uploads/e289f332-67c8-4420-919d-c7146bb726d9.png')`,
            filter: 'blur(0.3px) brightness(0.5) hue-rotate(60deg)'
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container px-6 md:px-12 max-w-4xl">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            XBrainer: Neural Security Layer
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              The first and only security platform built specifically for brain-computer interfaces
            </p>
          </div>

          {/* Solution features */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Real-time Encryption</h3>
                <p className="text-sm opacity-80">Session-specific keys encrypt every neural packet at the source</p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Consent at Wire Speed</h3>
                <p className="text-sm opacity-80">User-defined policies enforced in microseconds</p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Immutable Audit Ledger</h3>
                <p className="text-sm opacity-80">Every access event chained and time-stamped</p>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Zero Signal Loss</h3>
                <p className="text-sm opacity-80">100% neural data fidelity preservation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EdgeSection = () => {
  return (
    <section id="edge" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Neural network background pattern - final variation */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: `url('/lovable-uploads/e289f332-67c8-4420-919d-c7146bb726d9.png')`,
            filter: 'blur(0.3px) brightness(0.7) hue-rotate(90deg)'
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container px-6 md:px-12 max-w-4xl">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Competitive Edge
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed mb-12">
            <p>
              Why XBrainer is the only choice for neural data security
            </p>
          </div>

          {/* Edge advantages */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border border-primary/30">
                <h3 className="font-semibold text-primary mb-2">Neural-Native Design</h3>
                <p className="text-sm opacity-80">Built from the ground up for brain-computer interfaces, not adapted from generic cybersecurity</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-medium text-white mb-2">Ultra-Low Latency</h4>
                  <div className="text-2xl font-bold text-primary">&lt;50μs</div>
                  <p className="text-xs opacity-70">Processing time</p>
                </div>
                
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-medium text-white mb-2">Signal Preservation</h4>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-xs opacity-70">Fidelity maintained</p>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-white mb-2">First-Mover Advantage</h3>
                <p className="text-sm opacity-80">Only neural-specific security platform in market with patent portfolio protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProblemSection, UrgencySection, SolutionSection, EdgeSection };