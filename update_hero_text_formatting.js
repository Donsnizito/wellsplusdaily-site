const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Underline the text in the hero
indexHtml = indexHtml.replace(
  'WellsPlusDaily provides structured contract execution, secure deal management, and precision talent matching for premium brands and creators.',
  'WellsPlusDaily provides <u class="underline-offset-4 decoration-neutral-400">structured contract execution, secure deal management, and precision talent matching</u> for premium brands and creators.'
);

// Update and center the marketing text
indexHtml = indexHtml.replace(
  '<p class="text-[length:var(--text-12)] text-neutral-500 font-medium pl-2 sm:pl-4">By submitting your email, you agree to marketing emails.</p>',
  '<p class="text-[length:var(--text-12)] text-neutral-500 font-medium text-center w-full mt-2">By submitting your email, you agree to opt in to marketing emails.</p>'
);

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully updated the text formatting on the hero section.');
