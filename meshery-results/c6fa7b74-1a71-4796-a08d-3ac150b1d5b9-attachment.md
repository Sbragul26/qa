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

```yaml
- navigation:
  - img
  - img
  - list:
    - button "Dashboard":
      - link "Dashboard":
        - /url: /
        - img
        - text: Dashboard
    - button "Lifecycle":
      - link "Lifecycle":
        - /url: /management/connections
        - img
        - text: Lifecycle
    - button "Configuration":
      - link "Configuration":
        - /url: /configuration/designs
        - img
        - text: Configuration
    - button "meshery-button-2 Performance":
      - link "meshery-button-2 Performance":
        - /url: /performance
        - img "meshery-button-2"
        - text: Performance
    - button "Extensions":
      - link "Extensions":
        - /url: /extensions
        - img
        - text: Extensions
    - separator
  - img
  - group:
    - listitem:
      - link:
        - /url: https://docs.meshery.io
        - img
    - listitem:
      - link:
        - /url: https://slack.meshery.io
        - img
    - listitem:
      - link:
        - /url: https://meshery.io/community#community-forums
        - img
    - listitem:
      - link:
        - /url: https://github.com/meshery/meshery/issues/new/choose
        - img
  - listitem:
    - text: v1.0.24
    - link:
      - /url: https://docs.meshery.io/project/releases/v1.0.24
      - img
    - text: Update available
    - link:
      - /url: https://docs.meshery.io/project/releases/v1.0.25
      - img
- banner:
  - button:
    - img
  - text: /
  - button:
    - img
  - text: /
  - heading "Dashboard" [level=5]
  - button "contexts":
    - img
    - text: "0"
  - button:
    - img
  - button
  - button:
    - img
- main:
  - tablist:
    - tab "Overview" [selected]:
      - img
      - text: Overview
    - tab "Node":
      - img
      - text: Node
    - tab "Namespace":
      - img
      - text: Namespace
    - tab "Workload":
      - img
      - text: Workload
    - tab "Configuration":
      - img
      - text: Configuration
    - tab "Network":
      - img
      - text: Network
    - tab "Security":
      - img
      - text: Security
    - tab "Storage":
      - img
      - text: Storage
    - tab "CRDS":
      - img
      - text: CRDS
  - tabpanel:
    - heading "Cluster Resource Overview" [level=6]
    - combobox: All Resources
    - button:
      - img
    - list:
      - listitem:
        - img "APIService"
        - heading "21" [level=6]
      - listitem:
        - img "ClusterRole"
        - heading "72" [level=6]
      - listitem:
        - img "ConfigMap"
        - heading "13" [level=6]
      - listitem:
        - img "DaemonSet"
        - heading "2" [level=6]
      - listitem:
        - img "Deployment"
        - heading "2" [level=6]
      - listitem:
        - img "EndpointSlice"
        - heading "2" [level=6]
      - listitem:
        - img "Endpoints"
        - heading "2" [level=6]
      - listitem:
        - img "Namespace"
        - heading "5" [level=6]
      - listitem:
        - img "Node"
        - heading "1" [level=6]
      - listitem:
        - img "Pod"
        - heading "9" [level=6]
      - listitem:
        - img "ReplicaSet"
        - heading "2" [level=6]
      - listitem:
        - img "Secret"
        - heading "1" [level=6]
      - listitem:
        - img "Service"
        - heading "2" [level=6]
      - listitem:
        - img "StorageClass"
        - heading "1" [level=6]
    - img
    - heading "LATEST BLOGS" [level=6]
    - list:
      - listitem:
        - img
        - link "Meshery v1.0 is Generally Available":
          - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
        - superscript:
          - img
      - listitem:
        - img
        - link "Mesheryctl Relationship Commands Promoted From Experimental":
          - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
        - superscript:
          - img
      - listitem:
        - img
        - link "Meshery Workspaces":
          - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
        - superscript:
          - img
      - listitem:
        - img
        - link "Certified Meshery Contributors Share Their Experiences":
          - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
        - superscript:
          - img
      - listitem:
        - img
        - link "The Meshery Umbrella Expands":
          - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
        - superscript:
          - img
    - button "Edit":
      - text: Edit
      - img
- contentinfo:
  - paragraph:
    - text: Built with
    - img
    - text: by the Meshery Community
- alert
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