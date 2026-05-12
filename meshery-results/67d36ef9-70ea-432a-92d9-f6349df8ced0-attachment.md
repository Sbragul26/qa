# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify extension nav items use top-level layout
- Location: tests/e2e/extensions.spec.ts:30:7

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
            - link "Extensions" [active] [ref=e77]:
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
              - text: v1.0.20
              - link [ref=e145] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.20
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
            - heading "Dashboard" [level=5] [ref=e170]
          - generic [ref=e172]:
            - button "contexts" [ref=e175] [cursor=pointer]:
              - generic [ref=e176]:
                - img [ref=e177]
                - generic [ref=e178]: "0"
            - button [ref=e181] [cursor=pointer]:
              - img [ref=e182]
            - button [ref=e189] [cursor=pointer]:
              - img [ref=e191]
            - button [ref=e194] [cursor=pointer]:
              - img [ref=e195]
      - generic [ref=e197]:
        - main [ref=e198]:
          - tablist [ref=e202]:
            - tab "Overview" [selected] [ref=e203] [cursor=pointer]:
              - img [ref=e204]
              - text: Overview
            - tab "Node" [ref=e229] [cursor=pointer]:
              - img [ref=e230]
              - text: Node
            - tab "Namespace" [ref=e236] [cursor=pointer]:
              - img [ref=e237]
              - text: Namespace
            - tab "Workload" [ref=e243] [cursor=pointer]:
              - img [ref=e244]
              - text: Workload
            - tab "Configuration" [ref=e250] [cursor=pointer]:
              - img [ref=e251]
              - text: Configuration
            - tab "Network" [ref=e257] [cursor=pointer]:
              - img [ref=e258]
              - text: Network
            - tab "Security" [ref=e264] [cursor=pointer]:
              - img [ref=e265]
              - text: Security
            - tab "Storage" [ref=e271] [cursor=pointer]:
              - img [ref=e272]
              - text: Storage
            - tab "CRDS" [ref=e278] [cursor=pointer]:
              - img [ref=e279]
              - text: CRDS
          - tabpanel [ref=e286]:
            - generic [ref=e289]:
              - generic [ref=e291]:
                - generic [ref=e293]:
                  - generic [ref=e294]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e295]
                    - generic [ref=e296]:
                      - generic [ref=e297]:
                        - combobox [ref=e298] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e299] [cursor=pointer]:
                        - img [ref=e300]
                  - list [ref=e302]:
                    - listitem:
                      - generic [ref=e305]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e306]
                    - listitem:
                      - generic [ref=e309]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e310]
                    - listitem:
                      - generic [ref=e313]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e314]
                    - listitem:
                      - generic [ref=e317]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e318]
                    - listitem:
                      - generic [ref=e321]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e322]
                    - listitem:
                      - generic [ref=e325]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e326]
                    - listitem:
                      - generic [ref=e329]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e330]
                    - listitem:
                      - generic [ref=e333]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e334]
                    - listitem:
                      - generic [ref=e337]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e338]
                    - listitem:
                      - generic [ref=e341]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e342]
                    - listitem:
                      - generic [ref=e345]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e346]
                    - listitem:
                      - generic [ref=e349]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e350]
                    - listitem:
                      - generic [ref=e353]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e354]
                    - listitem:
                      - generic [ref=e357]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e358]
                - generic [ref=e361]:
                  - generic [ref=e362]:
                    - img [ref=e363]
                    - heading "LATEST BLOGS" [level=6] [ref=e365]
                  - list [ref=e367]:
                    - listitem [ref=e368]:
                      - img [ref=e370]
                      - link "Meshery v1.0 is Generally Available" [ref=e379] [cursor=pointer]:
                        - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
                      - superscript [ref=e380]:
                        - img [ref=e381]
                    - listitem [ref=e383]:
                      - img [ref=e385]
                      - link "Mesheryctl Relationship Commands Promoted From Experimental" [ref=e394] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
                      - superscript [ref=e395]:
                        - img [ref=e396]
                    - listitem [ref=e398]:
                      - img [ref=e400]
                      - link "Meshery Workspaces" [ref=e409] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
                      - superscript [ref=e410]:
                        - img [ref=e411]
                    - listitem [ref=e413]:
                      - img [ref=e415]
                      - link "Certified Meshery Contributors Share Their Experiences" [ref=e424] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
                      - superscript [ref=e425]:
                        - img [ref=e426]
                    - listitem [ref=e428]:
                      - img [ref=e430]
                      - link "The Meshery Umbrella Expands" [ref=e439] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
                      - superscript [ref=e440]:
                        - img [ref=e441]
              - button "Edit" [ref=e443] [cursor=pointer]:
                - generic [ref=e444]: Edit
                - img [ref=e446]
        - contentinfo [ref=e448]:
          - paragraph [ref=e449]:
            - generic [ref=e450] [cursor=pointer]:
              - text: Built with
              - img [ref=e451]
              - text: by the Meshery Community
  - alert [ref=e454]
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | import { DashboardPage } from './DashboardPage';
  3   | 
  4   | export class ExtensionsPage {
  5   |   constructor(page) {
  6   |     this.page = page;
  7   |     this.extensionNavRegion = page.getByTestId('extension-navigation-region');
  8   |     this.extensionRootNavItems = page.getByTestId('extension-nav-root-item');
  9   |     this.extensionRegionTopLevelLists = this.extensionNavRegion.locator(':scope > ul');
  10  | 
  11  |     this.kanvasSnapshotHeading = page.getByTestId('kanvas-snapshot-heading');
  12  |     this.kanvasSnapshotDescription = page.getByTestId('kanvas-snapshot-description');
  13  |     this.kanvasSnapshotEnableBtn = page.getByTestId('kanvas-snapshot-enable-btn');
  14  |     this.kanvasSnapshotImage = page.getByTestId('kanvas-snapshot-image');
  15  | 
  16  |     this.performanceHeading = page.getByTestId('performance-analysis-heading');
  17  |     this.performanceEnableBtn = page.getByTestId('performance-analysis-enable-btn');
  18  | 
  19  |     this.kanvasSignupHeading = page.getByTestId('kanvas-signup-heading');
  20  |     this.kanvasSignupBtn = page.getByTestId('kanvas-signup-btn');
  21  | 
  22  |     this.dockerExtensionHeading = page.getByTestId('docker-extension-heading');
  23  |     this.dockerExtensionDownloadBtn = page.getByTestId('docker-extension-download-btn');
  24  | 
  25  |     this.designEmbedLearnMoreBtn = page.getByTestId('design-embed-learn-more-btn');
  26  | 
  27  |     this.catalogSectionHeading = page.getByTestId('catalog-section-heading');
  28  |     this.catalogToggleSwitch = page.getByTestId('catalog-toggle-switch');
  29  |     this.catalogLink = page.getByTestId('catalog-link');
  30  | 
  31  |     this.adapterDocsIstioLink = page.getByTestId('adapter-docs-istio');
  32  |   }
  33  | 
  34  |   async goto() {
  35  |     const dashboardPage = new DashboardPage(this.page);
  36  |     await dashboardPage.navigateToDashboard();
  37  |     await dashboardPage.navigateToExtensions();
  38  |   }
  39  | 
  40  |   async verifyKanvasSnapshotDetails() {
  41  |     await expect(this.kanvasSnapshotHeading).toBeVisible();
  42  |     await expect(this.kanvasSnapshotDescription).toBeVisible();
  43  |     await expect(this.kanvasSnapshotEnableBtn).toBeVisible();
  44  |     await expect(this.kanvasSnapshotEnableBtn).toBeEnabled();
  45  |     await expect(this.kanvasSnapshotImage).toBeVisible();
  46  |   }
  47  | 
  48  |   async verifyPerformanceAnalysisDetails() {
  49  |     await expect(this.performanceHeading).toBeVisible();
  50  |     await expect(this.performanceEnableBtn).toBeVisible();
  51  |     await expect(this.performanceEnableBtn).toBeEnabled();
  52  |   }
  53  | 
  54  |   async verifyKanvasSignupUI() {
  55  |     await expect(this.kanvasSignupHeading).toBeVisible();
  56  |     await expect(this.kanvasSignupBtn).toBeVisible();
  57  |   }
  58  | 
  59  |   async hasKanvasAccess() {
  60  |     const btnText = await this.kanvasSignupBtn.textContent();
  61  |     return btnText?.trim() === 'Enabled';
  62  |   }
  63  | 
  64  |   async toggleCatalog() {
  65  |     await this.catalogToggleSwitch.click();
  66  |   }
  67  | 
  68  |   async verifyExtensionNavItemsUseTopLevelLayout() {
> 69  |     await expect(this.extensionNavRegion).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  70  |     await expect(this.extensionRootNavItems.first()).toBeVisible();
  71  |     await expect(this.extensionRegionTopLevelLists).toHaveCount(0);
  72  |   }
  73  | 
  74  |   normalizeUrl(url) {
  75  |     const parsedUrl = new URL(url);
  76  |     const normalizedPath = parsedUrl.pathname.replace(/\/+$/, '') || '/';
  77  |     return `${parsedUrl.origin}${normalizedPath}${parsedUrl.search}${parsedUrl.hash}`;
  78  |   }
  79  | 
  80  |   async verifyNewTab(locator, expectedUrl) {
  81  |     const href = await locator.getAttribute('href');
  82  | 
  83  |     if (href) {
  84  |       expect(href).not.toBe('');
  85  |       expect(this.normalizeUrl(href)).toBe(this.normalizeUrl(expectedUrl));
  86  |       return;
  87  |     }
  88  | 
  89  |     await this.page.evaluate(() => {
  90  |       window.__mesheryOpenedUrl = null;
  91  |       // Save original window.open so it can be restored after the check.
  92  |       window.__mesheryOriginalOpen = window.open;
  93  |       window.open = (...args) => {
  94  |         window.__mesheryOpenedUrl = args[0] ?? null;
  95  |         return null;
  96  |       };
  97  |     });
  98  | 
  99  |     await locator.click();
  100 | 
  101 |     try {
  102 |       await expect
  103 |         .poll(async () => {
  104 |           const openedUrl = await this.page.evaluate(() => window.__mesheryOpenedUrl);
  105 |           return openedUrl ? this.normalizeUrl(openedUrl) : null;
  106 |         })
  107 |         .toBe(this.normalizeUrl(expectedUrl));
  108 |     } finally {
  109 |       await this.page.evaluate(() => {
  110 |         if (window.__mesheryOriginalOpen) {
  111 |           window.open = window.__mesheryOriginalOpen;
  112 |           delete window.__mesheryOriginalOpen;
  113 |         }
  114 |       });
  115 |     }
  116 |   }
  117 | }
  118 | 
```