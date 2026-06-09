const fs = require('fs');

const logos = [
  ['https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg'],
  ['https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'],
  ['https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'],
  ['https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'],
  ['https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.svg', 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'],
  ['https://upload.wikimedia.org/wikipedia/commons/c/c4/Sony_logo.svg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg']
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

const newSectionHtml = `
<!-- LOGO GRID REPLACEMENT -->
<div id="customer-grid-section" class="max-w-[1280px] mx-auto px-6 w-full py-16 sm:py-24 relative z-10 pointer-events-auto">
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

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace old ticker
const oldTickerRegex = /<!-- LOGO TICKER -->[\s\S]*?<\/section>/;

if (indexHtml.match(oldTickerRegex)) {
  indexHtml = indexHtml.replace(oldTickerRegex, newSectionHtml);
  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully replaced old ticker with the animated logo grid component.');
} else {
  console.log('Could not find old ticker.');
}
