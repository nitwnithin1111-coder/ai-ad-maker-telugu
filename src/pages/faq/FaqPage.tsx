import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Instagram, ArrowUpRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { FAQS } from '@/data/faqs';
import { BRAND, getWhatsAppUrl } from '@/data/constants';

export const FaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="py-12">
      <SEO
        title="FAQ | AI Ad Maker Telugu — Common Questions"
        description="Frequently asked questions about AI Ad Maker Telugu: 24h turnaround, pricing from ₹300, 5 FREE ads offer, revisions, formats, and verified client reviews."
        canonicalPath="/faq"
        ogImage="/og/og-default.svg"
        structuredData={faqJsonLd}
      />

      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our AI video ads, pricing from ₹300, and our limited 5 free ads offer.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-zinc-800/80 overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white block">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/60 space-y-2 animate-in fade-in duration-200">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Real Reviews Callout */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center mx-auto shadow-lg">
            <Instagram className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Have You Checked Our Client Reviews?</h3>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            All candid feedback from real clients is saved in the &quot;client reviews&quot; highlight on our public Instagram page.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-800 to-pink-700 hover:shadow-lg transition-all"
            >
              <span>View Instagram Reviews Highlight</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl('Hi! I have a question that is not listed in your FAQ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-zinc-800 border border-zinc-700 hover:border-cyan-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Ask Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
