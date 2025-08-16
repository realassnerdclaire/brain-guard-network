import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsScrolling = () => {
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
    "What is XBrainer AI?",
    "Why it matters?", 
    "Founder Team",
    "Why we started XBrainer AI",
    "Our Mission",
    "Who it's for",
    "Why now",
    "Why we win"
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
    document.title = "About XBrainer AI - Securing Neural Data in Real Time";
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
        className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md text-white rounded-full p-2 sm:p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
        disabled={currentSection === 0}
        style={{ 
          opacity: currentSection === 0 ? 0.3 : 1,
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
        }}
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button 
        onClick={() => scrollToSection(Math.min(sections.length - 1, currentSection + 1))}
        className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md text-white rounded-full p-2 sm:p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
        disabled={currentSection === sections.length - 1}
        style={{ 
          opacity: currentSection === sections.length - 1 ? 0.3 : 1,
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
        }}
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Section Indicators */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Horizontal Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory h-screen pt-20"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {/* What is XBrainer AI Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              src="/lovable-uploads/c93b77ed-67f7-4582-bdc4-916188a4fe5f.png"
              alt="XBrainer AI neural nebula backdrop"
              className="absolute top-2 -right-16 w-72 h-72 object-cover opacity-45 extreme-nebula-glow"
              style={{
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#6C63FF] animate-fade-in">
              What is XBrainer AI?
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#A855F7] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#6C63FF]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Real-time security layer for brain–computer interfaces. Encrypts streams, validates packets, manages consent-based access, and maintains audit logs between EEG/IMU devices and applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white/70">
                <span className="px-3 py-2 bg-[#6C63FF]/20 rounded-lg">Hardware-agnostic</span>
                <span className="px-3 py-2 bg-[#6C63FF]/20 rounded-lg">Low-latency</span>
                <span className="px-3 py-2 bg-[#6C63FF]/20 rounded-lg">Validated data</span>
                <span className="px-3 py-2 bg-[#6C63FF]/20 rounded-lg">Access-controlled</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#A855F7] animate-fade-in">
              Why it matters?
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#A855F7] to-[#EC4899] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#A855F7]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed">
                EEG/BCI pipelines lack encryption, packet validation, consent controls, and audit logs. Missing security creates <span className="text-red-400 font-semibold">exposed data</span>, <span className="text-red-400 font-semibold">corrupted results</span>, and <span className="text-red-400 font-semibold">delayed approvals</span> as projects scale to production.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Team Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#3B82F6] animate-fade-in">
              Founder Team
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#3B82F6]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="border-l-4 border-[#6C63FF] pl-6 text-left">
                  <h3 className="text-xl font-semibold text-[#6C63FF] mb-2">Claire Kwon - Founder</h3>
                  <p className="text-white/80">
                    Applied Mathematics • Amazon, Microsoft, Goldman Sachs • AI architect leading signal capture, encryption, packet verification, CI/CD, observability
                  </p>
                </div>
                <div className="border-l-4 border-[#A855F7] pl-6 text-left">
                  <h3 className="text-xl font-semibold text-[#A855F7] mb-2">Owen Anderson - Co-founder</h3>
                  <p className="text-white/80">
                    Neural signal researcher • Cleveland Clinic • Journal of Neurophysiology first author • EEG-controlled prosthetics • Device integration, real-time validation
                  </p>
                </div>
                <div className="border-l-4 border-[#3B82F6] pl-6 text-left">
                  <h3 className="text-xl font-semibold text-[#3B82F6] mb-2">Angelina Liu — Co-Founder</h3>
                  <p className="text-white/80">
                    Neuroscience researcher • Columbia & Mount Sinai • EEG acquisition, preprocessing, artifact correction • Signal-quality models, dataset curation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why we started Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#14B8A6] animate-fade-in">
              Why we started XBrainer AI
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#10B981] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#14B8A6]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed">
                Claire's stroke left her exposed and vulnerable—neural signals needed protection at capture. Owen saw timing errors destroy Cleveland Clinic results. Angelina witnessed corrupted Mount Sinai sessions that should have been stopped upstream. We're building the missing security layer: lock, check, gate, log—so when biology wavers, data doesn't.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#F59E0B] animate-fade-in">
              Our Mission
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#F59E0B]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed">
                Protect brain data at the source. We secure EEG and BCI streams in real time so only valid, consented signals reach applications.
              </p>
            </div>
          </div>
        </section>

        {/* Who it's for Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#8B5CF6] animate-fade-in">
              Who it's for
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#8B5CF6]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed">
                BCI companies, EEG device makers, hospitals, defense programs, university labs, and medical faculty.
              </p>
            </div>
          </div>
        </section>

        {/* Why now Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#EF4444] animate-fade-in">
              Why now
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#EF4444] to-[#F87171] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#EF4444]/30 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-white/90 text-lg leading-relaxed">
                EEG and BCI are leaving the lab and entering clinics, homes, and defense uses. Many stacks still lack encryption, packet checks, consent control, and audit trails. That gap creates near-term risk: exposed data, altered results, and slower approvals.
              </p>
            </div>
          </div>
        </section>

        {/* Why we win Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-hidden snap-start">
          <div className="container relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#10B981] animate-fade-in">
              Why we win
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#10B981] to-[#34D399] mx-auto mb-8 animate-pulse" />
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-[#10B981]/30 rounded-xl p-8 max-w-3xl mx-auto text-left space-y-5">
              <div className="border-l-4 border-[#10B981] pl-6">
                <h3 className="text-lg font-semibold text-[#10B981] mb-1">Source layer</h3>
                <p className="text-white/90">Packet checks for timing, range, and artifacts. Encrypted transport. Consent-gated reads. Write-once audit log before any app or cloud sees data.</p>
              </div>
              <div className="border-l-4 border-[#06B6D4] pl-6">
                <h3 className="text-lg font-semibold text-[#06B6D4] mb-1">Drop in</h3>
                <p className="text-white/90">Light SDK in Python and TypeScript with a small runtime. No firmware changes. Runs on edge or cloud.</p>
              </div>
              <div className="border-l-4 border-[#F59E0B] pl-6">
                <h3 className="text-lg font-semibold text-[#F59E0B] mb-1">Fast</h3>
                <p className="text-white/90">Current prototype runs under 150 ms end to end at 512 Hz on recorded and hardware-in-the-loop tests.</p>
              </div>
              <div className="border-l-4 border-[#8B5CF6] pl-6">
                <h3 className="text-lg font-semibold text-[#8B5CF6] mb-1">Device coverage</h3>
                <p className="text-white/90">Works with common EEG headsets. New adapters added without rework.</p>
              </div>
              <div className="border-l-4 border-[#EC4899] pl-6">
                <h3 className="text-lg font-semibold text-[#EC4899] mb-1">Team</h3>
                <p className="text-white/90">Claire covers infra and ML. Owen covers clinical EEG validation. Angela covers artifact and signal quality research.</p>
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

export default AboutUsScrolling;