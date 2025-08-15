import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Loader2, Menu, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

interface WaitlistFormData {
  full_name: string;
  email: string;
  affiliation: string;
  use_case: string;
  consent: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export default function Waitlist() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<WaitlistFormData>({
    full_name: '',
    email: '',
    affiliation: '',
    use_case: '',
    consent: false,
  });

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "VISION", path: "/vision" },
    { name: "OVERVIEW", path: "/overview" },
    { name: "COMPLIANCE & STANDARDS", path: "/compliance" },
    { name: "FAQ", path: "/faq" },
    { name: "CONTACT", path: "/contact" },
    { name: "SEE DEMO", path: "/demo-login" }
  ];

  // Extract UTM parameters from URL
  const getUtmParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined, 
      utm_campaign: urlParams.get('utm_campaign') || undefined,
    };
  };

  const waitlistMutation = useMutation({
    mutationFn: async (data: WaitlistFormData) => {
      const utmParams = getUtmParams();
      
      console.log('Submitting waitlist data:', { ...data, ...utmParams });
      
      const { data: result, error } = await supabase.functions.invoke('waitlist', {
        body: {
          ...data,
          ...utmParams,
        },
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to submit to waitlist');
      }

      console.log('Waitlist submission successful:', result);
      return result;
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    
    waitlistMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof WaitlistFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isSubmitDisabled = !formData.consent || waitlistMutation.isPending;

  // Render waitlist page with dropdown menu
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

      {/* Fixed Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between p-4 md:p-6">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
                alt="XBrainer AI logo" 
                className="h-10 md:h-12 w-auto rounded-lg" 
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))',
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-sm -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight leading-tight text-white">
                XBrainer AI
              </span>
              <span className="text-xs md:text-sm font-medium text-white">
                Securing Neural Data in Real Time
              </span>
            </div>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white bg-black/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 hover:bg-black/90 hover:border-white/30 transition-all duration-300 shadow-lg"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span className="text-sm font-medium tracking-widest">MENU</span>
          </button>
        </div>
      </div>

      {/* Side Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-56 bg-black/90 backdrop-blur-md border-l border-white/20 z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 pt-16">
          <nav>
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block w-full text-left text-white/80 hover:text-white py-1.5 px-2 text-sm font-medium transition-colors hover:bg-white/5 rounded"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Join the Waitlist
              </h1>
              <p className="text-lg text-white/80">
                Be among the first to experience the future of brain-computer interfaces.
                Sign up now to get early access and updates.
              </p>
            </div>

            <Card className="border-white/20 bg-black/30 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Early Access Registration</CardTitle>
                <CardDescription className="text-white/70">
                  Fill out the form below to secure your spot on our waitlist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="full_name"
                      type="text"
                      value={formData.full_name}
                      onChange={(e) => handleInputChange('full_name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-white/20 bg-black/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="border-white/20 bg-black/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliation" className="text-white">
                      Affiliation (Optional)
                    </Label>
                    <Input
                      id="affiliation"
                      type="text"
                      value={formData.affiliation}
                      onChange={(e) => handleInputChange('affiliation', e.target.value)}
                      placeholder="Company, University, or Organization"
                      className="border-white/20 bg-black/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="use_case" className="text-white">
                      Primary Use Case (Optional)
                    </Label>
                    <Textarea
                      id="use_case"
                      value={formData.use_case}
                      onChange={(e) => handleInputChange('use_case', e.target.value)}
                      placeholder="How do you plan to use brain-computer interface technology?"
                      rows={4}
                      className="border-white/20 bg-black/20 text-white placeholder:text-white/50"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                      className="border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="consent" className="text-sm text-white cursor-pointer">
                        I consent to receive updates and communications about XBrainer *
                      </Label>
                      <p className="text-xs text-white/60">
                        By checking this box, you agree to receive product updates, early access notifications, 
                        and relevant information about our brain-computer interface technology.
                      </p>
                    </div>
                  </div>

                  {(waitlistMutation.isSuccess || waitlistMutation.isError) && (
                    <div className={`p-4 rounded-md flex items-center gap-3 ${
                      waitlistMutation.isSuccess 
                        ? 'bg-green-500/20 border border-green-500/40' 
                        : 'bg-red-500/20 border border-red-500/40'
                    }`}>
                      {waitlistMutation.isSuccess ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-green-400 font-medium">
                            {waitlistMutation.data?.message || 'Successfully added to waitlist!'}
                          </span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-5 w-5 text-red-400" />
                          <span className="text-red-400 font-medium">
                            {waitlistMutation.error?.message || 'Failed to submit. Please try again.'}
                          </span>
                        </>
                      )}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="w-full h-12 text-base font-semibold"
                    variant="hero"
                  >
                    {waitlistMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining Waitlist...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>

                  <p className="text-xs text-white/60 text-center">
                    We respect your privacy. Your information will only be used to contact you about XBrainer updates.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}