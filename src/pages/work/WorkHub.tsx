import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ArrowUpRight, Instagram } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND } from '@/data/constants';
import { CASE_STUDIES } from '@/data/caseStudies';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const WorkHub: React.FC = () => {
  return (
    <div className="py-12">
      <SEO
        title="Client Work & Case Studies | AI Ad Maker Telugu"
        description="Explore verified case studies featuring Flovyn Solutions (technology) and HWS Hard Water Softener. Honest deliverables and direct links to Instagram client reviews."
        canonicalPath="/work"
        ogImage="/og/og-work.svg"
      />

      <Breadcrumbs items={[{ label: 'Work' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Verified Production Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Client Case Studies & <span className="gradient-text">Recent Deliverables</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            We adhere to strict transparency: zero fabricated statistics or fake client quotes. Every project below details the actual brief, exact deliverables, and creative approach we executed.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map((cs) => (
            <Card3DTilt key={cs.id} className="h-full">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group">
                <div className="space-y-6">
                  {/* Client Logo Header */}
                  <div className="h-32 rounded-2xl bg-white p-4 flex items-center justify-center shadow-inner overflow-hidden">
                    <img
                      src={cs.logo}
                      alt={`${cs.clientName} logo`}
                      className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      width="260"
                      height="96"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {cs.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                      {cs.clientName}
                    </h2>
                    <p className="text-xs text-zinc-400 font-medium">{cs.tagline}</p>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {cs.brief}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                    <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Executed Deliverables:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {cs.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-800/80 mt-8 flex items-center justify-between">
                  <Link
                    to={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <span className="text-xs text-zinc-500 font-mono">Verified Work</span>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Real Reviews Callout linking to Instagram Highlight */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center mx-auto shadow-lg">
            <Instagram className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Looking for Verified Client Reviews?</h3>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            We preserve all recorded feedback, WhatsApp screenshots, and client shout-outs directly in the public Instagram story highlight titled <span className="text-pink-400 font-semibold">&quot;client reviews&quot;</span> on our official profile.
          </p>
          <div className="pt-2">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-800 to-pink-700 hover:from-purple-700 hover:to-pink-600 transition-all shadow-md"
            >
              <span>View &quot;client reviews&quot; on @{BRAND.instagramUsername}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHub;
