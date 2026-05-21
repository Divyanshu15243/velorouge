import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "@/i18n/config";
import ScrollToTop from "@/components/ScrollToTop";
import Maintenance from "./pages/Maintenance";
import Index from "./pages/Index";

const MAINTENANCE_MODE = false;
import AboutPage from "./pages/AboutPage";
import RidesPage from "./pages/RidesPage";
import SafeSmartPage from "./pages/SafeSmartPage";
import ContactPage from "./pages/ContactPage";
import FMDPage from "./pages/FMDPage";
// import BlogPage from "./pages/BlogPage";
// import BlogDetailPage from "./pages/BlogDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {MAINTENANCE_MODE ? <Maintenance /> : <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visitors" element={<RidesPage />} />
          <Route path="/rides" element={<RidesPage />} />
          <Route path="/residents" element={<FMDPage />} />
          <Route path="/fmd" element={<FMDPage />} />
          <Route path="/safe-smart" element={<SafeSmartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogDetailPage />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
