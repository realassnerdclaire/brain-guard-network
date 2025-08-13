import { Brain, Activity, ListChecks, HelpCircle, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import FeatureCards from "@/components/marketing/FeatureCards";
import HowItWorks from "@/components/marketing/HowItWorks";
import FAQ from "@/components/marketing/FAQ";
import CTASection from "@/components/marketing/CTASection";
import { startHoverAnimation, stopHoverAnimation } from "@/utils/letterAnimation";

// Sidebar showing a ladder-style menu on the right with content
export default function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="none" className="w-56 border-l bg-sidebar/90 backdrop-blur">
      <SidebarHeader>
        <SidebarGroupLabel className="text-sm">Menu</SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs">Sections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <button
                  className="flex items-center gap-2 w-full px-2 py-1.5 text-left text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm transition-colors"
                  onClick={(e) => {
                    // Vision click animation
                    console.log('🚀 VISION CLICKED - Starting letter animation');
                    
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['V', 'I', 'S', 'I', 'O', 'N'];
                    
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="vision-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                      ).join('');
                      
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`vision-letter-${letterIndex}`);
                            if (letterSpan) {
                              letterSpan.style.color = color;
                            }
                          }, letterIndex * 100 + colorIndex * 300);
                        });
                      });
                      
                      setTimeout(() => {
                        textSpan.innerHTML = 'Vision';
                        window.location.href = '#vision';
                      }, letters.length * 100 + colors.length * 300 + 1000);
                    }
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
                >
                  <Brain className="h-4 w-4" /> <span className="menu-text">Vision</span>
                </button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <button
                  className="flex items-center gap-2 w-full px-2 py-1.5 text-left text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm transition-colors"
                  onClick={(e) => {
                    // Features click animation
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['F', 'E', 'A', 'T', 'U', 'R', 'E', 'S'];
                    
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="features-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                      ).join('');
                      
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`features-letter-${letterIndex}`);
                            if (letterSpan) letterSpan.style.color = color;
                          }, letterIndex * 100 + colorIndex * 300);
                        });
                      });
                      
                      setTimeout(() => {
                        textSpan.innerHTML = 'Features';
                        window.location.href = '#features';
                      }, letters.length * 100 + colors.length * 300 + 1000);
                    }
                  }}
                  onMouseEnter={(e) => {
                    const interval = startHoverAnimation(e.currentTarget);
                    (e.currentTarget as any).hoverInterval = interval;
                  }}
                  onMouseLeave={(e) => {
                    if ((e.currentTarget as any).hoverInterval) {
                      stopHoverAnimation(e.currentTarget, (e.currentTarget as any).hoverInterval);
                      (e.currentTarget as any).hoverInterval = null;
                    }
                  }}
                >
                  <Activity className="h-4 w-4" /> <span className="menu-text">Features</span>
                </button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <button
                  className="flex items-center gap-2 w-full px-2 py-1.5 text-left text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm transition-colors"
                  onClick={(e) => {
                    // How it works click animation
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['H', 'O', 'W', ' ', 'I', 'T', ' ', 'W', 'O', 'R', 'K', 'S'];
                    
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="how-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter === ' ' ? '&nbsp;' : letter}</span>`
                      ).join('');
                      
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`how-letter-${letterIndex}`);
                            if (letterSpan && letter !== ' ') letterSpan.style.color = color;
                          }, letterIndex * 80 + colorIndex * 300);
                        });
                      });
                      
                      setTimeout(() => {
                        textSpan.innerHTML = 'How it works';
                        window.location.href = '#how';
                      }, letters.length * 80 + colors.length * 300 + 1000);
                    }
                  }}
                  onMouseEnter={(e) => {
                    const interval = startHoverAnimation(e.currentTarget);
                    (e.currentTarget as any).hoverInterval = interval;
                  }}
                  onMouseLeave={(e) => {
                    if ((e.currentTarget as any).hoverInterval) {
                      stopHoverAnimation(e.currentTarget, (e.currentTarget as any).hoverInterval);
                      (e.currentTarget as any).hoverInterval = null;
                    }
                  }}
                >
                  <ListChecks className="h-4 w-4" /> <span className="menu-text">How it works</span>
                </button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <button
                  className="flex items-center gap-2 w-full px-2 py-1.5 text-left text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm transition-colors"
                  onClick={(e) => {
                    // FAQ click animation
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['F', 'A', 'Q'];
                    
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="faq-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                      ).join('');
                      
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`faq-letter-${letterIndex}`);
                            if (letterSpan) letterSpan.style.color = color;
                          }, letterIndex * 100 + colorIndex * 300);
                        });
                      });
                      
                      setTimeout(() => {
                        textSpan.innerHTML = 'FAQ';
                        window.location.href = '#faq';
                      }, letters.length * 100 + colors.length * 300 + 1000);
                    }
                  }}
                  onMouseEnter={(e) => {
                    const interval = startHoverAnimation(e.currentTarget);
                    (e.currentTarget as any).hoverInterval = interval;
                  }}
                  onMouseLeave={(e) => {
                    if ((e.currentTarget as any).hoverInterval) {
                      stopHoverAnimation(e.currentTarget, (e.currentTarget as any).hoverInterval);
                      (e.currentTarget as any).hoverInterval = null;
                    }
                  }}
                >
                  <HelpCircle className="h-4 w-4" /> <span className="menu-text">FAQ</span>
                </button>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <button
                  className="flex items-center gap-2 w-full px-2 py-1.5 text-left text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm transition-colors"
                  onClick={(e) => {
                    // Contact click animation
                    const btn = e.currentTarget;
                    const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
                    const letters = ['C', 'O', 'N', 'T', 'A', 'C', 'T'];
                    
                    const textSpan = btn.querySelector('.menu-text');
                    if (textSpan) {
                      textSpan.innerHTML = letters.map((letter, i) => 
                        `<span id="contact-letter-${i}" style="display: inline-block; transition: color 0.3s ease; background: none !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; backdrop-filter: none !important; filter: none !important; transform: none !important; text-shadow: none !important; padding: 0 !important; margin: 0 !important;">${letter}</span>`
                      ).join('');
                      
                      letters.forEach((letter, letterIndex) => {
                        colors.forEach((color, colorIndex) => {
                          setTimeout(() => {
                            const letterSpan = document.getElementById(`contact-letter-${letterIndex}`);
                            if (letterSpan) letterSpan.style.color = color;
                          }, letterIndex * 100 + colorIndex * 300);
                        });
                      });
                      
                      setTimeout(() => {
                        textSpan.innerHTML = 'Contact';
                        window.location.href = '#cta';
                      }, letters.length * 100 + colors.length * 300 + 1000);
                    }
                  }}
                  onMouseEnter={(e) => {
                    const interval = startHoverAnimation(e.currentTarget);
                    (e.currentTarget as any).hoverInterval = interval;
                  }}
                  onMouseLeave={(e) => {
                    if ((e.currentTarget as any).hoverInterval) {
                      stopHoverAnimation(e.currentTarget, (e.currentTarget as any).hoverInterval);
                      (e.currentTarget as any).hoverInterval = null;
                    }
                  }}
                >
                  <Mail className="h-4 w-4" /> <span className="menu-text">Contact</span>
                </button>
              </SidebarMenuItem>
            </SidebarMenu>
            {/* Embed the section content directly below each menu entry */}
            <div className="px-2 pb-4">
              <section id="vision" className="pb-6">
                <div className="text-sm text-muted-foreground">
                  Today’s consumer EEG headsets broadcast raw neural signals with zero guardrails. XBrainer is the missing HTTPS layer—encrypts every packet, checks permissions before a read, authenticates with your brainprint, and writes an immutable audit log.
                </div>
              </section>
              <SidebarSeparator />
              <section id="features" className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2 text-sm"><Activity className="h-4 w-4" /> Features</div>
                <FeatureCards />
              </section>
              <SidebarSeparator />
              <section id="how" className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2 text-sm"><ListChecks className="h-4 w-4" /> How it works</div>
                <HowItWorks />
              </section>
              <SidebarSeparator />
              <section id="faq" className="pt-4 pb-4">
                <div className="flex items-center gap-2 mb-2 text-sm"><HelpCircle className="h-4 w-4" /> FAQ</div>
                <FAQ />
              </section>
              <SidebarSeparator />
              <section id="cta" className="pt-4">
                <div className="flex items-center gap-2 mb-2 text-sm"><Mail className="h-4 w-4" /> Contact</div>
                <CTASection />
              </section>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} XBrainer AI</p>
      </SidebarFooter>
    </Sidebar>
  );
}
