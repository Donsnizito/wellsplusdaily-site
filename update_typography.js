const fs = require('fs');

const rootVars = `  /* Type scale */
  --text-10: 10px;
  --text-12: 12px;
  --text-13: 13px;
  --text-14: 14px;
  --text-16: 16px;
  --text-18: 18px;
  --text-20: 20px;
  --text-24: 24px;
  --text-28: 28px;
  --text-40: 40px;
  --text-48: 48px;
  --text-64: 64px;`;

// 1. Update generate_pages_v2.js
let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// Inject variables into :root
if (!genScript.includes('--text-10')) {
  genScript = genScript.replace(/:root{/, `:root{\n${rootVars}`);
}

// Replace font-sizes in generic CSS (we'll just do a hardcoded replacement map for clarity)
const cssReplacements = [
  { search: /font-size:clamp\(48px,6vw,72px\)/g, replace: 'font-size:var(--text-48)' },
  { search: /\.hero-sub\{font-size:20px/g, replace: '.hero-sub{font-size:var(--text-20)' },
  { search: /\.btn-dark\{display:inline-block;font-size:14px/g, replace: '.btn-dark{display:inline-block;font-size:var(--text-14)' },
  { search: /\.stat-num\{font-family:var\(--sans\);font-size:40px/g, replace: '.stat-num{font-family:var(--sans);font-size:var(--text-40)' },
  { search: /\.stat-label\{font-size:13px/g, replace: '.stat-label{font-size:var(--text-13)' },
  { search: /\.sec-h2\{font-family:var\(--sans\);font-size:40px/g, replace: '.sec-h2{font-family:var(--sans);font-size:var(--text-40)' },
  { search: /\.sec-sub\{font-size:18px/g, replace: '.sec-sub{font-size:var(--text-18)' },
  { search: /\.feature-title\{font-family:var\(--sans\);font-size:20px/g, replace: '.feature-title{font-family:var(--sans);font-size:var(--text-20)' },
  { search: /\.feature-text\{font-size:15px/g, replace: '.feature-text{font-size:var(--text-16)' },
  { search: /\.list-title\{font-family:var\(--sans\);font-size:18px/g, replace: '.list-title{font-family:var(--sans);font-size:var(--text-18)' },
  { search: /\.list-tag\{font-size:13px/g, replace: '.list-tag{font-size:var(--text-13)' },
];

cssReplacements.forEach(r => {
  genScript = genScript.replace(r.search, r.replace);
});

// Add desktop media query for hero-h1 and sec-h2 to use text-64 and text-48
if (!genScript.includes('.hero-h1{font-size:var(--text-64)}')) {
  genScript = genScript.replace(/@media\(max-width:960px\)\{/, `@media(min-width:960px){
  .hero-h1{font-size:var(--text-64);}
  .sec-h2{font-size:var(--text-48);}
  .stat-num{font-size:var(--text-48);}
}
@media(max-width:960px){`);
}

fs.writeFileSync('generate_pages_v2.js', genScript);


// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Inject :root if not exists
if (!indexHtml.includes('--text-10')) {
  indexHtml = indexHtml.replace(/:root{/, `:root{\n${rootVars}`);
}

// Replace font-sizes in index.html custom CSS block
const indexCssReplacements = [
  // Existing generic ones that carry over
  ...cssReplacements,
  // Custom ones for index
  { search: /\.eyebrow\{font-size:11px/g, replace: '.eyebrow{font-size:var(--text-12)' },
  { search: /\.btn-text\{font-size:14px/g, replace: '.btn-text{font-size:var(--text-14)' },
  { search: /\.stat-val\{font-family:var\(--sans\);font-size:36px/g, replace: '.stat-val{font-family:var(--sans);font-size:var(--text-40)' },
  { search: /\.stat-lbl\{font-size:12px/g, replace: '.stat-lbl{font-size:var(--text-12)' },
  { search: /\.s-label\{font-size:11px/g, replace: '.s-label{font-size:var(--text-12)' },
  { search: /\.about-h2\{font-family:var\(--sans\);font-size:clamp\(32px,3\.5vw,50px\)/g, replace: '.about-h2{font-family:var(--sans);font-size:var(--text-48)' },
  { search: /\.about-body p\{font-size:16px/g, replace: '.about-body p{font-size:var(--text-16)' },
  { search: /\.srv-name\{font-family:var\(--sans\);font-size:18px/g, replace: '.srv-name{font-family:var(--sans);font-size:var(--text-18)' },
  { search: /\.srv-tag\{font-size:12px/g, replace: '.srv-tag{font-size:var(--text-13)' },
  { search: /\.process-h2\{font-family:var\(--sans\);font-size:clamp\(32px,3\.5vw,50px\)/g, replace: '.process-h2{font-family:var(--sans);font-size:var(--text-48)' },
  { search: /\.process-desc\{font-size:16px/g, replace: '.process-desc{font-size:var(--text-16)' },
  { search: /\.step-n\{font-family:var\(--sans\);font-size:64px/g, replace: '.step-n{font-family:var(--sans);font-size:var(--text-64)' },
  { search: /\.step-h\{font-family:var\(--sans\);font-size:22px/g, replace: '.step-h{font-family:var(--sans);font-size:var(--text-24)' },
  { search: /\.step-p\{font-size:15px/g, replace: '.step-p{font-size:var(--text-16)' },
  { search: /\.c-tag\{font-size:11px/g, replace: '.c-tag{font-size:var(--text-12)' },
  { search: /\.c-h3\{font-family:var\(--sans\);font-size:clamp\(28px,2\.5vw,38px\)/g, replace: '.c-h3{font-family:var(--sans);font-size:var(--text-28)' },
  { search: /\.c-p\{font-size:15px/g, replace: '.c-p{font-size:var(--text-14)' },
  { search: /\.c-link\{display:inline-flex;align-items:center;gap:8px;font-size:14px/g, replace: '.c-link{display:inline-flex;align-items:center;gap:8px;font-size:var(--text-14)' }
];

indexCssReplacements.forEach(r => {
  indexHtml = indexHtml.replace(r.search, r.replace);
});

// Update index.html media query to scale text
if (!indexHtml.includes('.about-h2{font-size:var(--text-28);}')) {
  indexHtml = indexHtml.replace(/@media\(max-width:960px\)\{/, `@media(min-width:960px){
  .hero-h1{font-size:var(--text-64);}
  .sec-h2{font-size:var(--text-48);}
  .stat-num{font-size:var(--text-48);}
}
@media(max-width:960px){
  .about-h2{font-size:var(--text-28);}
  .process-h2{font-size:var(--text-28);}
`);
}

// 3. Fix index.html hero inline Tailwind classes and top padding
// Hero padding: p-8 md:p-16 lg:p-24 max-w-[1280px] mx-auto w-full pointer-events-none mt-12 md:mt-0
indexHtml = indexHtml.replace(/p-8 md:p-16 lg:p-24 max-w-\[1280px\] mx-auto w-full pointer-events-none mt-12 md:mt-0/, 'px-8 md:px-16 lg:px-24 pt-32 md:pt-48 pb-16 lg:pb-24 max-w-[1280px] mx-auto w-full pointer-events-none mt-12 md:mt-0');

// Hero text scales
indexHtml = indexHtml.replace(/text-xs font-semibold tracking-\[0\.22em\] uppercase text-neutral-500 mb-6 block/, 'text-[length:var(--text-12)] font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-6 block');
indexHtml = indexHtml.replace(/text-5xl md:text-7xl lg:text-\[80px\]/, 'text-[length:var(--text-48)] md:text-[length:var(--text-64)]');
indexHtml = indexHtml.replace(/text-xl font-normal leading-\[1\.6\] text-neutral-600 mt-6 max-w-\[720px\]/, 'text-[length:var(--text-20)] font-normal leading-[1.6] text-neutral-600 mt-6 max-w-[720px]');
indexHtml = indexHtml.replace(/text-5xl md:text-6xl lg:text-7xl/g, 'text-[length:var(--text-40)] md:text-[length:var(--text-48)]');
indexHtml = indexHtml.replace(/text-4xl md:text-5xl lg:text-\[44px\]/g, 'text-[length:var(--text-28)] md:text-[length:var(--text-40)]');
indexHtml = indexHtml.replace(/text-xs md:text-sm font-semibold/g, 'text-[length:var(--text-12)] md:text-[length:var(--text-13)] font-semibold');

fs.writeFileSync('index.html', indexHtml);

console.log('Successfully injected exact type scale across all files and corrected hero padding.');
