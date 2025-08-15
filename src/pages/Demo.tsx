import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Brain, Shield, Zap, LogOut, Play, Pause, RotateCcw } from 'lucide-react';

export default function Demo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [signalStrength, setSignalStrength] = useState(85);
  const [encryptionStatus, setEncryptionStatus] = useState('Active');
  const [packetsProcessed, setPacketsProcessed] = useState(2847);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const authenticated = localStorage.getItem('demo_authenticated');
    if (!authenticated) {
      navigate('/demo-login');
      return;
    }
    setIsAuthenticated(true);

    // Simulate real-time data updates
    const interval = setInterval(() => {
      if (isRecording) {
        setSignalStrength(prev => Math.max(60, Math.min(100, prev + (Math.random() - 0.5) * 10)));
        setPacketsProcessed(prev => prev + Math.floor(Math.random() * 5) + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, isRecording]);

  const handleLogout = () => {
    localStorage.removeItem('demo_authenticated');
    navigate('/demo-login');
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setEncryptionStatus('Active');
    } else {
      setEncryptionStatus('Standby');
    }
  };

  const resetDemo = () => {
    setIsRecording(false);
    setSignalStrength(85);
    setEncryptionStatus('Standby');
    setPacketsProcessed(2847);
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/lovable-uploads/27f96d4c-bee3-4923-8c3e-57550bedb369.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
              alt="XBrainer AI logo" 
              className="h-8 w-auto rounded-lg" 
            />
            <div>
              <span className="text-lg font-bold text-white">XBrainer AI Demo</span>
              <div className="text-xs text-green-400">● Live Demo Environment</div>
            </div>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline" 
            size="sm"
            className="text-white border-white/20 hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Real-Time Neural Data Security Platform
            </h1>
            <p className="text-lg text-white/80 mb-6">
              Live demonstration of XBrainer AI's brain-computer interface security layer
            </p>
            
            {/* Control Panel */}
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                onClick={toggleRecording}
                className={`px-6 py-3 ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
              >
                {isRecording ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </Button>
              <Button 
                onClick={resetDemo}
                variant="outline"
                className="px-6 py-3 text-white border-white/20 hover:bg-white/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Demo
              </Button>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Signal Monitoring */}
            <Card className="border-white/20 bg-black/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  Signal Monitoring
                </CardTitle>
                <CardDescription className="text-white/70">
                  Real-time EEG signal quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/80">Signal Strength</span>
                      <Badge variant={signalStrength > 80 ? "default" : signalStrength > 60 ? "secondary" : "destructive"}>
                        {signalStrength}%
                      </Badge>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          signalStrength > 80 ? 'bg-green-500' : 
                          signalStrength > 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${signalStrength}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-white/60">
                    {isRecording ? 'Actively monitoring neural signals' : 'Signal monitoring paused'}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Encryption Status */}
            <Card className="border-white/20 bg-black/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Security Layer
                </CardTitle>
                <CardDescription className="text-white/70">
                  End-to-end encryption status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Encryption</span>
                    <Badge variant={encryptionStatus === 'Active' ? "default" : "secondary"}>
                      {encryptionStatus}
                    </Badge>
                  </div>
                  <div className="text-sm text-white/60">
                    <div className="flex justify-between">
                      <span>Algorithm:</span>
                      <span>AES-256</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Key Rotation:</span>
                      <span>Every 60s</span>
                    </div>
                  </div>
                  <div className="text-xs text-white/60">
                    All neural data streams encrypted in real-time
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packet Processing */}
            <Card className="border-white/20 bg-black/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  Data Processing
                </CardTitle>
                <CardDescription className="text-white/70">
                  Real-time packet validation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {packetsProcessed.toLocaleString()}
                    </div>
                    <div className="text-sm text-white/60">Packets Processed</div>
                  </div>
                  <div className="text-xs text-white/60 space-y-1">
                    <div className="flex justify-between">
                      <span>Validated:</span>
                      <span className="text-green-400">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Latency:</span>
                      <span className="text-blue-400">&lt;2ms</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Brain Activity Simulation */}
            <Card className="border-white/20 bg-black/30 backdrop-blur-md md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="w-5 h-5 text-pink-400" />
                  Neural Activity Visualization
                </CardTitle>
                <CardDescription className="text-white/70">
                  Simulated EEG waveforms with security monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/40 rounded-lg p-4 min-h-40 flex items-center justify-center">
                  {isRecording ? (
                    <div className="text-center">
                      <div className="animate-pulse text-green-400 mb-2">
                        ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲ ▼ ▲
                      </div>
                      <div className="text-white/60 text-sm">Simulated EEG waves - All data encrypted & validated</div>
                    </div>
                  ) : (
                    <div className="text-center text-white/40">
                      <Brain className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <div>Neural activity monitoring paused</div>
                      <div className="text-sm">Click "Start Recording" to begin</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/60 text-sm">
              This is a simulated demonstration of XBrainer AI's neural data security platform.
              <br />
              Real implementation would interface with actual EEG/BCI devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}