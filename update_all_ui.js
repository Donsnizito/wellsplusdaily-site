const fs = require('fs');

// 1. Update generate_pages_v2.js with exact user header
const userHeader = `<div class="w-full flex justify-center"><header class="relative z-10 max-w-5xl w-full pt-4">
      <nav class="flex max-w-7xl md:px-6 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <svg class="md:w-10 md:h-10 w-[30px] h-[30px] text-neutral-900" viewBox="0 0 48 48" aria-hidden="true" stroke-width="2">
            <path d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" fill="currentColor"></path>
          </svg>
          <span class="text-xl font-medium tracking-tight text-neutral-900">Wells+Daily</span>
        </a>

        <button id="menuBtn" class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-neutral-900"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
          <span class="sr-only">Open menu</span>
        </button>

        <div id="navLinks" class="hidden items-center gap-8 md:flex">
          <a href="/how-it-works.html" class="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">How it works</a>
          <a href="/guarantee.html" class="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">Guarantee</a>
          <a href="/brands.html" class="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">Categories</a>
          <a href="/pricing.html" class="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">Pricing</a>
          <div class="hidden h-6 w-px bg-black/10 md:block"></div>
          <a href="/roster.html" class="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">Log in</a>
          <a href="#contact" class="group relative inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-black text-xs font-semibold text-black/80 tracking-tight rounded-full pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center justify-center bg-[#DDF82A]">
            <span class="relative z-10 text-sm font-medium rounded-full">Request Access</span>
          </a>
        </div>
      </nav>

      <!-- Mobile menu -->
      <div id="mobileMenu" class="mx-auto hidden max-w-7xl px-4 md:hidden">
        <div class="space-y-1 rounded-xl border border-black/10 bg-white/50 p-3 backdrop-blur">
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/how-it-works.html">How it works</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/guarantee.html">Guarantee</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/brands.html">Categories</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/pricing.html">Pricing</a>
          <div class="my-2 h-px w-full bg-black/10"></div>
          <div class="flex items-center gap-2">
            <a href="/roster.html" class="flex-1 rounded-lg border border-black/10 bg-white px-3 py-2 text-center text-sm font-medium text-neutral-700 hover:bg-black/5">Log in</a>
            <a href="#contact" class="flex-1 rounded-lg bg-[#DDF82A] px-3 py-2 text-center text-sm font-medium text-black hover:bg-[#C5E01A]">Request Access</a>
          </div>
        </div>
      </div>
    </header></div>`;

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');
genScript = genScript.replace(/const nav = `<header[\s\S]*?<\/header>`;/, 'const nav = `' + userHeader + '`;');
fs.writeFileSync('generate_pages_v2.js', genScript);

// Extract the new CSS and footer
const cssMatch = genScript.match(/const css = `([\s\S]*?)`;/)[1];
const footerMatch = genScript.match(/const footer = `<footer[\s\S]*?<\/footer>`;/)[1];

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace CSS
// We need to keep index's custom classes, so we will append them to the new CSS.
const customIndexCss = `
/* Custom Index Classes */
.eyebrow{font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;color:var(--ink3);margin-bottom:40px;opacity:0;animation:up 0.7s 0.2s ease forwards;}
.hero-center{display:flex;flex-direction:column;justify-content:center;padding-top:68px;}
.hero-actions{display:flex;align-items:center;gap:24px;opacity:0;animation:up 0.6s 0.65s ease forwards;}
.btn-text{font-size:14px;font-weight:600;letter-spacing:0.05em;color:var(--ink3);text-decoration:none;border-bottom:1px solid transparent;padding-bottom:1px;transition:color 0.2s,border-color 0.2s;}
.btn-text:hover{color:var(--ink);border-color:var(--ink);}
.hero-bottom{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--rule);opacity:0;animation:up 0.5s 0.8s ease forwards;}
.hero-stat{padding:32px 0;border-right:1px solid var(--rule);}
.hero-stat:last-child{border-right:none;text-align:right;}
.hero-stat:nth-child(2){padding-left:40px;}
.stat-val{font-family:var(--sans);font-size:36px;font-weight:500;color:var(--ink);display:block;margin-bottom:6px;letter-spacing:-0.02em;}
.stat-lbl{font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink3);}
.full-rule{height:1px;background:var(--rule);width:100%;}
.s-label{font-size:11px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink3);display:block;margin-bottom:72px;}
.about-grid{display:grid;grid-template-columns:5fr 4fr;gap:120px;align-items:start;}
.about-h2{font-family:var(--sans);font-size:clamp(32px,3.5vw,50px);font-weight:500;line-height:1.12;color:var(--ink);margin-bottom:40px;letter-spacing:-0.02em;}
.about-h2 em{font-style:normal;color:var(--ink3);}
.about-body p{font-size:16px;font-weight:400;line-height:1.8;color:var(--ink2);margin-bottom:20px;}
.services{padding-top:4px;}
.srv{display:flex;justify-content:space-between;align-items:baseline;padding:22px 0;border-bottom:1px solid var(--rule);}
.srv:first-child{border-top:1px solid var(--rule);}
.srv-name{font-family:var(--sans);font-size:18px;font-weight:500;color:var(--ink);}
.srv-tag{font-size:12px;font-weight:500;color:var(--ink3);text-align:right;}
.cream-band{background:#FFFFFF;}
.process-inner{max-width:1280px;margin:0 auto;padding:128px 56px;}
.process-head{display:grid;grid-template-columns:1fr 1fr;gap:120px;align-items:end;margin-bottom:96px;}
.process-h2{font-family:var(--sans);font-size:clamp(32px,3.5vw,50px);font-weight:500;line-height:1.12;color:var(--ink);letter-spacing:-0.02em;}
.process-h2 em{font-style:normal;color:var(--ink3);}
.process-desc{font-size:16px;font-weight:400;line-height:1.8;color:var(--ink2);}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:0;}
.step{padding-right:56px;border-right:1px solid var(--rule);}
.step:nth-child(2){padding-left:56px;padding-right:56px;}
.step:last-child{padding-left:56px;padding-right:0;border-right:none;}
.step-n{font-family:var(--sans);font-size:64px;font-weight:500;color:var(--rule);line-height:1;display:block;margin-bottom:28px;}
.step-h{font-family:var(--sans);font-size:22px;font-weight:500;color:var(--ink);margin-bottom:16px;line-height:1.2;letter-spacing:-0.01em;}
.step-p{font-size:15px;font-weight:400;line-height:1.7;color:var(--ink2);}
.contact-row{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--rule); border-radius:16px; overflow:hidden;}
.c-panel{padding:72px 64px; background:#FFFFFF;}
.c-panel:first-child{border-right:1px solid var(--rule);}
.c-tag{font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink3);display:block;margin-bottom:36px;}
.c-h3{font-family:var(--sans);font-size:clamp(28px,2.5vw,38px);font-weight:500;line-height:1.15;color:var(--ink);margin-bottom:20px;letter-spacing:-0.01em;}
.c-h3 em{font-style:normal;color:var(--ink3);}
.c-p{font-size:15px;font-weight:400;line-height:1.7;color:var(--ink2);margin-bottom:40px;max-width:300px;}
.c-link{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--ink);padding-bottom:2px;}
@keyframes up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:960px){
  .hero-bottom{grid-template-columns:1fr 1fr;}
  .hero-stat:last-child{display:none;}
  .about-grid{grid-template-columns:1fr;gap:56px;}
  .process-head{grid-template-columns:1fr;gap:28px;margin-bottom:64px;}
  .steps{grid-template-columns:1fr;}
  .step,.step:nth-child(2),.step:last-child{padding:40px 0;border-right:none;border-bottom:1px solid var(--rule);}
  .step:last-child{border-bottom:none;}
  .contact-row{grid-template-columns:1fr;}
  .c-panel:first-child{border-right:none;border-bottom:1px solid var(--rule);}
  .c-panel{padding:48px 32px;}
}
`;

// Inject Tailwind if missing
if(!indexHtml.includes('cdn.tailwindcss.com')) {
  indexHtml = indexHtml.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script>\n</head>');
}
// Replace old font with Inter
indexHtml = indexHtml.replace(/<link href="https:\/\/fonts.googleapis.com\/css2\?family=Cormorant\+Garamond[\s\S]*?rel="stylesheet">/, '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">');

// Replace CSS block
indexHtml = indexHtml.replace(/<style>[\s\S]*?<\/style>/, `<style>\n${cssMatch}\n${customIndexCss}\n</style>`);

// Add main wrapper around body content
// From after <body> to before <!-- FOOTER -->
indexHtml = indexHtml.replace(/<body>([\s\S]*?)<!-- FOOTER -->/, '<body>\n\n<main class="main-wrapper">\n$1\n</main>\n\n<!-- FOOTER -->');

// Replace nav
indexHtml = indexHtml.replace(/<nav id="nav">[\s\S]*?<\/nav>/, userHeader);

// Replace footer
indexHtml = indexHtml.replace(/<footer>[\s\S]*?<\/footer>/, footerMatch);

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully fully merged the Ramp UI architecture with user header onto index.html');
