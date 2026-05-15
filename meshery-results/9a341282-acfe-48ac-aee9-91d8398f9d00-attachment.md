# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Design Embed Details
- Location: tests/e2e/extensions.spec.ts:42:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://meshery.io/extensions/meshery-design-embed"
Received: "https://docs.meshery.io/extensions"

Call Log:
- Test timeout of 60000ms exceeded
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
            - link "Extensions" [ref=e67]:
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
            - heading "Extensions" [level=5] [ref=e179]
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
          - generic [ref=e209]:
            - generic [ref=e211]:
              - generic [ref=e212]: "GitHub Action: Snapshot"
              - paragraph [ref=e213]:
                - img "Snapshot Logo" [ref=e214]
                - generic [ref=e215]: Connect to your GitHub repo and see changes pull request-to-pull request. Get snapshots of your infrastructure directly in your PRs.
              - button "Enable" [ref=e217] [cursor=pointer]
            - generic [ref=e219]:
              - generic [ref=e220]: "GitHub Action: Performance Analysis"
              - paragraph [ref=e221]:
                - img "Meshery Performance Logo" [ref=e222]
                - generic [ref=e223]: Characterize the performance of your services using Meshery's performance analysis GitHub Action to benchmark and visually compare percentiles (e.g. P99) over time.
              - button "Enable" [ref=e225] [cursor=pointer]
            - generic [ref=e227]:
              - generic [ref=e228]: Snapshot Helm Plugin
              - paragraph [ref=e229]:
                - img "Helm Chart Logo" [ref=e230]
                - generic [ref=e231]: The Snapshot Helm Plugin allows you to generate a visual snapshot of your Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts.
              - button "Learn More" [ref=e233] [cursor=pointer]
            - generic [ref=e235]:
              - generic [ref=e236]: Meshery Docker Extension
              - paragraph [ref=e237]:
                - img "Docker Logo" [ref=e238]
                - generic [ref=e239]: Connect Meshery to your Kubernetes cluster via Docker Desktop and let MeshSync discover your clusters. Use no-code designer to collaboratively design and manage your infrastructure with ready-made patterns from Meshery Catalog.
              - button "Download" [ref=e241] [cursor=pointer]
            - generic [ref=e243]:
              - generic [ref=e244]: Meshery Design Embed
              - paragraph [ref=e245]:
                - img "Meshery Design Logo" [ref=e246]
                - generic [ref=e247]: Meshery Design Embedding lets you export designs in an interactive format that seamlessly integrates with websites, blogs, and platforms using HTML, CSS, and JavaScript, making it easy to share with stakeholders.
              - button "Learn More" [active] [ref=e249] [cursor=pointer]: Learn More
            - generic [ref=e251]:
              - generic [ref=e252]: Meshery Cloud
              - paragraph [ref=e253]:
                - img "Cloud Logo" [ref=e254]
                - generic [ref=e255]: A comprehensive platform offering identity and collaboration services, private catalogs, GitOps, and multi-Meshery management. Leverage its extensible authorization framework and organizational hierarchy for streamlined cloud infrastructure management.
              - button "Learn More" [ref=e257] [cursor=pointer]
            - generic [ref=e259]:
              - generic [ref=e260]: Kubectl Plugin for Snapshots
              - paragraph [ref=e261]:
                - img "Kubectl Plugin Logo" [ref=e262]
                - generic [ref=e263]: Generate visual snapshots of your Kubernetes manifests directly from kubectl. Cluster configurations and workflows with snapshots. Receive snapshots via email or get instant terminal URL display.
              - button "Learn More" [ref=e265] [cursor=pointer]
            - generic [ref=e267]:
              - generic [ref=e268]: Kubectl Plugin for MeshSync Snapshot
              - paragraph [ref=e269]:
                - img "MeshSync Logo" [ref=e270]
                - generic [ref=e271]: Capture cluster state directly from kubectl with simplified networking and access requirements. Generate MeshSync snapshots for offline management and visualization in Meshery Server, without requiring full Meshery Operator deployment.
              - button "Learn More" [ref=e273] [cursor=pointer]
            - generic [ref=e275]:
              - generic [ref=e276]: Meshery Catalog
              - paragraph [ref=e277]:
                - img [ref=e278]
                - generic [ref=e283]: Enable access to the cloud native catalog, supporting design patterns, WebAssembly filters (soon), and OPA policies (soon). Import any catalog item and customize.
              - generic [ref=e284]:
                - heading "Explore the Meshery Catalog" [level=6] [ref=e285]:
                  - text: Explore the
                  - link "Meshery Catalog" [ref=e286] [cursor=pointer]:
                    - /url: https://meshery.io/catalog
                - switch [checked] [ref=e289] [cursor=pointer]
            - generic [ref=e293]:
              - generic [ref=e294]: Meshery Adapter for Istio
              - generic [ref=e295]:
                - img [ref=e296]
                - generic [ref=e297]: Deploy the Meshery Adapter for Istio in order to enable deeper lifecycle management of Istio.
              - generic [ref=e298]:
                - heading "Open Adapter docs" [level=6] [ref=e299]:
                  - link "Open Adapter docs" [ref=e300] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e304] [cursor=pointer]
            - generic [ref=e308]:
              - generic [ref=e309]: Meshery Adapter for Linkerd
              - generic [ref=e310]:
                - img [ref=e311]
                - generic [ref=e312]: Deploy the Meshery Adapter for Linkerd in order to enable deeper lifecycle management of Linkerd.
              - generic [ref=e313]:
                - heading "Open Adapter docs" [level=6] [ref=e314]:
                  - link "Open Adapter docs" [ref=e315] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e319] [cursor=pointer]
            - generic [ref=e323]:
              - generic [ref=e324]: Meshery Adapter for Consul
              - generic [ref=e325]:
                - img [ref=e326]
                - generic [ref=e327]: Deploy the Meshery Adapter for Consul in order to enable deeper lifecycle management of Consul.
              - generic [ref=e328]:
                - heading "Open Adapter docs" [level=6] [ref=e329]:
                  - link "Open Adapter docs" [ref=e330] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e334] [cursor=pointer]
            - generic [ref=e338]:
              - generic [ref=e339]: Meshery Adapter for Network Service Mesh
              - generic [ref=e340]:
                - img [ref=e341]
                - generic [ref=e342]: Deploy the Meshery Adapter for Network Service Mesh in order to enable deeper lifecycle management of Network Service Mesh.
              - generic [ref=e343]:
                - heading "Open Adapter docs" [level=6] [ref=e344]:
                  - link "Open Adapter docs" [ref=e345] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e349] [cursor=pointer]
            - generic [ref=e353]:
              - generic [ref=e354]: Meshery Adapter for Traefik Mesh
              - generic [ref=e355]:
                - img [ref=e356]
                - generic [ref=e357]: Deploy the Meshery Adapter for Traefik Mesh in order to enable deeper lifecycle management of Traefik Mesh.
              - generic [ref=e358]:
                - heading "Open Adapter docs" [level=6] [ref=e359]:
                  - link "Open Adapter docs" [ref=e360] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e364] [cursor=pointer]
            - generic [ref=e368]:
              - generic [ref=e369]: Meshery Adapter for Kuma
              - generic [ref=e370]:
                - img [ref=e371]
                - generic [ref=e372]: Deploy the Meshery Adapter for Kuma in order to enable deeper lifecycle management of Kuma.
              - generic [ref=e373]:
                - heading "Open Adapter docs" [level=6] [ref=e374]:
                  - link "Open Adapter docs" [ref=e375] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e379] [cursor=pointer]
            - generic [ref=e383]:
              - generic [ref=e384]: Meshery Adapter for NGINX Service Mesh
              - generic [ref=e385]:
                - img [ref=e386]
                - generic [ref=e387]: Deploy the Meshery Adapter for NGINX Service Mesh in order to enable deeper lifecycle management of NGINX Service Mesh.
              - generic [ref=e388]:
                - heading "Open Adapter docs" [level=6] [ref=e389]:
                  - link "Open Adapter docs" [ref=e390] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e394] [cursor=pointer]
            - generic [ref=e398]:
              - generic [ref=e399]: Meshery Adapter for Cilium Service Mesh
              - generic [ref=e400]:
                - img [ref=e401]
                - generic [ref=e402]: Deploy the Meshery Adapter for Cilium Service Mesh in order to enable deeper lifecycle management of Cilium Service Mesh.
              - generic [ref=e403]:
                - heading "Open Adapter docs" [level=6] [ref=e404]:
                  - link "Open Adapter docs" [ref=e405] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e409] [cursor=pointer]
            - generic [ref=e413]:
              - generic [ref=e414]: Meshery Adapter for Nighthawk
              - generic [ref=e415]:
                - img [ref=e416]
                - generic [ref=e417]: Deploy the Meshery Adapter for Performance Characterization by Meshery Nighthawk in order to enable deeper lifecycle management of Performance Characterization by Meshery Nighthawk.
              - generic [ref=e418]:
                - heading "Open Adapter docs" [level=6] [ref=e419]:
                  - link "Open Adapter docs" [ref=e420] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e424] [cursor=pointer]
        - contentinfo [ref=e427]:
          - paragraph [ref=e428]:
            - generic [ref=e429] [cursor=pointer]:
              - text: Built with
              - img [ref=e430]
              - text: by the Meshery Community
  - alert [ref=e433]: Extensions | Meshery
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
> 76 |       await expect
     |       ^ Error: expect(received).toBe(expected) // Object.is equality
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