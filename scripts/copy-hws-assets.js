const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\chary\\.gemini\\antigravity\\scratch\\hws_ad_reel';
const dstDir = path.resolve(__dirname, '..', 'public', 'images', 'work', 'hws');

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
}

const files = [
  { src: 'prev_s1.jpg', dst: 'scene1-stained-faucet.jpg' },
  { src: 'prev_s3.jpg', dst: 'scene3-resin-softener.jpg' },
  { src: 'prev_s4.jpg', dst: 'scene4-filtration-flow.jpg' },
  { src: 'prev_s5.jpg', dst: 'scene5-lab-testing.jpg' },
  { src: 'prev_s7.jpg', dst: 'scene7-verified-callout.jpg' },
];

files.forEach(f => {
  const s = path.join(srcDir, f.src);
  const d = path.join(dstDir, f.dst);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log(`Copied ${f.src} to ${f.dst}`);
  }
});
