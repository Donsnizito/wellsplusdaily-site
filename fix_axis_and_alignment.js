const fs = require('fs');

// Fix generate_pages_v2.js
let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// 1. Fix the accidental global justify-start replacements
genScript = genScript.replace(/const nav = `<div class="w-full flex justify-start">/, 'const nav = `<div class="w-full flex justify-center">');
genScript = genScript.replace(/justify-start rounded-lg border border-black\/10/, 'justify-center rounded-lg border border-black/10');
genScript = genScript.replace(/justify-start bg-\[#DDF82A\]/, 'justify-center bg-[#DDF82A]');

// 2. Banner alignment (mobile left, desktop center)
genScript = genScript.replace(
  /<div id="top-banner" class="w-full bg-\[#0A0A0A\] text-white px-4 py-4 flex items-center justify-start relative transition-all duration-300">/,
  '<div id="top-banner" class="w-full bg-[#0A0A0A] text-white px-4 py-4 flex items-center justify-start md:justify-center relative transition-all duration-300">'
);
genScript = genScript.replace(
  /<p class="text-\[length:var\(--text-13\)\] font-medium text-neutral-300 text-left pr-8 sm:pr-0 w-full">/,
  '<p class="text-[length:var(--text-13)] font-medium text-neutral-300 text-left md:text-center pr-8 md:pr-0 w-full">'
);

// 3. Subpage padding
genScript = genScript.replace(/\.hero\{padding:160px 40px 64px/g, '.hero{padding:220px 40px 64px');
genScript = genScript.replace(/\.hero\{padding:140px 24px 48px\}/g, '.hero{padding:180px 24px 48px}');

fs.writeFileSync('generate_pages_v2.js', genScript);


// Fix index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Banner alignment (mobile left, desktop center)
indexHtml = indexHtml.replace(
  /<div id="top-banner" class="w-full bg-\[#0A0A0A\] text-white px-4 py-4 flex items-center justify-start relative transition-all duration-300">/,
  '<div id="top-banner" class="w-full bg-[#0A0A0A] text-white px-4 py-4 flex items-center justify-start md:justify-center relative transition-all duration-300">'
);
indexHtml = indexHtml.replace(
  /<p class="text-\[length:var\(--text-13\)\] font-medium text-neutral-300 text-left pr-8 sm:pr-0 w-full">/,
  '<p class="text-[length:var(--text-13)] font-medium text-neutral-300 text-left md:text-center pr-8 md:pr-0 w-full">'
);

// Verify if menuBtn was broken in indexHtml (it shouldn't be, but just in case)
indexHtml = indexHtml.replace(/justify-start rounded-lg border border-black\/10/, 'justify-center rounded-lg border border-black/10');

fs.writeFileSync('index.html', indexHtml);

console.log('Successfully fixed SVG axis, centered banner on desktop, and increased subpage padding.');
