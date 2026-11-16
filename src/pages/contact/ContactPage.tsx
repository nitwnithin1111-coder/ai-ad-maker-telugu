import React from 'react';
import { MessageCircle, Instagram, Mail, Clock, MapPin } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContactForm } from '@/components/common/ContactForm';
import { BRAND, getWhatsAppUrl } from '@/data/constants';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12">
      <SEO
        title="Contact Us | AI Ad Maker Telugu"
        description="Get your high-converting AI video ads, posters and reels delivered in 24 hours. Contact via WhatsApp or Instagram. Pricing from ₹300."
        canonicalPath="/contact"
        ogImage="/og/og-default.svg"
      />

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
            24h Express Turnaround
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Your Campaign <br />
            <span className="gradient-text">Get in Touch Today</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Ready to drive more footfall, sales, and client inquiries? Fill in your project details below or message us directly on WhatsApp for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Direct channels & info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800/80 space-y-4">
              <h2 className="text-lg font-bold text-white">Direct Communication Channels</h2>

              <a
                href={getWhatsAppUrl('Hi! I want to order ads for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 hover:border-[#25D366] text-white transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#25D366] text-black shadow-md">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Official WhatsApp (Primary)</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300">
                    {BRAND.whatsappDisplay}
                  </div>
                </div>
              </a>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-pink-500 text-white transition-all group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Instagram DM & Portfolio</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300">
                    @{BRAND.instagramUsername}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-zinc-300">
                <div className="p-3 rounded-xl bg-zinc-800 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400">Email Inquiries</div>
                  <div className="text-sm font-bold text-white">{BRAND.email}</div>
                </div>
              </div>
            </div>

            {/* Service Area & Terms */}
            <div className="glass-panel p-6 rounded-3xl border border-zinc-800/80 space-y-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <MapPin className="w-4 h-4" />
                <span>Service Region</span>
              </div>
              <p>
                Headquartered in Hyderabad. Actively serving retail, technology, and service businesses across Telangana, Andhra Pradesh, and entrepreneurs globally.
              </p>

              <div className="pt-2 flex items-center gap-2 text-purple-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>24-Hour Express Promise</span>
              </div>
              <p>
                All video ads, posters, and reels are delivered within 24 hours of brief and asset confirmation.
              </p>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800/80 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send Your Ad Brief</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
