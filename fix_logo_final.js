const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Header Logo: Remove mix-blend-multiply
  content = content.replace(
    /mix-blend-multiply/g,
    ''
  );

  // Footer Logo: Remove style="mix-blend-mode: screen;" but KEEP invert class
  content = content.replace(
    /style="mix-blend-mode: screen;"/g,
    ''
  );

  fs.writeFileSync(filePath, content);
}

processFile('index.html');
processFile('generate_pages_v2.js');

console.log('Successfully removed all CSS mix-blend-mode hacks. Only standard invert filter remains for the footer.');
