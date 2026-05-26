# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify extension nav items use top-level layout
- Location: tests/e2e/extensions.spec.ts:26:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('extension-navigation-region')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('extension-navigation-region')

```

```yaml
- navigation:
  - img
  - img
  - list:
    - button "Dashboard":
      - link "Dashboard":
        - /url: /
        - img
        - text: Dashboard
    - button "Lifecycle":
      - link "Lifecycle":
        - /url: /management/connections
        - img
        - text: Lifecycle
    - button "Configuration":
      - link "Configuration":
        - /url: /configuration/designs
        - img
        - text: Configuration
    - button "meshery-button-2 Performance":
      - link "meshery-button-2 Performance":
        - /url: /performance
        - img "meshery-button-2"
        - text: Performance
    - button "Extensions":
      - link "Extensions":
        - /url: /extensions
        - img
        - text: Extensions
    - separator
  - img
  - group:
    - listitem:
      - link:
        - /url: https://docs.meshery.io
        - img
    - listitem:
      - link:
        - /url: https://slack.meshery.io
        - img
    - listitem:
      - link:
        - /url: https://meshery.io/community#community-forums
        - img
    - listitem:
      - link:
        - /url: https://github.com/meshery/meshery/issues/new/choose
        - img
  - listitem:
    - text: v1.0.29
    - link:
      - /url: https://docs.meshery.io/project/releases/v1.0.29
      - img
    - text: Running latest
- banner:
  - button:
    - img
  - text: /
  - button:
    - img
  - text: /
  - heading "Extensions" [level=5]
  - button "contexts":
    - img
    - text: "1"
  - button:
    - img
  - button
  - button:
    - img
- main
- contentinfo:
  - paragraph:
    - text: Built with
    - img
    - text: by the Meshery Community
- alert
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | export class ExtensionsPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.extensionNavRegion = page.getByTestId('extension-navigation-region');
  7  |     this.extensionRootNavItems = page.getByTestId('extension-nav-root-item');
  8  |     this.extensionRegionTopLevelLists = this.extensionNavRegion.locator(':scope > ul');
  9  | 
  10 |     this.performanceHeading = page.getByTestId('performance-analysis-heading');
  11 |     this.performanceEnableBtn = page.getByTestId('performance-analysis-enable-btn');
  12 | 
  13 |     this.dockerExtensionHeading = page.getByTestId('docker-extension-heading');
  14 |     this.dockerExtensionDownloadBtn = page.getByTestId('docker-extension-download-btn');
  15 | 
  16 |     this.designEmbedLearnMoreBtn = page.getByTestId('design-embed-learn-more-btn');
  17 | 
  18 |     this.catalogSectionHeading = page.getByTestId('catalog-section-heading');
  19 |     this.catalogToggleSwitch = page.getByTestId('catalog-toggle-switch');
  20 |     this.catalogLink = page.getByTestId('catalog-link');
  21 | 
  22 |     this.adapterDocsIstioLink = page.getByTestId('adapter-docs-istio');
  23 |   }
  24 | 
  25 |   async goto() {
  26 |     await this.page.goto('/extensions', { waitUntil: 'domcontentloaded' });
  27 |     await this.page.waitForURL(/\/extensions/);
  28 |     await this.page.waitForLoadState('networkidle');
  29 |   }
  30 | 
  31 |   async verifyPerformanceAnalysisDetails() {
  32 |     await expect(this.performanceHeading).toBeVisible();
  33 |     await expect(this.performanceEnableBtn).toBeVisible();
  34 |     await expect(this.performanceEnableBtn).toBeEnabled();
  35 |   }
  36 | 
  37 |   async toggleCatalog() {
  38 |     await this.catalogToggleSwitch.click();
  39 |   }
  40 | 
  41 |   async verifyExtensionNavItemsUseTopLevelLayout() {
> 42 |     await expect(this.extensionNavRegion).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  43 |     await expect(this.extensionRootNavItems.first()).toBeVisible();
  44 |     await expect(this.extensionRegionTopLevelLists).toHaveCount(0);
  45 |   }
  46 | 
  47 |   normalizeUrl(url) {
  48 |     const parsedUrl = new URL(url);
  49 |     const normalizedPath = parsedUrl.pathname.replace(/\/+$/, '') || '/';
  50 |     return `${parsedUrl.origin}${normalizedPath}${parsedUrl.search}${parsedUrl.hash}`;
  51 |   }
  52 | 
  53 |   async verifyNewTab(locator, expectedUrl) {
  54 |     const href = await locator.getAttribute('href');
  55 | 
  56 |     if (href) {
  57 |       expect(href).not.toBe('');
  58 |       expect(this.normalizeUrl(href)).toBe(this.normalizeUrl(expectedUrl));
  59 |       return;
  60 |     }
  61 | 
  62 |     await this.page.evaluate(() => {
  63 |       window.__mesheryOpenedUrl = null;
  64 |       // Save original window.open so it can be restored after the check.
  65 |       window.__mesheryOriginalOpen = window.open;
  66 |       window.open = (...args) => {
  67 |         window.__mesheryOpenedUrl = args[0] ?? null;
  68 |         return null;
  69 |       };
  70 |     });
  71 | 
  72 |     await locator.click();
  73 | 
  74 |     try {
  75 |       await expect
  76 |         .poll(async () => {
  77 |           const openedUrl = await this.page.evaluate(() => window.__mesheryOpenedUrl);
  78 |           return openedUrl ? this.normalizeUrl(openedUrl) : null;
  79 |         })
  80 |         .toBe(this.normalizeUrl(expectedUrl));
  81 |     } finally {
  82 |       await this.page.evaluate(() => {
  83 |         if (window.__mesheryOriginalOpen) {
  84 |           window.open = window.__mesheryOriginalOpen;
  85 |           delete window.__mesheryOriginalOpen;
  86 |         }
  87 |       });
  88 |     }
  89 |   }
  90 | }
  91 | 
```