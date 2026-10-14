# Product Requirements Document (PRD)
# Lucknow PaintCare — Lead-Generation Website

**Version:** 1.0  
**Prepared:** 11 October 2026  
**Product:** Local home-painting service website for Lucknow, Uttar Pradesh, India  
**Primary outcome:** Generate qualified painting enquiries by phone and WhatsApp, then convert those enquiries into site visits, quotations, and booked jobs.  
**Implementation target:** Antigravity should build the working website and source files, not merely create a visual mock-up.

---

## 1. Instructions to Antigravity

Build a complete, polished, production-oriented, SEO-first website for **Lucknow PaintCare**. Treat this document as the source of truth. Make sensible implementation decisions without asking questions unless blocked by a genuinely essential missing detail. Do not stop after generating a homepage design: create the complete requested site structure, responsive layouts, page metadata, reusable components, technical SEO files, lead flows, validation, and a launch README.

The website must feel like a real local service business with a considered visual identity—not a generic AI-generated template. Design for homeowners in Lucknow who are deciding whom to trust inside their homes. Clear service information, evidence, communication, and ease of contacting the business matter more than decorative effects.

### Non-negotiable requirements

1. Build real, crawlable pages with meaningful HTML content in the initial page response. Do not put important service copy only inside JavaScript-rendered widgets.
2. Make mobile call and WhatsApp actions highly accessible without letting sticky controls cover content.
3. Never invent the business phone number, WhatsApp number, email, street address, years in business, job count, testimonials, ratings, accreditations, warranties, staff names, project history, prices, or guarantees.
4. Do not present stock/illustrative photos as completed Lucknow PaintCare projects. Label illustrative imagery appropriately or use it only as general service imagery.
5. Provide a central configuration file for business details, domain, service coverage, analytics IDs, and contact options.
6. Include a launch checklist in `README.md` that clearly identifies the real business details the owner must insert before production.
7. Do not generate dozens of thin locality pages. Only publish locality landing pages when the owner can genuinely serve the location and supply useful, locally specific information or project evidence.
8. Optimise for local organic search and AI search/citation eligibility by following crawlability, content quality, factual specificity, and entity consistency—not by keyword stuffing or invented schema.
9. Use clean, maintainable code and avoid unnecessary frameworks, dependencies, animations, databases, or admin dashboards.
10. Finish with a brief build report listing files created, functions implemented, details still awaiting owner confirmation, and validation performed.

## 2. Business and product overview

### 2.1 Brand

- **Public-facing brand:** Lucknow PaintCare
- **Tagline:** A Better Finish for Every Home.
- **Primary market:** Lucknow, Uttar Pradesh, India
- **Business category:** Home painting and related residential painting services
- **Brand personality:** Dependable, tidy, skilled, approachable, transparent, locally aware
- **Primary conversion:** Qualified call or WhatsApp enquiry
- **Secondary conversions:** Request an estimate, ask for a site visit, view service details, review relevant work examples

Use the exact brand spelling **Lucknow PaintCare** in headings and brand assets. The spelling “locknowpaintcare” must not appear in public-facing copy. The final registered domain is **not confirmed in this PRD**. Keep it configurable and do not deploy a guessed canonical domain.

### 2.2 Business model assumptions

This is a local service business, not an e-commerce store. Customers should not be asked to pay online. The initial experience should help them describe their project and initiate contact.

Assume no database, customer login, payment gateway, or admin panel is required for version 1.0. Store business details in one configuration file. Use a WhatsApp deep link to send the enquiry when a valid business WhatsApp number is configured. Keep the lead flow easy to connect to a proper form endpoint/CRM later, without making the entire website dependent on it.

### 2.3 Business details that must remain configurable

Create `src/js/site-config.js` or an equivalent single-source configuration file containing at least:

```js
export const siteConfig = {
  brandName: "Lucknow PaintCare",
  tagline: "A Better Finish for Every Home.",
  siteUrl: "", // Set to the confirmed production domain before launch
  locale: "en-IN",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  phoneDisplay: "",
  phoneE164: "", // For example: 91XXXXXXXXXX; never invent a number
  whatsappE164: "", // Digits only with country code; never invent a number
  email: "",
  streetAddress: "", // Keep empty if no public customer-facing location
  postalCode: "",
  showStreetAddress: false,
  businessHours: [],
  serviceAreas: ["Lucknow"],
  socialProfiles: [],
  analytics: {
    ga4MeasurementId: "",
    googleAdsConversionId: "",
    googleAdsConversionLabel: ""
  },
  productionMode: false
};
```

Adapt paths or syntax if necessary, but preserve the central-configuration principle. Do not render empty fields, fake links, placeholder phone numbers, or raw configuration text on the website. In development mode, show a helpful developer-only setup warning. In production mode, hide or disable contact actions that lack a valid destination and fail the launch validation check. The build report must call out any missing business details.

### 2.4 Service scope

Core services to support in site architecture:

- Interior home painting
- Exterior house painting
- Repainting and freshening existing homes
- Wall/ceiling painting
- Surface preparation, including putty and primer where offered
- Texture/decorative wall painting only if offered
- Dampness/waterproofing service only if offered and competently deliverable
- Apartment/flat painting
- Small commercial painting only if offered

Optional services must be enabled or disabled using a clear configuration/content flag. Do not publish a page for a service the owner has not confirmed.

## 3. Goals, non-goals, and success metrics

### 3.1 Goals

1. Generate qualified local enquiries from homeowners and property managers in Lucknow.
2. Explain services, process, scope, and estimate factors clearly enough to build trust before the first call.
3. Establish a durable foundation for Google organic search, Google Maps/local SEO, Bing, and answer engines such as ChatGPT Search and Google AI features.
4. Make future content and service-page expansion straightforward without duplicating boilerplate.
5. Provide measurable events for calls, WhatsApp starts, form submissions, and other meaningful actions.
6. Keep the website fast, accessible, secure, and easy to maintain.

### 3.2 Non-goals for version 1.0

- Online payments or checkout
- Customer accounts or login
- Contractor marketplace
- Admin dashboard or CMS unless explicitly added later
- Instant automated final-price quote without a verified price model
- Fake reviews, fake project cards, fake price promises, artificial urgency, or unsupported guarantees
- Publishing every neighbourhood, BHK size, or keyword as a separate page by default
- Guaranteeing #1 rankings or a citation in every AI answer

### 3.3 Outcome metrics

Track the following once analytics is configured:

- `click_to_call`
- `click_whatsapp`
- `quote_form_start`
- `quote_form_submit`
- `quote_form_whatsapp_open`
- `contact_email_click` when email exists
- `service_page_cta_click`
- `project_case_study_view`
- `google_business_profile_website_clicks` and relevant profile activity where available
- Organic Search Console impressions, clicks, CTR, indexed pages, and query coverage
- Bing Webmaster Tools search metrics and AI Performance reporting where available
- Qualified leads, site visits, quotations sent, and jobs won (recorded by the business outside the site initially)

Do not declare SEO success based only on total traffic or a single ranking snapshot. Report conversion quality as well as visibility.

## 4. Target audiences and user needs

### Persona A: Homeowner repainting a lived-in home
- Wants neat work, reasonable disruption, a clean finish, and clarity around furniture protection and cleanup.
- Often unsure which paint finish or preparation is necessary.
- Needs confidence that the team will protect belongings and communicate clearly.

### Persona B: Owner of a new flat or recently purchased home
- May need putty, primer, ceiling paint, and several coats.
- Wants advice on process, choices, time, and quote inclusions.
- May search by BHK size or locality.

### Persona C: Owner/landlord preparing a property for rent or sale
- Values time, scope clarity, and communication.
- Needs a clear quotation and a realistic schedule rather than broad claims.

### Persona D: Family comparing local painters
- Compares several providers and asks about labour, material, product choice, and what is included.
- Wants accessible contact options and real examples of work.

### Main questions the site must answer

- Do you provide home painting services in my part of Lucknow?
- Do you handle interior, exterior, repainting, or both?
- What is included in the quotation?
- What factors affect house-painting cost?
- Is site inspection required for an accurate estimate?
- How do you prepare walls and protect furniture/floors?
- What information should I send on WhatsApp for a useful estimate?
- Can I see real examples of completed work?
- How do I contact the team?

## 5. Brand and visual design direction

### 5.1 Visual concept: “modern local craftsmanship”

Design a confident, editorial service brand inspired by paint swatches, architectural surfaces, clean tools, subtle texture, and the calm feeling of a freshly finished room. It should feel established and thoughtfully designed without pretending to be a large national company.

Avoid the default AI-site look: generic purple/blue gradients, a centered hero with an oversized rounded card, dozens of identical floating cards, glassmorphism, decorative blobs, exaggerated shadows, meaningless counters, fake badges, random line icons, overuse of rounded pills, and repetitive stock-image sections.

Prefer a distinctive composition, strong grid, generous whitespace, deliberate typography, restrained transitions, warm colours, authentic photography, and a small number of memorable design details. Use cards only where they genuinely improve comparison or scanning.

### 5.2 Suggested colour tokens

Use these as starting tokens and validate contrast:

- `--color-ink: #1E293B` — primary text (crisp dark slate)
- `--color-forest: #1A365D` — brand/primary actions (Royal Architectural Navy)
- `--color-forest-deep: #0B192C` — footer/dark section (Deep Midnight Navy)
- `--color-ivory: #F8FAFC` — main background (crisp studio alabaster)
- `--color-paper: #FFFFFF` — content surfaces / cards
- `--color-sage: #EEF4F8` — soft section background (slate-ice tint)
- `--color-clay: #D97706` — high-conversion accent (Warm Amber Ochre)
- `--color-clay-hover: #B45309` — warm ochre hover
- `--color-stone: #E2E8F0` — dividers/borders
- `--color-muted: #64748B` — secondary copy (slate cool gray)
- `--color-success: #16A34A` — success feedback
- `--color-error: #DC2626` — error feedback
- `--color-warning: #D97706` — warning feedback

Do not use accent colours for long body text unless contrast remains accessible. Use a consistent token system rather than one-off colours scattered through components.

### 5.3 Typography

Use a refined modern sans-serif for functional text and an optional contrasting editorial display face for selected headings. Example direction: Manrope/DM Sans for headings and Inter/system sans-serif for body. Avoid too many font families and weights. Self-host fonts or use a performance-conscious loading approach; provide good system fallbacks.

- Strong hero headline with controlled line length
- Body copy comfortably readable on mobile
- Clear hierarchy between page title, section headings, labels, metadata, and body copy
- Avoid all-caps body copy and excessive letter spacing

### 5.4 Layout and components

- Max content width approximately 1160–1240px
- Desktop uses a deliberate 12-column grid and asymmetric hero composition
- Mobile uses a clean single-column layout with no horizontal overflow
- Consistent spacing tokens and section rhythm
- Corner radius should be restrained and consistent; do not put every element in a pill/card
- Use subtle borders and restrained shadows
- Only use motion when it communicates state or improves affordance
- Respect `prefers-reduced-motion`

### 5.5 Imagery direction

Use warm, realistic photography of freshly painted Indian home interiors, wall preparation, careful masking, rollers/brushes, wall finishes, and believable homes. Prefer locally relevant architectural details where possible.

Image rules:
- Use original photos supplied by the business as the primary future source of trust.
- If genuine business work photos are unavailable at build time, use appropriately licensed illustrative stock images locally stored in the project. Do not label them “our projects” or present them as work completed by Lucknow PaintCare.
- Do not hotlink images from unstable third-party URLs.
- Crop intentionally with `object-position`; do not stretch or distort photographs.
- Use descriptive filenames and contextual alt text where images communicate meaningful information; use empty alt text for purely decorative imagery.
- Use AVIF/WebP variants, responsive `srcset`/`sizes`, explicit width/height, and lazy-load below-the-fold images. Do not lazy-load the main LCP hero image.
- Create a clean logo/wordmark and favicon. Keep the logo restrained: typography plus a subtle paint-stroke/swatch motif. Avoid generic roof icons or clip-art paint rollers.

### 5.6 Photography integrity

Until actual job photos are supplied:
- Project gallery should show a well-designed empty state or a few explicitly labelled “Example finish inspiration” images outside the “Completed projects” section.
- Do not fabricate before/after images, customer faces, review screenshots, or job captions.
- Use a reusable project template ready for real evidence to be added later.

## 6. Information architecture and URL plan

Use readable lowercase paths, hyphen separators, and consistent trailing-slash policy. If static hosting is used, implement clean URLs through route folders with `index.html` files or the hosting platform's equivalent rewrite rules.

### Version 1.0 core pages

1. `/` — Home
2. `/services/` — Services overview
3. `/services/interior-painting-lucknow/` — Interior painting
4. `/services/exterior-painting-lucknow/` — Exterior painting
5. `/services/repainting-lucknow/` — Repainting
6. `/painting-cost-lucknow/` — Painting cost guide and estimate factors
7. `/projects/` — Project gallery / work examples; clearly distinguish illustrative imagery from real work
8. `/about/` — About Lucknow PaintCare and working process
9. `/contact/` — Enquiry / estimate request
10. `/faq/` — Helpful customer questions
11. `/privacy-policy/` — Privacy policy tailored to implemented data handling
12. `/404.html` or platform equivalent — Useful not-found page

### Conditional pages (only when service and content are confirmed)

- `/services/wall-putty-and-surface-preparation-lucknow/`
- `/services/texture-wall-painting-lucknow/`
- `/services/waterproofing-lucknow/`
- `/services/commercial-painting-lucknow/`

### Locality pages (phase 2; publish selectively)

Candidate localities to validate against actual service coverage and job evidence:
- `/areas/gomti-nagar/`
- `/areas/indira-nagar/`
- `/areas/aliganj/`
- Additional localities only when useful and genuine.

Each locality page must include locally relevant information, service coverage, a useful local FAQ or access detail, and authentic nearby work examples where available. Do not publish mechanically generated near-duplicate pages.

### Later educational content

- `/guides/` — Practical painting guides
- Individual guide URLs listed in the content plan below

Avoid creating pages for “1 BHK painter”, “2 BHK painter”, “cheap painter”, and every spelling variation at launch. Cover those intents within the relevant service/cost pages unless research and actual service differences justify separate pages.

## 7. Navigation and site-wide structure

### Desktop header

- Left: logo/wordmark
- Navigation: Services, Painting Costs, Our Work, About, Service Areas (only if the section contains published pages)
- Right: prominent “Get an Estimate” action plus a phone action only when configured
- Header remains simple and does not occupy too much vertical space
- Optional sticky-on-scroll header may be used if smooth and accessible; never allow it to obscure anchor targets

### Mobile header

- Brand mark/wordmark on left
- Menu toggle on right, with accessible label and focus handling
- Compact menu with clear call/WhatsApp/estimate actions
- Fixed bottom mobile conversion bar: “Call” and “WhatsApp” only when those channels are configured
- Add safe-area padding and ensure it never obscures form buttons or footer content

### Footer

Include:
- Brand and short service summary
- Service links
- Published service-area links
- Contact details only when configured
- Business hours only when confirmed
- Privacy policy
- Copyright year generated dynamically
- Social links only for real profiles
- No fake accreditation logos, unsupported guarantees, or generic claims such as “No. 1 in Lucknow”

## 8. Detailed page requirements and content outlines

### 8.1 Homepage `/`

**Intent:** Capture broad local commercial searches and turn visitors into leads.

**Suggested SEO title:** `Home Painting Services in Lucknow | Lucknow PaintCare`  
**Suggested meta description:** `Looking for home painting services in Lucknow? Explore interior painting, exterior painting and repainting options, then request an estimate from Lucknow PaintCare.`

**Primary keyword themes:** home painting services in Lucknow; house painting services in Lucknow; house painters in Lucknow; painters in Lucknow; painting contractors in Lucknow.

**Hero requirements:**
- Small contextual overline: `Home painting in Lucknow`
- H1: `A fresh coat. A better feeling at home.` or `Professional Home Painting Services in Lucknow` (choose the best fit; ensure main service phrase is included naturally in title/intro copy)
- Supporting copy describing the real service scope, clear estimates, preparation, and communication; avoid unsupported promises
- Primary CTA: “Request an Estimate”
- Secondary CTA: “WhatsApp Us” or “Call Us” only if configured
- Hero image that conveys a believable, finished home/painting craft
- One or two concise, verifiable trust cues such as “Interior & exterior painting” and “Serving Lucknow” rather than fake counts or ratings

**Homepage sections, in order:**
1. Hero with primary conversion action.
2. Short trust statement: explain how the service works and what a customer can expect; do not invent experience claims.
3. Service overview with links to interior, exterior, and repainting pages.
4. “Our process” in 4–5 clear steps: share requirements, discuss/inspect as needed, define quote and scope, prepare and paint, final walkthrough. Adjust only if the actual process differs.
5. Work/gallery preview with genuine images if provided; otherwise use an explicitly labelled inspiration section or a quiet empty state.
6. Painting cost factors preview linking to the cost guide.
7. What a clear quotation should cover: scope, preparation, materials/paint brand where chosen, number of coats where specified, exclusions, timeline estimate, and payment terms when known.
8. Service coverage in Lucknow, linking only to valid service-area pages.
9. FAQ block with direct concise answers.
10. Final estimate CTA and contact details.

Do not use a fake review carousel, made-up numbers such as “500+ happy customers”, or unverified star ratings.

### 8.2 Services overview `/services/`

**SEO title:** `Home Painting Services in Lucknow | Lucknow PaintCare`

Provide a useful overview and distinguish each service. Each service card should have its own specific description rather than repeating one generic paragraph. State which tasks are included only after business confirmation. Link to detailed pages.

### 8.3 Interior painting page

**SEO title:** `Interior Painting Services in Lucknow | Lucknow PaintCare`  
**Suggested meta description:** `Explore interior home painting in Lucknow, from wall preparation and finish selection to room and ceiling painting. Request an estimate for your home.`

**Page outline:**
1. Service-specific H1: `Interior Painting Services in Lucknow`
2. Brief direct summary of who the service is for and what it covers.
3. Room/service scope: walls, ceilings, bedrooms, living rooms, and flats—only where offered.
4. Surface preparation section explaining inspection, cleaning, patching, putty/primer as needed; avoid implying every wall always needs identical treatment.
5. Finish and colour selection guidance without pretending to be an official paint-brand partner.
6. Work process and preparation checklist.
7. Factors affecting price: wall condition, area, paint system, coats, ceiling work, access, furniture protection, and other agreed scope.
8. Real work photos/case study if supplied.
9. FAQs.
10. Quote CTA and internal links to cost, repainting, and contact pages.

### 8.4 Exterior painting page

**SEO title:** `Exterior House Painting in Lucknow | Lucknow PaintCare`

Cover external walls, surface condition, weather exposure, preparation, access, finish/material selection, and factors that affect project requirements. Never promise waterproofing or a particular service life unless the actual product/system and warranty terms support it. Explain that final recommendations depend on site condition and selected materials.

### 8.5 Repainting page

**SEO title:** `House Repainting Services in Lucknow | Lucknow PaintCare`

Explain repainting of lived-in homes, refresh projects, changing colours, repairing surface defects, and preparation before repainting. Address the difference between a light refresh and a job requiring more substantial surface repair. Link to interior/exterior service pages and the cost guide.

### 8.6 Painting cost guide `/painting-cost-lucknow/`

**SEO title:** `House Painting Cost in Lucknow: Price Factors & Estimate Guide`

**Primary keyword themes:** house painting cost in Lucknow; painting cost per sq ft Lucknow; home painting rates in Lucknow; 1 BHK/2 BHK/3 BHK painting cost Lucknow; painter labour charges Lucknow.

**Critical truth requirement:** Do not invent a ₹/sq ft price, average local rate, market statistic, discount, or BHK package. If the owner provides verified pricing, display it with a date, clear inclusions/exclusions, and factors that may alter the estimate. If exact pricing is not confirmed, the page must still be useful: describe estimate drivers, explain how to request a quote, and provide a sample quotation structure with placeholder values clearly labelled as a non-published authoring example—not public customer pricing.

**Page outline:**
1. Direct answer: painting cost varies with area, wall condition, materials, preparation, coats, access, and scope; accurate pricing requires specific job information.
2. Table of cost factors and their effect on the quote (do not add fabricated amounts).
3. Separate explanation for fresh painting vs repainting.
4. Explain what a quotation should state.
5. Checklist of information to provide: locality, type/size of property, approximate carpet/wall area if known, new paint or repaint, wall condition, interior/exterior, timeline, and photos.
6. Sample estimate request process.
7. FAQ answers, with concise first-paragraph responses.
8. Strong CTA to WhatsApp/contact.
9. Add a reviewed/updated date only when meaningful information is actually updated.

### 8.7 Projects `/projects/`

Create a visual portfolio layout designed to accommodate real case studies. Each case study should eventually include:
- Project title and locality (only with permission and correct details)
- Service category
- Brief description of the job/constraint
- Scope completed
- Selected images with descriptive alt text
- Date/season where useful and accurate
- Any useful materials or process details confirmed by the business
- Customer quote only with explicit permission and verbatim accuracy

If no genuine project assets exist at launch, do not simulate them. Show an elegant “Project gallery coming as we document completed work” state or an “Inspiration” section clearly labelled as examples, then explain in the README how real projects should be added.

### 8.8 About `/about/`

Explain the business's actual approach, service area, communication style, job preparation, quote clarity, and final walkthrough. Do not invent founding story, team size, years of experience, certifications, family history, or biography. Include a simple real team/work image when available.

### 8.9 Contact `/contact/`

The contact page must be action-oriented, not a wall of generic copy.

Include:
- Phone and WhatsApp buttons when configured
- Estimate-request form
- Service type selector
- Locality / area field
- Property type (optional)
- Project details
- Best time to contact (optional)
- Optional image-upload support only if technically implemented securely; otherwise instruct users that they may share images on WhatsApp
- Clear note about how the submitted information will be used
- Link to privacy policy
- Confirmation/error feedback

Do not ask for unnecessary sensitive data. Do not claim the form has submitted to the company if it only opens WhatsApp or email. Label the final action accurately, e.g. “Continue to WhatsApp with details”.

### 8.10 FAQ `/faq/`

Answer real purchase-decision questions. Suggested topics:
- What types of painting do you provide in Lucknow?
- How can I request an estimate?
- What affects house painting cost?
- Do you paint new homes and previously painted homes?
- Is wall preparation included?
- Do I need to move furniture?
- Can I share photos before a visit?
- How long will my painting job take?
- Which paint brand/finish can I choose?
- Which Lucknow areas do you serve?

Answers must match the business's actual process. Where the answer depends on an inspection, say so clearly. Do not promise a universal timeline or fixed cost without the necessary facts. Implement accessible accordion behaviour, but keep all question/answer content present in the HTML and readable without complex interaction.

### 8.11 Privacy policy

Describe the actual data collected by forms, any third-party handoff to WhatsApp/email, cookies/analytics if enabled, data use, contact path for privacy requests, and retention practices once confirmed. Do not copy a policy that describes tools the site does not use. If no data is stored by the website and the form opens WhatsApp, say this accurately and explain that WhatsApp's own service terms/privacy apply after the handoff. Have the business owner review the final text before launch.

### 8.12 Locality pages, phase 2

Only create a page when the team can genuinely serve the area and there is enough unique utility to justify the page. Each page should cover:
- Clear title/H1 for the service area
- Specific service availability, with accurate boundaries
- Local customer logistics (access, apartment/society coordination, or other relevant details only when true)
- Real job example in that area when available
- Distinct FAQs based on actual customer questions
- Links to specific service pages and contact
- No fake local office address, map pin, team, review, or claim of a physical location

## 9. Lead generation and interaction requirements

### 9.1 Main lead flow

1. User lands on a relevant page.
2. User can understand the service and trust cues without scrolling through a huge wall of copy.
3. User chooses Call, WhatsApp, or Request an Estimate.
4. WhatsApp action opens a prefilled but editable message, with a valid business number.
5. Quote form validates only essential fields, then clearly sends the user to the configured channel.
6. User sees an honest confirmation message describing what happened.
7. Event tracking records CTA interaction if analytics has been configured and legally appropriate.

### 9.2 WhatsApp deep link

Use `https://wa.me/{E164_DIGITS}?text={URL_ENCODED_MESSAGE}`. Strip spaces and punctuation from the phone number and validate the country code format. Do not add a plus sign in the path. Prefill a concise message, for example:

> Hello Lucknow PaintCare, I would like an estimate for painting work. Area/locality: [value]. Property type: [value]. Service: [value]. Project details: [value].

Use the user's entered values safely and encode the entire message. Open in the expected browsing context; do not silently submit personal details to a server. Clearly tell the user that WhatsApp will open and that they can review/edit the message before sending.

If WhatsApp is not configured, remove the broken CTA and present the configured alternative. Never use a fake number.

### 9.3 Estimate form fields

Required:
- Name 
- Phone number 9580659559
- Area/locality in Lucknow
- Service type (interior, exterior, repainting, other)
- Brief description or optional room/property information

Optional:
- Property type (flat, independent house, office/shop, other)
- Approximate size/BHK
- Preferred start period
- Best time to contact

Implementation requirements:
- Inline validation with clear text errors
- Correct `label` associations, input types, and autocomplete attributes
- Prevent double clicks while a handoff is being prepared
- Character limits for open text
- Do not store form values in localStorage/sessionStorage by default
- Avoid tracking personal form values in analytics
- Protect against simple spam with a honeypot or timing check where appropriate; do not make the UX inaccessible with unnecessary CAPTCHA
- Form action must not pretend to send an enquiry if it only opens a WhatsApp message
- If user abandons the WhatsApp handoff, don't report a lead submission; track `quote_form_whatsapp_open` separately from completed lead status

### 9.4 Quote estimator policy

Do not create an instant rupee quote calculator in v1.0 unless the owner provides a verified pricing model and assumptions. The site may have a “What affects your quote?” guide and a structured request wizard. A false price estimate can damage trust and generate low-quality leads.

### 9.5 Trust elements

Use truthful, explainable reassurance:
- Clear scope and estimate
- Surface preparation explained
- Material/paint options explained where relevant
- Real work evidence once supplied
- Clear contact methods
- Honest service area
- Transparent inclusions and exclusions

Use reviews/testimonials only when real, permissioned, and attributable. Do not show a star rating or aggregate rating in schema unless supported by legitimate, displayed evidence and compliant with current guidelines.

## 10. SEO requirements

SEO is a product requirement, not an afterthought. Every important page must be discoverable through crawlable internal links, have a unique purpose, render substantive HTML, and provide useful page-specific metadata/content.

### 10.1 Keyword-to-page map

| Page | Primary intent/keyword cluster | Supporting terms (use naturally) |
|---|---|---|
| Home | home painting services in Lucknow | house painting services Lucknow; painters in Lucknow; house painters Lucknow; painting contractors Lucknow |
| Services | home painting services overview | interior and exterior painting Lucknow; repainting service |
| Interior painting | interior painting services in Lucknow | room painting service; flat interior painting; wall and ceiling painting |
| Exterior painting | exterior house painting Lucknow | exterior wall painting; house exterior painters |
| Repainting | repainting services Lucknow | old house painting; home repainting contractors |
| Painting cost | house painting cost in Lucknow | painting cost per sq ft; painting rates; 1 BHK/2 BHK/3 BHK painting cost |
| Projects | painting work examples Lucknow | home painting projects; before/after work only when genuine |
| Contact | painting estimate Lucknow | home painting quotation; book painter visit |
| Locality page | painters in [locality], Lucknow | house painting services [locality] only for genuine coverage |
| Guide articles | one question/topic per article | closely related variants, not repeated keyword lists |

Use keyword research as guidance, not a density target. Use natural English plus Hindi/Hinglish where that best helps the reader. Do not force every variation into every page.

### 10.2 Metadata requirements

- Unique `<title>` for every indexable page.
- Unique, accurate meta description focused on user value; do not promise rankings or guarantee a particular snippet.
- Exactly one clear visible H1 per page is the implementation convention; heading hierarchy should otherwise follow content structure.
- Canonical tag uses the confirmed production URL, with one consistent trailing-slash policy.
- Correct `lang="en-IN"` on English pages. If a proper Hindi version is added later, use separate correct URLs and valid language annotations as needed.
- Open Graph title, description, URL, and image for sharing.
- Favicon and web app/browser metadata where appropriate.
- Do not use keyword stuffing, hidden text, cloaking, or repetitive boilerplate.

### 10.3 Technical crawlability/indexing

Implement and verify:
- Valid `robots.txt` that permits normal crawling of public content.
- XML sitemap with absolute canonical URLs from the confirmed production domain.
- Correct canonical URLs for all pages.
- Correct HTTP status codes; real 404 page for missing URLs.
- No accidental `noindex` on production pages.
- No blocking of important CSS/JS/images required for rendering.
- No placeholder canonical domain or example.com URL in production.
- Staging deployment set to noindex or access-restricted; remove staging noindex only on production as part of a controlled launch checklist.
- Search Console verification instructions and sitemap submission step in README.
- Internal links between homepage, services, cost guide, project evidence, FAQ, and contact.
- Avoid orphan pages.
- Add redirects only when needed; no chains or loops.

### 10.4 Structured data

Generate valid JSON-LD using only factual information displayed on the corresponding page. Candidate types:
- `HousePainter` or the most appropriate valid `LocalBusiness` subtype supported by Schema.org, using actual business data and confirming the exact type before implementation.
- `Organization` information where relevant, coordinated with local-business entity details.
- `WebSite` for site identity.
- `BreadcrumbList` on eligible inner pages.
- `Service` for service descriptions where accurate and useful to explain the content entity.

Requirements:
- Do not invent an address, geo coordinates, opening hours, service price, aggregate rating, reviews, social profiles, or phone number.
- If the business has no public customer-facing premises and operates as a service-area business, do not fabricate a store address or map pin. Configure Google Business Profile according to its real-world eligibility and profile rules.
- Structured data must match the visible page copy.
- Validate markup using the appropriate Schema.org validator and Google Rich Results Test where the relevant feature is supported.
- Structured data is for machine understanding/eligible presentation, not a guarantee of ranking or AI citations.
- Do not add unsupported `FAQPage`/review schema solely to chase search appearance.

### 10.5 Image SEO

- Use descriptive filenames such as `interior-wall-painting-lucknow.webp` when accurate.
- Write alt text for informative images, describing what is actually visible. Do not repeat city keywords unnaturally.
- For non-decorative real project images, include descriptive context and captions that remain factually accurate.
- Supply Open Graph/share image and favicon.
- Compress assets, use modern formats, and define dimensions to reduce layout shift.

### 10.6 Internal link rules

- Home → each primary service, cost guide, projects, contact.
- Service pages → related service, cost guide, relevant project examples, FAQs, contact.
- Cost guide → service pages and estimate request.
- Projects → relevant service page and contact.
- Locality page → relevant service pages, real work evidence, contact.
- Guides → one or two relevant service links where genuinely useful.
- Use descriptive anchor text; avoid repeated unnatural exact-match anchors.

### 10.7 Content integrity / anti-spam

No mass-generation of nearly identical area pages or blog articles. Each page should offer real user value beyond substituting a city/neighbourhood name. Do not scrape competitors, fabricate sources, use fake citations, repeat blocks of keyword text, buy links, or publish made-up local statistics. Combine first-hand details from real jobs with well-sourced technical information when possible.

## 11. AI search visibility and citation-readiness (AEO/GEO)

The goal is to make Lucknow PaintCare easy for AI-assisted search systems to discover, interpret, corroborate, and cite when relevant. This is an eligibility and content-quality strategy—not a promise of citation or recommendation.

### 11.1 Crawl access

- Verify that public site pages are accessible without login or client-side challenge walls.
- Do not block `OAI-SearchBot` in `robots.txt` if the business wants its public pages to be eligible for ChatGPT Search discovery/citations.
- Check CDN/WAF/firewall and rate-limit rules so legitimate search crawlers are not incorrectly blocked.
- Keep crawler policies deliberate. `OAI-SearchBot` is for search discovery; training-related crawler policies are separate decisions and must not be conflated. Document the final setting in README.
- Keep Microsoft Bing's relevant crawling access available and configure Bing Webmaster Tools after launch.
- Do not use `noindex` on any page the owner wants discovered/cited.
- Do not assume that allowing a crawler guarantees inclusion, ranking, or citation.

### 11.2 Content structure that supports clear answers

For each important service page:
- Begin with a concise, direct description of what the service is, where it is offered, and whom it helps.
- Use descriptive headings that express actual questions/topics.
- Put a concise answer near the beginning of question-oriented sections, then explain conditions, limits, and practical context.
- Provide specific local facts only when true: actual service boundary, real job examples, realistic process, relevant logistics.
- Use tables/checklists for genuinely comparable information, such as estimate factors or quotation contents.
- Define terms in plain English and, when useful, Hindi/Hinglish.
- Clearly distinguish known facts from estimates, options, and conditions that require inspection.
- Provide named authors/reviewers only when real people are willing to stand behind the content.
- Keep meaningful content in crawlable HTML; do not hide it in images, tabs that never render, or interaction-only widgets.

### 11.3 Original information and corroboration

Create useful facts the site itself can stand behind:
- Real project case studies with permissioned photos, accurate scope, and honest descriptions.
- A transparent explanation of what a painting estimate includes and excludes.
- An updated cost guide based on real local quotations once the business has enough data to substantiate it.
- Actual service-process details and authentic FAQs derived from customer conversations.
- Technical paint guidance supported by current manufacturer documentation and other trustworthy references where factual claims need it.

Cite external sources when they support a technical claim, but do not sprinkle irrelevant citations on a sales page. References must be genuine, relevant, and kept current. Do not claim that the business or content is an “official source” without a factual basis.

### 11.4 Entity consistency

Keep the brand name, public phone number, service area, logo, website URL, and real social profiles consistent across the site, Google Business Profile, and legitimate listings. Only add `sameAs` links for verified profiles controlled by the business. Do not create fake social pages or multiple identities to manipulate entity understanding.

### 11.5 AI citation monitoring

- Establish a baseline after the domain is live and indexed.
- Periodically test a fixed set of natural queries in Google AI features, ChatGPT Search, and Microsoft Copilot, such as “how do I choose a home painter in Lucknow?”, “what changes house painting cost in Lucknow?”, and other relevant customer questions.
- Record whether Lucknow PaintCare is cited, which URL is cited, the query/date, the context, and whether the citation is accurate. Do not treat anecdotal tests as complete performance measurement because results can vary by location and query.
- Use Bing Webmaster Tools AI Performance reporting when it is available to the verified property. It can surface supported AI citation activity and grounding queries; availability/reporting scope can change.
- Use Search Console for organic search performance and Google's available reporting for AI-related search features where shown; don't assume there is a standalone report for every AI interaction.
- Improve pages based on missing information, unclear content, crawl problems, weak original evidence, and actual lead performance—not solely whether one AI answer cites the site.

### 11.6 AI tactics explicitly prohibited

Do not add fake “AI citation schema,” invented `llms.txt` directives presented as a ranking requirement, repeated Q&A blocks written only for bots, hidden AI-only content, manipulated testimonials, fake expert bios, fake statistics, or claims that a special markup guarantees inclusion. A simple `llms.txt` may be considered as optional experimentation only if it serves a clear maintenance/discovery purpose, but it is not a substitute for SEO, crawl access, or useful content and must not be represented as required.

## 12. Educational content roadmap

Publish only when content can be accurate and useful. The following is a suggested sequence rather than a requirement to publish all articles immediately.

1. `house-painting-cost-lucknow` — What affects house painting cost in Lucknow?
2. `painting-quotation-checklist` — What should a home painting quotation include?
3. `fresh-paint-vs-repainting` — Fresh painting vs repainting: what changes?
4. `wall-preparation-before-painting` — Why wall preparation matters before painting
5. `interior-paint-finish-guide` — Choosing a practical interior paint finish for each room
6. `exterior-painting-preparation` — What to check before painting exterior walls
7. `painting-day-homeowner-checklist` — How to prepare your home before painters arrive
8. `paint-colour-selection-small-rooms` — Practical colour-selection considerations for small rooms
9. `apartment-painting-estimate-guide` — What information helps estimate apartment painting work?
10. Hindi/Hinglish guide version only if the business can maintain a quality translated experience.

Each article must solve one specific problem, link to relevant services naturally, avoid generic padding, and be checked for factual claims. Do not publish dozens of AI-generated articles in one batch. Update articles when information actually changes, not merely to reset a date.

## 13. Technical architecture and repository structure

### 13.1 Preferred implementation

Use semantic HTML, CSS, and lightweight vanilla JavaScript for version 1.0. A static, multi-page build is appropriate: the main goal is local lead generation, and the site does not need a complex frontend framework or a database to function. Do not add React, a backend, a CMS, a database, or a payment system unless there is a concrete requirement that justifies it.

Use components/partials or a lightweight static build process only if it materially reduces duplication while keeping every final page crawlable and easy to edit. Do not build a single-page app with client-only route content.

### 13.2 Suggested structure

```text
/
├── index.html
├── services/
│   ├── index.html
│   ├── interior-painting-lucknow/index.html
│   ├── exterior-painting-lucknow/index.html
│   └── repainting-lucknow/index.html
├── painting-cost-lucknow/index.html
├── projects/index.html
├── about/index.html
├── contact/index.html
├── faq/index.html
├── privacy-policy/index.html
├── areas/                       # Only pages approved for publication
├── guides/                      # Later, unique guides
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/                   # If self-hosted
├── src/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── pages.css
│   └── js/
│       ├── site-config.js
│       ├── navigation.js
│       ├── quote-form.js
│       ├── analytics.js
│       └── main.js
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.svg
├── README.md
└── 404.html
```

The exact architecture may differ, but do not scatter business contact details across HTML files. Use a consistent component/template approach where practical. If a build step is used, document how to build and deploy it.

### 13.3 Code quality

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer` as appropriate)
- Valid HTML and CSS; no runtime console errors
- Modular, documented JS with clear responsibilities
- No unnecessary packages or large animation libraries
- No inline event handlers mixed through the markup if maintainable event listeners can be used
- No exposed secret/API keys; this site should not require secrets for the WhatsApp flow
- Avoid loading remote scripts/fonts until their value and privacy/performance impact are considered
- Do not log personal contact data in the console
- Gracefully handle missing config and unsupported browser features

## 14. Performance, accessibility, and responsive requirements

### 14.1 Performance targets

Treat Core Web Vitals as targets to validate on real deployed pages:
- LCP: 2.5 seconds or less at the 75th percentile where enough field data exists
- INP: 200 milliseconds or less at the 75th percentile where enough field data exists
- CLS: 0.1 or less at the 75th percentile where enough field data exists

Implementation practices:
- Keep JS minimal and defer non-critical scripts
- Optimise the hero asset and avoid oversized images
- Use explicit image dimensions/aspect ratios
- Avoid layout-shifting embeds
- Limit third-party trackers
- Use local assets and caching headers where hosting permits
- Lazy-load below-the-fold images only
- Preload only genuinely critical resources

### 14.2 Responsive breakpoints

Use fluid design and content-driven breakpoints; a suggested baseline is:
- Mobile: below 640px
- Tablet/small laptop: 640–1023px
- Desktop: 1024px and above

Test at minimum 360px, 390px, 768px, 1024px, 1366px, and a large desktop width. Check long headings, menus, forms, gallery cards, and the sticky mobile CTA for overflow/overlap.

### 14.3 Accessibility

Target WCAG 2.2 AA practices where applicable:
- Keyboard-accessible navigation and controls
- Visible focus state
- Correct text/background contrast
- Proper form labels, errors, and instructions
- Accessible accordion/menu controls using semantic buttons, `aria-expanded`, and relationships when useful
- `alt` text for meaningful images
- Touch targets of comfortable size
- Skip-to-content link
- Avoid colour-only error/success communication
- Respect reduced-motion preference
- Test with keyboard-only navigation and a screen reader smoke test

## 15. Analytics, privacy, and consent

- Analytics IDs must be blank by default and configured centrally.
- If Google Analytics or advertising tags are enabled, document exactly what data is collected and implement an appropriate consent/privacy approach for the deployment and applicable requirements.
- Never send the user's name, telephone number, full message, or other personal form contents to analytics platforms.
- Do not fire a “lead submitted” event merely because a WhatsApp link was opened. Use distinct interaction events.
- Never use deceptive cookie banners or dark patterns.
- If analytics is not configured, the site should still work and build successfully.
- Privacy-policy wording must match actual technical behaviour, including third-party handoffs.

## 16. Security and reliability

- Use HTTPS in production.
- No passwords, private keys, or secret API keys are needed for the default architecture.
- Sanitize/encode untrusted data inserted into messages or page output.
- Ensure external links opened in a new tab use safe `rel` values where appropriate.
- Do not load arbitrary third-party scripts.
- Confirm all links work, no mixed content exists, and the website doesn't ship debug banners to production.
- Apply appropriate security headers at hosting level where feasible; document any hosting-specific settings rather than pretending source files alone control them.

## 17. Content style guide

Tone: warm, practical, clear, professional, locally relevant, and conversational. The business should sound like a helpful painting service, not a marketing agency or AI-generated landing page.

Do:
- Explain the work and process in plain language.
- Use short sections with descriptive headings.
- Explain uncertainty when a site inspection is needed.
- Use locally meaningful information only when true.
- Use British/Indian English conventions where natural (e.g. colour, labour).
- Refer to Lucknow naturally where relevant without repeating it in every sentence.
- Use “you” and “your home” in moderation.
- Provide practical details that help a customer compare quotations fairly.

Don't:
- Use empty phrases such as “revolutionary solutions”, “unlock your dream”, “transform your space like never before”, or “cutting-edge excellence”.
- Call the business “best”, “No. 1”, “top-rated”, or “most trusted” without independently verifiable support and a clear basis.
- Use fake urgency or fabricated discounts.
- State exact completion time, lifespan, warranty, or price without a basis.
- Claim to be an authorised dealer/partner of a paint manufacturer unless officially true.
- Write every page as the same paragraph with a different keyword.

## 18. Page-level SEO content checklist

Before publishing a page, verify:
- The page has one clear audience and search intent.
- Title, H1, intro, URL and internal links match the page purpose.
- Content includes useful details not copied from another page.
- All service claims and price statements are verified.
- Locality references reflect real service coverage.
- Main content is crawlable in HTML.
- Canonical URL is correct.
- Page is linked from a relevant parent page.
- Images are optimised and accurately described.
- Structured data, where applicable, matches visible content.
- Page has a relevant contact/estimate action.
- There are no placeholder values, fabricated reviews, broken links, or lorem ipsum.

## 19. Acceptance criteria / definition of done

The website is complete only when each applicable criterion passes.

### Visual and UX
- [ ] A complete, consistent brand identity is implemented.
- [ ] Pages do not look like a generic template; layouts have deliberate hierarchy and image art direction.
- [ ] Desktop, tablet, and mobile experiences are polished.
- [ ] Navigation works with mouse, keyboard, and touch.
- [ ] Mobile call/WhatsApp bar appears only when configured and does not obscure content.
- [ ] All pages have clear, relevant next steps.

### Content and honesty
- [ ] No lorem ipsum or unfinished dummy copy is present.
- [ ] No fake contact details, fake customer reviews, fake ratings, fake work examples, or unverified promises are included.
- [ ] Service pages only describe services the business will actually provide.
- [ ] Stock/illustrative imagery is not presented as completed company work.
- [ ] Domain, phone, WhatsApp, email, hours, address and analytics details are centralised in configuration.
- [ ] README clearly lists details still required from the owner.

### Leads and functionality
- [ ] Call links use valid `tel:` links when phone is configured.
- [ ] WhatsApp links use valid E.164 digits, encode message text, and work on mobile/desktop.
- [ ] Quote form validates required fields accessibly.
- [ ] User is informed accurately about the WhatsApp/email handoff.
- [ ] No personal lead data is sent to analytics.
- [ ] No broken CTA or fake “success” state is possible when a destination is missing.

### SEO and AI readiness
- [ ] Each important page has unique title, meta description, canonical, H1 and Open Graph data.
- [ ] Important copy is present in crawlable HTML.
- [ ] `robots.txt` permits intended search/AI crawlers, including `OAI-SearchBot` when desired.
- [ ] XML sitemap uses confirmed production URLs.
- [ ] No production page has accidental `noindex`.
- [ ] JSON-LD validates and uses only factual information.
- [ ] Internal links connect relevant pages; no important page is orphaned.
- [ ] Main images have dimensions, appropriate alt text, and efficient formats.
- [ ] README includes Search Console and Bing Webmaster Tools setup steps.
- [ ] No mass-generated near-duplicate locality pages exist.

### Technical quality
- [ ] No console errors or broken assets during normal use.
- [ ] Real 404 page exists.
- [ ] Layout tested at all defined widths.
- [ ] Forms, navigation, accordions and CTAs tested.
- [ ] Lighthouse/PageSpeed check performed, issues documented, and obvious blockers fixed.
- [ ] Keyboard accessibility smoke test completed.
- [ ] Build/deployment instructions in README are accurate.

## 20. Launch checklist

Before production launch, the owner/developer must:

1. Confirm the domain has been purchased and set `siteUrl` to the canonical HTTPS URL.
2. Add the real phone/WhatsApp details, public email (if used), business hours, and service areas.
3. Confirm whether there is a public customer-facing address or a service-area-only operating model; never display a private address without a valid reason and owner approval.
4. Confirm which optional services are genuinely offered.
5. Replace illustrative images with authorised real work photos where possible.
6. Review and approve all content, prices, service claims, and privacy language.
7. Configure Search Console and submit the XML sitemap.
8. Configure Bing Webmaster Tools and check crawl access/AI Performance availability.
9. Check Google Business Profile eligibility, ownership, categories, service area, and details for consistency.
10. Verify mobile call/WhatsApp actions on real devices.
11. Ensure production robots/canonical/sitemap values use the confirmed domain and staging is not accidentally indexable.
12. Run structured-data validation, URL inspection, a mobile usability smoke test, and PageSpeed checks.
13. Test events without sending personal information to analytics.
14. Perform a final search for placeholder values such as `TODO`, `YOUR_PHONE`, `example.com`, empty hrefs, lorem ipsum, and unconfirmed claims.

## 21. Implementation sequence

Build in this order:

1. Establish site configuration, design tokens, semantic base styles, shared header/footer/buttons/forms, and asset conventions.
2. Build homepage and core service pages with complete content and local conversion actions.
3. Build cost guide, projects, about, contact, FAQ, privacy, and 404 pages.
4. Implement quote-to-WhatsApp flow and form validation.
5. Add metadata, canonicals, sitemap, robots.txt, and structured data.
6. Add analytics hooks that remain inactive when IDs are absent.
7. Run responsive, accessibility, link, SEO, and performance checks.
8. Write README with setup, build/deploy, central configuration, content editing, domain launch, local SEO, and AI-citation monitoring instructions.
9. Return a build summary and explicitly report any unconfigured information; do not quietly fill gaps with guesses.

## 22. Official technical references for implementation

Use current official documentation during implementation; rules and interfaces may evolve:

- Google Search Central — SEO documentation: https://developers.google.com/search/docs
- Google Search Central — SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central — AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central — Optimizing for generative AI features: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central — Local Business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central — Spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- OpenAI Help Center — ChatGPT Search / website availability: https://help.openai.com/en/articles/9237897-chatgpt-search
- Bing Webmaster Tools — AI Performance: https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c

Follow official guidance as the source of truth. Do not treat the presence of AI features as a reason to abandon traditional SEO fundamentals.

---

## Final instruction to Antigravity

**Implement the website, don't just describe how you would implement it.** Use the visual direction in this PRD to create a distinctive, polished result. Every important page must be real and navigable. Keep claims honest, forms functional, source code understandable, and business details configurable. Put local lead generation, user trust, crawlability, page speed, accessibility, and durable SEO foundations ahead of decorative effects. After implementation, provide a concise summary of completed work, testing performed, file structure, and exact owner details still needed before launch.
