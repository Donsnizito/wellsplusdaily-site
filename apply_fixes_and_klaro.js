const fs = require('fs');

const klaroScript = `
  <script>
    window.klaroConfig = {
        version: 1,
        elementID: 'klaro',
        styling: {
            theme: ['light', 'bottom', 'wide']
        },
        noAutoLoad: false,
        htmlTexts: true,
        embedded: false,
        groupByPurpose: true,
        storageMethod: 'cookie',
        cookieName: 'klaro',
        cookieExpiresAfterDays: 365,
        default: false,
        mustConsent: false,
        acceptAll: true,
        hideDeclineAll: false,
        hideLearnMore: false,
        noticeAsModal: false,
        translations: {
            en: {
                consentModal: {
                    title: 'Privacy Preferences',
                    description: 'We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.',
                },
                consentNotice: {
                    description: 'We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.'
                },
                purposes: {
                    analytics: 'Analytics',
                    marketing: 'Marketing'
                }
            }
        },
        services: [
            {
                name: 'analytics',
                title: 'Analytics',
                purposes: ['analytics'],
                required: false,
            },
            {
                name: 'marketing',
                title: 'Marketing',
                purposes: ['marketing'],
                required: false,
            }
        ]
    };
  </script>
  <script defer type="application/javascript" src="https://cdn.kiprotect.com/klaro/v0.7.18/klaro.js"></script>
`;

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// 1. Fix subpage padding (restore it to 160px desktop, 140px mobile)
genScript = genScript.replace(/\.hero\{padding:120px 40px 64px/g, '.hero{padding:160px 40px 64px');
genScript = genScript.replace(/\.hero\{padding:100px 24px 48px\}/g, '.hero{padding:140px 24px 48px}');

// 2. Fix banner text and alignment
genScript = genScript.replace(/justify-center/g, 'justify-start'); // the banner is the only justify-center in that block usually, let's be careful
genScript = genScript.replace(
  /<div id="top-banner" class="w-full bg-\[#0A0A0A\] text-white px-4 py-4 flex items-center justify-center relative transition-all duration-300">/,
  '<div id="top-banner" class="w-full bg-[#0A0A0A] text-white px-4 py-4 flex items-center justify-start relative transition-all duration-300">'
);
genScript = genScript.replace(
  /<p class="text-\[length:var\(--text-13\)\] font-medium text-neutral-300 text-center pr-8 sm:pr-0">\s*Introducing Brokerage OS/g,
  '<p class="text-[length:var(--text-13)] font-medium text-neutral-300 text-left pr-8 sm:pr-0 w-full">\n          Introducing Wells+ Daily'
);

// 3. Inject Klaro into head
if (!genScript.includes('klaroConfig')) {
  genScript = genScript.replace(/<\/head>/, `${klaroScript}</head>`);
}

fs.writeFileSync('generate_pages_v2.js', genScript);


// 4. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

indexHtml = indexHtml.replace(
  /<div id="top-banner" class="w-full bg-\[#0A0A0A\] text-white px-4 py-4 flex items-center justify-center relative transition-all duration-300">/,
  '<div id="top-banner" class="w-full bg-[#0A0A0A] text-white px-4 py-4 flex items-center justify-start relative transition-all duration-300">'
);
indexHtml = indexHtml.replace(
  /<p class="text-\[length:var\(--text-13\)\] font-medium text-neutral-300 text-center pr-8 sm:pr-0">\s*Introducing Brokerage OS/g,
  '<p class="text-[length:var(--text-13)] font-medium text-neutral-300 text-left pr-8 sm:pr-0 w-full">\n          Introducing Wells+ Daily'
);

if (!indexHtml.includes('klaroConfig')) {
  indexHtml = indexHtml.replace(/<\/head>/, `${klaroScript}</head>`);
}

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully aligned banner, updated text, added Klaro consent popup, and fixed subpage padding.');
