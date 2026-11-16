import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Sparkles,
  Video,
  Image as ImageIcon,
  Smartphone,
  Globe,
  Utensils,
  Building2,
  HeartPulse,
  Cpu,
  Wrench,
  Wand2,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { BRAND, isOfferActive } from '@/data/constants';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const offerActive = isOfferActive();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setIndustriesDropdown(false);
  }, [location.pathname]);

  const serviceItems = [
    { name: 'AI Video Ads', path: '/services/ai-video-ads', desc: 'Cinematic 15-30s high-converting ads', icon: Video },
    { name: 'Posters & Graphics', path: '/services/posters', desc: '4K social & print creatives', icon: ImageIcon },
    { name: 'Viral Reels', path: '/services/reels', desc: 'Engaging 9:16 vertical storytelling', icon: Smartphone },
    { name: 'Business Websites', path: '/services/business-websites', desc: 'High-speed professional web presence', icon: Globe },
  ];

  const industryItems = [
    { name: 'Restaurants & Food', path: '/industries/restaurants', icon: Utensils },
    { name: 'Real Estate & Plots', path: '/industries/real-estate', icon: Building2 },
    { name: 'Fashion & Boutiques', path: '/industries/fashion-and-retail', icon: Sparkles },
    { name: 'Clinics & Healthcare', path: '/industries/clinics-and-healthcare', icon: HeartPulse },
    { name: 'Tech & Startups', path: '/industries/tech-and-startups', icon: Cpu },
    { name: 'Home Services', path: '/industries/home-services', icon: Wrench },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07060d]/90 dark:bg-[#07060d]/90 light:bg-white/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-purple-500/30 p-0.5 bg-[#0f0e1a] shadow-[0_0_20px_rgba(109,40,217,0.3)] group-hover:border-cyan-400/60 transition-colors">
              <img
                src="/images/logo/ai-ad-maker-telugu-logo.jpg"
                alt="AI Ad Maker Telugu Logo"
                className="w-full h-full object-cover rounded-lg"
                width="44"
                height="44"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-zinc-100 to-cyan-300 bg-clip-text text-transparent group-hover:to-cyan-400 transition-colors">
                AI Ad Maker <span className="text-cyan-400 font-normal">Telugu</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-semibold">
                24h AI Creative Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
                aria-expanded={servicesDropdown}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 p-2 bg-[#0f0e1a]/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 px-3 py-1 mb-1">
                    Creative AI Solutions
                  </div>
                  {serviceItems.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.path}
                        to={svc.path}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-950/40 hover:border-purple-800/40 border border-transparent transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/40 text-cyan-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300">
                            {svc.name}
                          </div>
                          <div className="text-xs text-zinc-400">{svc.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="mt-2 pt-2 border-t border-zinc-800/80 px-2">
                    <Link
                      to="/services"
                      className="block text-center text-xs font-semibold text-cyan-400 hover:underline py-1"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdown(true)}
              onMouseLeave={() => setIndustriesDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
                aria-expanded={industriesDropdown}
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${industriesDropdown ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {industriesDropdown && (
                <div className="absolute top-full left-0 w-80 p-2 bg-[#0f0e1a]/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 px-3 py-1 mb-1">
                    Tailored for Your Niche
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {industryItems.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <Link
                          key={ind.path}
                          to={ind.path}
                          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-purple-950/40 hover:text-cyan-300 text-sm font-medium text-zinc-300 transition-colors"
                        >
                          <Icon className="w-4 h-4 text-cyan-400" />
                          <span>{ind.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-zinc-800/80 px-2">
                    <Link
                      to="/industries"
                      className="block text-center text-xs font-semibold text-cyan-400 hover:underline py-1"
                    >
                      Explore All Industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/work"
              className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Work
            </Link>

            <Link
              to="/pricing"
              className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Pricing
            </Link>

            <Link
              to="/ad-idea-generator"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 border border-cyan-800/50 rounded-lg hover:bg-cyan-950/70 transition-colors"
            >
              <Wand2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ad Idea Tool</span>
            </Link>

            <Link
              to="/insights"
              className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Insights
            </Link>
          </nav>

          {/* Right Action Controls: Theme & Primary CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 hover:text-cyan-300 hover:border-cyan-500/60 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <Link
              to={offerActive ? '/free-ads' : '/pricing'}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-lg shadow-purple-900/40 hover:shadow-cyan-500/20 hover:scale-102 active:scale-98 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>{offerActive ? 'Get 5 Free Ads' : 'Order Now'}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg border border-zinc-700/80 bg-zinc-900/80 text-zinc-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07060d]/98 border-b border-zinc-800 p-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <Link
              to="/services"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5"
            >
              All Services (from ₹300)
            </Link>
            <div className="pl-4 space-y-1">
              {serviceItems.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-cyan-300"
                >
                  {s.name}
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5 pt-2"
            >
              Industries
            </Link>
            <div className="pl-4 space-y-1">
              {industryItems.map((ind) => (
                <Link
                  key={ind.path}
                  to={ind.path}
                  className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-cyan-300"
                >
                  {ind.name}
                </Link>
              ))}
            </div>

            <Link
              to="/work"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5"
            >
              Client Work (Flovyn & HWS)
            </Link>

            <Link
              to="/pricing"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5"
            >
              Pricing & Packages
            </Link>

            <Link
              to="/ad-idea-generator"
              className="block px-3 py-2 text-base font-semibold text-cyan-300 bg-cyan-950/40 rounded-lg"
            >
              ⚡ Free Ad Idea Generator
            </Link>

            <Link
              to="/insights"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5"
            >
              Insights & Guides
            </Link>

            <Link
              to="/process"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5"
            >
              24-Hour Process
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-semibold text-zinc-200 hover:text-cyan-300 rounded-lg hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <Link
              to={offerActive ? '/free-ads' : '/pricing'}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4]"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>{offerActive ? 'Claim 5 FREE Ads Worth ₹1000' : 'Order Now'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
