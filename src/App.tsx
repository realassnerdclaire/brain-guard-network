import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Vision from "./pages/Vision";
import Overview from "./pages/Overview";
import Compliance from "./pages/Compliance";
import UseCases from "./pages/UseCases";
import Security from "./pages/Security";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Waitlist from "./pages/Waitlist";
import Demo from "./pages/Demo";
import Problem from "./pages/Problem";
import Urgency from "./pages/Urgency";
import Solution from "./pages/Solution";
import OurEdge from "./pages/OurEdge";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/usecases" element={<UseCases />} />
            <Route path="/security" element={<Security />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/urgency" element={<Urgency />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/our-edge" element={<OurEdge />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
