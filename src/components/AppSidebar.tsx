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
                <SidebarMenuButton asChild>
                  <a href="#vision"><Brain className="h-4 w-4" /> Vision</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#features"><Activity className="h-4 w-4" /> Features</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#how"><ListChecks className="h-4 w-4" /> How it works</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#faq"><HelpCircle className="h-4 w-4" /> FAQ</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#cta"><Mail className="h-4 w-4" /> Contact</a>
                </SidebarMenuButton>
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
