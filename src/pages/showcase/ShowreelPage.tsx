import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { getWhatsAppUrl, isOfferActive } from '@/data/constants';

const PhoneCarouselScene = React.lazy(() => import('@/components/3d/PhoneCarouselScene'));

export const ShowreelPage: React.FC = () => {
  const offerActive = isOfferActive();

  return (
    <div className="py-12 relative min-h-screen flex flex-col justify-between">
      <SEO
        title="3D Phone Showreel | AI Ad Maker Telugu"
        description="Experience our full-screen 3D interactive phone showreel showcasing high-retention AI video ads, reels and campaign formats."
        canonicalPath="/showreel"
        ogImage="/og/og-services.svg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumbs items={[{ label: 'Showcase' }, { label: '3D Showreel' }]} />

        <div className="text-center max-w-3xl mx-auto pt-6 pb-4 space-y-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive 3D <span className="gradient-text">Showreel Carousel</span>
          </h1>

          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Drag horizontally to spin the cylindrical carousel. Experience how 9:16 vertical ads look and feel on glass smartphone hardware.
          </p>
        </div>
      </div>

      {/* Full-width 3D Canvas Container */}
      <div className="w-full flex-1 flex items-center justify-center my-6">
        <Suspense fallback={<div className="h-[500px] flex items-center justify-center text-zinc-500">Loading Showreel...</div>}>
          <PhoneCarouselScene />
        </Suspense>
      </div>

      {/* Bottom Action Strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 text-center space-y-4">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Fast Turnaround</div>
            <div className="text-base sm:text-lg font-bold text-white">Want a custom reel like these for your business?</div>
            <div className="text-xs text-zinc-400">Delivered within 24 hours · Pricing starting at ₹300 per ad.</div>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <a
              href={getWhatsAppUrl('Hi! I checked your 3D Showreel and want to create a video ad for my brand.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#25D366] text-black shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            {offerActive && (
              <Link
                to="/free-ads"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4]"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Claim 5 Free Ads</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowreelPage;
