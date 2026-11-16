export const BRAND = {
  name: 'AI Ad Maker Telugu',
  tagline: 'High-Converting AI Video Ads & Digital Studio',
  domain: 'https://aiadmakertelugu.com',
  instagram: 'https://www.instagram.com/ai_ad_maker_telugu',
  instagramUsername: 'ai_ad_maker_telugu',
  instagramReviewsHighlight: 'https://www.instagram.com/ai_ad_maker_telugu',
  whatsappNumber: '+919398140354', // Verified WhatsApp contact
  whatsappDisplay: '+91 93981 40354',
  email: 'contact@aiadmakertelugu.com',
  pricingFrom: '₹300',
  deliveryTime: '24 Hours',
  offer: {
    title: '5 FREE Ads Worth ₹1000',
    description: 'Claim 5 complimentary custom-designed ads for your brand. Limited slots available.',
    validUntilDate: '2026-11-30T23:59:59',
    expiryLabel: 'Valid until Nov 30',
  },
  clients: [
    {
      id: 'flovyn-solutions',
      name: 'Flovyn Solutions',
      category: 'Technology & Enterprise Solutions',
      tagline: 'Technology Driven · Solution Focused',
      logo: '/images/clients/flovyn-solutions-logo.jpg',
      aspectRatio: 'horizontal',
      description: 'Enterprise IT solutions and technology infrastructure provider.',
    },
    {
      id: 'hws-hard-water-softener',
      name: 'HWS Hard Water Softener',
      category: 'Home & Industrial Water Systems',
      tagline: 'Advanced Water Softening & Filtration Systems',
      logo: '/images/clients/hws-hard-water-softener-logo.jpg',
      aspectRatio: 'square',
      description: 'Specialized domestic and commercial water softening solutions.',
    },
  ],
  services: [
    {
      id: 'ai-video-ads',
      slug: 'ai-video-ads',
      title: 'AI Video Ads',
      shortDesc: 'Cinematic, hyper-targeted commercial video ads with professional voiceovers.',
      startingPrice: '₹300',
      turnaround: '24 Hours',
      features: [
        'Natural Voiceovers (Multiple Commercial Tones)',
        '1080x1920 (9:16 Vertical) & 1920x1080 (16:9)',
        'Scroll-Stopping Hooks in the First 3 Seconds',
        'Subtitle Typesetting & Brand Color Theming',
        'Ready for Instagram Reels, YouTube Shorts & WhatsApp',
      ],
      icon: 'Video',
    },
    {
      id: 'posters',
      slug: 'posters',
      title: 'Social & Print Posters',
      shortDesc: 'Eye-catching social media posters, festival greetings, and promotional graphics.',
      startingPrice: '₹300',
      turnaround: '24 Hours',
      features: [
        'High-Resolution 4K & Print-Ready Formats',
        'Festival & Seasonal Campaign Templates',
        'Clean Headlines with Typographic Polish',
        'WhatsApp Status & Instagram Feed Optimized',
        'Layered Delivery with Revisions Included',
      ],
      icon: 'Image',
    },
    {
      id: 'reels',
      slug: 'reels',
      title: 'Viral Instagram Reels',
      shortDesc: 'Fast-paced, narrative-driven 9:16 short ads engineered to maximize retention.',
      startingPrice: '₹300',
      turnaround: '24 Hours',
      features: [
        'Hook-Retention-CTA Commercial Framework',
        'Kinetic Typography & Dynamic Sound Effects',
        'B-roll & AI Product Showcases',
        'Audio Trend Synchronization',
        'Direct Instagram Upload Format',
      ],
      icon: 'Smartphone',
    },
    {
      id: 'business-websites',
      slug: 'business-websites',
      title: 'Business Websites',
      shortDesc: 'Lightning-fast, mobile-first responsive websites built for customer conversion.',
      startingPrice: 'Custom Scope',
      turnaround: 'Fast Track',
      features: [
        'Modern Responsive Architecture',
        'Instant WhatsApp Direct Chat Integration',
        '100/100 Core Web Vitals & SEO Optimized',
        'Lightweight Interactive Motion',
        'Zero Monthly Maintenance Headaches',
      ],
      icon: 'Globe',
    },
  ],
};

export function isOfferActive(): boolean {
  const expiry = new Date(BRAND.offer.validUntilDate);
  const now = new Date();
  return now <= expiry;
}

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = `Hello AI Ad Maker Telugu! I would like to inquire about creating ads for my business.`;
  const text = encodeURIComponent(message || defaultMsg);
  const phone = BRAND.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${phone}?text=${text}`;
}

export function getInstagramDmUrl(): string {
  return `https://ig.me/m/${BRAND.instagramUsername}`;
}
