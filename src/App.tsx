
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalHeader from "./components/layout/GlobalHeader";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// CoursesPage retired — /tecajevi redirects to /skola-manualne-terapije
import RegistrationPage from "./pages/RegistrationPage";
import ContactPage from "./pages/ContactPage";
import ManualTherapySchoolPage from "./pages/ManualTherapySchoolPage";
import CrossfrictionPage from "./pages/CrossfrictionPage";
import AkupresuraPage from "./pages/AkupresuraPage";
import CuppingPage from "./pages/CuppingPage";
import LomiLomiPage from "./pages/LomiLomiPage";
import CalabashCertificationPage from "./pages/CalabashCertificationPage";
// SoulScanPage unrouted 2026-07 — stale Feb 2025 term; file kept for future reschedule
import RasporedPage from "./pages/RasporedPage";
import ThreeDStretchingPage from "./pages/ThreeDStretchingPage";
import OUcilistuPage from "./pages/OUcilistuPage";
import LogoProcessorPage from "./pages/LogoProcessorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
          <BackToTopButton />
        <div className="min-h-screen">
          <GlobalHeader />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tecajevi" element={<Navigate to="/skola-manualne-terapije" replace />} />
              <Route path="/skola-manualne-terapije" element={<ManualTherapySchoolPage />} />
              <Route path="/crossfriction-funkcionalna-masaza" element={<CrossfrictionPage />} />
              <Route path="/akupresura-trigger-point" element={<AkupresuraPage />} />
              <Route path="/cupping-terapija" element={<CuppingPage />} />
              <Route path="/lomi-lomi" element={<LomiLomiPage />} />
              <Route path="/calabash-certifikacija" element={<CalabashCertificationPage />} />
              <Route path="/3d-advanced-therapeutic-stretching" element={<ThreeDStretchingPage />} />
              <Route path="/raspored" element={<RasporedPage />} />
              <Route path="/o-ucilistu" element={<OUcilistuPage />} />
              <Route path="/prijava" element={<RegistrationPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/logo-processor" element={<LogoProcessorPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
