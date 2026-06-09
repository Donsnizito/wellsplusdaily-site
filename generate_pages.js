const fs = require('fs');

const footer = `<footer>
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

const css = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --w:#FDFCFA;
  --ink:#141210;
  --ink2:#3A3835;
  --ink3:#787571;
  --ink4:#B4B1AC;
  --ink-faint:rgba(20,18,16,0.3);
  --ink-light:rgba(20,18,16,0.5);
  --rule:#E4E0DA;
  --cream:#F5F3EE;
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'DM Sans',system-ui,sans-serif;
}
html{scroll-behavior:smooth}
body{
  font-family:var(--sans);background:var(--w);color:var(--ink);
  -webkit-font-smoothing:antialiased;overflow-x:hidden;
}

nav{
  position:fixed;top:0;left:0;right:0;z-index:200;
  padding:0 56px;height:68px;
  display:flex;align-items:center;justify-content:space-between;
  background:rgba(253,252,250,0.88);
  backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);
  border-bottom:1px solid transparent;transition:border-color 0.3s;
}
nav.scrolled{border-bottom-color:var(--rule)}
.logo{
  font-family:var(--serif);font-size:20px;font-weight:400;
  letter-spacing:0.02em;color:var(--ink);text-decoration:none;
}
.logo-plus{font-weight:300;font-style:italic;margin:0 1px}
.nav-right{display:flex;align-items:center;gap:40px}
.nav-link{
  font-size:12px;font-weight:400;letter-spacing:0.12em;
  text-transform:uppercase;color:var(--ink3);text-decoration:none;
  transition:color 0.2s;
}
.nav-link:hover{color:var(--ink)}
.nav-cta{
  font-size:12px;font-weight:400;letter-spacing:0.12em;
  text-transform:uppercase;color:var(--ink);text-decoration:none;
  border:1px solid var(--ink);padding:10px 24px;
  transition:background 0.2s,color 0.2s;
}
.nav-cta:hover{background:var(--ink);color:var(--w)}

.hero{padding:160px 56px 80px}
.hero-center{max-width:800px;margin:0 auto;text-align:center}
.eyebrow{
  font-size:11px;font-weight:400;letter-spacing:0.22em;
  text-transform:uppercase;color:var(--ink4);
  display:block;margin-bottom:32px;
}
.hero-h1{
  font-family:var(--serif);font-size:clamp(56px,7vw,96px);
  font-weight:300;line-height:1.05;letter-spacing:-0.02em;
  color:var(--ink);margin-bottom:32px;
}
.hero-h1 em{font-style:italic;font-weight:300}
.hero-sub{
  font-size:17px;font-weight:300;line-height:1.8;
  color:var(--ink2);margin:0 auto 48px;max-width:640px;
}
.hero-actions{
  display:flex;align-items:center;justify-content:center;gap:24px;
}
.btn-dark{
  display:inline-block;font-size:12px;font-weight:400;
  letter-spacing:0.12em;text-transform:uppercase;
  color:var(--w);background:var(--ink);
  padding:16px 36px;text-decoration:none;transition:opacity 0.2s;
}
.btn-dark:hover{opacity:0.75}

.section{max-width:1280px;margin:0 auto;padding:128px 56px}
.s-label{
  font-size:11px;font-weight:400;letter-spacing:0.2em;
  text-transform:uppercase;color:var(--ink4);
  display:block;margin-bottom:72px;
}

.about-grid{
  display:grid;grid-template-columns:5fr 4fr;
  gap:120px;align-items:start;
}
.about-h2{
  font-family:var(--serif);
  font-size:clamp(32px,3.5vw,50px);
  font-weight:300;line-height:1.12;
  color:var(--ink);margin-bottom:20px;
}
.about-h2 em{font-style:italic}
.about-sub{
  font-size:17px;font-weight:300;line-height:1.8;
  color:var(--ink2);margin-bottom:40px;
}
.about-body p{
  font-size:15px;font-weight:300;line-height:1.9;
  color:var(--ink2);margin-bottom:20px;
}
.services{padding-top:4px}
.srv{
  display:flex;justify-content:space-between;
  align-items:baseline;
  padding:22px 0;
  border-bottom:1px solid var(--rule);
}
.srv:first-child{border-top:1px solid var(--rule)}
.srv-name{
  font-family:var(--serif);font-size:21px;
  font-weight:400;color:var(--ink);
}
.srv-tag{
  font-size:11px;font-weight:300;letter-spacing:0.08em;
  color:var(--ink4);text-align:right;max-width:180px;
}

.full-rule{height:1px;background:var(--rule);width:100%}

footer{border-top:1px solid var(--rule);padding:80px 56px 40px;background:var(--w)}
.footer-inner{max-width:1280px;margin:0 auto}
.footer-top{
  display:flex;gap:24px;margin-bottom:64px;
  font-size:12px;font-weight:400;color:var(--ink);
}
.footer-top a{color:var(--ink);text-decoration:none;transition:opacity 0.2s}
.footer-top a:hover{opacity:0.6}
.footer-grid{
  display:grid;grid-template-columns:repeat(5,1fr);
  gap:40px;margin-bottom:80px;
}
.f-col-title{
  font-family:var(--serif);font-size:16px;font-weight:400;
  color:var(--ink);margin-bottom:24px;display:block;
}
.f-list{list-style:none}
.f-list li{margin-bottom:16px}
.f-list a, .f-list span{
  font-size:13px;font-weight:300;color:var(--ink2);
  text-decoration:none;transition:color 0.2s;
}
.f-list a:hover{color:var(--ink)}
.footer-bottom{
  display:flex;justify-content:space-between;align-items:center;
  padding-top:32px;border-top:1px solid var(--rule);
}
.f-logo{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--ink)}
.f-logo span{font-weight:300;font-style:italic}
.f-legal{display:flex;gap:24px;font-size:12px;font-weight:300;color:var(--ink4)}
.f-legal a{color:var(--ink4);text-decoration:none;transition:color 0.2s}
.f-legal a:hover{color:var(--ink3)}

@media(max-width:960px){
  nav{padding:0 24px}
  .nav-right .nav-link:not(.nav-cta){display:none}
  .hero{padding:120px 24px 64px}
  .hero-h1{font-size:clamp(44px,10vw,80px)}
  .section{padding:96px 24px}
  .about-grid{grid-template-columns:1fr;gap:56px}
  .footer-grid{grid-template-columns:1fr 1fr;gap:40px}
  .footer-top{flex-wrap:wrap}
  .footer-bottom{flex-direction:column;gap:16px;align-items:flex-start}
}
@media(max-width:600px){
  .footer-grid{grid-template-columns:1fr}
}`;

const nav = `<nav id="nav">
  <a href="/" class="logo">Wells<span class="logo-plus">+</span>Daily</a>
  <div class="nav-right">
    <a href="/about.html" class="nav-link">About</a>
    <a href="/how-it-works.html" class="nav-link">Process</a>
    <a href="/contact.html" class="nav-cta">Request Access</a>
  </div>
</nav>`;

const script = `<script>
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if(navEl) navEl.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
</script>`;

function buildPage(title, heroH1, heroSub, sections) {
  let sectionsHtml = '';
  for(let sec of sections) {
    sectionsHtml += `
<div class="full-rule"></div>
<div class="section">
  <div class="about-grid">
    <div class="about-body">
      <h2 class="about-h2">${sec.h2}</h2>
      <p class="about-sub">${sec.sub}</p>
      ${sec.body.map(p => '<p>'+p+'</p>').join('')}
    </div>
    <div class="services">
      ${sec.services.map(s => '      <div class="srv">        <span class="srv-name">'+s.name+'</span>        <span class="srv-tag">'+s.tag+'</span>      </div>').join('')}
    </div>
  </div>
</div>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WellsPlusDaily — ${title}</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400&display=swap" rel="stylesheet">
<style>
${css}
</style>
</head>
<body>

${nav}

<!-- HERO -->
<div style="max-width:1280px;margin:0 auto;">
  <div class="hero">
    <div class="hero-center">
      <h1 class="hero-h1">${heroH1}</h1>
      <p class="hero-sub">${heroSub}</p>
      <div class="hero-actions">
        <a href="/contact.html" class="btn-dark">Request brand portal access</a>
      </div>
    </div>
  </div>
</div>

${sectionsHtml}

${footer}

${script}

</body>
</html>`;
}

const pages = {
  'guarantee.html': buildPage(
    'The Bounded Guarantee',
    'Financial protection for <em>creator execution.</em>',
    'We capture more value by eliminating the downside. Every contract routed through Wells+ Daily is backed by our bounded escrow guarantee.',
    [
      {
        h2: 'Escrow & <em>Dispute Mitigation</em>',
        sub: 'Protect your budget before a single deliverable is submitted.',
        body: ['<strong>Zero Speculative Risk:</strong> Escrow ensures that funds are only released upon objective completion of contract terms.', '<strong>Dispute Resolution:</strong> Our compliance team intervenes on any misalignment, eliminating legal overhead for your internal teams.'],
        services: [
          {name: 'Milestone Releases', tag: 'Triggered by deliverables'},
          {name: 'Compliance Audits', tag: '100% objective review'},
          {name: 'Fund Recovery', tag: 'Immediate capital return'}
        ]
      },
      {
        h2: 'Corporate <em>Liability Shift</em>',
        sub: 'We absorb the operational friction.',
        body: ['<strong>Indemnification:</strong> By utilizing our curated roster, brands shift the liability of non-performance directly to our escrow facility.', '<strong>Unified Invoicing:</strong> Eliminate one-off vendor setups. One centralized platform handles all 1099s, tax documents, and creator payouts.'],
        services: [
          {name: 'Single Vendor Setup', tag: 'Wells+ Daily as AOR'},
          {name: 'Tax Automation', tag: 'W9s and 1099s handled'},
          {name: 'Global Payouts', tag: 'Over 40 currencies supported'}
        ]
      }
    ]
  ),
  'escalation.html': buildPage(
    'The Escalation Map',
    'Intelligent routing for <em>campaign discrepancies.</em>',
    'When a contract breaches its boundaries, our escalation map triggers immediate intervention to preserve campaign integrity and capital.',
    [
      {
        h2: 'The Five <em>Triggers</em>',
        sub: 'Pre-defined conditions that halt execution and initiate review.',
        body: ['<strong>Missing Deliverables:</strong> Automatic pause if a milestone deadline passes without verifiable submission.', '<strong>Quality Breach:</strong> Content that structurally deviates from the approved creative brief.', '<strong>Policy Violations:</strong> FTC non-compliance or brand safety breaches.'],
        services: [
          {name: 'Auto-Pause', tag: 'Stops downstream execution'},
          {name: 'Compliance Flag', tag: 'Notifies all stakeholders'},
          {name: 'Resolution SLA', tag: '24-hour response target'}
        ]
      },
      {
        h2: 'Support & <em>Operations</em>',
        sub: 'Dedicated managed services for enterprise clients.',
        body: ['<strong>Professional Services:</strong> Custom implementation, brief structuring, and hands-on mediation.', '<strong>Live Dashboards:</strong> Track escalation status in real-time. Transparent audit logs ensure you see every step of the resolution.'],
        services: [
          {name: 'Dedicated Managers', tag: 'Enterprise tier only'},
          {name: 'Audit Logs', tag: 'Immutable transaction history'},
          {name: '24/7 Operations', tag: 'For active escalations'}
        ]
      }
    ]
  ),
  'curation.html': buildPage(
    'Curation as Underwriting',
    'Data-driven <em>creator verification.</em>',
    'We don’t just build lists; we underwrite performance. Our curation process is a strict intake funnel designed to verify historical execution.',
    [
      {
        h2: 'Verification <em>Protocols</em>',
        sub: 'Access to the roster requires passing our multi-layered screening.',
        body: ['<strong>Identity & Fraud:</strong> We leverage global identity verification to prevent fake accounts and bot-driven engagement.', '<strong>Historical Reliability:</strong> We analyze past campaign execution rates, deadline adherence, and revision frequency.'],
        services: [
          {name: 'Identity Checks', tag: 'KYC protocols applied'},
          {name: 'Performance Metrics', tag: 'Analyzed at intake'},
          {name: 'Fraud Prevention', tag: 'Continuous monitoring'}
        ]
      },
      {
        h2: 'Roster <em>Maintenance</em>',
        sub: 'Ongoing quality assurance post-intake.',
        body: ['<strong>Dynamic Scoring:</strong> Creators are continually evaluated based on their performance in active Wells+ Daily contracts.', '<strong>Automated Removal:</strong> Repeated breaches of the bounded guarantee result in permanent removal from the platform.'],
        services: [
          {name: 'Continuous Scoring', tag: 'Updated post-campaign'},
          {name: 'Quality Enforcement', tag: 'Zero-tolerance policies'},
          {name: 'Exclusive Access', tag: 'Invite-only tiers'}
        ]
      }
    ]
  ),
  'tech-software.html': buildPage(
    'Tech & Software',
    'Execution for <em>SaaS & Tech brands.</em>',
    'Structure creator campaigns that drive product adoption, manage recurring sponsorships, and align with your customer acquisition metrics.',
    [
      {
        h2: 'Product <em>Adoption</em>',
        sub: 'Move beyond impressions into measurable conversion.',
        body: ['<strong>Complex Briefs:</strong> Tech integrations require specific messaging. Our contracts enforce technical accuracy in every deliverable.', '<strong>API Access:</strong> Integrate creator data directly into your CRM or analytics stack for closed-loop reporting.'],
        services: [
          {name: 'Technical Briefs', tag: 'Enforced accuracy'},
          {name: 'Data Sync', tag: 'CRM integrations'},
          {name: 'Conversion Tracking', tag: 'Supported natively'}
        ]
      }
    ]
  ),
  'lifestyle.html': buildPage(
    'Lifestyle & Personal',
    'Brand safety for <em>consumer goods.</em>',
    'Accelerate e-commerce growth with creators who align with your brand guidelines, while enforcing strict FTC compliance.',
    [
      {
        h2: 'Physical Goods <em>Integration</em>',
        sub: 'Manage seeding and product-led campaigns securely.',
        body: ['<strong>Seeding Contracts:</strong> Escrow agreements that trigger upon confirmed receipt and review of physical goods.', '<strong>Brand Guidelines:</strong> Strict enforcement of visual identity and tonal requirements before content goes live.'],
        services: [
          {name: 'Seeding Logistics', tag: 'Tracked within contracts'},
          {name: 'Visual Enforcement', tag: 'Pre-approval workflows'},
          {name: 'FTC Compliance', tag: 'Mandatory disclosures'}
        ]
      }
    ]
  ),
  'content.html': buildPage(
    'Content & Media',
    'Scale execution for <em>platforms.</em>',
    'For media networks, agencies, and platforms that need to manage hundreds of creators simultaneously without expanding headcount.',
    [
      {
        h2: 'Platform <em>Capabilities</em>',
        sub: 'Embedded financial and contract services.',
        body: ['<strong>Multi-Entity Support:</strong> Manage different campaigns, brands, or sub-agencies from a single unified dashboard.', '<strong>Batch Operations:</strong> Issue hundreds of contracts and process mass payouts with a single click.'],
        services: [
          {name: 'Batch Payouts', tag: 'Efficiency at scale'},
          {name: 'Multi-Tenant', tag: 'Agency-ready architecture'},
          {name: 'Custom Reporting', tag: 'Granular data exports'}
        ]
      }
    ]
  ),
  'start.html': buildPage(
    'How to Start',
    'Implement a prebuilt <em>execution engine.</em>',
    'Start securely managing creator contracts in minutes. No complex integrations required.',
    [
      {
        h2: 'Quickstart <em>Implementation</em>',
        sub: 'From account creation to your first active contract in 48 hours.',
        body: ['<strong>1. Setup:</strong> Connect your banking details, upload your brand guidelines, and configure approval workflows.', '<strong>2. Curate:</strong> Browse the verified roster or invite your existing creators to onboard through our KYC process.', '<strong>3. Execute:</strong> Issue your first contract and fund the escrow. We handle the rest.'],
        services: [
          {name: 'Fast Onboarding', tag: 'Within 48 hours'},
          {name: 'Migration Support', tag: 'Import existing rosters'},
          {name: 'Workflow Design', tag: 'Customized approvals'}
        ]
      }
    ]
  ),
  'pricing.html': buildPage(
    'Pricing',
    'Transparent fees. <em>Zero surprises.</em>',
    'A unified payments and execution solution. You only pay for successful campaigns.',
    [
      {
        h2: 'Platform <em>Fees</em>',
        sub: 'Aligned with your success.',
        body: ['<strong>Take Rate:</strong> We charge a standard processing and management fee on completed contracts. No hidden monthly SaaS fees for basic access.', '<strong>Enterprise:</strong> Custom pricing available for high-volume agencies requiring dedicated support and API access.'],
        services: [
          {name: 'Standard Tier', tag: 'Pay-as-you-go'},
          {name: 'Enterprise Tier', tag: 'Volume discounts'},
          {name: 'Zero Domestic ACH Fees', tag: 'Included standard'}
        ]
      }
    ]
  ),
  'roster.html': buildPage(
    'Roster Eligibility',
    'The standard for <em>professional creators.</em>',
    'Wells+ Daily is an invite-only environment built to protect the integrity of premium brand partnerships.',
    [
      {
        h2: 'Creator <em>Requirements</em>',
        sub: 'What it takes to be listed.',
        body: ['<strong>Performance History:</strong> We require a proven track record of successful brand integrations and audience authenticity.', '<strong>Professionalism:</strong> Adherence to deadlines, clear communication, and willingness to operate within bounded contracts.'],
        services: [
          {name: 'Application Review', tag: 'Manual auditing'},
          {name: 'Identity Verification', tag: 'Stripe Identity integration'},
          {name: 'Performance Benchmarks', tag: 'Ongoing assessment'}
        ]
      }
    ]
  ),
  'payouts.html': buildPage(
    'Payout Structure',
    'Reliable routing of <em>funds.</em>',
    'Get paid faster, with complete transparency. We manage the complexity of global creator payouts.',
    [
      {
        h2: 'Payment <em>Mechanics</em>',
        sub: 'From escrow to your bank account.',
        body: ['<strong>Triggered Release:</strong> Funds are automatically released from escrow the moment deliverables are approved by the brand.', '<strong>Global Coverage:</strong> We support payouts to creators in over 40 countries, handling currency conversion and tax compliance automatically.'],
        services: [
          {name: 'Fast Settlement', tag: '1-2 business days'},
          {name: 'Global Routing', tag: 'Cross-border capabilities'},
          {name: 'Tax Compliance', tag: 'Automated document collection'}
        ]
      }
    ]
  ),
  'about.html': buildPage(
    'About Us',
    'Building the economic infrastructure for <em>the creator economy.</em>',
    'Wells+ Daily was founded to eliminate the friction, risk, and inefficiency in brand-creator partnerships.',
    [
      {
        h2: 'Our <em>Mission</em>',
        sub: 'Trust through structure.',
        body: ['We believe that the creator economy is constrained by trust. Brands hesitate to scale due to execution risk, and creators suffer from delayed payments and unclear expectations.', 'By introducing financial engineering and strict compliance protocols, we are creating a more professional, reliable ecosystem for all participants.'],
        services: [
          {name: 'Headquarters', tag: 'New York, NY'},
          {name: 'Backed By', tag: 'Leading FinTech investors'},
          {name: 'Careers', tag: 'We are hiring'}
        ]
      }
    ]
  ),
  'terms.html': buildPage('Terms of Service', 'Terms of <em>Service</em>', 'Effective Date: June 2026', [{h2:'Legal', sub:'Platform agreements.', body:['Please review our terms of service carefully before utilizing the Wells+ Daily platform.'], services:[]}]),
  'privacy.html': buildPage('Privacy Policy', 'Privacy <em>Policy</em>', 'Effective Date: June 2026', [{h2:'Data Protection', sub:'How we handle your information.', body:['We take data security seriously. Review how we process, store, and protect your information.'], services:[]}])
};

for(let filename in pages) {
  fs.writeFileSync(filename, pages[filename]);
}
console.log('All 13 pages generated successfully.');
