const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const newTickerHtml = `<!-- LOGO TICKER -->
<section class="z-10 sm:py-16 pt-8 pb-8 relative border-t border-b border-black/5 bg-[#F8F8F7]">
    <div class="sm:px-6 lg:px-8 max-w-[1280px] mx-auto pr-4 pl-4">
        <div class="text-center mb-8">
            <p class="uppercase text-[length:var(--text-12)] font-semibold text-neutral-500 tracking-[0.2em]">Trusted by teams at</p>
        </div>

        <!-- Ticker Container -->
        <div class="overflow-hidden relative"
            style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);">

            <!-- Animated Ticker -->
            <div class="ticker-track flex gap-16 pt-2 pb-2 items-center">
                <!-- First set of logos -->
                <div class="flex gap-16 shrink-0 items-center">
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-normal tracking-tighter">TechFlow</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-bold tracking-tighter">Nexus Labs</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-semibold tracking-tighter">DataSync</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-normal tracking-tighter">VisionCorp</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-semibold tracking-tighter">CloudBase</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-normal tracking-tighter">InnovateTech</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-bold tracking-tighter">FlowState</span>
                    </div>
                </div>

                <!-- Duplicate set for seamless loop -->
                <div class="flex items-center gap-16 shrink-0">
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-normal tracking-tighter">TechFlow</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-bold tracking-tighter">Nexus Labs</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-semibold tracking-tighter">DataSync</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-normal tracking-tighter">VisionCorp</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-semibold tracking-tighter">CloudBase</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-normal tracking-tighter">InnovateTech</span>
                    </div>
                    <div class="flex items-center gap-3 text-neutral-400 hover:text-neutral-900 transition-colors duration-300 cursor-pointer">
                        <span class="text-xl md:text-2xl font-bold tracking-tighter">FlowState</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        @keyframes customTicker {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-100%);
            }
        }
        .ticker-track {
            animation: customTicker 40s linear infinite;
            width: max-content;
        }
        .ticker-track:hover {
            animation-play-state: paused;
        }
    </style>
</section>`;

// Replace old ticker
const oldTickerRegex = /<!-- LOGO TICKER -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

if (indexHtml.match(oldTickerRegex)) {
  indexHtml = indexHtml.replace(oldTickerRegex, newTickerHtml);
  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully replaced old ticker with the new responsive custom ticker snippet.');
} else {
  console.log('Could not find old ticker.');
}
