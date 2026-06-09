const fs = require('fs');

const customConsentHtml = `
<!-- Premium Minimal Consent UI -->
<div id="premium-consent-banner" class="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[380px] bg-white border border-black/5 shadow-2xl rounded-2xl z-[100] p-6 transition-all duration-500 translate-y-0 opacity-100 font-sans">
  <div class="flex items-start justify-between mb-3">
    <h3 class="text-neutral-900 font-semibold text-base tracking-tight">Privacy Preferences</h3>
    <button id="close-consent" class="text-neutral-400 hover:text-neutral-900 transition-colors p-1 -mr-1 -mt-1 rounded-md">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
  <p class="text-neutral-500 text-[13px] mb-6 leading-relaxed">
    We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience.
  </p>
  <div class="flex flex-col sm:flex-row gap-2.5">
    <button id="manage-consent" class="w-full sm:w-1/2 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 font-medium py-2 rounded-full transition-colors text-[13px]">Manage</button>
    <button id="accept-consent" class="w-full sm:w-1/2 bg-[#DDF82A] hover:bg-[#c5e01a] text-black font-semibold py-2 rounded-full transition-colors text-[13px]">Accept All</button>
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('premium-consent-banner');
    const acceptBtn = document.getElementById('accept-consent');
    const closeBtn = document.getElementById('close-consent');
    const manageBtn = document.getElementById('manage-consent');
    
    // Check if already accepted
    if(localStorage.getItem('wellsplus_consent') === 'true') {
      if(banner) banner.style.display = 'none';
    }

    const dismissBanner = () => {
      if(banner) {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(20px)';
        setTimeout(() => banner.style.display = 'none', 500);
      }
      localStorage.setItem('wellsplus_consent', 'true');
    };

    if(acceptBtn) acceptBtn.addEventListener('click', dismissBanner);
    if(closeBtn) closeBtn.addEventListener('click', dismissBanner);
    if(manageBtn) manageBtn.addEventListener('click', dismissBanner);
  });
</script>
`;

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// Strip the old Ethyca script block
genScript = genScript.replace(/<!-- Ethyca Fides Consent Manager Placeholder -->[\s\S]*?<script src="https:\/\/privacy\.ethyca\.com\/b2b\/js\/fides\.js" async defer><\/script>/, '');

// Inject the new Mock HTML at the end of the body if not already there
if (!genScript.includes('id="premium-consent-banner"')) {
  genScript = genScript.replace(/<\/body>/, `${customConsentHtml}\n</body>`);
}
fs.writeFileSync('generate_pages_v2.js', genScript);


let indexHtml = fs.readFileSync('index.html', 'utf8');

// Strip the old Ethyca script block
indexHtml = indexHtml.replace(/<!-- Ethyca Fides Consent Manager Placeholder -->[\s\S]*?<script src="https:\/\/privacy\.ethyca\.com\/b2b\/js\/fides\.js" async defer><\/script>/, '');

// Inject the new Mock HTML at the end of the body
if (!indexHtml.includes('id="premium-consent-banner"')) {
  indexHtml = indexHtml.replace(/<\/body>/, `${customConsentHtml}\n</body>`);
}
fs.writeFileSync('index.html', indexHtml);

console.log('Successfully injected minimal premium consent UI.');
