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
              - generic [ref=e192]: "GitHub Action: Kanvas Snapshot"
              - paragraph [ref=e193]:
                - img "Kanvas Snapshot Logo" [ref=e194]
                - generic [ref=e195]: Connect Kanvas to your GitHub repo and see changes pull request-to-pull request. Get snapshots of your infrastructure directly in your PRs.
              - button "Enable" [ref=e197] [cursor=pointer]
            - generic [ref=e199]:
              - generic [ref=e200]: "GitHub Action: Performance Analysis"
              - paragraph [ref=e201]:
                - img "Meshery Performance Logo" [ref=e202]
                - generic [ref=e203]: Characterize the performance of your services using Meshery's performance analysis GitHub Action to benchmark and visually compare percentiles (e.g. P99) over time.
              - button "Enable" [ref=e205] [cursor=pointer]
            - generic [ref=e207]:
              - generic [ref=e208]: Kanvas
              - paragraph [ref=e209]:
                - img "Kanvas Icon" [ref=e210]
                - generic [ref=e211]: Collaboratively design and manage your infra and apps. Kanvas is now publicly available. Sign-up today for access!
              - button "Sign Up" [ref=e213] [cursor=pointer]
            - generic [ref=e215]:
              - generic [ref=e216]: Kanvas Snapshot Helm Plugin
              - paragraph [ref=e217]:
                - img "Helm Chart Logo" [ref=e218]
                - generic [ref=e219]: The Kanvas Snapshot Helm Plugin allows you to generate a visual snapshot of your Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts.
              - button "Learn More" [ref=e221] [cursor=pointer]
            - generic [ref=e223]:
              - generic [ref=e224]: Meshery Docker Extension
              - paragraph [ref=e225]:
                - img "Docker Logo" [ref=e226]
                - generic [ref=e227]: Connect Meshery to your Kubernetes cluster via Docker Desktop and let MeshSync discover your clusters. Use Kanvas's no-code designer to collaboratively design and manage your infrastructure with ready-made patterns from Meshery Catalog.
              - button "Download" [ref=e229] [cursor=pointer]
            - generic [ref=e231]:
              - generic [ref=e232]: Meshery Design Embed
              - paragraph [ref=e233]:
                - img "Meshery Design Logo" [ref=e234]
                - generic [ref=e235]: Meshery Design Embedding lets you export designs in an interactive format that seamlessly integrates with websites, blogs, and platforms using HTML, CSS, and JavaScript, making it easy to share with stakeholders.
              - button "Learn More" [ref=e237] [cursor=pointer]
            - generic [ref=e239]:
              - generic [ref=e240]: Meshery Cloud
              - paragraph [ref=e241]:
                - img "Cloud Logo" [ref=e242]
                - generic [ref=e243]: A comprehensive platform offering identity and collaboration services, private catalogs, GitOps, and multi-Meshery management. Leverage its extensible authorization framework and organizational hierarchy for streamlined cloud infrastructure management.
              - button "Learn More" [ref=e245] [cursor=pointer]
            - generic [ref=e247]:
              - generic [ref=e248]: Kubectl Plugin for Kanvas Snapshot
              - paragraph [ref=e249]:
                - img "Kubectl Plugin Logo" [ref=e250]
                - generic [ref=e251]: Generate visual snapshots of your Kubernetes manifests directly from kubectl. Cluster configurations and workflows with Kanvas Snapshots. Receive snapshots via email or get instant terminal URL display.
              - button "Learn More" [ref=e253] [cursor=pointer]
            - generic [ref=e255]:
              - generic [ref=e256]: Kubectl Plugin for MeshSync Snapshot
              - paragraph [ref=e257]:
                - img "MeshSync Logo" [ref=e258]
                - generic [ref=e259]: Capture cluster state directly from kubectl with simplified networking and access requirements. Generate MeshSync snapshots for offline management and visualization in Meshery Server, without requiring full Meshery Operator deployment.
              - button "Learn More" [ref=e261] [cursor=pointer]
            - generic [ref=e263]:
              - generic [ref=e264]: Meshery Catalog
              - paragraph [ref=e265]:
                - img [ref=e266]
                - generic [ref=e271]: Enable access to the cloud native catalog, supporting design patterns, WebAssembly filters (soon), and OPA policies (soon). Import any catalog item and customize.
              - generic [ref=e272]:
                - heading "Explore the Meshery Catalog" [level=6] [ref=e273]:
                  - text: Explore the
                  - link "Meshery Catalog" [ref=e274] [cursor=pointer]:
                    - /url: https://meshery.io/catalog
                - switch [checked] [ref=e277] [cursor=pointer]
            - generic [ref=e281]:
              - generic [ref=e282]: Meshery Adapter for Istio
              - generic [ref=e283]:
                - img [ref=e284]
                - generic [ref=e285]: Deploy the Meshery Adapter for Istio in order to enable deeper lifecycle management of Istio.
              - generic [ref=e286]:
                - heading "Open Adapter docs" [level=6] [ref=e287]:
                  - link "Open Adapter docs" [ref=e288] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e292] [cursor=pointer]
            - generic [ref=e296]:
              - generic [ref=e297]: Meshery Adapter for Linkerd
              - generic [ref=e298]:
                - img [ref=e299]
                - generic [ref=e300]: Deploy the Meshery Adapter for Linkerd in order to enable deeper lifecycle management of Linkerd.
              - generic [ref=e301]:
                - heading "Open Adapter docs" [level=6] [ref=e302]:
                  - link "Open Adapter docs" [ref=e303] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e307] [cursor=pointer]
            - generic [ref=e311]:
              - generic [ref=e312]: Meshery Adapter for Consul
              - generic [ref=e313]:
                - img [ref=e314]
                - generic [ref=e315]: Deploy the Meshery Adapter for Consul in order to enable deeper lifecycle management of Consul.
              - generic [ref=e316]:
                - heading "Open Adapter docs" [level=6] [ref=e317]:
                  - link "Open Adapter docs" [ref=e318] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e322] [cursor=pointer]
            - generic [ref=e326]:
              - generic [ref=e327]: Meshery Adapter for Network Service Mesh
              - generic [ref=e328]:
                - img [ref=e329]
                - generic [ref=e330]: Deploy the Meshery Adapter for Network Service Mesh in order to enable deeper lifecycle management of Network Service Mesh.
              - generic [ref=e331]:
                - heading "Open Adapter docs" [level=6] [ref=e332]:
                  - link "Open Adapter docs" [ref=e333] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e337] [cursor=pointer]
            - generic [ref=e341]:
              - generic [ref=e342]: Meshery Adapter for Traefik Mesh
              - generic [ref=e343]:
                - img [ref=e344]
                - generic [ref=e345]: Deploy the Meshery Adapter for Traefik Mesh in order to enable deeper lifecycle management of Traefik Mesh.
              - generic [ref=e346]:
                - heading "Open Adapter docs" [level=6] [ref=e347]:
                  - link "Open Adapter docs" [ref=e348] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e352] [cursor=pointer]
            - generic [ref=e356]:
              - generic [ref=e357]: Meshery Adapter for Kuma
              - generic [ref=e358]:
                - img [ref=e359]
                - generic [ref=e360]: Deploy the Meshery Adapter for Kuma in order to enable deeper lifecycle management of Kuma.
              - generic [ref=e361]:
                - heading "Open Adapter docs" [level=6] [ref=e362]:
                  - link "Open Adapter docs" [ref=e363] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e367] [cursor=pointer]
            - generic [ref=e371]:
              - generic [ref=e372]: Meshery Adapter for NGINX Service Mesh
              - generic [ref=e373]:
                - img [ref=e374]
                - generic [ref=e375]: Deploy the Meshery Adapter for NGINX Service Mesh in order to enable deeper lifecycle management of NGINX Service Mesh.
              - generic [ref=e376]:
                - heading "Open Adapter docs" [level=6] [ref=e377]:
                  - link "Open Adapter docs" [ref=e378] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e382] [cursor=pointer]
            - generic [ref=e386]:
              - generic [ref=e387]: Meshery Adapter for Cilium Service Mesh
              - generic [ref=e388]:
                - img [ref=e389]
                - generic [ref=e390]: Deploy the Meshery Adapter for Cilium Service Mesh in order to enable deeper lifecycle management of Cilium Service Mesh.
              - generic [ref=e391]:
                - heading "Open Adapter docs" [level=6] [ref=e392]:
                  - link "Open Adapter docs" [ref=e393] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e397] [cursor=pointer]
            - generic [ref=e401]:
              - generic [ref=e402]: Meshery Adapter for Nighthawk
              - generic [ref=e403]:
                - img [ref=e404]
                - generic [ref=e405]: Deploy the Meshery Adapter for Performance Characterization by Meshery Nighthawk in order to enable deeper lifecycle management of Performance Characterization by Meshery Nighthawk.
              - generic [ref=e406]:
                - heading "Open Adapter docs" [level=6] [ref=e407]:
                  - link "Open Adapter docs" [ref=e408] [cursor=pointer]:
                    - /url: https://docs.meshery.io/concepts/architecture/adapters
                - switch [ref=e412] [cursor=pointer]
        - contentinfo [ref=e415]:
          - paragraph [ref=e416]:
            - generic [ref=e417] [cursor=pointer]:
              - text: Built with
              - img [ref=e418]
              - text: by the Meshery Community
  - alert [ref=e421]: Extensions | Meshery
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
  54  |   async toggleCatalog() {
  55  |     await this.catalogToggleSwitch.click();
  56  |   }
  57  | 
  58  |   async verifyExtensionNavItemsUseTopLevelLayout() {
> 59  |     await expect(this.extensionNavRegion).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  60  |     await expect(this.extensionRootNavItems.first()).toBeVisible();
  61  |     await expect(this.extensionRegionTopLevelLists).toHaveCount(0);
  62  |   }
  63  | 
  64  |   normalizeUrl(url) {
  65  |     const parsedUrl = new URL(url);
  66  |     const normalizedPath = parsedUrl.pathname.replace(/\/+$/, '') || '/';
  67  |     return `${parsedUrl.origin}${normalizedPath}${parsedUrl.search}${parsedUrl.hash}`;
  68  |   }
  69  | 
  70  |   async verifyNewTab(locator, expectedUrl) {
  71  |     const href = await locator.getAttribute('href');
  72  | 
  73  |     if (href) {
  74  |       expect(href).not.toBe('');
  75  |       expect(this.normalizeUrl(href)).toBe(this.normalizeUrl(expectedUrl));
  76  |       return;
  77  |     }
  78  | 
  79  |     await this.page.evaluate(() => {
  80  |       window.__mesheryOpenedUrl = null;
  81  |       // Save original window.open so it can be restored after the check.
  82  |       window.__mesheryOriginalOpen = window.open;
  83  |       window.open = (...args) => {
  84  |         window.__mesheryOpenedUrl = args[0] ?? null;
  85  |         return null;
  86  |       };
  87  |     });
  88  | 
  89  |     await locator.click();
  90  | 
  91  |     try {
  92  |       await expect
  93  |         .poll(async () => {
  94  |           const openedUrl = await this.page.evaluate(() => window.__mesheryOpenedUrl);
  95  |           return openedUrl ? this.normalizeUrl(openedUrl) : null;
  96  |         })
  97  |         .toBe(this.normalizeUrl(expectedUrl));
  98  |     } finally {
  99  |       await this.page.evaluate(() => {
  100 |         if (window.__mesheryOriginalOpen) {
  101 |           window.open = window.__mesheryOriginalOpen;
  102 |           delete window.__mesheryOriginalOpen;
  103 |         }
  104 |       });
  105 |     }
  106 |   }
  107 | }
  108 | 
```