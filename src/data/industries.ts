export interface IndustryData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  adIdeas: {
    title: string;
    concept: string;
    hookEn: string;
    recommendedFormat: string;
  }[];
  sampleCaptions: {
    english: string;
  }[];
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: 'restaurants',
    title: 'Restaurants, Cafes & Cloud Kitchens',
    tagline: 'Mouthwatering Video Ads That Fill Your Tables',
    description:
      'Turn local food lovers into loyal diners. High-definition sizzle reels, weekend buffet specials, and crisp voiceovers that create instant cravings.',
    icon: 'Utensils',
    adIdeas: [
      {
        title: 'The Weekend Biryani & Sizzle Reel',
        concept: 'Close-up slow-motion steam rising from dum handi paired with cheerful commentary.',
        hookEn: 'Craving authentic pot biryani this weekend? You need to taste this!',
        recommendedFormat: '9:16 Instagram Reel (15s)',
      },
      {
        title: 'Family Dining Festival Special',
        concept: 'Vibrant graphic poster showcasing combo platter pricing with a limited-time coupon badge.',
        hookEn: '4-course family feast under ₹999 — only this Sunday!',
        recommendedFormat: '1:1 WhatsApp & Instagram Feed',
      },
      {
        title: 'Chef Special Signature Dish Spotlight',
        concept: 'Behind-the-scenes quick cuts of fresh ingredients tossed on a hot wok with ambient kitchen sizzle.',
        hookEn: 'Ever wondered why our Gongura Chicken is the talk of the town?',
        recommendedFormat: '9:16 Reel with Voiceover',
      },
    ],
    sampleCaptions: [
      {
        english: 'Authentic flavors, sizzling plates! Visit us this weekend or DM for instant table reservations. Delivery in 30 mins. 🍛🔥',
      },
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Open Plots',
    tagline: 'High-Trust Video Tours & Strategic Investment Posters',
    description:
      'Property sales require confidence. We build professional, cinematic plot walkthroughs and statutory-compliant ads with crystal-clear narration.',
    icon: 'Building2',
    adIdeas: [
      {
        title: 'Highway Venture 60-Second Walkthrough',
        concept: 'Dynamic map zoom-in showing proximity to ORR/Highways followed by on-site clear boundary visuals.',
        hookEn: '15 minutes from the Regional Ring Road: Approved villa plots with fast capital appreciation.',
        recommendedFormat: '16:9 & 9:16 Video Ad',
      },
      {
        title: 'EMI Scheme & Clear Title Confidence Ad',
        concept: 'Clean typographic motion graphics explaining bank loan eligibility and instant registration guarantee.',
        hookEn: 'Stop paying rent. Own a 200 sq. yard plot with easy monthly installments.',
        recommendedFormat: '1:1 Square Flyer & 9:16 Reel',
      },
      {
        title: 'Weekend Site Visit Invitation Campaign',
        concept: 'Friendly invite highlighting free site cab pickup and spot registration discounts.',
        hookEn: 'Free cab pickup for your family this Sunday to inspect prime growth plots.',
        recommendedFormat: 'WhatsApp Story & Status',
      },
    ],
    sampleCaptions: [
      {
        english: 'Secure your family financial future with approved open plots. Instant registration available. DM for complete layout plan. 🏡📈',
      },
    ],
  },
  {
    slug: 'fashion-and-retail',
    title: 'Fashion, Boutiques & Jewellery',
    tagline: 'Glamorous Visuals & Festive Season Shopper Triggers',
    description:
      'Attract boutique shoppers with elegant close-ups of fabric weave, zari shine, and festive collections.',
    icon: 'Sparkles',
    adIdeas: [
      {
        title: 'Festive Handloom Silk Unboxing',
        concept: 'Smooth macro pan of pure silk borders catching golden studio light with traditional music.',
        hookEn: 'Looking for exclusive wedding sarees without paying showroom markups?',
        recommendedFormat: '9:16 Vertical Reel',
      },
      {
        title: 'Boutique Custom Stitching Showcase',
        concept: 'Quick time-lapse of embroidery detailing the craftsmanship and fast delivery pledge.',
        hookEn: 'Get your customized bridal blouse ready in just 48 hours!',
        recommendedFormat: '9:16 Reel with Music',
      },
      {
        title: 'Limited Stock Festive Flash Sale',
        concept: 'High-fashion editorial graphic with bold pricing and direct WhatsApp order button.',
        hookEn: 'First 50 orders get a matching designer accessory complimentary!',
        recommendedFormat: '1:1 Poster & 9:16 Story',
      },
    ],
    sampleCaptions: [
      {
        english: 'Celebrate tradition with handcrafted elegance. Direct manufacturer prices and fast doorstep delivery. Inquire now via WhatsApp! ✨👗',
      },
    ],
  },
  {
    slug: 'clinics-and-healthcare',
    title: 'Clinics, Dental & Healthcare',
    tagline: 'Empathetic, Authoritative Patient Awareness Ads',
    description:
      'Build community confidence. Informative medical explainer videos, patient comfort assurances, and doctor consultation announcements.',
    icon: 'HeartPulse',
    adIdeas: [
      {
        title: 'Dental Smile Makeover & Painless Treatment',
        concept: 'Reassuring doctor narration explaining modern dental aligners and laser procedures without fear.',
        hookEn: 'Hiding your smile in photos? Discover painless modern invisible aligners.',
        recommendedFormat: '9:16 Doctor-Facing Reel',
      },
      {
        title: 'Preventive Health Checkup Package',
        concept: 'Clean infographics detailing 65+ vital health parameters included in a discounted family checkup.',
        hookEn: 'When was the last time your parents had their complete health screened?',
        recommendedFormat: '1:1 Visual Infographic',
      },
      {
        title: 'Joint Pain & Physiotherapy Recovery',
        concept: '3D animated joint motion showing mobility restoration through certified physiotherapy techniques.',
        hookEn: 'Living with persistent knee pain? Relief is closer than you think.',
        recommendedFormat: '16:9 & 9:16 Animated Video',
      },
    ],
    sampleCaptions: [
      {
        english: 'Compassionate healthcare for the whole family. Clean clinics, certified specialists, and advanced diagnostics. Book your slot today. 🏥🩺',
      },
    ],
  },
  {
    slug: 'tech-and-startups',
    title: 'Tech Companies, SaaS & IT Startups',
    tagline: 'Sleek Product Demos & High-Conversion B2B Visuals',
    description:
      'Proven expertise with leaders like Flovyn Solutions. Showcase complex software, cloud solutions, and automation with modern 3D motion and crisp messaging.',
    icon: 'Cpu',
    adIdeas: [
      {
        title: 'SaaS Platform Feature Tour',
        concept: '3D UI tilt screen recordings showing dashboard analytics and automated reports saving manual hours.',
        hookEn: 'Automate 80% of repetitive operational tasks with our enterprise software.',
        recommendedFormat: '16:9 Explainer & 9:16 Reel',
      },
      {
        title: 'IT Infrastructure & Cloud Migration',
        concept: 'Reliability-focused graphic illustrating zero downtime server architecture and cybersecurity.',
        hookEn: 'Is legacy software slowing down your enterprise? Modernize with confidence.',
        recommendedFormat: 'LinkedIn & Social Grid',
      },
      {
        title: 'App Launch & Early Access Teaser',
        concept: 'Fast-paced 15-second mobile mockups sliding with glowing UI highlights and clear download CTA.',
        hookEn: 'The smarter way to manage your field team is finally here.',
        recommendedFormat: '9:16 Motion Reel',
      },
    ],
    sampleCaptions: [
      {
        english: 'Scale your business with purpose-built software and enterprise-grade tech. Contact our engineering team for a tailored demo. 💻🚀',
      },
    ],
  },
  {
    slug: 'home-services',
    title: 'Home Services, Filtration & Interior Design',
    tagline: 'Problem-Solving Ads for Local Homeowners',
    description:
      'Backed by proven work with clients like HWS Hard Water Softener. Target everyday household pain points with instant solution videos and high credibility.',
    icon: 'Wrench',
    adIdeas: [
      {
        title: 'Hard Water Problem vs. Solution Transformation',
        concept: 'Split screen comparing chalky white salt stains on taps with shiny, spotless treated water outcome.',
        hookEn: 'White stains on bathroom tiles and dry hair? Here is the real reason why.',
        recommendedFormat: '9:16 Direct Response Video',
      },
      {
        title: 'Modular Kitchen Before & After Makeover',
        concept: 'Smooth 3D camera pan transitioning an old messy kitchen into an ergonomic, illuminated modular setup.',
        hookEn: 'Transform your kitchen space in just 7 working days with factory-direct pricing.',
        recommendedFormat: '9:16 Reel with Music',
      },
      {
        title: 'Emergency Home Service Dispatch',
        concept: 'Clear service checklist (electric, plumbing, deep cleaning) with 60-minute doorstep guarantee.',
        hookEn: 'Trained technicians at your doorstep in under 60 minutes.',
        recommendedFormat: '1:1 WhatsApp Flyer',
      },
    ],
    sampleCaptions: [
      {
        english: 'Protect your home appliances and upgrade your lifestyle with tested solutions. Free doorstep inspection available. Message us today. 🛠️🚿',
      },
    ],
  },
];
