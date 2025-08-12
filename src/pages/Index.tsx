
import AppSidebar from "@/components/AppSidebar";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { SidebarProvider } from "@/components/ui/sidebar";


const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <main className="flex-1 relative">
            {/* Top navigation menu */}
            <header className="absolute left-0 right-0 top-0 z-30">
              <div className="container flex items-center justify-end py-6">
                <nav className="flex items-center gap-8 text-white/80 text-sm font-medium">
                  <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
                  <a href="#research" className="hover:text-white transition-colors">RESEARCH</a>
                  <a href="#technology" className="hover:text-white transition-colors">TECHNOLOGY</a>
                  <a href="#career" className="hover:text-white transition-colors">CAREER</a>
                  <a href="#briefing" className="hover:text-white transition-colors">BRIEFING REQUEST</a>
                  <a href="#vision" className="hover:text-white transition-colors">VISION</a>
                  <a href="#features" className="hover:text-white transition-colors">FEATURE</a>
                  <a href="#how" className="hover:text-white transition-colors">HOW IT WORKS</a>
                  <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                  <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
                </nav>
              </div>
            </header>
            <HeroXBrainer />
          </main>
          <AppSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
