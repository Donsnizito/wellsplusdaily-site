const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Change gap-2 to gap-1 in the header logo link
  content = content.replace(
    /<a href="\/" class="flex items-center gap-2 group cursor-pointer">/g,
    '<a href="/" class="flex items-center gap-1 group cursor-pointer">'
  );

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js');

console.log('Successfully reduced header logo spacing to gap-1.');
