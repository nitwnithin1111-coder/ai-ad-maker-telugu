export interface Article {
  slug: string;
  title: string;
  readingTime: string;
  date: string;
  category: string;
  excerpt: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'how-to-write-a-telugu-ad-hook',
    title: 'How to Write a High-Converting Ad Hook in the First 3 Seconds',
    readingTime: '5 min read',
    date: '2026-11-10',
    category: 'Creative Copywriting',
    excerpt:
      'Why generic translations fail, and how conversational phrasing, immediate curiosity, and audience relevance turn passive scrollers into paying leads.',
    sections: [
      {
        heading: 'The Fatal Flaw: Literal Translation vs. Conversational Pacing',
        content: [
          'Most businesses translate advertising copy word-for-word into formal textbook language. The outcome feels wooden, distant, and unnatural. In everyday life, audiences respond to colloquial, rhythmic, and emotionally vibrant phrases.',
          'Instead of stiff corporate phrasing, high-performing ads use warm conversational triggers that speak directly to genuine everyday problems.',
        ],
      },
      {
        heading: 'The 3 Proven Hook Frameworks for Regional Video Ads',
        content: [
          '1. The Empathy Problem Hook: Identify an unspoken daily annoyance immediately. Example: "Are hard borewell salts ruining your bathroom fittings and hair?"',
          '2. The Insider Curiosity Hook: Challenge a common myth or reveal a local secret. Example: "Looking for the most authentic Biryani in town? Here is the spot locals rave about!"',
          '3. The Clear Value Hook: Lead directly with unambiguous savings or special terms. Example: "Get a studio-grade video ad ready in 24 hours starting from just ₹300!"',
        ],
      },
      {
        heading: 'Visual and Audio Alignment',
        content: [
          'A hook is not just words; it is sensory synchronization. If the voiceover asks about water scaling, the screen must display chalky tap deposits at frame zero. Bold typography with high contrast guarantees retention even when users browse with sound muted.',
        ],
      },
    ],
  },
  {
    slug: 'ad-sizes-for-instagram-and-whatsapp',
    title: 'The Ultimate Guide to Ad Sizes and Formats for Instagram & WhatsApp',
    readingTime: '6 min read',
    date: '2026-11-05',
    category: 'Design & Specifications',
    excerpt:
      'Avoid cropped text, blurry compression, and black bars. A precise pixel and aspect ratio blueprint for 9:16 vertical reels, 1:1 feeds, and WhatsApp Status.',
    sections: [
      {
        heading: 'Why Resolution and Safe Zones Matter',
        content: [
          'When designing 9:16 vertical videos for Instagram Reels and WhatsApp Status (1080 × 1920 pixels), platform UI overlays cover significant portions of the canvas. The bottom 20% contains usernames, audio titles, and captions, while the right margin holds like and share buttons.',
          'Always keep critical text, logos, and contact links within the Title Safe Zone (vertically between 250px and 1450px, horizontally indented 60px on either side).',
        ],
      },
      {
        heading: 'Format Blueprint by Channel',
        content: [
          '• Instagram Reels & Stories: 1080 × 1920 pixels (9:16 aspect ratio). Ideal length is 15 to 30 seconds for optimal algorithmic repeat loops.',
          '• Instagram Feed Square: 1080 × 1080 pixels (1:1 aspect ratio). Best for festival posters, client showcases, and carousel announcements.',
          '• Instagram Feed Portrait: 1080 × 1350 pixels (4:5 aspect ratio). Takes up 20% more screen estate than square posts in the mobile feed.',
          '• WhatsApp Status: 1080 × 1920 pixels (9:16). File size should remain under 16MB for seamless playback over regional mobile data networks.',
        ],
      },
      {
        heading: 'Compression and Export Guidelines',
        content: [
          'Always export H.264 MP4 with AAC audio at 12–16 Mbps bitrate. Overshooting file sizes causes Instagram aggressive re-compression, introducing pixelation. High-contrast typography prevents font bleed.',
        ],
      },
    ],
  },
  {
    slug: 'why-short-video-ads-convert',
    title: 'Why 15-30 Second Short Video Ads Outperform Static Posters in Regional Markets',
    readingTime: '5 min read',
    date: '2026-10-28',
    category: 'Conversion Strategy',
    excerpt:
      'Understanding user psychology: how native audio, visual proof, and rapid pacing drive immediate WhatsApp inquiries.',
    sections: [
      {
        heading: 'The Shift from Passive Viewing to Active Action',
        content: [
          'Static posters require active reading and cognitive effort. In contrast, a well-paced 15-second video demonstrates the product in action, establishes emotional warmth through human voiceover, and answers the customer primary doubt before they can swipe away.',
          'Customers place tremendous value on direct human communication. Hearing a familiar voice explaining a problem mirrors a friendly local recommendation.',
        ],
      },
      {
        heading: 'Three Key Conversion Accelerators',
        content: [
          '1. Tangible Demonstration: Showing water scale coming off or food being served proves the claim instantly, eliminating buyer skepticism.',
          '2. Micro-Commitments: A 20-second reel asks for only a brief moment of attention, lowering resistance compared to long promotional videos.',
          '3. Single Clear CTA: Leading viewers directly to a one-tap WhatsApp chat removes checkout hurdles and allows real-time conversation.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-plan-a-festival-campaign',
    title: 'How to Plan High-ROI Festive Campaigns for Growing Businesses',
    readingTime: '7 min read',
    date: '2026-10-15',
    category: 'Festive Marketing',
    excerpt:
      'A step-by-step roadmap for festival campaigns: timing your creative rollouts, preparing WhatsApp creatives, and maximizing festive buyer intent.',
    sections: [
      {
        heading: 'The Festive Calendar & Buying Cycles',
        content: [
          'Festive spending peaks in distinct waves: festive sales for electronics, jewellery, and home improvements; new year seasons for clothing, family dining, and real estate.',
          'The winning playbook is to deploy teaser reels 10 days in advance, launch main offer ads 5 days before the festival, and run urgency reminders during the final 48 hours.',
        ],
      },
      {
        heading: 'Crafting Culturally Authentic Creative Assets',
        content: [
          'Generic stock templates feel out of touch during festive celebrations. Incorporating authentic cultural motifs together with auspicious festive greetings establishes genuine affinity.',
          'Pair traditional visuals with contemporary dynamic kinetic typography and clean pricing packages to drive immediate buyer interest.',
        ],
      },
      {
        heading: 'The 24-Hour Production Advantage',
        content: [
          'Festive retail trends shift overnight based on local competitor moves. With AI Ad Maker 24-hour delivery turnaround, business owners can launch new festive creatives, flash offers, or revised package posters in real time without missing the shopping surge.',
        ],
      },
    ],
  },
];
