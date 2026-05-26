# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Adapter for Istio Section
- Location: tests/e2e/extensions.spec.ts:56:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByTestId('adapter-docs-istio')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e8] [cursor=pointer]:
          - img [ref=e9]
          - img [ref=e10]
        - list [ref=e11]:
          - button "Dashboard" [ref=e13] [cursor=pointer]:
            - link "Dashboard" [ref=e14]:
              - /url: /
              - generic [ref=e15]:
                - img [ref=e17]
                - generic [ref=e22]: Dashboard
          - button "Lifecycle" [ref=e24] [cursor=pointer]:
            - link "Lifecycle" [ref=e25]:
              - /url: /management/connections
              - generic [ref=e26]:
                - img [ref=e28]
                - generic [ref=e31]: Lifecycle
          - button "Configuration" [ref=e33] [cursor=pointer]:
            - link "Configuration" [ref=e34]:
              - /url: /configuration/designs
              - generic [ref=e35]:
                - img [ref=e37]
                - generic [ref=e42]: Configuration
          - button "meshery-button-2 Performance" [ref=e44] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e45]:
              - /url: /performance
              - generic [ref=e46]:
                - img "meshery-button-2" [ref=e48]
                - generic [ref=e74]: Performance
          - button "Extensions" [ref=e76] [cursor=pointer]:
            - link "Extensions" [ref=e77]:
              - /url: /extensions
              - generic [ref=e78]:
                - img [ref=e80]
                - generic [ref=e107]: Extensions
          - separator [ref=e108]
        - generic [ref=e109]:
          - img [ref=e112] [cursor=pointer]
          - group [ref=e114]:
            - listitem [ref=e115]:
              - link [ref=e116] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e118]
            - listitem [ref=e120]:
              - link [ref=e121] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e123]
            - listitem [ref=e132]:
              - link [ref=e133] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e135]
            - listitem [ref=e137]:
              - link [ref=e138] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e140]
          - listitem [ref=e142]:
            - generic [ref=e143]:
              - text: v1.0.29
              - link [ref=e145] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.29
                - img [ref=e146]
              - text: Running latest
    - generic [ref=e148]:
      - banner [ref=e149]:
        - generic [ref=e151]:
          - generic [ref=e153]:
            - button [ref=e155] [cursor=pointer]:
              - img [ref=e156]
            - text: /
            - button [ref=e165] [cursor=pointer]:
              - img [ref=e166]
            - text: /
            - heading "Extensions" [level=5] [ref=e170]
          - generic [ref=e172]:
            - button "contexts" [ref=e175] [cursor=pointer]:
              - generic [ref=e176]:
                - img [ref=e177]
                - generic [ref=e178]: "1"
            - button [ref=e181] [cursor=pointer]:
              - img [ref=e182]
            - button [ref=e189] [cursor=pointer]:
              - img [ref=e191]
            - button [ref=e194] [cursor=pointer]:
              - img [ref=e195]
      - generic [ref=e197]:
        - main [ref=e198]
        - contentinfo [ref=e199]:
          - paragraph [ref=e200]:
            - generic [ref=e201] [cursor=pointer]:
              - text: Built with
              - img [ref=e202]
              - text: by the Meshery Community
  - alert [ref=e205]
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
  42 |     await expect(this.extensionNavRegion).toBeVisible();
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
> 54 |     const href = await locator.getAttribute('href');
     |                                ^ Error: locator.getAttribute: Test timeout of 60000ms exceeded.
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