import React, { Suspense } from 'react';
import { Smartphone, Clock, Zap, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';
import { ContactForm } from '@/components/common/ContactForm';

const SmartphonePlayScene = React.lazy(() => import('@/components/3d/SmartphonePlayScene'));

export const ReelsPage: React.FC = () => {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Viral Instagram Reels Production',
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
        title="Viral Instagram Reels (9:16) | AI Ad Maker Telugu"
        description="High-retention 9:16 viral vertical reels. Sound effects, kinetic typography and 24-hour turnaround from ₹300."
        canonicalPath="/services/reels"
        ogImage="/og/og-services.svg"
        structuredData={serviceJsonLd}
      />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Reels' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-800/40 text-pink-300 text-xs font-semibold uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Viral 9:16 Format · 24h Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Viral Instagram Reels <br />
              <span className="gradient-text">Engineered for Maximum Reach</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Designed specifically for mobile feeds. Fast cuts, tactile pop and whoosh sound effects, kinetic highlighted captions, and a strong call-to-action driving inquiries straight into your WhatsApp.
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
                href={getWhatsAppUrl('Hi! I want to order high-retention Instagram Reels for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order Reels on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <Suspense fallback={<div className="h-80 flex items-center justify-center text-zinc-500">Loading 3D Visual...</div>}>
              <SmartphonePlayScene />
            </Suspense>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Dynamic Animated Captions</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Active word-by-word highlighted text synced down to the millisecond. Viewers can absorb the entire message even with their phone audio muted.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Strict UI Clearance</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Safe zones observed with surgical precision. Top 250px and bottom 400px remain clear of crucial phone numbers and headlines so Instagram overlays never clash.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Auditory Sound Design</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Mastered sidechain ducking (-14 LUFS compliance): background music dips gracefully whenever spoken commentary enters the mix.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send Reels Brief <span className="gradient-text">Details</span>
          </h2>
          <ContactForm defaultService="reels" />
        </div>
      </div>
    </div>
  );
};

export default ReelsPage;
