/**
 * R J INTERIOR Main Entrypoint
 * Orchestrates modules, injects configuration values, and handles UI events.
 */

import { siteConfig } from './site-config.js';
import { analytics } from './analytics.js';
import { initNavigation } from './navigation.js';
import { initQuoteForms } from './quote-form.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Analytics (handles missing IDs safely)
  analytics.init();

  // 2. Initialize Navigation & dynamic contact links
  initNavigation();

  // 3. Initialize Quote & Estimate forms
  initQuoteForms();

  // 4. Dynamic copyright year
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = currentYear;
  });

  // 5. In development mode, display helpful owner reminder banner if numbers aren't set
  if (!siteConfig.productionMode && (!siteConfig.phoneE164 || !siteConfig.whatsappE164)) {
    renderDevRibbon();
  }
});

function renderDevRibbon() {
  const existing = document.querySelector('.dev-banner');
  if (existing) return;

  const banner = document.createElement('div');
  banner.className = 'dev-banner';
  banner.setAttribute('role', 'status');
  banner.innerHTML = `
    <div>
      <strong>Pre-Launch Notice:</strong> Contact numbers are awaiting entry in <code>src/js/site-config.js</code>. Forms currently format messages in safe preview mode.
    </div>
    <button type="button" class="dev-banner-btn" aria-label="Dismiss banner">&times;</button>
  `;

  document.body.prepend(banner);

  banner.querySelector('.dev-banner-btn').addEventListener('click', () => {
    banner.remove();
  });
}
