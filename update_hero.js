const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// The new hero HTML with canvas and original copy
const newHero = `<!-- HERO -->
<div class="relative flex flex-col overflow-hidden min-h-screen">
  <!-- The Canvas -->
  <canvas id="flow-canvas" class="absolute inset-0 z-0 w-full h-full"></canvas>

  <!-- We will pull the header up into this container dynamically below so it sits over the canvas -->
  <!-- Header Placeholder -->
  
  <div class="relative z-10 flex flex-col justify-center flex-grow p-8 md:p-16 lg:p-24 max-w-[1280px] mx-auto w-full pointer-events-none mt-12 md:mt-0">
      
      <!-- Top Section -->
      <div class="pointer-events-auto max-w-4xl">
          <span class="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-6 block">Creator Partnership Brokerage</span>
          <h1 class="text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-[-0.03em] font-medium text-neutral-900">
              The new standard<br>in <em class="not-italic text-neutral-500">influencer</em><br>brokerage.
          </h1>
          <p class="text-xl font-normal leading-[1.6] text-neutral-600 mt-6 max-w-[720px] tracking-[-0.01em]">
              WellsPlusDaily provides structured contract execution, secure deal management, and precision talent matching for premium brands and creators.
          </p>
      </div>

      <!-- Bottom Stats Section -->
      <div class="pointer-events-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-24 md:mt-32 pb-8">
          
          <div class="flex flex-col">
              <div class="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 w-fit">
                  $5K–$15K
              </div>
              <div class="text-xs md:text-sm font-semibold tracking-[0.1em] uppercase text-neutral-500 mt-3">
                  Average deal value
              </div>
          </div>

          <div class="flex flex-col md:pl-10">
              <div class="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 w-fit">
                  End-to-End
              </div>
              <div class="text-xs md:text-sm font-semibold tracking-[0.1em] uppercase text-neutral-500 mt-3">
                  Full lifecycle management
              </div>
          </div>

          <div class="flex flex-col">
              <div class="text-4xl md:text-5xl lg:text-[44px] font-medium tracking-tight text-neutral-900 w-fit pt-2 md:pt-4 lg:pt-5">
                  Brands & Creators
              </div>
              <div class="text-xs md:text-sm font-semibold tracking-[0.1em] uppercase text-neutral-500 mt-3">
                  Both sides, one firm
              </div>
          </div>

      </div>
  </div>

  <script>
      const canvas = document.getElementById('flow-canvas');
      const ctx = canvas.getContext('2d');
      let width, height;
      let time = 0;
      
      let mouseX = -1000;
      let mouseY = -1000;
      let targetMouseX = -1000;
      let targetMouseY = -1000;

      function resize() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      }

      window.addEventListener('resize', resize);
      
      window.addEventListener('mousemove', (e) => {
          targetMouseX = e.clientX;
          targetMouseY = e.clientY;
      });
      
      window.addEventListener('mouseleave', () => {
          targetMouseX = -1000;
          targetMouseY = -1000;
      });

      resize();

      function draw() {
          ctx.clearRect(0, 0, width, height);
          time += 0.003;

          mouseX += (targetMouseX - mouseX) * 0.08;
          mouseY += (targetMouseY - mouseY) * 0.08;

          // Lime green gradient for WellsPlusDaily (#DDF82A)
          const gradient = ctx.createLinearGradient(0, 0, width, 0);
          gradient.addColorStop(0, 'rgba(221, 248, 42, 0.4)');
          gradient.addColorStop(0.5, 'rgba(200, 225, 30, 0.4)');
          gradient.addColorStop(1, 'rgba(150, 180, 20, 0.4)');

          ctx.strokeStyle = gradient;
          ctx.globalCompositeOperation = 'multiply';

          const numLines = 85;
          const centerY = height * 0.65;

          for (let i = 0; i < numLines; i++) {
              ctx.beginPath();
              
              const z = Math.sin(i * 0.1 + time) * 0.5 + 0.5;
              ctx.lineWidth = 0.5 + z * 1.5;
              ctx.globalAlpha = 0.15 + z * 0.3;

              for (let x = 0; x <= width; x += 15) {
                  const nx = x / width;
                  
                  const wave1 = Math.sin(nx * 4 - time * 1.5 + i * 0.04) * 60 * nx;
                  const wave2 = Math.cos(nx * 2.5 + time * 0.8 - i * 0.06) * 120 * (1 - nx);
                  
                  const pinch = Math.pow(nx - 0.35, 2) * 3; 
                  const spread = 180 * pinch + 10;

                  const yOffset = wave1 + wave2;
                  let y = centerY + yOffset + (i - numLines / 2) * spread * 0.025;

                  const dx = x - mouseX;
                  const dy = y - mouseY;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  const interactionRadius = 250;
                  
                  if (distance < interactionRadius) {
                      const force = Math.pow((interactionRadius - distance) / interactionRadius, 2);
                      y += (dy / distance) * force * 60;
                  }

                  if (x === 0) {
                      ctx.moveTo(x, y);
                  } else {
                      ctx.lineTo(x, y);
                  }
              }
              ctx.stroke();
          }

          requestAnimationFrame(draw);
      }

      draw();
  </script>
</div>`;

// We need to extract the header and wrap it inside the new Hero container so the canvas sits behind the header.
// 1. Extract the header:
const headerRegex = /<div class="w-full flex justify-center"><header class="relative z-10 max-w-5xl w-full pt-4">[\s\S]*?<\/header><\/div>/;
const headerMatch = indexHtml.match(headerRegex);

if (headerMatch) {
  const headerHtml = headerMatch[0];
  
  // Remove header from its current position
  indexHtml = indexHtml.replace(headerRegex, '');

  // Inject header into the new hero
  const finalHero = newHero.replace('<!-- Header Placeholder -->', headerHtml);

  // Replace the old hero with the new hero
  const oldHeroRegex = /<!-- HERO -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  indexHtml = indexHtml.replace(oldHeroRegex, finalHero);

  fs.writeFileSync('index.html', indexHtml);
  console.log('Successfully updated index.html with the new animated canvas hero!');
} else {
  console.log('Failed to find header');
}
