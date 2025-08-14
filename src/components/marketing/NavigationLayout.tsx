import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

interface NavigationLayoutProps {
  onBack?: () => void;
  onNavigateToSection?: (section: string) => void;
}

const NavigationLayout = ({ onBack, onNavigateToSection }: NavigationLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("PROBLEM");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload background image immediately
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/lovable-uploads/27f96d4c-bee3-4923-8c3e-57550bedb369.png';
  }, []);

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

  const bottomNavItems = ["PROBLEM", "URGENCY", "SOLUTION", "OUR EDGE"];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Optimized Background with immediate loading */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: imageLoaded ? `url(/lovable-uploads/27f96d4c-bee3-4923-8c3e-57550bedb369.png)` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          transform: 'translateZ(0)' // Force GPU acceleration
        }}
      />
      
      {/* Fallback gradient while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black z-0" />
      )}
      
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

      {/* Simplified Menu Button */}
      <button
        onClick={() => {
          if (isMenuOpen) {
            // Immediate close without animation
            onBack?.();
          } else {
            setIsMenuOpen(true);
          }
        }}
        className="fixed top-16 sm:top-8 right-8 z-50 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 hover:bg-black/40 transition-all duration-200"
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        <span className="text-sm font-medium tracking-widest">MENU</span>
      </button>

      {/* Optimized Side Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/80 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-200 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-colors duration-200 hover:bg-white/5 rounded"
                    onClick={() => {
                      // Simplified immediate navigation
                      console.log(`Navigating to ${item.name}`);
                    }}
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
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Central Content - Adjusted positioning to avoid menu overlap */}
        <div className="flex-1 flex items-center justify-center px-8 pt-20 pb-20">
          <div className="text-center max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
              Your brain data deserves<br />
              the same protection as<br />
              your bank account.
            </h1>
          </div>
        </div>

        {/* Optimized Bottom Navigation */}
        <div className="pb-12">
          <nav className="flex justify-center">
            <div className="flex items-center gap-4 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
              {bottomNavItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item);
                    
                    // Immediate navigation without animation
                    if (onNavigateToSection) {
                      const sectionMap: { [key: string]: string } = {
                        'PROBLEM': 'problem',
                        'URGENCY': 'urgency', 
                        'SOLUTION': 'solution',
                        'OUR EDGE': 'edge'
                      };
                      onNavigateToSection(sectionMap[item] || item.toLowerCase());
                    }
                  }}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-white ${
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