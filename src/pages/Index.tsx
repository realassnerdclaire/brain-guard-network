
import { useState } from "react";
import { Menu } from "lucide-react";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROBLEM", href: "#problem" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "CAREER", href: "#career" },
    { label: "BRIEFING REQUEST", href: "#briefing" },
    { label: "VISION", href: "#vision" },
    { label: "FEATURE", href: "#features" },
    { label: "HOW IT WORKS", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="min-h-screen w-full">
        <main className="relative">
          {/* Menu button in top right */}
          <header className="absolute left-0 right-0 top-0 z-30">
            <div className="container flex items-center justify-end py-4 sm:py-6 px-4 sm:px-6">
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2"
                >
                  <Menu size={20} />
                  MENU
                </button>
                
                {/* Dropdown menu */}
                {isMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      {menuItems.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 sm:px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium touch-manipulation"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </header>
          <HeroXBrainer />
          
          {/* Problem Section */}
          <section id="problem" className="min-h-screen bg-black flex items-center justify-center py-16 relative overflow-hidden">
            {/* Optimized EEG signal background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" style={{willChange: 'transform'}}>
              <svg className="w-full h-full opacity-40" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="problemEegGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Simplified EEG wave pattern */}
                <path d="M0,300 Q200,280 400,300 T800,300 T1200,300 T1600,300 T1920,300"
                      stroke="url(#problemEegGradient1)" 
                      strokeWidth="2" 
                      fill="none" 
                      style={{
                        opacity: 0.6,
                        strokeLinecap: 'round'
                      }} />
                
                <path d="M0,500 Q250,480 500,500 T1000,500 T1500,500 T1920,500"
                      stroke="url(#problemEegGradient1)" 
                      strokeWidth="1.5" 
                      fill="none" 
                      style={{
                        opacity: 0.4,
                        strokeLinecap: 'round'
                      }} />
              </svg>
            </div>
            
            {/* Subtle background grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[linear-gradient(rgba(0,212,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
            
            <div className="container px-4 max-w-7xl relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                  Problem
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto" />
              </div>
              
              {/* Problem Description */}
              <div className="mb-16 animate-fade-in">
                <div className="border border-white/10 bg-black/40 rounded-2xl p-8 max-w-4xl mx-auto" style={{willChange: 'transform'}}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[#a855f7] rounded-full animate-pulse" />
                    <span className="text-[#a855f7] font-medium text-sm uppercase tracking-wider">Critical Gap</span>
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4">
                    Brain-computer devices send raw EEG data through <span className="text-white font-semibold">unprotected pipelines</span>. 
                    Missing foundational security creates immediate enterprise barriers.
                  </p>
                  <p className="text-lg text-white/80">
                    <span className="text-[#a855f7] font-semibold">Enterprise blocker</span>: bad data reaches apps, unauthorized access occurs, compliance fails. 
                    <span className="text-white font-semibold">Market timing</span>: headsets moving from labs to production.
                  </p>
                </div>
              </div>

              {/* Four Missing Basics */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Missing Security Foundations
                </h3>
                <p className="text-white/60 text-sm uppercase tracking-wider">What current pipelines lack</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">🔒</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Secure Transport</h3>
                  <p className="text-white/60 text-sm">Missing encryption</p>
                </div>
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">📊</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Packet Checks</h3>
                  <p className="text-white/60 text-sm">Timing & signal errors</p>
                </div>
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">👤</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Access Control</h3>
                  <p className="text-white/60 text-sm">Tied to user consent</p>
                </div>
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">📝</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Access Log</h3>
                  <p className="text-white/60 text-sm">Permanent recording</p>
                </div>
              </div>

              {/* Solution */}
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    How XBrainer AI helps
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto" />
                </div>
                
                <div className="border border-white/10 bg-black/40 rounded-2xl p-8 max-w-4xl mx-auto" style={{willChange: 'transform'}}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse" />
                    <span className="text-[#00d4ff] font-medium text-sm uppercase tracking-wider">XBrainer Solution</span>
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    <span className="text-[#00d4ff] font-semibold">Real-time software layer</span> that validates packets, 
                    controls access, and logs everything permanently.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
