
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
              <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
            
            <div className="container px-4 max-w-6xl relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                  Problem
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Problem */}
                <div className="space-y-8 animate-fade-in">
                  <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                      <span className="text-red-400 font-medium text-sm uppercase tracking-wider">Critical Gap</span>
                    </div>
                    <p className="text-xl text-white/90 leading-relaxed">
                      Brain-computer devices lack <span className="text-white font-semibold">secure transport</span>, 
                      <span className="text-white font-semibold"> packet validation</span>, and 
                      <span className="text-white font-semibold"> access control</span>.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4">
                      <div className="text-red-400 font-bold text-lg">Bad Data</div>
                      <div className="text-white/60 text-sm">Reaches Apps</div>
                    </div>
                    <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4">
                      <div className="text-red-400 font-bold text-lg">Unauthorized</div>
                      <div className="text-white/60 text-sm">Access</div>
                    </div>
                    <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4">
                      <div className="text-red-400 font-bold text-lg">No Compliance</div>
                      <div className="text-white/60 text-sm">Tracking</div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Solution */}
                <div className="space-y-8 animate-fade-in">
                  <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-medium text-sm uppercase tracking-wider">XBrainer Solution</span>
                    </div>
                    <p className="text-xl text-white/90 leading-relaxed">
                      <span className="text-white font-semibold">Real-time packet validation</span> + 
                      <span className="text-white font-semibold"> access control</span> + 
                      <span className="text-white font-semibold"> permanent logging</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-4 text-center">
                      <div className="text-green-400 font-bold text-lg">✓ Clean Data</div>
                      <div className="text-white/60 text-sm">Validated Stream</div>
                    </div>
                    <div className="border border-green-500/20 bg-green-500/5 rounded-lg p-4 text-center">
                      <div className="text-green-400 font-bold text-lg">✓ Secure Access</div>
                      <div className="text-white/60 text-sm">Full Control</div>
                    </div>
                  </div>
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
