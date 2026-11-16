import React, { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';

const ProcessTimelineScene = React.lazy(() => import('@/components/3d/ProcessTimelineScene'));

export const ProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const offerActive = isOfferActive();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const step = Math.min(Math.floor(scrollY / 300), 3);
      setActiveStep(step);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Brief & Hook Strategy',
      timeframe: 'Hour 0 – 3',
      description:
        'You share your business category, current offer, and logo. Our creative directors craft 3 scroll-stopping hook lines designed to capture attention in the crucial first 3 seconds.',
      deliverables: ['Custom hook script variations', 'Natural wording check', 'Safe-zone layout planning'],
    },
    {
      num: '02',
      title: 'AI Visual Generation & Scene Setup',
      timeframe: 'Hour 3 – 12',
      description:
        'Using advanced generative AI pipelines, we produce high-resolution, cinema-grade product scenes, macro food sizzles, tech dashboards, or residential walk-throughs with zero blurry artifacts.',
      deliverables: ['Multi-scene vertical 9:16 layout', 'Macro depth of field', 'Brand color grading (#1e1b8f & #06b6d4)'],
    },
    {
      num: '03',
      title: 'Voiceover & Kinetic Typesetting',
      timeframe: 'Hour 12 – 18',
      description:
        'We blend natural colloquial voiceovers with dynamic, word-by-word highlighted typography. Audio is mastered to EBU R128 (-14 LUFS) with subtle background music ducking and tactile SFX.',
      deliverables: ['Clear human speech synthesis', 'High-contrast typography overlays', 'Sidechain audio mastering'],
    },
    {
      num: '04',
      title: 'QA Review & 24-Hour Final Delivery',
      timeframe: 'Hour 18 – 24',
      description:
        'Every creative undergoes a 5-point quality audit (safe-zone clearance, audio loudness, compression clarity, resolution). The finalized ad is dispatched straight to your WhatsApp and email ready to publish.',
      deliverables: ['H.264 high-bitrate MP4 export', 'Instant WhatsApp delivery link', 'Revisions support included'],
    },
  ];

  return (
    <div className="py-12">
      <SEO
        title="24-Hour Production Process | AI Ad Maker Telugu"
        description="Discover our 24-hour AI advertising pipeline: from hook writing and AI visual generation to voiceover and delivery. Transparent, fast, and reliable."
        canonicalPath="/process"
        ogImage="/og/og-services.svg"
      />

      <Breadcrumbs items={[{ label: 'Process' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>24-Hour Guaranteed Turnaround</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Build Ads in <span className="gradient-text">24 Hours</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            A transparent peek into our systematic, AI-accelerated creative engineering workflow. From raw idea to client WhatsApp in 24 hours flat.
          </p>
        </div>

        {/* 3D Glowing Tube Timeline Visualization */}
        <div className="mb-16">
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-zinc-500">Loading 3D Timeline...</div>}>
            <ProcessTimelineScene activeStep={activeStep} />
          </Suspense>
        </div>

        {/* 4 Interactive Process Steps */}
        <div className="space-y-8 mb-20">
          {steps.map((step, idx) => (
            <Card3DTilt key={step.num}>
              <div
                className={`glass-panel p-8 rounded-3xl border transition-all ${
                  idx <= activeStep ? 'border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]' : 'border-zinc-800/80'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-cyan-400 font-mono">{step.num}</span>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                        {step.timeframe}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white mt-0.5">{step.title}</h2>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-zinc-300">
                      {step.deliverables.map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-start md:self-center">
                    <a
                      href={getWhatsAppUrl(`Hi! I have a question about Step ${step.num} (${step.title}) of your process.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      <span>Inquire Step {step.num}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#1e1b8f]/50 to-cyan-950/60 border border-purple-500/40 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Start Your 24-Hour Ad Project?
          </h2>
          <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
            Join visionary brands like Flovyn Solutions and HWS Hard Water Softener. Pricing from just ₹300 per ad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hi! I want to start my 24-hour ad project today.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Launch Project on WhatsApp</span>
            </a>

            {offerActive && (
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Claim 5 Free Ads Offer</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
