
import { useState } from "react";
import { Menu } from "lucide-react";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "VISION", href: "#vision" },
    { label: "OVERVIEW", href: "#overview" },
    { label: "COMPLIANCE & STANDARDS", href: "#compliance" },
    { label: "USE CASES", href: "#usecases" },
    { label: "SECURITY & PRIVACY", href: "#security" },
    { label: "PARTNERS & COLLABORATORS", href: "#partners" },
    { label: "RESOURCES", href: "#resources" },
    { label: "CAREERS", href: "#careers" },
    { label: "FAQ", href: "#faq" },
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
            <div className="container flex items-center justify-end py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-12">
              <div className="relative">
                <button
                  id="menu-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('🚀 MENU CLICKED - Starting letter animation');
                    
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['M', 'E', 'N', 'U'];
                    
                    // Create letter spans - same as navigation buttons
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="menu-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter}</span>`
                      ).join('');
                      
                      // Same fast animation as navigation buttons
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`menu-click-letter-${letterIndex}`);
                            if (letterSpan) {
                              letterSpan.style.color = color;
                            }
                          }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM button
                        });
                      });
                      
                      // Reset - same timing as navigation buttons
                      setTimeout(() => {
                        textSpan.innerHTML = 'MENU';
                        (textSpan as HTMLElement).style.color = 'white !important';
                      }, letters.length * 10 + colors.length * 30 + 50);
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
                  className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2"
                >
                  <Menu size={20} />
                  <span className="menu-text">MENU</span>
                </button>
                
                {/* Dropdown menu */}
                {isMenuOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-black/95 border border-white/20 rounded-lg shadow-xl z-[9999] backdrop-blur-sm"
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
                              console.log(`🚀 ${item.label} CLICKED - Starting letter animation`);
                              
                              const btn = e.currentTarget as HTMLElement;
                              const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                              const letters = item.label.split('');
                              
                              // Create letter spans - same as navigation buttons
                              btn.innerHTML = letters.map((letter, i) => 
                                `<span id="menu-item-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                              ).join('');
                              
                              // Same fast animation as navigation buttons
                              letters.forEach((letter, letterIndex) => {
                                colors.forEach((color, colorIndex) => {
                                  setTimeout(() => {
                                    const letterSpan = document.getElementById(`menu-item-click-letter-${letterIndex}`);
                                    if (letterSpan && letter !== ' ') {
                                      letterSpan.style.color = color;
                                    }
                                  }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM button
                                });
                              });
                              
                              // Reset and navigate - same timing as navigation buttons
                              setTimeout(() => {
                                btn.innerHTML = item.label;
                                btn.style.color = 'white !important';
                                btn.style.setProperty('color', 'white', 'important');
                                
                                // Navigate after animation
                                setTimeout(() => {
                                  setIsMenuOpen(false);
                                  const targetElement = document.querySelector(item.href);
                                  if (targetElement) {
                                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }
                                }, 100);
                              }, letters.length * 10 + colors.length * 30 + 50);
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
                                btn.style.color = 'white !important';
                                btn.style.setProperty('color', 'white', 'important');
                                
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
            className="min-h-screen md:min-h-[100vh] bg-black flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
            style={{
              contain: 'layout style paint',
              willChange: 'transform',
              isolation: 'isolate'
            }}
          >
            {/* Subtle flowing EEG background for Problem section */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden z-0" 
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <svg 
                className="w-full h-full" 
                viewBox="0 0 1920 1080" 
                preserveAspectRatio="xMidYMid slice"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <defs>
                  <linearGradient id="problemFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#6C63FF', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#4F46E5', stopOpacity: 0.8}} />
                  </linearGradient>
                  <linearGradient id="problemFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 0.7}} />
                    <stop offset="50%" style={{stopColor: '#7C3AED', stopOpacity: 0.9}} />
                    <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0.7}} />
                  </linearGradient>
                </defs>
                
                {/* Realistic EEG waveforms representing security vulnerabilities */}
                <path
                  d="M-50,380 L0,375 L20,390 L40,365 L60,385 L80,370 L120,395 L140,360 L180,390 L220,375 L260,400 L300,350 L340,385 L380,370 L420,395 L460,355 L500,380 L540,375 L580,390 L620,365 L660,385 L700,370 L740,395 L780,360 L820,390 L860,375 L900,400 L940,350 L980,385 L1020,370 L1060,395 L1100,355 L1140,380 L1180,375 L1220,390 L1260,365 L1300,385 L1340,370 L1380,395 L1420,360 L1460,390 L1500,375 L1540,400 L1580,350 L1620,385 L1660,370 L1700,395 L1740,355 L1780,380 L1820,375 L1860,390 L1900,365 L1940,385 L1980,370"
                  stroke="url(#problemFlow1)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.9"
                  style={{
                    animation: 'problemFlow 12s linear infinite'
                  }}
                />
                
                <path
                  d="M-50,480 L0,485 L25,460 L50,495 L75,470 L100,490 L130,465 L160,500 L190,475 L220,485 L250,460 L280,495 L310,470 L340,490 L370,465 L400,500 L430,475 L460,485 L490,460 L520,495 L550,470 L580,490 L610,465 L640,500 L670,475 L700,485 L730,460 L760,495 L790,470 L820,490 L850,465 L880,500 L910,475 L940,485 L970,460 L1000,495 L1030,470 L1060,490 L1090,465 L1120,500 L1150,475 L1180,485 L1210,460 L1240,495 L1270,470 L1300,490 L1330,465 L1360,500 L1390,475 L1420,485 L1450,460 L1480,495 L1510,470 L1540,490 L1570,465 L1600,500 L1630,475 L1660,485 L1690,460 L1720,495 L1750,470 L1780,490 L1810,465 L1840,500 L1870,475 L1900,485 L1930,460 L1960,495 L1990,470"
                  stroke="url(#problemFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                  style={{
                    animation: 'problemFlow 15s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-50,580 L0,575 L15,590 L30,565 L45,585 L60,570 L80,595 L100,560 L125,590 L150,575 L175,600 L200,555 L225,585 L250,570 L275,595 L300,560 L325,590 L350,575 L375,600 L400,555 L425,585 L450,570 L475,595 L500,560 L525,590 L550,575 L575,600 L600,555 L625,585 L650,570 L675,595 L700,560 L725,590 L750,575 L775,600 L800,555 L825,585 L850,570 L875,595 L900,560 L925,590 L950,575 L975,600 L1000,555 L1025,585 L1050,570 L1075,595 L1100,560 L1125,590 L1150,575 L1175,600 L1200,555 L1225,585 L1250,570 L1275,595 L1300,560 L1325,590 L1350,575 L1375,600 L1400,555 L1425,585 L1450,570 L1475,595 L1500,560 L1525,590 L1550,575 L1575,600 L1600,555 L1625,585 L1650,570 L1675,595 L1700,560 L1725,590 L1750,575 L1775,600 L1800,555 L1825,585 L1850,570 L1875,595 L1900,560 L1925,590 L1950,575 L1975,600"
                  stroke="#4F46E5"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                  style={{
                    animation: 'problemFlow 18s linear infinite'
                  }}
                />
                
                {/* Additional EEG spikes for chaos effect */}
                <path
                  d="M-50,420 L0,415 L10,440 L20,405 L30,435 L40,410 L50,445 L60,400 L70,430 L80,415 L90,450 L100,395 L110,425 L120,410 L130,445 L140,400 L150,430 L160,415 L170,450 L180,395 L190,425 L200,410"
                  stroke="#9333EA"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.8"
                  style={{
                    animation: 'problemFlow 8s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-6 sm:px-8 lg:px-12">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 md:mb-4 animate-fade-in">
                  The Problem
                </h2>
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#A855F7] mx-auto mb-8 md:mb-6 animate-pulse" />
                
                <div className="space-y-4 md:space-y-4 text-left max-w-4xl mx-auto">
                  <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                    <p className="text-base md:text-base text-white/90 leading-relaxed mb-3 md:mb-2">
                      EEG and BCI devices are leaving the lab for clinics, homes, and consumer environments.
                    </p>
                  </div>
                  
                  <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <p className="text-base md:text-base text-white/90 leading-relaxed mb-4 md:mb-3">
                      But raw brain data is among the most sensitive personal information. And today's security measures fail to protect it in real time.
                    </p>
                  </div>
                  
                  <div className="bg-black/40 border border-[#7C3AED]/30 rounded-2xl p-4 md:p-4 animate-scale-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.6s'}}>
                    <h3 className="text-lg md:text-lg font-bold text-white mb-3 md:mb-3 flex items-center gap-3">
                      <span className="text-[#6C63FF] text-xl md:text-xl animate-pulse">⚠️</span>
                      Unsecured pipelines risk:
                    </h3>
                    <div className="space-y-2 md:space-y-2">
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-2 bg-[#7C3AED]/20 rounded-lg border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover-scale">
                        <span className="text-[#6C63FF] text-base md:text-base animate-pulse">🔓</span>
                        <span className="text-sm md:text-sm text-white/90"><strong>Data breaches</strong> exposing neurological health information</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-2 bg-[#9333EA]/20 rounded-lg border border-[#9333EA]/20 hover:border-[#9333EA]/40 transition-all duration-300 hover-scale">
                        <span className="text-[#9333EA] text-base md:text-base animate-pulse">⏸️</span>
                        <span className="text-sm md:text-sm text-white/90"><strong>Regulatory delays</strong> that stall trials and market approvals</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-2 bg-[#4338CA]/20 rounded-lg border border-[#4338CA]/20 hover:border-[#4338CA]/40 transition-all duration-300 hover-scale">
                        <span className="text-[#4338CA] text-base md:text-base animate-pulse">📊</span>
                        <span className="text-sm md:text-sm text-white/90"><strong>Research integrity</strong> loss from tampering or unauthorized access</span>
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
            className="min-h-screen md:min-h-[100vh] bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
          >
            {/* Enhanced EEG background for Urgency section - increased visibility */}
            <div className="absolute inset-0 opacity-90">
              <svg className="w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="urgencyFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#EC4899', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#F472B6', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity: 0.8}} />
                  </linearGradient>
                  <linearGradient id="urgencyFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#BE185D', stopOpacity: 0.7}} />
                    <stop offset="50%" style={{stopColor: '#DB2777', stopOpacity: 0.9}} />
                    <stop offset="100%" style={{stopColor: '#BE185D', stopOpacity: 0.7}} />
                  </linearGradient>
                </defs>
                
                {/* Copy exact EEG patterns from Problem section */}
                <path
                  d="M-50,380 L0,375 L20,390 L40,365 L60,385 L80,370 L120,395 L140,360 L180,390 L220,375 L260,400 L300,350 L340,385 L380,370 L420,395 L460,355 L500,380 L540,375 L580,390 L620,365 L660,385 L700,370 L740,395 L780,360 L820,390 L860,375 L900,400 L940,350 L980,385 L1020,370 L1060,395 L1100,355 L1140,380 L1180,375 L1220,390 L1260,365 L1300,385 L1340,370 L1380,395 L1420,360 L1460,390 L1500,375 L1540,400 L1580,350 L1620,385 L1660,370 L1700,395 L1740,355 L1780,380 L1820,375 L1860,390 L1900,365 L1940,385 L1980,370"
                  stroke="url(#urgencyFlow1)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.95"
                  style={{
                    animation: 'urgencyPulse 12s linear infinite',
                    filter: 'drop-shadow(0 0 8px #EC4899)'
                  }}
                />
                
                <path
                  d="M-50,480 L0,485 L25,460 L50,495 L75,470 L100,490 L130,465 L160,500 L190,475 L220,485 L250,460 L280,495 L310,470 L340,490 L370,465 L400,500 L430,475 L460,485 L490,460 L520,495 L550,470 L580,490 L610,465 L640,500 L670,475 L700,485 L730,460 L760,495 L790,470 L820,490 L850,465 L880,500 L910,475 L940,485 L970,460 L1000,495 L1030,470 L1060,490 L1090,465 L1120,500 L1150,475 L1180,485 L1210,460 L1240,495 L1270,470 L1300,490 L1330,465 L1360,500 L1390,475 L1420,485 L1450,460 L1480,495 L1510,470 L1540,490 L1570,465 L1600,500 L1630,475 L1660,485 L1690,460 L1720,495 L1750,470 L1780,490 L1810,465 L1840,500 L1870,475 L1900,485 L1930,460 L1960,495 L1990,470"
                  stroke="url(#urgencyFlow2)"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.85"
                  style={{
                    animation: 'urgencyPulse 15s linear infinite reverse',
                    filter: 'drop-shadow(0 0 6px #BE185D)'
                  }}
                />
                
                <path
                  d="M-50,580 L0,575 L15,590 L30,565 L45,585 L60,570 L80,595 L100,560 L125,590 L150,575 L175,600 L200,555 L225,585 L250,570 L275,595 L300,560 L325,590 L350,575 L375,600 L400,555 L425,585 L450,570 L475,595 L500,560 L525,590 L550,575 L575,600 L600,555 L625,585 L650,570 L675,595 L700,560 L725,590 L750,575 L775,600 L800,555 L825,585 L850,570 L875,595 L900,560 L925,590 L950,575 L975,600 L1000,555 L1025,585 L1050,570 L1075,595 L1100,560 L1125,590 L1150,575 L1175,600 L1200,555 L1225,585 L1250,570 L1275,595 L1300,560 L1325,590 L1350,575 L1375,600 L1400,555 L1425,585 L1450,570 L1475,595 L1500,560 L1525,590 L1550,575 L1575,600 L1600,555 L1625,585 L1650,570 L1675,595 L1700,560 L1725,590 L1750,575 L1775,600 L1800,555 L1825,585 L1850,570 L1875,595 L1900,560 L1925,590 L1950,575 L1975,600"
                  stroke="#F472B6"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                  style={{
                    animation: 'urgencyPulse 18s linear infinite',
                    filter: 'drop-shadow(0 0 5px #F472B6)'
                  }}
                />
                
                {/* Additional EEG spikes for urgency effect */}
                <path
                  d="M-50,420 L0,415 L10,440 L20,405 L30,435 L40,410 L50,445 L60,400 L70,430 L80,415 L90,450 L100,395 L110,425 L120,410 L130,445 L140,400 L150,430 L160,415 L170,450 L180,395 L190,425 L200,410"
                  stroke="#BE185D"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.8"
                  style={{
                    animation: 'urgencyPulse 8s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 md:mb-4 animate-fade-in">
                  The Urgency
                </h2>
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#EC4899] to-[#F472B6] mx-auto mb-8 md:mb-6 animate-pulse" />
                
                <div className="space-y-4 md:space-y-4 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-[#EC4899]/40 to-[#F472B6]/40 border-2 border-[#EC4899]/50 rounded-2xl p-4 md:p-4 animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-2">
                      <span className="text-2xl md:text-2xl animate-pulse">📈</span>
                      <h3 className="text-lg md:text-lg font-bold text-white">Market Explosion</h3>
                    </div>
                    <p className="text-base md:text-base text-white/90 leading-relaxed mb-2 md:mb-2">
                      The market is scaling fast — <span className="text-[#F472B6] font-semibold bg-[#EC4899]/30 px-2 py-1 rounded animate-pulse">3M+ EEG devices expected in North America by 2026</span>.
                    </p>
                    <div className="flex items-center gap-2 text-sm md:text-sm text-[#EC4899] font-semibold">
                      <span className="animate-pulse">⚡</span>
                      <span>More devices = more attack surfaces = higher compliance risk</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <h3 className="text-lg md:text-lg font-bold text-white mb-3 md:mb-3 flex items-center gap-2 md:gap-2">
                      <span className="text-yellow-400 text-xl md:text-xl animate-pulse">⚡</span>
                      Key regulatory milestones:
                    </h3>
                    <div className="space-y-3 md:space-y-2">
                      <div className="border-l-4 border-[#EC4899] pl-3 md:pl-4 bg-[#EC4899]/10 p-2 md:p-2 rounded-r-lg hover:bg-[#EC4899]/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-2 md:gap-2 mb-1 md:mb-1">
                          <span className="text-lg md:text-lg">🎯</span>
                          <h4 className="text-sm md:text-sm font-semibold text-white">2025:</h4>
                        </div>
                        <p className="text-sm md:text-sm text-white/80">FDA final guidance on BCI cybersecurity; ISO/IEC 27701 adoption accelerates</p>
                      </div>
                      <div className="border-l-4 border-[#F472B6] pl-3 md:pl-4 bg-[#F472B6]/10 p-2 md:p-2 rounded-r-lg hover:bg-[#F472B6]/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-2 md:gap-2 mb-1 md:mb-1">
                          <span className="text-lg md:text-lg">⚖️</span>
                          <h4 className="text-sm md:text-sm font-semibold text-white">2026:</h4>
                        </div>
                        <p className="text-sm md:text-sm text-white/80">HIPAA, GDPR, and CCPA enforcement tighten for neurodata</p>
                      </div>
                      <div className="border-l-4 border-[#BE185D] pl-3 md:pl-4 bg-[#BE185D]/10 p-2 md:p-2 rounded-r-lg hover:bg-[#BE185D]/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-2 md:gap-2 mb-1 md:mb-1">
                          <span className="text-lg md:text-lg">🚫</span>
                          <h4 className="text-sm md:text-sm font-semibold text-white">2027+:</h4>
                        </div>
                        <p className="text-sm md:text-sm text-white/80">Potential new neurodata-specific protections may limit non-compliant market entry</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#EC4899]/20 border-2 border-[#F472B6]/50 rounded-2xl p-4 md:p-4 text-center animate-scale-in relative overflow-hidden" style={{animationDelay: '0.6s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/10 to-transparent animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-2 md:gap-2 mb-2 md:mb-2">
                        <span className="text-2xl md:text-2xl animate-pulse">🚨</span>
                        <span className="text-2xl md:text-2xl animate-pulse">⏰</span>
                      </div>
                      <p className="text-base md:text-base text-white font-semibold">
                        Companies that wait risk being <span className="text-[#EC4899] bg-[#F472B6]/50 px-2 md:px-2 py-1 rounded-lg animate-pulse">locked out</span> of clinical and consumer markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spacer between Urgency and Solution */}
          <div className="h-16 md:h-32 bg-gradient-to-b from-gray-900 to-black"></div>

          {/* 3. Solution Section */}
          <section 
            id="solution" 
            className="min-h-screen md:min-h-[100vh] bg-gradient-to-b from-gray-900 to-black flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
          >
            {/* Smooth flowing EEG background for Solution section */}
            <div className="absolute inset-0 opacity-100">
              <svg className="w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="solutionFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#6C63FF', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#6C63FF', stopOpacity: 0.9}} />
                  </linearGradient>
                  <linearGradient id="solutionFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#7C3AED', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#4338CA', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                
                {/* Copy exact EEG patterns from Problem section */}
                <path
                  d="M-50,380 L0,375 L20,390 L40,365 L60,385 L80,370 L120,395 L140,360 L180,390 L220,375 L260,400 L300,350 L340,385 L380,370 L420,395 L460,355 L500,380 L540,375 L580,390 L620,365 L660,385 L700,370 L740,395 L780,360 L820,390 L860,375 L900,400 L940,350 L980,385 L1020,370 L1060,395 L1100,355 L1140,380 L1180,375 L1220,390 L1260,365 L1300,385 L1340,370 L1380,395 L1420,360 L1460,390 L1500,375 L1540,400 L1580,350 L1620,385 L1660,370 L1700,395 L1740,355 L1780,380 L1820,375 L1860,390 L1900,365 L1940,385 L1980,370"
                  stroke="url(#solutionFlow1)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.9"
                  style={{
                    animation: 'solutionFlow 12s linear infinite'
                  }}
                />
                
                <path
                  d="M-50,480 L0,485 L25,460 L50,495 L75,470 L100,490 L130,465 L160,500 L190,475 L220,485 L250,460 L280,495 L310,470 L340,490 L370,465 L400,500 L430,475 L460,485 L490,460 L520,495 L550,470 L580,490 L610,465 L640,500 L670,475 L700,485 L730,460 L760,495 L790,470 L820,490 L850,465 L880,500 L910,475 L940,485 L970,460 L1000,495 L1030,470 L1060,490 L1090,465 L1120,500 L1150,475 L1180,485 L1210,460 L1240,495 L1270,470 L1300,490 L1330,465 L1360,500 L1390,475 L1420,485 L1450,460 L1480,495 L1510,470 L1540,490 L1570,465 L1600,500 L1630,475 L1660,485 L1690,460 L1720,495 L1750,470 L1780,490 L1810,465 L1840,500 L1870,475 L1900,485 L1930,460 L1960,495 L1990,470"
                  stroke="url(#solutionFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                  style={{
                    animation: 'solutionFlow 15s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-50,580 L0,575 L15,590 L30,565 L45,585 L60,570 L80,595 L100,560 L125,590 L150,575 L175,600 L200,555 L225,585 L250,570 L275,595 L300,560 L325,590 L350,575 L375,600 L400,555 L425,585 L450,570 L475,595 L500,560 L525,590 L550,575 L575,600 L600,555 L625,585 L650,570 L675,595 L700,560 L725,590 L750,575 L775,600 L800,555 L825,585 L850,570 L875,595 L900,560 L925,590 L950,575 L975,600 L1000,555 L1025,585 L1050,570 L1075,595 L1100,560 L1125,590 L1150,575 L1175,600 L1200,555 L1225,585 L1250,570 L1275,595 L1300,560 L1325,590 L1350,575 L1375,600 L1400,555 L1425,585 L1450,570 L1475,595 L1500,560 L1525,590 L1550,575 L1575,600 L1600,555 L1625,585 L1650,570 L1675,595 L1700,560 L1725,590 L1750,575 L1775,600 L1800,555 L1825,585 L1850,570 L1875,595 L1900,560 L1925,590 L1950,575 L1975,600"
                  stroke="#4F46E5"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                  style={{
                    animation: 'solutionFlow 18s linear infinite'
                  }}
                />
                
                {/* Additional EEG spikes for solution effect */}
                <path
                  d="M-50,420 L0,415 L10,440 L20,405 L30,435 L40,410 L50,445 L60,400 L70,430 L80,415 L90,450 L100,395 L110,425 L120,410 L130,445 L140,400 L150,430 L160,415 L170,450 L180,395 L190,425 L200,410"
                  stroke="#6B21A8"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.8"
                  style={{
                    animation: 'solutionFlow 8s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 md:mb-4 animate-fade-in">
                  The Solution
                </h2>
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] mx-auto mb-8 md:mb-6 animate-pulse" />
                
                <div className="space-y-4 md:space-y-4 text-left max-w-4xl mx-auto">
                  {/* Futuristic neural shield container */}
                  <div className="relative group animate-scale-in" style={{animationDelay: '0.2s'}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#9333EA]/20 rounded-[2rem] transform -rotate-1 group-hover:-rotate-2 transition-transform duration-700"></div>
                    <div className="relative bg-black/70 backdrop-blur-lg border-2 border-[#7C3AED]/40 rounded-[2rem] p-4 md:p-4 hover:border-[#7C3AED]/70 transition-all duration-500">
                      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-3">
                        <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-[#EC4899]/20 to-[#F472B6]/20 rounded-full flex items-center justify-center">
                          <span className="text-xl md:text-xl animate-pulse">🛡️</span>
                        </div>
                        <h3 className="text-lg md:text-lg font-bold text-white">
                        XBrainer AI builds a neural intrusion prevention system that:
                        </h3>
                      </div>
                      
                      {/* Organic feature circles */}
                      <div className="grid gap-3 md:gap-3 md:grid-cols-3">
                        <div className="relative group/feature">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5 rounded-[1.5rem] transform rotate-3 group-hover/feature:rotate-6 transition-transform duration-300"></div>
                          <div className="relative bg-black/50 backdrop-blur-sm border border-[#7C3AED]/30 rounded-[1.5rem] p-3 md:p-3 text-center hover:border-[#7C3AED]/60 hover:bg-[#7C3AED]/5 transition-all duration-300 hover-scale">
                            <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-[#7C3AED]/20 to-[#7C3AED]/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-2 group-hover/feature:scale-110 transition-transform duration-300">
                              <span className="text-[#7C3AED] text-lg md:text-lg">🔒</span>
                            </div>
                            <h4 className="text-white font-bold mb-2 md:mb-2 text-sm md:text-sm">Real-time Encryption</h4>
                            <p className="text-white/70 text-xs md:text-xs">Encrypts and authenticates EEG streams in real time</p>
                          </div>
                        </div>
                        
                        <div className="relative group/feature">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/10 to-[#9333EA]/5 rounded-[1.5rem] transform -rotate-2 group-hover/feature:-rotate-4 transition-transform duration-300"></div>
                          <div className="relative bg-black/50 backdrop-blur-sm border border-[#9333EA]/30 rounded-[1.5rem] p-3 md:p-3 text-center hover:border-[#9333EA]/60 hover:bg-[#9333EA]/5 transition-all duration-300 hover-scale">
                            <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-[#9333EA]/20 to-[#9333EA]/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-2 group-hover/feature:scale-110 transition-transform duration-300">
                              <span className="text-[#9333EA] text-lg md:text-lg">👤</span>
                            </div>
                            <h4 className="text-white font-bold mb-2 md:mb-2 text-sm md:text-sm">Access Controls</h4>
                            <p className="text-white/70 text-xs md:text-xs">Applies consent-based access controls for each data request</p>
                          </div>
                        </div>
                        
                        <div className="relative group/feature">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#6B21A8]/10 to-[#6B21A8]/5 rounded-[1.5rem] transform rotate-1 group-hover/feature:rotate-3 transition-transform duration-300"></div>
                          <div className="relative bg-black/50 backdrop-blur-sm border border-[#6B21A8]/30 rounded-[1.5rem] p-3 md:p-3 text-center hover:border-[#6B21A8]/60 hover:bg-[#6B21A8]/5 transition-all duration-300 hover-scale">
                            <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-[#6B21A8]/20 to-[#6B21A8]/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-2 group-hover/feature:scale-110 transition-transform duration-300">
                              <span className="text-[#6B21A8] text-lg md:text-lg">📝</span>
                            </div>
                            <h4 className="text-white font-bold mb-2 md:mb-2 text-sm md:text-sm">Audit Trails</h4>
                            <p className="text-white/70 text-xs md:text-xs">Maintains full audit trails to meet HIPAA, GDPR, and emerging BCI standards</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flowing benefit capsule */}
                  <div className="relative group animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#9333EA]/10 rounded-full transform scale-105 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative bg-black/80 backdrop-blur-md border-2 border-[#7C3AED]/40 rounded-full p-4 md:p-4 text-center overflow-hidden hover:border-[#7C3AED]/70 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 to-transparent animate-pulse"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-2 md:mb-2">
                          <span className="text-2xl md:text-2xl animate-pulse">⚡</span>
                          <span className="text-2xl md:text-2xl animate-pulse">🚀</span>
                        </div>
                        <p className="text-base md:text-base text-white leading-relaxed">
                          Our approach not only reduces security and compliance risk — it <span className="text-[#7C3AED] font-semibold bg-[#9333EA]/30 px-3 py-1 rounded-full animate-pulse">shortens time-to-market</span> for device makers and researchers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Our Edge Section */}
          <section 
            id="edge" 
            className="min-h-screen md:min-h-[100vh] bg-black flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
          >
            {/* Large cosmic nebula in bottom left corner */}
            <div className="absolute bottom-8 left-8">
              <div 
                className="w-80 h-80 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('/lovable-uploads/574042c4-4d23-497c-8222-72b20a878a2f.png')`,
                  filter: 'saturate(1.5) brightness(1.4) contrast(1.2)',
                  opacity: '0.95',
                  animation: 'cosmicGlow 4s ease-in-out infinite alternate'
                }}
              ></div>
            </div>
              
            {/* Subtle EEG patterns overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1920 1080">
              <defs>
                <linearGradient id="cosmicWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 0.6}} />
                  <stop offset="50%" style={{stopColor: '#A78BFA', stopOpacity: 0.8}} />
                  <stop offset="100%" style={{stopColor: '#60A5FA', stopOpacity: 0.6}} />
                </linearGradient>
              </defs>
              
              <path
                d="M0,400 L100,395 L200,410 L300,385 L400,405 L500,380 L600,400 L700,390 L800,415 L900,375 L1000,395 L1100,420 L1200,385 L1300,400 L1400,395 L1500,410 L1600,385 L1700,405 L1800,380 L1900,400"
                stroke="url(#cosmicWave1)"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 30,0; 0,0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 md:mb-4 animate-fade-in">
                  Our Edge
                </h2>
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] mx-auto mb-8 md:mb-6 animate-pulse" />
                
                {/* Feature items with original text content */}
                <div className="space-y-4 md:space-y-3 max-w-5xl mx-auto">
                  <div className="relative group animate-scale-in" style={{animationDelay: '0.1s'}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#1D4ED8]/20 transform skew-x-3 group-hover:skew-x-6 transition-transform duration-700 rounded-3xl"></div>
                    <div className="relative bg-black/70 backdrop-blur-lg border-2 border-[#3B82F6]/40 rounded-3xl p-4 md:p-4 hover:border-[#3B82F6]/70 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#1D4ED8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 text-left">
                        <h3 className="text-base md:text-base font-bold text-white mb-1 md:mb-1">Patent pending signal-security pipeline</h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative group animate-scale-in ml-auto w-4/5" style={{animationDelay: '0.2s'}}>
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#2563EB]/20 to-[#3B82F6]/20 transform -skew-y-2 group-hover:-skew-y-4 transition-transform duration-700 rounded-full"></div>
                    <div className="relative bg-black/70 backdrop-blur-lg border-2 border-[#2563EB]/40 rounded-full p-4 md:p-4 hover:border-[#2563EB]/70 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-l from-[#2563EB]/5 via-transparent to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 text-left">
                        <h3 className="text-base md:text-base font-bold text-white mb-1 md:mb-1">Standards-first architecture: HIPAA, GDPR, ISO 27001, FDA guidance</h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative group animate-scale-in w-5/6" style={{animationDelay: '0.3s'}}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40AF]/20 to-[#3B82F6]/20 transform rotate-1 group-hover:rotate-3 transition-transform duration-700"></div>
                    <div className="relative bg-black/70 backdrop-blur-lg border-2 border-[#1E40AF]/40 p-4 md:p-4 hover:border-[#1E40AF]/70 transition-all duration-500 overflow-hidden" style={{clipPath: 'polygon(0 0, calc(100% - 2rem) 0, 100% 100%, 2rem 100%)'}}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40AF]/5 via-transparent to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 text-left">
                        <h3 className="text-base md:text-base font-bold text-white mb-1 md:mb-1">Adaptive intrusion detection powered by AI models tuned for BCI signal patterns</h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative group animate-scale-in ml-auto w-4/5" style={{animationDelay: '0.4s'}}>
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#1D4ED8]/20 to-[#2563EB]/20 transform -rotate-2 group-hover:-rotate-4 transition-transform duration-700 rounded-[3rem]"></div>
                    <div className="relative bg-black/70 backdrop-blur-lg border-2 border-[#1D4ED8]/40 rounded-[3rem] p-4 md:p-4 hover:border-[#1D4ED8]/70 transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-l from-[#1D4ED8]/5 via-transparent to-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 text-left">
                        <h3 className="text-base md:text-base font-bold text-white mb-1 md:mb-1">Flexible SDK integration for device manufacturers and research platforms</h3>
                      </div>
                    </div>
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
