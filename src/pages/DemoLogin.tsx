import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DemoLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Demo credentials
  const DEMO_PASSWORD = 'xbrainer_demo_view_admin';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === DEMO_PASSWORD) {
      // Success - redirect to demo page
      localStorage.setItem('demo_authenticated', 'true');
      navigate('/demo');
    } else {
      setError('Invalid credentials. Access denied.');
    }
    
    setIsLoading(false);
  };

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
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          to="/"
          className="flex items-center gap-2 text-white bg-black/80 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 hover:bg-black/90 hover:border-white/30 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Demo Access
              </h1>
              <p className="text-lg text-white/80">
                Enter your credentials to access the XBrainer AI demo platform.
              </p>
            </div>

            <Card className="border-white/20 bg-black/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Demo Login</CardTitle>
                <CardDescription className="text-white/70">
                  Use the demo credentials below to access the platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Demo Credentials Display */}
                <div className="mb-6 p-4 bg-blue-500/20 border border-blue-500/40 rounded-lg">
                  <h3 className="text-sm font-semibold text-blue-400 mb-2">Demo Credentials:</h3>
                   <div className="space-y-1 text-sm text-white/80">
                     <p><strong>Email:</strong> Any email address</p>
                     <p><strong>Password:</strong> xbrainer_demo_view_admin</p>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="border-white/20 bg-black/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white">
                      Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="border-white/20 bg-black/20 text-white placeholder:text-white/50 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="p-4 rounded-md flex items-center gap-3 bg-red-500/20 border border-red-500/40">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-medium">
                        {error}
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 text-base font-semibold"
                    variant="hero"
                  >
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Authenticating...
                      </>
                    ) : (
                      'Access Demo'
                    )}
                  </Button>

                  <p className="text-xs text-white/60 text-center">
                    This is a demo environment. All data is simulated for demonstration purposes.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}