/**
 * Lucknow PaintCare Estimate Request & Lead Generator
 * Validates requirements, prevents spam via honeypot, formats WhatsApp message cleanly.
 * (PRD Section 9.1 - 9.3)
 */

import { siteConfig } from './site-config.js';
import { analytics } from './analytics.js';

export function initQuoteForms() {
  const forms = document.querySelectorAll('.quote-form');
  forms.forEach((form) => setupForm(form));
}

function setupForm(form) {
  let formStarted = false;

  // Track start event on first input
  form.addEventListener('focusin', () => {
    if (!formStarted) {
      formStarted = true;
      analytics.track('quote_form_start', {
        page_path: window.location.pathname
      });
    }
  }, { once: true });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit(form);
  });
}

function handleSubmit(form) {
  // Clear previous errors
  form.querySelectorAll('.form-error').forEach((el) => el.remove());
  form.querySelectorAll('[aria-invalid="true"]').forEach((el) => el.removeAttribute('aria-invalid'));

  // Honeypot spam check
  const hpInput = form.querySelector('input[name="website_source_hp"]');
  if (hpInput && hpInput.value.trim() !== '') {
    // Silent fail for bots
    form.reset();
    return;
  }

  // Extract fields
  const nameInput = form.querySelector('[name="name"]');
  const phoneInput = form.querySelector('[name="phone"]');
  const localityInput = form.querySelector('[name="locality"]');
  const serviceInput = form.querySelector('[name="service"]');
  const propertyInput = form.querySelector('[name="property_type"]');
  const sizeInput = form.querySelector('[name="size_bhk"]');
  const timelineInput = form.querySelector('[name="timeline"]');
  const notesInput = form.querySelector('[name="notes"]');

  let hasError = false;

  // Validation rules
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name || name.length < 2) {
    showError(nameInput, 'Please enter your name');
    hasError = true;
  }

  const phone = phoneInput ? phoneInput.value.trim().replace(/\D/g, '') : '';
  // Indian mobile: 10 digits (optionally prefixed by 91 or 0)
  const isValidPhone = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phone);
  if (!isValidPhone) {
    showError(phoneInput, 'Please enter a valid 10-digit mobile number');
    hasError = true;
  }

  const locality = localityInput ? localityInput.value.trim() : '';
  if (!locality || locality.length < 2) {
    showError(localityInput, 'Please enter your area or locality in Lucknow');
    hasError = true;
  }

  const service = serviceInput ? serviceInput.value : '';
  if (!service) {
    showError(serviceInput, 'Please select the service required');
    hasError = true;
  }

  if (hasError) return;

  const propertyType = propertyInput ? propertyInput.value : 'Not specified';
  const sizeBhk = sizeInput ? sizeInput.value : 'Not specified';
  const timeline = timelineInput ? timelineInput.value : 'Flexible';
  const notes = notesInput ? notesInput.value.trim().slice(0, 300) : 'None';

  // Track submission (No PII)
  analytics.track('quote_form_submit', {
    service_type: service,
    locality: locality,
    property_type: propertyType
  });

  // Construct structured WhatsApp message (PRD Section 9.2)
  const messageLines = [
    `*Hello Lucknow PaintCare*, I would like an estimate for painting work:`,
    ``,
    `• *Name:* ${name}`,
    `• *Phone:* ${phone}`,
    `• *Locality in Lucknow:* ${locality}`,
    `• *Service:* ${service}`,
    `• *Property Type:* ${propertyType}`,
    `• *Property Size:* ${sizeBhk}`,
    `• *Preferred Start:* ${timeline}`,
    notes !== 'None' ? `• *Details / Wall Condition:* ${notes}` : null,
    ``,
    `Please share details about your process, quotation and next available site visit.`
  ].filter(Boolean);

  const rawMessage = messageLines.join('\n');
  const encodedMessage = encodeURIComponent(rawMessage);

  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Preparing WhatsApp...';
  }

  if (siteConfig.whatsappE164) {
    analytics.track('quote_form_whatsapp_open', {
      service_type: service,
      locality: locality
    });

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappE164}?text=${encodedMessage}`;
    
    // Honest feedback container
    renderSuccessMessage(form, rawMessage, whatsappUrl);
  } else {
    // WhatsApp destination awaiting configuration in dev mode
    renderDevMessage(form, rawMessage);
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Continue to WhatsApp with Details';
  }
}

function showError(input, message) {
  if (!input) return;
  input.setAttribute('aria-invalid', 'true');
  const error = document.createElement('span');
  error.className = 'form-error';
  error.textContent = message;
  input.parentNode.appendChild(error);
  input.focus();
}

function renderSuccessMessage(form, rawMessage, whatsappUrl) {
  const container = document.createElement('div');
  container.className = 'notice-box';
  container.style.marginTop = '1.5rem';
  container.innerHTML = `
    <h4 style="color: var(--color-success); display: flex; align-items: center; gap: 0.5rem;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      Ready to send via WhatsApp
    </h4>
    <p style="font-size: var(--text-sm); margin-bottom: 1rem;">
      Your project details are prepared. Click the button below to review and send them directly to Lucknow PaintCare on WhatsApp:
    </p>
    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-block" style="margin-bottom: 0.75rem;">
      Open WhatsApp to Send Details
    </a>
    <p class="subtle" style="font-size: var(--text-xs); margin: 0;">
      <em>Note: Your message is prefilled. You can review or edit any details before hitting send in WhatsApp.</em>
    </p>
  `;

  // Insert above or below form
  form.innerHTML = '';
  form.appendChild(container);
}

function renderDevMessage(form, rawMessage) {
  const container = document.createElement('div');
  container.className = 'notice-box notice-warning';
  container.style.marginTop = '1.5rem';
  container.innerHTML = `
    <h4 style="color: #92400E;">Estimate Details Formatted Successfully</h4>
    <p style="font-size: var(--text-sm); margin-bottom: 0.75rem;">
      <strong>Owner Notice:</strong> Configure <code>siteConfig.whatsappE164</code> in <code>src/js/site-config.js</code> to enable one-click WhatsApp redirection.
    </p>
    <div style="background: #FFF; padding: 1rem; border: 1px solid var(--color-stone); border-radius: var(--radius-sm); font-family: monospace; font-size: 0.82rem; white-space: pre-wrap; margin-bottom: 1rem;">${rawMessage}</div>
    <button type="button" class="btn btn-primary btn-sm" id="copy-summary-btn">Copy Details to Clipboard</button>
  `;

  form.innerHTML = '';
  form.appendChild(container);

  container.querySelector('#copy-summary-btn').addEventListener('click', (e) => {
    navigator.clipboard.writeText(rawMessage).then(() => {
      e.target.textContent = 'Copied to Clipboard!';
      setTimeout(() => { e.target.textContent = 'Copy Details to Clipboard'; }, 2500);
    });
  });
}
