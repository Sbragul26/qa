# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Catalog Section Details
- Location: tests/e2e/extensions.spec.ts:50:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('catalog-section-heading')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('catalog-section-heading')

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
                        - img [ref=e301]
                  - list [ref=e303]:
                    - listitem:
                      - generic [ref=e306]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e307]
                    - listitem:
                      - generic [ref=e310]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e311]
                    - listitem:
                      - generic [ref=e314]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e315]
                    - listitem:
                      - generic [ref=e318]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e319]
                    - listitem:
                      - generic [ref=e322]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e323]
                    - listitem:
                      - generic [ref=e326]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e327]
                    - listitem:
                      - generic [ref=e330]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e331]
                    - listitem:
                      - generic [ref=e334]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e335]
                    - listitem:
                      - generic [ref=e338]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e339]
                    - listitem:
                      - generic [ref=e342]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e343]
                    - listitem:
                      - generic [ref=e346]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e347]
                    - listitem:
                      - generic [ref=e350]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e351]
                    - listitem:
                      - generic [ref=e354]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e355]
                    - listitem:
                      - generic [ref=e358]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e359]
                - generic [ref=e362]:
                  - generic [ref=e363]:
                    - img [ref=e364]
                    - heading "LATEST BLOGS" [level=6] [ref=e366]
                  - list [ref=e368]:
                    - listitem [ref=e369]:
                      - img [ref=e371]
                      - link "Meshery v1.0 is Generally Available" [ref=e380] [cursor=pointer]:
                        - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
                      - superscript [ref=e381]:
                        - img [ref=e382]
                    - listitem [ref=e384]:
                      - img [ref=e386]
                      - link "Mesheryctl Relationship Commands Promoted From Experimental" [ref=e395] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
                      - superscript [ref=e396]:
                        - img [ref=e397]
                    - listitem [ref=e399]:
                      - img [ref=e401]
                      - link "Meshery Workspaces" [ref=e410] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
                      - superscript [ref=e411]:
                        - img [ref=e412]
                    - listitem [ref=e414]:
                      - img [ref=e416]
                      - link "Certified Meshery Contributors Share Their Experiences" [ref=e425] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
                      - superscript [ref=e426]:
                        - img [ref=e427]
                    - listitem [ref=e429]:
                      - img [ref=e431]
                      - link "The Meshery Umbrella Expands" [ref=e440] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
                      - superscript [ref=e441]:
                        - img [ref=e442]
              - button "Edit" [ref=e444] [cursor=pointer]:
                - generic [ref=e445]: Edit
                - img [ref=e447]
        - contentinfo [ref=e449]:
          - paragraph [ref=e450]:
            - generic [ref=e451] [cursor=pointer]:
              - text: Built with
              - img [ref=e452]
              - text: by the Meshery Community
  - alert [ref=e455]
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
  43 |     await expect(extensionsPage.designEmbedLearnMoreBtn).toBeVisible();
  44 |     await extensionsPage.verifyNewTab(
  45 |       extensionsPage.designEmbedLearnMoreBtn,
  46 |       URLS.DESIGNS.DESIGNER_EMBED,
  47 |     );
  48 |   });
  49 | 
  50 |   test('Verify Meshery Catalog Section Details', async () => {
> 51 |     await expect(extensionsPage.catalogSectionHeading).toBeVisible();
     |                                                        ^ Error: expect(locator).toBeVisible() failed
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