(function () {
  'use strict';

  const MESHERY_LOGO_URL =
    'https://raw.githubusercontent.com/meshery-extensions/qa/refs/heads/master/.github/assets/images/meshery/icon-only/meshery-light-icon.svg';
  const POWERED_BY_TEXT = 'Powered by Meshery Authors';
  const POWERED_BY_SELECTOR =
    'a[href="https://allurereport.org"], a[href="https://allurereport.org/"]';
  const SECTION_ICON_SELECTOR =
    'button, [role="button"], [role="menuitemcheckbox"], [role="menuitem"], [class*="menu-item"]';
  const OBSERVER_OPTIONS = { childList: true, subtree: true };

  function createMesheryLogo(className, size) {
    const logo = document.createElement('img');
    logo.className = className;
    logo.src = MESHERY_LOGO_URL;
    logo.alt = 'Meshery logo';
    logo.width = size;
    logo.height = size;
    return logo;
  }

  function createBrandingContent() {
    const wrapper = document.createElement('span');
    wrapper.className = 'meshery-powered-by';

    const text = document.createElement('span');
    text.className = 'meshery-powered-by__text';
    text.textContent = POWERED_BY_TEXT;

    wrapper.append(createMesheryLogo('meshery-powered-by__logo', 18), text);
    return wrapper;
  }

  function normalizeText(text) {
    return (text || '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function replaceElementWithLogo(element, className, size) {
    if (!element || element.dataset.mesheryLogo === 'true') {
      return false;
    }

    const logo = createMesheryLogo(className, size);
    logo.dataset.mesheryLogo = 'true';
    element.replaceWith(logo);
    return true;
  }

  function replacePoweredBy() {
    let changed = false;

    document.querySelectorAll(POWERED_BY_SELECTOR).forEach((anchor) => {
      if (anchor.dataset.mesheryPoweredBy === 'true') {
        return;
      }

      anchor.dataset.mesheryPoweredBy = 'true';
      anchor.href = 'https://meshery.io';
      anchor.target = '_blank';
      anchor.rel = 'noreferrer';
      anchor.classList.add('meshery-powered-by-link');
      anchor.replaceChildren(createBrandingContent());
      changed = true;
    });

    return changed;
  }

  function replaceLoaderLogo() {
    let changed = false;

    document.querySelectorAll('[data-testid="loader"] svg').forEach((icon) => {
      changed = replaceElementWithLogo(icon, 'meshery-loader-logo', 40) || changed;
    });

    return changed;
  }

  function replaceSectionPickerLogos() {
    let changed = false;

    document.querySelectorAll(SECTION_ICON_SELECTOR).forEach((element) => {
      if (normalizeText(element.textContent).includes('report')) {
        const icon = element.querySelector('svg');
        changed = replaceElementWithLogo(icon, 'meshery-section-logo', 14) || changed;
      }
    });

    return changed;
  }

  function applyBranding() {
    replacePoweredBy();
    replaceLoaderLogo();
    replaceSectionPickerLogos();
  }

  function observeBranding() {
    const observer = new MutationObserver(() => {
      applyBranding();
    });

    observer.observe(document.body, OBSERVER_OPTIONS);
    applyBranding();
  }

  if (document.body) {
    observeBranding();
  } else {
    window.addEventListener('DOMContentLoaded', observeBranding, { once: true });
  }
})();
