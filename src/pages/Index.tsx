
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

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Problem
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#A855F7] mx-auto mb-16 animate-pulse" />
                
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
                  
                  <div className="bg-black/40 border border-[#7C3AED]/30 rounded-2xl p-8 animate-scale-in hover:scale-105 transition-all duration-300" style={{animationDelay: '0.6s'}}>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="text-[#6C63FF] text-3xl animate-pulse">⚠️</span>
                      Unsecured pipelines risk:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-[#7C3AED]/20 rounded-lg border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover-scale">
                        <span className="text-[#6C63FF] text-xl animate-pulse">🔓</span>
                        <span className="text-lg text-white/90">Data breaches that could expose neurological health information</span>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-[#9333EA]/20 rounded-lg border border-[#9333EA]/20 hover:border-[#9333EA]/40 transition-all duration-300 hover-scale">
                        <span className="text-[#9333EA] text-xl animate-pulse">⏸️</span>
                        <span className="text-lg text-white/90">Regulatory delays blocking clinical trials and market launches</span>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-[#4338CA]/20 rounded-lg border border-[#4338CA]/20 hover:border-[#4338CA]/40 transition-all duration-300 hover-scale">
                        <span className="text-[#4338CA] text-xl animate-pulse">📊</span>
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
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 1920 1080">
                <defs>
                  <linearGradient id="urgencyFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#4F46E5', stopOpacity: 0.9}} />
                  </linearGradient>
                  <linearGradient id="urgencyFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#7C3AED', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#6C63FF', stopOpacity: 1.0}} />
                    <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                
                {/* Realistic EEG urgent pulse patterns */}
                <path
                  d="M-50,280 L0,275 L15,295 L30,265 L45,290 L60,270 L75,300 L90,260 L105,285 L120,275 L135,305 L150,255 L165,280 L180,270 L195,300 L210,260 L225,285 L240,275 L255,305 L270,255 L285,280 L300,270 L315,300 L330,260 L345,285 L360,275 L375,305 L390,255 L405,280 L420,270 L435,300 L450,260 L465,285 L480,275 L495,305 L510,255 L525,280 L540,270 L555,300 L570,260 L585,285 L600,275 L615,305 L630,255 L645,280 L660,270 L675,300 L690,260 L705,285 L720,275 L735,305 L750,255 L765,280 L780,270 L795,300 L810,260 L825,285 L840,275 L855,305 L870,255 L885,280 L900,270 L915,300 L930,260 L945,285 L960,275 L975,305 L990,255 L1005,280 L1020,270 L1035,300 L1050,260 L1065,285 L1080,275 L1095,305 L1110,255 L1125,280 L1140,270 L1155,300 L1170,260 L1185,285 L1200,275 L1215,305 L1230,255 L1245,280 L1260,270 L1275,300 L1290,260 L1305,285 L1320,275 L1335,305 L1350,255 L1365,280 L1380,270 L1395,300 L1410,260 L1425,285 L1440,275 L1455,305 L1470,255 L1485,280 L1500,270 L1515,300 L1530,260 L1545,285 L1560,275 L1575,305 L1590,255 L1605,280 L1620,270 L1635,300 L1650,260 L1665,285 L1680,275 L1695,305 L1710,255 L1725,280 L1740,270 L1755,300 L1770,260 L1785,285 L1800,275 L1815,305 L1830,255 L1845,280 L1860,270 L1875,300 L1890,260 L1905,285 L1920,275 L1935,305 L1950,255 L1965,280 L1980,270"
                  stroke="url(#urgencyFlow1)"
                  strokeWidth="2"
                  fill="none"
                  style={{
                    animation: 'urgencyPulse 6s linear infinite'
                  }}
                />
                
                <path
                  d="M-50,480 L0,485 L20,465 L40,505 L60,475 L80,495 L100,455 L120,515 L140,485 L160,475 L180,520 L200,460 L220,490 L240,480 L260,525 L280,455 L300,485 L320,475 L340,520 L360,460 L380,490 L400,480 L420,525 L440,455 L460,485 L480,475 L500,520 L520,460 L540,490 L560,480 L580,525 L600,455 L620,485 L640,475 L660,520 L680,460 L700,490 L720,480 L740,525 L760,455 L780,485 L800,475 L820,520 L840,460 L860,490 L880,480 L900,525 L920,455 L940,485 L960,475 L980,520 L1000,460 L1020,490 L1040,480 L1060,525 L1080,455 L1100,485 L1120,475 L1140,520 L1160,460 L1180,490 L1200,480 L1220,525 L1240,455 L1260,485 L1280,475 L1300,520 L1320,460 L1340,490 L1360,480 L1380,525 L1400,455 L1420,485 L1440,475 L1460,520 L1480,460 L1500,490 L1520,480 L1540,525 L1560,455 L1580,485 L1600,475 L1620,520 L1640,460 L1660,490 L1680,480 L1700,525 L1720,455 L1740,485 L1760,475 L1780,520 L1800,460 L1820,490 L1840,480 L1860,525 L1880,455 L1900,485 L1920,475 L1940,520 L1960,460 L1980,490"
                  stroke="url(#urgencyFlow2)"
                  strokeWidth="1.5"
                  fill="none"
                  style={{
                    animation: 'urgencyPulse 8s linear infinite reverse'
                  }}
                />
                
                <path
                  d="M-50,680 L0,675 L12,695 L24,665 L36,690 L48,670 L60,700 L72,660 L84,685 L96,675 L108,705 L120,655 L132,680 L144,670 L156,700 L168,660 L180,685 L192,675 L204,705 L216,655 L228,680 L240,670 L252,700 L264,660 L276,685 L288,675 L300,705 L312,655 L324,680 L336,670 L348,700 L360,660 L372,685 L384,675 L396,705 L408,655 L420,680 L432,670 L444,700 L456,660 L468,685 L480,675 L492,705 L504,655 L516,680 L528,670 L540,700 L552,660 L564,685 L576,675 L588,705 L600,655 L612,680 L624,670 L636,700 L648,660 L660,685 L672,675 L684,705 L696,655 L708,680 L720,670 L732,700 L744,660 L756,685 L768,675 L780,705 L792,655 L804,680 L816,670 L828,700 L840,660 L852,685 L864,675 L876,705 L888,655 L900,680 L912,670 L924,700 L936,660 L948,685 L960,675 L972,705 L984,655 L996,680 L1008,670 L1020,700 L1032,660 L1044,685 L1056,675 L1068,705 L1080,655 L1092,680 L1104,670 L1116,700 L1128,660 L1140,685 L1152,675 L1164,705 L1176,655 L1188,680 L1200,670 L1212,700 L1224,660 L1236,685 L1248,675 L1260,705 L1272,655 L1284,680 L1296,670 L1308,700 L1320,660 L1332,685 L1344,675 L1356,705 L1368,655 L1380,680 L1392,670 L1404,700 L1416,660 L1428,685 L1440,675 L1452,705 L1464,655 L1476,680 L1488,670 L1500,700 L1512,660 L1524,685 L1536,675 L1548,705 L1560,655 L1572,680 L1584,670 L1596,700 L1608,660 L1620,685 L1632,675 L1644,705 L1656,655 L1668,680 L1680,670 L1692,700 L1704,660 L1716,685 L1728,675 L1740,705 L1752,655 L1764,680 L1776,670 L1788,700 L1800,660 L1812,685 L1824,675 L1836,705 L1848,655 L1860,680 L1872,670 L1884,700 L1896,660 L1908,685 L1920,675 L1932,705 L1944,655 L1956,680 L1968,670 L1980,700"
                  stroke="#9333EA"
                  strokeWidth="1"
                  fill="none"
                  style={{
                    animation: 'urgencyPulse 10s linear infinite'
                  }}
                />
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Urgency
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#4F46E5] to-[#A855F7] mx-auto mb-16 animate-pulse" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-[#7C3AED]/40 to-[#4338CA]/40 border-2 border-[#A855F7]/50 rounded-2xl p-8 animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl animate-pulse">📈</span>
                      <h3 className="text-2xl font-bold text-white">Market Explosion</h3>
                    </div>
                    <p className="text-xl text-white/90 leading-relaxed mb-4">
                      The market is scaling fast — <span className="text-[#6C63FF] font-semibold bg-[#4338CA]/30 px-2 py-1 rounded animate-pulse">3M+ EEG devices expected in North America by 2026</span>.
                    </p>
                    <div className="flex items-center gap-2 text-lg text-[#9333EA] font-semibold">
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
                      <div className="border-l-4 border-[#6C63FF] pl-6 bg-[#4F46E5]/10 p-4 rounded-r-lg hover:bg-[#4F46E5]/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">🎯</span>
                          <h4 className="text-lg font-semibold text-white">2025:</h4>
                        </div>
                        <p className="text-white/80">FDA final guidance on BCI cybersecurity; ISO/IEC 27701 adoption accelerates</p>
                      </div>
                      <div className="border-l-4 border-[#7C3AED] pl-6 bg-[#7C3AED]/10 p-4 rounded-r-lg hover:bg-[#7C3AED]/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">⚖️</span>
                          <h4 className="text-lg font-semibold text-white">2026:</h4>
                        </div>
                        <p className="text-white/80">HIPAA, GDPR, and CCPA enforcement tighten for neurodata</p>
                      </div>
                      <div className="border-l-4 border-[#A855F7] pl-6 bg-[#A855F7]/10 p-4 rounded-r-lg hover:bg-[#A855F7]/20 transition-all duration-300 hover-scale">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">🚫</span>
                          <h4 className="text-lg font-semibold text-white">2027+:</h4>
                        </div>
                        <p className="text-white/80">Potential new neurodata-specific protections may limit non-compliant market entry</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#A855F7]/20 border-2 border-[#9333EA]/50 rounded-2xl p-8 text-center animate-scale-in relative overflow-hidden" style={{animationDelay: '0.6s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/10 to-transparent animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl animate-pulse">🚨</span>
                        <span className="text-4xl animate-pulse">⏰</span>
                      </div>
                      <p className="text-xl text-white font-semibold">
                        Companies that wait risk being <span className="text-[#A855F7] bg-[#9333EA]/50 px-3 py-1 rounded-lg animate-pulse">locked out</span> of clinical and consumer markets.
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
                    <stop offset="0%" style={{stopColor: '#6C63FF', stopOpacity: 0.4}} />
                    <stop offset="50%" style={{stopColor: '#A855F7', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#6C63FF', stopOpacity: 0.4}} />
                  </linearGradient>
                  <linearGradient id="solutionFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#7C3AED', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#4338CA', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 0.3}} />
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
                <circle cx="400" cy="350" r="3" fill="#6C63FF" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="800" cy="450" r="3" fill="#A855F7" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1200" cy="550" r="3" fill="#4338CA" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>

            <div className="container relative z-10 text-center px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in">
                  The Solution
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#A855F7] mx-auto mb-16 animate-pulse" />
                
                <div className="space-y-8 text-left max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-[#7C3AED]/40 to-[#9333EA]/40 border border-[#A855F7]/30 rounded-2xl p-8 animate-scale-in hover:scale-105 transition-all duration-500" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl animate-pulse">🛡️</span>
                      <h3 className="text-2xl font-bold text-white">
                        XBrainer AI builds a neural intrusion prevention system that:
                      </h3>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                      <button className="bg-black/40 border border-[#6C63FF]/20 rounded-xl p-6 text-center hover:border-[#6C63FF]/60 hover:bg-[#6C63FF]/5 transition-all duration-300 hover-scale group">
                        <div className="w-16 h-16 bg-[#6C63FF]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6C63FF]/30 transition-all duration-300">
                          <span className="text-[#6C63FF] text-2xl group-hover:scale-110 transition-transform duration-300">🔒</span>
                        </div>
                        <h4 className="text-white font-bold mb-3 text-lg">Real-time Encryption</h4>
                        <p className="text-white/70">Encrypts and authenticates EEG streams in real time</p>
                      </button>
                      
                      <button className="bg-black/40 border border-[#A855F7]/20 rounded-xl p-6 text-center hover:border-[#A855F7]/60 hover:bg-[#A855F7]/5 transition-all duration-300 hover-scale group">
                        <div className="w-16 h-16 bg-[#A855F7]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#A855F7]/30 transition-all duration-300">
                          <span className="text-[#A855F7] text-2xl group-hover:scale-110 transition-transform duration-300">👤</span>
                        </div>
                        <h4 className="text-white font-bold mb-3 text-lg">Access Controls</h4>
                        <p className="text-white/70">Applies consent-based access controls for each data request</p>
                      </button>
                      
                      <button className="bg-black/40 border border-[#4338CA]/20 rounded-xl p-6 text-center hover:border-[#4338CA]/60 hover:bg-[#4338CA]/5 transition-all duration-300 hover-scale group">
                        <div className="w-16 h-16 bg-[#4338CA]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4338CA]/30 transition-all duration-300">
                          <span className="text-[#4338CA] text-2xl group-hover:scale-110 transition-transform duration-300">📝</span>
                        </div>
                        <h4 className="text-white font-bold mb-3 text-lg">Audit Trails</h4>
                        <p className="text-white/70">Maintains full audit trails to meet HIPAA, GDPR, and emerging BCI standards</p>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-[#4F46E5]/20 border-2 border-[#6C63FF]/50 rounded-2xl p-8 text-center animate-fade-in relative overflow-hidden" style={{animationDelay: '0.4s'}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 to-transparent animate-pulse"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="text-4xl animate-pulse">⚡</span>
                        <span className="text-4xl animate-pulse">🚀</span>
                      </div>
                      <p className="text-xl text-white leading-relaxed">
                        Our approach not only reduces security and compliance risk — it <span className="text-[#4F46E5] font-semibold bg-[#6C63FF]/30 px-3 py-1 rounded-lg animate-pulse">shortens time-to-market</span> for device makers and researchers.
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
                    <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 0.4}} />
                    <stop offset="50%" style={{stopColor: '#9333EA', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0.4}} />
                  </linearGradient>
                  <linearGradient id="edgeFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#7C3AED', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#6C63FF', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#7C3AED', stopOpacity: 0.3}} />
                  </linearGradient>
                  <radialGradient id="neuralNode" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 0}} />
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
                <g stroke="#A855F7" strokeWidth="0.5" opacity="0.3" filter="url(#glow)">
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
                <div className="w-24 h-1 bg-gradient-to-r from-[#A855F7] to-[#9333EA] mx-auto mb-16 animate-pulse" />
                
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  <button className="bg-gradient-to-br from-[#7C3AED]/40 to-[#9333EA]/40 border border-[#A855F7]/30 rounded-2xl p-8 hover:border-[#A855F7]/60 transition-all duration-500 hover-scale group animate-scale-in relative overflow-hidden" style={{animationDelay: '0.1s'}}>
                    {/* Futuristic holographic effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/5 via-transparent to-[#9333EA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                  
                  <button className="bg-gradient-to-br from-[#4338CA]/40 to-[#7C3AED]/40 border border-[#6C63FF]/30 rounded-2xl p-8 hover:border-[#6C63FF]/60 transition-all duration-500 hover-scale group animate-scale-in" style={{animationDelay: '0.2s'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">⚖️</span>
                      <h3 className="text-xl font-bold text-white">Standards-First Architecture</h3>
                    </div>
                    <p className="text-white/80 text-left group-hover:text-white/90 transition-colors duration-300">
                      HIPAA, GDPR, ISO 27001, FDA guidance compliance built into the core architecture.
                    </p>
                  </button>
                  
                  <button className="bg-gradient-to-br from-[#4F46E5]/40 to-[#4338CA]/40 border border-[#9333EA]/30 rounded-2xl p-8 hover:border-[#9333EA]/60 transition-all duration-500 hover-scale group animate-scale-in" style={{animationDelay: '0.3s'}}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🤖</span>
                      <h3 className="text-xl font-bold text-white">AI-Powered Detection</h3>
                    </div>
                    <p className="text-white/80 text-left group-hover:text-white/90 transition-colors duration-300">
                      Adaptive intrusion detection powered by AI models tuned for BCI signal patterns.
                    </p>
                  </button>
                  
                   <button className="bg-gradient-to-br from-[#6C63FF]/40 to-[#A855F7]/40 border border-[#7C3AED]/30 rounded-2xl p-8 hover:border-[#7C3AED]/60 transition-all duration-500 hover-scale group animate-scale-in" style={{animationDelay: '0.4s'}}>
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
