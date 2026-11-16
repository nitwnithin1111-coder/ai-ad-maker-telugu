import React, { useState } from 'react';
import { Sparkles, CheckCircle2, MessageCircle, Instagram, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';
import { ContactForm } from '@/components/common/ContactForm';

export const FreeAdsPage: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6d28d9', '#06b6d4', '#1e1b8f', '#ffffff'],
    });
    setCelebrated(true);
  };

  return (
    <div className="py-12">
      <SEO
        title="Get 5 FREE Ads Worth ₹1000 | AI Ad Maker Telugu"
        description="Claim 5 complimentary custom-designed ads worth ₹1000 for your business. Valid until Nov 30. Delivery in 24 hours. Limited festive slots."
        canonicalPath="/free-ads"
        ogImage="/og/og-free-ads.svg"
      />

      <Breadcrumbs items={[{ label: 'Offers' }, { label: '5 Free Ads' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Main Hero Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/50 shadow-2xl relative overflow-hidden text-center space-y-6 mb-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#6d28d9] to-[#06b6d4] text-white flex items-center justify-center mx-auto shadow-xl">
            <Sparkles className="w-8 h-8 animate-pulse text-cyan-300" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>{BRAND.offer.expiryLabel}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Claim 5 FREE Ads <br />
            <span className="gradient-text">Worth ₹1000 — 100% Free!</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are welcoming business owners and entrepreneurs to experience our 24-hour creative studio with <strong className="text-white">5 complimentary custom promotional creatives</strong> for your brand.
          </p>

          {/* Claim Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hi! I want to claim the 5 FREE ads worth ₹1000 for my business (valid until Nov 30).')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerCelebration}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-2xl shadow-purple-950/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Claim on WhatsApp Now</span>
            </a>

            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-sm text-pink-300 bg-purple-950/40 border border-purple-700/50 hover:bg-purple-900/50 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>DM on Instagram</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Zero credit card required · No hidden fees · 24h Delivery</span>
          </div>
        </div>

        {/* What You Receive in the 5 Free Ads Pack */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800/80 mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center">
            What is Included in the 5 Free Ads Package?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">Custom 4K Social Poster</strong>
                <span className="text-xs text-zinc-400">High-resolution flyer with your business branding and contact info.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">9:16 Vertical Video Reel Hook</strong>
                <span className="text-xs text-zinc-400">Mobile-optimized short ad script with high-retention narration.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">WhatsApp Status Graphic</strong>
                <span className="text-xs text-zinc-400">Optimized for regional mobile networks to guarantee fast status loading.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">Festive / Seasonal Campaign Variant</strong>
                <span className="text-xs text-zinc-400">Special offer template tailored for your local audience.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 sm:col-span-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">Ready-to-Post Captions & Search Tags</strong>
                <span className="text-xs text-zinc-400">Written by expert copywriters to maximize organic engagement.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Claim Process */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800/80 mb-12 space-y-6">
          <h2 className="text-xl font-bold text-white text-center">3 Simple Steps to Claim</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs sm:text-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center font-bold mx-auto">
                1
              </div>
              <div className="font-bold text-white">Message Us</div>
              <p className="text-zinc-400">Send your business name and service category on WhatsApp or Instagram.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center font-bold mx-auto">
                2
              </div>
              <div className="font-bold text-white">We Design in 24h</div>
              <p className="text-zinc-400">Our studio generates your 5 custom creatives with high precision.</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center font-bold mx-auto">
                3
              </div>
              <div className="font-bold text-white">Receive & Post</div>
              <p className="text-zinc-400">Download ready-to-publish files and share directly to your channels.</p>
            </div>
          </div>
        </div>

        {/* Claim Form Direct */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Fill Details to <span className="gradient-text">Claim 5 Free Ads</span>
          </h2>
          <ContactForm defaultService="5-free-ads" />
        </div>
      </div>
    </div>
  );
};

export default FreeAdsPage;
