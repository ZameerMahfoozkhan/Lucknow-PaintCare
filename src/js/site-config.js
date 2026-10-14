/**
 * Lucknow PaintCare Central Configuration
 * Source of truth for business contact, domain, service coverage, and analytics.
 * (PRD Section 2.3 & Section 15)
 */

export const siteConfig = {
  brandName: "Lucknow PaintCare",
  legalName: "RAM PRASAD JAYASWAL",
  tradeName: "R J INTERIOR",
  constitution: "Proprietorship",
  gstin: "09CSUPJ6245A1ZI",
  pan: "CSUPJ6245A",
  registrationType: "Regular (Form GST REG-06)",
  registrationDate: "2024-05-31",
  tagline: "A Better Finish for Every Home.",
  siteUrl: "https://lucknow-paintcare.vercel.app",
  locale: "en-IN",
  city: "Lucknow",
  district: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  phoneDisplay: "+91 95806 59559",
  phoneE164: "919580659559",
  whatsappE164: "919580659559",
  email: "",
  buildingNo: "268/353KA/2",
  premisesBuilding: "SMT.PRABHAWATI",
  roadStreet: "DARU GODAM AISHBAGH",
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
    ga4MeasurementId: "",          // e.g. "G-XXXXXXXXXX"
    googleAdsConversionId: "",     // e.g. "AW-XXXXXXXXXX"
    googleAdsConversionLabel: ""
  },
  // Set to true before deploying live. When false, developer setup notices appear if numbers are blank.
  productionMode: true
};
