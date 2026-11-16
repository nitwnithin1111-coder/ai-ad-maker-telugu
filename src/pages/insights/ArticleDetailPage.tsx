import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, ArrowRight, MessageCircle, Share2, Sparkles } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ARTICLES } from '@/data/insights';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);
  const offerActive = isOfferActive();

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: BRAND.name,
      url: BRAND.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BRAND.domain}/images/logo/ai-ad-maker-telugu-logo.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BRAND.domain}/insights/${article.slug}`,
    },
  };

  return (
    <div className="py-12">
      <SEO
        title={`${article.title} | AI Ad Maker Telugu`}
        description={article.excerpt}
        canonicalPath={`/insights/${article.slug}`}
        ogImage="/og/og-insights.svg"
        type="article"
        articleDate={article.date}
        structuredData={articleJsonLd}
      />

      <Breadcrumbs
        items={[
          { label: 'Insights', path: '/insights' },
          { label: article.title },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>

        {/* Article Header Card */}
        <header className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 mb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <span className="bg-purple-950/60 border border-purple-800/50 text-cyan-300 px-3 py-1 rounded-full font-semibold">
              {article.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
            {article.excerpt}
          </p>
        </header>

        {/* Main Content Sections */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800/80 space-y-10 mb-16 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
              </div>

              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Festive Offer & Action Box */}
        {offerActive && (
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#1e1b8f]/50 to-cyan-950/60 border border-purple-500/40 text-center space-y-4 shadow-2xl mb-12">
            <Sparkles className="w-8 h-8 text-cyan-300 mx-auto animate-pulse" />
            <h3 className="text-2xl font-bold text-white">
              Ready to Put These Insights into Action?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
              Test our 24-hour turnaround with 5 free customized ads for your business. Valid until Nov 30.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <span>Claim 5 Free Ads</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(`Hi! I read your article "${article.title}" and want to discuss ads for my business.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs text-white bg-zinc-800 border border-zinc-700 hover:border-cyan-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default ArticleDetailPage;
