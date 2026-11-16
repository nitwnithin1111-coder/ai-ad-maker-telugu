import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://aiadmakertelugu.com';
const TODAY = new Date().toISOString().split('T')[0];

const routes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'services/ai-video-ads', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/posters', priority: '0.8', changefreq: 'monthly' },
  { path: 'services/reels', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/business-websites', priority: '0.9', changefreq: 'monthly' },
  { path: 'work', priority: '0.9', changefreq: 'weekly' },
  { path: 'work/flovyn-solutions', priority: '0.8', changefreq: 'monthly' },
  { path: 'work/hws-hard-water-softener', priority: '0.8', changefreq: 'monthly' },
  { path: 'pricing', priority: '0.9', changefreq: 'weekly' },
  { path: 'free-ads', priority: '0.95', changefreq: 'weekly' },
  { path: 'process', priority: '0.8', changefreq: 'monthly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.9', changefreq: 'monthly' },
  { path: 'faq', priority: '0.8', changefreq: 'monthly' },
  { path: 'industries', priority: '0.85', changefreq: 'weekly' },
  { path: 'industries/restaurants', priority: '0.8', changefreq: 'monthly' },
  { path: 'industries/real-estate', priority: '0.8', changefreq: 'monthly' },
  { path: 'industries/fashion-and-retail', priority: '0.8', changefreq: 'monthly' },
  { path: 'industries/clinics-and-healthcare', priority: '0.8', changefreq: 'monthly' },
  { path: 'industries/tech-and-startups', priority: '0.8', changefreq: 'monthly' },
  { path: 'industries/home-services', priority: '0.8', changefreq: 'monthly' },
  { path: 'insights', priority: '0.85', changefreq: 'weekly' },
  { path: 'insights/how-to-write-a-telugu-ad-hook', priority: '0.8', changefreq: 'monthly' },
  { path: 'insights/ad-sizes-for-instagram-and-whatsapp', priority: '0.8', changefreq: 'monthly' },
  { path: 'insights/why-short-video-ads-convert', priority: '0.8', changefreq: 'monthly' },
  { path: 'insights/how-to-plan-a-festival-campaign', priority: '0.8', changefreq: 'monthly' },
  { path: 'ad-idea-generator', priority: '0.9', changefreq: 'weekly' },
  { path: 'showreel', priority: '0.85', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.4', changefreq: 'yearly' },
  { path: 'terms', priority: '0.4', changefreq: 'yearly' },
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

routes.forEach(r => {
  const loc = r.path ? `${DOMAIN}/${r.path}` : `${DOMAIN}/`;
  xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>\n`;
});

xml += `</urlset>\n`;

// Write to public/sitemap.xml and dist/sitemap.xml
fs.writeFileSync(path.resolve(__dirname, '..', 'public', 'sitemap.xml'), xml, 'utf8');

const distSitemap = path.resolve(__dirname, '..', 'dist', 'sitemap.xml');
if (fs.existsSync(path.resolve(__dirname, '..', 'dist'))) {
  fs.writeFileSync(distSitemap, xml, 'utf8');
}

console.log('Successfully generated sitemap.xml with', routes.length, 'routes');
