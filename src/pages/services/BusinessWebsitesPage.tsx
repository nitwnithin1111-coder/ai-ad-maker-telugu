import React, { Suspense } from 'react';
import { Globe, Clock, Zap, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';
import { ContactForm } from '@/components/common/ContactForm';

const BrowserWindowScene = React.lazy(() => import('@/components/3d/BrowserWindowScene'));

export const BusinessWebsitesPage: React.FC = () => {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Business Websites Development',
    provider: {
      '@type': 'ProfessionalService',
      name: BRAND.name,
      url: BRAND.domain,
    },
    areaServed: ['Telangana', 'Andhra Pradesh'],
  };

  return (
    <div className="py-12">
      <SEO
        title="Business Websites | AI Ad Maker Telugu"
        description="Fast, responsive business websites. 100/100 Core Web Vitals, direct WhatsApp integration, and modern 3D polish."
        canonicalPath="/services/business-websites"
        ogImage="/og/og-services.svg"
        structuredData={serviceJsonLd}
      />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Business Websites' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Modern Web Architecture · Fast-Track Launch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              High-Speed Business Websites <br />
              <span className="gradient-text">Engineered for Conversion</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Give your enterprise a world-class digital presence. Score 100 on Core Web Vitals and connect every prospective client directly to your WhatsApp inbox in one tap.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-300 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Turnaround: <strong>Fast Track Scope</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>Hosting: <strong>Global Edge CDN</strong></span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl('Hi! I want to build a modern website for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <Suspense fallback={<div className="h-80 flex items-center justify-center text-zinc-500">Loading 3D Visual...</div>}>
              <BrowserWindowScene />
            </Suspense>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">Full SEO Optimization</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Every page is crafted with valid JSON-LD schemas and semantic markup so search engines discover your services first.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">One-Tap WhatsApp Conversion</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Eliminate complicated checkout friction. Intelligent prefilled WhatsApp links send customer inquiries right to your phone with zero manual typing.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <h3 className="text-lg font-bold text-white">100/100 Core Web Vitals</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Sub-second loading times, zero layout shift, and mobile-first responsive architecture designed for smooth scrolling on all mobile devices.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send Website Project <span className="gradient-text">Brief</span>
          </h2>
          <ContactForm defaultService="business-websites" />
        </div>
      </div>
    </div>
  );
};

export default BusinessWebsitesPage;
