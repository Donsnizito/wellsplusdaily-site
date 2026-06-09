const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Header Logo Replacement
  const oldHeaderLogo = `<a href="index.html" class="flex items-center gap-2 group cursor-pointer">
            <svg class="md:w-10 md:h-10 w-[30px] h-[30px] text-neutral-900" viewBox="0 0 48 48" aria-hidden="true" stroke-width="2">
              <path d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" fill="currentColor"></path>
            </svg>
            <span class="text-xl font-medium tracking-tight text-neutral-900">Wells+Daily</span>
          </a>`;

  const newHeaderLogo = `<a href="index.html" class="flex items-center gap-1.5 group cursor-pointer">
            <img src="/logo_white.png" alt="Logo" class="md:w-8 md:h-8 w-6 h-6 object-contain mix-blend-multiply" />
            <span class="text-xl md:text-2xl font-medium tracking-tight text-neutral-900" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</span>
          </a>`;

  if (content.includes(oldHeaderLogo)) {
    content = content.replace(oldHeaderLogo, newHeaderLogo);
  }

  // Footer Logo Replacement
  const oldFooterLogo = `<div class="flex items-center gap-2 mb-4">
              <h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter font-sans">Wells+Daily
              </h3>
            </div>`;
  const oldFooterLogo2 = `<div class="flex items-center gap-2 mb-4">
              <h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter font-sans">Wells+Daily</h3>
            </div>`;

  const newFooterLogo = `<div class="flex items-center gap-2 mb-4">
              <img src="/logo_white.png" alt="Logo" class="w-8 h-8 sm:w-10 sm:h-10 object-contain invert" style="mix-blend-mode: screen;" />
              <h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</h3>
            </div>`;

  if (content.includes(oldFooterLogo)) {
    content = content.replace(oldFooterLogo, newFooterLogo);
  }
  if (content.includes(oldFooterLogo2)) {
    content = content.replace(oldFooterLogo2, newFooterLogo);
  }

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js');

console.log('Successfully applied accurate string replacements.');
