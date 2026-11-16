import React from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Building2,
  Sparkles,
  HeartPulse,
  Cpu,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INDUSTRIES } from '@/data/industries';
import { BRAND, isOfferActive } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const IndustriesHub: React.FC = () => {
  const offerActive = isOfferActive();

  const iconMap: Record<string, React.ElementType> = {
    Utensils,
    Building2,
    Sparkles,
    HeartPulse,
    Cpu,
    Wrench,
  };

  return (
    <div className="py-12">
      <SEO
        title="Industries We Serve | AI Ad Maker Telugu"
        description="High-converting AI video ads and posters tailored for restaurants, real estate, fashion boutiques, clinics, tech startups and home services."
        canonicalPath="/industries"
        ogImage="/og/og-industries.svg"
      />

      <Breadcrumbs items={[{ label: 'Industries' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            Tailored Industry Frameworks
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry-Specific Ads <br />
            <span className="gradient-text">Engineered for High Conversion</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Generic templates fail. Explore proven ad concepts, high-impact hooks, and formatting strategies optimized for your specific business niche.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || Sparkles;

            return (
              <Card3DTilt key={ind.slug} className="h-full">
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                        {ind.title}
                      </h2>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="pt-2 border-t border-zinc-800/60 space-y-1.5">
                      <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                        Sample Ad Concept:
                      </div>
                      <div className="text-xs text-zinc-200 font-medium">
                        • {ind.adIdeas[0].title}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Explore Ad Ideas & Hooks</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Free Offer Banner */}
        {offerActive && (
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#1e1b8f]/50 to-cyan-950/60 border border-purple-500/40 text-center space-y-4 shadow-2xl">
            <Sparkles className="w-8 h-8 text-cyan-300 mx-auto animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {BRAND.offer.title}
            </h3>
            <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed">
              Whichever industry you are in, test our 24-hour turnaround with 5 free promotional ads. Valid until Nov 30.
            </p>
            <div className="pt-2">
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <span>Claim 5 Free Ads for Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustriesHub;
