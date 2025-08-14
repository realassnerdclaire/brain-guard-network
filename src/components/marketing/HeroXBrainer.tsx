import { Button } from "@/components/ui/button";
import futuristicBrain from "@/assets/futuristic-brain-correct.png";
import { animateLetters, startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

const HeroXBrainer = () => {
  console.log("🎨 HeroXBrainer component rendering with color animation!");
  return (
    <section className="relative h-screen bg-background overflow-hidden flex flex-col justify-center sm:justify-start">
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
      
      
      {/* EEG stream signals across entire page - background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-40 sm:opacity-40" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
          
          {/* High-frequency EEG brain wave patterns */}
          <path d="M0,200 L40,205 L80,195 L120,208 L160,192 L200,210 L240,188 L280,204 L320,196 L360,207 L400,193 L440,211 L480,189 L520,203 L560,197 L600,206 L640,194 L680,209 L720,191 L760,205 L800,195 L840,208 L880,192 L920,212 L960,188 L1000,204 L1040,196 L1080,207 L1120,193 L1160,210 L1200,190 L1240,203 L1280,197 L1320,206 L1360,194 L1400,209 L1440,191 L1480,205 L1520,195 L1560,208 L1600,192 L1640,211 L1680,189 L1720,203 L1760,197 L1800,206 L1840,194 L1880,209 L1920,191"
                stroke="url(#eegGradient)" 
                strokeWidth="0.3" 
                fill="none" 
                style={{
                  opacity: 0.05,
                  animation: 'eeg-flow 8s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 1px #00d4ff)',
                  strokeLinecap: 'round'
                }} />
          
          <path d="M0,400 L40,408 L80,392 L120,412 L160,388 L200,416 L240,392 L280,400 L320,388 L360,412 L400,384 L440,408 L480,396 L520,404 L560,388 L600,416 L640,384 L680,412 L720,396 L760,400 L800,384 L840,420 L880,388 L920,408 L960,392 L1000,416 L1040,384 L1080,412 L1120,396 L1160,400 L1200,388 L1240,408 L1280,384 L1320,416 L1360,392 L1400,404 L1440,388 L1480,412 L1520,384 L1560,408 L1600,396 L1640,400 L1680,388 L1720,416 L1760,384 L1800,412 L1840,396 L1880,400 L1920,384"
                stroke="url(#eegGradient2)" 
                strokeWidth="0.2" 
                fill="none" 
                style={{
                  opacity: 0.03,
                  animation: 'eeg-flow 6s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 1px #a855f7)',
                  strokeLinecap: 'round'
                }} />
          
          <path d="M0,600 L3,606 L6,594 L9,609 L12,591 L15,612 L18,594 L21,600 L24,591 L27,609 L30,588 L33,606 L36,597 L39,603 L42,591 L45,612 L48,588 L51,609 L54,597 L57,600 L60,588 L63,615 L66,591 L69,606 L72,594 L75,612 L78,588 L81,609 L84,597 L87,600 L90,591 L93,606 L96,588 L99,612 L102,594 L105,603 L108,591 L111,609 L114,588 L117,606 L120,597 L123,600 L126,591 L129,612 L132,588 L135,609 L138,597 L141,603 L144,591 L147,615 L150,588 L153,606 L156,594 L159,612 L162,588 L165,609 L168,597 L171,600 L174,591 L177,606 L180,588 L183,612 L186,594 L189,603 L192,591 L195,609 L198,588 L201,606 L204,597 L207,600 L210,591 L213,612 L216,588 L219,609 L222,597 L225,603 L228,591 L231,615 L234,588 L237,606 L240,594 L243,612 L246,588 L249,609 L252,597 L255,600 L258,591 L261,606 L264,588 L267,612 L270,594 L273,603 L276,591 L279,609 L282,588 L285,606 L288,597 L291,600 L294,591 L297,612 L300,588 L303,609 L306,597 L309,603 L312,591 L315,615 L318,588 L321,606 L324,594 L327,612 L330,588 L333,609 L336,597 L339,600 L342,591 L345,606 L348,588 L351,612 L354,594 L357,603 L360,591 L363,609 L366,588 L369,606 L372,597 L375,600 L378,591 L381,612 L384,588 L387,609 L390,597 L393,603 L396,591 L399,615 L402,588 L405,606 L408,594 L411,612 L414,588 L417,609 L420,597 L423,600 L426,591 L429,606 L432,588 L435,612 L438,594 L441,603 L444,591 L447,609 L450,588 L453,606 L456,597 L459,600 L462,591 L465,612 L468,588 L471,609 L474,597 L477,603 L480,591 L483,615 L486,588 L489,606 L492,594 L495,612 L498,588 L501,609 L504,597 L507,600 L510,591 L513,606 L516,588 L519,612 L522,594 L525,603 L528,591 L531,609 L534,588 L537,606 L540,597 L543,600 L546,591 L549,612 L552,588 L555,609 L558,597 L561,603 L564,591 L567,615 L570,588 L573,606 L576,594 L579,612 L582,588 L585,609 L588,597 L591,600 L594,591 L597,606 L600,588 L603,612 L606,594 L609,603 L612,591 L615,609 L618,588 L621,606 L624,597 L627,600 L630,591 L633,612 L636,588 L639,609 L642,597 L645,603 L648,591 L651,615 L654,588 L657,606 L660,594 L663,612 L666,588 L669,609 L672,597 L675,600 L678,591 L681,606 L684,588 L687,612 L690,594 L693,603 L696,591 L699,609 L702,588 L705,606 L708,597 L711,600 L714,591 L717,612 L720,588 L723,609 L726,597 L729,603 L732,591 L735,615 L738,588 L741,606 L744,594 L747,612 L750,588 L753,609 L756,597 L759,600 L762,591 L765,606 L768,588 L771,612 L774,594 L777,603 L780,591 L783,609 L786,588 L789,606 L792,597 L795,600 L798,591 L801,612 L804,588 L807,609 L810,597 L813,603 L816,591 L819,615 L822,588 L825,606 L828,594 L831,612 L834,588 L837,609 L840,597 L843,600 L846,591 L849,606 L852,588 L855,612 L858,594 L861,603 L864,591 L867,609 L870,588 L873,606 L876,597 L879,600 L882,591 L885,612 L888,588 L891,609 L894,597 L897,603 L900,591 L903,615 L906,588 L909,606 L912,594 L915,612 L918,588 L921,609 L924,597 L927,600 L930,591 L933,606 L936,588 L939,612 L942,594 L945,603 L948,591 L951,609 L954,588 L957,606 L960,597 L963,600 L966,591 L969,612 L972,588 L975,609 L978,597 L981,603 L984,591 L987,615 L990,588 L993,606 L996,594 L999,612 L1002,588 L1005,609 L1008,597 L1011,600 L1014,591 L1017,606 L1020,588 L1023,612 L1026,594 L1029,603 L1032,591 L1035,609 L1038,588 L1041,606 L1044,597 L1047,600 L1050,591 L1053,612 L1056,588 L1059,609 L1062,597 L1065,603 L1068,591 L1071,615 L1074,588 L1077,606 L1080,594 L1083,612 L1086,588 L1089,609 L1092,597 L1095,600 L1098,591 L1101,606 L1104,588 L1107,612 L1110,594 L1113,603 L1116,591 L1119,609 L1122,588 L1125,606 L1128,597 L1131,600 L1134,591 L1137,612 L1140,588 L1143,609 L1146,597 L1149,603 L1152,591 L1155,615 L1158,588 L1161,606 L1164,594 L1167,612 L1170,588 L1173,609 L1176,597 L1179,600 L1182,591 L1185,606 L1188,588 L1191,612 L1194,594 L1197,603 L1200,591 L1203,609 L1206,588 L1209,606 L1212,597 L1215,600 L1218,591 L1221,612 L1224,588 L1227,609 L1230,597 L1233,603 L1236,591 L1239,615 L1242,588 L1245,606 L1248,594 L1251,612 L1254,588 L1257,609 L1260,597 L1263,600 L1266,591 L1269,606 L1272,588 L1275,612 L1278,594 L1281,603 L1284,591 L1287,609 L1290,588 L1293,606 L1296,597 L1299,600 L1302,591 L1305,612 L1308,588 L1311,609 L1314,597 L1317,603 L1320,591 L1323,615 L1326,588 L1329,606 L1332,594 L1335,612 L1338,588 L1341,609 L1344,597 L1347,600 L1350,591 L1353,606 L1356,588 L1359,612 L1362,594 L1365,603 L1368,591 L1371,609 L1374,588 L1377,606 L1380,597 L1383,600 L1386,591 L1389,612 L1392,588 L1395,609 L1398,597 L1401,603 L1404,591 L1407,615 L1410,588 L1413,606 L1416,594 L1419,612 L1422,588 L1425,609 L1428,597 L1431,600 L1434,591 L1437,606 L1440,588 L1443,612 L1446,594 L1449,603 L1452,591 L1455,609 L1458,588 L1461,606 L1464,597 L1467,600 L1470,591 L1473,612 L1476,588 L1479,609 L1482,597 L1485,603 L1488,591 L1491,615 L1494,588 L1497,606 L1500,594 L1503,612 L1506,588 L1509,609 L1512,597 L1515,600 L1518,591 L1521,606 L1524,588 L1527,612 L1530,594 L1533,603 L1536,591 L1539,609 L1542,588 L1545,606 L1548,597 L1551,600 L1554,591 L1557,612 L1560,588 L1563,609 L1566,597 L1569,603 L1572,591 L1575,615 L1578,588 L1581,606 L1584,594 L1587,612 L1590,588 L1593,609 L1596,597 L1599,600 L1602,591 L1605,606 L1608,588 L1611,612 L1614,594 L1617,603 L1620,591 L1623,609 L1626,588 L1629,606 L1632,597 L1635,600 L1638,591 L1641,612 L1644,588 L1647,609 L1650,597 L1653,603 L1656,591 L1659,615 L1662,588 L1665,606 L1668,594 L1671,612 L1674,588 L1677,609 L1680,597 L1683,600 L1686,591 L1689,606 L1692,588 L1695,612 L1698,594 L1701,603 L1704,591 L1707,609 L1710,588 L1713,606 L1716,597 L1719,600 L1722,591 L1725,612 L1728,588 L1731,609 L1734,597 L1737,603 L1740,591 L1743,615 L1746,588 L1749,606 L1752,594 L1755,612 L1758,588 L1761,609 L1764,597 L1767,600 L1770,591 L1773,606 L1776,588 L1779,612 L1782,594 L1785,603 L1788,591 L1791,609 L1794,588 L1797,606 L1800,597 L1803,600 L1806,591 L1809,612 L1812,588 L1815,609 L1818,597 L1821,603 L1824,591 L1827,615 L1830,588 L1833,606 L1836,594 L1839,612 L1842,588 L1845,609 L1848,597 L1851,600 L1854,591 L1857,606 L1860,588 L1863,612 L1866,594 L1869,603 L1872,591 L1875,609 L1878,588 L1881,606 L1884,597 L1887,600 L1890,591 L1893,612 L1896,588 L1899,609 L1902,597 L1905,603 L1908,591 L1911,615 L1914,588 L1917,606 L1920,594"
                stroke="url(#eegGradient)" 
                strokeWidth="1" 
                fill="none" 
                style={{
                  opacity: 0.25,
                  animation: 'eeg-flow 6s ease-in-out infinite',
                  animationDelay: '2s',
                  filter: 'drop-shadow(0 0 2px #00d4ff)',
                  strokeLinecap: 'round'
                }} />
                
          {/* EEG waves spreading across entire page - graph style */}
          <path d="M0,200 L20,180 L40,220 L60,170 L80,230 L100,160 L120,240 L140,180 L160,200 L180,190 L200,210 L220,185 L240,215 L260,175 L280,225 L300,190 L320,230 L340,170 L360,240 L380,185 L400,220 L420,160 L440,250 L460,190 L480,210 L500,180 L520,230 L540,170 L560,240 L580,185 L600,220 L620,175 L640,235 L660,190 L680,215 L700,180 L720,225 L740,175 L760,235 L780,190 L800,215 L820,180 L840,225 L860,175 L880,235 L900,190 L920,215 L940,180 L960,225 L980,175 L1000,235 L1020,190 L1040,215 L1060,180 L1080,225 L1100,175 L1120,235 L1140,190 L1160,215 L1180,180 L1200,225" 
                stroke="url(#eegGradient)" 
                strokeWidth="2" 
                fill="none" 
                style={{opacity: 0.1}} />
          
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
      
      {/* Subtle bottom fade - lowered z-index */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default HeroXBrainer;
