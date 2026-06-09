const fs = require('fs');

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// 1. Add Banner to Header in generate_pages_v2.js
const bannerHtml = `
      <div id="top-banner" class="w-full bg-[#0A0A0A] text-white px-4 py-4 flex items-center justify-center relative transition-all duration-300">
        <p class="text-[length:var(--text-13)] font-medium text-neutral-300 text-center pr-8 sm:pr-0">
          Introducing Brokerage OS — the intelligent operating system for premium brands and creators. 
          <a href="/how-it-works.html" class="text-white underline underline-offset-2 hover:text-[#DDF82A] transition-colors ml-1">Learn more <span aria-hidden="true">&rarr;</span></a>
        </p>
        <button id="close-banner" class="absolute right-4 text-neutral-400 hover:text-white transition-colors p-1" aria-label="Dismiss">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>`;

// Update header string in genScript
// The header currently starts with: <header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-[100vw] w-full pt-4 transition-all duration-300">
// We remove the pt-4 from the header itself so the banner sits flush at the top, and put pt-4 on the nav instead if it isn't already there.
genScript = genScript.replace(
  /<header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-\[100vw\] w-full pt-4 transition-all duration-300">/,
  '<header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-[100vw] w-full transition-all duration-300">\n' + bannerHtml
);

// We need to fix the sticky header scroll logic. It previously removed 'pt-4'. Now it doesn't have 'pt-4' to remove.
// Let's modify the scroll JS logic.
const oldScrollLogic = `window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('backdrop-blur-md', 'bg-white/60', 'border-b', 'border-black/5', 'shadow-sm');
      header.classList.remove('pt-4');
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-white/60', 'border-b', 'border-black/5', 'shadow-sm');
      header.classList.add('pt-4');
    }
  });`;

const newScrollLogic = `
  const closeBanner = document.getElementById('close-banner');
  const topBanner = document.getElementById('top-banner');
  if(closeBanner && topBanner) {
    closeBanner.addEventListener('click', () => {
      topBanner.style.display = 'none';
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('backdrop-blur-md', 'bg-white/60', 'border-b', 'border-black/5', 'shadow-sm');
      // Hide banner on scroll for a cleaner look, or just let it stay. Ramp lets it stay or scroll away.
      // We will let it stay but just apply the glass to the header container.
    } else {
      header.classList.remove('backdrop-blur-md', 'bg-white/60', 'border-b', 'border-black/5', 'shadow-sm');
    }
  });`;

genScript = genScript.replace(oldScrollLogic, newScrollLogic);

// 2. Footer change "Categories" -> "Solution"
genScript = genScript.replace(/>Categories<\/h3>/g, '>Solution</h3>');

fs.writeFileSync('generate_pages_v2.js', genScript);


// 3. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

indexHtml = indexHtml.replace(
  /<header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-\[100vw\] w-full pt-4 transition-all duration-300">/,
  '<header id="global-header" class="fixed top-0 left-0 right-0 z-50 max-w-[100vw] w-full transition-all duration-300">\n' + bannerHtml
);

indexHtml = indexHtml.replace(oldScrollLogic, newScrollLogic);
indexHtml = indexHtml.replace(/>Categories<\/h3>/g, '>Solution</h3>');

// We also need to add more top padding to the hero in index.html to account for the banner height.
// Currently hero padding is: px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-12
// Banner is ~56px tall. So we add pt-32 md:pt-40
indexHtml = indexHtml.replace(/px-6 md:px-12 lg:px-16 pt-24 md:pt-28 pb-12/g, 'px-6 md:px-12 lg:px-16 pt-40 md:pt-44 pb-12');

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully injected top banner, updated header logic, renamed footer Category, and adjusted index padding.');
