const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Header Logo: Add mix-blend-multiply back
  content = content.replace(
    /class="md:w-11 md:h-11 w-9 h-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-\[15deg\] group-hover:scale-110"/g,
    'class="md:w-11 md:h-11 w-9 h-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-[15deg] group-hover:scale-110 mix-blend-multiply"'
  );

  // Footer Logo: Add invert and mix-blend-screen back
  content = content.replace(
    /class="w-10 h-10 sm:w-12 sm:h-12 object-contain"/g,
    'class="w-10 h-10 sm:w-12 sm:h-12 object-contain invert" style="mix-blend-mode: screen;"'
  );

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js');

console.log('Successfully re-applied CSS blend modes to fix solid background issues.');
