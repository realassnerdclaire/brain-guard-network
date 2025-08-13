
import { useState } from "react";
import { Menu } from "lucide-react";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROBLEM", href: "#problem" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "CAREER", href: "#career" },
    { label: "BRIEFING REQUEST", href: "#briefing" },
    { label: "VISION", href: "#vision" },
    { label: "FEATURE", href: "#features" },
    { label: "HOW IT WORKS", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" },
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
        <main className="relative">
          {/* Menu button in top right */}
          <header className="absolute left-0 right-0 top-0 z-30">
            <div className="container flex items-center justify-end py-4 sm:py-6 px-4 sm:px-6">
              <div className="relative">
                <button
                  id="menu-btn"
                  onClick={() => {
                    // Menu click animation
                    console.log('🚀 MENU CLICKED - Starting letter animation');
                    
                    const btn = document.getElementById('menu-btn');
                    if (btn) {
                      const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                      const letters = ['M', 'E', 'N', 'U'];
                      
                      // Create letter spans - PREVENT ALL inherited styles
                      const textSpan = btn.querySelector('.menu-text');
                      if (textSpan) {
                        textSpan.innerHTML = letters.map((letter, i) => 
                          `<span id="menu-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                        ).join('');
                        
                        // Animate each letter - ONLY COLOR CHANGE
                        letters.forEach((letter, letterIndex) => {
                          colors.forEach((color, colorIndex) => {
                            setTimeout(() => {
                              const letterSpan = document.getElementById(`menu-letter-${letterIndex}`);
                              if (letterSpan) {
                                letterSpan.style.color = color;
                                console.log(`MENU Letter ${letter} -> ${color}`);
                              }
                            }, letterIndex * 100 + colorIndex * 300);
                          });
                        });
                        
                        // Reset - back to normal white letters
                        setTimeout(() => {
                          textSpan.innerHTML = 'MENU';
                          console.log('🔄 Reset to normal MENU');
                        }, letters.length * 100 + colors.length * 300 + 1000);
                      }
                    }
                    
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    const interval = startHoverAnimation(btn);
                    (btn as any).hoverInterval = interval;
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    if ((btn as any).hoverInterval) {
                      stopHoverAnimation(btn, (btn as any).hoverInterval);
                      (btn as any).hoverInterval = null;
                    }
                  }}
                  onTouchStart={() => {
                    console.log('📱 MENU TOUCHED - Starting letter animation');
                    
                    const btn = document.getElementById('menu-btn');
                    if (btn) {
                      const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                      const letters = ['M', 'E', 'N', 'U'];
                      
                      const textSpan = btn.querySelector('.menu-text');
                      if (textSpan) {
                        textSpan.innerHTML = letters.map((letter, i) => 
                          `<span id="menu-letter-touch-${i}" style="display: inline-block; transition: color 0.3s ease;">${letter}</span>`
                        ).join('');
                        
                        letters.forEach((letter, letterIndex) => {
                          colors.forEach((color, colorIndex) => {
                            setTimeout(() => {
                              const letterSpan = document.getElementById(`menu-letter-touch-${letterIndex}`);
                              if (letterSpan) {
                                letterSpan.style.color = color;
                              }
                            }, letterIndex * 100 + colorIndex * 300);
                          });
                        });
                        
                        setTimeout(() => {
                          textSpan.innerHTML = 'MENU';
                        }, letters.length * 100 + colors.length * 300 + 1000);
                      }
                    }
                    
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2"
                >
                  <Menu size={20} />
                  <span className="menu-text">MENU</span>
                </button>
                
                {/* Dropdown menu */}
                {isMenuOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-black/90 border border-white/20 rounded-lg shadow-lg z-50"
                    style={{
                      contain: 'layout style',
                      willChange: 'transform'
                    }}
                  >
                    <ul className="py-2">
                      {menuItems.map((item) => (
                        <li key={item.label}>
                          <button
                            className="w-full text-left block px-4 sm:px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium touch-manipulation"
                            onClick={(e) => {
                              // Menu item click animation
                              console.log(`🚀 ${item.label} CLICKED - Starting letter animation`);
                              
                              const btn = e.currentTarget as HTMLElement;
                              const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                              const letters = item.label.split('');
                              
                              // Create letter spans - PREVENT ALL inherited styles
                              btn.innerHTML = letters.map((letter, i) => 
                                `<span id="menu-item-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                              ).join('');
                              
                              // Animate each letter - ONLY COLOR CHANGE
                              letters.forEach((letter, letterIndex) => {
                                colors.forEach((color, colorIndex) => {
                                  setTimeout(() => {
                                    const letterSpan = document.getElementById(`menu-item-letter-${letterIndex}`);
                                    if (letterSpan && letter !== ' ') {
                                      letterSpan.style.color = color;
                                      console.log(`${item.label} Letter ${letter} -> ${color}`);
                                    }
                                  }, letterIndex * 50 + colorIndex * 300);
                                });
                              });
                              
                              // Reset and navigate
                              setTimeout(() => {
                                btn.innerHTML = item.label;
                                console.log(`🔄 Reset to normal ${item.label}`);
                                
                                // Navigate after animation
                                setTimeout(() => {
                                  setIsMenuOpen(false);
                                  window.location.href = item.href;
                                }, 200);
                              }, letters.length * 50 + colors.length * 300 + 1000);
                            }}
                            onMouseEnter={(e) => {
                              const btn = e.currentTarget;
                              const interval = startHoverAnimation(btn);
                              (btn as any).hoverInterval = interval;
                            }}
                            onMouseLeave={(e) => {
                              const btn = e.currentTarget;
                              if ((btn as any).hoverInterval) {
                                stopHoverAnimation(btn, (btn as any).hoverInterval);
                                (btn as any).hoverInterval = null;
                              }
                            }}
                            onTouchStart={(e) => {
                              console.log(`📱 ${item.label} TOUCHED - Starting letter animation`);
                              
                              const btn = e.currentTarget as HTMLElement;
                              const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                              const letters = item.label.split('');
                              
                              btn.innerHTML = letters.map((letter, i) => 
                                `<span id="menu-item-letter-touch-${i}" style="display: inline-block; transition: color 0.3s ease;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                              ).join('');
                              
                              letters.forEach((letter, letterIndex) => {
                                colors.forEach((color, colorIndex) => {
                                  setTimeout(() => {
                                    const letterSpan = document.getElementById(`menu-item-letter-touch-${letterIndex}`);
                                    if (letterSpan && letter !== ' ') {
                                      letterSpan.style.color = color;
                                    }
                                  }, letterIndex * 50 + colorIndex * 300);
                                });
                              });
                              
                              setTimeout(() => {
                                btn.innerHTML = item.label;
                                
                                setTimeout(() => {
                                  setIsMenuOpen(false);
                                  window.location.href = item.href;
                                }, 200);
                              }, letters.length * 50 + colors.length * 300 + 1000);
                            }}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </header>
          <HeroXBrainer />
          
          {/* 1. Problem Section */}
          <section 
            id="problem" 
            className="min-h-screen bg-black flex items-center justify-center py-16 relative overflow-hidden"
            style={{
              contain: 'layout style paint',
              willChange: 'transform',
              isolation: 'isolate'
            }}
          >
            {/* Optimized EEG signal background with animations */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden z-0" 
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)', // Force hardware acceleration
                backfaceVisibility: 'hidden'
              }}
            >
              <svg 
                className="w-full h-full opacity-60" 
                viewBox="0 0 1920 1080" 
                preserveAspectRatio="xMidYMid slice"
                style={{
                  transform: 'translateZ(0)', // GPU layer
                  backfaceVisibility: 'hidden'
                }}
              >
                <defs>
                  <linearGradient id="problemEegGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="problemEegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* EEG wave pattern 1 */}
                <path
                  d="M0,400 Q100,300 200,400 T400,400 T600,400 T800,400 T1000,400 T1200,400 T1400,400 T1600,400 T1800,400 T2000,400"
                  stroke="url(#problemEegGradient1)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                  style={{
                    animation: 'eegFlow1 8s linear infinite'
                  }}
                />
                
                {/* EEG wave pattern 2 */}
                <path
                  d="M0,600 Q150,500 300,600 T600,600 T900,600 T1200,600 T1500,600 T1800,600 T2100,600"
                  stroke="url(#problemEegGradient2)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  style={{
                    animation: 'eegFlow2 10s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Problem
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto mb-16" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <p className="text-xl text-white/90 leading-relaxed">
                    EEG and BCI devices are moving from research labs to clinics, homes, and hybrid environments.
                  </p>
                  
                  <p className="text-xl text-white/90 leading-relaxed">
                    But raw brain data is highly sensitive, and current security measures fail to protect it in real-time.
                  </p>
                  
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Unsecured pipelines risk:</h3>
                    <ul className="space-y-4 text-lg text-white/80">
                      <li className="flex items-start gap-4">
                        <span className="text-red-400 text-xl">•</span>
                        <span>Data breaches that could expose neurological health information</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-red-400 text-xl">•</span>
                        <span>Regulatory delays blocking clinical trials and market launches</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-red-400 text-xl">•</span>
                        <span>Loss of research integrity due to tampering or unauthorized access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Urgency Section */}
          <section 
            id="urgency" 
            className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-16 relative overflow-hidden"
          >
            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Urgency
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ff4db6] to-[#a855f7] mx-auto mb-16" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8">
                    <p className="text-xl text-white/90 leading-relaxed mb-4">
                      The market is scaling fast — <span className="text-[#00d4ff] font-semibold">3M+ EEG devices expected in North America by 2026</span>.
                    </p>
                    <p className="text-lg text-white/80">
                      More devices = more attack surfaces = higher compliance risk.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-yellow-400">⚡</span>
                      Key regulatory milestones:
                    </h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-yellow-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">2025:</h4>
                        <p className="text-white/80">FDA final guidance on BCI cybersecurity; ISO/IEC 27701 adoption accelerates</p>
                      </div>
                      <div className="border-l-4 border-orange-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">2026:</h4>
                        <p className="text-white/80">HIPAA, GDPR, and CCPA enforcement tighten for neurodata</p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-6">
                        <h4 className="text-lg font-semibold text-white">2027+:</h4>
                        <p className="text-white/80">Potential new neurodata-specific protections may limit non-compliant market entry</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-900/20 border-2 border-red-500/50 rounded-2xl p-8 text-center">
                    <p className="text-xl text-white font-semibold">
                      Companies that wait risk being locked out of clinical and consumer markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Solution Section */}
          <section 
            id="solution" 
            className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-16 relative overflow-hidden"
          >
            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Solution
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto mb-16" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      XBrainer AI builds a neural intrusion prevention system that:
                    </h3>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="bg-black/40 border border-[#00d4ff]/20 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-[#00d4ff] text-xl">🔒</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Real-time Encryption</h4>
                        <p className="text-white/70 text-sm">Encrypts and authenticates EEG streams in real time</p>
                      </div>
                      
                      <div className="bg-black/40 border border-[#a855f7]/20 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-[#a855f7] text-xl">👤</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Access Controls</h4>
                        <p className="text-white/70 text-sm">Applies consent-based access controls for each data request</p>
                      </div>
                      
                      <div className="bg-black/40 border border-[#00d4ff]/20 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-[#00d4ff] text-xl">📝</span>
                        </div>
                        <h4 className="text-white font-bold mb-2">Audit Trails</h4>
                        <p className="text-white/70 text-sm">Maintains full audit trails to meet HIPAA, GDPR, and emerging BCI standards</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-900/20 border-2 border-green-500/50 rounded-2xl p-8 text-center">
                    <p className="text-xl text-white leading-relaxed">
                      Our approach not only reduces security and compliance risk — it <span className="text-green-400 font-semibold">shortens time-to-market</span> for device makers and researchers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Our Edge Section */}
          <section 
            id="edge" 
            className="min-h-screen bg-black flex items-center justify-center py-16 relative overflow-hidden"
          >
            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  Our Edge
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#a855f7] to-[#ff4db6] mx-auto mb-16" />
                
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl">🎯</span>
                      <h3 className="text-xl font-bold text-white">Patent Pending Innovation</h3>
                    </div>
                    <p className="text-white/80 text-left">
                      Patent pending signal-security pipeline designed specifically for neural data protection.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl">⚖️</span>
                      <h3 className="text-xl font-bold text-white">Standards-First Architecture</h3>
                    </div>
                    <p className="text-white/80 text-left">
                      HIPAA, GDPR, ISO 27001, FDA guidance compliance built into the core architecture.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 border border-green-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl">🤖</span>
                      <h3 className="text-xl font-bold text-white">AI-Powered Detection</h3>
                    </div>
                    <p className="text-white/80 text-left">
                      Adaptive intrusion detection powered by AI models tuned for BCI signal patterns.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl">🔧</span>
                      <h3 className="text-xl font-bold text-white">Flexible Integration</h3>
                    </div>
                    <p className="text-white/80 text-left">
                      Flexible SDK integration for device manufacturers and research platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
