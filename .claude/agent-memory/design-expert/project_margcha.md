---
name: Margcha Shopfitting Website
description: React + Tailwind + Framer Motion website for a Zimbabwean aluminium/glass shopfitting company. Brand colors are maroon (#912A2A) with white and gray. Uses Vite, Lucide icons, Leaflet maps, MUI (partially), react-router-dom.
type: project
---

- Stack: React 19, Tailwind 3.3, Framer Motion 12, Vite 6, Leaflet, Lucide React, react-icons, Sonner, MUI 7
- Pages: Home, Services, Projects, About, Contact. Footer is commented out / empty.
- Brand palette defined in tailwind.config.js: maroon-100 through maroon-900
- Currently loads 8 Google Fonts (Roboto, Inter, Oswald, Raleway, Nunito, IBM Plex Sans, Arimo, Roboto Condensed) -- excessive
- Home page has an elaborate hero with image carousel, payment installment card, floating action buttons (WhatsApp, Call, Email)
- App.css still has default Vite boilerplate (max-width: 1280px, centered, text-align: center) which may be conflicting
- index.css is bare minimum (just @tailwind directives)
- Key source files: src/components/{home/home.jsx, nav/nav.jsx, services/services.jsx, projects.jsx, about/about.jsx, contact/contact.jsx, footer/footer.jsx}
- Images are mostly .jpg/.jpeg in /public, no WebP optimization
- Home page has duplicate navigation (its own header + the global NavBar from App.jsx)
- Services page also has its own duplicate mobile nav and sticky header
- Contact page also has its own mobile nav overlay

**Why:** Complete design overhaul requested. The site has too many fonts, inconsistent navigation patterns (each page rolls its own), over-animated hero with pulsing/spinning effects, red gradients instead of maroon brand colors, and no footer.

**How to apply:** All design recommendations should consolidate navigation to the single NavBar component, reduce fonts to 2, replace red-* classes with maroon-*, and prioritize restrained, luxury-brand animation style.
