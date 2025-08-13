import { AlertTriangle, Shield, Brain, Zap } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problem" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('/lovable-uploads/e289f332-67c8-4420-919d-c7146bb726d9.png')`,
            filter: 'blur(0.3px) brightness(0.8)'
          }}
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container px-6 md:px-12 max-w-6xl">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            The Problem
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-16"></div>
          
          {/* Main content text */}
          <div className="space-y-8 text-xl md:text-2xl leading-relaxed mb-20 max-w-5xl mx-auto">
            <p className="font-light">
              EEG and BCI devices are moving from research labs to clinics, homes, and hybrid environments.
            </p>
            <p className="font-light">
              But raw brain data is highly sensitive, and current security measures fail to protect it in real-time.
            </p>
          </div>

          {/* Warning section - exactly matching the screenshot */}
          <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-10 border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-semibold text-yellow-400">Unsecured pipelines risk:</h2>
            </div>
            
            {/* Risk items - exactly as shown in screenshot */}
            <div className="space-y-6">
              {/* Purple box with shield icon */}
              <div className="bg-purple-900/60 rounded-2xl p-6 border border-purple-500/30 flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-600/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-purple-200" />
                </div>
                <p className="text-white text-lg font-medium">
                  Data breaches that could expose neurological health information
                </p>
              </div>
              
              {/* Blue box with X icon */}
              <div className="bg-blue-900/60 rounded-2xl p-6 border border-blue-500/30 flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">
                  Regulatory delays blocking clinical trials and market launches
                </p>
              </div>
              
              {/* Green box with chart icon */}
              <div className="bg-green-900/60 rounded-2xl p-6 border border-green-500/30 flex items-center gap-6">
                <div className="w-16 h-16 bg-green-600/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">
                  Loss of research integrity due to tampering or unauthorized access
                </p>
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