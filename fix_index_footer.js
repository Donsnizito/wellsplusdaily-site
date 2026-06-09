const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const script = fs.readFileSync('generate_pages_v2.js', 'utf8');

const footerMatch = script.match(/const footer = `(<footer[\s\S]*?<\/footer>)`;/);
if (footerMatch) {
  const newFooter = footerMatch[1];
  indexHtml = indexHtml.replace(/<footer class="w-full[\s\S]*?<\/footer>/, newFooter);
  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully replaced old footer in index.html with the new Ramp dark footer');
} else {
  console.error('Could not extract footer from generate_pages_v2.js');
}
