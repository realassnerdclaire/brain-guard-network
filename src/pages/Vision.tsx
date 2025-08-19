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

      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
        <div className="flex items-center justify-between p-4 md:p-6">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
                alt="XBrainer AI logo" 
                className="h-10 md:h-12 w-auto rounded-lg" 
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))',
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-sm -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                XBrainer AI
              </span>
              <span className="text-xs md:text-sm font-medium text-white">
                Securing Neural Data in Real Time
              </span>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white bg-black/60 backdrop-blur-md border border-blue-600/30 rounded-lg px-3 py-2 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            style={{
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)'
            }}
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="text-sm font-medium tracking-widest">MENU</span>
          </button>
        </div>
      </div>

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
            {/* North Star */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#6C63FF]">North Star</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Make neural data security a default standard across devices, applications, and settings.
              </p>
            </div>

            {/* 5-year targets */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#A855F7]">5-year targets</h2>
              <ul className="space-y-4 text-white/90">
                <li><strong>Adoption:</strong> 10+ EEG/BCI vendors and 50+ labs or clinical sites.</li>
                <li><strong>Standardization:</strong> publish an open policy + audit schema with a conformance test suite.</li>
                <li><strong>Deployment:</strong> support edge, cloud, and on-prem with p95 &lt;150 ms end-to-end at 512 Hz and 99.95% uptime SLO.</li>
                <li><strong>Compliance posture:</strong> SOC 2 Type II, HIPAA BAAs available, GDPR mappings documented.</li>
                <li><strong>Data posture:</strong> no default raw-signal retention; consent-scoped access by design.</li>
              </ul>
            </div>

            {/* 10-15 year direction */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#3B82F6]">10–15 year direction</h2>
              <ul className="space-y-4 text-white/90">
                <li>Extend from EEG/IMU to implant interfaces and OS-level neural I/O guards.</li>
                <li>Establish an independent neural data security certification referenced by journals, vendors, and regulators.</li>
                <li>Provide user-portable consent records that work across vendors and institutions.</li>
              </ul>
            </div>

            {/* Principles */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#10B981]">Principles</h2>
              <ul className="space-y-3 text-white/90">
                <li>Security at the signal layer; no decoding.</li>
                <li>Hardware-agnostic integration.</li>
                <li>Real-time verification and auditability.</li>
                <li>Minimal retention; explicit consent boundaries.</li>
              </ul>
            </div>

            {/* Success metrics */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#F59E0B]">Success metrics</h2>
              <p className="text-white/90">
                Vendor/site adoption, latency SLO attainment, conformance pass rate, incident count (target zero material breaches), 
                audit-query latency, and integration time (target &lt;1 day from SDK install to first protected stream).
              </p>
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
    </div>
  );
};

export default Vision;