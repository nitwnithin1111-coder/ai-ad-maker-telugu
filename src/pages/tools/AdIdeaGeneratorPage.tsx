import React, { useState } from 'react';
import { Wand2, Copy, Check, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import {
  GENERATOR_INDUSTRIES,
  GENERATOR_GOALS,
  GENERATOR_FESTIVALS,
  generateAdConcepts,
  GeneratedConcept,
} from '@/data/adGeneratorData';
import { getWhatsAppUrl } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const AdIdeaGeneratorPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('restaurants');
  const [selectedGoal, setSelectedGoal] = useState<string>('leads');
  const [selectedFestival, setSelectedFestival] = useState<string>('general');
  const [concepts, setConcepts] = useState<GeneratedConcept[]>(() =>
    generateAdConcepts('restaurants', 'leads', 'general')
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const results = generateAdConcepts(selectedIndustry, selectedGoal, selectedFestival);
    setConcepts(results);

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#6d28d9', '#06b6d4', '#1e1b8f', '#ffffff'],
    });
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-12">
      <SEO
        title="Ad Idea Generator | Free Hook & Concept Tool"
        description="Free client-side tool: Choose your industry, goal, and festival to generate 3 high-retention ad concepts and hook scripts. No API key needed."
        canonicalPath="/ad-idea-generator"
        ogImage="/og/og-default.svg"
      />

      <Breadcrumbs items={[{ label: 'Tools' }, { label: 'Ad Idea Generator' }]} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5" />
            <span>100% Free Client-Side Tool</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ad Idea & <span className="gradient-text">Hook Generator</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Select your industry, primary marketing goal, and upcoming festival season. Our smart template synthesizer generates 3 customized high-converting ad angles and hooks instantly.
          </p>
        </div>

        {/* Input Control Console */}
        <form onSubmit={handleGenerate} className="glass-panel p-6 sm:p-10 rounded-3xl border border-zinc-800/80 shadow-2xl mb-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Industry Selector */}
            <div className="space-y-2">
              <label htmlFor="gen-industry" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                1. Select Industry / Niche
              </label>
              <select
                id="gen-industry"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {GENERATOR_INDUSTRIES.map((ind) => (
                  <option key={ind.id} value={ind.id}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Goal Selector */}
            <div className="space-y-2">
              <label htmlFor="gen-goal" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                2. Marketing Goal
              </label>
              <select
                id="gen-goal"
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {GENERATOR_GOALS.map((goal) => (
                  <option key={goal.id} value={goal.id}>
                    {goal.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Festival Selector */}
            <div className="space-y-2">
              <label htmlFor="gen-festival" className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                3. Festival / Season
              </label>
              <select
                id="gen-festival"
                value={selectedFestival}
                onChange={(e) => setSelectedFestival(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {GENERATOR_FESTIVALS.map((fest) => (
                  <option key={fest.id} value={fest.id}>
                    {fest.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
            >
              <Wand2 className="w-4 h-4" />
              <span>Generate 3 High-Retention Concepts</span>
            </button>
          </div>
        </form>

        {/* Results Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Generated <span className="gradient-text">Ad Concepts</span>
            </h2>
            <span className="text-xs text-zinc-400 font-mono">Ready to Produce in 24h</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {concepts.map((concept, idx) => (
              <Card3DTilt key={concept.id}>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800/80 space-y-4 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/60">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">
                        Idea 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white">{concept.title}</h3>
                    </div>
                    <span className="text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center">
                      {concept.format}
                    </span>
                  </div>

                  {/* Storyboard Visual Flow */}
                  <div className="text-xs text-zinc-300">
                    <strong className="text-white block mb-1">Visual Storyboard:</strong>
                    {concept.storyboard}
                  </div>

                  {/* Hook Box with Copy Action */}
                  <div className="p-5 rounded-2xl bg-purple-950/25 border border-purple-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                        Ad Hook (First 3 Seconds)
                      </span>
                      <button
                        onClick={() => copyToClipboard(concept.hookEn, `hook-${concept.id}`)}
                        className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        {copiedId === `hook-${concept.id}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === `hook-${concept.id}` ? 'Copied' : 'Copy Hook'}</span>
                      </button>
                    </div>
                    <div className="text-sm font-semibold text-white leading-relaxed">
                      &quot;{concept.hookEn}&quot;
                    </div>
                  </div>

                  {/* CTA link to WhatsApp */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-zinc-400">
                      Suggested Call to Action: <strong className="text-cyan-300">&quot;{concept.ctaTextEn}&quot;</strong>
                    </div>

                    <a
                      href={getWhatsAppUrl(`Hi! I generated the ad idea "${concept.title}" on your website tool and want to turn it into a real video ad.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-md hover:shadow-cyan-500/30 transition-all self-end"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Produce in 24h (from ₹300)</span>
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdIdeaGeneratorPage;
