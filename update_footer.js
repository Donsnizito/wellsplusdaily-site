const fs = require('fs');
const files = fs.readdirSync('./').filter(f => f.endsWith('.html'));

const newFooter = `<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <a href="/about.html">About</a>
      <a href="/roster.html">Customers</a>
      <a href="/escalation.html">Help</a>
    </div>
    <div class="footer-grid">
      <div class="f-col">
        <span class="f-col-title">What we run</span>
        <ul class="f-list">
          <li><a href="/how-it-works.html">How it works</a></li>
          <li><a href="/guarantee.html">The bounded guarantee</a></li>
          <li><a href="/escalation.html">The escalation map</a></li>
          <li><a href="/curation.html">Curation as underwriting</a></li>
        </ul>
      </div>
      <div class="f-col">
        <span class="f-col-title">Categories we underwrite</span>
        <ul class="f-list">
          <li><a href="/brands.html">Brands</a></li>
          <li><a href="/lifestyle.html">Lifestyle &amp; Personal</a></li>
          <li><a href="/content.html">Content &amp; Media</a></li>
        </ul>
      </div>
      <div class="f-col">
        <span class="f-col-title">For brands</span>
        <ul class="f-list">
          <li><a href="/start.html">How to start</a></li>
          <li><a href="/pricing.html">Pricing</a></li>
          <li><a href="/contact.html">Talk to operations</a></li>
        </ul>
      </div>
      <div class="f-col">
        <span class="f-col-title">For creators</span>
        <ul class="f-list">
          <li><a href="/roster.html">Roster eligibility</a></li>
          <li><a href="/payouts.html">Payout structure</a></li>
        </ul>
      </div>
      <div class="f-col">
        <span class="f-col-title">Company &amp; Legal</span>
        <ul class="f-list">
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/escalation.html">The five triggers</a></li>
          <li><a href="mailto:ops@wellsplusdaily.com">ops@wellsplusdaily.com</a></li>
          <li><a href="/terms.html">Terms of Service</a></li>
          <li><a href="/privacy.html">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="f-logo">Wells<span>+</span>Daily</div>
      <div class="f-legal">
        <span>&copy; 2026 WellsPlusDaily</span>
      </div>
    </div>
  </div>
</footer>`;

for(let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<footer>[\s\S]*?<\/footer>/, newFooter);
  fs.writeFileSync(file, content);
}
console.log('Footers updated successfully.');
