import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { OfferBanner } from '@/components/layout/OfferBanner';
import { WhatsAppFloatingButton } from '@/components/common/WhatsAppFloatingButton';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { CustomCursor } from '@/components/common/CustomCursor';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { useLenisScroll } from '@/hooks/useLenisScroll';

// Lazy load route pages for performance & manualChunk isolation
const Home = lazy(() => import('@/pages/Home'));
const ServicesHub = lazy(() => import('@/pages/services/ServicesHub'));
const AiVideoAdsPage = lazy(() => import('@/pages/services/AiVideoAdsPage'));
const PostersPage = lazy(() => import('@/pages/services/PostersPage'));
const ReelsPage = lazy(() => import('@/pages/services/ReelsPage'));
const BusinessWebsitesPage = lazy(() => import('@/pages/services/BusinessWebsitesPage'));

const WorkHub = lazy(() => import('@/pages/work/WorkHub'));
const FlovynCaseStudy = lazy(() => import('@/pages/work/FlovynCaseStudy'));
const HwsCaseStudy = lazy(() => import('@/pages/work/HwsCaseStudy'));

const IndustriesHub = lazy(() => import('@/pages/industries/IndustriesHub'));
const IndustryDetailPage = lazy(() => import('@/pages/industries/IndustryDetailPage'));

const PricingPage = lazy(() => import('@/pages/pricing/PricingPage'));
const FreeAdsPage = lazy(() => import('@/pages/offer/FreeAdsPage'));
const ProcessPage = lazy(() => import('@/pages/process/ProcessPage'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'));
const FaqPage = lazy(() => import('@/pages/faq/FaqPage'));

const AdIdeaGeneratorPage = lazy(() => import('@/pages/tools/AdIdeaGeneratorPage'));
const ShowreelPage = lazy(() => import('@/pages/showcase/ShowreelPage'));

const InsightsHub = lazy(() => import('@/pages/insights/InsightsHub'));
const ArticleDetailPage = lazy(() => import('@/pages/insights/ArticleDetailPage'));

const PrivacyPolicy = lazy(() => import('@/pages/legal/PrivacyPolicy'));
const TermsPage = lazy(() => import('@/pages/legal/TermsPage'));
const NotFoundPage = lazy(() => import('@/pages/utility/NotFoundPage'));

// Lightweight route transition skeleton
const PageLoader: React.FC = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="relative w-12 h-12">
      <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-cyan-400 animate-spin" />
    </div>
  </div>
);

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll (automatically disabled on mobile/touch)
  useLenisScroll();

  return (
    <div className="min-h-screen flex flex-col bg-[#07060d] text-[#f4f2fb] selection:bg-[#6d28d9] selection:text-white">
      <ScrollToTop />
      <CustomCursor />
      <OfferBanner />
      <Navbar />

      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/ai-video-ads" element={<AiVideoAdsPage />} />
            <Route path="/services/posters" element={<PostersPage />} />
            <Route path="/services/reels" element={<ReelsPage />} />
            <Route path="/services/business-websites" element={<BusinessWebsitesPage />} />

            {/* Work & Verified Case Studies */}
            <Route path="/work" element={<WorkHub />} />
            <Route path="/work/flovyn-solutions" element={<FlovynCaseStudy />} />
            <Route path="/work/hws-hard-water-softener" element={<HwsCaseStudy />} />

            {/* Industries */}
            <Route path="/industries" element={<IndustriesHub />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage />} />

            {/* Pricing, Offers & Workflow */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/free-ads" element={<FreeAdsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />

            {/* Redirect legacy /te paths to English */}
            <Route path="/te" element={<Navigate to="/" replace />} />
            <Route path="/te/services" element={<Navigate to="/services" replace />} />
            <Route path="/te/contact" element={<Navigate to="/contact" replace />} />

            {/* Tools & Showcases */}
            <Route path="/ad-idea-generator" element={<AdIdeaGeneratorPage />} />
            <Route path="/showreel" element={<ShowreelPage />} />

            {/* Insights & Blog */}
            <Route path="/insights" element={<InsightsHub />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Custom 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <WhatsAppFloatingButton />
      <MobileCtaBar />
      <Footer />
    </div>
  );
};

export default App;
