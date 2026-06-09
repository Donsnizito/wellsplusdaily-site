const fs = require('fs');

const footer = `<footer class="w-full max-w-7xl mt-12 mx-auto mb-8 pt-12 px-8 pb-4 bg-[#0A0A0A] text-white">
  <div class="relative">
    <div class="relative z-10 pt-0 pr-0 pb-0 pl-0">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 border-white/10 border-b pb-12">
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter font-sans">Wells+Daily
            </h3>
          </div>
          <p class="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl font-sans">The dual-contract enforcement system for premium brand and creator partnerships.</p>
        </div>

        <!-- Navigation Links -->
        <div class="lg:col-span-1">
          <h4 class="text-white font-medium mb-4 font-sans">Categories</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li class=""><a href="/tech-software.html" class="hover:text-[#DDF82A] transition font-sans">Tech &amp; Software</a></li>
            <li class=""><a href="/lifestyle.html" class="hover:text-[#DDF82A] transition font-sans">Lifestyle &amp; Personal</a></li>
            <li class=""><a href="/content.html" class="hover:text-[#DDF82A] transition font-sans">Content &amp; Media</a></li>
            <li class=""><a href="/how-it-works.html" class="hover:text-[#DDF82A] transition font-sans">How it works</a></li>
            <li><a href="/guarantee.html" class="hover:text-[#DDF82A] transition font-sans">The Bounded Guarantee</a></li>
          </ul>
        </div>

        <!-- Company Info -->
        <div class="lg:col-span-1">
          <h4 class="text-white font-medium mb-4 font-sans">Company &amp; Legal</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li class=""><a href="/about.html" class="hover:text-[#DDF82A] transition font-sans">About Us</a></li>
            <li class=""><a href="/escalation.html" class="hover:text-[#DDF82A] transition font-sans">Escalation Map</a></li>
            <li class=""><a href="/terms.html" class="hover:text-[#DDF82A] transition font-sans">Terms of Service</a></li>
            <li class=""><a href="/privacy.html" class="hover:text-[#DDF82A] transition font-sans">Privacy Policy</a></li>
            <li class=""><a href="/contact.html" class="hover:text-[#DDF82A] transition font-sans">Contact</a></li>
          </ul>
        </div>
      </div>

      <!-- Contact Section -->
      <div id="contact" class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 ring-1 ring-[#DDF82A]/30 text-xs text-[#DDF82A] bg-[#DDF82A]/10 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-sans">
              <span class="h-1.5 w-1.5 rounded-full bg-[#DDF82A] animate-pulse"></span>
              Now accepting campaigns
            </div>
            <h4 class="text-xl sm:text-2xl text-white font-medium tracking-tighter font-sans">Ready to enforce execution?</h4>
            <ul class="text-sm text-neutral-400 space-y-3">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#DDF82A] mt-0.5 flex-shrink-0" style="stroke-width: 1.5"><path d="M20 6 9 17l-5-5" class=""></path></svg>
                <span class="font-sans">Curated roster on every engagement</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#DDF82A] mt-0.5 flex-shrink-0" style="stroke-width: 1.5"><path d="M20 6 9 17l-5-5" class=""></path></svg>
                <span class="font-sans">100% credit-and-replacement guarantee</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-[#DDF82A] mt-0.5 flex-shrink-0" style="stroke-width: 1.5"><path d="M20 6 9 17l-5-5" class=""></path></svg>
                <span class="font-sans">Bounded 90-day execution window</span>
              </li>
            </ul>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
              <a href="mailto:ops@wellsplusdaily.com" class="inline-flex items-center gap-2 text-neutral-400 hover:text-[#DDF82A] transition font-sans">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" style="stroke-width: 1.5"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" class=""></path><rect x="2" y="4" width="20" height="16" rx="2" class=""></rect></svg>
                ops@wellsplusdaily.com
              </a>
            </div>
          </div>

          <form class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-1">
              <label class="block text-xs font-medium text-neutral-400 mb-2 font-sans">Name</label>
              <input type="text" required="" placeholder="Your name" class="w-full placeholder-neutral-600 outline-none focus:ring-2 focus:ring-[#DDF82A]/60 focus:border-[#DDF82A] transition text-sm text-white bg-white/5 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
            </div>
            <div class="sm:col-span-1">
              <label class="block text-xs font-medium text-neutral-400 mb-2 font-sans">Email</label>
              <input type="email" required="" placeholder="you@company.com" class="w-full placeholder-neutral-600 outline-none focus:ring-2 focus:ring-[#DDF82A]/60 focus:border-[#DDF82A] transition text-sm text-white bg-white/5 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
            </div>
            <div class="sm:col-span-1">
              <label class="block text-xs font-medium text-neutral-400 mb-2 font-sans">Company</label>
              <input type="text" placeholder="Company name" class="w-full placeholder-neutral-600 outline-none focus:ring-2 focus:ring-[#DDF82A]/60 focus:border-[#DDF82A] transition text-sm text-white bg-white/5 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
            </div>
            <div class="sm:col-span-1">
              <label class="block text-xs font-medium text-neutral-400 mb-2 font-sans">Budget</label>
              <select class="w-full appearance-none outline-none focus:ring-2 focus:ring-[#DDF82A]/60 focus:border-[#DDF82A] transition text-sm text-white bg-[#1A1A1A] border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
                <option class="bg-[#1A1A1A] font-sans" value="5-10k">$5k–$10k</option>
                <option class="bg-[#1A1A1A] font-sans" value="10-15k">$10k–$15k</option>
                <option class="bg-[#1A1A1A] font-sans" value="15k+">$15k+</option>
              </select>
            </div>
            <div class="sm:col-span-1">
              <label class="block text-xs font-medium text-neutral-400 mb-2 font-sans">Timeline</label>
              <select class="w-full appearance-none outline-none focus:ring-2 focus:ring-[#DDF82A]/60 focus:border-[#DDF82A] transition text-sm text-white bg-[#1A1A1A] border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
                <option class="bg-[#1A1A1A] font-sans" value="asap">Immediate</option>
                <option class="bg-[#1A1A1A] font-sans" value="this-quarter">This quarter</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-xs font-medium text-neutral-400 mb-2 font-sans">Campaign details</label>
              <textarea rows="3" placeholder="What are your goals? Target audience, deliverables..." class="w-full placeholder-neutral-600 outline-none focus:ring-2 focus:ring-[#DDF82A]/60 focus:border-[#DDF82A] transition text-sm text-white bg-white/5 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3"></textarea>
            </div>
            <div class="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p class="text-xs text-neutral-500 font-sans">We'll get back to you within 24 hours.</p>
              <button type="submit" class="inline-flex gap-2 ring-1 ring-[#DDF82A] hover:bg-[#C5E01A] transition text-sm font-medium text-black bg-[#DDF82A] rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center font-sans">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" style="stroke-width: 1.5"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" class=""></path><path d="m21.854 2.147-10.94 10.939" class=""></path></svg>
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 border-white/10 border-t mt-8 pt-6 justify-between">
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <p class="text-neutral-500 text-sm font-sans">© 2026 Wells+Daily. All rights reserved.</p>
          <div class="flex items-center gap-4 text-neutral-500 text-sm">
            <span class="font-sans">Dual-Contract Enforcement</span>
            <span class="hidden sm:inline text-neutral-700 font-sans">•</span>
            <span class="font-sans">Bounded Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>`;

const css = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  /* Type scale */
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
  --text-64: 64px;
  --w:#F8F8F7; /* Ramp-style off-white */
  --ink:#111111;
  --ink2:#444444;
  --ink3:#777777;
  --rule:#E6E6E5;
  --cream:#FFFFFF; /* Clean white cards on off-white bg */
  --sans:'Inter',system-ui,sans-serif;
  --accent:#DDF82A; /* Ramp-style chartreuse */
}
html{scroll-behavior:smooth;}
body{
  font-family:var(--sans);
  background-color:#0A0A0A; /* Black background for footer reveal */
  color:var(--ink);
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
.main-wrapper{
  background-color:var(--w);
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  padding-bottom: 96px;
  position: relative;
  z-index: 10;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  min-height: 100vh;
}
nav{
  /* Overridden by Tailwind nav */
}
.hero{padding:180px 56px 100px; max-width:1000px; margin:0 auto; text-align:center;}
.hero-h1{font-family:var(--sans);font-size:var(--text-48);font-weight:500;line-height:1.05;letter-spacing:-0.03em;margin-bottom:24px; color:var(--ink);}
.hero-h1 em{font-style:normal; color:var(--ink3);}
.hero-sub{font-size:var(--text-20);font-weight:400;line-height:1.6;color:var(--ink2);margin:0 auto 48px;max-width:720px; letter-spacing:-0.01em;}
.btn-dark{display:inline-block;font-size:var(--text-14);font-weight:500;letter-spacing:0.02em;color:#0A0A0A;background:var(--accent);padding:16px 36px;border-radius:9999px;text-decoration:none;transition:opacity 0.2s;}
.btn-dark:hover{opacity:0.8;}
.stats-bar{display:flex;justify-content:center;gap:64px;margin-top:80px;border-top:1px solid var(--rule);padding-top:48px;}
.stat-item{text-align:left;}
.stat-num{font-family:var(--sans);font-size:var(--text-40);font-weight:500;color:var(--ink);display:block; letter-spacing:-0.02em;}
.stat-label{font-size:var(--text-13);font-weight:500;color:var(--ink3);margin-top:8px;display:block;}

.section{max-width:1280px;margin:0 auto;padding:96px 56px;border-top:1px solid var(--rule);}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-top:64px;}
.sec-h2{font-family:var(--sans);font-size:var(--text-40);font-weight:500;line-height:1.1;margin-bottom:24px; letter-spacing:-0.02em;}
.sec-sub{font-size:var(--text-18);font-weight:400;line-height:1.7;color:var(--ink2);margin-bottom:32px;}
.feature-card{background:var(--cream);padding:40px;border-radius:16px; border:1px solid var(--rule); box-shadow: 0 4px 20px rgba(0,0,0,0.02);}
.feature-title{font-family:var(--sans);font-size:var(--text-20);font-weight:500;margin-bottom:16px; letter-spacing:-0.01em;}
.feature-text{font-size:var(--text-16);line-height:1.7;color:var(--ink2);}

.list-item{padding:24px 0;border-bottom:1px solid var(--rule);display:flex;justify-content:space-between; align-items:center;}
.list-item:first-of-type{border-top:1px solid var(--rule);}
.list-title{font-family:var(--sans);font-size:var(--text-18);font-weight:500;}
.list-tag{font-size:var(--text-13);font-weight:500;color:var(--ink3);background:#EAEAEA;padding:6px 12px;border-radius:999px;}

@media(min-width:960px){
  .hero-h1{font-size:var(--text-64);}
  .sec-h2{font-size:var(--text-48);}
  .stat-num{font-size:var(--text-48);}
}
@media(max-width:960px){
  .hero{padding:140px 24px 80px}
  .grid-2, .grid-3{grid-template-columns:1fr;gap:40px;}
  .stats-bar{flex-direction:column;gap:32px;align-items:center;text-align:center;}
  .stat-item{text-align:center;}
  .main-wrapper{border-bottom-left-radius: 32px; border-bottom-right-radius: 32px;}
}
`;

const nav = `<div class="w-full flex justify-center"><header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-[100vw] w-full pt-4 transition-all duration-300">
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
          <a href="/tech-software.html" class="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition">Categories</a>
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
        <div class="space-y-1 rounded-xl border border-black/10 bg-white/80 p-3 backdrop-blur shadow-lg">
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/how-it-works.html">How it works</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/guarantee.html">Guarantee</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/tech-software.html">Categories</a>
          <a class="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5" href="/pricing.html">Pricing</a>
          <div class="my-2 h-px w-full bg-black/10"></div>
          <div class="flex flex-col gap-2">
            <a href="/roster.html" class="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-center text-sm font-medium text-neutral-700 hover:bg-black/5">Log in</a>
            <a href="#contact" class="w-full rounded-lg bg-[#DDF82A] px-3 py-2 text-center text-sm font-medium text-black hover:bg-[#C5E01A]">Request Access</a>
          </div>
        </div>
      </div>
    </header></div>`;

function buildHtml(page) {
  let sectionsHtml = page.sections.map(sec => {
    if (sec.type === 'grid-3') {
      return `
<div class="section">
  <h2 class="sec-h2">${sec.title}</h2>
  <p class="sec-sub">${sec.sub}</p>
  <div class="grid-3">
    ${sec.items.map(i => `
    <div class="feature-card">
      <h3 class="feature-title">${i.title}</h3>
      <p class="feature-text">${i.text}</p>
    </div>`).join('')}
  </div>
</div>`;
    } else if (sec.type === 'grid-2-list') {
      return `
<div class="section">
  <div class="grid-2">
    <div>
      <h2 class="sec-h2">${sec.title}</h2>
      <p class="sec-sub">${sec.sub}</p>
    </div>
    <div>
      ${sec.items.map(i => `
      <div class="list-item">
        <span class="list-title">${i.title}</span>
        <span class="list-tag">${i.tag}</span>
      </div>`).join('')}
    </div>
  </div>
</div>`;
    }
    return '';
  }).join('');

  let statsHtml = page.stats ? `
  <div class="stats-bar">
    ${page.stats.map(s => `
    <div class="stat-item">
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('')}
  </div>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WellsPlusDaily — ${page.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<style>${css}</style>
</head>
<body>

<main class="main-wrapper">
${nav}

<div class="hero">
  <h1 class="hero-h1">${page.hero.h1}</h1>
  <p class="hero-sub">${page.hero.sub}</p>
  <a href="#contact" class="btn-dark">${page.hero.cta}</a>
  ${statsHtml}
</div>

${sectionsHtml}
</main>

${footer}


<script>
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const header = document.getElementById('global-header');

  if(menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('backdrop-blur-md', 'bg-white/60', 'border-b', 'border-black/5', 'shadow-sm');
      header.classList.remove('pt-4');
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-white/60', 'border-b', 'border-black/5', 'shadow-sm');
      header.classList.add('pt-4');
    }
  });
});
</script>
</body>

</html>`;
}

const pagesData = [
  {
    filename: 'how-it-works.html',
    title: 'The Trust Stack',
    hero: {
      h1: 'Execution is scarce. <br/><em>We enforce it.</em>',
      sub: 'The dual-contract enforcement system built for premium brands. We monetize the function of being a credible enforcement layer.',
      cta: 'Explore the Trust Stack'
    },
    stats: [
      {num: '$5-15K', label: 'Deal Boundaries'},
      {num: '15%', label: 'Flat Fee'},
      {num: '90-Day', label: 'Execution Window'}
    ],
    sections: [
      {
        type: 'grid-3',
        title: 'One trust stack for your entire creator spend.',
        sub: 'Infinite reach is meaningless without reliability. We replace speculation with actuarial evidence.',
        items: [
          {title: 'Curation as Underwriting', text: 'External proof does dual work. We only present creators whose delivery history makes our bounded guarantee economically survivable.'},
          {title: 'Institutional Visibility', text: 'AI support always-on for routine queries, backed by a defined human escalation window (Mon–Fri 7:30am–8pm EDT).'},
          {title: 'Bounded Guarantee', text: 'Credit-and-replacement remediation, scoped to spec compliance and timeline, within a strict 90-day window.'}
        ]
      },
      {
        type: 'grid-2-list',
        title: 'Process Ownership Visibility.',
        sub: 'The continuous visible artifact of the enforcement function operating.',
        items: [
          {title: 'Creator Selected', tag: 'Curated Match'},
          {title: 'Contract Executed', tag: 'Dual-Bound'},
          {title: 'Compliance Monitored', tag: 'Active Spec'},
          {title: 'Escalation Available', tag: 'SLA Protected'}
        ]
      }
    ]
  },
  {
    filename: 'guarantee.html',
    title: 'Bounded Guarantee',
    hero: {
      h1: 'A bounded guarantee <br/><em>engineered for reliability.</em>',
      sub: 'Capture premium creator execution, mitigate compliance failure, and scale campaigns under a strict operational guarantee.',
      cta: 'View Remediation Terms'
    },
    stats: [
      {num: '100%', label: 'Credit & Replacement'},
      {num: '90 Days', label: 'Protection Window'},
      {num: 'Zero', label: 'Speculative Risk'}
    ],
    sections: [
      {
        type: 'grid-3',
        title: 'Spec and Timeline Compliance.',
        sub: 'Objectively verifiable conditions defined at match-lock and written into both contracts.',
        items: [
          {title: 'Deliverable Integrity', text: 'Enforced deliverable length, format constraints, and required platform parameters.'},
          {title: 'Message Adherence', text: 'Strict inclusion of 3–5 specific claims or features the brand mandates in the brief.'},
          {title: 'Timeline Security', text: 'Delivery by agreed date, and the content remains posted for the full 90-day window.'}
        ]
      },
      {
        type: 'grid-2-list',
        title: 'Explicit Boundaries.',
        sub: 'What we guarantee, and what we explicitly exclude.',
        items: [
          {title: 'Credit-and-Replacement', tag: 'Guaranteed'},
          {title: 'Spec Compliance', tag: 'Guaranteed'},
          {title: 'Algorithmic Performance', tag: 'Excluded'},
          {title: 'Downstream Conversion', tag: 'Excluded'}
        ]
      }
    ]
  },
  {
    filename: 'escalation.html',
    title: 'Institutional Visibility',
    hero: {
      h1: 'Institutional Visibility.<br/><em>Defined Response.</em>',
      sub: 'Setting brands free to build healthier campaigns. We substitute founder visibility for institutional posture.',
      cta: 'View Escalation Map'
    },
    stats: [
      {num: '62.5 Hrs', label: 'Weekly Coverage'},
      {num: '24/7', label: 'AI Navigation'},
      {num: '5', label: 'Defined Triggers'}
    ],
    sections: [
      {
        type: 'grid-3',
        title: 'The Five Escalation Triggers.',
        sub: 'Hard handoff to a human operator the moment anything touches contract interpretation.',
        items: [
          {title: 'Creator Failure', text: 'Triggered when delivery is missed, quality falls below spec, or the creator becomes non-responsive.'},
          {title: 'Campaign Delay', text: 'Triggered when the agreed-upon execution timeline is at risk of breach.'},
          {title: 'Remediation', text: 'Triggered instantly when refund or credit-and-replacement remediation is requested.'}
        ]
      }
    ]
  },
  {
    filename: 'curation.html',
    title: 'Curation as Underwriting',
    hero: {
      h1: 'Curation as <br/><em>Underwriting.</em>',
      sub: 'We don’t just build lists. We underwrite performance. Our curation process acts as actuarial evidence.',
      cta: 'View Roster Criteria'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'External proof that does dual work.',
        sub: 'Roster growth is subordinate to roster quality. The guarantee model assumes a failure rate below 15%.',
        items: [
          {title: 'Placement History', text: 'A deep audit of past deals, breaches, and completions. We require a proven track record.'},
          {title: 'Delivery Reliability', text: 'Actuarial evidence of meeting deadlines, adhering to specs, and minimizing revision cycles.'},
          {title: 'Audience Integrity', text: 'Verification of demographics and engagement to prevent bot-driven execution.'}
        ]
      }
    ]
  },
  {
    filename: 'tech-software.html',
    title: 'For Software & Tech',
    hero: {
      h1: 'Enforced execution for <br/><em>Software & Tech.</em>',
      sub: 'The dual-contract system built specifically to govern complex $5–15K SaaS deals.',
      cta: 'Start a SaaS Campaign'
    },
    sections: [
      {
        type: 'grid-2-list',
        title: 'SaaS-Specific Compliance.',
        sub: 'Technical briefs require exact execution. We enforce it.',
        items: [
          {title: 'Talking Point Adherence', tag: 'Monitored'},
          {title: 'Feature Demonstrations', tag: 'Monitored'},
          {title: 'Pre-Post Approval', tag: 'Enforced'}
        ]
      }
    ]
  },
  {
    filename: 'lifestyle.html',
    title: 'For Lifestyle Brands',
    hero: {
      h1: 'Enforced execution for <br/><em>Lifestyle Brands.</em>',
      sub: 'The dual-contract system built for physical goods integration and consumer products.',
      cta: 'Start a Lifestyle Campaign'
    },
    sections: [
      {
        type: 'grid-2-list',
        title: 'Consumer Brand Compliance.',
        sub: 'Brand safety and FTC compliance, fully managed.',
        items: [
          {title: 'FTC Disclosures', tag: 'Monitored'},
          {title: 'Visual Identity', tag: 'Monitored'},
          {title: '90-Day Retention', tag: 'Enforced'}
        ]
      }
    ]
  },
  {
    filename: 'content.html',
    title: 'For Content & Media',
    hero: {
      h1: 'Enforced execution for <br/><em>Content Networks.</em>',
      sub: 'For media companies and agencies that need to execute reliable sponsorships without expanding internal operations headcount.',
      cta: 'Explore Agency Tools'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'Scalable Reliability.',
        sub: 'We absorb the operational friction of dual-party enforcement.',
        items: [
          {title: 'Unified Deal Framework', text: 'Streamline all your creator contracts into a single, predictable structure.'},
          {title: 'Guaranteed Replacement', text: 'If a creator drops out, we replace them at no cost to your agency.'},
          {title: 'Tax & Payouts', text: 'We handle the 80/20 split and all 1099 disbursements.'}
        ]
      }
    ]
  },
  {
    filename: 'start.html',
    title: 'How to Start',
    hero: {
      h1: 'The <em>Deal-Framework-First</em><br/>Portal.',
      sub: 'Creator selection is a downstream step inside an already-bounded deal framework. You define the spec, we guarantee the execution.',
      cta: 'View The Portal'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'What you see before you select.',
        sub: 'We invert marketplace defaults. We answer "what happens to my money" before showing inventory.',
        items: [
          {title: 'What You Get', text: 'The precise deliverables, structured from the compliance spec.'},
          {title: 'What Is Guaranteed', text: 'The timeline, the conditions, and the credit-and-replacement policy.'},
          {title: 'Escalation Path', text: 'Immediate visibility into your defined human response SLA.'}
        ]
      }
    ]
  },
  {
    filename: 'pricing.html',
    title: 'Pricing',
    hero: {
      h1: 'Transparent pricing for <br/><em>bounded execution.</em>',
      sub: '15% flat fee on the gross deal value. Zero hidden costs. You pay for the enforcement function.',
      cta: 'Calculate Your Campaign'
    },
    stats: [
      {num: '15%', label: 'Brokerage Fee'},
      {num: '$5-15K', label: 'Sweet Spot'},
      {num: '80/20', label: 'Creator Split'}
    ],
    sections: [
      {
        type: 'grid-2-list',
        title: 'Where the money goes.',
        sub: 'Example: A $10,000 brand contract.',
        items: [
          {title: 'Creator Payout', tag: '$8,500'},
          {title: 'Brokerage Fee', tag: '$1,500'},
          {title: 'Validation Hold (20%)', tag: '$1,700 Held 30 Days'}
        ]
      }
    ]
  },
  {
    filename: 'roster.html',
    title: 'Roster Eligibility',
    hero: {
      h1: 'Premium Creators are <br/><em>Curated Creators.</em>',
      sub: 'Roster growth is subordinate to quality. Wells+ Daily is an invite-only environment built to protect the integrity of premium brand partnerships.',
      cta: 'Apply for Roster'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'The Standard for Placement.',
        sub: 'We monitor placement history strictly.',
        items: [
          {title: 'Active Status', text: 'Creators maintain active status by delivering perfectly against the compliance spec.'},
          {title: 'Flagged Breach', text: 'Early deletion of content (before 90 days) results in immediate revocation of future deal access.'},
          {title: 'Under Review', text: 'Creators involved in active escalations are paused from new matching until resolution.'}
        ]
      }
    ]
  },
  {
    filename: 'payouts.html',
    title: 'Payout Structure',
    hero: {
      h1: 'The <em>80/20</em> Creator <br/>Enforcement Model.',
      sub: 'We use structured payouts and future-opportunity leverage to ensure brand compliance, rather than cash forfeiture.',
      cta: 'Read Payout Docs'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'How creators get paid.',
        sub: 'Designed for premium supply who respect uniform, institutional business terms.',
        items: [
          {title: '80% On Approval', text: 'Funds release the moment the deliverable is submitted and compliance spec is verified.'},
          {title: '20% At Day 30', text: 'A compliance-validation hold that auto-releases unless a failure is flagged.'},
          {title: 'Future Leverage', text: 'Breach of the 90-day retention window results in roster removal, not cash clawbacks.'}
        ]
      }
    ]
  },
  {
    filename: 'about.html',
    title: 'About Us',
    hero: {
      h1: 'About Us — <br/><em>Trust Through Structure.</em>',
      sub: 'Building the economic infrastructure for the creator economy. We eliminate the friction and risk of premium influencer campaigns.',
      cta: 'Join The Team'
    },
    sections: [
      {
        type: 'grid-2-list',
        title: 'Our Governance Doctrine.',
        sub: 'The principles we do not compromise.',
        items: [
          {title: 'Quality Over Growth', tag: 'Doctrine 0.6.1'},
          {title: 'Escalation Integrity', tag: 'Doctrine 0.6.2'},
          {title: 'Legible Enforcement', tag: 'Doctrine 0.6.3'}
        ]
      }
    ]
  },
  {
    filename: 'terms.html',
    title: 'Terms of Service',
    hero: { h1: 'Terms of <br/><em>Service</em>', sub: 'Effective Date: June 2026', cta: 'Download PDF' },
    sections: [ { type: 'grid-2-list', title: 'Legal Agreements.', sub: 'Platform usage rules.', items: [{title: 'Dual-Contract Acceptance', tag: 'Required'}] } ]
  },
  {
    filename: 'privacy.html',
    title: 'Privacy Policy',
    hero: { h1: 'Privacy <br/><em>Policy</em>', sub: 'Effective Date: June 2026', cta: 'Download PDF' },
    sections: [ { type: 'grid-2-list', title: 'Data Protection.', sub: 'How we manage data.', items: [{title: 'Stripe Identity Data', tag: 'Encrypted'}] } ]
  }
];

pagesData.forEach(page => {
  fs.writeFileSync(page.filename, buildHtml(page));
});
console.log('Successfully generated all pages with strict Living Doc compliance and full Ramp UI styling.');
