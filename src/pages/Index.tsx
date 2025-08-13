
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
          <section id="problem" className="min-h-screen bg-black flex items-center justify-center py-16">
            <div className="container px-4 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 text-center">
                Problem
              </h2>
              
              <div className="space-y-12 text-white">
                <div>
                  <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                    Brain-computer devices send raw brain (EEG) and motion data. Many pipelines still miss four basics: secure transport, packet checks (timing and signal errors), access control tied to user consent, and a permanent access log. Without this, bad data reaches apps, unauthorized reads happen, and teams can't show compliance—causing exposure risk, unreliable results, and stalled deployments. As headsets move from labs to everyday use, this gap is immediate.
                  </p>
                </div>
                
                <div className="pt-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    How XBrainer AI helps
                  </h3>
                  <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                    We add a software layer between device and app that checks each packet in real time, drops corrupted data, controls who can read the stream, and records every access in a permanent log.
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
