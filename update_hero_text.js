const fs = require('fs');

// We add the two new variables required by the user's "+2px" logic
const newVars = `
  --text-30: 30px;
  --text-42: 42px;
`;

// 1. Update generate_pages_v2.js
let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

if (!genScript.includes('--text-30: 30px;')) {
  genScript = genScript.replace(/--text-28: 28px;/, `--text-28: 28px;${newVars}`);
}

// Mobile hero-h1 (from var(--text-48) down to var(--text-30))
genScript = genScript.replace(/\.hero-h1\{font-family:var\(--sans\);font-size:var\(--text-48\)/g, '.hero-h1{font-family:var(--sans);font-size:var(--text-30)');

// Desktop hero-h1 (from var(--text-64) down to var(--text-42))
genScript = genScript.replace(/\.hero-h1\{font-size:var\(--text-64\);\}/g, '.hero-h1{font-size:var(--text-42);}');

fs.writeFileSync('generate_pages_v2.js', genScript);

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

if (!indexHtml.includes('--text-30: 30px;')) {
  indexHtml = indexHtml.replace(/--text-28: 28px;/, `--text-28: 28px;${newVars}`);
}

// Replace Tailwind classes for index.html hero headline
indexHtml = indexHtml.replace(/text-\[length:var\(--text-48\)\] md:text-\[length:var\(--text-64\)\]/g, 'text-[length:var(--text-30)] md:text-[length:var(--text-42)]');

fs.writeFileSync('index.html', indexHtml);

console.log('Successfully reduced hero headline sizes to section size + 2px across all pages.');
