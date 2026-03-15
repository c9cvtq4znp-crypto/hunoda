**Project Overview**

Site: https://hunoda.com
Hosting: GitHub Pages (main branch)
Domain: Cloudflare (transferred from GoDaddy)
Email: iCloud custom domain (hello@hunoda.com)
Analytics: Google Analytics (G-1TVNDQB0D5)
Background: Dynamic day/night (orange #FF4500 / black #000000) based on Hong Kong sunrise/sunset

**Technical Architecture**

**Repository Structure**
text
Hunoda/
├── index.html              # Homepage
├── style.css               # Global styles (homepage + shared)
├── script.js               # Background color logic
├── privacy/
│   └── index.html          # Privacy page (clean URL)
├── 404.html                # Custom error page
├── favicon files           # All favicon sizes
├── robots.txt
├── sitemap.xml
└── .github/workflows/      # CI/CD (minify automation)
Key Files & Their Purpose
File	Purpose	Critical Rules
index.html	Homepage	Stacked footer, HUNODA logo centered
style.css	Global styling	Must not affect privacy page uniquely
script.js	Dynamic background	Fetches sunrise-sunset API, sets body bg
privacy/index.html	Privacy policy	Uses .privacy-footer class, not global footer
404.html	Error page	Must match homepage styling exactly
Visual Style Guide
Colors
Element	Day	Night	Notes
Background	#FF4500 (orange)	#000000 (black)	Dynamic via API
Logo text	White (#FFFFFF)	White (#FFFFFF)	Never changes
Privacy page logo	Orange (#FF4500)	Black (#000000)	Dynamic via JS
Body text (privacy)	#000000	#000000	Static
Links	Inherit color + underline	Inherit color + underline	No visited color change
Typography
Font family: "Helvetica Neue", Helvetica, Arial, sans-serif

Logo size: clamp(70%, 9vw, 18mm)

Body text (homepage footer): 11px

Body text (privacy page): calc(11pt * 0.9) (10% smaller than homepage)

404 page "Hey!": 20% larger than base

404 page link: 20% smaller than base

Footer Specifications
Homepage Footer
css
footer {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  font-size: 11px;
  opacity: 0.6;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
Privacy Page Footer
css
.privacy-footer {
  width: 100%;
  padding: 20px;
  font-size: 11px;
  opacity: 0.6;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* Mobile: switches to column */
Responsive Breakpoints
Breakpoint	Behavior
≤480px	Homepage footer allows text wrapping
≤600px	Privacy page footer stacks vertically
Content Security Policy (CSP)
The CSP must always include:

text
default-src 'self';
connect-src 'self' https://api.sunrise-sunset.org https://www.googletagmanager.com https://www.google-analytics.com https://cloudflareinsights.com;
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com;
style-src 'self' 'unsafe-inline';
font-src 'self' data:;
img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com
Clean URLs
Privacy page: /privacy (not /privacy.html)

Implement via folder structure: privacy/index.html

All internal links must use clean URLs

Common Fixes & Lessons Learned
Issue: Footer alignment on privacy page
Fix: Use .privacy-footer class with display: flex; justify-content: space-between;
Mobile: Switch to flex-direction: column;

Issue: CSS affecting both homepage and privacy
Fix: Always scope privacy-specific styles with unique class (.privacy-footer), never reuse homepage classes.

Issue: Minify workflow crashing
Cause: Invisible character at start of style.css
Fix: Re-save file in plain text editor, remove BOM, ensure first character is visible.

Issue: Cloudflare beacon blocked by CSP
Fix: Add https://static.cloudflareinsights.com to script-src and https://cloudflareinsights.com to connect-src.

Issue: Visited links turning purple
Fix: Always include a:visited { color: inherit; }

Issue: Font size inconsistency between pages
Fix: Use explicit 11px for all footer text, not relative units.

Deployment & CI/CD
Minify Workflow
Runs on push to main

Minifies HTML, CSS, JS

If it fails: Check for invisible characters in CSS/JS files

Manual Deploy (Emergency)
Commit directly to main

Wait 2-3 minutes for GitHub Pages rebuild

Purge Cloudflare cache if changes don't appear

SEO & Search Console
Property type: Domain property (sc-domain:hunoda.com)

Sitemap: /sitemap.xml (includes / and /privacy)

Google Analytics: Connected via G-1TVNDQB0D5

Schema: Organization markup with contact email

Design Principles
Match homepage as reference when in doubt

Stacked footer is default (homepage style)

Mobile-first responsive design

Clean, minimal, professional

No visual surprises across pages

Future Development Notes
When adding blog/articles: Use /blog/ folder with index.html per post

Readiness assessment tool: Will need JS framework (React/Vue) or vanilla JS

Maintain CSP updates with any new external services
