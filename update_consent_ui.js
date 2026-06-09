const fs = require('fs');

const fullWidthConsentHtml = `
<!-- Full Width Premium Consent UI -->
<div id="premium-consent-banner" class="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-black/5 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-[100] px-6 py-5 transition-all duration-500 translate-y-0 opacity-100 font-sans flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
  <div class="flex-1 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full">
    <div class="flex items-center justify-between w-full md:w-auto">
      <h3 class="text-neutral-900 font-semibold text-sm whitespace-nowrap">Privacy Preferences</h3>
      <button id="close-consent-mobile" class="text-neutral-400 hover:text-neutral-900 transition-colors p-1 md:hidden">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <div class="h-4 w-px bg-neutral-200 hidden md:block"></div>
    <p class="text-neutral-500 text-[13px] leading-relaxed max-w-4xl pr-4">
      We use cookies and similar technologies to personalize content, tailor ads, and provide a better experience. By clicking "Accept All", you agree to our use of cookies.
    </p>
  </div>
  <div class="flex items-center gap-3 shrink-0 w-full md:w-auto mt-2 md:mt-0">
    <button id="manage-consent" class="flex-1 md:flex-none px-6 py-2.5 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 font-medium rounded-full transition-colors text-[13px]">Manage</button>
    <button id="accept-consent" class="flex-1 md:flex-none px-6 py-2.5 bg-[#0A0A0A] hover:bg-black text-white font-medium rounded-full transition-colors text-[13px] shadow-sm">Accept All</button>
    <button id="close-consent-desktop" class="text-neutral-400 hover:text-neutral-900 transition-colors p-1 ml-2 hidden md:block">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>
</div>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('premium-consent-banner');
    const acceptBtn = document.getElementById('accept-consent');
    const closeBtnMobile = document.getElementById('close-consent-mobile');
    const closeBtnDesktop = document.getElementById('close-consent-desktop');
    const manageBtn = document.getElementById('manage-consent');
    
    if(localStorage.getItem('wellsplus_consent') === 'true') {
      if(banner) banner.style.display = 'none';
    }

    const dismissBanner = () => {
      if(banner) {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(100%)';
        setTimeout(() => banner.style.display = 'none', 500);
      }
      localStorage.setItem('wellsplus_consent', 'true');
    };

    if(acceptBtn) acceptBtn.addEventListener('click', dismissBanner);
    if(closeBtnMobile) closeBtnMobile.addEventListener('click', dismissBanner);
    if(closeBtnDesktop) closeBtnDesktop.addEventListener('click', dismissBanner);
    if(manageBtn) manageBtn.addEventListener('click', dismissBanner);
  });
</script>
`;

let genScript = fs.readFileSync('generate_pages_v2.js', 'utf8');

// Strip the old Mock UI
genScript = genScript.replace(/<!-- Premium Minimal Consent UI -->[\s\S]*?<\/script>/, '');

// Inject the new Full Width HTML at the end of the body
if (!genScript.includes('id="premium-consent-banner"')) {
  genScript = genScript.replace(/<\/body>/, `${fullWidthConsentHtml}\n</body>`);
}
fs.writeFileSync('generate_pages_v2.js', genScript);


let indexHtml = fs.readFileSync('index.html', 'utf8');

// Strip the old Mock UI
indexHtml = indexHtml.replace(/<!-- Premium Minimal Consent UI -->[\s\S]*?<\/script>/, '');

// Inject the new Full Width HTML at the end of the body
if (!indexHtml.includes('id="premium-consent-banner"')) {
  indexHtml = indexHtml.replace(/<\/body>/, `${fullWidthConsentHtml}\n</body>`);
}
fs.writeFileSync('index.html', indexHtml);

console.log('Successfully updated consent UI to full width with black CTA.');
