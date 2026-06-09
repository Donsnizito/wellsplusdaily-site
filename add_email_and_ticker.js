const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1. Replace the buttons with the Email Capture Form
const oldButtonsRegex = /<div class="mt-8 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">[\s\S]*?<\/div>/;

const newEmailForm = `<form class="mt-8 flex flex-col items-start gap-3 pointer-events-auto w-full max-w-[28rem] relative z-20">
    <div class="flex flex-col sm:flex-row items-center w-full gap-2 sm:gap-0 bg-white p-1.5 rounded-2xl sm:rounded-full border border-neutral-200 shadow-sm transition-shadow focus-within:ring-2 focus-within:ring-[#DDF82A]/50 focus-within:border-[#DDF82A]">
        <input type="email" placeholder="What's your work email?" required class="w-full bg-transparent border-none px-4 py-2 text-[length:var(--text-14)] font-medium text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-0 rounded-full" />
        <button type="submit" class="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2.5 text-[length:var(--text-14)] font-medium text-black bg-[#DDF82A] rounded-full hover:bg-[#C5E01A] transition-colors flex-shrink-0">Get started for free</button>
    </div>
    <p class="text-[length:var(--text-12)] text-neutral-500 font-medium pl-2 sm:pl-4">By submitting your email, you agree to marketing emails.</p>
</form>`;

indexHtml = indexHtml.replace(oldButtonsRegex, newEmailForm);

// 2. Add the Tailwind marquee config
const tailwindConfig = `<script>
  tailwind.config = {
    theme: {
      extend: {
        animation: {
          'marquee': 'marquee 30s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          }
        }
      }
    }
  }
</script>`;

if (!indexHtml.includes('tailwind.config')) {
  indexHtml = indexHtml.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, `<script src="https://cdn.tailwindcss.com"></script>\n${tailwindConfig}`);
}

// 3. Build the Logo Ticker
const tickerHtml = `
<!-- LOGO TICKER -->
<div class="w-full overflow-hidden border-t border-b border-black/5 bg-[#F8F8F7] py-6 relative z-10 pointer-events-none">
    <div class="flex items-center w-[200%] animate-marquee">
        <!-- First Set -->
        <div class="flex items-center justify-around w-1/2">
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Anthropic</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Amazon</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Shopify</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Stripe</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Ramp</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">MetLife</span>
        </div>
        <!-- Second Set (Duplicate for loop) -->
        <div class="flex items-center justify-around w-1/2">
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Anthropic</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Amazon</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Shopify</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Stripe</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">Ramp</span>
            <span class="text-xl md:text-2xl font-bold tracking-[0.15em] text-neutral-300 uppercase">MetLife</span>
        </div>
    </div>
</div>
`;

// Inject ticker exactly after the Hero section wrapper
// The hero section wrapper ends with:
//       }
//       draw();
//   </script>
// </div>
const heroEndRegex = /<\/script>\s*<\/div>/;
if (indexHtml.includes('<!-- LOGO TICKER -->')) {
  // Already injected, maybe update?
} else {
  indexHtml = indexHtml.replace(heroEndRegex, `</script>\n</div>\n${tickerHtml}`);
}

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully injected Email capture field and continuous marquee logo ticker.');
