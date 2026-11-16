import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight, Instagram } from 'lucide-react';
import { BRAND } from '@/data/constants';
import { Card3DTilt } from './Card3DTilt';

export const ClientWall: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Client Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Trusted by Forward-Thinking <span className="gradient-text">Enterprises & Brands</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Zero fabricated metrics or fake reviews. Explore verified deliverables created for industry innovators, and browse honest client feedback directly in our Instagram highlights.
          </p>
        </div>

        {/* Floating Glass Tiles Grid for Verified Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Client 1: Flovyn Solutions */}
          <Card3DTilt className="h-full">
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 uppercase tracking-wider">
                    Technology Client
                  </span>
                  <Link
                    to="/work/flovyn-solutions"
                    className="flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Logo Display on floating glass badge */}
                <div className="h-28 rounded-2xl bg-white p-4 flex items-center justify-center shadow-inner overflow-hidden">
                  <img
                    src="/images/clients/flovyn-solutions-logo.jpg"
                    alt="Flovyn Solutions logo"
                    className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    width="260"
                    height="80"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Flovyn Solutions
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">Technology Driven · Solution Focused</p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Cinematic B2B video ads and high-tech typography graphics communicating enterprise software solutions and agile client support.
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Deliverables: 16:9 & 9:16 Video Ads, Posters</span>
                <Link
                  to="/work/flovyn-solutions"
                  className="font-bold text-cyan-400 hover:underline"
                >
                  Explore →
                </Link>
              </div>
            </div>
          </Card3DTilt>

          {/* Client 2: HWS Hard Water Softener */}
          <Card3DTilt className="h-full">
            <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400 bg-purple-950/40 px-3 py-1 rounded-full border border-purple-800/50 uppercase tracking-wider">
                    Home & Industrial
                  </span>
                  <Link
                    to="/work/hws-hard-water-softener"
                    className="flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Logo Display on floating glass badge */}
                <div className="h-28 rounded-2xl bg-white p-3 flex items-center justify-center shadow-inner overflow-hidden">
                  <img
                    src="/images/clients/hws-hard-water-softener-logo.jpg"
                    alt="HWS Hard Water Softener logo"
                    className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    width="120"
                    height="96"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    HWS Hard Water Softener
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">Advanced Water Softening & Filtration Systems</p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  Relatable storytelling video ads targeting hard water scaling, pipe damage, and domestic water softener benefits.
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Deliverables: 45s Video Reel, Comparison Posters</span>
                <Link
                  to="/work/hws-hard-water-softener"
                  className="font-bold text-cyan-400 hover:underline"
                >
                  Explore →
                </Link>
              </div>
            </div>
          </Card3DTilt>
        </div>

        {/* Real Reviews Callout linking to Instagram Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-300">
            <span className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Looking for candid client reactions?</span>
            </span>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-cyan-400 hover:underline"
            >
              <span>Watch the &quot;client reviews&quot; Story Highlight on @ai_ad_maker_telugu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWall;
