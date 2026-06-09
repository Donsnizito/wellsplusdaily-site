const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Normalize line endings for easier matching
  content = content.replace(/\r\n/g, '\n');

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

  // 3. Header Logo Replacement using flexible regex
  const headerLogoRegex = /<a href="index\.html" class="flex items-center gap-2 group cursor-pointer">\s*<svg[\s\S]*?<\/svg>\s*<span class="text-xl font-medium tracking-tight text-neutral-900">Wells\+Daily<\/span>\s*<\/a>/g;
  
  const newHeaderLogo = `<a href="index.html" class="flex items-center gap-1.5 group cursor-pointer">
            <img src="/logo_white.png" alt="Logo" class="md:w-8 md:h-8 w-6 h-6 object-contain mix-blend-multiply" />
            <span class="text-xl md:text-2xl font-medium tracking-tight text-neutral-900" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</span>
          </a>`;

  content = content.replace(headerLogoRegex, newHeaderLogo);

  // 4. Footer Logo Replacement using flexible regex
  const footerLogoRegex = /<div class="flex items-center gap-2 mb-4">\s*<h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter font-sans">Wells\+Daily\s*<\/h3>\s*<\/div>/g;

  const newFooterLogo = `<div class="flex items-center gap-1.5 mb-4">
              <img src="/logo_white.png" alt="Logo" class="w-8 h-8 sm:w-10 sm:h-10 object-contain invert" style="mix-blend-mode: screen;" />
              <h3 class="text-2xl sm:text-3xl text-white font-medium tracking-tighter" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</h3>
            </div>`;

  content = content.replace(footerLogoRegex, newFooterLogo);

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js');

console.log('Successfully updated logos with CRLF-safe regex.');
