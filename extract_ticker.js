const fs = require('fs');
const html = fs.readFileSync('../for website-temp/ramp_home_raw.html', 'utf8');

// The class might be "logo-carousel" or something similar.
// Let's just find the section that contains "logo-carousel__marquee"
const startIndex = html.indexOf('<div class="section-container hero-logo-section');
if (startIndex !== -1) {
  let endIndex = html.indexOf('</section>', startIndex);
  if (endIndex === -1) endIndex = html.indexOf('<!--', startIndex);
  if (endIndex === -1) endIndex = startIndex + 10000; // fallback
  
  let snippet = html.substring(startIndex, endIndex);
  fs.writeFileSync('ticker_raw.html', snippet);
  console.log('Successfully extracted ticker snippet to ticker_raw.html');
} else {
  console.log('Could not find hero-logo-section');
}
