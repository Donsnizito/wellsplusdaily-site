const fs = require('fs');

const iconBase = 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/';
const logos = [
  [iconBase + 'stripe.svg', iconBase + 'spotify.svg'],
  [iconBase + 'amazon.svg', iconBase + 'google.svg'],
  [iconBase + 'apple.svg', iconBase + 'netflix.svg'],
  [iconBase + 'meta.svg', iconBase + 'airbnb.svg'],
  [iconBase + 'uber.svg', iconBase + 'vercel.svg'],
  [iconBase + 'sony.svg', iconBase + 'samsung.svg']
];

let tilesHtml = '';
logos.forEach((pair, index) => {
  const delayClass = 'delay-' + (index + 1);
  tilesHtml += `
      <!-- Tile ${index + 1} -->
      <div class="bg-white flex items-center justify-center p-6 lg:p-8 aspect-[4/3] sm:aspect-auto sm:h-[180px] relative overflow-hidden group transition-colors">
        <div class="absolute inset-0 flex items-center justify-center p-10 lg:p-14 opacity-100 transition-opacity duration-1000 animate-logo-fade-1 ${delayClass} text-neutral-400 group-hover:text-neutral-900">
          <div class="w-full h-full bg-current transition-colors duration-300" style="mask-image: url('${pair[0]}'); mask-size: contain; mask-position: center; mask-repeat: no-repeat; -webkit-mask-image: url('${pair[0]}'); -webkit-mask-size: contain; -webkit-mask-position: center; -webkit-mask-repeat: no-repeat;"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center p-10 lg:p-14 opacity-0 transition-opacity duration-1000 animate-logo-fade-2 ${delayClass} text-neutral-400 group-hover:text-neutral-900">
          <div class="w-full h-full bg-current transition-colors duration-300" style="mask-image: url('${pair[1]}'); mask-size: contain; mask-position: center; mask-repeat: no-repeat; -webkit-mask-image: url('${pair[1]}'); -webkit-mask-size: contain; -webkit-mask-position: center; -webkit-mask-repeat: no-repeat;"></div>
        </div>
      </div>
  `;
});

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace the old grid section with the new grid section using robust SVGs and reduced padding
const gridSectionRegex = /<!-- LOGO GRID REPLACEMENT -->[\s\S]*?<!-- END LOGO GRID -->/;

const newGridHtml = `
<!-- LOGO GRID REPLACEMENT -->
<div id="customer-grid-section" class="max-w-[1280px] mx-auto px-6 w-full pt-4 pb-16 sm:pt-8 sm:pb-24 relative z-10 pointer-events-auto">
  <style>
    @keyframes fade1 {
      0%, 45% { opacity: 1; }
      50%, 95% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes fade2 {
      0%, 45% { opacity: 0; }
      50%, 95% { opacity: 1; }
      100% { opacity: 0; }
    }
    .animate-logo-fade-1 { animation: fade1 8s infinite; }
    .animate-logo-fade-2 { animation: fade2 8s infinite; }
    
    .delay-1 { animation-delay: 0s; }
    .delay-2 { animation-delay: 2.5s; }
    .delay-3 { animation-delay: 5s; }
    .delay-4 { animation-delay: 1.5s; }
    .delay-5 { animation-delay: 4s; }
    .delay-6 { animation-delay: 6.5s; }
  </style>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-200/50 rounded-2xl overflow-hidden border border-black/5 shadow-sm">
    
    <!-- Text Block -->
    <div class="flex flex-col justify-between gap-12 bg-[#F8F8F7] p-8 lg:p-10 col-span-1">
      <div>
        <p class="text-[length:var(--text-24)] font-medium tracking-tight text-neutral-900 text-balance leading-[1.4]">
          Join the world’s most ambitious brands <span class="text-neutral-500">growing faster with intelligent contract execution.</span>
        </p>
      </div>
      <a class="group flex items-center gap-2 w-fit text-[length:var(--text-14)] font-semibold text-neutral-500 hover:text-neutral-900 transition-colors" href="/how-it-works.html">
        Read the report
        <div class="overflow-hidden relative flex items-center justify-center">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33325 8.00017H12.6665M12.6665 8.00017L7.99994 3.3335M12.6665 8.00017L7.99994 12.6669" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
      </a>
    </div>

    <!-- Grid tiles -->
    <div class="col-span-1 lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-200/50">
      ${tilesHtml}
    </div>

  </div>
</div>
<!-- END LOGO GRID -->
`;

if (indexHtml.match(gridSectionRegex)) {
  indexHtml = indexHtml.replace(gridSectionRegex, newGridHtml);
  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully fixed broken Wikipedia SVGs by migrating to SimpleIcons CDN and reduced top padding.');
} else {
  console.log('Could not find the logo grid section.');
}
