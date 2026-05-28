# Freight Bridge LLC — Launch Checklist

## Pre-Deploy (Complete)
- [x] Factory init with mobile-service archetype
- [x] Business data populated from FMCSA/web discovery
- [x] Services defined (Fast Shipment, Freight Management, Custom Solutions)
- [x] Locations defined (Iowa City HQ + 4 regions)
- [x] Factory wire — llms.txt, robots.txt, JSON-LD generated
- [x] Factory validate — zero errors
- [x] Factory build — 8 pages generated
- [x] Enhanced llms.txt with full service/location/owner details
- [x] LLM crawler directives in robots.txt (GPTBot, ClaudeBot, PerplexityBot)
- [x] Brainstorming session complete — boutique freight positioning

## Deploy (When Ready)
- [ ] Choose hosting: Netlify (recommended), Vercel, or Cloudflare Pages
- [ ] Deploy `dist/` folder to hosting provider
- [ ] Verify all pages load at production URL
- [ ] Verify llms.txt accessible at /llms.txt
- [ ] Verify robots.txt accessible at /robots.txt
- [ ] Verify sitemap at /sitemap-index.xml

## Post-Deploy
- [ ] **Google Search Console**: Verify domain, submit sitemap URL
- [ ] **GA4**: Replace G-PLACEHOLDER in business.json with real GA4 ID, add tracking snippet
- [ ] **Google Business Profile**: Verify GBP claimed, NAP matches site exactly
- [ ] **Lighthouse audit**: Run on homepage + 1 service page, target 90+ all categories
- [ ] **Broken-link sweep**: Crawl all internal links, fix any 404s
- [ ] **NAP check**: Verify phone (641) 451-3132 and Iowa City, IA 52245 appear consistently
- [ ] **Click-to-call test**: Test all tel: links work on mobile
- [ ] **Contact form**: Verify form submission works (currently static — needs backend)

## Content Updates Needed
- [ ] Replace placeholder "About" team content with real team photos/bios
- [ ] Add real customer testimonials
- [ ] Add Mohamed's photo to homepage and about page
- [ ] Apply brainstorming insights: "Call Mohamed" CTA, boutique freight messaging
- [ ] Add "How Your Shipment Works" visual timeline
- [ ] Create driver recruitment page ("Drive With Us")
