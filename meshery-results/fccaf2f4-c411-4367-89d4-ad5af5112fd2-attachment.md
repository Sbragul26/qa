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
          - generic [ref=e108]:
            - separator [ref=e109]
            - button "Kanvas" [ref=e111] [cursor=pointer]:
              - link "Kanvas" [ref=e112]:
                - /url: /extension/meshmap
                - generic [ref=e114]:
                  - img [ref=e116]
                  - generic [ref=e118]: Kanvas
          - separator [ref=e119]
        - generic [ref=e120]:
          - img [ref=e123] [cursor=pointer]
          - group [ref=e125]:
            - listitem [ref=e126]:
              - link [ref=e127] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e129]
            - listitem [ref=e131]:
              - link [ref=e132] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e134]
            - listitem [ref=e143]:
              - link [ref=e144] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e146]
            - listitem [ref=e148]:
              - link [ref=e149] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e151]
          - listitem [ref=e153]:
            - generic [ref=e154]:
              - text: v1.0.28
              - link [ref=e156] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.28
                - img [ref=e157]
              - text: Running latest
    - generic [ref=e159]:
      - banner [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - button [ref=e166] [cursor=pointer]:
              - img [ref=e167]
            - text: /
            - button [ref=e176] [cursor=pointer]:
              - img [ref=e177]
            - group [ref=e181]:
              - generic [ref=e186]:
                - combobox [ref=e187] [cursor=pointer]:
                  - generic [ref=e188]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Extensions" [level=5] [ref=e189]
          - generic [ref=e191]:
            - button "contexts" [ref=e194] [cursor=pointer]:
              - generic [ref=e195]:
                - img [ref=e196]
                - generic [ref=e197]: "6960"
            - button "99+" [ref=e200] [cursor=pointer]:
              - generic [ref=e201]:
                - img [ref=e202]
                - generic [ref=e205]: 99+
            - button [ref=e209] [cursor=pointer]:
              - img [ref=e211]
            - button [ref=e214] [cursor=pointer]:
              - img [ref=e215]
      - generic [ref=e217]:
        - main [ref=e218]
        - contentinfo [ref=e219]:
          - paragraph [ref=e220]:
            - generic [ref=e221] [cursor=pointer]:
              - text: Built with
              - img [ref=e222]
              - text: by the Meshery Community
  - alert [ref=e225]
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { DashboardPage } from './DashboardPage';
  3  | 
  4  | export class ExtensionsPage {
  5  |   constructor(page) {
  6  |     this.page = page;
  7  |     this.extensionNavRegion = page.getByTestId('extension-navigation-region');
  8  |     this.extensionRootNavItems = page.getByTestId('extension-nav-root-item');
  9  |     this.extensionRegionTopLevelLists = this.extensionNavRegion.locator(':scope > ul');
  10 | 
  11 |     this.performanceHeading = page.getByTestId('performance-analysis-heading');
  12 |     this.performanceEnableBtn = page.getByTestId('performance-analysis-enable-btn');
  13 | 
  14 |     this.dockerExtensionHeading = page.getByTestId('docker-extension-heading');
  15 |     this.dockerExtensionDownloadBtn = page.getByTestId('docker-extension-download-btn');
  16 | 
  17 |     this.designEmbedLearnMoreBtn = page.getByTestId('design-embed-learn-more-btn');
  18 | 
  19 |     this.catalogSectionHeading = page.getByTestId('catalog-section-heading');
  20 |     this.catalogToggleSwitch = page.getByTestId('catalog-toggle-switch');
  21 |     this.catalogLink = page.getByTestId('catalog-link');
  22 | 
  23 |     this.adapterDocsIstioLink = page.getByTestId('adapter-docs-istio');
  24 |   }
  25 | 
  26 |   async goto() {
  27 |     const dashboardPage = new DashboardPage(this.page);
  28 |     await dashboardPage.navigateToDashboard();
  29 |     await dashboardPage.navigateToExtensions();
  30 |   }
  31 | 
  32 |   async verifyPerformanceAnalysisDetails() {
  33 |     await expect(this.performanceHeading).toBeVisible();
  34 |     await expect(this.performanceEnableBtn).toBeVisible();
  35 |     await expect(this.performanceEnableBtn).toBeEnabled();
  36 |   }
  37 | 
  38 |   async toggleCatalog() {
  39 |     await this.catalogToggleSwitch.click();
  40 |   }
  41 | 
  42 |   async verifyExtensionNavItemsUseTopLevelLayout() {
  43 |     await expect(this.extensionNavRegion).toBeVisible();
  44 |     await expect(this.extensionRootNavItems.first()).toBeVisible();
  45 |     await expect(this.extensionRegionTopLevelLists).toHaveCount(0);
  46 |   }
  47 | 
  48 |   normalizeUrl(url) {
  49 |     const parsedUrl = new URL(url);
  50 |     const normalizedPath = parsedUrl.pathname.replace(/\/+$/, '') || '/';
  51 |     return `${parsedUrl.origin}${normalizedPath}${parsedUrl.search}${parsedUrl.hash}`;
  52 |   }
  53 | 
  54 |   async verifyNewTab(locator, expectedUrl) {
> 55 |     const href = await locator.getAttribute('href');
     |                                ^ Error: locator.getAttribute: Test timeout of 60000ms exceeded.
  56 | 
  57 |     if (href) {
  58 |       expect(href).not.toBe('');
  59 |       expect(this.normalizeUrl(href)).toBe(this.normalizeUrl(expectedUrl));
  60 |       return;
  61 |     }
  62 | 
  63 |     await this.page.evaluate(() => {
  64 |       window.__mesheryOpenedUrl = null;
  65 |       // Save original window.open so it can be restored after the check.
  66 |       window.__mesheryOriginalOpen = window.open;
  67 |       window.open = (...args) => {
  68 |         window.__mesheryOpenedUrl = args[0] ?? null;
  69 |         return null;
  70 |       };
  71 |     });
  72 | 
  73 |     await locator.click();
  74 | 
  75 |     try {
  76 |       await expect
  77 |         .poll(async () => {
  78 |           const openedUrl = await this.page.evaluate(() => window.__mesheryOpenedUrl);
  79 |           return openedUrl ? this.normalizeUrl(openedUrl) : null;
  80 |         })
  81 |         .toBe(this.normalizeUrl(expectedUrl));
  82 |     } finally {
  83 |       await this.page.evaluate(() => {
  84 |         if (window.__mesheryOriginalOpen) {
  85 |           window.open = window.__mesheryOriginalOpen;
  86 |           delete window.__mesheryOriginalOpen;
  87 |         }
  88 |       });
  89 |     }
  90 |   }
  91 | }
  92 | 
```