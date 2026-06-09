const fs = require('fs');

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// The new sticky header with ID
const newHeaderStr = `<div class="w-full flex justify-center"><header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-[100vw] w-full pt-4 transition-all duration-300">
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

const headerScript = `
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
`;

// 1. Update generate_pages_v2.js
genScript = genScript.replace(/const nav = `<div class="w-full flex justify-center"><header[\s\S]*?<\/header><\/div>`;/, 'const nav = `' + newHeaderStr + '`;');
genScript = genScript.replace(/<\/body>/, headerScript);
fs.writeFileSync('generate_pages_v2.js', genScript);

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace header in index.html
indexHtml = indexHtml.replace(/<div class="w-full flex justify-center"><header[\s\S]*?<\/header><\/div>/, newHeaderStr);

// Inject buttons back into hero
const oldHeroP = /<p class="text-xl font-normal leading-\[1\.6\] text-neutral-600 mt-6 max-w-\[720px\] tracking-\[-0\.01em\]">\s*WellsPlusDaily provides structured contract execution, secure deal management, and precision talent matching for premium brands and creators.\s*<\/p>/;
const heroButtons = `
          <p class="text-xl font-normal leading-[1.6] text-neutral-600 mt-6 max-w-[720px] tracking-[-0.01em]">
              WellsPlusDaily provides structured contract execution, secure deal management, and precision talent matching for premium brands and creators.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <a href="#contact" class="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-black bg-[#DDF82A] rounded-full hover:bg-[#C5E01A] transition-colors">Request Private Access</a>
              <a href="#about" class="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-neutral-600 bg-white border border-neutral-200 shadow-sm rounded-full hover:bg-neutral-50 transition-colors">Learn More</a>
          </div>`;
indexHtml = indexHtml.replace(oldHeroP, heroButtons);

// Inject header JS script
if (!indexHtml.includes("document.getElementById('menuBtn')")) {
  indexHtml = indexHtml.replace(/<\/body>/, headerScript);
}

// Remove old nav script from index.html if it exists
indexHtml = indexHtml.replace(/<script>\s*const nav = document\.getElementById\('nav'\);\s*window\.addEventListener\('scroll'[\s\S]*?<\/script>/, '');

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully applied header script, sticky glass effect, and restored hero buttons!');
