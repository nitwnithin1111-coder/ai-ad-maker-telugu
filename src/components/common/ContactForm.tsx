import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Instagram } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '@/data/constants';

interface ContactFormProps {
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService = 'ai-video-ads' }) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(defaultService);
  const [platform, setPlatform] = useState<'whatsapp' | 'instagram'>('whatsapp');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; businessName?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; businessName?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!businessName.trim()) {
      newErrors.businessName = 'Please enter your business name';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Format prefilled message
    const formattedMessage = `Hello AI Ad Maker Telugu!
Name: ${name}
Business: ${businessName}
Selected Service: ${service}
Notes: ${message || 'I would like to discuss ad concepts and 24-hour turnaround.'}`;

    if (platform === 'whatsapp') {
      const url = getWhatsAppUrl(formattedMessage);
      window.open(url, '_blank');
    } else {
      window.open(BRAND.instagram, '_blank');
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-3xl bg-zinc-900/90 border border-cyan-500/40 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          Inquiry Ready!
        </h3>
        <p className="text-zinc-300 text-sm max-w-md mx-auto">
          Thank you {name}! Your inquiry has been forwarded to {platform === 'whatsapp' ? 'WhatsApp' : 'Instagram'}. Our creative team will respond right away.
        </p>
        <div className="pt-4 flex justify-center gap-3">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-cyan-400 hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Platform Selector */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Where would you like to receive your ad draft?
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setPlatform('whatsapp')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
              platform === 'whatsapp'
                ? 'bg-[#25D366]/20 border-[#25D366] text-white shadow-lg shadow-[#25D366]/20'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp (Instant)</span>
          </button>

          <button
            type="button"
            onClick={() => setPlatform('instagram')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
              platform === 'instagram'
                ? 'bg-purple-900/40 border-pink-500 text-white shadow-lg shadow-pink-900/30'
                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>Instagram DM</span>
          </button>
        </div>
      </div>

      {/* Name and Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 mb-1">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
            }}
            placeholder="e.g. Kiran Rao"
            className={`w-full px-4 py-3 rounded-xl bg-zinc-900/80 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
              errors.name ? 'border-red-500' : 'border-zinc-800 focus:border-cyan-500'
            }`}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-business" className="block text-xs font-semibold text-zinc-300 mb-1">
            Business Name / Category *
          </label>
          <input
            id="contact-business"
            type="text"
            value={businessName}
            onChange={(e) => {
              setBusinessName(e.target.value);
              if (errors.businessName) setErrors(prev => ({ ...prev, businessName: undefined }));
            }}
            placeholder="e.g. Royal Cafe / HWS / Flovyn"
            className={`w-full px-4 py-3 rounded-xl bg-zinc-900/80 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
              errors.businessName ? 'border-red-500' : 'border-zinc-800 focus:border-cyan-500'
            }`}
          />
          {errors.businessName && <p className="text-red-400 text-xs mt-1">{errors.businessName}</p>}
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="contact-service" className="block text-xs font-semibold text-zinc-300 mb-1">
          Required Service
        </label>
        <select
          id="contact-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        >
          <option value="ai-video-ads">AI Video Ads (24h Delivery - from ₹300)</option>
          <option value="posters">Social & Print Posters</option>
          <option value="reels">Viral Instagram Reels (9:16 Vertical)</option>
          <option value="business-websites">Business Websites</option>
          <option value="5-free-ads">Claim 5 Free Ads Offer (Valid until Nov 30)</option>
        </select>
      </div>

      {/* Message / Brief */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 mb-1">
          Project Details / Ad Goals (Optional)
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you want to promote (offers, target audience, preferred tone)..."
          className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#6d28d9] via-[#1e1b8f] to-[#06b6d4] shadow-lg shadow-purple-950/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-98 transition-all"
      >
        <Send className="w-4 h-4" />
        <span>
          Send Brief via {platform === 'whatsapp' ? 'WhatsApp' : 'Instagram'}
        </span>
      </button>

      <p className="text-[11px] text-zinc-500 text-center">
        🔒 100% confidential. No spam, immediate 24h creative response.
      </p>
    </form>
  );
};

export default ContactForm;
