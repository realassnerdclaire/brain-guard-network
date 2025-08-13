import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";

const HeroXBrainer = () => {
  console.log("HeroXBrainer rendering - should have NO background images or components");
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* XBrainer AI logo and company name - top left */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-6">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-16 w-auto mix-blend-screen opacity-90 rounded-lg" 
          style={{
            filter: 'blur(0.5px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="flex flex-col">
          <span className="text-white text-4xl font-bold tracking-tight">
            XBrainer AI
          </span>
          <span className="text-white/70 text-lg font-medium">
            The firewall for your brain
          </span>
        </div>
      </div>
      
      
      {/* EEG stream signals across entire page - background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="eegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 0.8}} />
            </linearGradient>
            <linearGradient id="eegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 0.9}} />
              <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          {/* EEG waves flowing from brain area outward - realistic spikes */}
          <path d="M1200,300 L1220,280 L1240,320 L1260,270 L1280,340 L1300,260 L1320,350 L1340,280 L1360,300 L1380,290 L1400,310 L1420,285 L1440,315 L1460,275 L1480,325 L1500,290 L1520,330 L1540,270 L1560,340 L1580,285 L1600,320 L1620,260 L1640,350 L1660,290 L1680,310 L1700,280 L1720,330 L1740,270 L1760,340 L1780,285 L1800,320 L1820,275 L1840,335 L1860,290 L1880,315 L1900,280 L1920,325" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 3s ease-in-out infinite'}} />
          
          <path d="M1100,450 L1120,430 L1140,470 L1160,420 L1180,480 L1200,410 L1220,490 L1240,430 L1260,450 L1280,440 L1300,460 L1320,435 L1340,465 L1360,425 L1380,475 L1400,440 L1420,480 L1440,420 L1460,490 L1480,435 L1500,470 L1520,410 L1540,500 L1560,440 L1580,460 L1600,430 L1620,480 L1640,420 L1660,490 L1680,435 L1700,470 L1720,425 L1740,485 L1760,440 L1780,465 L1800,430 L1820,475 L1840,420 L1860,485 L1880,440 L1900,465 L1920,430" 
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 4s ease-in-out infinite', animationDelay: '0.5s'}} />
          
          <path d="M1000,600 L1020,580 L1040,620 L1060,570 L1080,630 L1100,560 L1120,640 L1140,580 L1160,600 L1180,590 L1200,610 L1220,585 L1240,615 L1260,575 L1280,625 L1300,590 L1320,630 L1340,570 L1360,640 L1380,585 L1400,620 L1420,560 L1440,650 L1460,590 L1480,610 L1500,580 L1520,630 L1540,570 L1560,640 L1580,585 L1600,620 L1620,575 L1640,635 L1660,590 L1680,615 L1700,580 L1720,625 L1740,575 L1760,635 L1780,590 L1800,615 L1820,580 L1840,625 L1860,575 L1880,635 L1900,590 L1920,615" 
                stroke="url(#eegGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 5s ease-in-out infinite', animationDelay: '1s'}} />
                
          {/* EEG waves spreading across entire page - graph style */}
          <path d="M0,200 L20,180 L40,220 L60,170 L80,230 L100,160 L120,240 L140,180 L160,200 L180,190 L200,210 L220,185 L240,215 L260,175 L280,225 L300,190 L320,230 L340,170 L360,240 L380,185 L400,220 L420,160 L440,250 L460,190 L480,210 L500,180 L520,230 L540,170 L560,240 L580,185 L600,220 L620,175 L640,235 L660,190 L680,215 L700,180 L720,225 L740,175 L760,235 L780,190 L800,215 L820,180 L840,225 L860,175 L880,235 L900,190 L920,215 L940,180 L960,225 L980,175 L1000,235 L1020,190 L1040,215 L1060,180 L1080,225 L1100,175 L1120,235 L1140,190 L1160,215 L1180,180 L1200,225" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 6s ease-in-out infinite'}} />
          
          <path d="M0,400 L25,380 L50,420 L75,370 L100,430 L125,360 L150,440 L175,380 L200,400 L225,390 L250,410 L275,385 L300,415 L325,375 L350,425 L375,390 L400,430 L425,370 L450,440 L475,385 L500,420 L525,360 L550,450 L575,390 L600,410 L625,380 L650,430 L675,370 L700,440 L725,385 L750,420 L775,375 L800,435 L825,390 L850,415 L875,380 L900,425 L925,375 L950,435 L975,390 L1000,415 L1025,380 L1050,425 L1075,375 L1100,435 L1125,390 L1150,415 L1175,380 L1200,425 L1225,375 L1250,435 L1275,390 L1300,415 L1325,380 L1350,425 L1375,375 L1400,435 L1425,390 L1450,415 L1475,380 L1500,425 L1525,375 L1550,435 L1575,390 L1600,415 L1625,380 L1650,425 L1675,375 L1700,435 L1725,390 L1750,415 L1775,380 L1800,425 L1825,375 L1850,435 L1875,390 L1900,415 L1920,380" 
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 7s ease-in-out infinite', animationDelay: '1.5s'}} />
          
          <path d="M0,600 L30,580 L60,620 L90,570 L120,630 L150,560 L180,640 L210,580 L240,600 L270,590 L300,610 L330,585 L360,615 L390,575 L420,625 L450,590 L480,630 L510,570 L540,640 L570,585 L600,620 L630,560 L660,650 L690,590 L720,610 L750,580 L780,630 L810,570 L840,640 L870,585 L900,620 L930,575 L960,635 L990,590 L1020,615 L1050,580 L1080,625 L1110,575 L1140,635 L1170,590 L1200,615 L1230,580 L1260,625 L1290,575 L1320,635 L1350,590 L1380,615 L1410,580 L1440,625 L1470,575 L1500,635 L1530,590 L1560,615 L1590,580 L1620,625 L1650,575 L1680,635 L1710,590 L1740,615 L1770,580 L1800,625 L1830,575 L1860,635 L1890,590 L1920,615" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 8s ease-in-out infinite', animationDelay: '2s'}} />
                
          <path d="M0,800 L35,780 L70,820 L105,770 L140,830 L175,760 L210,840 L245,780 L280,800 L315,790 L350,810 L385,785 L420,815 L455,775 L490,825 L525,790 L560,830 L595,770 L630,840 L665,785 L700,820 L735,760 L770,850 L805,790 L840,810 L875,780 L910,830 L945,770 L980,840 L1015,785 L1050,820 L1085,775 L1120,835 L1155,790 L1190,815 L1225,780 L1260,825 L1295,775 L1330,835 L1365,790 L1400,815 L1435,780 L1470,825 L1505,775 L1540,835 L1575,790 L1610,815 L1645,780 L1680,825 L1715,775 L1750,835 L1785,790 L1820,815 L1855,780 L1890,825 L1920,775" 
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 9s ease-in-out infinite', animationDelay: '2.5s'}} />
          
          {/* Additional flowing signals from brain - EEG graph style */}
          <path d="M1150,380 L1130,360 L1110,400 L1090,350 L1070,410 L1050,340 L1030,420 L1010,360 L990,380 L970,370 L950,390 L930,365 L910,395 L890,355 L870,405 L850,370 L830,410 L810,350 L790,420 L770,365 L750,400 L730,340 L710,430 L690,370 L670,390 L650,360 L630,410 L610,350 L590,420 L570,365 L550,400 L530,355 L510,415 L490,370 L470,395 L450,360 L430,405 L410,355 L390,415 L370,370 L350,395 L330,360 L310,405 L290,355 L270,415 L250,370 L230,395 L210,360 L190,405 L170,355 L150,415 L130,370 L110,395 L90,360 L70,405 L50,355 L30,415 L10,370 L0,395" 
                stroke="url(#eegGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'reverse-flow 5s ease-in-out infinite', animationDelay: '3s'}} />
                
          <path d="M1250,520 L1230,500 L1210,540 L1190,490 L1170,550 L1150,480 L1130,560 L1110,500 L1090,520 L1070,510 L1050,530 L1030,505 L1010,535 L990,495 L970,545 L950,510 L930,550 L910,490 L890,560 L870,505 L850,540 L830,480 L810,570 L790,510 L770,530 L750,500 L730,550 L710,490 L690,560 L670,505 L650,540 L630,495 L610,555 L590,510 L570,535 L550,500 L530,545 L510,495 L490,555 L470,510 L450,535 L430,500 L410,545 L390,495 L370,555 L350,510 L330,535 L310,500 L290,545 L270,495 L250,555 L230,510 L210,535 L190,500 L170,545 L150,495 L130,555 L110,510 L90,535 L70,500 L50,545 L30,495 L10,555 L0,510" 
                stroke="url(#eegGradient2)" 
                strokeWidth="1.5" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'reverse-flow 6s ease-in-out infinite', animationDelay: '3.5s'}} />
                
          {/* Background data streams outside brain area - EEG style */}
          <path d="M0,100 L15,85 L30,115 L45,80 L60,120 L75,75 L90,125 L105,85 L120,105 L135,95 L150,110 L165,90 L180,115 L195,85 L210,120 L225,95 L240,125 L255,80 L270,130 L285,90 L300,110 L315,85 L330,120 L345,80 L360,125 L375,90 L390,110 L405,85 L420,120 L435,80 L450,125 L465,90 L480,110 L495,85 L510,120 L525,80 L540,125 L555,90 L570,110 L585,85 L600,120 L615,80 L630,125 L645,90 L660,110 L675,85 L690,120 L705,80 L720,125 L735,90 L750,110 L765,85 L780,120 L795,80 L810,125 L825,90 L840,110 L855,85 L870,120 L885,80 L900,125 L915,90 L930,110 L945,85 L960,120 L975,80 L990,125 L1005,90 L1020,110 L1035,85 L1050,120 L1065,80 L1080,125 L1095,90 L1110,110 L1125,85 L1140,120 L1155,80 L1170,125 L1185,90 L1200,110" 
                stroke="url(#eegGradient)" 
                strokeWidth="1" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 10s ease-in-out infinite', animationDelay: '4s'}} />
                
          <path d="M0,900 L20,885 L40,915 L60,880 L80,920 L100,875 L120,925 L140,885 L160,905 L180,895 L200,910 L220,890 L240,915 L260,885 L280,920 L300,895 L320,925 L340,880 L360,930 L380,890 L400,910 L420,885 L440,920 L460,880 L480,925 L500,890 L520,910 L540,885 L560,920 L580,880 L600,925 L620,890 L640,910 L660,885 L680,920 L700,880 L720,925 L740,890 L760,910 L780,885 L800,920 L820,880 L840,925 L860,890 L880,910 L900,885 L920,920 L940,880 L960,925 L980,890 L1000,910 L1020,885 L1040,920 L1060,880 L1080,925 L1100,890 L1120,910 L1140,885 L1160,920 L1180,880 L1200,925 L1220,890 L1240,910 L1260,885 L1280,920 L1300,880 L1320,925 L1340,890 L1360,910 L1380,885 L1400,920 L1420,880 L1440,925 L1460,890 L1480,910 L1500,885 L1520,920 L1540,880 L1560,925 L1580,890 L1600,910 L1620,885 L1640,920 L1660,880 L1680,925 L1700,890 L1720,910 L1740,885 L1760,920 L1780,880 L1800,925 L1820,890 L1840,910 L1860,885 L1880,920 L1900,880 L1920,925" 
                stroke="url(#eegGradient2)" 
                strokeWidth="1" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 12s ease-in-out infinite', animationDelay: '5s'}} />
        </svg>
      </div>

      {/* Enhanced futuristic neon brain - foreground layer */}
      <div className="absolute right-0 top-1/2 -translate-y-4 w-3/5 h-[80vh] z-10 animate-pulse">
        <img
          src={futuristicBrain}
          alt="Futuristic translucent brain with neural pathways"
          className="w-full h-full object-cover opacity-60 animate-pulse"
          loading="eager"
          decoding="async"
          style={{
            filter: 'drop-shadow(0 0 15px #00d4ff) drop-shadow(0 0 25px #a855f7) brightness(1.1) contrast(1.1) blur(2px)',
            maskImage: 'radial-gradient(ellipse 70% 80% at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 85%)',
            animation: 'float 6s ease-in-out infinite',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      
      <div className="container relative z-10 flex items-center h-screen py-24">
        <div className="max-w-2xl relative z-15">
          <h1 className="text-5xl leading-[1.1] font-normal text-white sm:text-6xl lg:text-7xl">
            Secure Neural Data Before It's Too Late
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            As brain-computer devices become more common, the risk of brain data being stolen or changed is growing. XBrainer AI makes tools to keep this data safe.
          </p>
        </div>
        
        <div className="absolute bottom-40 right-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-8 py-3"
            asChild
          >
            <a href="#cta">JOIN THE WAITLIST +</a>
          </Button>
        </div>
      </div>
      
      {/* Press logos at bottom */}
      <div className="absolute bottom-16 left-0 right-0">
        <div className="container">
          <div className="flex items-center justify-center gap-12 opacity-60">
            <div className="text-white/60 text-sm font-medium">TECHCRUNCH</div>
            <div className="text-white/60 text-sm font-medium">WIRED</div>
            <div className="text-white/60 text-sm font-medium">MIT TECH REVIEW</div>
            <div className="text-white/60 text-sm font-medium">WALL ST JOURNAL</div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroXBrainer;
