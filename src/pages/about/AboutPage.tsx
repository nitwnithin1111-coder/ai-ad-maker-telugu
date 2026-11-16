import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Zap, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ClientWall } from '@/components/common/ClientWall';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12">
      <SEO
        title="About Us | AI Ad Maker Telugu"
        description="The creative AI studio crafting high-converting video ads, posters, reels and business websites. Honest, transparent, 24-hour delivery from ₹300."
        canonicalPath="/about"
        ogImage="/og/og-default.svg"
      />

      <Breadcrumbs items={[{ label: 'About' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            Our Mission & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Leveling the Playing Field for <br />
            <span className="gradient-text">Growing Regional Businesses</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Every business deserves advertising that rivals the world&apos;s leading brands—without paying ₹50,000 to legacy agencies or waiting weeks.
          </p>
        </div>

        {/* Core Manifesto Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 mb-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Why <span className="gradient-text">AI Ad Maker Telugu?</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            <p>
              Traditional advertising agencies have long ignored the regional business ecosystem. Local restaurant owners, boutique operators, healthcare clinics, and service technicians were forced to settle for blurry templates or pay astronomical shoot fees.
            </p>
            <p>
              We founded <strong className="text-white">AI Ad Maker Telugu</strong> to change this reality fundamentally. By combining generative AI video synthesis with authentic, culturally resonant storytelling, we produce cinema-grade commercial ads in <strong className="text-cyan-300">24 hours</strong> at prices starting from just <strong className="text-cyan-300">₹300</strong>.
            </p>
            <p>
              Our scripts are crafted from the ground up in natural conversational frameworks that reflect how modern consumers actually evaluate products and make purchasing decisions.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">24-Hour Velocity</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              In retail and hospitality, timing is everything. Weekend offers and flash sales cannot wait. We turn around finished, mastered ad deliverables in 24 hours guaranteed.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Accessible Pricing from ₹300</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              We eliminate camera crews, studio rentals, and production fluff. Small businesses gain access to the same creative firepower previously reserved for large corporate brands.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Strict Honesty Code</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              We never fabricate testimonials, invent bogus awards, or manipulate metrics. What you see is what we built. Real reviews live on our Instagram highlights for everyone to verify.
            </p>
          </div>
        </div>

        {/* Client Wall Integration */}
        <ClientWall />

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#1e1b8f]/50 to-cyan-950/60 border border-purple-500/40 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Let&apos;s Build Your Next Ad Campaign
          </h2>
          <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
            Have questions about how our AI studio works? Speak directly with our creative team on WhatsApp or Instagram.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition-colors"
            >
              <span>View Pricing ₹300</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
