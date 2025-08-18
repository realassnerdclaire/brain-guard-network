import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IconSprite from "@/components/journey/IconSprite";
import Index from "./pages/Index";
import AboutUsScrolling from "./pages/AboutUsScrolling";
import Vision from "./pages/Vision";
import Overview from "./pages/Overview";
import FAQ from "./pages/FAQ";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Waitlist from "./pages/Waitlist";
import DemoLogin from "./pages/DemoLogin";
import Demo from "./pages/Demo";
import JourneyDev from "./pages/JourneyDev";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <IconSprite />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUsScrolling />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/demo-login" element={<DemoLogin />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/journey-dev" element={<JourneyDev />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
