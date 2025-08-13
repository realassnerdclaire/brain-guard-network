import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";

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

      {/* Side Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8 pt-20">
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={item}>
                  <button
                    className="block w-full text-left text-white/80 hover:text-white py-3 px-2 text-lg font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
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

        {/* Bottom Navigation */}
        <div className="pb-12">
          <nav className="flex justify-center">
            <div className="flex items-center gap-8 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
              {bottomNavItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`text-lg font-medium tracking-wide transition-all hover:text-white ${
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