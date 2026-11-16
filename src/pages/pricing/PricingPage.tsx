import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, MessageCircle, ArrowRight, Clock, Zap } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const PricingPage: React.FC = () => {
  const offerActive = isOfferActive();

  const pricingTiers = [
    {
      name: 'Single Creative Ad',
      price: '₹300',
      period: 'per ad',
      turnaround: '24 Hours',
      featured: false,
      description: 'Ideal for weekend specials, urgent product launches, or testing our creative quality.',
      features: [
        '15 to 20-Sec Video Ad OR 4K Social Poster',
        'Conversational Human Voiceover',
        'Clean High-Contrast Typography Overlays',
        'Direct Instagram / WhatsApp Export Specs',
        '1 Round of Quick Revision Included',
        'Ready in Exactly 24 Hours',
      ],
      whatsappMsg: 'Hi! I want to order the ₹300 Single Creative Ad for my business.',
    },
    {
      name: 'Silver Cinematic Commercial',
      price: '₹800',
      period: 'per commercial',
      turnaround: '24 Hours',
      featured: true,
      badge: 'Most Popular for Local Shops',
      description: 'High-impact multi-scene commercial with tactile sound effects and kinetic captions.',
      features: [
        '20 to 30-Sec Multi-Scene Cinematic Video',
        'First 3-Seconds Hook Optimization',
        'Word-by-Word Kinetic Highlight Subtitles',
        'Mastered Sidechain Ducking (-14 LUFS Audio)',
        'Kinetic Price Tag & WhatsApp CTA End Card',
        'Action Safe Zone Guaranteed Delivery',
        '2 Rounds of Revisions Included',
      ],
      whatsappMsg: 'Hi! I want to order the ₹800 Silver Cinematic Commercial for my shop.',
    },
    {
      name: 'Monthly Growth Pack',
      price: '₹3,000',
      period: 'monthly bundle',
      turnaround: '4-Week Plan',
      featured: false,
      description: 'Complete weekly social ad pipeline to keep your brand on top of your local market.',
      features: [
        '4 Premium 9:16 Video Ads (1 Every Week)',
        '4 Matching 1:1 Feed & Story Graphic Posters',
        'Targeted Captions + Hashtags',
        'Festive & Seasonal Campaign Alignment',
        'Direct Creative Review with Studio Director',
        'Continuous Priority 24-Hour Revisions',
      ],
      whatsappMsg: 'Hi! I want to subscribe to the ₹3,000 Monthly Growth Pack for my brand.',
    },
  ];

  return (
    <div className="py-12">
      <SEO
        title="Pricing (From ₹300) | AI Ad Maker Telugu"
        description="Transparent ad pricing from ₹300 per ad. 24-hour turnaround. Claim 5 FREE ads worth ₹1000 valid until Nov 30. No hidden agency retainers."
        canonicalPath="/pricing"
        ogImage="/og/og-pricing.svg"
      />

      <Breadcrumbs items={[{ label: 'Pricing' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Clear & Honest Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing from <span className="gradient-text">₹300 Per Ad</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            No expensive retainers, zero hidden production fees, and no waiting weeks. Professional ads delivered in 24 hours.
          </p>
        </div>

        {/* Festive Welcome Offer Card */}
        {offerActive && (
          <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/70 via-[#1e1b8f]/50 to-cyan-950/70 border border-purple-500/50 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1 bg-cyan-400/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase border border-cyan-400/30">
                <Sparkles className="w-3.5 h-3.5" /> Limited Welcome Package
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {BRAND.offer.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
                Get 5 complimentary custom-designed ads to test our speed and quality. Valid until Nov 30.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-98 transition-all"
              >
                <span>Claim 5 Free Ads</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, idx) => (
            <Card3DTilt key={idx} className="h-full">
              <div
                className={`glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border transition-all relative ${
                  tier.featured
                    ? 'border-cyan-500/60 shadow-[0_0_35px_rgba(6,182,212,0.2)] bg-gradient-to-b from-[#0f0e1a] to-[#0b0a16]'
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[11px] font-bold py-1 px-4 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mt-0.5">{tier.name}</h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{tier.description}</p>
                  </div>

                  <div className="flex items-baseline gap-2 pb-6 border-b border-zinc-800/80">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white">{tier.price}</span>
                    <span className="text-xs text-zinc-400 font-mono">/ {tier.period}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Turnaround: {tier.turnaround}</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-zinc-300">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-800/80 mt-8">
                  <a
                    href={getWhatsAppUrl(tier.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs transition-all ${
                      tier.featured
                        ? 'bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] text-white shadow-lg shadow-cyan-900/40 hover:shadow-cyan-400/30'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Business Website Scope Callout */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800/80 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Enterprise Digital Presence</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Need a Complete Business Website?</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We design custom high-speed websites with one-tap WhatsApp chat buttons, 100/100 Core Web Vitals, and interactive polish.
            </p>
          </div>
          <Link
            to="/services/business-websites"
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-zinc-800 border border-zinc-700 hover:border-cyan-400 transition-colors whitespace-nowrap"
          >
            Website Pricing & Scope →
          </Link>
        </div>

        {/* Quality Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-zinc-400">
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
            <div className="font-bold text-white">24-Hour Express Guarantee</div>
            <p>Your finished ad file is delivered within 24 hours of brief confirmation.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
            <div className="font-bold text-white">Zero Hidden Charges</div>
            <p>Transparent quotes upfront. Revisions included on every package.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-1">
            <div className="font-bold text-white">Verified Client Quality</div>
            <p>Client reviews verifiable on our public Instagram highlight @ai_ad_maker_telugu.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
