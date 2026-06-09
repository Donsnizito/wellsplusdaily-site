const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/Shadow/Downloads/wellsplusdaily-site';

// 1. Rename file
if (fs.existsSync(path.join(dir, 'tech-software.html'))) {
  fs.renameSync(path.join(dir, 'tech-software.html'), path.join(dir, 'brands.html'));
}

// 2. Update all HTML files
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js'));
for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  content = content.replace(/\/tech-software\.html/g, '/brands.html');
  content = content.replace(/>Brands</g, '>Brands<');
  content = content.replace(/>Brands</g, '>Brands<');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
}
