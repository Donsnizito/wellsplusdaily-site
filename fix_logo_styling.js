const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\r\n/g, '\n');

  // 1. Update Font Import to include 600 and 700 for Red Hat Display
  content = content.replace(
    /family=Red\+Hat\+Display:wght@500/g,
    'family=Red+Hat+Display:wght@500;600;700'
  );

  // 2. Add Apple Touch Icon
  if (!content.includes('apple-touch-icon')) {
    content = content.replace(
      /<link rel="icon" type="image\/png" href="\/logo_lime\.png">/g,
      '<link rel="icon" type="image/png" href="/logo_lime.png">\n<link rel="apple-touch-icon" href="/logo_lime.png">'
    );
    // Also support relative path
    content = content.replace(
      /<link rel="icon" type="image\/png" href="\.\/logo_lime\.png">/g,
      '<link rel="icon" type="image/png" href="./logo_lime.png">\n<link rel="apple-touch-icon" href="./logo_lime.png">'
    );
  }

  // 3. Header Logo Fixes
  // Old regex: 
  const headerLogoRegex = /<a href="\/?" class="flex items-center gap-1\.5 group cursor-pointer">\s*<img src="\/logo_white\.png" alt="Logo" class="md:w-9 md:h-9 w-7 h-7 object-contain transition-transform duration-500 ease-out group-hover:rotate-\[15deg\] group-hover:scale-110 mix-blend-multiply" \/>\s*<span class="text-xl md:text-\[22px\] font-medium tracking-tight text-neutral-900" style="font-family: 'Red Hat Display', sans-serif;">wells\+daily<\/span>\s*<\/a>/g;

  // New replacement: bigger logo, no mix-blend-multiply, font-semibold (600) or bold (700) - let's use font-semibold text-[24px]
  const newHeaderLogo = `<a href="/" class="flex items-center gap-2 group cursor-pointer">
          <img src="/logo_white.png" alt="Logo" class="md:w-11 md:h-11 w-9 h-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-[15deg] group-hover:scale-110" />
          <span class="text-[22px] md:text-[26px] font-semibold tracking-tight text-neutral-900" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</span>
        </a>`;

  content = content.replace(headerLogoRegex, newHeaderLogo);

  // Fallback if regex fails, do targeted replaces
  content = content.replace('class="md:w-9 md:h-9 w-7 h-7 object-contain transition-transform duration-500 ease-out group-hover:rotate-[15deg] group-hover:scale-110 mix-blend-multiply"', 'class="md:w-11 md:h-11 w-9 h-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-[15deg] group-hover:scale-110"');
  content = content.replace('class="text-xl md:text-[22px] font-medium tracking-tight text-neutral-900" style="font-family: \'Red Hat Display\', sans-serif;"', 'class="text-[22px] md:text-[26px] font-bold tracking-tight text-neutral-900" style="font-family: \'Red Hat Display\', sans-serif;"');

  // 4. Footer Logo Fixes
  const footerLogoRegex = /<div class="flex items-center gap-1\.5 mb-4">\s*<img src="\/logo_white\.png" alt="Logo" class="w-8 h-8 sm:w-10 sm:h-10 object-contain invert" style="mix-blend-mode: screen;" \/>\s*<h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter" style="font-family: 'Red Hat Display', sans-serif;">wells\+daily<\/h3>\s*<\/div>/g;

  const newFooterLogo = `<div class="flex items-center gap-2 mb-4">
              <img src="/logo_white.png" alt="Logo" class="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <h3 class="text-3xl sm:text-4xl text-white font-semibold tracking-tighter" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</h3>
            </div>`;

  content = content.replace(footerLogoRegex, newFooterLogo);

  // Fallback if regex fails, do targeted replaces
  content = content.replace('class="w-8 h-8 sm:w-10 sm:h-10 object-contain invert" style="mix-blend-mode: screen;"', 'class="w-10 h-10 sm:w-12 sm:h-12 object-contain"');
  content = content.replace('class="text-2xl sm:text-3xl text-white font-medium tracking-tighter" style="font-family: \'Red Hat Display\', sans-serif;"', 'class="text-3xl sm:text-4xl text-white font-semibold tracking-tighter" style="font-family: \'Red Hat Display\', sans-serif;"');

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js');

console.log('Successfully updated logo size, spacing, font weight, and removed mix-blend hacks.');
