import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Video, Clock, Zap, MessageCircle, Sparkles } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';
import { ContactForm } from '@/components/common/ContactForm';

const ClapperboardReelScene = React.lazy(() => import('@/components/3d/ClapperboardReelScene'));

export const AiVideoAdsPage: React.FC = () => {
  const offerActive = isOfferActive();

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Video Ads Production',
    provider: {
      '@type': 'ProfessionalService',
      name: BRAND.name,
      url: BRAND.domain,
    },
    areaServed: ['Telangana', 'Andhra Pradesh'],
    offers: {
      '@type': 'Offer',
      price: '300',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="py-12">
      <SEO
        title="AI Video Ads (24h Delivery) | AI Ad Maker Telugu"
        description="Cinematic AI video ads with clear voiceover. Delivery in 24 hours. Pricing from ₹300 per ad. Proven for local shops, restaurants, tech and healthcare."
        canonicalPath="/services/ai-video-ads"
        ogImage="/og/og-services.svg"
        structuredData={serviceJsonLd}
      />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'AI Video Ads' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Hero Banner with 3D Object */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>Core Service · 24h Turnaround</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Cinematic AI Video Ads <br />
              <span className="gradient-text">Engineered for High Retention</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Stop losing customers to passive static images. We build high-retention 15 to 30-second commercial video ads featuring natural voiceovers, crystal-clear sound effects, and kinetic typography.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-300 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Delivery: <strong>24 Hours</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Pricing: <strong>From ₹300</strong></span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl('Hi! I want to order an AI Video Ad for my business (24h delivery).')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order Video Ad on WhatsApp</span>
              </a>

              {offerActive && (
                <Link
                  to="/free-ads"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Claim 5 Free Ads Offer</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right 3D Clapperboard & Reel */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Suspense fallback={<div className="h-80 flex items-center justify-center text-zinc-500">Loading 3D Visual...</div>}>
              <ClapperboardReelScene />
            </Suspense>
          </div>
        </div>

        {/* Feature Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-white">Natural Human Voiceovers</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              No robotic text-to-speech audio. We synthesize conversational vocal tones (warm, authoritative, or energetic) paired with clear retail terminology.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-white">Action Safe Zones (9:16 & 16:9)</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Subtitles and brand phone numbers stay strictly within title safe zones, ensuring Instagram and YouTube UI icons never block your vital call to action.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-white">First 3 Seconds Hook Law</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Every video opens with a relatable customer pain-point or high-impact visual that halts thumb scrolling and commands immediate attention.
            </p>
          </div>
        </div>

        {/* Client Proof Reference */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Real Case Studies</div>
            <h3 className="text-xl font-bold text-white">See Real Video Ads Made for Clients</h3>
            <p className="text-xs text-zinc-300">
              Check out our verified work for HWS Hard Water Softener (relatable domestic water awareness) and Flovyn Solutions (enterprise tech capabilities).
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/work/hws-hard-water-softener"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-800 border border-zinc-700 hover:border-cyan-400 transition-colors"
            >
              HWS Video Ad →
            </Link>
            <Link
              to="/work/flovyn-solutions"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-zinc-800 border border-zinc-700 hover:border-cyan-400 transition-colors"
            >
              Flovyn Tech Ad →
            </Link>
          </div>
        </div>

        {/* Direct Order Form */}
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Order Your Video Ad <span className="gradient-text">Brief Form</span>
          </h2>
          <ContactForm defaultService="ai-video-ads" />
        </div>
      </div>
    </div>
  );
};

export default AiVideoAdsPage;
