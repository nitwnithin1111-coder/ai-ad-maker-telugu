export interface IndustryOption {
  id: string;
  name: string;
}

export interface GoalOption {
  id: string;
  name: string;
}

export interface FestivalOption {
  id: string;
  name: string;
}

export interface GeneratedConcept {
  id: string;
  title: string;
  format: string;
  hookEn: string;
  storyboard: string;
  ctaTextEn: string;
}

export const GENERATOR_INDUSTRIES: IndustryOption[] = [
  { id: 'restaurants', name: 'Restaurants & Food Business' },
  { id: 'real-estate', name: 'Real Estate & Investment Plots' },
  { id: 'fashion', name: 'Fashion & Boutiques' },
  { id: 'clinics', name: 'Clinics & Healthcare' },
  { id: 'home-services', name: 'Home Services & Water Systems' },
  { id: 'tech', name: 'Technology & IT Startups' },
];

export const GENERATOR_GOALS: GoalOption[] = [
  { id: 'leads', name: 'Get Direct WhatsApp Inquiries' },
  { id: 'awareness', name: 'Build Brand Trust & Local Recognition' },
  { id: 'footfall', name: 'Drive Store & Dine-In Visits' },
  { id: 'sales', name: 'Promote Limited Festive Offers' },
];

export const GENERATOR_FESTIVALS: FestivalOption[] = [
  { id: 'general', name: 'Everyday / Non-Festive' },
  { id: 'sankranti', name: 'Sankranti Season' },
  { id: 'ugadi', name: 'Ugadi New Year' },
  { id: 'dussehra', name: 'Dussehra & Navratri' },
  { id: 'diwali', name: 'Diwali Lights Festival' },
];

export function generateAdConcepts(
  industryId: string,
  _goalId: string,
  festivalId: string
): GeneratedConcept[] {
  const isFestive = festivalId !== 'general';
  const festEn = GENERATOR_FESTIVALS.find(f => f.id === festivalId)?.name || 'Festive';

  if (industryId === 'restaurants') {
    return [
      {
        id: 'c1',
        title: isFestive ? `${festEn} Family Feast Special` : 'Weekend Taste Sensation',
        format: '9:16 Instagram Reel (15s)',
        hookEn: isFestive
          ? `Celebrate this ${festEn} with a grand feast crafted for the entire family. Book your table now!`
          : 'Craving the most authentic dum biryani in town? Take a 5-second peek into our royal kitchen!',
        storyboard:
          'Scene 1: Sizzling hot dum handi opening with rich aromatic steam. Scene 2: Crispy starters landing on table. Scene 3: Clean pricing badge and direct WhatsApp reservation link.',
        ctaTextEn: 'WhatsApp now for instant table reservation',
      },
      {
        id: 'c2',
        title: 'Customer Reaction Sizzle',
        format: '9:16 Quick Cuts Video (20s)',
        hookEn: 'Ever wondered why our tables are packed every single evening? Just one bite explains it all.',
        storyboard:
          'Fast-paced 1-second cuts of genuine happy expressions, cheese pulls, refreshing mocktails, and cozy ambiance.',
        ctaTextEn: 'Click for menu & Google Maps location',
      },
      {
        id: 'c3',
        title: 'Unlimited Combo Platter Flyer',
        format: '1:1 Feed Poster & WhatsApp Status',
        hookEn: '4-course mega platter at just ₹799. Dine-in offer available for a limited time!',
        storyboard:
          'High-contrast food typography with vibrant purple/cyan glow borders and an unmistakable price tag.',
        ctaTextEn: 'DM for your exclusive offer coupon',
      },
    ];
  }

  if (industryId === 'real-estate') {
    return [
      {
        id: 'c1',
        title: isFestive ? `${festEn} Golden Investment Plot` : 'Highway Venture Clear Title Plots',
        format: '16:9 Landscape & 9:16 Vertical Video',
        hookEn: isFestive
          ? `Gift your children a permanent appreciating asset this ${festEn}. 100% clear title plots.`
          : 'Just 10 minutes from the highway! Government-approved plots ready for instant registration.',
        storyboard:
          'Animated 3D drone zoom from city landmark to venture entrance, showing 40ft blacktop roads, electricity, and park area.',
        ctaTextEn: 'WhatsApp for free weekend site visit cab',
      },
      {
        id: 'c2',
        title: 'Rent vs. EMI Decision Framework',
        format: '9:16 Kinetic Typography Reel',
        hookEn: 'Why waste money on endless rent? Redirect the same monthly budget toward your own titled land.',
        storyboard:
          'Comparison split screen: rent receipts fading away vs an increasing land valuation graph with peaceful family visual.',
        ctaTextEn: 'Get EMI calculation brochure on WhatsApp',
      },
      {
        id: 'c3',
        title: 'Spot Registration Discount Poster',
        format: '1:1 Square Flyer & WhatsApp Flyer',
        hookEn: 'Free registration charges for the first 5 site bookings this Sunday! Limited inventory.',
        storyboard:
          'Professional blueprint background, layout approvals stamp, and bold high-contrast typography.',
        ctaTextEn: 'Message now for complete layout map',
      },
    ];
  }

  // Default universal high-converting pack
  return [
    {
      id: 'c1',
      title: isFestive ? `${festEn} High-Intent Customer Ad` : 'Problem-Solution Direct Response Reel',
      format: '9:16 Instagram Reel (15s)',
      hookEn: isFestive
        ? `Celebrate this ${festEn} with exclusive benefits designed specifically for your needs.`
        : 'Struggling with unreliable services? Here is the exact solution you have been looking for.',
      storyboard:
        'Hook in seconds 0-3 with relatable customer problem -> Quick product/service highlight -> One-tap contact CTA.',
      ctaTextEn: 'WhatsApp now for instant consultation & quote',
    },
    {
      id: 'c2',
      title: 'Trust & Transparency Showcase',
      format: '1:1 Social Graphic & Video Ad',
      hookEn: 'Zero hidden fees. 100% transparent pricing and guaranteed on-time completion.',
      storyboard:
        'Clean checklist of deliverables, verified quality badges, and customer reassurance messaging.',
      ctaTextEn: 'Get a free honest quote today',
    },
    {
      id: 'c3',
      title: 'Limited Offer Urgent Flyer',
      format: '1:1 Feed Poster & 9:16 Story',
      hookEn: 'Exclusive savings for the next 20 inquiries! Valid for this week only.',
      storyboard:
        'Vibrant brand colors (#6d28d9 and #06b6d4) with eye-catching badges and bold high-impact headline.',
      ctaTextEn: 'Message directly to claim discount',
    },
  ];
}
