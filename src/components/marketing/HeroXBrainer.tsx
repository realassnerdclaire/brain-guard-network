import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";
import { animateLetters, startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const HeroXBrainer = () => {
  console.log("🎨 HeroXBrainer component rendering with color animation!");
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center sm:justify-start" style={{backgroundColor: '#1a1a1a'}}>
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
      
      
      {/* ULTRA VISIBLE EEG graphs - absolute front layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-50" style={{opacity: 1}}>
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ultraHeroEeg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#FF1493', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#00BFFF', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#9932CC', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="ultraHeroEeg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#9932CC', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#FF1493', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#00BFFF', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="ultraHeroEeg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#00BFFF', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#9932CC', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#FF1493', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* SUPER FAST EEG Line 1 - Top area */}
          <path d="M0,50 L10,80 L20,20 L30,110 L40,10 L50,120 L60,5 L70,90 L80,30 L90,100 L100,20 L110,130 L120,0 L130,80 L140,30 L150,110 L160,10 L170,140 L180,0 L190,90 L200,20 L210,120 L220,5 L230,110 L240,30 L250,100 L260,20 L270,130 L280,0 L290,140 L300,10 L310,90 L320,30 L330,120 L340,5 L350,110 L360,20 L370,130 L380,0 L390,100 L400,30 L410,140"
            stroke="url(#ultraHeroEeg1)" 
            strokeWidth="8" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.5s linear infinite',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 2 - Upper middle */}
          <path d="M0,150 L8,185 L16,115 L24,200 L32,100 L40,220 L48,90 L56,175 L64,130 L72,190 L80,115 L88,210 L96,85 L104,185 L112,130 L120,200 L128,100 L136,230 L144,85 L152,175 L160,115 L168,220 L176,90 L184,200 L192,130 L200,190 L208,115 L216,210 L224,85 L232,230 L240,100 L248,175 L256,130 L264,220 L272,90 L280,200 L288,115 L296,230 L304,85 L312,175 L320,130 L328,210 L336,90 L344,200 L352,115 L360,230 L368,85 L376,190 L384,130 L392,220 L400,90 L408,230"
            stroke="url(#ultraHeroEeg2)" 
            strokeWidth="7.5" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.4s linear infinite reverse',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 3 - Middle */}
          <path d="M0,280 L6,320 L12,240 L18,340 L24,220 L30,360 L36,200 L42,300 L48,260 L54,320 L60,240 L66,370 L72,210 L78,320 L84,260 L90,340 L96,230 L102,380 L108,200 L114,300 L120,240 L126,360 L132,210 L138,340 L144,270 L150,320 L156,240 L162,370 L168,200 L174,380 L180,220 L186,300 L192,260 L198,320 L204,230 L210,380 L216,200 L222,340 L228,240 L234,360 L240,210 L246,320 L252,260 L258,380 L264,220 L270,300 L276,240 L282,370 L288,200 L294,340 L300,260 L306,320 L312,230 L318,380 L324,200 L330,360 L336,240 L342,300 L348,260 L354,380"
            stroke="url(#ultraHeroEeg3)" 
            strokeWidth="7" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.6s linear infinite',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 4 - Lower middle */}
          <path d="M0,420 L5,465 L10,375 L15,485 L20,355 L25,505 L30,335 L35,445 L40,395 L45,465 L50,375 L55,515 L60,345 L65,465 L70,395 L75,485 L80,365 L85,525 L90,335 L95,445 L100,375 L105,505 L110,345 L115,485 L120,405 L125,465 L130,375 L135,515 L140,335 L145,525 L150,355 L155,445 L160,395 L165,465 L170,365 L175,525 L180,335 L185,485 L190,375 L195,505 L200,345 L205,465 L210,395 L215,525 L220,355 L225,445 L230,375 L235,515 L240,345 L245,485 L250,395 L255,465 L260,365 L265,525 L270,335 L275,505 L280,375 L285,445 L290,395 L295,525"
            stroke="url(#ultraHeroEeg1)" 
            strokeWidth="6.5" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.3s linear infinite reverse',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 5 - Lower area */}
          <path d="M0,560 L4,605 L8,515 L12,625 L16,495 L20,645 L24,475 L28,585 L32,535 L36,605 L40,515 L44,655 L48,485 L52,605 L56,535 L60,625 L64,505 L68,665 L72,475 L76,585 L80,515 L84,645 L88,485 L92,625 L96,545 L100,605 L104,515 L108,655 L112,475 L116,665 L120,495 L124,585 L128,535 L132,605 L136,505 L140,665 L144,475 L148,625 L152,515 L156,645 L160,485 L164,605 L168,535 L172,665 L176,495 L180,585 L184,515 L188,655 L192,485 L196,625 L200,535 L204,605 L208,505 L212,665 L216,475 L220,645 L224,515 L228,585 L232,535 L236,665"
            stroke="url(#ultraHeroEeg2)" 
            strokeWidth="6" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.7s linear infinite',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 6 - Bottom area */}
          <path d="M0,700 L3,750 L6,650 L9,770 L12,630 L15,790 L18,610 L21,730 L24,670 L27,750 L30,650 L33,800 L36,620 L39,750 L42,670 L45,770 L48,640 L51,810 L54,610 L57,730 L60,650 L63,790 L66,620 L69,770 L72,680 L75,750 L78,650 L81,800 L84,610 L87,810 L90,630 L93,730 L96,670 L99,750 L102,640 L105,810 L108,610 L111,770 L114,650 L117,790 L120,620 L123,750 L126,670 L129,810 L132,630 L135,730 L138,650 L141,800 L144,620 L147,770 L150,670 L153,750 L156,640 L159,810"
            stroke="url(#ultraHeroEeg3)" 
            strokeWidth="5.5" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.4s linear infinite reverse',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 7 - Additional top layer */}
          <path d="M0,840 L2,895 L4,785 L6,915 L8,765 L10,935 L12,745 L14,875 L16,805 L18,895 L20,785 L22,945 L24,755 L26,895 L28,805 L30,915 L32,775 L34,955 L36,745 L38,875 L40,785 L42,935 L44,755 L46,915 L48,815 L50,895 L52,785 L54,945 L56,745 L58,955 L60,765 L62,875 L64,805 L66,895 L68,775 L70,955 L72,745 L74,915 L76,785 L78,935 L80,755 L82,895 L84,805 L86,955 L88,765 L90,875 L92,785 L94,945 L96,755 L98,915 L100,805 L102,895 L104,775 L106,955"
            stroke="url(#ultraHeroEeg1)" 
            strokeWidth="5" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.2s linear infinite',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
          
          {/* SUPER FAST EEG Line 8 - Final ultra fast layer */}
          <path d="M0,980 L1,1035 L2,925 L3,1055 L4,905 L5,1075 L6,885 L7,1015 L8,945 L9,1035 L10,925 L11,1085 L12,895 L13,1035 L14,945 L15,1055 L16,915 L17,1095 L18,885 L19,1015 L20,925 L21,1075 L22,895 L23,1055 L24,955 L25,1035 L26,925 L27,1085 L28,885 L29,1095 L30,905 L31,1015 L32,945 L33,1035 L34,915 L35,1095 L36,885 L37,1055 L38,925 L39,1075 L40,895 L41,1035 L42,945 L43,1095 L44,905 L45,1015 L46,925 L47,1085 L48,895 L49,1055 L50,945 L51,1035 L52,915 L53,1095"
            stroke="url(#ultraHeroEeg2)" 
            strokeWidth="4.5" 
            fill="none" 
            style={{
              animation: 'lightning-eeg 0.1s linear infinite reverse',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)',
            }} />
        </svg>
      </div>

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
