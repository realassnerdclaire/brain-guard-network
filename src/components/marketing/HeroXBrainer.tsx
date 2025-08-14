import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";
import { animateLetters, startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const HeroXBrainer = () => {
  console.log("🎨 HeroXBrainer component rendering with color animation!");
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center sm:justify-start" style={{backgroundColor: '#2d2d2d'}}>
      {/* XBrainer AI logo and company name - responsive positioning */}
      <div className="absolute top-2 left-2 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20 flex items-center gap-1 sm:gap-4 lg:gap-6">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-10 sm:h-12 lg:h-16 w-auto mix-blend-screen opacity-90 rounded-lg sm:rounded-2xl" 
          style={{
            filter: 'blur(0.1px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="flex flex-col">
          <span className="text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-tight" style={{color: '#ffffff'}}>
            XBrainer AI
          </span>
          <span className="text-sm sm:text-base lg:text-xl font-medium" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
            Securing Neural Data in Real Time
          </span>
        </div>
      </div>
      
      
      {/* Removed EEG animations from hero - keeping it clean */}

      {/* Enhanced futuristic neon brain - foreground layer */}
      <div className="absolute right-0 sm:right-0 top-1/3 sm:top-1/2 -translate-y-4 w-3/5 sm:w-2/5 h-[50vh] sm:h-[65vh] z-10">
        <img
          src={futuristicBrain}
          alt="Futuristic translucent brain with neural pathways"
          className="w-full h-full object-cover opacity-35 sm:opacity-40"
          loading="eager"
          decoding="async"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.15)) drop-shadow(0 0 50px rgba(168, 85, 247, 0.12)) brightness(0.9) contrast(1.0) blur(1px)',
            maskImage: 'radial-gradient(ellipse 150% 140% at center, rgba(0,0,0,0.9) 5%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.02) 85%, rgba(0,0,0,0.01) 95%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 150% 140% at center, rgba(0,0,0,0.9) 5%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.02) 85%, rgba(0,0,0,0.01) 95%, rgba(0,0,0,0) 100%)',
            animation: 'float 8s ease-in-out infinite',
            mixBlendMode: 'soft-light'
          }}
        />
      </div>
      
      <div className="container relative z-10 h-full flex items-start sm:items-center justify-start pt-48 sm:py-0 px-3 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl relative z-15 mt-0 sm:mt-16 lg:mt-0">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl leading-tight font-normal mb-2 sm:mb-8 lg:mb-12" id="hero-title">
            <span className="inline-block" style={{animation: 'color-cycle 5s ease-in-out infinite'}}>Secure Neural Data Before It's Too Late</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/80 max-w-xs lg:max-w-xl xl:max-w-2xl leading-tight mb-3 sm:mb-12 lg:mb-16 mt-8">
            As brain-computer devices become more common, the risk of brain data being misused is growing. XBrainer AI makes tools to keep this data safe.
          </p>
        </div>
        
        {/* Action buttons - brought significantly up */}
        <div className="absolute bottom-52 sm:bottom-40 lg:bottom-48 xl:bottom-52 right-3 sm:right-8 lg:right-16 xl:right-20 flex flex-col gap-1 sm:gap-4 lg:gap-6">
          <button 
            className="rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-3 sm:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-4 lg:py-5 touch-manipulation text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300"
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
            onClick={() => {
              const ctaSection = document.getElementById('cta');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            JOIN THE WAITLIST
          </button>
          <button 
            className="rounded-full border border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/10 px-3 sm:px-8 lg:px-10 xl:px-12 py-1.5 sm:py-4 lg:py-5 touch-manipulation text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300"
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
            onClick={() => {
              const demoSection = document.getElementById('demo');
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            SEE THE DEMO
          </button>
        </div>
      </div>
      
      {/* Interactive navigation labels - brought significantly up */}
      <div className="absolute bottom-32 sm:bottom-20 lg:bottom-24 xl:bottom-28 left-0 right-0 z-[9999] pointer-events-none">
        <div className="container px-2 sm:px-8 lg:px-12 xl:px-16 pointer-events-none">
          <div className="flex items-center justify-center gap-1 sm:gap-6 lg:gap-10 xl:gap-16 flex-wrap pointer-events-auto">
            <button 
              id="problem-btn"
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded z-[99999] relative"
              style={{
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 99999,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                console.log('🖱️ PROBLEM HOVERED - Starting letter animation');
                
                const btn = e.currentTarget;
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['P', 'R', 'O', 'B', 'L', 'E', 'M'];
                
                // Create letter spans for hover animation
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="hover-letter-${i}" style="display: inline-block; transition: color 0.2s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                ).join('');
                
                // Fast hover animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`hover-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 20 + colorIndex * 80);
                  });
                });
                
                // Reset after hover animation
                setTimeout(() => {
                  btn.innerHTML = 'PROBLEM';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 20 + colors.length * 80 + 100);
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                // Ensure it's back to normal
                btn.innerHTML = 'PROBLEM';
                btn.style.color = 'white !important';
                btn.style.setProperty('color', 'white', 'important');
              }}
              onClick={() => {
                const btn = document.getElementById('problem-btn');
                if (!btn) return;
                
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['P', 'R', 'O', 'B', 'L', 'E', 'M'];
                
                // Create letter spans
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="problem-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter}</span>`
                ).join('');
                
                // Very fast animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`problem-click-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 10 + colorIndex * 30); // Very fast timing
                  });
                });
                
                // Reset and navigate
                setTimeout(() => {
                  btn.innerHTML = 'PROBLEM';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                  
                  // Navigate to problem section
                  const problemSection = document.getElementById('problem');
                  if (problemSection) {
                    problemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, letters.length * 10 + colors.length * 30 + 50);
              }}
            >
              PROBLEM
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              id="urgency-btn"
              onClick={() => {
                console.log('🚀 URGENCY CLICKED - Starting letter animation');
                
                const btn = document.getElementById('urgency-btn');
                if (!btn) return;
                
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['U', 'R', 'G', 'E', 'N', 'C', 'Y'];
                
                // Create letter spans
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="urgency-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter}</span>`
                ).join('');
                
                // Same speed as PROBLEM button
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`urgency-click-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM
                  });
                });
                
                // Reset and navigate
                setTimeout(() => {
                  btn.innerHTML = 'URGENCY';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                  
                  // Navigate to urgency section
                  const urgencySection = document.getElementById('urgency');
                  if (urgencySection) {
                    urgencySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, letters.length * 10 + colors.length * 30 + 50);
              }}
              onMouseEnter={(e) => {
                console.log('🖱️ URGENCY HOVERED');
                
                const btn = e.currentTarget;
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['U', 'R', 'G', 'E', 'N', 'C', 'Y'];
                
                // Create letter spans for hover animation
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="urgency-hover-letter-${i}" style="display: inline-block; transition: color 0.2s ease; background: none !important; border: none !important;">${letter}</span>`
                ).join('');
                
                // Fast hover animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`urgency-hover-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 15 + colorIndex * 40); // Faster hover
                  });
                });
                
                // Reset after hover animation
                setTimeout(() => {
                  btn.innerHTML = 'URGENCY';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 15 + colors.length * 40 + 50);
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.innerHTML = 'URGENCY';
                btn.style.color = 'white !important';
                btn.style.setProperty('color', 'white', 'important');
              }}
            >
              URGENCY
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none hidden sm:block bg-transparent border-none p-1 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              id="tech-adv-btn"
              onClick={(e) => {
                console.log('🚀 SOLUTION CLICKED - Starting letter animation');
                const btn = e.currentTarget;
                
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['S', 'O', 'L', 'U', 'T', 'I', 'O', 'N'];
                
                // Create letter spans
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="solution-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter}</span>`
                ).join('');
                
                // Same speed as PROBLEM button
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`solution-click-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM
                  });
                });
                
                // Reset and navigate
                setTimeout(() => {
                  btn.innerHTML = 'SOLUTION';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                  
                  // Navigate to solution section
                  const solutionSection = document.getElementById('solution');
                  if (solutionSection) {
                    solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, letters.length * 10 + colors.length * 30 + 50);
              }}
              onMouseEnter={(e) => {
                console.log('🖱️ SOLUTION HOVERED - Starting letter animation');
                
                const btn = e.currentTarget;
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['S', 'O', 'L', 'U', 'T', 'I', 'O', 'N'];
                
                // Create letter spans for hover animation
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="solution-hover-letter-${i}" style="display: inline-block; transition: color 0.2s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                ).join('');
                
                // Fast hover animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`solution-hover-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 20 + colorIndex * 80);
                  });
                });
                
                // Reset after hover animation
                setTimeout(() => {
                  btn.innerHTML = 'SOLUTION';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 20 + colors.length * 80 + 100);
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                // Ensure it's back to normal
                btn.innerHTML = 'SOLUTION';
                btn.style.color = 'white !important';
                btn.style.setProperty('color', 'white', 'important');
              }}
              onTouchStart={() => {
                console.log('📱 TECHNICAL ADVANTAGE TOUCHED - Starting letter animation');
                
                const btn = document.getElementById('tech-adv-btn');
                if (!btn) return;
                
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['T', 'E', 'C', 'H', 'N', 'I', 'C', 'A', 'L', ' ', 'A', 'D', 'V', 'A', 'N', 'T', 'A', 'G', 'E'];
                
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="tech-adv-letter-touch-${i}" style="display: inline-block; transition: color 0.3s ease;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                ).join('');
                
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`tech-adv-letter-touch-${letterIndex}`);
                      if (letterSpan && letter !== ' ') {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 30 + colorIndex * 100); // Much faster timing
                  });
                });
                
                setTimeout(() => {
                  btn.innerHTML = 'SOLUTION';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 30 + colors.length * 100 + 200); // Much faster timing
              }}
            >
              SOLUTION
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none sm:hidden bg-transparent border-none p-0 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={(e) => {
                console.log('🚀 SOLUTION (mobile) CLICKED - Starting letter animation');
                
                const btn = e.currentTarget;
                
                // Same color sequence and animation as PROBLEM
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['S', 'O', 'L', 'U', 'T', 'I', 'O', 'N'];
                
                // Create letter spans - PREVENT ALL inherited styles
                // Create letter spans - EXACTLY like PROBLEM button
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="solution-mobile-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter}</span>`
                ).join('');
                
                // EXACT same animation as PROBLEM button
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`solution-mobile-click-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM
                  });
                });
                
                // Reset and navigate
                setTimeout(() => {
                  btn.innerHTML = 'SOLUTION';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                  
                  // Navigate to solution section
                  const solutionSection = document.getElementById('solution');
                  if (solutionSection) {
                    solutionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, letters.length * 10 + colors.length * 30 + 50);
              }}
              id="tech-adv-mobile-btn"
              onMouseEnter={(e) => {
                console.log('🖱️ SOLUTION MOBILE HOVERED - Starting letter animation');
                
                const btn = e.currentTarget;
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['S', 'O', 'L', 'U', 'T', 'I', 'O', 'N'];
                
                // Create letter spans for hover animation
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="solution-mobile-hover-letter-${i}" style="display: inline-block; transition: color 0.2s ease; background: none !important; border: none !important;">${letter}</span>`
                ).join('');
                
                // Fast hover animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`solution-mobile-hover-letter-${letterIndex}`);
                      if (letterSpan) {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 20 + colorIndex * 80);
                  });
                });
                
                // Reset after hover animation
                setTimeout(() => {
                  btn.innerHTML = 'SOLUTION';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 20 + colors.length * 80 + 100);
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.innerHTML = 'SOLUTION';
                btn.style.color = 'white !important';
                btn.style.setProperty('color', 'white', 'important');
              }}
            >
              SOLUTION
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none hidden sm:block bg-transparent border-none p-1 sm:p-3 lg:p-4 xl:p-5 hover:bg-white/10 rounded"
              onClick={(e) => {
                console.log('🚀 OUR EDGE CLICKED - Starting letter animation');
                const btn = e.currentTarget;
                
                // Same color sequence and animation as PROBLEM
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['O', 'U', 'R', ' ', 'E', 'D', 'G', 'E'];
                
                // Create letter spans
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="compliance-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                ).join('');
                
                // Same speed as PROBLEM button
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`compliance-click-letter-${letterIndex}`);
                      if (letterSpan && letter !== ' ') {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM
                  });
                });
                
                // Reset and navigate
                setTimeout(() => {
                  btn.innerHTML = 'OUR EDGE';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                  
                  // Navigate to edge section
                  const edgeSection = document.getElementById('edge');
                  if (edgeSection) {
                    edgeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, letters.length * 10 + colors.length * 30 + 50);
              }}
              id="compliance-btn"
              onMouseEnter={(e) => {
                console.log('🖱️ OUR EDGE HOVERED - Starting letter animation');
                
                const btn = e.currentTarget;
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['O', 'U', 'R', ' ', 'E', 'D', 'G', 'E'];
                
                // Create letter spans for hover animation
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="edge-hover-letter-${i}" style="display: inline-block; transition: color 0.2s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                ).join('');
                
                // Fast hover animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`edge-hover-letter-${letterIndex}`);
                      if (letterSpan && letter !== ' ') {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 20 + colorIndex * 80);
                  });
                });
                
                // Reset after hover animation
                setTimeout(() => {
                  btn.innerHTML = 'OUR EDGE';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 20 + colors.length * 80 + 100);
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.innerHTML = 'OUR EDGE';
                btn.style.color = 'white !important';
                btn.style.setProperty('color', 'white', 'important');
              }}
            >
              OUR EDGE
            </button>
            <button 
              className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 select-none sm:hidden bg-transparent border-none p-1 sm:p-3 lg:p-4 hover:bg-white/10 rounded"
              onClick={(e) => {
                console.log('🚀 OUR EDGE (mobile) CLICKED - Starting letter animation');
                
                const btn = e.currentTarget;
                
                // Same color sequence and animation as PROBLEM
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['O', 'U', 'R', ' ', 'E', 'D', 'G', 'E'];
                
                // Create letter spans - EXACTLY like PROBLEM button  
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="edge-mobile-click-letter-${i}" style="display: inline-block; transition: color 0.1s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                ).join('');
                
                // EXACT same animation as PROBLEM button
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`edge-mobile-click-letter-${letterIndex}`);
                      if (letterSpan && letter !== ' ') {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 10 + colorIndex * 30); // Same timing as PROBLEM
                  });
                });
                
                // Reset and navigate
                setTimeout(() => {
                  btn.innerHTML = 'OUR EDGE';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                  
                  // Navigate to edge section
                  const edgeSection = document.getElementById('edge');
                  if (edgeSection) {
                    edgeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, letters.length * 10 + colors.length * 30 + 50);
              }}
              id="compliance-mobile-btn"
              onMouseEnter={(e) => {
                console.log('🖱️ OUR EDGE MOBILE HOVERED - Starting letter animation');
                
                const btn = e.currentTarget;
                const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                const letters = ['O', 'U', 'R', ' ', 'E', 'D', 'G', 'E'];
                
                // Create letter spans for hover animation
                btn.innerHTML = letters.map((letter, i) => 
                  `<span id="edge-mobile-hover-letter-${i}" style="display: inline-block; transition: color 0.2s ease; background: none !important; border: none !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                ).join('');
                
                // Fast hover animation
                letters.forEach((letter, letterIndex) => {
                  colors.forEach((color, colorIndex) => {
                    setTimeout(() => {
                      const letterSpan = document.getElementById(`edge-mobile-hover-letter-${letterIndex}`);
                      if (letterSpan && letter !== ' ') {
                        letterSpan.style.color = color;
                      }
                    }, letterIndex * 20 + colorIndex * 80);
                  });
                });
                
                // Reset after hover animation
                setTimeout(() => {
                  btn.innerHTML = 'OUR EDGE';
                  btn.style.color = 'white !important';
                  btn.style.setProperty('color', 'white', 'important');
                }, letters.length * 20 + colors.length * 80 + 100);
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.innerHTML = 'OUR EDGE';
                btn.style.color = 'white !important';
                btn.style.setProperty('color', 'white', 'important');
              }}
            >
              OUR EDGE
            </button>
          </div>
        </div>
      </div>
      
      {/* Removed bottom fade */}
    </section>
  );
};

export default HeroXBrainer;
