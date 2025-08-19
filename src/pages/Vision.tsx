import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
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
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">North Star</h2>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Make neural data security a default standard across devices, applications, and settings.
              </p>
            </div>
          </div>
        </section>

        {/* 5-year targets Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">5-year targets</h2>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="space-y-6 text-lg md:text-xl text-white/90">
                <div className="flex items-start gap-4">
                  <span className="text-[#A855F7] font-bold text-xl">•</span>
                  <div><strong>Adoption:</strong> 10+ EEG/BCI vendors and 50+ labs or clinical sites.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#3B82F6] font-bold text-xl">•</span>
                  <div><strong>Standardization:</strong> publish an open policy + audit schema with a conformance test suite.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#10B981] font-bold text-xl">•</span>
                  <div><strong>Deployment:</strong> support edge, cloud, and on-prem with p95 &lt;150 ms end-to-end at 512 Hz and 99.95% uptime SLO.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#F59E0B] font-bold text-xl">•</span>
                  <div><strong>Compliance posture:</strong> SOC 2 Type II, HIPAA BAAs available, GDPR mappings documented.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#EF4444] font-bold text-xl">•</span>
                  <div><strong>Data posture:</strong> no default raw-signal retention; consent-scoped access by design.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10-15 year direction Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">10–15 year direction</h2>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="space-y-6 text-lg md:text-xl text-white/90">
                <div className="flex items-start gap-4">
                  <span className="text-[#6C63FF] font-bold text-xl">•</span>
                  <div>Extend from EEG/IMU to implant interfaces and OS-level neural I/O guards.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#8B5CF6] font-bold text-xl">•</span>
                  <div>Establish an independent neural data security certification referenced by journals, vendors, and regulators.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#06B6D4] font-bold text-xl">•</span>
                  <div>Provide user-portable consent records that work across vendors and institutions.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Principles</h2>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="space-y-6 text-lg md:text-xl text-white/90">
                <div className="flex items-start gap-4">
                  <span className="text-[#10B981] font-bold text-xl">•</span>
                  <div>Security at the signal layer; no decoding.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#3B82F6] font-bold text-xl">•</span>
                  <div>Hardware-agnostic integration.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#A855F7] font-bold text-xl">•</span>
                  <div>Real-time verification and auditability.</div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#F59E0B] font-bold text-xl">•</span>
                  <div>Minimal retention; explicit consent boundaries.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success metrics Section */}
        <section className="min-w-full h-screen flex flex-col items-center justify-center px-8 snap-start">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Success metrics</h2>
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Vendor/site adoption, latency SLO attainment, conformance pass rate, incident count (target zero material breaches), 
                audit-query latency, and integration time (target &lt;1 day from SDK install to first protected stream).
              </p>
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