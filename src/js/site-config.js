/**
 * Lucknow PaintCare Central Configuration
 * Source of truth for business contact, domain, service coverage, and analytics.
 * (PRD Section 2.3 & Section 15)
 */

export const siteConfig = {
  brandName: "Lucknow PaintCare",
  tagline: "A Better Finish for Every Home.",
  siteUrl: "", // Set to confirmed production domain (e.g. "https://lucknowpaintcare.in") before launch
  locale: "en-IN",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  phoneDisplay: "", // Set by owner before launch (e.g. "+91 98765 43210")
  phoneE164: "",    // Digits only with country code (e.g. "919876543210")
  whatsappE164: "", // Digits only with country code (e.g. "919876543210")
  email: "",        // Set by owner before launch
  streetAddress: "", // Keep empty if operating as a mobile service-area business
  postalCode: "",
  showStreetAddress: false,
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
    ga4MeasurementId: "",          // e.g. "G-XXXXXXXXXX"
    googleAdsConversionId: "",     // e.g. "AW-XXXXXXXXXX"
    googleAdsConversionLabel: ""
  },
  // Set to true before deploying live. When false, developer setup notices appear if numbers are blank.
  productionMode: false
};
