import React, { Suspense } from 'react';
import { Image as ImageIcon, Clock, Zap, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';
import { ContactForm } from '@/components/common/ContactForm';

const LayeredPostersScene = React.lazy(() => import('@/components/3d/LayeredPostersScene'));

export const PostersPage: React.FC = () => {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Poster Design',
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
        title="Social & Print Posters | AI Ad Maker Telugu"
        description="High-resolution 4K social media posters, festival greetings and print flyers. Delivery in 24 hours from ₹300."
        canonicalPath="/services/posters"
        ogImage="/og/og-services.svg"
        structuredData={serviceJsonLd}
      />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Posters' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>4K High-Res Graphics · 24h Turnaround</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Social Media & Print Posters <br />
              <span className="gradient-text">Studio-Grade Visuals</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              From festive flash sale announcements to high-end real estate flyers and restaurant menu specials. We design eye-catching posters with typography tuned for high-contrast digital readability.
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
                href={getWhatsAppUrl('Hi! I want to order posters/flyers for my business (24h delivery).')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order Posters on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <Suspense fallback={<div className="h-80 flex items-center justify-center text-zinc-500">Loading 3D Visual...</div>}>
              <LayeredPostersScene />
            </Suspense>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">4K & Print-Ready Resolution</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Delivered in crisp 300 DPI CMYK formats for local flex printing, hoardings, or ultra-clean 4K digital exports for WhatsApp statuses and Instagram feeds.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Festive & Seasonal Campaigns</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Holiday and festive greeting posters crafted with authentic cultural motifs, warm lighting, and clear pricing badges.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Typographic Harmony</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Carefully balanced font weights and fluid hierarchy ensuring zero awkward line wraps or broken characters.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send Poster Design <span className="gradient-text">Brief</span>
          </h2>
          <ContactForm defaultService="posters" />
        </div>
      </div>
    </div>
  );
};

export default PostersPage;
