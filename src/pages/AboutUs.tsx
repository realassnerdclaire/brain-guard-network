import { useState } from "react";
import { Menu, X, Shield, Brain, Users, Heart, Zap, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "VISION", path: "/vision" },
    { name: "OVERVIEW", path: "/overview" },
    { name: "COMPLIANCE & STANDARDS", path: "/compliance" },
    { name: "USE CASES", path: "/use-cases" },
    { name: "SECURITY & PRIVACY", path: "/security" },
    { name: "PARTNERS & COLLABORATORS", path: "/partners" },
    { name: "RESOURCES", path: "/resources" },
    { name: "CAREERS", path: "/careers" },
    { name: "FAQ", path: "/faq" }
  ];

  return (
    <div 
      className="dark min-h-screen bg-background text-foreground" 
      style={{
        contain: 'layout style',
        willChange: 'transform'
      }}
    >
      <div 
        className="min-h-screen w-full" 
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >

      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="flex items-center justify-between p-4 md:p-6">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
                alt="XBrainer AI logo" 
                className="h-10 md:h-12 w-auto rounded-lg" 
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))',
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-sm -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                XBrainer AI
              </span>
              <span className="text-xs md:text-sm font-medium text-white">
                Securing Neural Data in Real Time
              </span>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white bg-black/60 backdrop-blur-md border border-blue-600/30 rounded-lg px-3 py-2 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            style={{
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)'
            }}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="text-sm font-medium tracking-widest">MENU</span>
          </button>
        </div>
      </div>

      {/* Side Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/80 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About XBrainer AI</h1>
          
          <div className="space-y-12 text-lg leading-relaxed">
            {/* What is XBrainer AI */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#6C63FF]/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <Shield className="w-12 h-12 text-[#6C63FF]" />
                  <div className="absolute inset-0 bg-[#6C63FF]/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#6C63FF]/20 rounded-xl border border-[#6C63FF]/30">
                  <Brain className="w-8 h-8 text-[#6C63FF]" />
                </div>
                <h2 className="text-3xl font-bold text-[#6C63FF]">What is XBrainer AI?</h2>
              </div>
              <div className="pl-16">
                <p className="text-white/90 mb-4">
                  We build a <span className="text-[#6C63FF] font-semibold">real-time security layer</span> for brain–computer interfaces. It sits between EEG/IMU devices and apps to <span className="text-[#6C63FF] font-semibold">encrypt streams</span>, run <span className="text-[#6C63FF] font-semibold">packet checks</span>, apply <span className="text-[#6C63FF] font-semibold">consent-based access</span>, and record a <span className="text-[#6C63FF] font-semibold">write-once audit log</span>.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#6C63FF]" />
                    <span>Hardware-agnostic</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Zap className="w-5 h-5 text-[#6C63FF]" />
                    <span>Low-latency</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Shield className="w-5 h-5 text-[#6C63FF]" />
                    <span>Validated data</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Lock className="w-5 h-5 text-[#6C63FF]" />
                    <span>Access-controlled</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why it matters */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#A855F7]/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <Zap className="w-12 h-12 text-[#A855F7]" />
                  <div className="absolute inset-0 bg-[#A855F7]/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#A855F7]/20 rounded-xl border border-[#A855F7]/30">
                  <Shield className="w-8 h-8 text-[#A855F7]" />
                </div>
                <h2 className="text-3xl font-bold text-[#A855F7]">Why it matters?</h2>
              </div>
              <div className="pl-16">
                <p className="text-white/90 mb-4">
                  Many EEG/BCI pipelines lack four basics: <span className="text-[#A855F7] font-semibold">encryption in transit</span>, <span className="text-[#A855F7] font-semibold">packet checks</span> (timing/range/artifacts), <span className="text-[#A855F7] font-semibold">consent-based access</span>, and a <span className="text-[#A855F7] font-semibold">write-once audit log</span>. As projects move from pilots to production, missing controls create immediate risk: <span className="text-red-400 font-semibold">exposed data</span>, <span className="text-red-400 font-semibold">corrupted results</span>, and <span className="text-red-400 font-semibold">delayed approvals</span>. A real-time, hardware-agnostic security layer at the signal source closes this gap.
                </p>
              </div>
            </div>

            {/* Founder Team */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#3B82F6]/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <Users className="w-12 h-12 text-[#3B82F6]" />
                  <div className="absolute inset-0 bg-[#3B82F6]/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#3B82F6]/20 rounded-xl border border-[#3B82F6]/30">
                  <Users className="w-8 h-8 text-[#3B82F6]" />
                </div>
                <h2 className="text-3xl font-bold text-[#3B82F6]">Founder Team</h2>
              </div>
              <div className="space-y-8">
                <div className="relative bg-black/30 rounded-xl p-6 border-l-4 border-[#6C63FF]">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#6C63FF]/20 rounded-lg border border-[#6C63FF]/30 shrink-0">
                      <Brain className="w-6 h-6 text-[#6C63FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#6C63FF]">Claire Kwon - Founder</h3>
                      <p className="text-white/90">
                        Claire holds a degree in <span className="text-[#6C63FF] font-semibold">Applied Mathematics</span>. She built low-latency ML and data pipelines at <span className="text-[#6C63FF] font-semibold">Amazon, Microsoft, and Goldman Sachs</span>, and she works as an <span className="text-[#6C63FF] font-semibold">AI architect</span>. At XBrainer AI, she leads signal capture, stream encryption, packet verification, CI/CD, and observability.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative bg-black/30 rounded-xl p-6 border-l-4 border-[#A855F7]">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#A855F7]/20 rounded-lg border border-[#A855F7]/30 shrink-0">
                      <Zap className="w-6 h-6 text-[#A855F7]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#A855F7]">Owen Anderson - Co-founder</h3>
                      <p className="text-white/90">
                        Owen is a <span className="text-[#A855F7] font-semibold">neural signal processing researcher</span> at the <span className="text-[#A855F7] font-semibold">Cleveland Clinic</span>, where he analyzes EEG and local field potentials in deep brain stimulation studies. He is a <span className="text-[#A855F7] font-semibold">first author in the Journal of Neurophysiology</span> and has presented his work at national neuroscience conferences. He led the development of a <span className="text-[#A855F7] font-semibold">live EEG-controlled prosthetic-hand simulation</span> that is now transitioning to a hardware prototype. At XBrainer AI, he leads device integration, real-time signal validation, and researcher partnerships.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative bg-black/30 rounded-xl p-6 border-l-4 border-[#3B82F6]">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#3B82F6]/20 rounded-lg border border-[#3B82F6]/30 shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#3B82F6]">Angelina Liu — Co-Founder</h3>
                      <p className="text-white/90">
                        Angelina is a <span className="text-[#3B82F6] font-semibold">neuroscience researcher</span> at <span className="text-[#3B82F6] font-semibold">Columbia University and Mount Sinai</span> focused on EEG acquisition, preprocessing, and artifact correction. She develops <span className="text-[#3B82F6] font-semibold">signal-quality and anomaly-detection models</span> and designs lab protocols for reliable data collection. At XBrainer AI, she leads neuroscience methods, dataset curation, and evaluation, and drives integrations with research teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why we started XBrainer AI */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#14B8A6]/30 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <Heart className="w-12 h-12 text-[#14B8A6]" />
                  <div className="absolute inset-0 bg-[#14B8A6]/20 rounded-full blur-xl"></div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#14B8A6]/20 rounded-xl border border-[#14B8A6]/30">
                  <Heart className="w-8 h-8 text-[#14B8A6]" />
                </div>
                <h2 className="text-3xl font-bold text-[#14B8A6]">Why we started XBrainer AI</h2>
              </div>
              <div className="pl-16">
                <p className="text-white/90 leading-relaxed">
                  <span className="text-[#14B8A6] font-semibold">Claire's three stroke</span> left her awake but unable to move; that moment made the risk of <span className="text-[#14B8A6] font-semibold">unguarded neural signals</span> impossible to ignore. Living with the memory of that stroke—the <span className="text-red-400">loss of control</span>, the <span className="text-red-400">exposure</span>—made one thing clear: <span className="text-[#14B8A6] font-semibold">brain data must be protected at capture</span>. The third time she revisited that stroke, it wasn't about fear—it was a <span className="text-[#14B8A6] font-semibold">decision to build the missing safety layer</span>. <span className="text-[#14B8A6] font-semibold">Owen Anderson</span>, working on EEG/LFP in Cleveland Clinic DBS studies, saw how tiny <span className="text-orange-400">timing and range errors</span> can break results unless checks run inline. <span className="text-[#14B8A6] font-semibold">Angela (Angelina) Liu</span>, in Mount Sinai EEG work, saw <span className="text-orange-400">corrupted and artifact-heavy sessions</span> that should have been stopped upstream. Together we're building a <span className="text-[#14B8A6] font-semibold">real-time security layer</span>: lock data at capture, check every packet, gate access by consent, and keep a write-once audit log—so even when biology or devices waver, the data does not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      </div>
    </div>
  );
};

export default AboutUs;