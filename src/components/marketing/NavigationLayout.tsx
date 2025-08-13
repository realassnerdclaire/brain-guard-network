import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

interface NavigationLayoutProps {
  onBack?: () => void;
  onNavigateToSection?: (section: string) => void;
}

const NavigationLayout = ({ onBack, onNavigateToSection }: NavigationLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Start with menu open to match screenshot
  const [activeSection, setActiveSection] = useState("PROBLEM");

  const menuItems = [
    "HOME",
    "ABOUT US", 
    "VISION",
    "OVERVIEW",
    "COMPLIANCE & STANDARDS",
    "USE CASES",
    "SECURITY & PRIVACY",
    "PARTNERS & COLLABORATORS", 
    "RESOURCES",
    "CAREERS",
    "FAQ"
  ];

  const bottomNavItems = ["PROBLEM", "URGENCY", "SOLUTION", "OUR EDGE"];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Nebula Brain Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/lovable-uploads/27f96d4c-bee3-4923-8c3e-57550bedb369.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Logo and Company Info - Same as first landing page */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-12 w-auto mix-blend-screen opacity-90 rounded-lg" 
          style={{
            filter: 'blur(0.1px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight leading-tight text-white">
            XBrainer AI
          </span>
          <span className="text-sm font-medium text-white/70">
            Securing Neural Data in Real Time
          </span>
        </div>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => {
          if (isMenuOpen) {
            onBack?.(); // Go back to first landing page when closing menu
          } else {
            setIsMenuOpen(true);
          }
        }}
        className="fixed top-8 right-8 z-50 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 hover:bg-black/40 transition-all"
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        <span className="text-sm font-medium tracking-widest">MENU</span>
      </button>

      {/* Side Navigation Menu - Even smaller */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/80 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item}>
                  <button
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={(e) => {
                      console.log(`🚀 ${item} CLICKED - Starting letter animation`);
                      
                      const btn = e.currentTarget as HTMLElement;
                      const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                      const letters = item.split('');
                      
                      // Create letter spans
                      btn.innerHTML = letters.map((letter, i) => 
                        `<span id="nav-menu-letter-${i}" style="display: inline-block; transition: color 0.05s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                      ).join('');
                      
                      // Much faster animation
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`nav-menu-letter-${letterIndex}`);
                            if (letterSpan && letter !== ' ') {
                              letterSpan.style.color = color;
                            }
                          }, letterIndex * 5 + colorIndex * 15); // Much faster timing
                        });
                      });
                      
                      // Reset after animation
                      setTimeout(() => {
                        btn.innerHTML = item;
                        btn.style.color = 'white';
                      }, letters.length * 5 + colors.length * 15 + 25); // Faster reset
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
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Central Content - Adjusted positioning to avoid menu overlap */}
        <div className="flex-1 flex items-center justify-center px-8 pt-20 pb-20">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Your brain data deserves<br />
              the same protection as<br />
              your bank account.
            </h1>
          </div>
        </div>

        {/* Bottom Navigation with faster color animations */}
        <div className="pb-12">
          <nav className="flex justify-center">
            <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              {bottomNavItems.map((item) => (
                <button
                  key={item}
                  onClick={(e) => {
                    console.log(`🚀 ${item} CLICKED - Starting letter animation`);
                    
                    const btn = e.currentTarget as HTMLElement;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = item.split('');
                    
                    // Create letter spans
                    btn.innerHTML = letters.map((letter, i) => 
                      `<span id="bottom-nav-letter-${i}" style="display: inline-block; transition: color 0.05s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                    ).join('');
                    
                    // Much faster color animation
                    letters.forEach((letter, letterIndex) => {
                      colors.forEach((color, colorIndex) => {
                        setTimeout(() => {
                          const letterSpan = document.getElementById(`bottom-nav-letter-${letterIndex}`);
                          if (letterSpan && letter !== ' ') {
                            letterSpan.style.color = color;
                          }
                        }, letterIndex * 5 + colorIndex * 15); // Much faster timing
                      });
                    });
                    
                    // Reset, set active, and navigate to section
                    setTimeout(() => {
                      btn.innerHTML = item;
                      btn.style.color = 'white';
                      setActiveSection(item);
                      
                      // Navigate to the respective section on the main page
                      if (onNavigateToSection) {
                        const sectionMap: { [key: string]: string } = {
                          'PROBLEM': 'problem',
                          'URGENCY': 'urgency', 
                          'SOLUTION': 'solution',
                          'OUR EDGE': 'edge'
                        };
                        onNavigateToSection(sectionMap[item] || item.toLowerCase());
                      }
                    }, letters.length * 5 + colors.length * 15 + 25); // Faster reset
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
                  className={`text-sm font-medium tracking-wide transition-all hover:text-white ${
                    activeSection === item 
                      ? 'text-white border-b-2 border-white pb-1' 
                      : 'text-white/60'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
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
  );
};

export default NavigationLayout;