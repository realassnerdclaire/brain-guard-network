
import { useState, useEffect } from 'react';

const HeroXBrainer = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    console.log('🎨 HeroXBrainer component rendering with color animation!');
    
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getGradientColor = () => {
    const colors = [
      'from-blue-400 to-purple-600',
      'from-purple-500 to-pink-500', 
      'from-pink-400 to-red-400',
      'from-red-400 to-orange-400',
      'from-orange-400 to-yellow-400',
      'from-yellow-400 to-blue-400'
    ];
    return colors[animationPhase];
  };

  return (
    <section className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Neural network background with animated EEG patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="eegGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#8B5CF6', stopOpacity: 1.0}} />
              <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
            </linearGradient>
            <linearGradient id="eegGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#06B6D4', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#3B82F6', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#06B6D4', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          {/* Animated EEG waveforms */}
          <path
            d="M-100,100 L0,105 L20,80 L40,120 L60,90 L80,110 L100,85 L140,125 L180,95 L220,105 L260,75 L300,130 L340,100 L380,115 L420,80 L460,120 L500,95 L540,105 L580,85 L620,125 L660,100 L700,115 L740,90 L780,110 L820,85 L860,125 L900,100 L940,115 L980,80 L1020,120 L1060,95 L1100,105 L1140,85 L1180,125 L1220,100 L1260,115 L1300,90 L1340,110 L1380,85 L1420,125 L1460,100 L1500,115 L1540,80 L1580,120 L1620,95 L1660,105 L1700,85 L1740,125 L1780,100 L1820,115 L1860,90 L1900,110 L1940,85 L1980,125 L2020,100"
            stroke="url(#eegGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
            style={{
              animation: 'eegFlow 8s linear infinite'
            }}
          />
          
          <path
            d="M-100,200 L0,195 L25,220 L50,185 L75,210 L100,190 L125,215 L160,180 L195,205 L230,195 L265,220 L300,175 L335,200 L370,190 L405,215 L440,180 L475,205 L510,195 L545,220 L580,175 L615,200 L650,190 L685,215 L720,180 L755,205 L790,195 L825,220 L860,175 L895,200 L930,190 L965,215 L1000,180 L1035,205 L1070,195 L1105,220 L1140,175 L1175,200 L1210,190 L1245,215 L1280,180 L1315,205 L1350,195 L1385,220 L1420,175 L1455,200 L1490,190 L1525,215 L1560,180 L1595,205 L1630,195 L1665,220 L1700,175 L1735,200 L1770,190 L1805,215 L1840,180 L1875,205 L1910,195 L1945,220 L1980,175 L2015,200"
            stroke="url(#eegGradient2)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            style={{
              animation: 'eegFlow 12s linear infinite reverse'
            }}
          />
          
          {/* Bottom EEG patterns */}
          <path
            d="M-100,900 L0,905 L15,930 L30,885 L45,915 L60,895 L75,925 L100,875 L125,910 L150,900 L175,935 L200,870 L225,905 L250,895 L275,925 L300,875 L325,910 L350,900 L375,935 L400,870 L425,905 L450,895 L475,925 L500,875 L525,910 L550,900 L575,935 L600,870 L625,905 L650,895 L675,925 L700,875 L725,910 L750,900 L775,935 L800,870 L825,905 L850,895 L875,925 L900,875 L925,910 L950,900 L975,935 L1000,870 L1025,905 L1050,895 L1075,925 L1100,875 L1125,910 L1150,900 L1175,935 L1200,870 L1225,905 L1250,895 L1275,925 L1300,875 L1325,910 L1350,900 L1375,935 L1400,870 L1425,905 L1450,895 L1475,925 L1500,875 L1525,910 L1550,900 L1575,935 L1600,870 L1625,905 L1650,895 L1675,925 L1700,875 L1725,910 L1750,900 L1775,935 L1800,870 L1825,905 L1850,895 L1875,925 L1900,875 L1925,910 L1950,900 L1975,935"
            stroke="#3B82F6"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
            style={{
              animation: 'eegFlow 15s linear infinite'
            }}
          />
          
          {/* Top EEG patterns */}
          <path
            d="M-100,980 L0,985 L10,1010 L20,975 L30,1005 L40,985 L50,1015 L60,970 L70,1000 L80,985 L90,1020 L100,965 L110,995 L120,985 L130,1015 L140,970 L150,1000 L160,985 L170,1020 L180,965 L190,995 L200,985 L210,1015 L220,970 L230,1000 L240,985 L250,1020 L260,965 L270,995 L280,985 L290,1015 L300,970 L310,1000 L320,985 L330,1020 L340,965 L350,995 L360,985 L370,1015 L380,970 L390,1000 L400,985 L410,1020 L420,965 L430,995 L440,985 L450,1015 L460,970 L470,1000 L480,985 L490,1020 L500,965 L510,995 L520,985 L530,1015 L540,970 L550,1000 L560,985 L570,1020 L580,965 L590,995 L600,985 L610,1015 L620,970 L630,1000 L640,985 L650,1020 L660,965 L670,995 L680,985 L690,1015 L700,970 L710,1000 L720,985 L730,1020 L740,965 L750,995 L760,985 L770,1015 L780,970 L790,1000 L800,985 L810,1020 L820,965 L830,995 L840,985 L850,1015 L860,970 L870,1000 L880,985 L890,1020 L900,965 L910,995 L920,985 L930,1015 L940,970 L950,1000 L960,985 L970,1020 L980,965 L990,995 L1000,985"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            style={{
              animation: 'eegFlow 10s linear infinite reverse'
            }}
          />
        </svg>
      </div>

      {/* Header with logo */}
      <div className="flex items-center justify-between p-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.07 2.07 0 0 1-2.44-2.44 2.07 2.07 0 0 1-2.44-2.44 2.07 2.07 0 0 1-2.44-2.44A2.5 2.5 0 0 1 2.5 9.5z"/>
              <path d="M12 4.5L19.32 8a2 2 0 0 1 1.18 1.84L20 12l-.5 2.16a2 2 0 0 1-1.18 1.84L12 19.5"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">XBrainer AI</h1>
            <p className="text-sm text-gray-400">Securing Neural Data in Real Time</p>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className={`bg-gradient-to-r ${getGradientColor()} bg-clip-text text-transparent transition-all duration-2000`}>
              Secure Neural Data Before It's Too Late
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            As brain-computer devices become more common, the risk of brain data being misused is growing. XBrainer AI makes tools to keep this data safe.
          </p>
          
          <div className="space-y-4">
            <button className="w-full md:w-auto px-8 py-4 bg-gray-700 text-white font-semibold text-lg rounded-full hover:bg-gray-600 transition-all duration-300 border border-gray-600">
              JOIN THE WAITLIST
            </button>
            <button className="w-full md:w-auto px-8 py-4 border-2 border-gray-500 text-gray-300 font-semibold text-lg rounded-full hover:bg-gray-500/10 transition-all duration-300 md:ml-4">
              SEE THE DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="relative z-10 p-6">
        <div className="flex justify-center space-x-8 text-gray-400 text-sm font-medium">
          <a href="#problem" className="hover:text-white transition-colors">PROBLEM</a>
          <a href="#urgency" className="hover:text-white transition-colors">URGENCY</a>
          <a href="#solution" className="hover:text-white transition-colors">SOLUTION</a>
          <a href="#edge" className="hover:text-white transition-colors">OUR EDGE</a>
        </div>
      </div>
    </section>
  );
};

export default HeroXBrainer;
