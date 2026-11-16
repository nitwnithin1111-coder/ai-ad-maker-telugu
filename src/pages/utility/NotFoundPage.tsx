import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Video, Mail } from 'lucide-react';

const LostFilmReelScene = React.lazy(() => import('@/components/3d/LostFilmReelScene'));

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
      {/* Strict noindex for 404 page */}
      <Helmet>
        <title>404 — Scene Not Found | AI Ad Maker Telugu</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-xl mx-auto text-center space-y-6">
        {/* 3D Lost Film Reel Scene */}
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-zinc-500">🎬</div>}>
          <LostFilmReelScene />
        </Suspense>

        <div className="space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            Error 404 · Lost Film Frame
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Looks like this scene ended on the <span className="gradient-text">cutting room floor</span>.
          </h1>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-md mx-auto">
            This page or video clip could not be located. Use the quick links below to navigate back to our homepage or explore our creative services.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition-colors"
          >
            <Video className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Studio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
