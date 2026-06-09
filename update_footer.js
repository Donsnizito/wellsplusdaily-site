const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\Shadow\\Downloads\\wellsplusdaily-site';

const newFooter = `<footer class="w-full max-w-7xl mx-auto mb-8 pt-8 px-8 pb-4 bg-[#0A0A0A] text-white font-sans">
  <div class="relative">
    <div class="relative z-10 pt-0 pr-0 pb-0 pl-0">
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 border-white/10 border-b pb-12">
        
        <!-- Solutions (was Categories) -->
        <div class="lg:col-span-1">
          <h4 class="text-white font-medium mb-4 font-sans">Solutions</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li><a href="/brands.html" class="hover:text-[#DDF82A] transition font-sans">Brands</a></li>
            <li><a href="/lifestyle.html" class="hover:text-[#DDF82A] transition font-sans">Lifestyle &amp; Personal</a></li>
            <li><a href="/content.html" class="hover:text-[#DDF82A] transition font-sans">Content &amp; Media</a></li>
            <li><a href="/how-it-works.html" class="hover:text-[#DDF82A] transition font-sans">How it works</a></li>
            <li><a href="/guarantee.html" class="hover:text-[#DDF82A] transition font-sans">The Bounded Guarantee</a></li>
          </ul>
        </div>

        <!-- Company & Legal -->
        <div class="lg:col-span-1">
          <h4 class="text-white font-medium mb-4 font-sans">Company &amp; Legal</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li><a href="/about.html" class="hover:text-[#DDF82A] transition font-sans">About Us</a></li>
            <li><a href="/escalation.html" class="hover:text-[#DDF82A] transition font-sans">Escalation Map</a></li>
            <li><a href="/terms.html" class="hover:text-[#DDF82A] transition font-sans">Terms of Service</a></li>
            <li><a href="/privacy.html" class="hover:text-[#DDF82A] transition font-sans">Privacy Policy</a></li>
            <li><a href="/contact.html" class="hover:text-[#DDF82A] transition font-sans">Contact</a></li>
          </ul>
        </div>

        <!-- Logo & Form -->
        <div class="lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right mt-8 lg:mt-0">
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo_white.png" alt="Logo" class="w-10 h-10 sm:w-12 sm:h-12 object-contain invert" />
            <h3 class="text-3xl sm:text-4xl text-white font-semibold tracking-tighter" style="font-family: 'Red Hat Display', sans-serif;">wells+daily</h3>
          </div>
          
          <form class="flex flex-col items-start lg:items-end gap-3 w-full max-w-[24rem]">
            <div class="flex flex-col sm:flex-row items-center w-full gap-2 sm:gap-0 bg-white p-1 rounded-2xl sm:rounded-full border border-neutral-200 shadow-sm focus-within:ring-2 focus-within:ring-[#DDF82A]/50 focus-within:border-[#DDF82A]">
                <input type="email" placeholder="What's your work email?" required class="w-full bg-transparent border-none px-3 py-1.5 text-xs font-medium text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-0 rounded-full" />
                <button type="submit" class="w-full sm:w-auto inline-flex justify-center items-center px-4 py-1.5 text-xs font-medium text-black bg-[#DDF82A] rounded-full hover:bg-[#C5E01A] transition-colors flex-shrink-0">Get started for free</button>
            </div>
          </form>

          <!-- Socials -->
          <div class="flex items-center gap-4 mt-6 text-sm text-neutral-400 font-sans">
            <a href="#" class="hover:text-[#DDF82A] transition">X</a>
            <a href="#" class="hover:text-[#DDF82A] transition">Facebook</a>
            <a href="#" class="hover:text-[#DDF82A] transition">LinkedIn</a>
          </div>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 pt-6">
        <p class="text-neutral-500 text-sm font-sans mb-6">© 2026 Wells+Daily. All rights reserved.</p>
        <div class="text-neutral-500 text-sm font-sans space-y-4 max-w-5xl text-left">
          <p>Wells+Daily is a business brokerage and transaction facilitation platform that structures and coordinates commercial partnerships between brands and creators through a dual-contract execution framework, including workflow management, contract generation, compliance validation, and campaign coordination.</p>
          <p>Wells+Daily is not a law firm, accounting firm, investment adviser, securities broker-dealer, bank, lender, or payment processor. Nothing on this website constitutes legal, tax, financial, or investment advice.</p>
          <p>Payments and financial transactions, where applicable, are processed through third-party payment infrastructure providers and regulated financial institutions. Wells+Daily does not custody funds or operate as a money transmitter.</p>
          <p>All obligations, deliverables, payout terms, compliance requirements, and dispute resolution mechanisms are governed exclusively by the applicable written agreements between the relevant parties.</p>
          <p>Wells+Daily past results do not guarantee future performance.</p>
          <p>All trademarks and service marks are the property of their respective owners.</p>
        </div>
      </div>

    </div>
  </div>
</footer>`;

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.html')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace the existing footer block
    const updatedContent = content.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/, newFooter);
    
    if (content !== updatedContent) {
      fs.writeFileSync(fullPath, updatedContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
