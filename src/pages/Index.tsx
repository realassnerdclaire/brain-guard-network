import { useState } from "react";
import { Menu } from "lucide-react";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "VISION", href: "#vision" },
    { label: "OVERVIEW", href: "#overview" },
    { label: "COMPLIANCE & STANDARDS", href: "#compliance" },
    { label: "USE CASES", href: "#usecases" },
    { label: "SECURITY & PRIVACY", href: "#security" },
    { label: "PARTNERS & COLLABORATORS", href: "#partners" },
    { label: "RESOURCES", href: "#resources" },
    { label: "CAREERS", href: "#careers" },
    { label: "FAQ", href: "#faq" },
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
        <main className="relative">
          {/* Menu button in top right */}
          <header className="absolute left-0 right-0 top-0 z-30">
            <div className="container flex items-center justify-end py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-12">
              <div className="relative">
                <button
                  id="menu-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('🚀 MENU CLICKED - Starting letter animation');
                    
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['M', 'E', 'N', 'U'];
                    
                    // Create letter spans - same as navigation buttons
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="menu-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter}</span>`
                      ).join('');
                      
                      // Same fast animation as navigation buttons
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`menu-click-letter-${letterIndex}`);
                            if (letterSpan) {
                              letterSpan.style.color = color;
                            }
                          }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM button
                        });
                      });
                      
                      // Reset - same timing as navigation buttons
                      setTimeout(() => {
                        textSpan.innerHTML = 'MENU';
                        (textSpan as HTMLElement).style.color = 'white !important';
                      }, letters.length * 10 + colors.length * 30 + 50);
                    }
                    
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    const interval = startHoverAnimation(btn);
                    (btn as any).hoverInterval = interval;
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    if ((btn as any).hoverInterval) {
                      stopHoverAnimation(btn, (btn as any).hoverInterval);
                      (btn as any).hoverInterval = null;
                    }
                  }}
                  className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2"
                >
                  <Menu size={20} />
                  <span className="menu-text">MENU</span>
                </button>
                
                {/* Dropdown menu with backdrop */}
                {isMenuOpen && (
                  <div 
                    className="fixed inset-0 bg-black z-[9999999]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Neural animations layer */}
                    <div className="absolute inset-0 z-0">
                      <svg className="w-full h-full" viewBox="0 0 1920 1080">
                        <defs>
                          <linearGradient id="neuralFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#6C63FF', stopOpacity: 1.0}} />
                            <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 1.0}} />
                            <stop offset="100%" style={{stopColor: '#6C63FF', stopOpacity: 1.0}} />
                          </linearGradient>
                          <linearGradient id="neuralFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#EC4899', stopOpacity: 1.0}} />
                            <stop offset="50%" style={{stopColor: '#F472B6', stopOpacity: 1.0}} />
                            <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity: 1.0}} />
                          </linearGradient>
                          <linearGradient id="neuralFlow3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1.0}} />
                            <stop offset="50%" style={{stopColor: '#60A5FA', stopOpacity: 1.0}} />
                            <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1.0}} />
                          </linearGradient>
                        </defs>
                        
                        {/* Bold flowing EEG waves */}
                        <path
                          d="M-50,200 L100,190 L200,220 L300,180 L400,210 L500,185 L600,225 L700,175 L800,215 L900,190 L1000,230 L1100,170 L1200,205 L1300,185 L1400,220 L1500,180 L1600,210 L1700,185 L1800,225 L1900,175 L2000,200"
                          stroke="url(#neuralFlow1)"
                          strokeWidth="6"
                          fill="none"
                          opacity="0.8"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="-200,0; 200,0; -200,0"
                            dur="6s"
                            repeatCount="indefinite"
                          />
                        </path>
                        
                        <path
                          d="M-50,400 L100,420 L200,380 L300,430 L400,390 L500,425 L600,385 L700,440 L800,395 L900,420 L1000,380 L1100,435 L1200,390 L1300,425 L1400,385 L1500,440 L1600,395 L1700,420 L1800,380 L1900,435 L2000,400"
                          stroke="url(#neuralFlow2)"
                          strokeWidth="5"
                          fill="none"
                          opacity="0.7"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="200,0; -200,0; 200,0"
                            dur="8s"
                            repeatCount="indefinite"
                          />
                        </path>
                        
                        <path
                          d="M-50,600 L100,590 L200,620 L300,580 L400,610 L500,585 L600,625 L700,575 L800,615 L900,590 L1000,630 L1100,570 L1200,605 L1300,585 L1400,620 L1500,580 L1600,610 L1700,585 L1800,625 L1900,575 L2000,600"
                          stroke="url(#neuralFlow3)"
                          strokeWidth="4"
                          fill="none"
                          opacity="0.6"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 100,0; 0,0"
                            dur="10s"
                            repeatCount="indefinite"
                          />
                        </path>
                        
                        {/* Large pulsing neural nodes */}
                        <circle cx="300" cy="300" r="8" fill="#6C63FF" opacity="0.8">
                          <animate attributeName="r" values="6;12;6" dur="4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;1.0;0.6" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="800" cy="450" r="7" fill="#EC4899" opacity="0.7">
                          <animate attributeName="r" values="5;10;5" dur="5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;1.0;0.5" dur="5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="1300" cy="250" r="9" fill="#3B82F6" opacity="0.8">
                          <animate attributeName="r" values="7;14;7" dur="6s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;1.0;0.6" dur="6s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Connecting pathways */}
                        <line x1="300" y1="300" x2="800" y2="450" stroke="#A855F7" strokeWidth="3" opacity="0.6">
                          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
                        </line>
                        <line x1="800" y1="450" x2="1300" y2="250" stroke="#F472B6" strokeWidth="3" opacity="0.6">
                          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
                        </line>
                      </svg>
                    </div>
                    
                    {/* Text overlay on top */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <p className="text-white/60 text-xl sm:text-2xl lg:text-3xl font-light text-center px-8 max-w-4xl leading-relaxed">
                        Your brain data deserves the same protection as your bank account.
                      </p>
                    </div>
                    
                    {/* Menu dropdown - smaller and more compact */}
                    <div 
                      className="fixed top-16 right-4 w-48 sm:w-52 bg-black border border-white/60 rounded-lg shadow-2xl z-[99999999]"
                      style={{
                        contain: 'layout style',
                        willChange: 'transform',
                        isolation: 'isolate'
                      }}
                    >
                      <ul className="py-1">
                        {menuItems.map((item) => (
                          <li key={item.label}>
                            <button
                              className="w-full text-left block px-3 sm:px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium touch-manipulation"
                              onClick={(e) => {
                                console.log(`🚀 ${item.label} CLICKED - Starting letter animation`);
                                
                                const btn = e.currentTarget as HTMLElement;
                                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                                const letters = item.label.split('');
                                
                                // Create letter spans - same as navigation buttons
                                btn.innerHTML = letters.map((letter, i) => 
                                  `<span id="menu-item-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                                ).join('');
                                
                                // Same fast animation as navigation buttons
                                letters.forEach((letter, letterIndex) => {
                                  colors.forEach((color, colorIndex) => {
                                    setTimeout(() => {
                                      const letterSpan = document.getElementById(`menu-item-click-letter-${letterIndex}`);
                                      if (letterSpan && letter !== ' ') {
                                        letterSpan.style.color = color;
                                      }
                                    }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM button
                                  });
                                });
                                
                                // Reset and navigate - same timing as navigation buttons
                                setTimeout(() => {
                                  btn.innerHTML = item.label;
                                  btn.style.color = 'white !important';
                                  btn.style.setProperty('color', 'white', 'important');
                                  
                                  // Navigate after animation
                                  setTimeout(() => {
                                    setIsMenuOpen(false);
                                    const targetElement = document.querySelector(item.href);
                                    if (targetElement) {
                                      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                  }, 100);
                                }, letters.length * 10 + colors.length * 30 + 50);
                              }}
                              onMouseEnter={(e) => {
                                const btn = e.currentTarget;
                                const interval = startHoverAnimation(btn);
                                (btn as any).hoverInterval = interval;
                              }}
                              onMouseLeave={(e) => {
                                const btn = e.currentTarget;
                                if ((btn as any).hoverInterval) {
                                  stopHoverAnimation(btn, (btn as any).hoverInterval);
                                  (btn as any).hoverInterval = null;
                                }
                              }}
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>
          <HeroXBrainer />
        </main>
      </div>
    </div>
  );
};

export default Index;