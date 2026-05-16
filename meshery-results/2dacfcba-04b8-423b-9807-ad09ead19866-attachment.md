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
          - generic [ref=e98]:
            - separator [ref=e99]
            - button "Kanvas" [ref=e101] [cursor=pointer]:
              - link "Kanvas" [ref=e102]:
                - /url: /extension/meshmap
                - generic [ref=e104]:
                  - img [ref=e106]
                  - generic [ref=e108]: Kanvas
          - separator [ref=e109]
        - generic [ref=e110]:
          - img [ref=e113] [cursor=pointer]
          - group [ref=e115]:
            - listitem [ref=e116]:
              - link [ref=e117] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e119]
            - listitem [ref=e121]:
              - link [ref=e122] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e124]
            - listitem [ref=e133]:
              - link [ref=e134] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e136]
            - listitem [ref=e138]:
              - link [ref=e139] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e141]
          - listitem [ref=e143]:
            - generic [ref=e144]:
              - text: v1.0.22
              - link [ref=e146] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e147]
              - text: Running latest
    - generic [ref=e149]:
      - banner [ref=e150]:
        - generic [ref=e152]:
          - generic [ref=e154]:
            - button [ref=e156] [cursor=pointer]:
              - img [ref=e157]
            - text: /
            - button [ref=e166] [cursor=pointer]:
              - img [ref=e167]
            - group [ref=e171]:
              - generic [ref=e176]:
                - combobox [ref=e177] [cursor=pointer]:
                  - generic [ref=e178]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Dashboard" [level=5] [ref=e179]
          - generic [ref=e181]:
            - button "contexts" [ref=e184] [cursor=pointer]:
              - generic [ref=e185]:
                - img [ref=e186]
                - generic [ref=e187]: "0"
            - button "99+" [ref=e190] [cursor=pointer]:
              - generic [ref=e191]:
                - img [ref=e192]
                - generic [ref=e195]: 99+
            - button [ref=e199] [cursor=pointer]:
              - img [ref=e201]
            - button [ref=e204] [cursor=pointer]:
              - img [ref=e205]
      - generic [ref=e207]:
        - main [ref=e208]:
          - tablist [ref=e212]:
            - tab "Overview" [selected] [ref=e213] [cursor=pointer]:
              - img [ref=e214]
              - text: Overview
            - tab "Node" [ref=e239] [cursor=pointer]:
              - img [ref=e240]
              - text: Node
            - tab "Namespace" [ref=e246] [cursor=pointer]:
              - img [ref=e247]
              - text: Namespace
            - tab "Workload" [ref=e253] [cursor=pointer]:
              - img [ref=e254]
              - text: Workload
            - tab "Configuration" [ref=e260] [cursor=pointer]:
              - img [ref=e261]
              - text: Configuration
            - tab "Network" [ref=e267] [cursor=pointer]:
              - img [ref=e268]
              - text: Network
            - tab "Security" [ref=e274] [cursor=pointer]:
              - img [ref=e275]
              - text: Security
            - tab "Storage" [ref=e281] [cursor=pointer]:
              - img [ref=e282]
              - text: Storage
            - tab "CRDS" [ref=e288] [cursor=pointer]:
              - img [ref=e289]
              - text: CRDS
          - tabpanel [ref=e296]:
            - generic [ref=e299]:
              - generic [ref=e301]:
                - generic [ref=e303]:
                  - generic [ref=e304]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e305]
                    - generic [ref=e306]:
                      - generic [ref=e307]:
                        - combobox [ref=e308] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e309] [cursor=pointer]:
                        - img [ref=e311]
                  - list [ref=e313]:
                    - listitem:
                      - generic [ref=e316]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e317]
                    - listitem:
                      - generic [ref=e320]:
                        - img "ClusterRole"
                        - heading "23" [level=6] [ref=e321]
                    - listitem:
                      - generic [ref=e324]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e325]
                    - listitem:
                      - generic [ref=e328]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e329]
                    - listitem:
                      - generic [ref=e332]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e333]
                    - listitem:
                      - generic [ref=e336]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e337]
                    - listitem:
                      - generic [ref=e340]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e341]
                    - listitem:
                      - generic [ref=e344]:
                        - img "Pod"
                        - heading "2" [level=6] [ref=e345]
                    - listitem:
                      - generic [ref=e348]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e349]
                    - listitem:
                      - generic [ref=e352]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e353]
                    - listitem:
                      - generic [ref=e356]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e357]
                    - listitem:
                      - generic [ref=e360]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e361]
                - generic [ref=e364]:
                  - generic [ref=e365]:
                    - img [ref=e366]
                    - generic [ref=e369]: GETTING STARTED
                  - generic [ref=e370]:
                    - paragraph [ref=e371]: New here? Follow along these guided tasks to help you get the most of your account.
                    - paragraph [ref=e372]:
                      - generic [ref=e375]: 0%
                    - button "Start" [ref=e377] [cursor=pointer]
                - generic [ref=e381]:
                  - generic [ref=e382]:
                    - img [ref=e383]
                    - heading "HELP CENTER" [level=6] [ref=e387]
                  - list [ref=e389]:
                    - listitem [ref=e390]:
                      - img [ref=e392]
                      - link "Cloud Docs" [ref=e401] [cursor=pointer]:
                        - /url: https://docs.layer5.io/cloud
                      - superscript [ref=e402]:
                        - img [ref=e403]
                    - listitem [ref=e405]:
                      - img [ref=e407]
                      - link "Kanvas Docs" [ref=e416] [cursor=pointer]:
                        - /url: https://docs.layer5.io/kanvas
                      - superscript [ref=e417]:
                        - img [ref=e418]
                    - listitem [ref=e420]:
                      - img [ref=e422]
                      - link "Support Request" [ref=e431] [cursor=pointer]:
                        - /url: https://cloud.meshery.io/support
                      - superscript [ref=e432]:
                        - img [ref=e433]
                    - listitem [ref=e435]:
                      - img [ref=e437]
                      - link "Discussion Forum" [ref=e446] [cursor=pointer]:
                        - /url: https://meshery.io/community/#discussion-forums
                      - superscript [ref=e447]:
                        - img [ref=e448]
                    - listitem [ref=e450]:
                      - img [ref=e452]
                      - link "Slack" [ref=e461] [cursor=pointer]:
                        - /url: https://slack.meshery.io
                      - superscript [ref=e462]:
                        - img [ref=e463]
                - generic [ref=e467]:
                  - generic [ref=e468]:
                    - generic [ref=e469]:
                      - img [ref=e470]
                      - heading "MY RECENT DESIGNS" [level=6] [ref=e479]
                    - button "Sort by" [ref=e480] [cursor=pointer]:
                      - img [ref=e481]
                  - list [ref=e484]:
                    - listitem [ref=e485]:
                      - img [ref=e487]
                      - link "Exam Portal with Real-Time Leaderboard (AWS)" [ref=e496] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=fd590b35-7f16-4074-ad12-27a22ef614fc
                      - generic "Sat, May 16, 2026 1:07 AM" [ref=e498]:
                        - paragraph [ref=e499]: 26 minutes ago
                    - listitem [ref=e500]:
                      - img [ref=e502]
                      - link "[Tutorial] Exploring Kubernetes Pod" [ref=e511] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=57c524aa-4a6e-459f-b8c5-4bc97034ee16
                      - generic "Sat, May 16, 2026 1:06 AM" [ref=e513]:
                        - paragraph [ref=e514]: 27 minutes ago
                    - listitem [ref=e515]:
                      - img [ref=e517]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=49875664-6648-418b-93a1-0cb9147dc97a
                      - generic "Fri, May 15, 2026 11:01 PM" [ref=e527]:
                        - paragraph [ref=e528]: 3 hours ago
                    - listitem [ref=e529]:
                      - img [ref=e531]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=d307c888-e32e-4f54-8ba8-ad425aab7b89
                      - generic "Fri, May 15, 2026 10:33 PM" [ref=e541]:
                        - paragraph [ref=e542]: 3 hours ago
                    - listitem [ref=e543]:
                      - img [ref=e545]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=68c80309-2b81-49b3-9239-0bc98fea4afb
                      - generic "Fri, May 15, 2026 10:32 PM" [ref=e555]:
                        - paragraph [ref=e556]: 3 hours ago
                    - listitem [ref=e557]:
                      - img [ref=e559]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=7cb1d02d-db91-43c5-a127-920da9eaf099
                      - generic "Fri, May 15, 2026 9:03 PM" [ref=e569]:
                        - paragraph [ref=e570]: 4 hours ago
                    - listitem [ref=e571]:
                      - img [ref=e573]
                      - link "Azure Service Operator" [ref=e582] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=2a03868b-722f-490d-a7b7-f508b5fe2ebc
                      - generic "Fri, May 15, 2026 7:50 PM" [ref=e584]:
                        - paragraph [ref=e585]: 6 hours ago
                  - generic [ref=e586]:
                    - link "See All Designs" [ref=e587] [cursor=pointer]:
                      - /url: https://cloud.meshery.io/catalog/content/my-designs
                    - button [ref=e588] [cursor=pointer]:
                      - img [ref=e589]
                - generic [ref=e592]:
                  - generic [ref=e593]:
                    - generic [ref=e594]:
                      - img [ref=e595]
                      - heading "WORKSPACE ACTIVITY" [level=6] [ref=e599]
                    - generic [ref=e600]:
                      - combobox [ref=e601] [cursor=pointer]: eks-sandbox
                      - textbox: d26aa57e-e9ec-4424-878c-a794bd3a3b7d
                      - img
                  - list [ref=e602]:
                    - generic [ref=e607]:
                      - strong [ref=e608]: "Mar 28:"
                      - text: lekaf974 created workspace eks-sandbox
                  - link "All Workspaces" [ref=e610] [cursor=pointer]:
                    - /url: /management/workspaces
                - link "KUBERNETES CLUSTER STATUS" [ref=e612] [cursor=pointer]:
                  - /url: /management/connections
                  - generic [ref=e613]:
                    - generic [ref=e614]:
                      - generic [ref=e615]:
                        - img [ref=e616]
                        - heading "KUBERNETES CLUSTER STATUS" [level=6] [ref=e619]
                      - img [ref=e622]
                    - img [ref=e626]:
                      - generic [ref=e629]:
                        - generic [ref=e630]: Clusters Status
                        - generic [ref=e631]:
                          - generic: "1"
                        - generic [ref=e634]:
                          - generic: "9"
                      - generic [ref=e637]:
                        - generic [ref=e638]:
                          - generic: connected
                        - generic [ref=e640]:
                          - generic: not found
              - button "Edit" [ref=e642] [cursor=pointer]:
                - generic [ref=e643]: Edit
                - img [ref=e645]
        - contentinfo [ref=e647]:
          - paragraph [ref=e648]:
            - generic [ref=e649] [cursor=pointer]:
              - text: Built with
              - img [ref=e650]
              - text: by the Meshery Community
  - alert [ref=e653]
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