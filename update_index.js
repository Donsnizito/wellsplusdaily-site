const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('generate_pages_v2.js', 'utf8');
// Extract footer string literal
const footerMatch = script.match(/const footer = `([\s\S]*?)`;/);
if (footerMatch) {
  let newFooter = footerMatch[1];
  html = html.replace(/<footer>[\s\S]*?<\/footer>/, newFooter);
  if(!html.includes('cdn.tailwindcss.com')) {
    html = html.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script>\n</head>');
  }
  fs.writeFileSync('index.html', html);
  console.log('Successfully updated index.html with the new footer and tailwind script.');
} else {
  console.log('Could not find footer in generate_pages_v2.js');
}
