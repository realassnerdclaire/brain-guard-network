
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
            className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden"
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
                      <span className="text-[#6C63FF] text-xl md:text-xl animate-pulse"></span>
                      Unsecured pipelines risk:
                    </h3>
                    <div className="space-y-2 md:space-y-2">
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-2 bg-purple-200/20 rounded-lg border border-purple-200/20 hover:border-purple-200/40 transition-all duration-300 hover-scale">
                        <span className="text-purple-200 text-base md:text-base animate-pulse"></span>
                        <span className="text-sm md:text-sm text-white/90"><strong>Data breaches</strong> exposing neurological health information</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-2 bg-purple-400/20 rounded-lg border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover-scale">
                        <span className="text-purple-400 text-base md:text-base animate-pulse"></span>
                        <span className="text-sm md:text-sm text-white/90"><strong>Regulatory delays</strong> that stall trials and market approvals</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-2 bg-purple-600/20 rounded-lg border border-purple-600/20 hover:border-purple-600/40 transition-all duration-300 hover-scale">
                        <span className="text-purple-600 text-base md:text-base animate-pulse"></span>
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
            className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden"
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
                  <div className="bg-black/50 border border-gray-700/50 rounded-2xl p-4 md:p-4 animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-2">
                      <span className="text-2xl md:text-2xl animate-pulse"></span>
                      <h3 className="text-lg md:text-lg font-bold text-white">Market Explosion</h3>
                    </div>
                    <p className="text-base md:text-base text-white/90 leading-relaxed mb-2 md:mb-2">
                      The market is scaling fast — <span className="text-pink-300 font-semibold bg-pink-500/20 px-2 py-1 rounded animate-pulse">3M+ EEG devices expected in North America by 2026</span>.
                    </p>
                    <div className="flex items-center gap-2 text-sm md:text-sm text-pink-400 font-semibold">
                      <span className="animate-pulse"></span>
                      <span>More devices = more attack surfaces = higher compliance risk</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 border border-gray-700/50 rounded-2xl p-4 md:p-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                    <h3 className="text-lg md:text-lg font-bold text-white mb-3 md:mb-3 flex items-center gap-2 md:gap-2">
                      <span className="text-yellow-400 text-xl md:text-xl animate-pulse"></span>
                      Key regulatory milestones:
                    </h3>
                    <div className="space-y-3 md:space-y-2">
                      <div className="border-l-4 border-pink-200 pl-3 md:pl-4 bg-slate-800/80 p-2 md:p-2 rounded-r-lg hover:bg-slate-700/80 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-2 md:gap-2 mb-1 md:mb-1">
                          <span className="text-lg md:text-lg"></span>
                          <h4 className="text-sm md:text-sm font-semibold text-white">2025:</h4>
                        </div>
                        <p className="text-sm md:text-sm text-white/80">FDA final guidance on BCI cybersecurity; ISO/IEC 27701 adoption accelerates</p>
                      </div>
                      <div className="border-l-4 border-pink-400 pl-3 md:pl-4 bg-slate-800/80 p-2 md:p-2 rounded-r-lg hover:bg-slate-700/80 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-2 md:gap-2 mb-1 md:mb-1">
                          <span className="text-lg md:text-lg"></span>
                          <h4 className="text-sm md:text-sm font-semibold text-white">2026:</h4>
                        </div>
                        <p className="text-sm md:text-sm text-white/80">HIPAA, GDPR, and CCPA enforcement tighten for neurodata</p>
                      </div>
                      <div className="border-l-4 border-pink-600 pl-3 md:pl-4 bg-slate-800/80 p-2 md:p-2 rounded-r-lg hover:bg-slate-700/80 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-2 md:gap-2 mb-1 md:mb-1">
                          <span className="text-lg md:text-lg"></span>
                          <h4 className="text-sm md:text-sm font-semibold text-white">2027+:</h4>
                        </div>
                        <p className="text-sm md:text-sm text-white/80">Potential new neurodata-specific protections may limit non-compliant market entry</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 border border-pink-400/40 rounded-2xl p-4 md:p-4 text-center animate-scale-in relative overflow-hidden" style={{animationDelay: '0.6s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-2 md:gap-2 mb-2 md:mb-2">
                        <span className="text-2xl md:text-2xl animate-pulse"></span>
                        <span className="text-2xl md:text-2xl animate-pulse"></span>
                      </div>
                      <p className="text-base md:text-base text-white font-semibold">
                        Companies that wait risk being <span className="text-white bg-pink-500/30 px-2 md:px-2 py-1 rounded-lg animate-pulse sparkle">locked out</span> of clinical and consumer markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spacer between Urgency and Solution */}
          <div className="h-16 md:h-32 bg-background"></div>

          {/* 3. Solution Section */}
          <section 
            id="solution" 
            className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden"
          >
            {/* Enhanced futuristic background with neural network effects */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Neural grid overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/20 to-blue-950/20" />
              
              {/* Animated neural network nodes */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '0s'}} />
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '1s'}} />
                <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50" style={{animationDelay: '2s'}} />
                <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-400/50" style={{animationDelay: '1.5s'}} />
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 0.4}} />
                      <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>
                  <path d="M25% 25% L66% 33%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="4s" repeatCount="indefinite" />
                  </path>
                  <path d="M66% 33% L33% 66%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="4s" repeatCount="indefinite" begin="1s" />
                  </path>
                  <path d="M33% 66% L75% 66%" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="4s" repeatCount="indefinite" begin="2s" />
                  </path>
                </svg>
              </div>

              {/* Enhanced EEG patterns */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="solutionFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#06B6D4', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#3B82F6', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 0.8}} />
                  </linearGradient>
                  <linearGradient id="solutionFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 0.6}} />
                    <stop offset="50%" style={{stopColor: '#6366F1', stopOpacity: 0.9}} />
                    <stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity: 0.6}} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Stronger, more defined EEG patterns */}
                <path
                  d="M-50,380 L0,375 L20,390 L40,365 L60,385 L80,370 L120,395 L140,360 L180,390 L220,375 L260,400 L300,350 L340,385 L380,370 L420,395 L460,355 L500,380 L540,375 L580,390 L620,365 L660,385 L700,370 L740,395 L780,360 L820,390 L860,375 L900,400 L940,350 L980,385 L1020,370 L1060,395 L1100,355 L1140,380 L1180,375 L1220,390 L1260,365 L1300,385 L1340,370 L1380,395 L1420,360 L1460,390 L1500,375 L1540,400 L1580,350 L1620,385 L1660,370 L1700,395 L1740,355 L1780,380 L1820,375 L1860,390 L1900,365 L1940,385 L1980,370"
                  stroke="url(#solutionFlow1)"
                  strokeWidth="3"
                  fill="none"
                  opacity="1"
                  filter="url(#glow)"
                  style={{
                    animation: 'solutionFlow 8s linear infinite'
                  }}
                />
                
                <path
                  d="M-50,480 L0,485 L25,460 L50,495 L75,470 L100,490 L130,465 L160,500 L190,475 L220,485 L250,460 L280,495 L310,470 L340,490 L370,465 L400,500 L430,475 L460,485 L490,460 L520,495 L550,470 L580,490 L610,465 L640,500 L670,475 L700,485 L730,460 L760,495 L790,470 L820,490 L850,465 L880,500 L910,475 L940,485 L970,460 L1000,495 L1030,470 L1060,490 L1090,465 L1120,500 L1150,475 L1180,485 L1210,460 L1240,495 L1270,470 L1300,490 L1330,465 L1360,500 L1390,475 L1420,485 L1450,460 L1480,495 L1510,470 L1540,490 L1570,465 L1600,500 L1630,475 L1660,485 L1690,460 L1720,495 L1750,470 L1780,490 L1810,465 L1840,500 L1870,475 L1900,485 L1930,460 L1960,495 L1990,470"
                  stroke="url(#solutionFlow2)"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.9"
                  filter="url(#glow)"
                  style={{
                    animation: 'solutionFlow 10s linear infinite reverse'
                  }}
                />
                
                {/* Digital grid overlay */}
                <defs>
                  <pattern id="digitalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#digitalGrid)" />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 md:mb-4 animate-fade-in">
                  The Solution
                </h2>
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] mx-auto mb-8 md:mb-6 animate-pulse" />
                
                <div className="space-y-8 md:space-y-12 text-center max-w-6xl mx-auto">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
                    XBrainer AI secures brain data in real time, from EEG and BCI devices to end users.
                  </p>
                  
                  {/* Feature Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {/* Real-time Encryption Card */}
                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl mb-4 mx-auto group-hover:bg-purple-500/30 transition-colors">
                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H8m4-9V3m0 0v2m0-2h2m-2 0H8m4 9v2m0 0v2m0-2h2m-2 0H8" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">Real-time Encryption</h3>
                      <p className="text-white/80 text-sm leading-relaxed">Encryption at the source prevents interception and ensures neural data stays protected from device to destination.</p>
                    </div>
                    
                    {/* Instant Access Controls Card */}
                    <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-700/20 border border-indigo-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-center w-16 h-16 bg-indigo-500/20 rounded-2xl mb-4 mx-auto group-hover:bg-indigo-500/30 transition-colors">
                        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">Instant Access Controls</h3>
                      <p className="text-white/80 text-sm leading-relaxed">Give or revoke permissions instantly with granular control over who can access neural data and when.</p>
                    </div>
                    
                    {/* Permanent Audit Logs Card */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 border border-blue-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">Permanent Audit Logs</h3>
                      <p className="text-white/80 text-sm leading-relaxed">Record every data interaction for compliance with HIPAA, GDPR, and upcoming neurotech regulations.</p>
                    </div>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mt-12">
                    We help device makers, researchers, and healthcare providers deploy neurotechnology safely while maintaining data integrity and privacy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Our Edge Section */}
          <section 
            id="edge" 
            className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden"
          >
            {/* Large cosmic nebula in bottom left corner */}
            <div className="absolute bottom-8 left-8">
              <div 
                className="w-80 h-80 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/574042c4-4d23-497c-8222-72b20a878a2f.png')`,
                  filter: 'saturate(1.5) brightness(1.4) contrast(1.2)',
                  opacity: '0.8',
                  animation: 'cosmicGlow 4s ease-in-out infinite alternate',
                  mixBlendMode: 'screen',
                  maskImage: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
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
                
                {/* Edge Feature Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                  {/* Patent-Pending Security Pipeline */}
                  <div className="bg-gradient-to-br from-blue-900/40 to-cyan-700/20 border border-blue-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-3xl mb-6 group-hover:bg-blue-500/30 transition-colors">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Patent-Pending Security Pipeline</h3>
                      <p className="text-white/80 text-base leading-relaxed">Real-time encryption and integrity checks for neural data ensuring maximum protection throughout the entire data lifecycle.</p>
                    </div>
                  </div>
                  
                  {/* Regulatory-First Design */}
                  <div className="bg-gradient-to-br from-green-900/40 to-emerald-700/20 border border-green-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-3xl mb-6 group-hover:bg-green-500/30 transition-colors">
                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Regulatory-First Design</h3>
                      <p className="text-white/80 text-base leading-relaxed">HIPAA, GDPR, ISO 27001, FDA-ready architecture built from the ground up with compliance at its core.</p>
                    </div>
                  </div>
                  
                  {/* AI-Driven Threat Detection */}
                  <div className="bg-gradient-to-br from-purple-900/40 to-pink-700/20 border border-purple-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-3xl mb-6 group-hover:bg-purple-500/30 transition-colors">
                        <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">AI-Driven Threat Detection</h3>
                      <p className="text-white/80 text-base leading-relaxed">Advanced machine learning specifically tuned for BCI signal anomalies and neural data security threats.</p>
                    </div>
                  </div>
                  
                  {/* Seamless Integration */}
                  <div className="bg-gradient-to-br from-orange-900/40 to-red-700/20 border border-orange-400/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-3xl mb-6 group-hover:bg-orange-500/30 transition-colors">
                        <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
                      <p className="text-white/80 text-base leading-relaxed">Comprehensive SDKs and APIs designed for effortless integration with devices, research platforms, and clinical systems.</p>
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
