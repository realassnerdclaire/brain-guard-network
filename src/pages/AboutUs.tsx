import { useState } from "react";
import { Menu, X } from "lucide-react";
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
          
          <div className="space-y-8 text-lg leading-relaxed">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">What is XBrainer AI?</h2>
              <p className="text-white/90">
                We build a real-time security layer for brain–computer interfaces. It sits between EEG/IMU devices and apps to encrypt streams, run packet checks, apply consent-based access, and record a write-once audit log. Hardware-agnostic and low-latency, it scales from lab pilots to clinical and enterprise deployments on-prem or cloud. So applications receive validated, access-controlled neural data without firmware changes.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#A855F7]">Why it matters?</h2>
              <p className="text-white/90">
                Many EEG/BCI pipelines lack four basics: encryption in transit, packet checks (timing/range/artifacts), consent-based access, and a write-once audit log. As projects move from pilots to production, missing controls create immediate risk: exposed data, corrupted results, and delayed approvals. A real-time, hardware-agnostic security layer at the signal source closes this gap.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#3B82F6]">Founder Team</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#6C63FF]">Claire Kwon - Founder</h3>
                  <p className="text-white/90">
                    Claire holds a degree in Applied Mathematics. She built low-latency ML and data pipelines at Amazon, Microsoft, and Goldman Sachs, and she works as an AI architect. At XBrainer AI, she leads signal capture, stream encryption, packet verification, CI/CD, and observability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#A855F7]">Owen Anderson - Co-founder</h3>
                  <p className="text-white/90">
                    Owen is a neural signal processing researcher at the Cleveland Clinic, where he analyzes EEG and local field potentials in deep brain stimulation studies. He is a first author in the Journal of Neurophysiology and has presented his work at national neuroscience conferences. He led the development of a live EEG-controlled prosthetic-hand simulation that is now transitioning to a hardware prototype. At XBrainer AI, he leads device integration, real-time signal validation, and researcher partnerships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#3B82F6]">Angelina Liu — Co-Founder</h3>
                  <p className="text-white/90">
                    Angelina is a neuroscience researcher at Columbia University and Mount Sinai focused on EEG acquisition, preprocessing, and artifact correction. She develops signal-quality and anomaly-detection models and designs lab protocols for reliable data collection. At XBrainer AI, she leads neuroscience methods, dataset curation, and evaluation, and drives integrations with research teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#14B8A6]">Why we started XBrainer AI</h2>
              <p className="text-white/90">
                Claire's three stroke left her awake but unable to move; that moment made the risk of unguarded neural signals impossible to ignore. Living with the memory of that stroke—the loss of control, the exposure—made one thing clear: brain data must be protected at capture. The third time she revisited that stroke, it wasn't about fear—it was a decision to build the missing safety layer. Owen Anderson, working on EEG/LFP in Cleveland Clinic DBS studies, saw how tiny timing and range errors can break results unless checks run inline. Angela (Angelina) Liu, in Mount Sinai EEG work, saw corrupted and artifact-heavy sessions that should have been stopped upstream. Together we're building a real-time security layer: lock data at capture, check every packet, gate access by consent, and keep a write-once audit log—so even when biology or devices waver, the data does not.
              </p>
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