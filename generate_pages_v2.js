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
          <li><a href="/tech-software.html">Tech &amp; Software</a></li>
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
  --w:#FDFCFA;--ink:#141210;--ink2:#3A3835;--ink3:#787571;--ink4:#B4B1AC;
  --rule:#E4E0DA;--cream:#F5F3EE;
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
  padding:0 56px;height:68px;display:flex;align-items:center;justify-content:space-between;
  background:rgba(253,252,250,0.88);backdrop-filter:blur(16px);
  border-bottom:1px solid transparent;transition:border-color 0.3s;
}
nav.scrolled{border-bottom-color:var(--rule)}
.logo{font-family:var(--serif);font-size:20px;color:var(--ink);text-decoration:none;}
.logo-plus{font-weight:300;font-style:italic;margin:0 1px}
.nav-right{display:flex;align-items:center;gap:40px}
.nav-link{font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink3);text-decoration:none;}
.nav-link:hover{color:var(--ink)}
.nav-cta{
  font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:var(--ink);
  border:1px solid var(--ink);padding:10px 24px;text-decoration:none;
}
.nav-cta:hover{background:var(--ink);color:var(--w)}

.hero{padding:180px 56px 100px; max-width:1000px; margin:0 auto; text-align:center;}
.hero-h1{font-family:var(--serif);font-size:clamp(48px,6vw,80px);font-weight:300;line-height:1.05;letter-spacing:-0.02em;margin-bottom:24px;}
.hero-h1 em{font-style:italic;}
.hero-sub{font-size:19px;font-weight:300;line-height:1.6;color:var(--ink2);margin:0 auto 48px;max-width:720px;}
.btn-dark{display:inline-block;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:var(--w);background:var(--ink);padding:16px 36px;text-decoration:none;}
.stats-bar{display:flex;justify-content:center;gap:64px;margin-top:80px;border-top:1px solid var(--rule);padding-top:48px;}
.stat-item{text-align:left;}
.stat-num{font-family:var(--serif);font-size:36px;color:var(--ink);display:block;}
.stat-label{font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:var(--ink3);margin-top:8px;display:block;}

.section{max-width:1280px;margin:0 auto;padding:96px 56px;border-top:1px solid var(--rule);}
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-top:64px;}
.sec-h2{font-family:var(--serif);font-size:40px;font-weight:300;line-height:1.1;margin-bottom:24px;}
.sec-sub{font-size:17px;font-weight:300;line-height:1.7;color:var(--ink2);margin-bottom:32px;}
.feature-card{background:var(--cream);padding:40px;border-radius:2px;}
.feature-title{font-family:var(--serif);font-size:24px;margin-bottom:16px;}
.feature-text{font-size:15px;line-height:1.7;color:var(--ink2);}

.list-item{padding:24px 0;border-bottom:1px solid var(--rule);display:flex;justify-content:space-between;}
.list-item:first-of-type{border-top:1px solid var(--rule);}
.list-title{font-family:var(--serif);font-size:20px;}
.list-tag{font-size:12px;color:var(--ink3);text-transform:uppercase;letter-spacing:0.1em;}

footer{border-top:1px solid var(--rule);padding:80px 56px 40px;background:var(--w)}
.footer-inner{max-width:1280px;margin:0 auto}
.footer-top{display:flex;gap:24px;margin-bottom:64px;}
.footer-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:40px;margin-bottom:80px;}
.f-col-title{font-family:var(--serif);font-size:16px;margin-bottom:24px;display:block;}
.f-list{list-style:none}
.f-list li{margin-bottom:16px}
.f-list a{font-size:13px;color:var(--ink2);text-decoration:none;}
.footer-bottom{display:flex;justify-content:space-between;padding-top:32px;border-top:1px solid var(--rule);}
.f-logo{font-family:var(--serif);font-size:16px;}
.f-legal{display:flex;gap:24px;font-size:12px;color:var(--ink4)}

@media(max-width:960px){
  nav{padding:0 24px}
  .hero{padding:140px 24px 80px}
  .grid-2, .grid-3{grid-template-columns:1fr;gap:40px;}
  .stats-bar{flex-direction:column;gap:32px;align-items:center;text-align:center;}
  .stat-item{text-align:center;}
  .footer-grid{grid-template-columns:1fr 1fr;}
}
@media(max-width:600px){
  .footer-grid{grid-template-columns:1fr}
}
`;

const nav = `<nav id="nav">
  <a href="/" class="logo">Wells<span class="logo-plus">+</span>Daily</a>
  <div class="nav-right">
    <a href="/about.html" class="nav-link">About</a>
    <a href="/how-it-works.html" class="nav-link">Process</a>
    <a href="/contact.html" class="nav-cta">Request Access</a>
  </div>
</nav>`;

function buildHtml(page) {
  let sectionsHtml = page.sections.map(sec => {
    if (sec.type === 'grid-3') {
      return `
<div class="section">
  <h2 class="sec-h2">${sec.title}</h2>
  <p class="sec-sub">${sec.sub}</p>
  <div class="grid-3">
    ${sec.items.map(i => `
    <div class="feature-card">
      <h3 class="feature-title">${i.title}</h3>
      <p class="feature-text">${i.text}</p>
    </div>`).join('')}
  </div>
</div>`;
    } else if (sec.type === 'grid-2-list') {
      return `
<div class="section">
  <div class="grid-2">
    <div>
      <h2 class="sec-h2">${sec.title}</h2>
      <p class="sec-sub">${sec.sub}</p>
    </div>
    <div>
      ${sec.items.map(i => `
      <div class="list-item">
        <span class="list-title">${i.title}</span>
        <span class="list-tag">${i.tag}</span>
      </div>`).join('')}
    </div>
  </div>
</div>`;
    }
    return '';
  }).join('');

  let statsHtml = page.stats ? `
  <div class="stats-bar">
    ${page.stats.map(s => `
    <div class="stat-item">
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('')}
  </div>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WellsPlusDaily — ${page.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
${nav}

<div class="hero">
  <h1 class="hero-h1">${page.hero.h1}</h1>
  <p class="hero-sub">${page.hero.sub}</p>
  <a href="/contact.html" class="btn-dark">${page.hero.cta}</a>
  ${statsHtml}
</div>

${sectionsHtml}

${footer}

<script>
window.addEventListener('scroll', () => {
  const n = document.getElementById('nav');
  if(n) n.classList.toggle('scrolled', window.scrollY > 20);
});
</script>
</body>
</html>`;
}

const pagesData = [
  {
    filename: 'how-it-works.html',
    title: 'The Trust Stack',
    hero: {
      h1: 'Execution is scarce. <em>We enforce it.</em>',
      sub: 'The dual-contract enforcement system built for premium brands. We monetize the function of being a credible enforcement layer at a price point where neither side can credibly enforce on the other.',
      cta: 'Explore the Trust Stack'
    },
    stats: [
      {num: '$5-15K', label: 'Deal Boundaries'},
      {num: '15%', label: 'Flat Fee'},
      {num: '90-Day', label: 'Execution Window'}
    ],
    sections: [
      {
        type: 'grid-3',
        title: 'One trust stack for your entire creator spend.',
        sub: 'Infinite reach is meaningless without reliability. We replace speculation with actuarial evidence and bounded guarantees.',
        items: [
          {title: 'Curation as Underwriting', text: 'External proof does dual work. We only present creators whose delivery history makes our bounded guarantee economically survivable.'},
          {title: 'Institutional Visibility', text: 'AI support always-on for routine queries, backed by a defined human escalation window (Mon–Fri 7:30am–8pm EDT).'},
          {title: 'Bounded Guarantee', text: 'Credit-and-replacement remediation, scoped to spec compliance and timeline, within a strict 90-day window.'}
        ]
      },
      {
        type: 'grid-2-list',
        title: 'Process Ownership Visibility.',
        sub: 'The continuous visible artifact of the enforcement function operating.',
        items: [
          {title: 'Creator Selected', tag: 'Curated Match'},
          {title: 'Contract Executed', tag: 'Dual-Bound'},
          {title: 'Compliance Monitored', tag: 'Active Spec'},
          {title: 'Escalation Available', tag: 'SLA Protected'}
        ]
      }
    ]
  },
  {
    filename: 'guarantee.html',
    title: 'Bounded Guarantee',
    hero: {
      h1: 'A bounded guarantee <em>engineered for reliability.</em>',
      sub: 'Capture premium creator execution, mitigate compliance failure, and scale campaigns under a strict operational guarantee. We convert execution risk into bounded, priceable operational risk.',
      cta: 'View Remediation Terms'
    },
    stats: [
      {num: '100%', label: 'Credit & Replacement'},
      {num: '90 Days', label: 'Protection Window'},
      {num: 'Zero', label: 'Speculative Risk'}
    ],
    sections: [
      {
        type: 'grid-3',
        title: 'Spec and Timeline Compliance.',
        sub: 'Objectively verifiable conditions defined at match-lock and written into both the brand-side and creator-side contracts.',
        items: [
          {title: 'Deliverable Integrity', text: 'Enforced deliverable length, format constraints, and required platform parameters.'},
          {title: 'Message Adherence', text: 'Strict inclusion of 3–5 specific claims or features the brand mandates in the brief.'},
          {title: 'Timeline Security', text: 'Delivery by agreed date, and the content remains posted for the full 90-day window.'}
        ]
      },
      {
        type: 'grid-2-list',
        title: 'Explicit Boundaries.',
        sub: 'What we guarantee, and what we explicitly exclude.',
        items: [
          {title: 'Credit-and-Replacement', tag: 'Guaranteed'},
          {title: 'Spec Compliance', tag: 'Guaranteed'},
          {title: 'Algorithmic Performance', tag: 'Excluded'},
          {title: 'Downstream Conversion', tag: 'Excluded'}
        ]
      }
    ]
  },
  {
    filename: 'escalation.html',
    title: 'Institutional Visibility',
    hero: {
      h1: 'Institutional Visibility. <em>Defined Response.</em>',
      sub: 'Setting brands free to build healthier campaigns. We substitute founder visibility for institutional posture: AI support always-on, backed by a defined human escalation SLA.',
      cta: 'View Escalation Map'
    },
    stats: [
      {num: '62.5 Hrs', label: 'Weekly Coverage'},
      {num: '24/7', label: 'AI Navigation'},
      {num: '5', label: 'Defined Triggers'}
    ],
    sections: [
      {
        type: 'grid-3',
        title: 'The Five Escalation Triggers.',
        sub: 'Hard handoff to a human operator the moment anything touches contract interpretation, money, dispute, or remediation.',
        items: [
          {title: 'Creator Failure', text: 'Triggered when delivery is missed, quality falls below spec, or the creator becomes non-responsive.'},
          {title: 'Campaign Delay', text: 'Triggered when the agreed-upon execution timeline is at risk of breach.'},
          {title: 'Remediation', text: 'Triggered instantly when refund or credit-and-replacement remediation is requested.'}
        ]
      }
    ]
  },
  {
    filename: 'curation.html',
    title: 'Curation as Underwriting',
    hero: {
      h1: 'Curation as <em>Underwriting.</em>',
      sub: 'We don’t just build lists. We underwrite performance. Our curation process acts as actuarial evidence for our bounded guarantee.',
      cta: 'View Roster Criteria'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'External proof that does dual work.',
        sub: 'Roster growth is subordinate to roster quality. The guarantee model assumes a failure rate below 15%, held entirely by our curation bar.',
        items: [
          {title: 'Placement History', text: 'A deep audit of past deals, breaches, and completions. We require a proven track record of brand integrations.'},
          {title: 'Delivery Reliability', text: 'Actuarial evidence of meeting deadlines, adhering to specs, and minimizing revision cycles.'},
          {title: 'Audience Integrity', text: 'Verification of demographics and engagement to prevent bot-driven execution.'}
        ]
      }
    ]
  },
  {
    filename: 'tech-software.html',
    title: 'For Software & Tech',
    hero: {
      h1: 'Enforced execution for <em>Software & Tech.</em>',
      sub: 'The dual-contract system built specifically to govern complex $5–15K SaaS deals. Eliminate the friction of sourcing and managing technical creators.',
      cta: 'Start a SaaS Campaign'
    },
    sections: [
      {
        type: 'grid-2-list',
        title: 'SaaS-Specific Compliance.',
        sub: 'Technical briefs require exact execution. We enforce it.',
        items: [
          {title: 'Talking Point Adherence', tag: 'Monitored'},
          {title: 'Feature Demonstrations', tag: 'Monitored'},
          {title: 'Pre-Post Approval', tag: 'Enforced'}
        ]
      }
    ]
  },
  {
    filename: 'lifestyle.html',
    title: 'For Lifestyle Brands',
    hero: {
      h1: 'Enforced execution for <em>Lifestyle Brands.</em>',
      sub: 'The dual-contract system built for physical goods integration and consumer products.',
      cta: 'Start a Lifestyle Campaign'
    },
    sections: [
      {
        type: 'grid-2-list',
        title: 'Consumer Brand Compliance.',
        sub: 'Brand safety and FTC compliance, fully managed.',
        items: [
          {title: 'FTC Disclosures', tag: 'Monitored'},
          {title: 'Visual Identity', tag: 'Monitored'},
          {title: '90-Day Retention', tag: 'Enforced'}
        ]
      }
    ]
  },
  {
    filename: 'content.html',
    title: 'For Content & Media',
    hero: {
      h1: 'Enforced execution for <em>Content Networks.</em>',
      sub: 'For media companies and agencies that need to execute reliable sponsorships without expanding internal operations headcount.',
      cta: 'Explore Agency Tools'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'Scalable Reliability.',
        sub: 'We absorb the operational friction of dual-party enforcement.',
        items: [
          {title: 'Unified Deal Framework', text: 'Streamline all your creator contracts into a single, predictable structure.'},
          {title: 'Guaranteed Replacement', text: 'If a creator drops out, we replace them at no cost to your agency.'},
          {title: 'Tax & Payouts', text: 'We handle the 80/20 split and all 1099 disbursements.'}
        ]
      }
    ]
  },
  {
    filename: 'start.html',
    title: 'How to Start',
    hero: {
      h1: 'The <em>Deal-Framework-First</em> Portal.',
      sub: 'Creator selection is a downstream step inside an already-bounded deal framework. You define the spec, we guarantee the execution.',
      cta: 'View The Portal'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'What you see before you select.',
        sub: 'We invert marketplace defaults. We answer "what happens to my money" before showing inventory.',
        items: [
          {title: 'What You Get', text: 'The precise deliverables, structured from the compliance spec.'},
          {title: 'What Is Guaranteed', text: 'The timeline, the conditions, and the credit-and-replacement policy.'},
          {title: 'Escalation Path', text: 'Immediate visibility into your defined human response SLA.'}
        ]
      }
    ]
  },
  {
    filename: 'pricing.html',
    title: 'Pricing',
    hero: {
      h1: 'Transparent pricing for <em>bounded execution.</em>',
      sub: '15% flat fee on the gross deal value. Zero hidden costs. You pay for the enforcement function.',
      cta: 'Calculate Your Campaign'
    },
    stats: [
      {num: '15%', label: 'Brokerage Fee'},
      {num: '$5-15K', label: 'Sweet Spot'},
      {num: '80/20', label: 'Creator Split'}
    ],
    sections: [
      {
        type: 'grid-2-list',
        title: 'Where the money goes.',
        sub: 'Example: A $10,000 brand contract.',
        items: [
          {title: 'Creator Payout', tag: '$8,500'},
          {title: 'Brokerage Fee', tag: '$1,500'},
          {title: 'Validation Hold (20%)', tag: '$1,700 Held 30 Days'}
        ]
      }
    ]
  },
  {
    filename: 'roster.html',
    title: 'Roster Eligibility',
    hero: {
      h1: 'Premium Creators are <em>Curated Creators.</em>',
      sub: 'Roster growth is subordinate to quality. Wells+ Daily is an invite-only environment built to protect the integrity of premium brand partnerships.',
      cta: 'Apply for Roster'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'The Standard for Placement.',
        sub: 'We monitor placement history strictly.',
        items: [
          {title: 'Active Status', text: 'Creators maintain active status by delivering perfectly against the compliance spec.'},
          {title: 'Flagged Breach', text: 'Early deletion of content (before 90 days) results in immediate revocation of future deal access.'},
          {title: 'Under Review', text: 'Creators involved in active escalations are paused from new matching until resolution.'}
        ]
      }
    ]
  },
  {
    filename: 'payouts.html',
    title: 'Payout Structure',
    hero: {
      h1: 'The <em>80/20</em> Creator Enforcement Model.',
      sub: 'We use structured payouts and future-opportunity leverage to ensure brand compliance, rather than cash forfeiture.',
      cta: 'Read Payout Docs'
    },
    sections: [
      {
        type: 'grid-3',
        title: 'How creators get paid.',
        sub: 'Designed for premium supply who respect uniform, institutional business terms.',
        items: [
          {title: '80% On Approval', text: 'Funds release the moment the deliverable is submitted and compliance spec is verified.'},
          {title: '20% At Day 30', text: 'A compliance-validation hold that auto-releases unless a failure is flagged.'},
          {title: 'Future Leverage', text: 'Breach of the 90-day retention window results in roster removal, not cash clawbacks.'}
        ]
      }
    ]
  },
  {
    filename: 'about.html',
    title: 'About Us',
    hero: {
      h1: 'About Us — <em>Trust Through Structure.</em>',
      sub: 'Building the economic infrastructure for the creator economy. We eliminate the friction and risk of premium influencer campaigns.',
      cta: 'Join The Team'
    },
    sections: [
      {
        type: 'grid-2-list',
        title: 'Our Governance Doctrine.',
        sub: 'The principles we do not compromise.',
        items: [
          {title: 'Quality Over Growth', tag: 'Doctrine 0.6.1'},
          {title: 'Escalation Integrity', tag: 'Doctrine 0.6.2'},
          {title: 'Legible Enforcement', tag: 'Doctrine 0.6.3'}
        ]
      }
    ]
  },
  {
    filename: 'terms.html',
    title: 'Terms of Service',
    hero: { h1: 'Terms of <em>Service</em>', sub: 'Effective Date: June 2026', cta: 'Download PDF' },
    sections: [ { type: 'grid-2-list', title: 'Legal Agreements.', sub: 'Platform usage rules.', items: [{title: 'Dual-Contract Acceptance', tag: 'Required'}] } ]
  },
  {
    filename: 'privacy.html',
    title: 'Privacy Policy',
    hero: { h1: 'Privacy <em>Policy</em>', sub: 'Effective Date: June 2026', cta: 'Download PDF' },
    sections: [ { type: 'grid-2-list', title: 'Data Protection.', sub: 'How we manage data.', items: [{title: 'Stripe Identity Data', tag: 'Encrypted'}] } ]
  }
];

pagesData.forEach(page => {
  fs.writeFileSync(page.filename, buildHtml(page));
});
console.log('Successfully generated all pages with strict Living Doc compliance.');
