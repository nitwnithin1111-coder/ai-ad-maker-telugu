import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://aiadmakertelugu.com';
const distDir = path.resolve(__dirname, '..', 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

const baseTemplate = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const routes = [
  {
    path: '',
    title: 'AI Ad Maker Telugu | 24h AI Video Ads, Posters & Reels',
    description: 'Premier AI creative studio crafting high-converting video ads, posters, reels and business websites in 24 hours. Pricing from ₹300 per ad. Get 5 FREE ads.',
    ogImage: '/og/og-home.svg',
    h1: 'High-Converting AI Video Ads, Posters & Reels in 24 Hours',
    schemaType: 'ProfessionalService',
  },
  {
    path: 'services',
    title: 'Services | AI Ad Maker Telugu — 24h Ads & Websites',
    description: 'Explore AI Video Ads, Posters, Viral Reels, and Business Websites. 24-hour delivery, pricing from ₹300 per ad. Get 5 FREE ads.',
    ogImage: '/og/og-services.svg',
    h1: 'Creative Services & Solutions in 24 Hours',
    schemaType: 'Service',
  },
  {
    path: 'services/ai-video-ads',
    title: 'AI Video Ads (24h Delivery) | AI Ad Maker Telugu',
    description: 'Cinematic AI video ads delivered in 24 hours. Pricing from ₹300 per ad. Proven for local businesses, restaurants, tech and healthcare.',
    ogImage: '/og/og-services.svg',
    h1: 'Cinematic AI Video Ads — 24h Turnaround',
    schemaType: 'Service',
  },
  {
    path: 'services/posters',
    title: 'Social & Print Posters | AI Ad Maker Telugu',
    description: 'High-resolution 4K social media posters, promotional flyers and creative banners. Delivery in 24 hours from ₹300.',
    ogImage: '/og/og-services.svg',
    h1: 'Social Media & Print Posters (4K)',
    schemaType: 'Service',
  },
  {
    path: 'services/reels',
    title: 'Viral Instagram Reels (9:16) | AI Ad Maker Telugu',
    description: 'High-retention 9:16 viral vertical reels. Sound effects, kinetic typography and 24-hour turnaround from ₹300.',
    ogImage: '/og/og-services.svg',
    h1: 'Viral Instagram Reels (9:16 Vertical)',
    schemaType: 'Service',
  },
  {
    path: 'services/business-websites',
    title: 'Fast Business Websites | AI Ad Maker Telugu',
    description: 'Lightning-fast modern business websites. 100/100 Core Web Vitals, direct WhatsApp integration, and responsive mobile architecture.',
    ogImage: '/og/og-services.svg',
    h1: 'High-Performance Modern Business Websites',
    schemaType: 'Service',
  },
  {
    path: 'work',
    title: 'Client Work & Case Studies | AI Ad Maker Telugu',
    description: 'Explore verified case studies featuring Flovyn Solutions (technology) and HWS Hard Water Softener. Honest deliverables and direct links to Instagram client reviews.',
    ogImage: '/og/og-work.svg',
    h1: 'Client Case Studies & Verified Deliverables',
    schemaType: 'CollectionPage',
  },
  {
    path: 'work/flovyn-solutions',
    title: 'Flovyn Solutions Case Study | AI Ad Maker Telugu',
    description: 'Verified case study: How Flovyn Solutions leveraged high-tech promotional video ads and clean B2B social graphics to communicate enterprise software reliability.',
    ogImage: '/og/og-work.svg',
    h1: 'Flovyn Solutions: Technology Driven Showcase',
    schemaType: 'CreativeWork',
  },
  {
    path: 'work/hws-hard-water-softener',
    title: 'HWS Hard Water Softener Case Study | AI Ad Maker',
    description: 'Verified case study: How HWS Hard Water Softener used clear problem-solution storytelling and scientific proof reels to build trust with local homeowners.',
    ogImage: '/og/og-work.svg',
    h1: 'HWS Hard Water Softener: Commercial Video Campaign',
    schemaType: 'CreativeWork',
  },
  {
    path: 'pricing',
    title: 'Pricing (From ₹300) | AI Ad Maker Telugu',
    description: 'Transparent ad pricing from ₹300 per ad. 24-hour turnaround. Claim 5 FREE ads worth ₹1000 valid until Nov 30. No hidden agency retainers.',
    ogImage: '/og/og-pricing.svg',
    h1: 'Transparent Pricing from ₹300 per Ad',
    schemaType: 'OfferCatalog',
  },
  {
    path: 'free-ads',
    title: 'Get 5 FREE Ads Worth ₹1000 | AI Ad Maker Telugu',
    description: 'Claim 5 complimentary custom-designed ads worth ₹1000 for your business. Valid until Nov 30. Delivery in 24 hours. Limited slots.',
    ogImage: '/og/og-free-ads.svg',
    h1: 'Claim 5 FREE Ads Worth ₹1000 (Ends Nov 30)',
    schemaType: 'SpecialAnnouncement',
  },
  {
    path: 'process',
    title: '24-Hour Production Process | AI Ad Maker Telugu',
    description: 'Discover our 24-hour AI advertising pipeline: from hook ideation and AI visual generation to sound design and final express delivery.',
    ogImage: '/og/og-services.svg',
    h1: 'Our 24-Hour Creative Engineering Process',
    schemaType: 'HowTo',
  },
  {
    path: 'about',
    title: 'About Us | AI Ad Maker Telugu',
    description: 'The creative AI studio crafting high-converting video ads, posters, reels and business websites. Honest, transparent, 24-hour delivery from ₹300.',
    ogImage: '/og/og-default.svg',
    h1: 'About AI Ad Maker Telugu & Our Mission',
    schemaType: 'AboutPage',
  },
  {
    path: 'contact',
    title: 'Contact Us | AI Ad Maker Telugu',
    description: 'Get your high-converting AI video ads, posters and reels delivered in 24 hours. Contact via WhatsApp or Instagram. Pricing from ₹300.',
    ogImage: '/og/og-default.svg',
    h1: 'Contact AI Ad Maker Telugu (24h Express)',
    schemaType: 'ContactPage',
  },
  {
    path: 'faq',
    title: 'FAQ | AI Ad Maker Telugu — Common Questions',
    description: 'Frequently asked questions about AI Ad Maker Telugu: 24h turnaround, pricing from ₹300, 5 FREE ads offer, revisions, formats, and verified client reviews.',
    ogImage: '/og/og-default.svg',
    h1: 'Frequently Asked Questions & Answers',
    schemaType: 'FAQPage',
  },
  {
    path: 'industries',
    title: 'Industries We Serve | AI Ad Maker Telugu',
    description: 'High-converting AI video ads and posters tailored for restaurants, real estate, fashion boutiques, clinics, tech startups and home services.',
    ogImage: '/og/og-industries.svg',
    h1: 'Industry-Specific Advertising Frameworks',
    schemaType: 'CollectionPage',
  },
  {
    path: 'industries/restaurants',
    title: 'Restaurant & Food Ads | AI Ad Maker Telugu',
    description: 'Mouthwatering video ads and sizzle reels for restaurants, cafes and cloud kitchens. Drive weekend footfall in 24 hours from ₹300.',
    ogImage: '/og/og-industries.svg',
    h1: 'Restaurant & Dining Video Ads',
    schemaType: 'Service',
  },
  {
    path: 'industries/real-estate',
    title: 'Real Estate & Plot Ads | AI Ad Maker Telugu',
    description: 'High-trust property walkthrough video ads and clear investment flyers for open plots and gated communities. 24h turnaround.',
    ogImage: '/og/og-industries.svg',
    h1: 'Real Estate & Property Advertising',
    schemaType: 'Service',
  },
  {
    path: 'industries/fashion-and-retail',
    title: 'Fashion & Boutique Ads | AI Ad Maker Telugu',
    description: 'Festive collection showcases, boutique stitching reels and jewellery highlights. Drive eager shoppers in 24 hours.',
    ogImage: '/og/og-industries.svg',
    h1: 'Fashion, Apparel & Boutique Ads',
    schemaType: 'Service',
  },
  {
    path: 'industries/clinics-and-healthcare',
    title: 'Healthcare & Clinic Ads | AI Ad Maker Telugu',
    description: 'Empathetic, authoritative medical explainer video ads for dental clinics, physiotherapy and wellness practitioners.',
    ogImage: '/og/og-industries.svg',
    h1: 'Healthcare & Clinic Promotional Video Ads',
    schemaType: 'Service',
  },
  {
    path: 'industries/tech-and-startups',
    title: 'Tech & Startup Ads | AI Ad Maker Telugu',
    description: 'Sleek software UI walkthroughs and high-conversion B2B motion graphics for tech companies and startups. Proven with Flovyn Solutions.',
    ogImage: '/og/og-industries.svg',
    h1: 'Tech Company & IT Startup Video Ads',
    schemaType: 'Service',
  },
  {
    path: 'industries/home-services',
    title: 'Home Services & Filtration Ads | AI Ad Maker',
    description: 'Problem-solving ads for water softeners, interior design and maintenance services. Proven with HWS Hard Water Softener in 24 hours.',
    ogImage: '/og/og-industries.svg',
    h1: 'Home Services & Appliance Ads',
    schemaType: 'Service',
  },
  {
    path: 'insights',
    title: 'Advertising Insights & Guides | AI Ad Maker',
    description: 'Actionable masterclasses and frameworks: How to write high-retention ad hooks, complete Instagram & WhatsApp size guides, and festival campaign planning.',
    ogImage: '/og/og-insights.svg',
    h1: 'Advertising Insights & Creative Guides',
    schemaType: 'Blog',
  },
  {
    path: 'insights/how-to-write-a-telugu-ad-hook',
    title: 'How to Write a High-Converting Ad Hook | AI Ad Maker',
    description: 'Why generic translations fail and how curiosity-driven pattern interrupts command attention in the first 3 seconds of video ads.',
    ogImage: '/og/og-insights.svg',
    h1: 'How to Write a High-Converting Video Ad Hook',
    schemaType: 'Article',
  },
  {
    path: 'insights/ad-sizes-for-instagram-and-whatsapp',
    title: 'Instagram & WhatsApp Ad Sizes | AI Ad Maker',
    description: 'Complete pixel blueprint for 9:16 vertical reels, 1:1 feeds, and WhatsApp statuses. Safe zones, bitrates, and compression avoidance.',
    ogImage: '/og/og-insights.svg',
    h1: 'The Ultimate Guide to Ad Sizes for Instagram & WhatsApp',
    schemaType: 'Article',
  },
  {
    path: 'insights/why-short-video-ads-convert',
    title: 'Why Short Video Ads Convert | AI Ad Maker',
    description: 'Understanding modern consumer psychology: why 15-30s short video ads outperform static posters 3x in driving inquiries.',
    ogImage: '/og/og-insights.svg',
    h1: 'Why 15-30 Second Short Video Ads Convert Higher',
    schemaType: 'Article',
  },
  {
    path: 'insights/how-to-plan-a-festival-campaign',
    title: 'Festival Campaign Strategy | AI Ad Maker Telugu',
    description: 'How to plan high-ROI seasonal campaigns. Creative timelines, promotional offers, and 24h rapid delivery advantages.',
    ogImage: '/og/og-insights.svg',
    h1: 'How to Plan High-ROI Festive Campaigns',
    schemaType: 'Article',
  },
  {
    path: 'ad-idea-generator',
    title: 'Ad Idea Generator | Free Creative Tool',
    description: 'Free client-side tool: Choose your industry, goal, and campaign theme to generate 3 high-retention ad concepts and script hooks. No API key needed.',
    ogImage: '/og/og-default.svg',
    h1: 'Interactive Ad Idea & Hook Generator Tool',
    schemaType: 'WebApplication',
  },
  {
    path: 'showreel',
    title: '3D Phone Showreel | AI Ad Maker Telugu',
    description: 'Experience our full-screen 3D interactive phone showreel showcasing high-retention AI video ads, reels and campaign formats.',
    ogImage: '/og/og-services.svg',
    h1: 'Interactive 3D Phone Showreel Experience',
    schemaType: 'MediaObject',
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | AI Ad Maker Telugu',
    description: 'Privacy policy and data handling guidelines for AI Ad Maker Telugu client projects and inquiries.',
    ogImage: '/og/og-default.svg',
    h1: 'Privacy Policy',
    schemaType: 'WebPage',
  },
  {
    path: 'terms',
    title: 'Terms of Service | AI Ad Maker Telugu',
    description: 'Terms of service, 24-hour turnaround commitments, and client creative guidelines for AI Ad Maker Telugu.',
    ogImage: '/og/og-default.svg',
    h1: 'Terms of Service',
    schemaType: 'WebPage',
  },
];

routes.forEach((route) => {
  const fullUrl = route.path ? `${DOMAIN}/${route.path}` : `${DOMAIN}/`;

  let html = baseTemplate;

  // Replace Title & Description
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Set Language to English
  html = html.replace(/<html lang=".*?"/, `<html lang="en"`);

  // Inject Canonical and Social Meta
  const metaHead = `
    <!-- Canonical -->
    <link rel="canonical" href="${fullUrl}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${DOMAIN}${route.ogImage}" />
    <meta property="og:site_name" content="AI Ad Maker Telugu" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${fullUrl}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${DOMAIN}${route.ogImage}" />
  `;

  html = html.replace('</head>', `${metaHead}\n</head>`);

  // Inject Crawler Pre-rendered H1 & Semantic Body
  const crawlerBody = `
    <div id="prerendered-content" style="display:none;" aria-hidden="true">
      <h1>${route.h1}</h1>
      <p>${route.description}</p>
    </div>
  `;
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n${crawlerBody}`);

  // Determine output location
  let targetFile;
  if (route.path === '') {
    targetFile = path.join(distDir, 'index.html');
  } else {
    const routeFolder = path.join(distDir, route.path);
    if (!fs.existsSync(routeFolder)) {
      fs.mkdirSync(routeFolder, { recursive: true });
    }
    targetFile = path.join(routeFolder, 'index.html');
  }

  fs.writeFileSync(targetFile, html, 'utf8');
});

// Also generate custom 404.html
const notFoundHtml = baseTemplate
  .replace(/<title>.*?<\/title>/, '<title>404 — Page Not Found | AI Ad Maker Telugu</title>')
  .replace(
    '</head>',
    '  <meta name="robots" content="noindex, nofollow" />\n</head>'
  );
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');

console.log(`Pre-rendered ${routes.length} routes + 404.html successfully.`);
