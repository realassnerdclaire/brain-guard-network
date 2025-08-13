import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/lovable-uploads/27f96d4c-bee3-4923-8c3e-57550bedb369.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Logo and Company Info */}
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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 hover:bg-black/40 transition-all"
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        <span className="text-sm font-medium tracking-widest menu-text">MENU</span>
      </button>

      {/* Side Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/80 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
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
      <div className="relative z-20 min-h-screen flex flex-col pt-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Vision</h1>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#6C63FF]">A Secure Neural Future</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                We envision a world where brain-computer interfaces enhance human capabilities 
                without compromising privacy or security.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[#A855F7]">Privacy by Design</h3>
                <p className="text-white/90">
                  Neural data protection built into every layer of technology, ensuring user privacy 
                  from the moment data is captured to its final processing.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[#3B82F6]">Real-Time Security</h3>
                <p className="text-white/90">
                  Instantaneous threat detection and response systems that protect neural data 
                  without introducing latency or disrupting user experience.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[#10B981]">Universal Standards</h3>
                <p className="text-white/90">
                  Establishing industry-wide security protocols for neural interfaces that ensure 
                  interoperability while maintaining the highest security standards.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[#F59E0B]">Ethical Innovation</h3>
                <p className="text-white/90">
                  Advancing neural technology responsibly, with transparency, user consent, 
                  and ethical considerations at the core of every decision.
                </p>
              </div>
            </div>
          </div>
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

export default Vision;