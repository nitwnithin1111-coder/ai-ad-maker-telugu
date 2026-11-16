import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageCircle, Instagram, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';
import { CASE_STUDIES } from '@/data/caseStudies';

export const FlovynCaseStudy: React.FC = () => {
  const cs = CASE_STUDIES.find((item) => item.slug === 'flovyn-solutions')!;

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    headline: 'Flovyn Solutions: Technology Driven B2B Creative Campaign',
    provider: {
      '@type': 'ProfessionalService',
      name: BRAND.name,
      url: BRAND.domain,
    },
    about: {
      '@type': 'Organization',
      name: 'Flovyn Solutions',
      description: 'Technology Driven · Solution Focused',
    },
  };

  return (
    <div className="py-12">
      <SEO
        title="Flovyn Solutions Case Study | AI Ad Maker Telugu"
        description="Verified case study: How Flovyn Solutions leveraged high-tech promotional video ads and clean B2B social graphics to communicate enterprise software reliability."
        canonicalPath="/work/flovyn-solutions"
        ogImage="/og/og-work.svg"
        structuredData={caseStudyJsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Work', path: '/work' },
          { label: 'Flovyn Solutions' },
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
            <div className="h-28 w-64 rounded-2xl bg-white p-4 flex items-center justify-center shadow-inner">
              <img
                src={cs.logo}
                alt="Flovyn Solutions logo"
                className="max-h-20 max-w-full object-contain"
                width="240"
                height="80"
              />
            </div>
            <div className="space-y-1 md:text-right">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50">
                Technology Partner
              </span>
              <div className="text-xs text-zinc-400 pt-1">Client Tagline: {cs.tagline}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Flovyn Solutions: <span className="gradient-text">Enterprise Tech Showcase</span>
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Flovyn Solutions is a technology-driven, solution-focused enterprise provider. They required high-tech digital assets that articulate their capability in software architecture, cloud reliability, and client problem-solving.
            </p>
          </div>
        </div>

        {/* The Brief & What We Made (Strictly Honest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* The Brief */}
          <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>The Client Brief</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">{cs.brief}</p>
          </div>

          {/* What We Made */}
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

        {/* Deliverables Checklist */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 mb-12 space-y-4">
          <h2 className="text-xl font-bold text-white">Delivered Project Assets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
            {cs.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Campaign Hook */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 mb-12 space-y-4">
          <h2 className="text-xl font-bold text-white">Sample Campaign Hook</h2>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-purple-500/30 space-y-2">
            <div className="text-sm text-white font-semibold">
              &quot;{cs.sampleHooks[0].en}&quot;
            </div>
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
              href={getWhatsAppUrl('Hi! I liked your Flovyn Solutions case study and want similar tech ads for my business.')}
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

export default FlovynCaseStudy;
