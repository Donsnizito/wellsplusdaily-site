const fs = require('fs');

const ethycaScript = `
  <!-- Ethyca Fides Consent Manager Placeholder -->
  <script>
    window.Fides = window.Fides || {};
    window.Fides.config = {
      consent: {
        options: [
          { cookieKeys: ['essential'], default: true, fidesDataUseKey: 'essential' },
          { cookieKeys: ['marketing'], default: false, fidesDataUseKey: 'marketing' }
        ]
      },
      experience: {
        component: "banner_and_modal"
      },
      options: {
        isOverlayEnabled: true,
        isPrefetchEnabled: false
      }
    };
  </script>
  <script src="https://privacy.ethyca.com/b2b/js/fides.js" async defer></script>
`;

// Replace in generate_pages_v2.js
let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');
genScript = genScript.replace(/<script>\s*window\.klaroConfig[\s\S]*?klaro\.js"><\/script>/, ethycaScript);
fs.writeFileSync('generate_pages_v2.js', genScript);

// Replace in index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<script>\s*window\.klaroConfig[\s\S]*?klaro\.js"><\/script>/, ethycaScript);
fs.writeFileSync('index.html', indexHtml);

console.log('Successfully replaced Klaro with Ethyca Fides consent script.');
