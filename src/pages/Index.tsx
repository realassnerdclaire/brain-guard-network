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
                    {/* Brain backdrop */}
                    <div className="absolute inset-0 z-0">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
                        style={{
                          backgroundImage: `url('/lovable-uploads/e289f332-67c8-4420-919d-c7146bb726d9.png')`,
                          filter: 'blur(0.5px) brightness(0.9) saturate(1.2)'
                        }}
                      />
                    </div>
                    
                    {/* Text overlay on top - mobile optimized */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
                      <p className="text-white text-center font-light leading-relaxed max-w-4xl">
                        <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl">Your brain data deserves</span>
                        <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl">the same protection as</span>
                        <span className="block text-sm sm:text-xl md:text-2xl lg:text-3xl">your bank account.</span>
                      </p>
                    </div>
                    
                    {/* Keep menu button visible */}
                    <div className="absolute top-0 right-0 z-[99999999] p-6 sm:p-8 lg:p-10 px-6 sm:px-8 lg:px-12">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMenuOpen(false);
                        }}
                        className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2"
                      >
                        <Menu size={20} />
                        <span>MENU</span>
                      </button>
                    </div>
                    
                {/* Menu dropdown - smaller and more compact for mobile */}
                <div 
                  className="fixed top-16 right-4 w-24 sm:w-48 md:w-52 bg-black/90 backdrop-blur-sm border border-white/60 rounded-lg shadow-2xl z-[99999999]"
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
                              className="w-full text-left block px-1 sm:px-3 md:px-4 py-1 sm:py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-[10px] sm:text-sm font-medium touch-manipulation"
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