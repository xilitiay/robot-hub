// Build a static, server-less version of RobotHub for CloudStudio / any static host.
// Pre-renders meta + all robots + brands into dist/static-bundle.js and copies the frontend.
const fs = require('fs');
const path = require('path');

const robots = require('./data/robots.js');
const robotsExtra = require('./data/robots_extra.js');
const { categories, autonomyLevels, countries, continents } = require('./data/meta.js');

// mirror db/schema.js dedup (first wins)
const seen = new Set();
const list = [];
for (const r of robots.concat(robotsExtra)) {
  if (seen.has(r.id)) continue;
  seen.add(r.id);
  list.push(r);
}

const robotsOut = list.map((r, i) => ({
  ...r,
  apps: r.apps || [],
  featured: !!(r.featured || (r.image && (r.overviewEn || r.overviewZh))),
  views: 0,
  countryInfo: countries[r.country] || null
}));

const total = robotsOut.length;
const brandCount = new Set(robotsOut.map(r => r.brand)).size;
const catCounts = {};
const countryCounts = {};
robotsOut.forEach(r => {
  catCounts[r.category] = (catCounts[r.category] || 0) + 1;
  countryCounts[r.country] = (countryCounts[r.country] || 0) + 1;
});
const meta = {
  categories, autonomyLevels, countries, continents,
  stats: { total, brandCount, catCounts, countryCounts, categoryCount: categories.length }
};

// brands aggregation (mirrors apiBrands)
const byBrand = {};
robotsOut.forEach(r => {
  if (!byBrand[r.brand]) byBrand[r.brand] = { brand: r.brand, brandZh: r.brandZh, country: r.country, c: 0, cats: new Set() };
  byBrand[r.brand].c++;
  byBrand[r.brand].cats.add(r.category);
});
const brandsOut = Object.values(byBrand)
  .map(b => ({ ...b, cats: [...b.cats], countryInfo: countries[b.country] || null }))
  .sort((a, b) => b.c - a.c);

// write bundle
const bundle = `window.ROBOTHUB_STATIC=true;\n`
  + `window.ROBOTHUB_META=${JSON.stringify(meta)};\n`
  + `window.ROBOTHUB_ROBOTS=${JSON.stringify(robotsOut)};\n`
  + `window.ROBOTHUB_BRANDS=${JSON.stringify(brandsOut)};\n`;

const DIST = path.join(__dirname, 'dist');
fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'static-bundle.js'), bundle, 'utf8');

// copy public -> dist (manual copy: sandbox blocks fs.cpSync)
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.writeFileSync(d, fs.readFileSync(s));
  }
}
copyDir(path.join(__dirname, 'public'), DIST);

// inject bundle script before app.js in each HTML
const pages = ['index.html', 'catalog.html', 'detail.html', 'compare.html', 'brands.html', 'admin.html', 'favorites.html'];
const re = /<script src=["']js\/app\.js["']><\/script>/;
for (const pg of pages) {
  const f = path.join(DIST, pg);
  if (!fs.existsSync(f)) continue;
  let html = fs.readFileSync(f, 'utf8');
  html = html.replace(re, '<script src="static-bundle.js"></script>\n<script src="js/app.js"></script>');
  fs.writeFileSync(f, html, 'utf8');
}

console.log(`[static] built dist/ — robots:${robotsOut.length} brands:${brandsOut.length} cats:${categories.length}`);
console.log(`[static] bundle size: ${(bundle.length/1024).toFixed(0)} KB`);
