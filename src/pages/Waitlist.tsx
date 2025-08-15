import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NavigationLayout from '@/components/marketing/NavigationLayout';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
  const [formData, setFormData] = useState<WaitlistFormData>({
    full_name: '',
    email: '',
    affiliation: '',
    use_case: '',
    consent: false,
  });

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
      
      const response = await fetch('https://sievygiqahkmahihoeln.supabase.co/functions/v1/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          ...utmParams,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit');
      }

      return response.json();
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

      {/* Logo and Company Info */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-4">
        <img 
          src="/lovable-uploads/a84358e6-b8f3-4172-a059-3c05cad36874.png" 
          alt="XBrainer AI logo" 
          className="h-12 w-auto mix-blend-screen opacity-90 rounded-lg" 
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight leading-tight text-white">
            XBrainer AI
          </span>
          <span className="text-sm font-medium text-white/70">
            Securing Neural Data in Real Time
          </span>
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
    </div>
  );
}