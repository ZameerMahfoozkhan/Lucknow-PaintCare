# R J INTERIOR — Website & Lead Generation Engine

> **A Better Finish for Every Home.**  
> Official website and lead-generation platform for **R J INTERIOR**, a residential painting service based in Lucknow, Uttar Pradesh, India.

---

## 1. Quick Start & Local Development

This website is engineered with semantic HTML5, modern vanilla CSS tokens, and modular ES6 JavaScript. It runs on any static web server with zero complex dependencies.

### Running Locally

```bash
# Start the local development server (serves on http://localhost:3000)
npm run dev
# or
npx -y serve -l 3000 .
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Central Configuration: `src/js/site-config.js`

All business details, telephone numbers, WhatsApp routing, analytics IDs, and production modes are centralized in a single configuration file:

**File:** `src/js/site-config.js`

```javascript
export const siteConfig = {
  brandName: "R J INTERIOR",
  legalName: "RAM PRASAD JAYASWAL",
  tradeName: "R J INTERIOR",
  constitution: "Proprietorship",
  gstin: "09CSUPJ6245A1ZI",
  pan: "CSUPJ6245A",
  tagline: "A Better Finish for Every Home.",
  siteUrl: "https://r-j-interior.vercel.app",
  locale: "en-IN",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  phoneDisplay: "+91 95806 59559",
  phoneE164: "919580659559",
  whatsappE164: "919580659559",
  email: "",
  streetAddress: "268/353KA/2, Smt. Prabhawati, Daru Godam, Aishbagh",
  postalCode: "226004",
  showStreetAddress: true,
  businessHours: [
    { days: "Monday - Saturday", hours: "09:00 AM - 07:00 PM" }
  ],
  serviceAreas: [
    "Lucknow (Entire City)",
    "Gomti Nagar",
    "Gomti Nagar Extension",
    "Indira Nagar",
    "Aliganj",
    "Hazratganj",
    "Mahanagar",
    "Jankipuram",
    "Ashiyana",
    "Vikas Nagar",
    "Rajajipuram"
  ],
  socialProfiles: [],
  analytics: {
    ga4MeasurementId: "",      // e.g. "G-XXXXXXXXXX"
    googleAdsConversionId: "", // e.g. "AW-XXXXXXXXXX"
    googleAdsConversionLabel: ""
  },
  // Set to true before deploying live. When false, developer setup notices appear.
  productionMode: false
};
```

---

## 3. Pre-Launch Owner Checklist

Before deploying this website to a live domain, the business owner must complete these steps:

- [ ] **1. Insert Confirmed Contact Numbers:**
  - Enter the verified business mobile number in `phoneE164` and `phoneDisplay`.
  - Enter the verified business WhatsApp number in `whatsappE164`.
- [ ] **2. Confirm Production Domain:**
  - Set `siteUrl` to your live domain (e.g. `https://r-j-interior.vercel.app`).
  - Update `sitemap.xml` and `robots.txt` with this canonical domain.
- [ ] **3. Switch `productionMode` to `true`:**
  - This hides the development-mode configuration banners and enables live contact routing.
- [ ] **4. Add Analytics IDs (Optional):**
  - Insert Google Analytics 4 ID (`G-XXXXXXXXXX`) and Google Ads conversion IDs if running campaigns.
  - Form submissions do **not** transmit any customer PII to analytics.
- [ ] **5. Add Real Completed Project Photographs:**
  - As projects across Lucknow are completed with client consent, add photographs to `assets/images/` and update `/projects/index.html`.
- [ ] **6. Search Engine & AI Search Registration:**
  - Submit `https://r-j-interior.vercel.app/sitemap.xml` in **Google Search Console**.
  - Submit your site in **Bing Webmaster Tools** (this powers Microsoft Copilot and Bing AI citations).
  - Verify your **Google Business Profile** (Service-Area Business) with consistent name, phone, and service area.

---

## 4. Site Architecture & Directory Map

```text
/
├── index.html                               # Homepage (Hero, Services, Process, Cost Factors, FAQs, Estimate form)
├── services/
│   ├── index.html                           # Comprehensive Services Overview
│   ├── interior-painting-lucknow/index.html # Interior Wall & Ceiling Painting
│   ├── exterior-painting-lucknow/index.html # Exterior House Weather-Protection
│   └── repainting-lucknow/index.html        # Lived-In Home Repainting & Refreshes
├── painting-cost-lucknow/index.html         # Authoritative House Painting Cost Guide
├── projects/index.html                      # Craftsmanship Standards & Finish Inspiration
├── about/index.html                         # Working Principles & Craft Standards
├── contact/index.html                       # Action-Oriented Estimate Request Form
├── faq/index.html                           # 10+ Detailed Customer FAQs (Crawlable HTML)
├── privacy-policy/index.html                # Tailored Privacy Policy
├── areas/
│   └── gomti-nagar/index.html               # Locality Guide (Gomti Nagar Society Logistics)
├── assets/
│   ├── images/                              # High-resolution hero and service photography
│   │   ├── hero-home-lucknow.jpg
│   │   ├── interior-painting-craft.jpg
│   │   └── exterior-house-painting.jpg
│   └── icons/
│       └── brand-logo.svg                   # Architectural swatch brand mark
├── src/
│   ├── css/
│   │   ├── tokens.css                       # Color palette, spacing, typography scales
│   │   ├── base.css                         # CSS reset, accessibility styles, skip link
│   │   ├── layout.css                       # Header, mobile drawer, footer, mobile CTA bar
│   │   ├── components.css                   # Buttons, cards, form inputs, accordions
│   │   └── pages.css                        # Hero grid, process steps, cost table
│   └── js/
│       ├── site-config.js                   # Central configuration (Single source of truth)
│       ├── navigation.js                    # Mobile drawer, sticky header, dynamic contacts
│       ├── quote-form.js                    # Honeypot spam check, validation, WhatsApp deep links
│       ├── analytics.js                     # Safe event tracking without PII leakage
│       └── main.js                          # Main bootstrapping script
├── robots.txt                               # Crawl rules (Explicitly permits Google, Bing, OAI-SearchBot)
├── sitemap.xml                              # XML Sitemap with all 12 production routes
├── site.webmanifest                         # Web app / browser manifest
├── favicon.svg                              # Brand favicon
├── 404.html                                 # Branded 404 Not Found page
├── package.json                             # Local dev server scripts
└── README.md                                # Launch documentation
```

---

## 5. SEO & Generative AI Search (GEO/AEO) Implementation

- **100% Crawlable Semantic HTML:** Key service details, surface preparation steps, pricing drivers, and FAQs are embedded directly in the initial HTML response.
- **AI-Search Friendly (ChatGPT Search & Google AI):** `robots.txt` explicitly allows `OAI-SearchBot` and standard crawlers. Every core service page features direct, answer-first summary sections.
- **Valid Schema.org Structured Data:**
  - `HousePainter` / `LocalBusiness` schema with accurate service boundaries in Lucknow.
  - `BreadcrumbList` on inner pages.
  - `Service` catalog metadata.
- **Truthful Content Standards:** No fabricated ₹/sq ft rates, no fake 5-star badges, no invented guarantees, and no automated duplicate locality spam.
