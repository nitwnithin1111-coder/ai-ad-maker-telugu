import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const offerActive = isOfferActive();

  return (
    <footer className="bg-[#05040a] border-t border-zinc-800/80 text-zinc-400 text-sm relative z-10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/70">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/30 p-0.5 bg-[#0f0e1a]">
                <img
                  src="/images/logo/ai-ad-maker-telugu-logo.jpg"
                  alt="AI Ad Maker Telugu logo"
                  className="w-full h-full object-cover rounded-lg"
                  width="40"
                  height="40"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                AI Ad Maker <span className="text-cyan-400">Telugu</span>
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Creative AI studio crafting high-converting video ads, posters, reels and business websites in 24 hours. Pricing from ₹300 per ad.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Telangana & Andhra Pradesh | Serving Businesses Worldwide</span>
            </div>

            {/* Social & Contact Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-900/40 to-pink-900/30 border border-purple-700/50 text-pink-300 hover:text-white hover:border-pink-500/80 transition-all text-xs font-semibold"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@ai_ad_maker_telugu</span>
              </a>

              <a
                href={getWhatsAppUrl('Hi! I would like to inquire about ads for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-xs font-semibold"
                aria-label="WhatsApp inquiry"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/ai-video-ads" className="hover:text-cyan-400 transition-colors">
                  AI Video Ads (24h)
                </Link>
              </li>
              <li>
                <Link to="/services/posters" className="hover:text-cyan-400 transition-colors">
                  Social & Print Posters
                </Link>
              </li>
              <li>
                <Link to="/services/reels" className="hover:text-cyan-400 transition-colors">
                  Viral Instagram Reels
                </Link>
              </li>
              <li>
                <Link to="/services/business-websites" className="hover:text-cyan-400 transition-colors">
                  High-Speed Websites
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-cyan-400 hover:underline font-medium">
                  Pricing from ₹300 →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/industries/restaurants" className="hover:text-cyan-400 transition-colors">
                  Restaurants & Food
                </Link>
              </li>
              <li>
                <Link to="/industries/real-estate" className="hover:text-cyan-400 transition-colors">
                  Real Estate & Plots
                </Link>
              </li>
              <li>
                <Link to="/industries/fashion-and-retail" className="hover:text-cyan-400 transition-colors">
                  Fashion & Boutiques
                </Link>
              </li>
              <li>
                <Link to="/industries/clinics-and-healthcare" className="hover:text-cyan-400 transition-colors">
                  Clinics & Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/tech-and-startups" className="hover:text-cyan-400 transition-colors">
                  Tech & IT Startups
                </Link>
              </li>
              <li>
                <Link to="/industries/home-services" className="hover:text-cyan-400 transition-colors">
                  Home Services & Filtration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work & Proof */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">
              Work & Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/work/flovyn-solutions" className="hover:text-cyan-400 transition-colors">
                  Flovyn Solutions (Tech)
                </Link>
              </li>
              <li>
                <Link to="/work/hws-hard-water-softener" className="hover:text-cyan-400 transition-colors">
                  HWS Hard Water Softener
                </Link>
              </li>
              <li>
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <span>Client Reviews Highlight</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link to="/ad-idea-generator" className="text-purple-400 hover:text-purple-300 font-semibold">
                  ⚡ Ad Idea Generator Tool
                </Link>
              </li>
              <li>
                <Link to="/showreel" className="hover:text-cyan-400 transition-colors">
                  3D Phone Showreel
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-cyan-400 transition-colors">
                  Ad Strategy Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Festive Offer Card in Footer */}
        {offerActive && (
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-purple-950/60 via-indigo-950/40 to-cyan-950/50 border border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-2.5 rounded-xl bg-purple-600/20 text-cyan-400 border border-purple-500/30">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {BRAND.offer.title}
                </div>
                <div className="text-xs text-zinc-400">
                  {BRAND.offer.expiryLabel} · Zero upfront charges
                </div>
              </div>
            </div>
            <Link
              to="/free-ads"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] hover:shadow-lg transition-all"
            >
              Claim Offer on WhatsApp →
            </Link>
          </div>
        )}

        {/* Bottom Sub-Footer */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} {BRAND.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
