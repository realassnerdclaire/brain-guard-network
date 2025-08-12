
import AppSidebar from "@/components/AppSidebar";
import HeroXBrainer from "@/components/marketing/HeroXBrainer";
import { SidebarProvider } from "@/components/ui/sidebar";


const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <main className="flex-1 relative">
            <HeroXBrainer />
          </main>
          <AppSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
