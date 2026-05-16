# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Performance Analysis Details
- Location: tests/e2e/extensions.spec.ts:30:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('performance-analysis-heading')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('performance-analysis-heading')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - generic [ref=e32]:
            - button "Configuration":
              - link "Configuration":
                - /url: /configuration/designs
                - generic:
                  - generic:
                    - img
                  - generic:
                    - generic: Configuration
          - button "meshery-button-2 Performance" [ref=e34] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e35]:
              - /url: /performance
              - generic [ref=e36]:
                - img "meshery-button-2" [ref=e38]
                - generic [ref=e64]: Performance
          - button "Extensions" [ref=e66] [cursor=pointer]:
            - link "Extensions" [active] [ref=e67]:
              - /url: /extensions
              - generic [ref=e68]:
                - img [ref=e70]
                - generic [ref=e97]: Extensions
          - separator [ref=e98]
        - generic [ref=e99]:
          - img [ref=e102] [cursor=pointer]
          - group [ref=e104]:
            - listitem [ref=e105]:
              - link [ref=e106] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e108]
            - listitem [ref=e110]:
              - link [ref=e111] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e113]
            - listitem [ref=e122]:
              - link [ref=e123] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e125]
            - listitem [ref=e127]:
              - link [ref=e128] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e130]
          - listitem [ref=e132]:
            - generic [ref=e133]:
              - text: v1.0.22
              - link [ref=e135] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e136]
              - text: Running latest
    - generic [ref=e138]:
      - banner [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e143]:
            - button [ref=e145] [cursor=pointer]:
              - img [ref=e146]
            - text: /
            - button [ref=e155] [cursor=pointer]:
              - img [ref=e156]
            - text: /
            - heading "Dashboard" [level=5] [ref=e160]
          - generic [ref=e162]:
            - button "contexts" [ref=e165] [cursor=pointer]:
              - generic [ref=e166]:
                - img [ref=e167]
                - generic [ref=e168]: "0"
            - button [ref=e171] [cursor=pointer]:
              - img [ref=e172]
            - button [ref=e179] [cursor=pointer]:
              - img [ref=e181]
            - button [ref=e184] [cursor=pointer]:
              - img [ref=e185]
      - generic [ref=e187]:
        - main [ref=e188]:
          - tablist [ref=e192]:
            - tab "Overview" [selected] [ref=e193] [cursor=pointer]:
              - img [ref=e194]
              - text: Overview
            - tab "Node" [ref=e219] [cursor=pointer]:
              - img [ref=e220]
              - text: Node
            - tab "Namespace" [ref=e226] [cursor=pointer]:
              - img [ref=e227]
              - text: Namespace
            - tab "Workload" [ref=e233] [cursor=pointer]:
              - img [ref=e234]
              - text: Workload
            - tab "Configuration" [ref=e240] [cursor=pointer]:
              - img [ref=e241]
              - text: Configuration
            - tab "Network" [ref=e247] [cursor=pointer]:
              - img [ref=e248]
              - text: Network
            - tab "Security" [ref=e254] [cursor=pointer]:
              - img [ref=e255]
              - text: Security
            - tab "Storage" [ref=e261] [cursor=pointer]:
              - img [ref=e262]
              - text: Storage
            - tab "CRDS" [ref=e268] [cursor=pointer]:
              - img [ref=e269]
              - text: CRDS
          - tabpanel [ref=e276]:
            - generic [ref=e279]:
              - generic [ref=e281]:
                - generic [ref=e283]:
                  - generic [ref=e284]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e285]
                    - generic [ref=e286]:
                      - generic [ref=e287]:
                        - combobox [ref=e288] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e289] [cursor=pointer]:
                        - img [ref=e291]
                  - list [ref=e293]:
                    - listitem:
                      - generic [ref=e296]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e297]
                    - listitem:
                      - generic [ref=e300]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e301]
                    - listitem:
                      - generic [ref=e304]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e305]
                    - listitem:
                      - generic [ref=e308]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e309]
                    - listitem:
                      - generic [ref=e312]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e313]
                    - listitem:
                      - generic [ref=e316]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e317]
                    - listitem:
                      - generic [ref=e320]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e321]
                    - listitem:
                      - generic [ref=e324]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e325]
                    - listitem:
                      - generic [ref=e328]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e329]
                    - listitem:
                      - generic [ref=e332]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e333]
                    - listitem:
                      - generic [ref=e336]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e337]
                    - listitem:
                      - generic [ref=e340]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e341]
                    - listitem:
                      - generic [ref=e344]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e345]
                    - listitem:
                      - generic [ref=e348]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e349]
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - img [ref=e354]
                    - heading "LATEST BLOGS" [level=6] [ref=e356]
                  - list [ref=e358]:
                    - listitem [ref=e359]:
                      - img [ref=e361]
                      - link "Meshery v1.0 is Generally Available" [ref=e370] [cursor=pointer]:
                        - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
                      - superscript [ref=e371]:
                        - img [ref=e372]
                    - listitem [ref=e374]:
                      - img [ref=e376]
                      - link "Mesheryctl Relationship Commands Promoted From Experimental" [ref=e385] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
                      - superscript [ref=e386]:
                        - img [ref=e387]
                    - listitem [ref=e389]:
                      - img [ref=e391]
                      - link "Meshery Workspaces" [ref=e400] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
                      - superscript [ref=e401]:
                        - img [ref=e402]
                    - listitem [ref=e404]:
                      - img [ref=e406]
                      - link "Certified Meshery Contributors Share Their Experiences" [ref=e415] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
                      - superscript [ref=e416]:
                        - img [ref=e417]
                    - listitem [ref=e419]:
                      - img [ref=e421]
                      - link "The Meshery Umbrella Expands" [ref=e430] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
                      - superscript [ref=e431]:
                        - img [ref=e432]
              - button "Edit" [ref=e434] [cursor=pointer]:
                - generic [ref=e435]: Edit
                - img [ref=e437]
        - contentinfo [ref=e439]:
          - paragraph [ref=e440]:
            - generic [ref=e441] [cursor=pointer]:
              - text: Built with
              - img [ref=e442]
              - text: by the Meshery Community
  - alert [ref=e445]
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
> 33 |     await expect(this.performanceHeading).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
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
  55 |     const href = await locator.getAttribute('href');
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