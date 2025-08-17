import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* XBrainer icon sprite (global, hidden) */}
      <svg id="xbr-icon-sprite" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        {/* Lock */}
        <symbol id="xbr-lock" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="16" height="10" rx="2"></rect>
          <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
          <circle cx="12" cy="15" r="1"></circle>
        </symbol>

        {/* Gate */}
        <symbol id="xbr-gate" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h8v10H3z"></path>
          <path d="M13 7h8v10h-8z"></path>
          <path d="M11 12h2"></path>
        </symbol>

        {/* Shield */}
        <symbol id="xbr-shield" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"></path>
          <path d="M9.5 12.5l1.7 1.7 3.5-3.5"></path>
        </symbol>

        {/* Hash chain */}
        <symbol id="xbr-hashchain" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="4" width="6" height="6" rx="1.2"></rect>
          <rect x="8" y="14" width="6" height="6" rx="1.2"></rect>
          <rect x="15.5" y="4" width="6" height="6" rx="1.2"></rect>
          <path d="M8.5 7h2.5M13 17h2.5M14 7h1.5"></path>
        </symbol>

        {/* Dashboard */}
        <symbol id="xbr-dashboard" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2"></rect>
          <path d="M7 12l3 3 7-7"></path>
          <path d="M3 20h18"></path>
        </symbol>

        {/* Lab */}
        <symbol id="xbr-lab" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3v5l-5 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17L15 8V3"></path>
          <path d="M9 8h6"></path>
        </symbol>

        {/* Therapy */}
        <symbol id="xbr-therapy" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-6-3.2-6-8a6 6 0 1 1 12 0c0 4.8-6 8-6 8z"></path>
          <path d="M12 9v4m-2-2h4"></path>
        </symbol>
      </svg>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
