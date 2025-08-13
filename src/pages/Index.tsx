
import { useState } from "react";
import { Menu } from "lucide-react";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";

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
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="min-h-screen w-full">
        <main className="relative">
          {/* Menu button in top right */}
          <header className="absolute left-0 right-0 top-0 z-30">
            <div className="container flex items-center justify-end py-4 sm:py-6 px-4 sm:px-6">
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white text-base sm:text-lg font-medium tracking-widest hover:text-white/80 transition-colors touch-manipulation min-h-[44px] flex items-center gap-2"
                >
                  <Menu size={20} />
                  MENU
                </button>
                
                {/* Dropdown menu */}
                {isMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 sm:w-64 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      {menuItems.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 sm:px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium touch-manipulation"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </header>
          <HeroXBrainer />
          
          {/* Problem Section */}
          <section id="problem" className="min-h-screen bg-black flex items-center justify-center py-16 relative overflow-hidden">
            {/* EEG signal background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <svg className="w-full h-full opacity-20" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="problemEegGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                  </linearGradient>
                  <linearGradient id="problemEegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* EEG wave pattern 1 */}
                <path d="M0,300 L4,308 L8,292 L12,312 L16,288 L20,316 L24,292 L28,300 L32,288 L36,312 L40,284 L44,308 L48,296 L52,304 L56,288 L60,316 L64,284 L68,312 L72,296 L76,300 L80,284 L84,320 L88,288 L92,308 L96,292 L100,316 L104,284 L108,312 L112,296 L116,300 L120,288 L124,308 L128,284 L132,316 L136,292 L140,304 L144,288 L148,312 L152,284 L156,308 L160,296 L164,300 L168,288 L172,316 L176,284 L180,312 L184,296 L188,304 L192,288 L196,320 L200,284 L204,308 L208,292 L212,316 L216,284 L220,312 L224,296 L228,300 L232,288 L236,308 L240,284 L244,316 L248,292 L252,304 L256,288 L260,312 L264,284 L268,308 L272,296 L276,300 L280,288 L284,316 L288,284 L292,312 L296,296 L300,304 L304,288 L308,320 L312,284 L316,308 L320,292 L324,316 L328,284 L332,312 L336,296 L340,300 L344,288 L348,308 L352,284 L356,316 L360,292 L364,304 L368,288 L372,312 L376,284 L380,308 L384,296 L388,300 L392,288 L396,316 L400,284 L404,312 L408,296 L412,304 L416,288 L420,320 L424,284 L428,308 L432,292 L436,316 L440,284 L444,312 L448,296 L452,300 L456,288 L460,308 L464,284 L468,316 L472,292 L476,304 L480,288 L484,312 L488,284 L492,308 L496,296 L500,300 L504,288 L508,316 L512,284 L516,312 L520,296 L524,304 L528,288 L532,320 L536,284 L540,308 L544,292 L548,316 L552,284 L556,312 L560,296 L564,300 L568,288 L572,308 L576,284 L580,316 L584,292 L588,304 L592,288 L596,312 L600,284 L604,308 L608,296 L612,300 L616,288 L620,316 L624,284 L628,312 L632,296 L636,304 L640,288 L644,320 L648,284 L652,308 L656,292 L660,316 L664,284 L668,312 L672,296 L676,300 L680,288 L684,308 L688,284 L692,316 L696,292 L700,304 L704,288 L708,312 L712,284 L716,308 L720,296 L724,300 L728,288 L732,316 L736,284 L740,312 L744,296 L748,304 L752,288 L756,320 L760,284 L764,308 L768,292 L772,316 L776,284 L780,312 L784,296 L788,300 L792,288 L796,308 L800,284 L804,316 L808,292 L812,304 L816,288 L820,312 L824,284 L828,308 L832,296 L836,300 L840,288 L844,316 L848,284 L852,312 L856,296 L860,304 L864,288 L868,320 L872,284 L876,308 L880,292 L884,316 L888,284 L892,312 L896,296 L900,300 L904,288 L908,308 L912,284 L916,316 L920,292 L924,304 L928,288 L932,312 L936,284 L940,308 L944,296 L948,300 L952,288 L956,316 L960,284 L964,312 L968,296 L972,304 L976,288 L980,320 L984,284 L988,308 L992,292 L996,316 L1000,284 L1004,312 L1008,296 L1012,300 L1016,288 L1020,308 L1024,284 L1028,316 L1032,292 L1036,304 L1040,288 L1044,312 L1048,284 L1052,308 L1056,296 L1060,300 L1064,288 L1068,316 L1072,284 L1076,312 L1080,296 L1084,304 L1088,288 L1092,320 L1096,284 L1100,308 L1104,292 L1108,316 L1112,284 L1116,312 L1120,296 L1124,300 L1128,288 L1132,308 L1136,284 L1140,316 L1144,292 L1148,304 L1152,288 L1156,312 L1160,284 L1164,308 L1168,296 L1172,300 L1176,288 L1180,316 L1184,284 L1188,312 L1192,296 L1196,304 L1200,288 L1204,320 L1208,284 L1212,308 L1216,292 L1220,316 L1224,284 L1228,312 L1232,296 L1236,300 L1240,288 L1244,308 L1248,284 L1252,316 L1256,292 L1260,304 L1264,288 L1268,312 L1272,284 L1276,308 L1280,296 L1284,300 L1288,288 L1292,316 L1296,284 L1300,312 L1304,296 L1308,304 L1312,288 L1316,320 L1320,284 L1324,308 L1328,292 L1332,316 L1336,284 L1340,312 L1344,296 L1348,300 L1352,288 L1356,308 L1360,284 L1364,316 L1368,292 L1372,304 L1376,288 L1380,312 L1384,284 L1388,308 L1392,296 L1396,300 L1400,288 L1404,316 L1408,284 L1412,312 L1416,296 L1420,304 L1424,288 L1428,320 L1432,284 L1436,308 L1440,292 L1444,316 L1448,284 L1452,312 L1456,296 L1460,300 L1464,288 L1468,308 L1472,284 L1476,316 L1480,292 L1484,304 L1488,288 L1492,312 L1496,284 L1500,308 L1504,296 L1508,300 L1512,288 L1516,316 L1520,284 L1524,312 L1528,296 L1532,304 L1536,288 L1540,320 L1544,284 L1548,308 L1552,292 L1556,316 L1560,284 L1564,312 L1568,296 L1572,300 L1576,288 L1580,308 L1584,284 L1588,316 L1592,292 L1596,304 L1600,288 L1604,312 L1608,284 L1612,308 L1616,296 L1620,300 L1624,288 L1628,316 L1632,284 L1636,312 L1640,296 L1644,304 L1648,288 L1652,320 L1656,284 L1660,308 L1664,292 L1668,316 L1672,284 L1676,312 L1680,296 L1684,300 L1688,288 L1692,308 L1696,284 L1700,316 L1704,292 L1708,304 L1712,288 L1716,312 L1720,284 L1724,308 L1728,296 L1732,300 L1736,288 L1740,316 L1744,284 L1748,312 L1752,296 L1756,304 L1760,288 L1764,320 L1768,284 L1772,308 L1776,292 L1780,316 L1784,284 L1788,312 L1792,296 L1796,300 L1800,288 L1804,308 L1808,284 L1812,316 L1816,292 L1820,304 L1824,288 L1828,312 L1832,284 L1836,308 L1840,296 L1844,300 L1848,288 L1852,316 L1856,284 L1860,312 L1864,296 L1868,304 L1872,288 L1876,320 L1880,284 L1884,308 L1888,292 L1892,316 L1896,284 L1900,312 L1904,296 L1908,300 L1912,288 L1916,308 L1920,284"
                      stroke="url(#problemEegGradient1)" 
                      strokeWidth="2" 
                      fill="none" 
                      style={{
                        opacity: 0.4,
                        animation: 'eeg-flow 6s ease-in-out infinite',
                        filter: 'drop-shadow(0 0 4px #00d4ff)',
                        strokeLinecap: 'round'
                      }} />
                
                {/* EEG wave pattern 2 */}
                <path d="M0,500 L4,505 L8,495 L12,508 L16,492 L20,510 L24,488 L28,504 L32,496 L36,507 L40,493 L44,511 L48,489 L52,503 L56,497 L60,506 L64,494 L68,509 L72,491 L76,505 L80,495 L84,508 L88,492 L92,512 L96,488 L100,504 L104,496 L108,507 L112,493 L116,510 L120,490 L124,503 L128,497 L132,506 L136,494 L140,509 L144,491 L148,505 L152,495 L156,508 L160,492 L164,511 L168,489 L172,504 L176,496 L180,507 L184,493 L188,510 L192,490 L196,503 L200,497 L204,506 L208,494 L212,509 L216,491 L220,505 L224,495 L228,508 L232,492 L236,512 L240,488 L244,504 L248,496 L252,507 L256,493 L260,510 L264,490 L268,503 L272,497 L276,506 L280,494 L284,509 L288,491 L292,505 L296,495 L300,508 L304,492 L308,511 L312,489 L316,504 L320,496 L324,507 L328,493 L332,510 L336,490 L340,503 L344,497 L348,506 L352,494 L356,509 L360,491 L364,505 L368,495 L372,508 L376,492 L380,512 L384,488 L388,504 L392,496 L396,507 L400,493 L404,510 L408,490 L412,503 L416,497 L420,506 L424,494 L428,509 L432,491 L436,505 L440,495 L444,508 L448,492 L452,511 L456,489 L460,504 L464,496 L468,507 L472,493 L476,510 L480,490 L484,503 L488,497 L492,506 L496,494 L500,509 L504,491 L508,505 L512,495 L516,508 L520,492 L524,512 L528,488 L532,504 L536,496 L540,507 L544,493 L548,510 L552,490 L556,503 L560,497 L564,506 L568,494 L572,509 L576,491 L580,505 L584,495 L588,508 L592,492 L596,511 L600,489 L604,504 L608,496 L612,507 L616,493 L620,510 L624,490 L628,503 L632,497 L636,506 L640,494 L644,509 L648,491 L652,505 L656,495 L660,508 L664,492 L668,512 L672,488 L676,504 L680,496 L684,507 L688,493 L692,510 L696,490 L700,503 L704,497 L708,506 L712,494 L716,509 L720,491 L724,505 L728,495 L732,508 L736,492 L740,511 L744,489 L748,504 L752,496 L756,507 L760,493 L764,510 L768,490 L772,503 L776,497 L780,506 L784,494 L788,509 L792,491 L796,505 L800,495 L804,508 L808,492 L812,512 L816,488 L820,504 L824,496 L828,507 L832,493 L836,510 L840,490 L844,503 L848,497 L852,506 L856,494 L860,509 L864,491 L868,505 L872,495 L876,508 L880,492 L884,511 L888,489 L892,504 L896,496 L900,507 L904,493 L908,510 L912,490 L916,503 L920,497 L924,506 L928,494 L932,509 L936,491 L940,505 L944,495 L948,508 L952,492 L956,512 L960,488 L964,504 L968,496 L972,507 L976,493 L980,510 L984,490 L988,503 L992,497 L996,506 L1000,494 L1004,509 L1008,491 L1012,505 L1016,495 L1020,508 L1024,492 L1028,511 L1032,489 L1036,504 L1040,496 L1044,507 L1048,493 L1052,510 L1056,490 L1060,503 L1064,497 L1068,506 L1072,494 L1076,509 L1080,491 L1084,505 L1088,495 L1092,508 L1096,492 L1100,512 L1104,488 L1108,504 L1112,496 L1116,507 L1120,493 L1124,510 L1128,490 L1132,503 L1136,497 L1140,506 L1144,494 L1148,509 L1152,491 L1156,505 L1160,495 L1164,508 L1168,492 L1172,511 L1176,489 L1180,504 L1184,496 L1188,507 L1192,493 L1196,510 L1200,490 L1204,503 L1208,497 L1212,506 L1216,494 L1220,509 L1224,491 L1228,505 L1232,495 L1236,508 L1240,492 L1244,512 L1248,488 L1252,504 L1256,496 L1260,507 L1264,493 L1268,510 L1272,490 L1276,503 L1280,497 L1284,506 L1288,494 L1292,509 L1296,491 L1300,505 L1304,495 L1308,508 L1312,492 L1316,511 L1320,489 L1324,504 L1328,496 L1332,507 L1336,493 L1340,510 L1344,490 L1348,503 L1352,497 L1356,506 L1360,494 L1364,509 L1368,491 L1372,505 L1376,495 L1380,508 L1384,492 L1388,512 L1392,488 L1396,504 L1400,496 L1404,507 L1408,493 L1412,510 L1416,490 L1420,503 L1424,497 L1428,506 L1432,494 L1436,509 L1440,491 L1444,505 L1448,495 L1452,508 L1456,492 L1460,511 L1464,489 L1468,504 L1472,496 L1476,507 L1480,493 L1484,510 L1488,490 L1492,503 L1496,497 L1500,506 L1504,494 L1508,509 L1512,491 L1516,505 L1520,495 L1524,508 L1528,492 L1532,512 L1536,488 L1540,504 L1544,496 L1548,507 L1552,493 L1556,510 L1560,490 L1564,503 L1568,497 L1572,506 L1576,494 L1580,509 L1584,491 L1588,505 L1592,495 L1596,508 L1600,492 L1604,511 L1608,489 L1612,504 L1616,496 L1620,507 L1624,493 L1628,510 L1632,490 L1636,503 L1640,497 L1644,506 L1648,494 L1652,509 L1656,491 L1660,505 L1664,495 L1668,508 L1672,492 L1676,512 L1680,488 L1684,504 L1688,496 L1692,507 L1696,493 L1700,510 L1704,490 L1708,503 L1712,497 L1716,506 L1720,494 L1724,509 L1728,491 L1732,505 L1736,495 L1740,508 L1744,492 L1748,511 L1752,489 L1756,504 L1760,496 L1764,507 L1768,493 L1772,510 L1776,490 L1780,503 L1784,497 L1788,506 L1792,494 L1796,509 L1800,491 L1804,505 L1808,495 L1812,508 L1816,492 L1820,512 L1824,488 L1828,504 L1832,496 L1836,507 L1840,493 L1844,510 L1848,490 L1852,503 L1856,497 L1860,506 L1864,494 L1868,509 L1872,491 L1876,505 L1880,495 L1884,508 L1888,492 L1892,511 L1896,489 L1900,504 L1904,496 L1908,507 L1912,493 L1916,510 L1920,490"
                      stroke="url(#problemEegGradient2)" 
                      strokeWidth="1.5" 
                      fill="none" 
                      style={{
                        opacity: 0.3,
                        animation: 'eeg-flow 8s ease-in-out infinite',
                        animationDelay: '2s',
                        filter: 'drop-shadow(0 0 3px #a855f7)',
                        strokeLinecap: 'round'
                      }} />
              </svg>
            </div>
            
            {/* Subtle background grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[linear-gradient(rgba(0,212,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
            
            <div className="container px-4 max-w-7xl relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                  Problem
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto" />
              </div>
              
              {/* Problem Description */}
              <div className="mb-16 animate-fade-in">
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[#a855f7] rounded-full animate-pulse" />
                    <span className="text-[#a855f7] font-medium text-sm uppercase tracking-wider">Current State</span>
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                    Brain-computer devices send raw brain (EEG) and motion data. Many pipelines still miss four basics: 
                    <span className="text-white font-semibold"> secure transport</span>, 
                    <span className="text-white font-semibold"> packet checks</span> (timing and signal errors), 
                    <span className="text-white font-semibold"> access control tied to user consent</span>, and a 
                    <span className="text-white font-semibold"> permanent access log</span>.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    Without this, bad data reaches apps, unauthorized reads happen, and teams can't show compliance—causing 
                    <span className="text-[#a855f7] font-semibold"> exposure risk</span>, 
                    <span className="text-[#a855f7] font-semibold"> unreliable results</span>, and 
                    <span className="text-[#a855f7] font-semibold"> stalled deployments</span>. 
                    As headsets move from labs to everyday use, this gap is immediate.
                  </p>
                </div>
              </div>

              {/* Four Missing Basics */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">🔒</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Secure Transport</h3>
                  <p className="text-white/60 text-sm">Missing encryption</p>
                </div>
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">📊</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Packet Checks</h3>
                  <p className="text-white/60 text-sm">Timing & signal errors</p>
                </div>
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">👤</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Access Control</h3>
                  <p className="text-white/60 text-sm">Tied to user consent</p>
                </div>
                <div className="border border-[#a855f7]/20 bg-[#a855f7]/5 rounded-xl p-6 text-center animate-fade-in">
                  <div className="w-12 h-12 bg-[#a855f7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#a855f7] text-xl">📝</span>
                  </div>
                  <h3 className="text-white font-bold mb-2">Access Log</h3>
                  <p className="text-white/60 text-sm">Permanent recording</p>
                </div>
              </div>

              {/* Solution */}
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    How XBrainer AI helps
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto" />
                </div>
                
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse" />
                    <span className="text-[#00d4ff] font-medium text-sm uppercase tracking-wider">XBrainer Solution</span>
                  </div>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    We add a <span className="text-[#00d4ff] font-semibold">software layer between device and app</span> that 
                    <span className="text-white font-semibold"> checks each packet in real time</span>, 
                    <span className="text-white font-semibold"> drops corrupted data</span>, 
                    <span className="text-white font-semibold"> controls who can read the stream</span>, and 
                    <span className="text-white font-semibold"> records every access in a permanent log</span>.
                  </p>
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
