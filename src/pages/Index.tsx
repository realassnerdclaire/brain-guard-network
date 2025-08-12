
import AppSidebar from "@/components/AppSidebar";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { SidebarProvider } from "@/components/ui/sidebar";


const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <main className="flex-1 relative">
            <header className="absolute left-0 right-0 top-0 z-20">
              <div className="container flex items-center justify-between py-6">
                <div className="flex items-center gap-3">
                  <img src="/lovable-uploads/b7273a3c-537a-4f84-b0d1-b8e729fe82ec.png" alt="XBrainer AI logo" className="h-7 w-auto" />
                  <span className="sr-only">XBrainer AI</span>
                </div>
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
