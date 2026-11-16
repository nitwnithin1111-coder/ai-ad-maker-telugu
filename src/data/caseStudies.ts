export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  category: string;
  tagline: string;
  logo: string;
  clientType: 'technology' | 'home-services';
  brief: string;
  deliverables: string[];
  whatWeMade: string[];
  sampleHooks: { en: string }[];
  instagramHighlightLink: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'flovyn-solutions',
    slug: 'flovyn-solutions',
    clientName: 'Flovyn Solutions',
    category: 'Technology & Enterprise Solutions',
    tagline: 'Technology Driven · Solution Focused',
    logo: '/images/clients/flovyn-solutions-logo.jpg',
    clientType: 'technology',
    brief:
      'Flovyn Solutions needed professional digital visual assets to communicate their technological capabilities and solution-focused enterprise services to potential business partners.',
    deliverables: [
      'Tech-focused promotional video ad in 16:9 and 9:16 vertical formats',
      'High-contrast B2B service showcase posters for social distribution',
      'Clean typography overlays aligning with corporate brand identity',
      'Motion graphics emphasizing data security and digital transformation',
    ],
    whatWeMade: [
      'Crafted a high-tech visual narrative showing software efficiency, system integration, and proactive customer support.',
      'Developed high-retention English captions emphasizing quick response times and technological precision.',
      'Optimized reel delivery specs for direct deployment across LinkedIn and Instagram business channels.',
    ],
    sampleHooks: [
      {
        en: 'Struggling with fragmented enterprise tech? Here is how Flovyn streamlines your workflow.',
      },
    ],
    instagramHighlightLink: 'https://www.instagram.com/ai_ad_maker_telugu',
  },
  {
    id: 'hws-hard-water-softener',
    slug: 'hws-hard-water-softener',
    clientName: 'HWS Hard Water Softener',
    category: 'Water Softening & Home Filtration',
    tagline: 'Advanced Water Softening & Filtration Systems',
    logo: '/images/clients/hws-hard-water-softener-logo.jpg',
    clientType: 'home-services',
    brief:
      'HWS Hard Water Softener required high-impact video ads and informative WhatsApp posters to educate homeowners about hard water problems (hair fall, bathroom scaling, pipe blockages) and introduce their softening systems.',
    deliverables: [
      'Relatable storytelling video ad focused on everyday home water challenges',
      'Side-by-side comparison graphics: scaling in pipes vs. clean soft water flow',
      '9:16 WhatsApp Status and Instagram Reel with direct contact callouts',
      'Print-ready promotional flyers for regional distribution',
    ],
    whatWeMade: [
      'Designed an immediate visual hook showing white scale marks on taps followed by the transformation after using HWS equipment.',
      'Recorded a warm, reassuring voiceover explaining the simple setup and long-term savings on appliance repairs.',
      'Integrated verified product images and clear contact prompts.',
    ],
    sampleHooks: [
      {
        en: 'Hard water ruining your bathroom fittings and hair? Protect your home with HWS.',
      },
    ],
    instagramHighlightLink: 'https://www.instagram.com/ai_ad_maker_telugu',
  },
];
