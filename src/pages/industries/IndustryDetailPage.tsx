import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Utensils,
  Building2,
  Sparkles,
  HeartPulse,
  Cpu,
  Wrench,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { INDUSTRIES } from '@/data/industries';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copiedCaption, setCopiedCaption] = React.useState<number | null>(null);

  const industry = INDUSTRIES.find((ind) => ind.slug === slug);
  const offerActive = isOfferActive();

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const iconMap: Record<string, React.ElementType> = {
    Utensils,
    Building2,
    Sparkles,
    HeartPulse,
    Cpu,
    Wrench,
  };
  const Icon = iconMap[industry.icon] || Sparkles;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCaption(index);
    setTimeout(() => setCopiedCaption(null), 2000);
  };

  return (
    <div className="py-12">
      <SEO
        title={`${industry.title} Ads | AI Ad Maker Telugu`}
        description={`${industry.tagline}. High-converting video ads, posters and reels for ${industry.title}. 24h delivery from ₹300.`}
        canonicalPath={`/industries/${industry.slug}`}
        ogImage="/og/og-industries.svg"
      />

      <Breadcrumbs
        items={[
          { label: 'Industries', path: '/industries' },
          { label: industry.title },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Industries</span>
        </Link>

        {/* Industry Header Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 mb-12 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-900/40 border border-purple-500/30 text-cyan-400 flex items-center justify-center">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Tailored Strategy
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {industry.title}
              </h1>
            </div>
          </div>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            {industry.description}
          </p>
        </div>

        {/* 3 Tailored Ad Concepts */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">3 High-Converting Ad Concepts</h2>
            <span className="text-xs text-cyan-400 font-mono">24h Express Delivery</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {industry.adIdeas.map((idea, idx) => (
              <Card3DTilt key={idx}>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800/80 space-y-4 hover:border-purple-600/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/60">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">
                        Concept 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{idea.title}</h3>
                    </div>
                    <span className="inline-block text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center">
                      {idea.recommendedFormat}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <strong>Creative Approach:</strong> {idea.concept}
                  </p>

                  <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
                    <div className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                      Ad Hook (First 3 Seconds):
                    </div>
                    <div className="text-sm font-semibold text-white">
                      &quot;{idea.hookEn}&quot;
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <a
                      href={getWhatsAppUrl(`Hi! I want to create the "${idea.title}" video ad for my ${industry.title} business.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order This Exact Ad on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        </div>

        {/* Ready-to-Post Sample Captions */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800/80 mb-16 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Copy & Paste</div>
              <h2 className="text-xl font-bold text-white">Ready Social Media Captions</h2>
            </div>
          </div>

          <div className="space-y-4">
            {industry.sampleCaptions.map((cap, i) => (
              <div key={i} className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400">Caption Copy</span>
                  <button
                    onClick={() => handleCopy(cap.english, i)}
                    className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    {copiedCaption === i ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCaption === i ? 'Copied!' : 'Copy Caption'}</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                  {cap.english}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Free Ads Offer Banner */}
        {offerActive && (
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#1e1b8f]/50 to-cyan-950/60 border border-purple-500/40 text-center space-y-4 shadow-2xl">
            <Sparkles className="w-8 h-8 text-cyan-300 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold text-white">
              Claim 5 Free Ads for Your {industry.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Worth ₹1000. Limited slots for growing businesses. Valid until Nov 30.
            </p>
            <div className="pt-2">
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <span>Claim Offer on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryDetailPage;
