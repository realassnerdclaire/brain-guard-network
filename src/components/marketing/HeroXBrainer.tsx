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
      
      
      {/* MASSIVE EEG graphs for first landing page - very top */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-95">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="heroEegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
              <stop offset="33%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
              <stop offset="66%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="heroEegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="heroEegGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
              <stop offset="33%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
              <stop offset="66%" style={{stopColor: '#EC4899', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* First EEG line - super fast movement */}
          <path d="M0,80 L5,95 L8,65 L12,105 L15,60 L18,110 L22,55 L25,90 L28,75 L32,100 L35,65 L38,115 L42,50 L45,95 L48,75 L52,105 L55,60 L58,120 L62,45 L65,90 L68,65 L72,115 L75,50 L78,105 L82,70 L85,95 L88,65 L92,115 L95,45 L98,110 L102,60 L105,125 L108,40 L112,90 L115,75 L118,100 L122,65 L125,118 L128,50 L132,95 L135,65 L138,115 L142,45 L145,105 L148,70 L152,120 L155,40 L158,90 L162,65 L165,105 L168,60 L172,115 L175,50 L178,95 L182,65 L185,118 L188,45 L192,100 L195,75 L198,110 L202,55 L205,120 L208,50 L212,95 L215,65 L218,115 L222,50 L225,105 L228,70 L232,125 L235,40 L238,90 L242,75 L245,100 L248,65 L252,118 L255,50 L258,95 L262,65 L265,115 L268,45 L272,105 L275,70 L278,120 L282,40 L285,90 L288,65 L292,105 L295,60 L298,115 L302,50 L305,95 L308,65 L312,118 L315,45 L318,100 L322,75 L325,110 L328,55 L332,120"
                stroke="url(#heroEegGradient)" 
                strokeWidth="5.5" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 1.5s ease-in-out infinite',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Second EEG line - ultra fast */}
          <path d="M0,140 L4,158 L7,122 L11,168 L14,115 L17,175 L21,110 L24,155 L27,135 L31,165 L34,125 L37,180 L41,105 L44,158 L47,135 L51,170 L54,120 L57,185 L61,100 L64,155 L67,122 L71,178 L74,105 L77,170 L81,130 L84,158 L87,125 L91,180 L94,100 L97,175 L101,115 L104,190 L107,95 L111,155 L114,135 L117,165 L121,125 L124,183 L127,105 L131,158 L134,122 L137,180 L141,100 L144,170 L147,130 L151,190 L154,95 L157,155 L161,135 L164,165 L167,120 L171,185 L174,105 L177,158 L181,122 L184,183 L187,100 L191,170 L194,130 L197,175 L201,115 L204,190 L207,105 L211,158 L214,122 L217,180 L221,105 L224,170 L227,130 L231,195 L234,90 L237,155 L241,135 L244,165 L247,125 L251,183 L254,105 L257,158 L261,122 L264,180 L267,100 L271,170 L274,130 L277,190 L281,95 L284,155 L287,135 L291,165 L294,120 L297,185 L301,105 L304,158 L307,122 L311,183 L314,100 L317,170 L321,130 L324,175 L327,115 L331,190"
                stroke="url(#heroEegGradient2)" 
                strokeWidth="5.2" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 1.8s ease-in-out infinite reverse',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Third EEG line - rapid movement */}
          <path d="M0,200 L3,222 L6,178 L9,235 L12,170 L15,245 L18,165 L21,215 L24,190 L27,225 L30,180 L33,250 L36,160 L39,222 L42,190 L45,235 L48,175 L51,255 L54,155 L57,215 L60,178 L63,248 L66,160 L69,235 L72,185 L75,222 L78,180 L81,250 L84,155 L87,245 L90,170 L93,260 L96,150 L99,215 L102,190 L105,225 L108,180 L111,253 L114,160 L117,222 L120,178 L123,250 L126,155 L129,235 L132,185 L135,260 L138,150 L141,215 L144,190 L147,225 L150,175 L153,255 L156,160 L159,222 L162,178 L165,253 L168,155 L171,235 L174,185 L177,245 L180,170 L183,260 L186,160 L189,222 L192,178 L195,250 L198,160 L201,235 L204,185 L207,265 L210,145 L213,215 L216,190 L219,225 L222,180 L225,253 L228,160 L231,222 L234,178 L237,250 L240,155 L243,235 L246,185 L249,260 L252,150 L255,215 L258,190 L261,225 L264,175 L267,255 L270,160 L273,222 L276,178 L279,253 L282,155 L285,235 L288,185 L291,245 L294,170 L297,260 L300,160 L303,222 L306,178 L309,250 L312,160 L315,235 L318,185 L321,265"
                stroke="url(#heroEegGradient3)" 
                strokeWidth="4.8" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 2.2s ease-in-out infinite',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Fourth EEG line - extreme speed */}
          <path d="M0,260 L2,285 L4,235 L6,295 L8,225 L10,305 L12,220 L14,275 L16,245 L18,285 L20,235 L22,310 L24,215 L26,285 L28,245 L30,295 L32,230 L34,315 L36,210 L38,275 L40,235 L42,308 L44,215 L46,295 L48,240 L50,285 L52,235 L54,310 L56,210 L58,305 L60,225 L62,320 L64,205 L66,275 L68,245 L70,285 L72,235 L74,313 L76,215 L78,285 L80,235 L82,310 L84,210 L86,295 L88,240 L90,320 L92,205 L94,275 L96,245 L98,285 L100,230 L102,315 L104,215 L106,285 L108,235 L110,313 L112,210 L114,295 L116,240 L118,305 L120,225 L122,320 L124,215 L126,285 L128,235 L130,310 L132,215 L134,295 L136,240 L138,325 L140,200 L142,275 L144,245 L146,285 L148,235 L150,313 L152,215 L154,285 L156,235 L158,310 L160,210 L162,295 L164,240 L166,320 L168,205 L170,275 L172,245 L174,285 L176,230 L178,315 L180,215 L182,285 L184,235 L186,313 L188,210 L190,295 L192,240 L194,305 L196,225 L198,320 L200,215 L202,285 L204,235 L206,310 L208,215 L210,295 L212,240 L214,325"
                stroke="url(#heroEegGradient)" 
                strokeWidth="4.5" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 1.2s ease-in-out infinite reverse',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Fifth EEG line - lightning fast */}
          <path d="M0,320 L3,348 L5,292 L8,358 L10,285 L13,368 L15,280 L18,335 L20,305 L23,345 L25,295 L28,375 L30,275 L33,348 L35,305 L38,358 L40,290 L43,380 L45,270 L48,335 L50,292 L53,370 L55,275 L58,358 L60,300 L63,348 L65,295 L68,375 L70,270 L73,368 L75,285 L78,385 L80,265 L83,335 L85,305 L88,345 L90,295 L93,378 L95,275 L98,348 L100,292 L103,375 L105,270 L108,358 L110,300 L113,385 L115,265 L118,335 L120,305 L123,345 L125,290 L128,380 L130,275 L133,348 L135,292 L138,378 L140,270 L143,358 L145,300 L148,368 L150,285 L153,385 L155,275 L158,348 L160,292 L163,375 L165,275 L168,358 L170,300 L173,390 L175,260 L178,335 L180,305 L183,345 L185,295 L188,378 L190,275 L193,348 L195,292 L198,375 L200,270 L203,358 L205,300 L208,385 L210,265 L213,335 L215,305 L218,345 L220,290 L223,380 L225,275 L228,348 L230,292 L233,378 L235,270 L238,358 L240,300 L243,368 L245,285 L248,385"
                stroke="url(#heroEegGradient2)" 
                strokeWidth="4.2" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 1.6s ease-in-out infinite',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Sixth EEG line - blazing fast */}
          <path d="M0,380 L2,410 L3,350 L5,420 L6,345 L8,430 L9,340 L11,395 L12,365 L14,405 L15,355 L17,435 L18,335 L20,410 L21,365 L23,420 L24,350 L26,440 L27,330 L29,395 L30,350 L32,430 L33,335 L35,420 L36,360 L38,410 L39,355 L41,435 L42,330 L44,430 L45,345 L47,445 L48,325 L50,395 L51,365 L53,405 L54,355 L56,438 L57,335 L59,410 L60,350 L62,435 L63,330 L65,420 L66,360 L68,445 L69,325 L71,395 L72,365 L74,405 L75,350 L77,440 L78,335 L80,410 L81,350 L83,438 L84,330 L86,420 L87,360 L89,430 L90,345 L92,445 L93,335 L95,410 L96,350 L98,435 L99,335 L101,420 L102,360 L104,450 L105,320 L107,395 L108,365 L110,405 L111,355 L113,438 L114,335 L116,410 L117,350 L119,435 L120,330 L122,420 L123,360 L125,445 L126,325 L128,395 L129,365 L131,405 L132,350 L134,440 L135,335 L137,410 L138,350 L140,438 L141,330 L143,420 L144,360 L146,430 L147,345 L149,445"
                stroke="url(#heroEegGradient3)" 
                strokeWidth="3.8" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 1.0s ease-in-out infinite reverse',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Seventh EEG line - ultra rapid */}
          <path d="M0,440 L2,472 L3,408 L5,485 L6,400 L8,495 L9,395 L11,460 L12,425 L14,470 L15,415 L17,500 L18,390 L20,472 L21,425 L23,485 L24,410 L26,505 L27,385 L29,460 L30,408 L32,495 L33,390 L35,485 L36,420 L38,472 L39,415 L41,500 L42,385 L44,495 L45,400 L47,510 L48,380 L50,460 L51,425 L53,470 L54,415 L56,503 L57,390 L59,472 L60,408 L62,500 L63,385 L65,485 L66,420 L68,510 L69,380 L71,460 L72,425 L74,470 L75,410 L77,505 L78,390 L80,472 L81,408 L83,503 L84,385 L86,485 L87,420 L89,495 L90,400 L92,510 L93,390 L95,472 L96,408 L98,500 L99,390 L101,485 L102,420 L104,515 L105,375 L107,460 L108,425 L110,470 L111,415 L113,503 L114,390 L116,472 L117,408 L119,500 L120,385 L122,485 L123,420 L125,510 L126,380 L128,460 L129,425 L131,470 L132,410 L134,505 L135,390 L137,472 L138,408 L140,503 L141,385 L143,485 L144,420 L146,495 L147,400 L149,510"
                stroke="url(#heroEegGradient)" 
                strokeWidth="3.5" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 0.8s ease-in-out infinite',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
                }} />
          
          {/* Eighth EEG line - maximum speed */}
          <path d="M0,500 L1,535 L2,465 L3,545 L4,460 L5,555 L6,455 L7,520 L8,485 L9,530 L10,475 L11,560 L12,450 L13,535 L14,485 L15,545 L16,470 L17,565 L18,445 L19,520 L20,465 L21,555 L22,450 L23,545 L24,480 L25,535 L26,475 L27,560 L28,445 L29,555 L30,460 L31,570 L32,440 L33,520 L34,485 L35,530 L36,475 L37,563 L38,450 L39,535 L40,465 L41,560 L42,445 L43,545 L44,480 L45,570 L46,440 L47,520 L48,485 L49,530 L50,470 L51,565 L52,450 L53,535 L54,465 L55,563 L56,445 L57,545 L58,480 L59,555 L60,460 L61,570 L62,450 L63,535 L64,465 L65,560 L66,450 L67,545 L68,480 L69,575 L70,435 L71,520 L72,485 L73,530 L74,475 L75,563 L76,450 L77,535 L78,465 L79,560 L80,445 L81,545 L82,480 L83,570 L84,440 L85,520 L86,485 L87,530 L88,470 L89,565 L90,450 L91,535 L92,465 L93,563 L94,445 L95,545 L96,480 L97,555 L98,460 L99,570"
                stroke="url(#heroEegGradient2)" 
                strokeWidth="3.2" 
                fill="none" 
                style={{
                  animation: 'eeg-flow 0.6s ease-in-out infinite reverse',
                  strokeLinecap: 'round',
                  filter: 'drop-shadow(0 0 6px currentColor)'
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
