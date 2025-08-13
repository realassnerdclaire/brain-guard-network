import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

interface NavigationLayoutProps {
  onBack?: () => void;
}

const NavigationLayout = ({ onBack }: NavigationLayoutProps) => {
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

      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:bg-black/40 transition-all"
      >
        <ArrowLeft size={20} />
        <span className="text-lg font-medium tracking-widest">BACK</span>
      </button>

      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 hover:bg-black/40 transition-all"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        <span className="text-lg font-medium tracking-widest">MENU</span>
      </button>

      {/* Side Navigation Menu - Made smaller */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={item}>
                  <button
                    className="block w-full text-left text-white/80 hover:text-white py-2 px-2 text-base font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={(e) => {
                      console.log(`🚀 ${item} CLICKED - Starting letter animation`);
                      
                      const btn = e.currentTarget as HTMLElement;
                      const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                      const letters = item.split('');
                      
                      // Create letter spans - same as navigation buttons
                      btn.innerHTML = letters.map((letter, i) => 
                        `<span id="nav-menu-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                      ).join('');
                      
                      // Same fast animation as navigation buttons
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`nav-menu-letter-${letterIndex}`);
                            if (letterSpan && letter !== ' ') {
                              letterSpan.style.color = color;
                            }
                          }, letterIndex * 10 + colorIndex * 30);
                        });
                      });
                      
                      // Reset after animation
                      setTimeout(() => {
                        btn.innerHTML = item;
                        btn.style.color = 'white';
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
        {/* Central Content */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Your brain data deserves<br />
              the same protection as<br />
              your bank account.
            </h1>
          </div>
        </div>

        {/* Bottom Navigation with color animations */}
        <div className="pb-12">
          <nav className="flex justify-center">
            <div className="flex items-center gap-6 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
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
                      `<span id="bottom-nav-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                    ).join('');
                    
                    // Color animation
                    letters.forEach((letter, letterIndex) => {
                      colors.forEach((color, colorIndex) => {
                        setTimeout(() => {
                          const letterSpan = document.getElementById(`bottom-nav-letter-${letterIndex}`);
                          if (letterSpan && letter !== ' ') {
                            letterSpan.style.color = color;
                          }
                        }, letterIndex * 10 + colorIndex * 30);
                      });
                    });
                    
                    // Reset and set active
                    setTimeout(() => {
                      btn.innerHTML = item;
                      btn.style.color = 'white';
                      setActiveSection(item);
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
                  className={`text-base font-medium tracking-wide transition-all hover:text-white ${
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