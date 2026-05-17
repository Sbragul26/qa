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
            - heading "Extensions" [level=5] [ref=e160]
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
          - generic [ref=e189]:
            - generic [ref=e191]:
              - generic [ref=e192]: "GitHub Action: Snapshot"
              - paragraph [ref=e193]:
                - img "Snapshot Logo" [ref=e194]
                - generic [ref=e195]: Connect to your GitHub repo and see changes pull request-to-pull request. Get snapshots of your infrastructure directly in your PRs.
              - button "Enable" [ref=e197] [cursor=pointer]
            - generic [ref=e199]:
              - generic [ref=e200]: "GitHub Action: Performance Analysis"
              - paragraph [ref=e201]:
                - img "Meshery Performance Logo" [ref=e202]
                - generic [ref=e203]: Characterize the performance of your services using Meshery's performance analysis GitHub Action to benchmark and visually compare percentiles (e.g. P99) over time.
              - button "Enable" [ref=e205] [cursor=pointer]
            - generic [ref=e207]:
              - generic [ref=e208]: Snapshot Helm Plugin
              - paragraph [ref=e209]:
                - img "Helm Chart Logo" [ref=e210]
                - generic [ref=e211]: The Snapshot Helm Plugin allows you to generate a visual snapshot of your Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts.
              - button "Learn More" [ref=e213] [cursor=pointer]
            - generic [ref=e215]:
              - generic [ref=e216]: Meshery Docker Extension
              - paragraph [ref=e217]:
                - img "Docker Logo" [ref=e218]
                - generic [ref=e219]: Connect Meshery to your Kubernetes cluster via Docker Desktop and let MeshSync discover your clusters. Use no-code designer to collaboratively design and manage your infrastructure with ready-made patterns from Meshery Catalog.
              - button "Download" [ref=e221] [cursor=pointer]
            - generic [ref=e223]:
              - generic [ref=e224]: Meshery Design Embed
              - paragraph [ref=e225]:
                - img "Meshery Design Logo" [ref=e226]
                - generic [ref=e227]: Meshery Design Embedding lets you export designs in an interactive format that seamlessly integrates with websites, blogs, and platforms using HTML, CSS, and JavaScript, making it easy to share with stakeholders.
              - button "Learn More" [active] [ref=e229] [cursor=pointer]: Learn More
            - generic [ref=e231]:
              - generic [ref=e232]: Meshery Cloud
              - paragraph [ref=e233]:
                - img "Cloud Logo" [ref=e234]
                - generic [ref=e235]: A comprehensive platform offering identity and collaboration services, private catalogs, GitOps, and multi-Meshery management. Leverage its extensible authorization framework and organizational hierarchy for streamlined cloud infrastructure management.
              - button "Learn More" [ref=e237] [cursor=pointer]
            - generic [ref=e239]:
              - generic [ref=e240]: Kubectl Plugin for Snapshots
              - paragraph [ref=e241]:
                - img "Kubectl Plugin Logo" [ref=e242]
                - generic [ref=e243]: Generate visual snapshots of your Kubernetes manifests directly from kubectl. Cluster configurations and workflows with snapshots. Receive snapshots via email or get instant terminal URL display.
              - button "Learn More" [ref=e245] [cursor=pointer]
            - generic [ref=e247]:
              - generic [ref=e248]: Kubectl Plugin for MeshSync Snapshot
              - paragraph [ref=e249]:
                - img "MeshSync Logo" [ref=e250]
                - generic [ref=e251]: Capture cluster state directly from kubectl with simplified networking and access requirements. Generate MeshSync snapshots for offline management and visualization in Meshery Server, without requiring full Meshery Operator deployment.
              - button "Learn More" [ref=e253] [cursor=pointer]
            - generic [ref=e255]:
              - generic [ref=e256]: Meshery Catalog
              - paragraph [ref=e257]:
                - img [ref=e258]
                - generic [ref=e263]: Enable access to the cloud native catalog, supporting design patterns, WebAssembly filters (soon), and OPA policies (soon). Import any catalog item and customize.
              - generic [ref=e264]:
                - heading "Explore the Meshery Catalog" [level=6] [ref=e265]:
                  - text: Explore the
                  - link "Meshery Catalog" [ref=e266] [cursor=pointer]:
                    - /url: https://meshery.io/catalog
                - switch [checked] [ref=e269] [cursor=pointer]
            - generic [ref=e273]:
              - generic [ref=e274]: Meshery Adapter for Istio
              - generic [ref=e275]:
                - img [ref=e276]
                - generic [ref=e277]: Deploy the Meshery Adapter for Istio in order to enable deeper lifecycle management of Istio.
              - generic [ref=e278]:
                - heading "Open Adapter docs" [level=6] [ref=e279]:
                  - link "Open Adapter docs" [ref=e280] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e284] [cursor=pointer]
            - generic [ref=e288]:
              - generic [ref=e289]: Meshery Adapter for Linkerd
              - generic [ref=e290]:
                - img [ref=e291]
                - generic [ref=e292]: Deploy the Meshery Adapter for Linkerd in order to enable deeper lifecycle management of Linkerd.
              - generic [ref=e293]:
                - heading "Open Adapter docs" [level=6] [ref=e294]:
                  - link "Open Adapter docs" [ref=e295] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e299] [cursor=pointer]
            - generic [ref=e303]:
              - generic [ref=e304]: Meshery Adapter for Consul
              - generic [ref=e305]:
                - img [ref=e306]
                - generic [ref=e307]: Deploy the Meshery Adapter for Consul in order to enable deeper lifecycle management of Consul.
              - generic [ref=e308]:
                - heading "Open Adapter docs" [level=6] [ref=e309]:
                  - link "Open Adapter docs" [ref=e310] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e314] [cursor=pointer]
            - generic [ref=e318]:
              - generic [ref=e319]: Meshery Adapter for Network Service Mesh
              - generic [ref=e320]:
                - img [ref=e321]
                - generic [ref=e322]: Deploy the Meshery Adapter for Network Service Mesh in order to enable deeper lifecycle management of Network Service Mesh.
              - generic [ref=e323]:
                - heading "Open Adapter docs" [level=6] [ref=e324]:
                  - link "Open Adapter docs" [ref=e325] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e329] [cursor=pointer]
            - generic [ref=e333]:
              - generic [ref=e334]: Meshery Adapter for Traefik Mesh
              - generic [ref=e335]:
                - img [ref=e336]
                - generic [ref=e337]: Deploy the Meshery Adapter for Traefik Mesh in order to enable deeper lifecycle management of Traefik Mesh.
              - generic [ref=e338]:
                - heading "Open Adapter docs" [level=6] [ref=e339]:
                  - link "Open Adapter docs" [ref=e340] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e344] [cursor=pointer]
            - generic [ref=e348]:
              - generic [ref=e349]: Meshery Adapter for Kuma
              - generic [ref=e350]:
                - img [ref=e351]
                - generic [ref=e352]: Deploy the Meshery Adapter for Kuma in order to enable deeper lifecycle management of Kuma.
              - generic [ref=e353]:
                - heading "Open Adapter docs" [level=6] [ref=e354]:
                  - link "Open Adapter docs" [ref=e355] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e359] [cursor=pointer]
            - generic [ref=e363]:
              - generic [ref=e364]: Meshery Adapter for NGINX Service Mesh
              - generic [ref=e365]:
                - img [ref=e366]
                - generic [ref=e367]: Deploy the Meshery Adapter for NGINX Service Mesh in order to enable deeper lifecycle management of NGINX Service Mesh.
              - generic [ref=e368]:
                - heading "Open Adapter docs" [level=6] [ref=e369]:
                  - link "Open Adapter docs" [ref=e370] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e374] [cursor=pointer]
            - generic [ref=e378]:
              - generic [ref=e379]: Meshery Adapter for Cilium Service Mesh
              - generic [ref=e380]:
                - img [ref=e381]
                - generic [ref=e382]: Deploy the Meshery Adapter for Cilium Service Mesh in order to enable deeper lifecycle management of Cilium Service Mesh.
              - generic [ref=e383]:
                - heading "Open Adapter docs" [level=6] [ref=e384]:
                  - link "Open Adapter docs" [ref=e385] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e389] [cursor=pointer]
        - contentinfo [ref=e392]:
          - paragraph [ref=e393]:
            - generic [ref=e394] [cursor=pointer]:
              - text: Built with
              - img [ref=e395]
              - text: by the Meshery Community
      - generic [ref=e402]:
        - img [ref=e403]
        - paragraph [ref=e406]: MeshSync connected in embedded mode
        - group [ref=e408]:
          - button "Open" [ref=e409] [cursor=pointer]:
            - img [ref=e410]
          - button "Close" [ref=e414] [cursor=pointer]:
            - img [ref=e415]
  - alert [ref=e418]: Extensions | Meshery
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