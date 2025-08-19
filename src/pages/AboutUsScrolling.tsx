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
        className="flex overflow-x-auto snap-x snap-mandatory pt-20"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', height: '100vh' }}
        onScroll={handleScroll}
      >
        {/* What is XBrainer AI Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-green-400 text-sm font-mono tracking-widest uppercase">01 / Introduction</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      What is<br/>
                      <span className="font-semibold">XBrainer AI?</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-green-50/95 to-green-100/95 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 shadow-xl">
                  <p className="text-gray-800 text-lg leading-relaxed font-light mb-6">
                    Real-time security layer for brain–computer interfaces. Encrypts streams, validates packets, manages consent-based access, and maintains audit logs between EEG/IMU devices and applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-200/60 text-green-800 rounded-full text-sm font-medium">Hardware-agnostic</span>
                    <span className="px-3 py-1 bg-green-200/60 text-green-800 rounded-full text-sm font-medium">Low-latency</span>
                    <span className="px-3 py-1 bg-green-200/60 text-green-800 rounded-full text-sm font-medium">Validated data</span>
                    <span className="px-3 py-1 bg-green-200/60 text-green-800 rounded-full text-sm font-medium">Access-controlled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why it matters Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-cyan-50/95 to-cyan-100/95 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-8 shadow-xl">
                  <p className="text-gray-800 text-lg leading-relaxed font-light">
                    EEG/BCI pipelines lack encryption, packet validation, consent controls, and audit logs. Missing security creates <span className="text-red-600 font-medium bg-red-50 px-1 rounded">exposed data</span>, <span className="text-red-600 font-medium bg-red-50 px-1 rounded">corrupted results</span>, and <span className="text-red-600 font-medium bg-red-50 px-1 rounded">delayed approvals</span> as projects scale to production.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-right space-y-6">
                  <div className="space-y-2">
                    <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">02 / Problem</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Why it<br/>
                      <span className="font-semibold">matters?</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-l from-cyan-400 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Team Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-green-400 text-sm font-mono tracking-widest uppercase">03 / Team</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Founder<br/>
                      <span className="font-semibold">Team</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-green-50/95 to-green-100/95 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                      <div className="w-1 h-16 bg-green-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-700 mb-1">Claire Kwon</h3>
                        <p className="text-xs text-green-600 font-mono uppercase tracking-wide mb-2">Founder</p>
                        <p className="text-gray-700 text-sm font-light leading-relaxed">
                          Applied Mathematics • Amazon, Microsoft, Goldman Sachs • AI architect leading signal capture, encryption, packet verification, CI/CD, observability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                      <div className="w-1 h-16 bg-green-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-700 mb-1">Owen Anderson</h3>
                        <p className="text-xs text-green-600 font-mono uppercase tracking-wide mb-2">Co-founder</p>
                        <p className="text-gray-700 text-sm font-light leading-relaxed">
                          Neural signal researcher • Cleveland Clinic • Journal of Neurophysiology first author • EEG-controlled prosthetics • Device integration, real-time validation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-xl">
                      <div className="w-1 h-16 bg-green-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-700 mb-1">Angelina Liu</h3>
                        <p className="text-xs text-green-600 font-mono uppercase tracking-wide mb-2">Co-Founder</p>
                        <p className="text-gray-700 text-sm font-light leading-relaxed">
                          Neuroscience researcher • Columbia & Mount Sinai • EEG acquisition, preprocessing, artifact correction • Signal-quality models, dataset curation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why we started Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-cyan-50/95 to-cyan-100/95 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-8 shadow-xl">
                  <p className="text-gray-800 text-lg leading-relaxed font-light">
                    Claire's stroke left her exposed and vulnerable—neural signals needed protection at capture. Owen saw timing errors destroy Cleveland Clinic results. Angelina witnessed corrupted Mount Sinai sessions that should have been stopped upstream. We're building the missing security layer: <span className="font-mono text-cyan-700 bg-cyan-100 px-2 py-1 rounded">lock, check, gate, log</span>—so when biology wavers, data doesn't.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-right space-y-6">
                  <div className="space-y-2">
                    <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">04 / Origin</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Why we<br/>
                      <span className="font-semibold">started</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-l from-cyan-400 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-green-400 text-sm font-mono tracking-widest uppercase">05 / Mission</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Our<br/>
                      <span className="font-semibold">Mission</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-green-50/95 to-green-100/95 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 shadow-xl">
                  <p className="text-gray-800 text-xl leading-relaxed font-light">
                    Protect brain data at the source. We secure EEG and BCI streams in real time so only valid, consented signals reach applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-cyan-50/95 to-cyan-100/95 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-8 shadow-xl">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-cyan-200/60 text-cyan-800 rounded-full text-sm font-medium">BCI companies</span>
                    <span className="px-4 py-2 bg-cyan-200/60 text-cyan-800 rounded-full text-sm font-medium">EEG device makers</span>
                    <span className="px-4 py-2 bg-cyan-200/60 text-cyan-800 rounded-full text-sm font-medium">Hospitals</span>
                    <span className="px-4 py-2 bg-cyan-200/60 text-cyan-800 rounded-full text-sm font-medium">Defense programs</span>
                    <span className="px-4 py-2 bg-cyan-200/60 text-cyan-800 rounded-full text-sm font-medium">University labs</span>
                    <span className="px-4 py-2 bg-cyan-200/60 text-cyan-800 rounded-full text-sm font-medium">Medical faculty</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-right space-y-6">
                  <div className="space-y-2">
                    <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">06 / Audience</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Who it's<br/>
                      <span className="font-semibold">for</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-l from-cyan-400 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why now Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-green-400 text-sm font-mono tracking-widest uppercase">07 / Timing</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Why<br/>
                      <span className="font-semibold">now</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-green-50/95 to-green-100/95 backdrop-blur-sm border border-green-200/50 rounded-2xl p-8 shadow-xl">
                  <p className="text-gray-800 text-lg leading-relaxed font-light">
                    EEG and BCI are leaving the lab and entering clinics, homes, and defense uses. Many stacks still lack encryption, packet checks, consent control, and audit trails. That gap creates near-term risk: <span className="text-red-600 font-medium bg-red-50 px-1 rounded">exposed data</span>, <span className="text-red-600 font-medium bg-red-50 px-1 rounded">altered results</span>, and <span className="text-red-600 font-medium bg-red-50 px-1 rounded">slower approvals</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why we win Section */}
        <section className="min-w-full h-full bg-background flex items-center justify-center relative overflow-y-auto snap-start">
          <div className="container relative z-10 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="bg-gradient-to-br from-cyan-50/95 to-cyan-100/95 backdrop-blur-sm border border-cyan-200/50 rounded-2xl p-8 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/60 rounded-xl border-l-2 border-cyan-500">
                      <h3 className="text-sm font-mono uppercase tracking-wide text-cyan-600 mb-2">Source layer</h3>
                      <p className="text-gray-700 text-sm font-light">Packet checks for timing, range, and artifacts. Encrypted transport. Consent-gated reads.</p>
                    </div>
                    <div className="p-4 bg-white/60 rounded-xl border-l-2 border-cyan-500">
                      <h3 className="text-sm font-mono uppercase tracking-wide text-cyan-600 mb-2">Drop in</h3>
                      <p className="text-gray-700 text-sm font-light">Light SDK in Python and TypeScript. No firmware changes. Runs on edge or cloud.</p>
                    </div>
                    <div className="p-4 bg-white/60 rounded-xl border-l-2 border-cyan-500">
                      <h3 className="text-sm font-mono uppercase tracking-wide text-cyan-600 mb-2">Fast</h3>
                      <p className="text-gray-700 text-sm font-light">Under 150 ms end to end at 512 Hz on recorded and hardware-in-the-loop tests.</p>
                    </div>
                    <div className="p-4 bg-white/60 rounded-xl border-l-2 border-cyan-500">
                      <h3 className="text-sm font-mono uppercase tracking-wide text-cyan-600 mb-2">Coverage</h3>
                      <p className="text-gray-700 text-sm font-light">Works with common EEG headsets. New adapters added without rework.</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white/80 rounded-xl border border-cyan-200">
                    <h3 className="text-sm font-mono uppercase tracking-wide text-cyan-600 mb-2">Team</h3>
                    <p className="text-gray-700 text-sm font-light">Claire covers infra and ML. Owen covers clinical EEG validation. Angela covers artifact and signal quality research.</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-right space-y-6">
                  <div className="space-y-2">
                    <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">08 / Advantage</span>
                    <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                      Why we<br/>
                      <span className="font-semibold">win</span>
                    </h2>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-l from-cyan-400 to-transparent ml-auto"></div>
                </div>
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