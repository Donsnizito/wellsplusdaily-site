const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\Shadow\\Downloads\\wellsplusdaily-site';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.html')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace the specific CTA text globally
    const updatedContent = content.replace(/>Get started for free</g, '>Request Platform Access<');
    
    if (content !== updatedContent) {
      fs.writeFileSync(fullPath, updatedContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
