import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Video,
  Image as ImageIcon,
  Smartphone,
  Globe,
  Wand2,
  ShieldCheck,
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { BRAND, getWhatsAppUrl, isOfferActive } from '@/data/constants';
import { Card3DTilt } from '@/components/common/Card3DTilt';
import { ClientWall } from '@/components/common/ClientWall';
import { ContactForm } from '@/components/common/ContactForm';
import { FAQS } from '@/data/faqs';

// Lazy loaded 3D scenes for performance
const Hero3DScene = React.lazy(() => import('@/components/3d/Hero3DScene'));
const PhoneCarouselScene = React.lazy(() => import('@/components/3d/PhoneCarouselScene'));

export const Home: React.FC = () => {
  const offerActive = isOfferActive();

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="AI Ad Maker Telugu | 24h AI Video Ads, Posters & Reels"
        description="Creative AI studio crafting high-converting video ads, posters, reels and business websites in 24 hours. Pricing from ₹300. Get 5 FREE ads."
        canonicalPath="/"
        ogImage="/og/og-home.svg"
      />

      {/* 1. Hero Section with Full-Screen 3D R3F Canvas */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* 3D Canvas Background */}
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full bg-purple-900/20 blur-3xl" />
            </div>
          }
        >
          <Hero3DScene />
        </Suspense>

        {/* Hero Content Overlay (HTML sits above 3D Canvas) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pointer-events-auto">
          {/* Top Festive Badge */}
          {offerActive && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs sm:text-sm font-semibold text-cyan-300 shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>{BRAND.offer.title}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-white/80">{BRAND.offer.expiryLabel}</span>
              <Link to="/free-ads" className="underline underline-offset-2 text-cyan-400 hover:text-cyan-300 font-bold ml-1">
                Claim →
              </Link>
            </div>
          )}

          {/* Primary English Headline */}
          <h1 className="text-hero-fluid font-extrabold tracking-tight text-white drop-shadow-sm">
            High-Converting AI Ads <span className="gradient-text">in 24 Hours</span>
            <br />
            For Growing Businesses
          </h1>

          {/* English Subheadline with strict verified facts */}
          <p className="text-subhead-fluid text-zinc-300 max-w-3xl mx-auto font-normal leading-relaxed">
            The creative AI studio crafting cinematic video ads, posters, viral reels, and business websites.
            <span className="text-white font-medium"> Rapid delivery in 24 hours. Pricing from ₹300 per ad.</span>
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={offerActive ? '/free-ads' : '/pricing'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-2xl shadow-purple-950/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:scale-102 active:scale-98 transition-all"
            >
              <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
              <span>{offerActive ? 'Claim 5 FREE Ads Worth ₹1000' : 'Order Your Ad from ₹300'}</span>
            </Link>

            <a
              href={getWhatsAppUrl('Hi! I want to discuss creating ads for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-sm text-zinc-200 bg-zinc-900/80 border border-zinc-700/60 hover:bg-zinc-800 hover:border-cyan-500/60 transition-all backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Verified Guarantee Badges */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>24-Hour Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>From ₹300 / ad</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Clear Voiceovers & Sound Design</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Proven with Real Brands</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive 3D Phone Carousel Section */}
      <section className="py-16 relative bg-[#07060d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span>3D Interactive Showreel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            High-Impact <span className="gradient-text">Creative Video Formats</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Swipe or drag the showreel below to explore live creative formats for food, tech, and home services.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="w-full h-96 flex items-center justify-center">
              <div className="text-zinc-500 text-sm">Loading Showreel...</div>
            </div>
          }
        >
          <PhoneCarouselScene />
        </Suspense>

        <div className="text-center mt-4">
          <Link
            to="/showreel"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            <span>Open Dedicated Full-Screen 3D Showreel Experience</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. Services Grid with CSS 3D Tilt Cards */}
      <section className="py-24 relative bg-[#0a0914] border-t border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              4 Specialized <span className="gradient-text">Creative AI Services</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Turn passive viewers into buyers with studio-grade visuals engineered specifically for your target audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND.services.map((svc) => {
              const icons = {
                Video: Video,
                Image: ImageIcon,
                Smartphone: Smartphone,
                Globe: Globe,
              };
              const Icon = icons[svc.icon as keyof typeof icons] || Video;

              return (
                <Card3DTilt key={svc.slug} className="h-full">
                  <div className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-between border border-zinc-800/80 hover:border-purple-600/50 hover:shadow-[0_0_25px_rgba(109,40,217,0.2)] transition-all group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-zinc-400 group-hover:text-cyan-300">
                          {svc.turnaround}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {svc.shortDesc}
                      </p>

                      <ul className="space-y-1.5 text-[11px] text-zinc-400">
                        {svc.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-zinc-800/80 mt-6 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase">Starting From</div>
                        <div className="text-sm font-extrabold text-white">{svc.startingPrice}</div>
                      </div>
                      <Link
                        to={`/services/${svc.slug}`}
                        className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors"
                        aria-label={`Learn more about ${svc.title}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Verified Client Wall (Flovyn & HWS) */}
      <ClientWall />

      {/* 5. Interactive Tool Teaser: Ad Idea Generator */}
      <section className="py-16 relative bg-gradient-to-b from-[#07060d] to-[#0f0e1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Wand2 className="w-3.5 h-3.5" />
                Free Interactive Tool
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Need High-Converting <span className="gradient-text">Ad Concepts</span>?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Choose your industry (food, real estate, fashion, clinics) and marketing goal to generate 3 high-retention hook scripts and storyboard ideas instantly!
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                to="/ad-idea-generator"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
              >
                <span>Launch Generator Tool</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Form Section */}
      <section id="contact-section" className="py-24 relative bg-[#07060d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full">
              Start in 24 Hours
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Send Your Ad Brief <span className="gradient-text">Right Now</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
              Fill in your business details. It prepares your exact brief and opens a direct chat on WhatsApp or Instagram.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-zinc-800/80 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 7. Verified FAQ Preview */}
      <section className="py-16 bg-[#05040a] border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-zinc-400">Everything you need to know about our rapid creative pipeline.</p>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>{faq.question}</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline">
              <span>View all questions & answers →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
