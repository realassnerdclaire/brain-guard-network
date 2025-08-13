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
        <svg className="w-full h-full opacity-40" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
          
          {/* Simplified EEG waves - balanced visibility */}
          <path d="M0,200 L40,180 L80,220 L120,180 L160,200 L200,190 L240,210 L280,180 L320,220 L360,190 L400,200 L440,180 L480,210 L520,190 L560,200 L600,180 L640,210 L680,190 L720,200 L760,180 L800,210 L840,190 L880,200 L920,180 L960,210 L1000,190 L1040,200 L1080,180 L1120,210 L1160,190 L1200,200 L1240,180 L1280,210 L1320,190 L1360,200 L1400,180 L1440,210 L1480,190 L1520,200 L1560,180 L1600,210 L1640,190 L1680,200 L1720,180 L1760,210 L1800,190 L1840,200 L1880,180 L1920,210"
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                style={{opacity: 0.7}} />
          
          <path d="M0,600 L40,580 L80,620 L120,580 L160,600 L200,590 L240,610 L280,580 L320,620 L360,590 L400,600 L440,580 L480,610 L520,590 L560,600 L600,580 L640,610 L680,590 L720,600 L760,580 L800,610 L840,590 L880,600 L920,580 L960,610 L1000,590 L1040,600 L1080,580 L1120,610 L1160,590 L1200,600 L1240,580 L1280,610 L1320,590 L1360,600 L1400,580 L1440,610 L1480,590 L1520,600 L1560,580 L1600,610 L1640,590 L1680,600 L1720,580 L1760,610 L1800,590 L1840,600 L1880,580 L1920,610"
                stroke="url(#eegGradient2)" 
                strokeWidth="2" 
                fill="none" 
                style={{opacity: 0.6}} />
                
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
                
          {/* Additional background EEG streams - independent of brain */}
          <path d="M0,150 L18,135 L36,165 L54,130 L72,170 L90,125 L108,175 L126,135 L144,155 L162,145 L180,160 L198,140 L216,165 L234,135 L252,170 L270,145 L288,175 L306,130 L324,180 L342,140 L360,160 L378,135 L396,170 L414,130 L432,175 L450,140 L468,160 L486,135 L504,170 L522,130 L540,175 L558,140 L576,160 L594,135 L612,170 L630,130 L648,175 L666,140 L684,160 L702,135 L720,170 L738,130 L756,175 L774,140 L792,160 L810,135 L828,170 L846,130 L864,175 L882,140 L900,160 L918,135 L936,170 L954,130 L972,175 L990,140 L1008,160 L1026,135 L1044,170 L1062,130 L1080,175 L1098,140 L1116,160 L1134,135 L1152,170 L1170,130 L1188,175 L1206,140 L1224,160 L1242,135 L1260,170 L1278,130 L1296,175 L1314,140 L1332,160 L1350,135 L1368,170 L1386,130 L1404,175 L1422,140 L1440,160 L1458,135 L1476,170 L1494,130 L1512,175 L1530,140 L1548,160 L1566,135 L1584,170 L1602,130 L1620,175 L1638,140 L1656,160 L1674,135 L1692,170 L1710,130 L1728,175 L1746,140 L1764,160 L1782,135 L1800,170 L1818,130 L1836,175 L1854,140 L1872,160 L1890,135 L1908,170 L1920,135"
                stroke="url(#eegGradient)" 
                strokeWidth="1.2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-drift 14s ease-in-out infinite', animationDelay: '6s'}} />
                
          <path d="M0,350 L22,330 L44,370 L66,325 L88,375 L110,320 L132,380 L154,330 L176,350 L198,340 L220,360 L242,335 L264,365 L286,330 L308,375 L330,340 L352,380 L374,325 L396,385 L418,335 L440,365 L462,330 L484,375 L506,325 L528,380 L550,335 L572,365 L594,330 L616,375 L638,325 L660,380 L682,335 L704,365 L726,330 L748,375 L770,325 L792,380 L814,335 L836,365 L858,330 L880,375 L902,325 L924,380 L946,335 L968,365 L990,330 L1012,375 L1034,325 L1056,380 L1078,335 L1100,365 L1122,330 L1144,375 L1166,325 L1188,380 L1210,335 L1232,365 L1254,330 L1276,375 L1298,325 L1320,380 L1342,335 L1364,365 L1386,330 L1408,375 L1430,325 L1452,380 L1474,335 L1496,365 L1518,330 L1540,375 L1562,325 L1584,380 L1606,335 L1628,365 L1650,330 L1672,375 L1694,325 L1716,380 L1738,335 L1760,365 L1782,330 L1804,375 L1826,325 L1848,380 L1870,335 L1892,365 L1920,330"
                stroke="url(#eegGradient2)" 
                strokeWidth="1.2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'wave-flow 16s ease-in-out infinite', animationDelay: '7s'}} />
                
          <path d="M0,750 L25,730 L50,770 L75,725 L100,775 L125,720 L150,780 L175,730 L200,750 L225,740 L250,760 L275,735 L300,765 L325,730 L350,775 L375,740 L400,780 L425,725 L450,785 L475,735 L500,765 L525,730 L550,775 L575,725 L600,780 L625,735 L650,765 L675,730 L700,775 L725,725 L750,780 L775,735 L800,765 L825,730 L850,775 L875,725 L900,780 L925,735 L950,765 L975,730 L1000,775 L1025,725 L1050,780 L1075,735 L1100,765 L1125,730 L1150,775 L1175,725 L1200,780 L1225,735 L1250,765 L1275,730 L1300,775 L1325,725 L1350,780 L1375,735 L1400,765 L1425,730 L1450,775 L1475,725 L1500,780 L1525,735 L1550,765 L1575,730 L1600,775 L1625,725 L1650,780 L1675,735 L1700,765 L1725,730 L1750,775 L1775,725 L1800,780 L1825,735 L1850,765 L1875,730 L1900,775 L1920,730"
                stroke="url(#eegGradient)" 
                strokeWidth="1.2" 
                fill="none" 
                className="animate-pulse" 
                style={{animation: 'reverse-flow 18s ease-in-out infinite', animationDelay: '8s'}} />
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
