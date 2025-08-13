import { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "VISION", href: "/vision" },
    { label: "OVERVIEW", href: "/overview" },
    { label: "COMPLIANCE & STANDARDS", href: "/compliance" },
    { label: "USE CASES", href: "/usecases" },
    { label: "SECURITY & PRIVACY", href: "/security" },
    { label: "PARTNERS & COLLABORATORS", href: "/partners" },
    { label: "RESOURCES", href: "/resources" },
    { label: "CAREERS", href: "/careers" },
    { label: "FAQ", href: "/faq" },
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
        {/* Logo, company name and menu in header */}
        <header className="absolute left-0 right-0 top-0 z-30">
          <div className="container flex items-center justify-between py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-12">
            {/* Logo and company name - exactly same as landing page */}
            <div className="flex items-center gap-1 sm:gap-4 lg:gap-6">
              <img 
                src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
                alt="XBrainer AI logo" 
                className="h-10 sm:h-12 lg:h-16 w-auto mix-blend-screen opacity-90 rounded-lg sm:rounded-2xl" 
                style={{
                  filter: 'blur(0.1px)',
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
                }}
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-tight" style={{color: '#ffffff'}}>
                  XBrainer AI
                </span>
                <span className="text-sm sm:text-base lg:text-xl font-medium" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                  Securing Neural Data in Real Time
                </span>
              </div>
            </div>
            
            {/* Menu button */}
            <div className="relative">
              <button
                id="menu-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
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
                    
                    // Same fast animation as navigation buttons - ONE cycle only
                    letters.forEach((letter, letterIndex) => {
                      colors.forEach((color, colorIndex) => {
                        setTimeout(() => {
                          const letterSpan = document.getElementById(`menu-click-letter-${letterIndex}`);
                          if (letterSpan) {
                            letterSpan.style.color = color;
                          }
                        }, letterIndex * 10 + colorIndex * 30);
                      });
                    });
                    
                    // Reset after ONE complete cycle
                    setTimeout(() => {
                      if (textSpan) {
                        textSpan.innerHTML = 'MENU';
                        (textSpan as HTMLElement).style.color = 'white';
                      }
                    }, letters.length * 10 + colors.length * 30 + 100);
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
                className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2 border border-transparent rounded px-2 py-1"
                style={{
                  borderColor: 'white',
                  animation: 'menuBorderCycle 4s ease-in-out infinite'
                }}
              >
                <Menu size={20} />
                <span className="menu-text">MENU</span>
              </button>
              
              {/* Simple dropdown menu */}
              {isMenuOpen && (
                <div 
                  className="fixed top-16 right-4 w-24 sm:w-48 md:w-52 bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl z-[99999999] white-neon-border"
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
                                navigate(item.href);
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
              )}
            </div>
          </div>
        </header>
        
        {children}
      </div>
    </div>
  );
};

export default Layout;