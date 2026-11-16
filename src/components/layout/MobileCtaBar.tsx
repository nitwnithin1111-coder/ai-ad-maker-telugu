import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, isOfferActive } from '@/data/constants';

export const MobileCtaBar: React.FC = () => {
  const offerActive = isOfferActive();

  return (
    <aside aria-label="Quick mobile action" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07060d]/95 backdrop-blur-md border-t border-zinc-800/80 px-4 py-2.5 pb-safe shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={getWhatsAppUrl('Hi! I need high-converting ads for my business in 24 hours.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 text-xs font-semibold border border-zinc-700/60 active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        <Link
          to={offerActive ? '/free-ads' : '/pricing'}
          className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] text-white text-xs font-bold shadow-lg shadow-purple-900/40 active:scale-98 transition-all"
        >
          <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
          <span>{offerActive ? 'Claim 5 Free Ads' : 'View Pricing ₹300'}</span>
        </Link>
      </div>
    </aside>
  );
};
