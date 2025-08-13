
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
            {/* Subtle flowing EEG background for Problem section */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30" 
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <svg 
                className="w-full h-full opacity-80" 
                viewBox="0 0 1920 1080" 
                preserveAspectRatio="xMidYMid slice"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <defs>
                  <linearGradient id="problemFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#ff4444', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#ff4444', stopOpacity: 0.3}} />
                  </linearGradient>
                  <linearGradient id="problemFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.2}} />
                    <stop offset="50%" style={{stopColor: '#ff4444', stopOpacity: 0.4}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.2}} />
                  </linearGradient>
                </defs>
                
                {/* Subtle flowing waves representing security vulnerabilities */}
                <path
                  d="M-200,400 Q200,380 600,400 Q1000,420 1400,400 Q1800,380 2200,400"
                  stroke="url(#problemFlow1)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  style={{
                    animation: 'problemFlow 15s linear infinite'
                  }}
                />
                
                <path
                  d="M-200,500 Q300,480 700,500 Q1100,520 1500,500 Q1900,480 2300,500"
                  stroke="url(#problemFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.4"
                  style={{
                    animation: 'problemFlow 18s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-200,600 Q400,580 800,600 Q1200,620 1600,600 Q2000,580 2400,600"
                  stroke="url(#problemFlow1)"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                  style={{
                    animation: 'problemFlow 20s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Problem
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ff4444] to-[#a855f7] mx-auto mb-16 animate-pulse" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <p className="text-xl text-white/90 leading-relaxed mb-6">
                      EEG and BCI devices are moving from research labs to clinics, homes, and hybrid environments.
                    </p>
                  </div>
                  
                  <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <p className="text-xl text-white/90 leading-relaxed mb-8">
                      But raw brain data is highly sensitive, and current security measures fail to protect it in real-time.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 border border-red-500/30 rounded-2xl p-8 animate-scale-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.6s'}}>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-red-400 text-3xl animate-pulse">⚠️</span>
                      Unsecured pipelines risk:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-red-900/20 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover-scale">
                        <span className="text-red-400 text-xl animate-pulse">🔓</span>
                        <span className="text-lg text-white/90">Data breaches that could expose neurological health information</span>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-orange-900/20 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover-scale">
                        <span className="text-orange-400 text-xl animate-pulse">⏸️</span>
                        <span className="text-lg text-white/90">Regulatory delays blocking clinical trials and market launches</span>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover-scale">
                        <span className="text-yellow-400 text-xl animate-pulse">📊</span>
                        <span className="text-lg text-white/90">Loss of research integrity due to tampering or unauthorized access</span>
                      </div>
                    </div>
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
            {/* Flowing EEG background for Urgency section */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="urgencyFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#ff4db6', stopOpacity: 0.4}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#ff4db6', stopOpacity: 0.4}} />
                  </linearGradient>
                  <linearGradient id="urgencyFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.3}} />
                  </linearGradient>
                </defs>
                
                {/* Urgent pulse waves */}
                <path
                  d="M-200,300 Q200,250 600,300 Q1000,350 1400,300 Q1800,250 2200,300"
                  stroke="url(#urgencyFlow1)"
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: 'urgencyPulse 8s linear infinite'
                  }}
                />
                
                <path
                  d="M-200,500 Q300,450 700,500 Q1100,550 1500,500 Q1900,450 2300,500"
                  stroke="url(#urgencyFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  style={{
                    animation: 'urgencyPulse 10s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-200,700 Q400,650 800,700 Q1200,750 1600,700 Q2000,650 2400,700"
                  stroke="url(#urgencyFlow1)"
                  strokeWidth="1"
                  fill="none"
                  style={{
                    animation: 'urgencyPulse 12s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Urgency
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ff4db6] to-[#a855f7] mx-auto mb-16 animate-pulse" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-2xl p-8 animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl animate-pulse">📈</span>
                      <h3 className="text-2xl font-bold text-white">Market Explosion</h3>
                    </div>
                    <p className="text-xl text-white/90 leading-relaxed mb-4">
                      The market is scaling fast — <span className="text-[#00d4ff] font-semibold bg-blue-900/30 px-2 py-1 rounded animate-pulse">3M+ EEG devices expected in North America by 2026</span>.
                    </p>
                    <div className="flex items-center gap-2 text-lg text-red-300 font-semibold">
                      <span className="animate-pulse">⚡</span>
                      <span>More devices = more attack surfaces = higher compliance risk</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-yellow-400 text-3xl animate-pulse">⚡</span>
                      Key regulatory milestones:
                    </h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-yellow-400 pl-6 bg-yellow-900/10 p-4 rounded-r-lg hover:bg-yellow-900/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">🎯</span>
                          <h4 className="text-lg font-semibold text-white">2025:</h4>
                        </div>
                        <p className="text-white/80">FDA final guidance on BCI cybersecurity; ISO/IEC 27701 adoption accelerates</p>
                      </div>
                      <div className="border-l-4 border-orange-400 pl-6 bg-orange-900/10 p-4 rounded-r-lg hover:bg-orange-900/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">⚖️</span>
                          <h4 className="text-lg font-semibold text-white">2026:</h4>
                        </div>
                        <p className="text-white/80">HIPAA, GDPR, and CCPA enforcement tighten for neurodata</p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-6 bg-red-900/10 p-4 rounded-r-lg hover:bg-red-900/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">🚫</span>
                          <h4 className="text-lg font-semibold text-white">2027+:</h4>
                        </div>
                        <p className="text-white/80">Potential new neurodata-specific protections may limit non-compliant market entry</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-900/20 border-2 border-red-500/50 rounded-2xl p-8 text-center animate-scale-in relative overflow-hidden" style={{animationDelay: '0.6s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl animate-pulse">🚨</span>
                        <span className="text-4xl animate-pulse">⏰</span>
                      </div>
                      <p className="text-xl text-white font-semibold">
                        Companies that wait risk being <span className="text-red-400 bg-red-900/50 px-3 py-1 rounded-lg animate-pulse">locked out</span> of clinical and consumer markets.
                      </p>
                    </div>
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
            {/* Smooth flowing EEG background for Solution section */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="solutionFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 0.4}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 0.4}} />
                  </linearGradient>
                  <linearGradient id="solutionFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#00ff88', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.3}} />
                  </linearGradient>
                </defs>
                
                {/* Harmonious secure EEG waves */}
                <path
                  d="M-200,350 Q200,330 600,350 Q1000,370 1400,350 Q1800,330 2200,350"
                  stroke="url(#solutionFlow1)"
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: 'solutionFlow 16s linear infinite'
                  }}
                />
                
                <path
                  d="M-200,450 Q300,430 700,450 Q1100,470 1500,450 Q1900,430 2300,450"
                  stroke="url(#solutionFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  style={{
                    animation: 'solutionFlow 18s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-200,550 Q400,530 800,550 Q1200,570 1600,550 Q2000,530 2400,550"
                  stroke="url(#solutionFlow1)"
                  strokeWidth="1"
                  fill="none"
                  style={{
                    animation: 'solutionFlow 20s linear infinite'
                  }}
                />
                
                {/* Security checkpoints as subtle dots */}
                <circle cx="400" cy="350" r="3" fill="#00d4ff" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="800" cy="450" r="3" fill="#a855f7" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1200" cy="550" r="3" fill="#00ff88" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Solution
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto mb-16 animate-pulse" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl animate-pulse">🛡️</span>
                      <h3 className="text-2xl font-bold text-white">
                        XBrainer AI builds a neural intrusion prevention system that:
                      </h3>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                      <button className="bg-black/40 border border-[#00d4ff]/20 rounded-xl p-6 text-center hover:border-[#00d4ff]/60 hover:bg-[#00d4ff]/5 transition-all duration-300 hover-scale group">
                        <div className="w-16 h-16 bg-[#00d4ff]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00d4ff]/30 transition-all duration-300">
                          <span className="text-[#00d4ff] text-2xl group-hover:scale-110 transition-transform duration-300">🔒</span>
                        </div>
                        <h4 className="text-white font-bold mb-3 text-lg">Real-time Encryption</h4>
                        <p className="text-white/70">Encrypts and authenticates EEG streams in real time</p>
                      </button>
                      
                      <button className="bg-black/40 border border-[#a855f7]/20 rounded-xl p-6 text-center hover:border-[#a855f7]/60 hover:bg-[#a855f7]/5 transition-all duration-300 hover-scale group">
                        <div className="w-16 h-16 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#a855f7]/30 transition-all duration-300">
                          <span className="text-[#a855f7] text-2xl group-hover:scale-110 transition-transform duration-300">👤</span>
                        </div>
                        <h4 className="text-white font-bold mb-3 text-lg">Access Controls</h4>
                        <p className="text-white/70">Applies consent-based access controls for each data request</p>
                      </button>
                      
                      <button className="bg-black/40 border border-[#00ff88]/20 rounded-xl p-6 text-center hover:border-[#00ff88]/60 hover:bg-[#00ff88]/5 transition-all duration-300 hover-scale group">
                        <div className="w-16 h-16 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00ff88]/30 transition-all duration-300">
                          <span className="text-[#00ff88] text-2xl group-hover:scale-110 transition-transform duration-300">📝</span>
                        </div>
                        <h4 className="text-white font-bold mb-3 text-lg">Audit Trails</h4>
                        <p className="text-white/70">Maintains full audit trails to meet HIPAA, GDPR, and emerging BCI standards</p>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-green-900/20 border-2 border-green-500/50 rounded-2xl p-8 text-center animate-fade-in relative overflow-hidden" style={{animationDelay: '0.4s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl animate-pulse">⚡</span>
                        <span className="text-4xl animate-pulse">🚀</span>
                      </div>
                      <p className="text-xl text-white leading-relaxed">
                        Our approach not only reduces security and compliance risk — it <span className="text-green-400 font-semibold bg-green-900/30 px-3 py-1 rounded-lg animate-pulse">shortens time-to-market</span> for device makers and researchers.
                      </p>
                    </div>
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
            {/* Futuristic neural network background for Our Edge section */}
            <div className="absolute inset-0 opacity-12">
              <svg className="w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="edgeFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.4}} />
                    <stop offset="50%" style={{stopColor: '#ff4db6', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.4}} />
                  </linearGradient>
                  <linearGradient id="edgeFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#ff4db6', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#ff4db6', stopOpacity: 0.3}} />
                  </linearGradient>
                  <radialGradient id="neuralNode" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0}} />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Advanced EEG neural patterns */}
                <path
                  d="M-200,250 Q200,200 600,250 Q1000,300 1400,250 Q1800,200 2200,250"
                  stroke="url(#edgeFlow1)"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow)"
                  style={{
                    animation: 'edgeFlow 14s linear infinite'
                  }}
                />
                
                <path
                  d="M-200,400 Q300,350 700,400 Q1100,450 1500,400 Q1900,350 2300,400"
                  stroke="url(#edgeFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  filter="url(#glow)"
                  style={{
                    animation: 'edgeFlow 16s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-200,650 Q400,600 800,650 Q1200,700 1600,650 Q2000,600 2400,650"
                  stroke="url(#edgeFlow1)"
                  strokeWidth="1"
                  fill="none"
                  filter="url(#glow)"
                  style={{
                    animation: 'edgeFlow 18s linear infinite'
                  }}
                />
                
                {/* Futuristic neural network nodes */}
                <g filter="url(#glow)">
                  <circle cx="300" cy="250" r="4" fill="url(#neuralNode)">
                    <animate attributeName="r" values="2;8;2" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="600" cy="400" r="4" fill="url(#neuralNode)">
                    <animate attributeName="r" values="2;8;2" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="900" cy="650" r="4" fill="url(#neuralNode)">
                    <animate attributeName="r" values="2;8;2" dur="4.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="1200" cy="250" r="4" fill="url(#neuralNode)">
                    <animate attributeName="r" values="2;8;2" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="1500" cy="400" r="4" fill="url(#neuralNode)">
                    <animate attributeName="r" values="2;8;2" dur="5s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Connecting neural pathways */}
                <g stroke="#a855f7" strokeWidth="0.5" opacity="0.3" filter="url(#glow)">
                  <line x1="300" y1="250" x2="600" y2="400">
                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur="6s" repeatCount="indefinite"/>
                  </line>
                  <line x1="600" y1="400" x2="900" y2="650">
                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5s" repeatCount="indefinite"/>
                  </line>
                  <line x1="900" y1="650" x2="1200" y2="250">
                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur="7s" repeatCount="indefinite"/>
                  </line>
                  <line x1="1200" y1="250" x2="1500" y2="400">
                    <animate attributeName="opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite"/>
                  </line>
                </g>
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  Our Edge
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#a855f7] to-[#ff4db6] mx-auto mb-16 animate-pulse" />
                
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  <button className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 hover-scale group animate-scale-in relative overflow-hidden" style={{animationDelay: '0.1s'}}>
                    {/* Futuristic holographic effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🎯</span>
                        <h3 className="text-xl font-bold text-white">Patent Pending Innovation</h3>
                      </div>
                      <p className="text-white/80 text-left group-hover:text-white/90 transition-colors duration-300">
                        Patent pending signal-security pipeline designed specifically for neural data protection.
                      </p>
                    </div>
                  </button>
                  
                  <button className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-500 hover-scale group animate-scale-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">⚖️</span>
                      <h3 className="text-xl font-bold text-white">Standards-First Architecture</h3>
                    </div>
                    <p className="text-white/80 text-left group-hover:text-white/90 transition-colors duration-300">
                      HIPAA, GDPR, ISO 27001, FDA guidance compliance built into the core architecture.
                    </p>
                  </button>
                  
                  <button className="bg-gradient-to-br from-green-900/40 to-blue-900/40 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-500 hover-scale group animate-scale-in" style={{animationDelay: '0.3s'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🤖</span>
                      <h3 className="text-xl font-bold text-white">AI-Powered Detection</h3>
                    </div>
                    <p className="text-white/80 text-left group-hover:text-white/90 transition-colors duration-300">
                      Adaptive intrusion detection powered by AI models tuned for BCI signal patterns.
                    </p>
                  </button>
                  
                   <button className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/60 transition-all duration-500 hover-scale group animate-scale-in" style={{animationDelay: '0.4s'}}>
                     <div className="flex items-center gap-4 mb-6">
                       <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🔧</span>
                       <h3 className="text-xl font-bold text-white">Flexible Integration</h3>
                     </div>
                     <p className="text-white/80 text-left group-hover:text-white/90 transition-colors duration-300">
                       Flexible SDK integration for device manufacturers and research platforms.
                     </p>
                   </button>
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
