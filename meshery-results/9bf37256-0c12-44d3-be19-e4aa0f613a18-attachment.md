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
              - text: v1.0.24
              - link [ref=e145] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.24
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
                - generic [ref=e178]: "0"
            - button [ref=e181] [cursor=pointer]:
              - img [ref=e182]
            - button [ref=e189] [cursor=pointer]:
              - img [ref=e191]
            - button [ref=e194] [cursor=pointer]:
              - img [ref=e195]
      - generic [ref=e197]:
        - main [ref=e198]:
          - generic [ref=e199]:
            - generic [ref=e201]:
              - generic [ref=e202]: "GitHub Action: Snapshot"
              - paragraph [ref=e203]:
                - img "Snapshot Logo" [ref=e204]
                - generic [ref=e205]: Connect to your GitHub repo and see changes pull request-to-pull request. Get snapshots of your infrastructure directly in your PRs.
              - button "Enable" [ref=e207] [cursor=pointer]
            - generic [ref=e209]:
              - generic [ref=e210]: "GitHub Action: Performance Analysis"
              - paragraph [ref=e211]:
                - img "Meshery Performance Logo" [ref=e212]
                - generic [ref=e213]: Characterize the performance of your services using Meshery's performance analysis GitHub Action to benchmark and visually compare percentiles (e.g. P99) over time.
              - button "Enable" [ref=e215] [cursor=pointer]
            - generic [ref=e217]:
              - generic [ref=e218]: Snapshot Helm Plugin
              - paragraph [ref=e219]:
                - img "Helm Chart Logo" [ref=e220]
                - generic [ref=e221]: The Snapshot Helm Plugin allows you to generate a visual snapshot of your Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts.
              - button "Learn More" [ref=e223] [cursor=pointer]
            - generic [ref=e225]:
              - generic [ref=e226]: Meshery Docker Extension
              - paragraph [ref=e227]:
                - img "Docker Logo" [ref=e228]
                - generic [ref=e229]: Connect Meshery to your Kubernetes cluster via Docker Desktop and let MeshSync discover your clusters. Use no-code designer to collaboratively design and manage your infrastructure with ready-made patterns from Meshery Catalog.
              - button "Download" [ref=e231] [cursor=pointer]
            - generic [ref=e233]:
              - generic [ref=e234]: Meshery Design Embed
              - paragraph [ref=e235]:
                - img "Meshery Design Logo" [ref=e236]
                - generic [ref=e237]: Meshery Design Embedding lets you export designs in an interactive format that seamlessly integrates with websites, blogs, and platforms using HTML, CSS, and JavaScript, making it easy to share with stakeholders.
              - button "Learn More" [ref=e239] [cursor=pointer]
            - generic [ref=e241]:
              - generic [ref=e242]: Meshery Cloud
              - paragraph [ref=e243]:
                - img "Cloud Logo" [ref=e244]
                - generic [ref=e245]: A comprehensive platform offering identity and collaboration services, private catalogs, GitOps, and multi-Meshery management. Leverage its extensible authorization framework and organizational hierarchy for streamlined cloud infrastructure management.
              - button "Learn More" [ref=e247] [cursor=pointer]
            - generic [ref=e249]:
              - generic [ref=e250]: Kubectl Plugin for Snapshots
              - paragraph [ref=e251]:
                - img "Kubectl Plugin Logo" [ref=e252]
                - generic [ref=e253]: Generate visual snapshots of your Kubernetes manifests directly from kubectl. Cluster configurations and workflows with snapshots. Receive snapshots via email or get instant terminal URL display.
              - button "Learn More" [ref=e255] [cursor=pointer]
            - generic [ref=e257]:
              - generic [ref=e258]: Kubectl Plugin for MeshSync Snapshot
              - paragraph [ref=e259]:
                - img "MeshSync Logo" [ref=e260]
                - generic [ref=e261]: Capture cluster state directly from kubectl with simplified networking and access requirements. Generate MeshSync snapshots for offline management and visualization in Meshery Server, without requiring full Meshery Operator deployment.
              - button "Learn More" [ref=e263] [cursor=pointer]
            - generic [ref=e265]:
              - generic [ref=e266]: Meshery Catalog
              - paragraph [ref=e267]:
                - img [ref=e268]
                - generic [ref=e273]: Enable access to the cloud native catalog, supporting design patterns, WebAssembly filters (soon), and OPA policies (soon). Import any catalog item and customize.
              - generic [ref=e274]:
                - heading "Explore the Meshery Catalog" [level=6] [ref=e275]:
                  - text: Explore the
                  - link "Meshery Catalog" [ref=e276] [cursor=pointer]:
                    - /url: https://meshery.io/catalog
                - switch [checked] [ref=e279] [cursor=pointer]
            - generic [ref=e283]:
              - generic [ref=e284]: Meshery Adapter for Istio
              - generic [ref=e285]:
                - img [ref=e286]
                - generic [ref=e287]: Deploy the Meshery Adapter for Istio in order to enable deeper lifecycle management of Istio.
              - generic [ref=e288]:
                - heading "Open Adapter docs" [level=6] [ref=e289]:
                  - link "Open Adapter docs" [ref=e290] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e294] [cursor=pointer]
            - generic [ref=e298]:
              - generic [ref=e299]: Meshery Adapter for Linkerd
              - generic [ref=e300]:
                - img [ref=e301]
                - generic [ref=e302]: Deploy the Meshery Adapter for Linkerd in order to enable deeper lifecycle management of Linkerd.
              - generic [ref=e303]:
                - heading "Open Adapter docs" [level=6] [ref=e304]:
                  - link "Open Adapter docs" [ref=e305] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e309] [cursor=pointer]
            - generic [ref=e313]:
              - generic [ref=e314]: Meshery Adapter for Consul
              - generic [ref=e315]:
                - img [ref=e316]
                - generic [ref=e317]: Deploy the Meshery Adapter for Consul in order to enable deeper lifecycle management of Consul.
              - generic [ref=e318]:
                - heading "Open Adapter docs" [level=6] [ref=e319]:
                  - link "Open Adapter docs" [ref=e320] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e324] [cursor=pointer]
            - generic [ref=e328]:
              - generic [ref=e329]: Meshery Adapter for Network Service Mesh
              - generic [ref=e330]:
                - img [ref=e331]
                - generic [ref=e332]: Deploy the Meshery Adapter for Network Service Mesh in order to enable deeper lifecycle management of Network Service Mesh.
              - generic [ref=e333]:
                - heading "Open Adapter docs" [level=6] [ref=e334]:
                  - link "Open Adapter docs" [ref=e335] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e339] [cursor=pointer]
            - generic [ref=e343]:
              - generic [ref=e344]: Meshery Adapter for Traefik Mesh
              - generic [ref=e345]:
                - img [ref=e346]
                - generic [ref=e347]: Deploy the Meshery Adapter for Traefik Mesh in order to enable deeper lifecycle management of Traefik Mesh.
              - generic [ref=e348]:
                - heading "Open Adapter docs" [level=6] [ref=e349]:
                  - link "Open Adapter docs" [ref=e350] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e354] [cursor=pointer]
            - generic [ref=e358]:
              - generic [ref=e359]: Meshery Adapter for Kuma
              - generic [ref=e360]:
                - img [ref=e361]
                - generic [ref=e362]: Deploy the Meshery Adapter for Kuma in order to enable deeper lifecycle management of Kuma.
              - generic [ref=e363]:
                - heading "Open Adapter docs" [level=6] [ref=e364]:
                  - link "Open Adapter docs" [ref=e365] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e369] [cursor=pointer]
            - generic [ref=e373]:
              - generic [ref=e374]: Meshery Adapter for NGINX Service Mesh
              - generic [ref=e375]:
                - img [ref=e376]
                - generic [ref=e377]: Deploy the Meshery Adapter for NGINX Service Mesh in order to enable deeper lifecycle management of NGINX Service Mesh.
              - generic [ref=e378]:
                - heading "Open Adapter docs" [level=6] [ref=e379]:
                  - link "Open Adapter docs" [ref=e380] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e384] [cursor=pointer]
            - generic [ref=e388]:
              - generic [ref=e389]: Meshery Adapter for Cilium Service Mesh
              - generic [ref=e390]:
                - img [ref=e391]
                - generic [ref=e392]: Deploy the Meshery Adapter for Cilium Service Mesh in order to enable deeper lifecycle management of Cilium Service Mesh.
              - generic [ref=e393]:
                - heading "Open Adapter docs" [level=6] [ref=e394]:
                  - link "Open Adapter docs" [ref=e395] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e399] [cursor=pointer]
        - contentinfo [ref=e402]:
          - paragraph [ref=e403]:
            - generic [ref=e404] [cursor=pointer]:
              - text: Built with
              - img [ref=e405]
              - text: by the Meshery Community
  - alert [ref=e408]: Extensions | Meshery
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
> 43 |     await expect(this.extensionNavRegion).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
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