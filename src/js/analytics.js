/**
 * Lucknow PaintCare Analytics & Event Measurement
 * Handles conversion signals safely without recording PII.
 * (PRD Section 3.3, Section 15)
 */

import { siteConfig } from './site-config.js';

export const analytics = {
  initialized: false,

  init() {
    if (this.initialized) return;
    const { ga4MeasurementId, googleAdsConversionId } = siteConfig.analytics;

    if (!ga4MeasurementId && !googleAdsConversionId) {
      // In dev mode, log intent quietly
      if (!siteConfig.productionMode) {
        // Analytics disabled until measurement IDs are provided
      }
      return;
    }

    // Initialize dataLayer safely
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());

    if (ga4MeasurementId) {
      gtag('config', ga4MeasurementId, {
        anonymize_ip: true,
        restricted_data_processing: true
      });
      // Dynamically load tag
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`;
      document.head.appendChild(script);
    }

    if (googleAdsConversionId) {
      gtag('config', googleAdsConversionId);
    }

    this.initialized = true;
  },

  /**
   * Track high-intent conversion action
   * @param {string} eventName - e.g. 'click_to_call', 'click_whatsapp', 'quote_form_whatsapp_open'
   * @param {object} params - non-PII parameters only (e.g. { service_type: 'interior', location: 'Gomti Nagar' })
   */
  track(eventName, params = {}) {
    // Whitelist and filter: NEVER log personal info (name, phone, email, notes)
    const sanitizedParams = {};
    const safeKeys = ['service_type', 'property_type', 'locality', 'cta_location', 'page_path'];

    for (const key of safeKeys) {
      if (params[key]) {
        sanitizedParams[key] = String(params[key]).slice(0, 80);
      }
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, sanitizedParams);
    }

    // Custom browser event for extensibility
    try {
      window.dispatchEvent(new CustomEvent('paintcare_track', {
        detail: { event: eventName, ...sanitizedParams }
      }));
    } catch (e) {
      // ignore
    }
  }
};
