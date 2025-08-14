import { useState } from "react";
import { Menu, X, Shield, Brain, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Overview = () => {
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
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
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

      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-600/20">
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Platform Overview</h1>
          
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">XBrainer AI Security Platform</h2>
              <p className="text-lg text-white/90">
                A comprehensive neural data security solution providing real-time protection, 
                compliance management, and privacy controls for EEG and BCI devices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-[#6C63FF] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Real-Time Protection</h3>
                <p className="text-white/80 text-sm">
                  Continuous monitoring and threat detection for neural data streams
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Brain className="w-12 h-12 text-[#A855F7] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Neural Analytics</h3>
                <p className="text-white/80 text-sm">
                  Advanced AI algorithms for pattern recognition and anomaly detection
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Zap className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Low Latency</h3>
                <p className="text-white/80 text-sm">
                  Sub-millisecond response times for real-time applications
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Lock className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Privacy Controls</h3>
                <p className="text-white/80 text-sm">
                  Granular privacy settings and data sovereignty management
                </p>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#6C63FF]">Security Layer</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• End-to-end encryption</li>
                    <li>• Zero-trust architecture</li>
                    <li>• Behavioral anomaly detection</li>
                    <li>• Multi-factor authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#A855F7]">Compliance Management</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• HIPAA/GDPR compliance</li>
                    <li>• Audit trail generation</li>
                    <li>• Data retention policies</li>
                    <li>• Regulatory reporting</li>
                  </ul>
                </div>
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

export default Overview;