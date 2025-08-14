import { useState } from "react";
import { Menu, X, Shield, FileCheck, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Compliance = () => {
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
    <div className="dark min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background z-10" />

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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Compliance & Standards</h1>
          
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">Industry-Leading Compliance</h2>
              <p className="text-lg text-white/90">
                XBrainer AI meets and exceeds global standards for neural data protection, 
                ensuring compliance across healthcare, research, and consumer applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-[#6C63FF] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">HIPAA Compliant</h3>
                <p className="text-white/80 text-sm">
                  Full compliance with healthcare data protection requirements
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Globe className="w-12 h-12 text-[#A855F7] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">GDPR Ready</h3>
                <p className="text-white/80 text-sm">
                  European data protection regulation compliance
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <FileCheck className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">SOC 2 Type II</h3>
                <p className="text-white/80 text-sm">
                  Security, availability, and confidentiality controls
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-[#10B981] mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">ISO 27001</h3>
                <p className="text-white/80 text-sm">
                  Information security management system certification
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#6C63FF]">Healthcare Standards</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#6C63FF] mt-1">•</span>
                    <span>HIPAA Privacy and Security Rules compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6C63FF] mt-1">•</span>
                    <span>FDA guidelines for medical device cybersecurity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6C63FF] mt-1">•</span>
                    <span>HL7 FHIR standards for healthcare data exchange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6C63FF] mt-1">•</span>
                    <span>DICOM standards for medical imaging data</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#A855F7]">Privacy Regulations</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#A855F7] mt-1">•</span>
                    <span>GDPR compliance with data subject rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A855F7] mt-1">•</span>
                    <span>CCPA consumer privacy protections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A855F7] mt-1">•</span>
                    <span>PIPEDA privacy requirements (Canada)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A855F7] mt-1">•</span>
                    <span>Privacy by design implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Security Framework</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#3B82F6]">Technical Safeguards</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• End-to-end encryption (AES-256)</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Access controls and audit logs</li>
                    <li>• Secure key management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#10B981]">Administrative Controls</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Security awareness training</li>
                    <li>• Incident response procedures</li>
                    <li>• Risk assessment processes</li>
                    <li>• Business associate agreements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#F59E0B]">Physical Safeguards</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• Secure data center facilities</li>
                    <li>• Workstation security controls</li>
                    <li>• Device and media controls</li>
                    <li>• Environmental protections</li>
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

export default Compliance;