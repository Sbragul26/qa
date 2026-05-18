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
- generic [active] [ref=e1]:
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
        - main [ref=e188]
        - contentinfo [ref=e189]:
          - paragraph [ref=e190]:
            - generic [ref=e191] [cursor=pointer]:
              - text: Built with
              - img [ref=e192]
              - text: by the Meshery Community
  - alert [ref=e195]
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