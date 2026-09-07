ABDELRAHMAN ZAKI — PORTFOLIO

A static, GitHub Pages-ready cybersecurity portfolio.

Files
- index.html
- styles.css
- script.js
- assets/abdelrahman-zaki-professional.webp
- assets/abdelrahman-zaki.webp (original portrait)
- assets/favicon.svg, favicon.ico, favicon-32.png, favicon-192.png
- Abdelrahman_Zaki_Professional_CV.pdf
- _headers
- .well-known/security.txt

Contact channels on the site
- WhatsApp, Email, LinkedIn, GitHub, TryHackMe, HackerOne, Calendly (book a call)

Notes
- WhatsApp and email contact links are client-side; no database is used.
- Conversation form opens a prefilled WhatsApp message.
- A Content-Security-Policy is also set via a <meta> tag in index.html, since GitHub
  Pages does not read the _headers file (that file only applies on hosts like
  Cloudflare Pages or Netlify). Headers that require a real HTTP response
  (X-Frame-Options, Permissions-Policy, frame-ancestors) will NOT be active on
  plain GitHub Pages. If you want those enforced, either:
    1) Deploy to Cloudflare Pages or Netlify instead (both honor _headers), or
    2) Put GitHub Pages behind Cloudflare (free plan) and add the same headers
       there via a Cloudflare "Transform Rule" / Worker.
- To deploy on GitHub Pages: push these files to a repo, then enable
  Settings -> Pages -> Deploy from branch (root). No build step needed.
