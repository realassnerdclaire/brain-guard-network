
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
            {/* Subtle background grid */}
            <div className="absolute inset-0 opacity-10">
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
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[#a855f7] rounded-full animate-pulse" />
                    <span className="text-[#a855f7] font-medium text-sm uppercase tracking-wider">Current State</span>
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                    Brain-computer devices send raw brain (EEG) and motion data. Many pipelines still miss four basics: 
                    <span className="text-white font-semibold"> secure transport</span>, 
                    <span className="text-white font-semibold"> packet checks</span> (timing and signal errors), 
                    <span className="text-white font-semibold"> access control tied to user consent</span>, and a 
                    <span className="text-white font-semibold"> permanent access log</span>.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    Without this, bad data reaches apps, unauthorized reads happen, and teams can't show compliance—causing 
                    <span className="text-[#a855f7] font-semibold"> exposure risk</span>, 
                    <span className="text-[#a855f7] font-semibold"> unreliable results</span>, and 
                    <span className="text-[#a855f7] font-semibold"> stalled deployments</span>. 
                    As headsets move from labs to everyday use, this gap is immediate.
                  </p>
                </div>
              </div>

              {/* Four Missing Basics */}
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
                
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse" />
                    <span className="text-[#00d4ff] font-medium text-sm uppercase tracking-wider">XBrainer Solution</span>
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    We add a <span className="text-[#00d4ff] font-semibold">software layer between device and app</span> that 
                    <span className="text-white font-semibold"> checks each packet in real time</span>, 
                    <span className="text-white font-semibold"> drops corrupted data</span>, 
                    <span className="text-white font-semibold"> controls who can read the stream</span>, and 
                    <span className="text-white font-semibold"> records every access in a permanent log</span>.
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
