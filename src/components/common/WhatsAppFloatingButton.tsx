import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/constants';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 md:bottom-6 right-5 z-40">
      <a
        href={getWhatsAppUrl('Hi! I want to create AI video ads/posters for my business.')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Direct WhatsApp Chat with AI Ad Maker Telugu"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Hover Tooltip for desktop */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 bg-[#0f0e1a] text-zinc-100 text-xs font-medium py-1.5 px-3 rounded-lg border border-zinc-700/60 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp 24h Express
        </span>
      </a>
    </aside>
  );
};
