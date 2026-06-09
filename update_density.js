const fs = require('fs');

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// Update generate_pages_v2.js density
const replacements = [
  // Padding and Margin Reductions
  { search: /padding-bottom: 96px;/g, replace: 'padding-bottom: 48px;' },
  { search: /\.hero\{padding:180px 56px 100px/g, replace: '.hero{padding:120px 40px 64px' },
  { search: /margin-bottom:24px; color:var\(--ink\);/g, replace: 'margin-bottom:16px; color:var(--ink);' }, // hero-h1 margin
  { search: /margin:0 auto 48px;max-width:720px;/g, replace: 'margin:0 auto 32px;max-width:720px;' }, // hero-sub margin
  { search: /gap:64px;margin-top:80px;.*padding-top:48px;/g, replace: 'gap:40px;margin-top:48px;border-top:1px solid var(--rule);padding-top:32px;' }, // stats-bar
  { search: /\.section\{max-width:1280px;margin:0 auto;padding:96px 56px;/g, replace: '.section{max-width:1280px;margin:0 auto;padding:64px 40px;' },
  { search: /\.grid-2\{display:grid;grid-template-columns:1fr 1fr;gap:80px;/g, replace: '.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:48px;' },
  { search: /\.grid-3\{display:grid;grid-template-columns:repeat\(3,1fr\);gap:40px;margin-top:64px;/g, replace: '.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px;' },
  { search: /margin-bottom:24px; letter-spacing:-0\.02em;/g, replace: 'margin-bottom:16px; letter-spacing:-0.02em;' }, // sec-h2 margin
  { search: /margin-bottom:32px;/g, replace: 'margin-bottom:24px;' }, // sec-sub margin
  { search: /\.feature-card\{background:var\(--cream\);padding:40px;/g, replace: '.feature-card{background:var(--cream);padding:32px;' },
  { search: /margin-bottom:16px; letter-spacing:-0\.01em;/g, replace: 'margin-bottom:12px; letter-spacing:-0.01em;' }, // feature-title margin
  { search: /\.list-item\{padding:24px 0;/g, replace: '.list-item{padding:16px 0;' },
  
  // Mobile media query updates
  { search: /\.hero\{padding:140px 24px 80px\}/g, replace: '.hero{padding:100px 24px 48px}' },
  { search: /\.grid-2, \.grid-3\{grid-template-columns:1fr;gap:40px;\}/g, replace: '.grid-2, .grid-3{grid-template-columns:1fr;gap:32px;}' },
  { search: /\.stats-bar\{flex-direction:column;gap:32px;/g, replace: '.stats-bar{flex-direction:column;gap:24px;' },
  
  // Typography Reductions
  { search: /\.hero-sub\{font-size:var\(--text-20\)/g, replace: '.hero-sub{font-size:var(--text-18)' }, // Hero copy to 18
  { search: /\.sec-h2\{font-family:var\(--sans\);font-size:var\(--text-40\)/g, replace: '.sec-h2{font-family:var(--sans);font-size:var(--text-28)' }, // Section H2 mobile to 28
  { search: /\.feature-title\{font-family:var\(--sans\);font-size:var\(--text-20\)/g, replace: '.feature-title{font-family:var(--sans);font-size:var(--text-18)' },
  { search: /\.feature-text\{font-size:var\(--text-16\)/g, replace: '.feature-text{font-size:var(--text-14)' },
  
  // Desktop media query updates for Typography
  { search: /\.sec-h2\{font-size:var\(--text-48\);\}/g, replace: '.sec-h2{font-size:var(--text-40);}' } // Desktop sec-h2 down to 40
];

replacements.forEach(r => {
  genScript = genScript.replace(r.search, r.replace);
});

// Also inject `.section{padding:48px 24px;}` into max-width:960px media query
if (!genScript.includes('.section{padding:48px 24px;}')) {
  genScript = genScript.replace(/\.main-wrapper\{border-bottom-left-radius:/, `.section{padding:48px 24px;}\n  .main-wrapper{border-bottom-left-radius:`);
}

fs.writeFileSync('generate_pages_v2.js', genScript);

// Update index.html density
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Apply the same generic CSS replacements to index.html
replacements.forEach(r => {
  indexHtml = indexHtml.replace(r.search, r.replace);
});
if (!indexHtml.includes('.section{padding:48px 24px;}')) {
  indexHtml = indexHtml.replace(/\.main-wrapper\{border-bottom-left-radius:/, `.section{padding:48px 24px;}\n  .main-wrapper{border-bottom-left-radius:`);
}

// Custom Index CSS density replacements
const indexSpecificReplacements = [
  { search: /\.hero-center\{display:flex;flex-direction:column;justify-content:center;padding-top:68px;\}/g, replace: '.hero-center{display:flex;flex-direction:column;justify-content:center;padding-top:40px;}' },
  { search: /\.about-grid\{display:grid;grid-template-columns:5fr 4fr;gap:120px;align-items:start;\}/g, replace: '.about-grid{display:grid;grid-template-columns:5fr 4fr;gap:64px;align-items:start;}' },
  { search: /\.about-h2\{font-family:var\(--sans\);font-size:var\(--text-48\)/g, replace: '.about-h2{font-family:var(--sans);font-size:var(--text-28)' },
  { search: /\.process-inner\{max-width:1280px;margin:0 auto;padding:128px 56px;\}/g, replace: '.process-inner{max-width:1280px;margin:0 auto;padding:80px 40px;}' },
  { search: /\.process-head\{display:grid;grid-template-columns:1fr 1fr;gap:120px;align-items:end;margin-bottom:96px;\}/g, replace: '.process-head{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:end;margin-bottom:48px;}' },
  { search: /\.process-h2\{font-family:var\(--sans\);font-size:var\(--text-48\)/g, replace: '.process-h2{font-family:var(--sans);font-size:var(--text-28)' },
  { search: /\.c-panel\{padding:72px 64px; background:#FFFFFF;\}/g, replace: '.c-panel{padding:48px 40px; background:#FFFFFF;}' },
  { search: /\.about-grid\{grid-template-columns:1fr;gap:56px;\}/g, replace: '.about-grid{grid-template-columns:1fr;gap:40px;}' },
  { search: /\.c-panel\{padding:48px 32px;\}/g, replace: '.c-panel{padding:32px 24px;}' },
  
  // Update desktop sizes for index custom h2s
  { search: /\.about-h2\{font-size:var\(--text-28\);\}/g, replace: '.about-h2{font-size:var(--text-28);}' } // Keep it compact
];

indexSpecificReplacements.forEach(r => {
  indexHtml = indexHtml.replace(r.search, r.replace);
});

// Update desktop h2s in media query in index.html to 40 instead of 48
indexHtml = indexHtml.replace(/\.about-h2\{font-size:var\(--text-28\);\}/g, '');
indexHtml = indexHtml.replace(/\.process-h2\{font-size:var\(--text-28\);\}/g, '');
indexHtml = indexHtml.replace(/@media\(min-width:960px\)\{/, `@media(min-width:960px){
  .about-h2{font-size:var(--text-40);}
  .process-h2{font-size:var(--text-40);}`);


// Fix Tailwind hero padding and sizes on index.html
// Old: px-8 md:px-16 lg:px-24 pt-32 md:pt-48 pb-16 lg:pb-24 mt-12 md:mt-0
// New: px-6 md:px-12 pt-24 md:pt-32 pb-12 mt-8
indexHtml = indexHtml.replace(/px-8 md:px-16 lg:px-24 pt-32 md:pt-48 pb-16 lg:pb-24/g, 'px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-12');

// Hero Paragraph: var(--text-20) -> var(--text-18)
indexHtml = indexHtml.replace(/text-\[length:var\(--text-20\)\] font-normal leading-\[1\.6\]/g, 'text-[length:var(--text-18)] font-normal leading-[1.6]');

// Stats top margin: mt-24 md:mt-32 -> mt-16 md:mt-24
indexHtml = indexHtml.replace(/mt-24 md:mt-32 pb-8/g, 'mt-16 md:mt-20 pb-8');


fs.writeFileSync('index.html', indexHtml);
console.log('Successfully applied density updates (reduced margins/padding, smaller section headers, 18pt hero text) across all files.');
