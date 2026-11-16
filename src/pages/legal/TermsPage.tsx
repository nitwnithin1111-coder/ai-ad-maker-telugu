import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND } from '@/data/constants';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12">
      <SEO
        title="Terms of Service | AI Ad Maker Telugu"
        description="Terms of service, 24-hour turnaround commitments, and client creative guidelines for AI Ad Maker Telugu."
        canonicalPath="/terms"
        ogImage="/og/og-default.svg"
      />

      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 space-y-6 text-zinc-300 text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-xs text-zinc-500">Effective Date: November 2026</p>

          <section className="space-y-3 pt-4 border-t border-zinc-800/60">
            <h2 className="text-lg font-bold text-white">1. Service Scope & Delivery</h2>
            <p>
              AI Ad Maker Telugu provides digital advertising assets including AI Video Ads, Social & Print Posters, Viral Instagram Reels, and Business Websites. Our standard delivery time is 24 hours from confirmation of your script brief and required brand media.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Pricing & Payment</h2>
            <p>
              Creative pricing begins from ₹300 per ad. Rates are transparently quoted upfront before project execution commences. We do not impose unexpected recurring fees or hidden retainers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Revisions & Satisfaction</h2>
            <p>
              Each ad deliverable includes revision rounds to adjust typos, color grading, or audio balance. Significant modifications to the core approved script after final render may require additional production credit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Special Offers & Promotions</h2>
            <p>
              The &quot;5 FREE Ads worth ₹1000&quot; welcome package is limited to active retail and service businesses in Telangana, Andhra Pradesh, and regional brands, subject to availability until November 30.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
