import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageCircle, Instagram, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';
import { CASE_STUDIES } from '@/data/caseStudies';

export const HwsCaseStudy: React.FC = () => {
  const cs = CASE_STUDIES.find((item) => item.slug === 'hws-hard-water-softener')!;

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: 'HWS Hard Water Softener: Regional Video Campaign',
    provider: {
      '@type': 'ProfessionalService',
      name: BRAND.name,
      url: BRAND.domain,
    },
    about: {
      '@type': 'Organization',
      name: 'HWS Hard Water Softener',
      description: 'Advanced Water Softening & Filtration Systems',
    },
  };

  const frames = [
    {
      src: '/images/work/hws/scene1-stained-faucet.jpg',
      label: 'Scene 1: Hard Water Problem',
      captionEn: 'Chalky white tap scaling and hard water residue on tiles',
    },
    {
      src: '/images/work/hws/scene3-resin-softener.jpg',
      label: 'Scene 2: HWS Ion-Exchange Resin',
      captionEn: 'Scientific ion-exchange technology demonstration',
    },
    {
      src: '/images/work/hws/scene4-filtration-flow.jpg',
      label: 'Scene 3: Overhead Tank 3-Step Flow',
      captionEn: 'Dedicated whole-house soft water distribution diagram',
    },
    {
      src: '/images/work/hws/scene5-lab-testing.jpg',
      label: 'Scene 4: Independent Lab Testing',
      captionEn: 'Scientific proof & independent laboratory certification',
    },
    {
      src: '/images/work/hws/scene7-verified-callout.jpg',
      label: 'Scene 5: HWS Verified Callout',
      captionEn: 'Proven results guarantee and direct inquiry CTA',
    },
  ];

  return (
    <div className="py-12">
      <SEO
        title="HWS Hard Water Softener Case Study | AI Ad Maker Telugu"
        description="Verified case study: How HWS Hard Water Softener used problem-solution storytelling and scientific proof reels to build trust with local homeowners."
        canonicalPath="/work/hws-hard-water-softener"
        ogImage="/og/og-work.svg"
        structuredData={caseStudyJsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'HWS Hard Water Softener' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>

        {/* Case Study Header Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
            <div className="h-28 w-48 rounded-2xl bg-white p-3 flex items-center justify-center shadow-inner">
              <img
                src={cs.logo}
                alt="HWS Hard Water Softener logo"
                className="max-h-24 max-w-full object-contain"
                width="140"
                height="96"
              />
            </div>
            <div className="space-y-1 md:text-right">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50">
                Home Services & Water Treatment
              </span>
              <div className="text-xs text-zinc-400 pt-1">Client: {cs.tagline}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              HWS Hard Water Softener: <span className="gradient-text">Permanent Home Solution</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Homeowners constantly deal with severe borewell hard water stains, hair fall, and choked bathroom pipelines. HWS required an honest, scientifically grounded commercial to educate families and prove real water softening.
            </p>
          </div>
        </div>

        {/* Real Production Storyboard Frames */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 mb-12 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Production Frames
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Executed 45-Second Reel Storyboard
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">1080x1920 9:16 Vertical Master</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frames.map((frame, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col group">
                <div className="relative aspect-[9/12] overflow-hidden bg-black">
                  <img
                    src={frame.src}
                    alt={frame.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width="270"
                    height="360"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 border border-white/10">
                    {frame.label}
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <div className="text-xs font-bold text-white">{frame.label}</div>
                  <div className="text-[11px] text-zinc-400">{frame.captionEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Brief & What We Made */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>The Client Brief</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{cs.brief}</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 space-y-4">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>What We Created</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {cs.whatWeMade.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spoken Narration Script Sample */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 mb-12 space-y-4">
          <h2 className="text-xl font-bold text-white">Authentic Spoken Voiceover Script</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-purple-500/30 space-y-3 text-sm sm:text-base text-zinc-200 leading-relaxed">
            <p>
              &quot;Are hard borewell salts ruining your bathroom fittings, buckets, and hair?
              With HWS, we do not make empty marketing claims—we deliver verifiable science.
              Our high-grade ion-exchange resin delivers pure, soft water from your overhead tank.
              Don&apos;t just take our word for it—verify your treated water with any certified lab!&quot;
            </p>
          </div>
        </div>

        {/* Honest Disclosure & Instagram Reviews Link */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center mx-auto shadow-lg">
            <Instagram className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Verified Client Reactions</h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
            In compliance with our strict honesty pledge, we do not invent arbitrary engagement numbers or fabricated quotes. Watch real client video recordings in the &quot;client reviews&quot; highlight on our Instagram profile.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-800 to-pink-700 hover:shadow-lg transition-all"
            >
              <span>View &quot;client reviews&quot; on @{BRAND.instagramUsername}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl('Hi! I liked your HWS Hard Water Softener ad campaign and want video ads for my home/water service brand.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all text-black"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HwsCaseStudy;
