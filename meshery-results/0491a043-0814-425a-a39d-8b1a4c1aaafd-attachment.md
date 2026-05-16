# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Design Embed Details
- Location: tests/e2e/extensions.spec.ts:42:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('design-embed-learn-more-btn')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('design-embed-learn-more-btn')

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
      - generic [ref=e449]:
        - img [ref=e450]
        - paragraph [ref=e453]: MeshSync connected in embedded mode
        - group [ref=e455]:
          - button "Open" [ref=e456] [cursor=pointer]:
            - img [ref=e457]
          - button "Close" [ref=e461] [cursor=pointer]:
            - img [ref=e462]
  - alert [ref=e465]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { ExtensionsPage } from './pages/ExtensionsPage';
  3  | 
  4  | const URLS = {
  5  |   DESIGNS: {
  6  |     DOCS: 'https://docs.meshery.io/',
  7  |     DESIGNER_EMBED: 'https://meshery.io/extensions/meshery-design-embed',
  8  |   },
  9  |   DOCKER: {
  10 |     EXTENSION: 'https://hub.docker.com/extensions/meshery/docker-extension-meshery',
  11 |   },
  12 |   MESHERY: {
  13 |     CATALOG: 'https://meshery.io/catalog',
  14 |     ADAPTER_DOCS: 'https://docs.meshery.io/concepts/architecture/adapters',
  15 |   },
  16 | };
  17 | 
  18 | test.describe('Extensions Section Tests', () => {
  19 |   let extensionsPage: ExtensionsPage;
  20 | 
  21 |   test.beforeEach(async ({ page }) => {
  22 |     extensionsPage = new ExtensionsPage(page);
  23 |     await extensionsPage.goto();
  24 |   });
  25 | 
  26 |   test('Verify extension nav items use top-level layout', async () => {
  27 |     await extensionsPage.verifyExtensionNavItemsUseTopLevelLayout();
  28 |   });
  29 | 
  30 |   test('Verify Performance Analysis Details', async () => {
  31 |     await extensionsPage.verifyPerformanceAnalysisDetails();
  32 |   });
  33 | 
  34 |   test('Verify Meshery Docker Extension Details', async () => {
  35 |     await expect(extensionsPage.dockerExtensionHeading).toBeVisible();
  36 |     await extensionsPage.verifyNewTab(
  37 |       extensionsPage.dockerExtensionDownloadBtn,
  38 |       URLS.DOCKER.EXTENSION,
  39 |     );
  40 |   });
  41 | 
  42 |   test('Verify Meshery Design Embed Details', async () => {
> 43 |     await expect(extensionsPage.designEmbedLearnMoreBtn).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  44 |     await extensionsPage.verifyNewTab(
  45 |       extensionsPage.designEmbedLearnMoreBtn,
  46 |       URLS.DESIGNS.DESIGNER_EMBED,
  47 |     );
  48 |   });
  49 | 
  50 |   test('Verify Meshery Catalog Section Details', async () => {
  51 |     await expect(extensionsPage.catalogSectionHeading).toBeVisible();
  52 |     await extensionsPage.toggleCatalog();
  53 |     await extensionsPage.verifyNewTab(extensionsPage.catalogLink, URLS.MESHERY.CATALOG);
  54 |   });
  55 | 
  56 |   test('Verify Meshery Adapter for Istio Section', async () => {
  57 |     await extensionsPage.verifyNewTab(
  58 |       extensionsPage.adapterDocsIstioLink,
  59 |       URLS.MESHERY.ADAPTER_DOCS,
  60 |     );
  61 |   });
  62 | });
  63 | 
```