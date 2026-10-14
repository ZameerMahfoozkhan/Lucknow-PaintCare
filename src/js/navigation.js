/**
 * Lucknow PaintCare Navigation & Header Controller
 * Handles mobile drawer, sticky header, dynamic contact hooks, and responsive UX.
 */

import { siteConfig } from './site-config.js';
import { analytics } from './analytics.js';

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');

  // Sticky header on scroll
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile drawer controls
  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const firstFocusable = drawer.querySelector('a, button');
    if (firstFocusable) firstFocusable.focus();
  };

  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
    document.body.style.overflow = '';
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer && drawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Active navigation link highlighting
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.replace(/\/$/, '') || '/';
    if (cleanHref === currentPath || (cleanHref !== '/' && currentPath.startsWith(cleanHref))) {
      link.classList.add('active');
    }
  });

  // Wire up dynamic contact hooks across header, footer & mobile bar
  updateContactLinks();
}

/**
 * Updates all call & WhatsApp buttons from central siteConfig
 */
export function updateContactLinks() {
  const hasPhone = Boolean(siteConfig.phoneE164);
  const hasWhatsapp = Boolean(siteConfig.whatsappE164);
  const hasEmail = Boolean(siteConfig.email);

  // Phone Call buttons
  document.querySelectorAll('[data-action="call"]').forEach((btn) => {
    if (hasPhone) {
      btn.href = `tel:+${siteConfig.phoneE164}`;
      const textSpan = btn.querySelector('.btn-text');
      if (textSpan && siteConfig.phoneDisplay && !btn.classList.contains('mobile-cta-btn')) {
        textSpan.textContent = siteConfig.phoneDisplay;
      }
      btn.addEventListener('click', () => {
        analytics.track('click_to_call', { cta_location: btn.dataset.location || 'site' });
      });
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showContactNotice('phone');
      });
    }
  });

  // WhatsApp buttons
  document.querySelectorAll('[data-action="whatsapp"]').forEach((btn) => {
    if (hasWhatsapp) {
      const defaultText = encodeURIComponent(
        `Hello Lucknow PaintCare, I would like to enquire about home painting services in Lucknow.`
      );
      btn.href = `https://wa.me/${siteConfig.whatsappE164}?text=${defaultText}`;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.addEventListener('click', () => {
        analytics.track('click_whatsapp', { cta_location: btn.dataset.location || 'site' });
      });
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showContactNotice('whatsapp');
      });
    }
  });

  // Email links
  document.querySelectorAll('[data-action="email"]').forEach((btn) => {
    if (hasEmail) {
      btn.href = `mailto:${siteConfig.email}`;
      const textSpan = btn.querySelector('.btn-text');
      if (textSpan) {
        textSpan.textContent = siteConfig.email;
      }
      btn.addEventListener('click', () => {
        analytics.track('click_email', { cta_location: btn.dataset.location || 'site' });
      });
    }
  });

  // Phone display elements
  document.querySelectorAll('[data-contact="phone-display"]').forEach((el) => {
    if (siteConfig.phoneDisplay) {
      el.textContent = siteConfig.phoneDisplay;
    }
  });

  // Email display elements
  document.querySelectorAll('[data-contact="email-display"]').forEach((el) => {
    if (siteConfig.email) {
      el.textContent = siteConfig.email;
    }
  });

  // Postal code display elements
  document.querySelectorAll('[data-contact="postal-display"]').forEach((el) => {
    if (siteConfig.postalCode) {
      el.textContent = siteConfig.postalCode;
    }
  });

  // GSTIN display elements
  document.querySelectorAll('[data-contact="gstin-display"]').forEach((el) => {
    if (siteConfig.gstin) {
      el.textContent = siteConfig.gstin;
    }
  });

  // Legal name display elements
  document.querySelectorAll('[data-contact="legal-name-display"]').forEach((el) => {
    if (siteConfig.legalName) {
      el.textContent = siteConfig.legalName;
    }
  });

  // Trade name display elements
  document.querySelectorAll('[data-contact="trade-name-display"]').forEach((el) => {
    if (siteConfig.tradeName) {
      el.textContent = siteConfig.tradeName;
    }
  });

  // Address display elements
  document.querySelectorAll('[data-contact="address-display"]').forEach((el) => {
    if (siteConfig.streetAddress) {
      el.textContent = `${siteConfig.streetAddress}, ${siteConfig.city}, ${siteConfig.region} - ${siteConfig.postalCode}`;
    }
  });

  // Mobile CTA bar adjustment if channels are missing
  const mobileBar = document.querySelector('.mobile-cta-bar');
  if (mobileBar && !hasPhone && !hasWhatsapp && siteConfig.productionMode) {
    mobileBar.style.display = 'none';
  }
}

/**
 * Display graceful modal when action is clicked in dev/unconfigured state
 */
export function showContactNotice(channel) {
  let modal = document.getElementById('contact-fallback-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'contact-fallback-modal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h3 id="modal-title" style="margin-bottom: 0.5rem; color: var(--color-forest-deep);">Launch Configuration Notice</h3>
        <p id="modal-desc" style="font-size: var(--text-sm); margin-bottom: 1.25rem;">
          Business contact details are waiting to be configured in <code>src/js/site-config.js</code> prior to production release.
        </p>
        <div style="background-color: var(--color-sage); padding: 1rem; border-radius: var(--radius-sm); font-size: var(--text-xs); margin-bottom: 1.5rem;">
          <strong>Action Required:</strong> Add the confirmed business phone or WhatsApp number in <code>siteConfig.phoneE164</code> and <code>siteConfig.whatsappE164</code>.
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
          <a href="/contact/" class="btn btn-primary btn-sm">Go to Estimate Form</a>
          <button type="button" class="btn btn-ghost btn-sm" id="modal-close-btn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#modal-close-btn').addEventListener('click', () => {
      modal.classList.remove('is-open');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('is-open');
    });
  }

  const desc = modal.querySelector('#modal-desc');
  if (channel === 'whatsapp') {
    desc.textContent = "The official business WhatsApp number has not yet been confirmed in site-config.js. Please fill in our Estimate Form to summarize your painting requirements.";
  } else {
    desc.textContent = "The official business telephone number has not yet been confirmed in site-config.js. Please use our Estimate Form to send your project details.";
  }

  modal.classList.add('is-open');
}
