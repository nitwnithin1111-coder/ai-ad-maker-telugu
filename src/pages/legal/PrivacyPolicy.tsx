import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND } from '@/data/constants';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-12">
      <SEO
        title="Privacy Policy | AI Ad Maker Telugu"
        description="Privacy policy and data handling guidelines for AI Ad Maker Telugu client projects and inquiries."
        canonicalPath="/privacy-policy"
        ogImage="/og/og-default.svg"
      />

      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 space-y-6 text-zinc-300 text-sm leading-relaxed">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-zinc-500">Last updated: November 2026</p>

          <section className="space-y-3 pt-4 border-t border-zinc-800/60">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a project brief or contact us via WhatsApp or Instagram, we collect only the information you voluntarily provide: your name, business name, phone number, and advertising creative materials (photos, logos, and promotional details).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
            <p>
              Your information is used strictly to produce, render, and deliver your requested video ads, posters, reels, or websites. We never sell, rent, or distribute your private business data to third-party telemarketers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Creative Asset Ownership</h2>
            <p>
              Upon full payment for delivered advertising assets, you retain 100% full commercial rights to publish and run the resulting video files, posters, and web code across all marketing channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Direct Contact</h2>
            <p>
              For privacy inquiries or to request deletion of your project media files from our internal render cache, reach out directly at {BRAND.email} or on WhatsApp at {BRAND.whatsappDisplay}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
