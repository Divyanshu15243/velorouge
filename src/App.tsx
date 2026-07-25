import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "@/i18n/config";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";

const MAINTENANCE_MODE = false;
const Maintenance = lazy(() => import("./pages/Maintenance"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const RidesPage = lazy(() => import("./pages/RidesPage"));
const SafeSmartPage = lazy(() => import("./pages/SafeSmartPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FMDPage = lazy(() => import("./pages/FMDPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const PrecontractualPage = lazy(() => import("./pages/PrecontractualPage"));
const CGSPage = lazy(() => import("./pages/CGSPage"));
const BookingConfirmationPage = lazy(() => import("./pages/BookingConfirmationPage"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieBanner />
        <WhatsAppButton />
        <Suspense fallback={null}>
          {MAINTENANCE_MODE ? <Maintenance /> : <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/visitors" element={<RidesPage />} />
            <Route path="/rides" element={<RidesPage />} />
            <Route path="/residents" element={<FMDPage />} />
            <Route path="/fmd" element={<FMDPage />} />
            <Route path="/safe-smart" element={<SafeSmartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/precontractual" element={<PrecontractualPage />} />
            <Route path="/cgs" element={<CGSPage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>}
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
