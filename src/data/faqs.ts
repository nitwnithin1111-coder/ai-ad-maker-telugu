export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'delivery' | 'offer';
}

export const FAQS: FAQItem[] = [
  {
    category: 'offer',
    question: 'How do I claim the 5 FREE ads worth ₹1000?',
    answer:
      'You can claim the welcome package by sending a direct message on our official Instagram (@ai_ad_maker_telugu) or via WhatsApp with your business name and service category. This offer includes 5 customized promotional creatives and is valid until November 30.',
  },
  {
    category: 'delivery',
    question: 'What is your turnaround delivery time?',
    answer:
      'We deliver ready-to-publish video ads, reels, and posters within 24 hours from confirming your script and brief. Business websites are delivered on an agreed custom fast-track timeline.',
  },
  {
    category: 'pricing',
    question: 'What are your starting prices?',
    answer:
      'Our creative pricing starts from just ₹300 per ad. We offer single ad deliverables as well as monthly creative bundles with zero hidden charges.',
  },
  {
    category: 'general',
    question: 'Do you create both regional and pan-India ads?',
    answer:
      'Yes! We craft high-converting ad variations with clear voiceovers and visual storytelling for regional, pan-India, and international audiences.',
  },
  {
    category: 'general',
    question: 'Where can I see reviews from your real clients?',
    answer:
      'All verified client reviews and screen-recorded feedback are preserved directly in our public Instagram profile story highlight titled "client reviews" at @ai_ad_maker_telugu.',
  },
  {
    category: 'general',
    question: 'What information do you need to start an ad?',
    answer:
      'Just share your business name, key offer or service, preferred language, and any photos or logo you have. If you do not have photos, our AI visual systems will generate high-resolution creative scenes suited to your industry.',
  },
];
