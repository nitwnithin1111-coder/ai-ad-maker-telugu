import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Image as ImageIcon, Smartphone, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, isOfferActive } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const ServicesHub: React.FC = () => {
  const offerActive = isOfferActive();

  return (
    <div className="py-12">
      <SEO
        title="Services | AI Ad Maker Telugu — 24h Ads & Websites"
        description="Explore AI Video Ads, Posters, Viral Reels, and Business Websites. 24-hour delivery, pricing from ₹300 per ad. Get 5 FREE ads."
        canonicalPath="/services"
        ogImage="/og/og-services.svg"
      />

      <Breadcrumbs items={[{ label: 'Services' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            Creative Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Creative Solutions <br />
            <span className="gradient-text">Delivered in 24 Hours</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Stop waiting weeks for production agencies. We deliver high-converting creatives in 24 hours, starting at just ₹300 per ad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRAND.services.map((svc) => {
            const icons = {
              Video: Video,
              Image: ImageIcon,
              Smartphone: Smartphone,
              Globe: Globe,
            };
            const Icon = icons[svc.icon as keyof typeof icons] || Video;

            return (
              <Card3DTilt key={svc.slug} className="h-full">
                <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(109,40,217,0.2)] transition-all group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple-900/30 border border-purple-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50">
                        {svc.turnaround}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {svc.title}
                      </h2>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-zinc-800/60 space-y-2">
                      <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Key Deliverables:
                      </div>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {svc.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-zinc-800/80 mt-8 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">Starting Price</div>
                      <div className="text-base font-extrabold text-white">{svc.startingPrice}</div>
                    </div>
                    <Link
                      to={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-md hover:shadow-cyan-500/30 transition-all"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Festive Welcome Offer Callout */}
        {offerActive && (
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#1e1b8f]/50 to-cyan-950/60 border border-purple-500/40 text-center space-y-4 shadow-2xl">
            <Sparkles className="w-8 h-8 text-cyan-300 mx-auto animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {BRAND.offer.title}
            </h3>
            <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed">
              Test our 24-hour AI creative pipeline with 5 complimentary ads customized for your brand. Valid until Nov 30.
            </p>
            <div className="pt-2">
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <span>Claim Your 5 Free Ads Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesHub;
