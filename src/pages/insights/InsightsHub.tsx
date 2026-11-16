import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ARTICLES } from '@/data/insights';
import { Card3DTilt } from '@/components/common/Card3DTilt';

export const InsightsHub: React.FC = () => {
  return (
    <div className="py-12">
      <SEO
        title="Advertising Insights & Guides | AI Ad Maker Telugu"
        description="Actionable masterclasses and frameworks: How to write high-retention ad hooks, complete Instagram & WhatsApp size guides, and festival campaign planning."
        canonicalPath="/insights"
        ogImage="/og/og-insights.svg"
      />

      <Breadcrumbs items={[{ label: 'Insights' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Creative Frameworks & Guides</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Advertising <span className="gradient-text">Insights & Strategies</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Genuine marketing wisdom without fluff or fabricated metrics. Learn how short-form video psychology, safe zones, and authentic copywriting drive tangible footfall and WhatsApp inquiries.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ARTICLES.map((article) => (
            <Card3DTilt key={article.slug} className="h-full">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-purple-600/50 hover:shadow-[0_0_25px_rgba(109,40,217,0.15)] transition-all group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="bg-purple-950/60 border border-purple-800/50 text-cyan-300 px-3 py-1 rounded-full font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {article.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsHub;
