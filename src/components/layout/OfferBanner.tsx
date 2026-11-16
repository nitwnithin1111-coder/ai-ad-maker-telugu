import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import { BRAND, isOfferActive } from '@/data/constants';

export const OfferBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const active = isOfferActive();

  if (!active || dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 flex items-center justify-center gap-2 flex-wrap text-center">
          <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-cyan-300 animate-pulse" />
            Limited Festive Offer
          </span>
          <span className="font-semibold">{BRAND.offer.title}</span>
          <span className="hidden md:inline text-white/80">|</span>
          <span className="text-cyan-200 font-semibold">{BRAND.offer.expiryLabel}</span>
          <Link
            to="/free-ads"
            className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-cyan-200 transition-colors ml-1 font-bold"
          >
            Claim Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-white/70 hover:text-white p-1 rounded transition-colors focus:outline-none"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
