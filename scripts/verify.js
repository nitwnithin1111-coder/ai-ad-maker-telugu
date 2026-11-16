import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '..', 'src');
const distDir = path.resolve(__dirname, '..', 'dist');

function scan(dir, label) {
  let count = 0;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      count += scan(full, label);
    } else if (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.json') || f.endsWith('.svg')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/[\u0C00-\u0C7F]/g);
      if (matches) {
        console.log(`[${label}] Telugu found in ${full}: ${matches.length} chars`);
        count += matches.length;
      }
    }
  }
  return count;
}

console.log('--- Checking src/ for Telugu unicode ---');
const srcTelugu = scan(srcDir, 'SRC');
console.log('Total Telugu chars in src/:', srcTelugu);

console.log('--- Checking dist/ for Telugu unicode ---');
const distTelugu = scan(distDir, 'DIST');
console.log('Total Telugu chars in dist/:', distTelugu);

console.log('--- Checking for .map files in dist/ ---');
function checkMaps(dir) {
  let maps = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      maps = maps.concat(checkMaps(full));
    } else if (f.endsWith('.map')) {
      maps.push(full);
    }
  }
  return maps;
}
const maps = checkMaps(distDir);
console.log('Sourcemap count in dist/:', maps.length);
console.log('--- VERIFICATION COMPLETE ---');
process.exit(0);
