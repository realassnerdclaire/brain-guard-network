import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";
import { animateLetters, startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";
import { useNavigate } from "react-router-dom";

const HeroXBrainer = () => {
  const navigate = useNavigate();
  console.log("🎨 HeroXBrainer component rendering with color animation!");
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col justify-center sm:justify-start">
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
      
      
      {/* Simplified EEG stream signals - background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-30" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="eegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="eegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          {/* Realistic EEG brainwave patterns */}
          <path d="M0,300 L40,295 L45,305 L50,290 L55,310 L60,285 L65,315 L70,280 L75,305 L80,295 L120,290 L125,310 L130,285 L135,315 L140,275 L145,320 L150,270 L155,300 L160,295 L200,290 L205,315 L210,280 L215,325 L220,275 L225,310 L230,285 L235,305 L240,295 L280,290 L285,320 L290,275 L295,325 L300,270 L305,315 L310,280 L315,300 L320,295 L360,290 L365,310 L370,285 L375,320 L380,275 L385,315 L390,280 L395,305 L400,295 L440,290 L445,325 L450,270 L455,330 L460,265 L465,320 L470,275 L475,300 L480,295 L520,290 L525,315 L530,280 L535,325 L540,275 L545,310 L550,285 L555,305 L560,295 L600,290 L605,320 L610,275 L615,325 L620,270 L625,315 L630,280 L635,300 L640,295 L680,290 L685,310 L690,285 L695,320 L700,275 L705,315 L710,280 L715,305 L720,295 L760,290 L765,325 L770,270 L775,330 L780,265 L785,320 L790,275 L795,300 L800,295 L840,290 L845,315 L850,280 L855,325 L860,275 L865,310 L870,285 L875,305 L880,295 L920,290 L925,320 L930,275 L935,325 L940,270 L945,315 L950,280 L955,300 L960,295 L1000,290 L1005,310 L1010,285 L1015,320 L1020,275 L1025,315 L1030,280 L1035,305 L1040,295 L1080,290 L1085,325 L1090,270 L1095,330 L1100,265 L1105,320 L1110,275 L1115,300 L1120,295 L1160,290 L1165,315 L1170,280 L1175,325 L1180,275 L1185,310 L1190,285 L1195,305 L1200,295 L1240,290 L1245,320 L1250,275 L1255,325 L1260,270 L1265,315 L1270,280 L1275,300 L1280,295 L1320,290 L1325,310 L1330,285 L1335,320 L1340,275 L1345,315 L1350,280 L1355,305 L1360,295 L1400,290 L1405,325 L1410,270 L1415,330 L1420,265 L1425,320 L1430,275 L1435,300 L1440,295 L1480,290 L1485,315 L1490,280 L1495,325 L1500,275 L1505,310 L1510,285 L1515,305 L1520,295 L1560,290 L1565,320 L1570,275 L1575,325 L1580,270 L1585,315 L1590,280 L1595,300 L1600,295 L1640,290 L1645,310 L1650,285 L1655,320 L1660,275 L1665,315 L1670,280 L1675,305 L1680,295 L1720,290 L1725,325 L1730,270 L1735,330 L1740,265 L1745,320 L1750,275 L1755,300 L1760,295 L1800,290 L1805,315 L1810,280 L1815,325 L1820,275 L1825,310 L1830,285 L1835,305 L1840,295 L1880,290 L1885,320 L1890,275 L1895,325 L1900,270 L1905,315 L1910,280 L1915,300 L1920,295"
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                style={{
                  opacity: 0.5,
                  animation: 'eeg-flow 8s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 4px #00d4ff)',
                  strokeLinecap: 'round'
                }} />
          
          <path d="M0,500 L35,495 L40,510 L45,485 L50,515 L55,480 L60,520 L65,475 L70,510 L75,495 L110,490 L115,515 L120,480 L125,525 L130,475 L135,520 L140,485 L145,505 L150,495 L185,490 L190,520 L195,475 L200,530 L205,470 L210,525 L215,480 L220,500 L225,495 L260,490 L265,515 L270,480 L275,525 L280,475 L285,520 L290,485 L295,505 L300,495 L335,490 L340,510 L345,485 L350,520 L355,475 L360,515 L365,480 L370,505 L375,495 L410,490 L415,525 L420,470 L425,535 L430,465 L435,530 L440,475 L445,500 L450,495 L485,490 L490,515 L495,480 L500,525 L505,475 L510,520 L515,485 L520,505 L525,495 L560,490 L565,520 L570,475 L575,530 L580,470 L585,525 L590,480 L595,500 L600,495 L635,490 L640,515 L645,480 L650,525 L655,475 L660,520 L665,485 L670,505 L675,495 L710,490 L715,510 L720,485 L725,520 L730,475 L735,515 L740,480 L745,505 L750,495 L785,490 L790,525 L795,470 L800,535 L805,465 L810,530 L815,475 L820,500 L825,495 L860,490 L865,515 L870,480 L875,525 L880,475 L885,520 L890,485 L895,505 L900,495 L935,490 L940,520 L945,475 L950,530 L955,470 L960,525 L965,480 L970,500 L975,495 L1010,490 L1015,515 L1020,480 L1025,525 L1030,475 L1035,520 L1040,485 L1045,505 L1050,495 L1085,490 L1090,510 L1095,485 L1100,520 L1105,475 L1110,515 L1115,480 L1120,505 L1125,495 L1160,490 L1165,525 L1170,470 L1175,535 L1180,465 L1185,530 L1190,475 L1195,500 L1200,495 L1235,490 L1240,515 L1245,480 L1250,525 L1255,475 L1260,520 L1265,485 L1270,505 L1275,495 L1310,490 L1315,520 L1320,475 L1325,530 L1330,470 L1335,525 L1340,480 L1345,500 L1350,495 L1385,490 L1390,515 L1395,480 L1400,525 L1405,475 L1410,520 L1415,485 L1420,505 L1425,495 L1460,490 L1465,510 L1470,485 L1475,520 L1480,475 L1485,515 L1490,480 L1495,505 L1500,495 L1535,490 L1540,525 L1545,470 L1550,535 L1555,465 L1560,530 L1565,475 L1570,500 L1575,495 L1610,490 L1615,515 L1620,480 L1625,525 L1630,475 L1635,520 L1640,485 L1645,505 L1650,495 L1685,490 L1690,520 L1695,475 L1700,530 L1705,470 L1710,525 L1715,480 L1720,500 L1725,495 L1760,490 L1765,515 L1770,480 L1775,525 L1780,475 L1785,520 L1790,485 L1795,505 L1800,495 L1835,490 L1840,510 L1845,485 L1850,520 L1855,475 L1860,515 L1865,480 L1870,505 L1875,495 L1910,490 L1915,525 L1920,470"
                stroke="url(#eegGradient2)" 
                strokeWidth="1.5" 
                fill="none" 
                style={{
                  opacity: 0.4,
                  animation: 'eeg-flow 6s ease-in-out infinite reverse',
                  filter: 'drop-shadow(0 0 3px #a855f7)',
                  strokeLinecap: 'round'
                }} />
                
          <path d="M0,700 L30,695 L35,715 L40,685 L45,720 L50,680 L55,725 L60,675 L65,715 L70,695 L100,690 L105,720 L110,675 L115,730 L120,670 L125,725 L130,680 L135,700 L140,695 L170,690 L175,715 L180,680 L185,725 L190,675 L195,720 L200,685 L205,705 L210,695 L240,690 L245,725 L250,670 L255,735 L260,665 L265,730 L270,675 L275,700 L280,695 L310,690 L315,720 L320,675 L325,730 L330,670 L335,725 L340,680 L345,705 L350,695 L380,690 L385,715 L390,680 L395,725 L400,675 L405,720 L410,685 L415,705 L420,695 L450,690 L455,725 L460,670 L465,735 L470,665 L475,730 L480,675 L485,700 L490,695 L520,690 L525,720 L530,675 L535,730 L540,670 L545,725 L550,680 L555,705 L560,695 L590,690 L595,715 L600,680 L605,725 L610,675 L615,720 L620,685 L625,705 L630,695 L660,690 L665,725 L670,670 L675,735 L680,665 L685,730 L690,675 L695,700 L700,695 L730,690 L735,720 L740,675 L745,730 L750,670 L755,725 L760,680 L765,705 L770,695 L800,690 L805,715 L810,680 L815,725 L820,675 L825,720 L830,685 L835,705 L840,695 L870,690 L875,725 L880,670 L885,735 L890,665 L895,730 L900,675 L905,700 L910,695 L940,690 L945,720 L950,675 L955,730 L960,670 L965,725 L970,680 L975,705 L980,695 L1010,690 L1015,715 L1020,680 L1025,725 L1030,675 L1035,720 L1040,685 L1045,705 L1050,695 L1080,690 L1085,725 L1090,670 L1095,735 L1100,665 L1105,730 L1110,675 L1115,700 L1120,695 L1150,690 L1155,720 L1160,675 L1165,730 L1170,670 L1175,725 L1180,680 L1185,705 L1190,695 L1220,690 L1225,715 L1230,680 L1235,725 L1240,675 L1245,720 L1250,685 L1255,705 L1260,695 L1290,690 L1295,725 L1300,670 L1305,735 L1310,665 L1315,730 L1320,675 L1325,700 L1330,695 L1360,690 L1365,720 L1370,675 L1375,730 L1380,670 L1385,725 L1390,680 L1395,705 L1400,695 L1430,690 L1435,715 L1440,680 L1445,725 L1450,675 L1455,720 L1460,685 L1465,705 L1470,695 L1500,690 L1505,725 L1510,670 L1515,735 L1520,665 L1525,730 L1530,675 L1535,700 L1540,695 L1570,690 L1575,720 L1580,675 L1585,730 L1590,670 L1595,725 L1600,680 L1605,705 L1610,695 L1640,690 L1645,715 L1650,680 L1655,725 L1660,675 L1665,720 L1670,685 L1675,705 L1680,695 L1710,690 L1715,725 L1720,670 L1725,735 L1730,665 L1735,730 L1740,675 L1745,700 L1750,695 L1780,690 L1785,720 L1790,675 L1795,730 L1800,670 L1805,725 L1810,680 L1815,705 L1820,695 L1850,690 L1855,715 L1860,680 L1865,725 L1870,675 L1875,720 L1880,685 L1885,705 L1890,695 L1920,690"
                stroke="url(#eegGradient)" 
                strokeWidth="1" 
                fill="none" 
                style={{
                  opacity: 0.3,
                  animation: 'eeg-flow 10s ease-in-out infinite',
                  animationDelay: '2s',
                  filter: 'drop-shadow(0 0 2px #00d4ff)',
                  strokeLinecap: 'round'
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
      
      <div className="container relative z-10 h-full flex flex-col justify-center items-start px-3 sm:px-8 lg:px-12 xl:px-16 py-20 pt-32 lg:pt-40 xl:pt-48">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-20 xl:gap-24">
          {/* Left side - Headline and subheadline */}
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-15">
            <h1 
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl leading-tight font-normal mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-50 via-cyan-200 via-cyan-400 via-cyan-600 via-cyan-400 via-cyan-200 via-cyan-50 to-white opacity-0" 
              id="hero-title"
              style={{
                animation: 'fade-in 1.2s ease-out 0.5s both, scale-in 1s ease-out 0.5s both, heroGlow 3s ease-in-out infinite',
                backgroundSize: '300% 100%',
                backgroundPosition: '0% 50%',
                animationFillMode: 'both',
                filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))',
                transform: 'perspective(1000px) rotateX(5deg)'
              }}
            >
              Secure Neural Data Before It's Too Late
            </h1>
            <p 
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 max-w-md lg:max-w-2xl xl:max-w-3xl leading-relaxed lg:leading-loose opacity-0"
              style={{
                animation: 'fade-in 1s ease-out 1.2s both, scale-in 0.8s ease-out 1.2s both, subtitleFloat 4s ease-in-out infinite',
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
              }}
            >
              As brain-computer devices become more common, the risk of brain data being misused is growing. XBrainer AI makes tools to keep this data safe.
            </p>
          </div>
          
          {/* Right side - Action buttons */}
          <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 lg:mt-8 xl:mt-12">
            <button 
              className="rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-8 lg:px-12 xl:px-16 py-4 lg:py-6 xl:py-7 text-lg lg:text-xl xl:text-2xl font-medium cursor-pointer transition-all duration-300 opacity-0"
              style={{
                animation: 'fade-in 0.8s ease-out 1.5s both, scale-in 0.6s ease-out 1.5s both',
                transformOrigin: 'center'
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
              onClick={() => navigate('/waitlist')}
            >
              JOIN THE WAITLIST
            </button>
            <button 
              className="rounded-full border border-cyan-300/50 bg-cyan-600/20 text-cyan-100 backdrop-blur-sm hover:bg-cyan-500/30 px-8 lg:px-12 xl:px-16 py-4 lg:py-6 xl:py-7 text-lg lg:text-xl xl:text-2xl font-medium cursor-pointer transition-all duration-300 opacity-0"
              style={{
                animation: 'fade-in 0.8s ease-out 1.8s both, scale-in 0.6s ease-out 1.8s both',
                transformOrigin: 'center'
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
              onClick={() => navigate('/demo-login')}
            >
              SEE THE DEMO
            </button>
          </div>
        </div>
      </div>
      
      {/* Interactive navigation labels - positioned lower to avoid overlap */}
      <div className="absolute bottom-16 sm:bottom-12 lg:bottom-16 xl:bottom-20 left-0 right-0 z-[9999] pointer-events-none">
        <div className="container px-2 sm:px-8 lg:px-12 xl:px-16 pointer-events-none">
          <div className="flex items-center justify-center gap-3 sm:gap-8 lg:gap-12 xl:gap-20 flex-wrap pointer-events-auto">
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
      
      {/* Subtle bottom fade - lowered z-index */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default HeroXBrainer;
