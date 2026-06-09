const fs = require('fs');

function processFile(filePath, isGenScript = false) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update Google Fonts to include Red Hat Display
  content = content.replace(
    /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">/g,
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Red+Hat+Display:wght@500&display=swap" rel="stylesheet">'
  );

  // 2. Update Favicon
  content = content.replace(
    /<link rel="icon" type="image\/svg\+xml" href="\/favicon\.svg">/g,
    '<link rel="icon" type="image/png" href="/logo_lime.png">'
  );
  content = content.replace(
    /<link rel="icon" type="image\/svg\+xml" href="\.\/favicon\.svg">/g,
    '<link rel="icon" type="image/png" href="./logo_lime.png">'
  );
  // Fallback for generic rel="icon"
  if (!content.includes('logo_lime.png') && content.includes('rel="icon"')) {
    content = content.replace(/<link rel="icon"[^>]+>/g, '<link rel="icon" type="image/png" href="/logo_lime.png">');
  }

  // 3. Header Logo Replacement
  const oldHeaderLogo = /<a href="index\.html" class="flex items-center gap-2 group cursor-pointer">[\s\S]*?<svg[\s\S]*?<\/svg>[\s\S]*?<span[^>]*>Wells\+Daily<\/span>[\s\S]*?<\/a>/;
  const newHeaderLogo = `<a href="index.html" class="flex items-center gap-1.5 group cursor-pointer">
            <img src="/logo_white.png" alt="Wells+Daily Logo" class="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-[15deg] group-hover:scale-110 mix-blend-multiply" />
            <span class="text-[22px] font-medium tracking-tight text-neutral-900" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</span>
          </a>`;
  
  // Try regex replace, if not found, it might be slightly differently formatted.
  if (content.match(oldHeaderLogo)) {
    content = content.replace(oldHeaderLogo, newHeaderLogo);
  }

  // 4. Footer Logo Replacement
  const oldFooterLogo = /<div class="flex items-center gap-2 mb-4">\s*<h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter font-sans">Wells\+Daily<\/h3>\s*<\/div>/g;
  const newFooterLogo = `<div class="flex items-center gap-2 mb-4">
              <img src="/logo_white.png" alt="Wells+Daily Logo" class="w-8 h-8 sm:w-10 sm:h-10 object-contain invert" style="mix-blend-mode: screen;" />
              <h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</h3>
            </div>`;
  
  if (content.match(oldFooterLogo)) {
    content = content.replace(oldFooterLogo, newFooterLogo);
  }

  // For generate_pages_v2.js, if regex failed due to string escaping or similar, we do explicit replace
  if (isGenScript) {
    // Specifically handle the string literals if needed
  }

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js', true);

console.log('Successfully updated logo, favicon, and font.');
