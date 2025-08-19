import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight, Target, Calendar, Telescope, Shield, TrendingUp, Users, Globe, Clock, CheckCircle2, Eye, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Vision = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const sections = [
    "North Star",
    "5-year targets",
    "10-15 year direction",
    "Principles",
    "Success metrics"
  ];

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const sectionWidth = scrollContainerRef.current.clientWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(newSection);
    }
  };

  useEffect(() => {
    document.title = "Vision - XBrainer AI";
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
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

      {/* Navigation Arrows */}
      <button 
        onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md border border-blue-600/30 text-white p-2 rounded-full hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentSection === 0}
        style={{
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)'
        }}
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        onClick={() => scrollToSection(Math.min(sections.length - 1, currentSection + 1))}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-md border border-blue-600/30 text-white p-2 rounded-full hover:bg-blue-900/20 hover:border-blue-500/50 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentSection === sections.length - 1}
        style={{
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)'
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Section Indicators */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-blue-500 w-6' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Main Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {/* North Star Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Target className="text-[#6C63FF]" size={60} />
              <h2 className="text-5xl md:text-6xl font-bold text-white">North Star</h2>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6">🎯</div>
                <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed">
                  Make neural data security a <span className="text-[#6C63FF]">default standard</span>
                </p>
                <p className="text-lg text-white/80 mt-4">Across all devices, applications, and settings</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5-year targets Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <Calendar className="text-[#A855F7]" size={50} />
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white">5-Year Targets</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
                <Users className="text-[#A855F7] mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Adoption</h3>
                <p className="text-white/90">10+ EEG/BCI vendors</p>
                <p className="text-white/90">50+ labs & clinical sites</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
                <Settings className="text-[#3B82F6] mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Standards</h3>
                <p className="text-white/90">Open policy framework</p>
                <p className="text-white/90">Conformance test suite</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
                <Zap className="text-[#10B981] mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
                <p className="text-white/90">&lt;150ms @ 512Hz</p>
                <p className="text-white/90">99.95% uptime SLO</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
                <Shield className="text-[#F59E0B] mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
                <p className="text-white/90">SOC 2 Type II</p>
                <p className="text-white/90">HIPAA & GDPR ready</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform md:col-span-2 lg:col-span-1">
                <Eye className="text-[#EF4444] mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Privacy</h3>
                <p className="text-white/90">No raw-signal retention</p>
                <p className="text-white/90">Consent-scoped access</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10-15 year direction Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <Telescope className="text-[#6C63FF]" size={50} />
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white">Long-term Vision</h2>
            </div>
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🧠</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#6C63FF] mb-2">Neural Expansion</h3>
                    <p className="text-lg text-white/90">From EEG/IMU to implant interfaces and OS-level neural I/O guards</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🏆</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B5CF6] mb-2">Industry Standard</h3>
                    <p className="text-lg text-white/90">Independent neural data security certification for journals, vendors, and regulators</p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">🔐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#06B6D4] mb-2">Universal Privacy</h3>
                    <p className="text-lg text-white/90">User-portable consent records across vendors and institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <Shield className="text-[#10B981]" size={50} />
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white">Core Principles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-[#10B981] mb-2">Signal-Level Security</h3>
                <p className="text-white/90">No decoding required</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-[#3B82F6] mb-2">Hardware Agnostic</h3>
                <p className="text-white/90">Universal integration</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-[#A855F7] mb-2">Real-Time</h3>
                <p className="text-white/90">Instant verification & audit</p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-[#F59E0B] mb-2">Minimal Retention</h3>
                <p className="text-white/90">Explicit consent boundaries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success metrics Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <TrendingUp className="text-[#F59E0B]" size={50} />
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white">Success Metrics</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-white">Adoption Rate</h3>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-white">Latency SLO</h3>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-bold text-white">Pass Rate</h3>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-white">Zero Breaches</h3>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-white">Audit Speed</h3>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-lg font-bold text-white">&lt;1 Day Setup</h3>
              </div>
            </div>
          </div>
        </section>
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