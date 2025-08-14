
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import NavigationLayout from "@/components/marketing/NavigationLayout";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavigationLayout, setShowNavigationLayout] = useState(false);

  // Optimized title setting
  useEffect(() => {
    document.title = "XBrainer AI Official Website";
  }, []);

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROBLEM", href: "#problem" },
    { label: "URGENCY", href: "#urgency" },
    { label: "SOLUTION", href: "#solution" },
    { label: "OUR EDGE", href: "#edge" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "CAREER", href: "#career" },
    { label: "BRIEFING REQUEST", href: "#briefing" },
    { label: "VISION", href: "#vision" },
    { label: "FEATURE", href: "#features" },
    { label: "HOW IT WORKS", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Show navigation layout when menu is clicked
  if (showNavigationLayout) {
    return <NavigationLayout 
      onBack={() => {
        setShowNavigationLayout(false);
        setIsMenuOpen(false); // Reset menu state when going back
      }} 
      onNavigateToSection={(section) => {
        setShowNavigationLayout(false);
        setIsMenuOpen(false); // Reset menu state when navigating
        // Scroll to the section after a brief delay to allow page transition
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }}
    />;
  }

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
          {/* Menu button in top right - Adjusted for mobile */}
          <header className="absolute left-0 right-0 top-0 z-30">
            <div className="container flex items-center justify-end py-6 sm:py-8 lg:py-10 px-6 sm:px-8 lg:px-12 pt-16 sm:pt-6">
              <div className="relative">
                <button
                  id="menu-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('🚀 MENU CLICKED - Starting letter animation');
                    
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['M', 'E', 'N', 'U'];
                    
                    // Animate the menu icon first
                    const iconElement = btn.querySelector('.lucide');
                    if (iconElement) {
                      colors.forEach((color, colorIndex) => {
                        setTimeout(() => {
                          (iconElement as HTMLElement).style.color = color;
                        }, colorIndex * 15);
                      });
                      // Reset icon color
                      setTimeout(() => {
                        (iconElement as HTMLElement).style.color = 'white';
                      }, colors.length * 15 + 25);
                    }
                    
                    // Create letter spans for MENU text
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="menu-click-letter-${i}" style="display: inline-block; transition: color 0.05s ease; background: none !important; border: none !important;">${letter}</span>`
                      ).join('');
                      
                      // Much faster animation
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`menu-click-letter-${letterIndex}`);
                            if (letterSpan) {
                              letterSpan.style.color = color;
                            }
                          }, letterIndex * 5 + colorIndex * 15);
                        });
                      });
                      
                      // Reset text
                      setTimeout(() => {
                        textSpan.innerHTML = 'MENU';
                        (textSpan as HTMLElement).style.color = 'white !important';
                      }, letters.length * 5 + colors.length * 15 + 25);
                    }
                    
                    setIsMenuOpen(!isMenuOpen);
                    setShowNavigationLayout(true);
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
                    className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-background/90 border border-white/20 rounded-lg shadow-lg z-50"
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
            className="min-h-screen md:min-h-[100vh] flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
            style={{
              backgroundColor: '#1a1a1a',
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
                    <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 0.1}} />
                    <stop offset="50%" style={{stopColor: '#6C63FF', stopOpacity: 0.15}} />
                    <stop offset="100%" style={{stopColor: '#4F46E5', stopOpacity: 0.1}} />
                  </linearGradient>
                  <linearGradient id="problemFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 0.08}} />
                    <stop offset="50%" style={{stopColor: '#7C3AED', stopOpacity: 0.12}} />
                    <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0.08}} />
                  </linearGradient>
                </defs>
                
                {/* Only 4 EEG waveforms total */}
                <path
                  d="M-50,380 L0,375 L20,390 L40,365 L60,385 L80,370 L120,395 L140,360 L180,390 L220,375 L260,400 L300,350 L340,385 L380,370 L420,395 L460,355 L500,380 L540,375 L580,390 L620,365 L660,385 L700,370 L740,395 L780,360 L820,390 L860,375 L900,400 L940,350 L980,385 L1020,370 L1060,395 L1100,355 L1140,380 L1180,375 L1220,390 L1260,365 L1300,385 L1340,370 L1380,395 L1420,360 L1460,390 L1500,375 L1540,400 L1580,350 L1620,385 L1660,370 L1700,395 L1740,355 L1780,380 L1820,375 L1860,390 L1900,365 L1940,385 L1980,370"
                  stroke="url(#problemFlow1)"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.1"
                  style={{
                    animation: 'problemFlow 20s linear infinite'
                  }}
                />
                
                <path
                  d="M-50,480 L0,485 L25,460 L50,495 L75,470 L100,490 L130,465 L160,500 L190,475 L220,485 L250,460 L280,495 L310,470 L340,490 L370,465 L400,500 L430,475 L460,485 L490,460 L520,495 L550,470 L580,490 L610,465 L640,500 L670,475 L700,485 L730,460 L760,495 L790,470 L820,490 L850,465 L880,500 L910,475 L940,485 L970,460 L1000,495 L1030,470 L1060,490 L1090,465 L1120,500 L1150,475 L1180,485 L1210,460 L1240,495 L1270,470 L1300,490 L1330,465 L1360,500 L1390,475 L1420,485 L1450,460 L1480,495 L1510,470 L1540,490 L1570,465 L1600,500 L1630,475 L1660,485 L1690,460 L1720,495 L1750,470 L1780,490 L1810,465 L1840,500 L1870,475 L1900,485 L1930,460 L1960,495 L1990,470"
                  stroke="url(#problemFlow2)"
                  strokeWidth="0.4"
                  fill="none"
                  opacity="0.08"
                  style={{
                    animation: 'problemFlow 25s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-50,580 L0,575 L15,590 L30,565 L45,585 L60,570 L80,595 L100,560 L125,590 L150,575 L175,600 L200,555 L225,585 L250,570 L275,595 L300,560 L325,590 L350,575 L375,600 L400,555 L425,585 L450,570 L475,595 L500,560 L525,590 L550,575 L575,600 L600,555 L625,585 L650,570 L675,595 L700,560 L725,590 L750,575 L775,600 L800,555 L825,585 L850,570 L875,595 L900,560 L925,590 L950,575 L975,600 L1000,555 L1025,585 L1050,570 L1075,595 L1100,560 L1125,590 L1150,575 L1175,600 L1200,555 L1225,585 L1250,570 L1275,595 L1300,560 L1325,590 L1350,575 L1375,600 L1400,555 L1425,585 L1450,570 L1475,595 L1500,560 L1525,590 L1550,575 L1575,600 L1600,555 L1625,585 L1650,570 L1675,595 L1700,560 L1725,590 L1750,575 L1775,600 L1800,555 L1825,585 L1850,570 L1875,595 L1900,560 L1925,590 L1950,575 L1975,600"
                  stroke="#4F46E5"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.05"
                  style={{
                    animation: 'problemFlow 30s linear infinite'
                  }}
                />
                
                <path
                  d="M-50,320 L0,325 L10,310 L20,335 L30,320 L40,340 L50,315 L60,330 L70,320 L80,345 L90,310 L100,325 L110,320 L120,340 L130,315 L140,330 L150,320 L160,345 L170,310 L180,325 L190,320 L200,340"
                  stroke="#A855F7"
                  strokeWidth="0.4"
                  fill="none"
                  opacity="0.06"
                  style={{
                    animation: 'problemFlow 18s linear infinite'
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
            className="min-h-screen md:min-h-[100vh] flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
            style={{backgroundColor: '#1a1a1a'}}
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

          {/* Removed spacer */}

          {/* 3. Solution Section */}
          <section 
            id="solution" 
            className="min-h-screen md:min-h-[100vh] flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
            style={{backgroundColor: '#1a1a1a'}}
          >
            {/* High frequency EEG background for Solution section */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="solutionEegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#EC4899', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
                  </linearGradient>
                  <linearGradient id="solutionEegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                
                <path d="M0,300 L7,312 L11,288 L15,320 L19,285 L23,325 L27,280 L31,308 L35,295 L39,318 L43,285 L47,330 L51,275 L55,312 L59,295 L63,322 L67,280 L71,335 L75,270 L79,308 L83,288 L87,328 L91,275 L95,320 L99,290 L103,312 L107,285 L111,330 L115,270 L119,325 L123,280 L127,340 L131,265 L135,308 L139,295 L143,318 L147,285 L151,328 L155,275 L159,312 L163,288 L167,330 L171,270 L175,322 L179,285 L183,335 L187,260 L191,308 L195,295 L199,318 L203,280 L207,330 L211,275 L215,312 L219,288 L223,328 L227,270 L231,322 L235,285 L239,340 L243,265 L247,308 L251,295 L255,318 L259,285 L263,328 L267,275 L271,312 L275,288 L279,330 L283,270 L287,322 L291,285 L295,335 L299,260 L303,308 L307,295 L311,318 L315,280 L319,330"
                      stroke="url(#solutionEegGradient)" 
                      strokeWidth="1.4" 
                      fill="none" 
                      style={{
                        animation: 'solutionFlow 14s linear infinite',
                        strokeLinecap: 'round'
                      }} />
                
                <path d="M0,500 L9,515 L13,485 L17,525 L21,480 L25,530 L29,475 L33,510 L37,495 L41,520 L45,485 L49,535 L53,470 L57,515 L61,495 L65,525 L69,480 L73,540 L77,465 L81,510 L85,485 L89,535 L93,470 L97,525 L101,490 L105,515 L109,485 L113,535 L117,465 L121,530 L125,480 L129,545 L133,460 L137,510 L141,495 L145,520 L149,485 L153,535 L157,470 L161,515 L165,485 L169,535 L173,465 L177,525 L181,485 L185,540 L189,455 L193,510 L197,495 L201,520 L205,480 L209,535 L213,470 L217,515 L221,485 L225,535 L229,465 L233,525 L237,485 L241,545 L245,460 L249,510 L253,495 L257,520 L261,485 L265,535 L269,470 L273,515 L277,485 L281,535 L285,465 L289,525 L293,485 L297,540 L301,455 L305,510 L309,495 L313,520 L317,480 L321,535"
                      stroke="url(#solutionEegGradient2)" 
                      strokeWidth="1.1" 
                      fill="none" 
                      style={{
                        animation: 'solutionFlow 16s linear infinite reverse',
                        animationDelay: '3s',
                        strokeLinecap: 'round'
                      }} />
                
                <path d="M0,700 L6,718 L10,682 L14,728 L18,675 L22,735 L26,670 L30,715 L34,690 L38,725 L42,680 L46,740 L50,665 L54,718 L58,690 L62,730 L66,675 L70,745 L74,660 L78,715 L82,682 L86,738 L90,665 L94,728 L98,685 L102,718 L106,680 L110,740 L114,660 L118,735 L122,675 L126,750 L130,655 L134,715 L138,690 L142,725 L146,680 L150,738 L154,665 L158,718 L162,682 L166,740 L170,660 L174,730 L178,680 L182,745 L186,650 L190,715 L194,690 L198,725 L202,675 L206,740 L210,665 L214,718 L218,682 L222,738 L226,660 L230,730 L234,680 L238,750 L242,655 L246,715 L250,690 L254,725 L258,680 L262,738 L266,665 L270,718 L274,682 L278,740 L282,660 L286,730 L290,680 L294,745 L298,650 L302,715 L306,690 L310,725 L314,675 L318,740"
                      stroke="url(#solutionEegGradient)" 
                      strokeWidth="0.9" 
                      fill="none" 
                      style={{
                        animation: 'solutionFlow 20s linear infinite',
                        animationDelay: '5s',
                        strokeLinecap: 'round'
                      }} />
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
            className="min-h-screen md:min-h-[100vh] flex items-center justify-center py-8 md:py-4 relative overflow-hidden"
            style={{backgroundColor: '#1a1a1a'}}
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
              
            {/* High frequency EEG background for Edge section */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-18">
              <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="edgeEegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 0.8}} />
                    <stop offset="33%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
                    <stop offset="66%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0.8}} />
                  </linearGradient>
                  <linearGradient id="edgeEegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                
                <path d="M0,250 L8,265 L12,235 L16,275 L20,230 L24,280 L28,225 L32,260 L36,245 L40,270 L44,235 L48,285 L52,220 L56,265 L60,245 L64,275 L68,230 L72,290 L76,215 L80,260 L84,235 L88,285 L92,220 L96,275 L100,240 L104,265 L108,235 L112,285 L116,215 L120,280 L124,230 L128,295 L132,210 L136,260 L140,245 L144,270 L148,235 L152,285 L156,220 L160,265 L164,235 L168,285 L172,215 L176,275 L180,235 L184,290 L188,205 L192,260 L196,245 L200,270 L204,230 L208,285 L212,220 L216,265 L220,235 L224,285 L228,215 L232,275 L236,235 L240,295 L244,210 L248,260 L252,245 L256,270 L260,235 L264,285 L268,220 L272,265 L276,235 L280,285 L284,215 L288,275 L292,235 L296,290 L300,205 L304,260 L308,245 L312,270 L316,230 L320,285"
                      stroke="url(#edgeEegGradient)" 
                      strokeWidth="1.3" 
                      fill="none" 
                      style={{
                        animation: 'edgeFlow 10s linear infinite',
                        strokeLinecap: 'round'
                      }} />
                
                <path d="M0,450 L9,468 L13,432 L17,478 L21,425 L25,485 L29,420 L33,465 L37,440 L41,475 L45,430 L49,490 L53,415 L57,468 L61,440 L65,480 L69,425 L73,495 L77,410 L81,465 L85,432 L89,490 L93,415 L97,480 L101,435 L105,468 L109,430 L113,490 L117,410 L121,485 L125,425 L129,500 L133,405 L137,465 L141,440 L145,475 L149,430 L153,490 L157,415 L161,468 L165,432 L169,490 L173,410 L177,480 L181,430 L185,495 L189,400 L193,465 L197,440 L201,475 L205,425 L209,490 L213,415 L217,468 L221,432 L225,490 L229,410 L233,480 L237,430 L241,500 L245,405 L249,465 L253,440 L257,475 L261,430 L265,490 L269,415 L273,468 L277,432 L281,490 L285,410 L289,480 L293,430 L297,495 L301,400 L305,465 L309,440 L313,475 L317,425 L321,490"
                      stroke="url(#edgeEegGradient2)" 
                      strokeWidth="1.1" 
                      fill="none" 
                      style={{
                        animation: 'edgeFlow 13s linear infinite reverse',
                        animationDelay: '2s',
                        strokeLinecap: 'round'
                      }} />
                
                <path d="M0,650 L6,672 L10,628 L14,685 L18,620 L22,690 L26,615 L30,670 L34,635 L38,680 L42,625 L46,695 L50,610 L54,672 L58,635 L62,685 L66,620 L70,700 L74,605 L78,670 L82,628 L86,695 L90,610 L94,685 L98,630 L102,672 L106,625 L110,695 L114,605 L118,690 L122,620 L126,705 L130,600 L134,670 L138,635 L142,680 L146,625 L150,695 L154,610 L158,672 L162,628 L166,695 L170,605 L174,685 L178,625 L182,700 L186,595 L190,670 L194,635 L198,680 L202,620 L206,695 L210,610 L214,672 L218,628 L222,695 L226,605 L230,685 L234,625 L238,705 L242,600 L246,670 L250,635 L254,680 L258,625 L262,695 L266,610 L270,672 L274,628 L278,695 L282,605 L286,685 L290,625 L294,700 L298,595 L302,670 L306,635 L310,680 L314,620 L318,695"
                      stroke="url(#edgeEegGradient)" 
                      strokeWidth="0.9" 
                      fill="none" 
                      style={{
                        animation: 'edgeFlow 17s linear infinite',
                        animationDelay: '4s',
                        strokeLinecap: 'round'
                      }} />
                
                <path d="M0,850 L7,875 L11,825 L15,885 L19,815 L23,890 L27,810 L31,870 L35,830 L39,880 L43,820 L47,895 L51,805 L55,875 L59,830 L63,885 L67,815 L71,900 L75,800 L79,870 L83,825 L87,895 L91,805 L95,885 L99,825 L103,875 L107,820 L111,895 L115,800 L119,890 L123,815 L127,905 L131,795 L135,870 L139,830 L143,880 L147,820 L151,895 L155,805 L159,875 L163,825 L167,895 L171,800 L175,885 L179,820 L183,900 L187,790 L191,870 L195,830 L199,880 L203,815 L207,895 L211,805 L215,875 L219,825 L223,895 L227,800 L231,885 L235,820 L239,905 L243,795 L247,870 L251,830 L255,880 L259,820 L263,895 L267,805 L271,875 L275,825 L279,895 L283,800 L287,885 L291,820 L295,900 L299,790 L303,870 L307,830 L311,880 L315,815 L319,895"
                      stroke="url(#edgeEegGradient2)" 
                      strokeWidth="0.8" 
                      fill="none" 
                      style={{
                        animation: 'edgeFlow 22s linear infinite reverse',
                        animationDelay: '6s',
                        strokeLinecap: 'round'
                      }} />
              </svg>
            </div>

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
