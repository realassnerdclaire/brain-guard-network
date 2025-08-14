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
        {/* Background Nebula */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src="/lovable-uploads/c93b77ed-67f7-4582-bdc4-916188a4fe5f.png"
            alt=""
            className="absolute top-2 right-8 w-72 h-72 object-cover opacity-45"
            style={{
              filter: 'brightness(0.9) contrast(1.1)',
              transform: 'rotate(8deg)'
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About XBrainer AI</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            {/* What is XBrainer AI */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#6C63FF]/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-[#6C63FF] mb-4">What is XBrainer AI?</h2>
              <p className="text-white/90 text-base">
                Real-time security layer for brain–computer interfaces. Encrypts streams, validates packets, manages consent-based access, and maintains audit logs between EEG/IMU devices and applications.
              </p>
              <div className="grid grid-cols-4 gap-3 mt-4 text-xs text-white/70">
                <span className="px-2 py-1 bg-[#6C63FF]/20 rounded">Hardware-agnostic</span>
                <span className="px-2 py-1 bg-[#6C63FF]/20 rounded">Low-latency</span>
                <span className="px-2 py-1 bg-[#6C63FF]/20 rounded">Validated data</span>
                <span className="px-2 py-1 bg-[#6C63FF]/20 rounded">Access-controlled</span>
              </div>
            </div>

            {/* Why it matters */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#A855F7]/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-[#A855F7] mb-4">Why it matters?</h2>
              <p className="text-white/90 text-base">
                EEG/BCI pipelines lack encryption, packet validation, consent controls, and audit logs. Missing security creates <span className="text-red-400">exposed data</span>, <span className="text-red-400">corrupted results</span>, and <span className="text-red-400">delayed approvals</span> as projects scale to production.
              </p>
            </div>

            {/* Founder Team */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#3B82F6]/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-[#3B82F6] mb-6">Founder Team</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-[#6C63FF] pl-4">
                  <h3 className="text-lg font-semibold text-[#6C63FF] mb-1">Claire Kwon - Founder</h3>
                  <p className="text-white/80 text-sm">
                    Applied Mathematics • Amazon, Microsoft, Goldman Sachs • AI architect leading signal capture, encryption, packet verification, CI/CD, observability
                  </p>
                </div>
                
                <div className="border-l-2 border-[#A855F7] pl-4">
                  <h3 className="text-lg font-semibold text-[#A855F7] mb-1">Owen Anderson - Co-founder</h3>
                  <p className="text-white/80 text-sm">
                    Neural signal researcher • Cleveland Clinic • Journal of Neurophysiology first author • EEG-controlled prosthetics • Device integration, real-time validation
                  </p>
                </div>
                
                <div className="border-l-2 border-[#3B82F6] pl-4">
                  <h3 className="text-lg font-semibold text-[#3B82F6] mb-1">Angelina Liu — Co-Founder</h3>
                  <p className="text-white/80 text-sm">
                    Neuroscience researcher • Columbia & Mount Sinai • EEG acquisition, preprocessing, artifact correction • Signal-quality models, dataset curation
                  </p>
                </div>
              </div>
            </div>

            {/* Why we started XBrainer AI */}
            <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#14B8A6]/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-[#14B8A6] mb-4">Why we started XBrainer AI</h2>
              <p className="text-white/90 text-base leading-relaxed">
                Claire's stroke left her exposed and vulnerable—neural signals needed protection at capture. Owen saw timing errors destroy Cleveland Clinic results. Angelina witnessed corrupted Mount Sinai sessions that should have been stopped upstream. We're building the missing security layer: lock, check, gate, log—so when biology wavers, data doesn't.
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