# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Catalog Section Details
- Location: tests/e2e/extensions.spec.ts:54:7

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
                        - heading "72" [level=6] [ref=e321]
                    - listitem:
                      - generic [ref=e324]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e325]
                    - listitem:
                      - generic [ref=e328]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e329]
                    - listitem:
                      - generic [ref=e332]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e333]
                    - listitem:
                      - generic [ref=e336]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e337]
                    - listitem:
                      - generic [ref=e340]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e341]
                    - listitem:
                      - generic [ref=e344]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e345]
                    - listitem:
                      - generic [ref=e348]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e349]
                    - listitem:
                      - generic [ref=e352]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e353]
                    - listitem:
                      - generic [ref=e356]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e357]
                    - listitem:
                      - generic [ref=e360]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e361]
                    - listitem:
                      - generic [ref=e364]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e365]
                    - listitem:
                      - generic [ref=e368]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e369]
                - generic [ref=e372]:
                  - generic [ref=e373]:
                    - img [ref=e374]
                    - generic [ref=e377]: GETTING STARTED
                  - generic [ref=e378]:
                    - paragraph [ref=e379]: New here? Follow along these guided tasks to help you get the most of your account.
                    - paragraph [ref=e380]:
                      - generic [ref=e383]: 0%
                    - button "Start" [ref=e385] [cursor=pointer]
                - generic [ref=e389]:
                  - generic [ref=e390]:
                    - img [ref=e391]
                    - heading "HELP CENTER" [level=6] [ref=e395]
                  - list [ref=e397]:
                    - listitem [ref=e398]:
                      - img [ref=e400]
                      - link "Cloud Docs" [ref=e409] [cursor=pointer]:
                        - /url: https://docs.layer5.io/cloud
                      - superscript [ref=e410]:
                        - img [ref=e411]
                    - listitem [ref=e413]:
                      - img [ref=e415]
                      - link "Kanvas Docs" [ref=e424] [cursor=pointer]:
                        - /url: https://docs.layer5.io/kanvas
                      - superscript [ref=e425]:
                        - img [ref=e426]
                    - listitem [ref=e428]:
                      - img [ref=e430]
                      - link "Support Request" [ref=e439] [cursor=pointer]:
                        - /url: https://cloud.meshery.io/support
                      - superscript [ref=e440]:
                        - img [ref=e441]
                    - listitem [ref=e443]:
                      - img [ref=e445]
                      - link "Discussion Forum" [ref=e454] [cursor=pointer]:
                        - /url: https://meshery.io/community/#discussion-forums
                      - superscript [ref=e455]:
                        - img [ref=e456]
                    - listitem [ref=e458]:
                      - img [ref=e460]
                      - link "Slack" [ref=e469] [cursor=pointer]:
                        - /url: https://slack.meshery.io
                      - superscript [ref=e470]:
                        - img [ref=e471]
                - generic [ref=e475]:
                  - generic [ref=e476]:
                    - generic [ref=e477]:
                      - img [ref=e478]
                      - heading "MY RECENT DESIGNS" [level=6] [ref=e487]
                    - button "Sort by" [ref=e488] [cursor=pointer]:
                      - img [ref=e489]
                  - list [ref=e492]:
                    - listitem [ref=e493]:
                      - img [ref=e495]
                      - link "[Tutorial] Exploring Kubernetes Pod" [ref=e504] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=20597507-870c-449c-91b1-9c615bdec2af
                      - generic "Thu, May 14, 2026 11:52 AM" [ref=e506]:
                        - paragraph [ref=e507]: 2 hours ago
                    - listitem [ref=e508]:
                      - img [ref=e510]
                      - link "Meshery Certification Tracks (Copy)" [ref=e519] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=d368f4b4-6b04-4a59-a1f3-4f36a83331a8
                      - generic "Thu, May 14, 2026 8:23 AM" [ref=e521]:
                        - paragraph [ref=e522]: 5 hours ago
                    - listitem [ref=e523]:
                      - img [ref=e525]
                      - link "Meshery v0.6.73" [ref=e534] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=5eeaef1f-9c17-4b52-b0bb-3e488ad15a2c
                      - generic "Thu, May 14, 2026 8:14 AM" [ref=e536]:
                        - paragraph [ref=e537]: 5 hours ago
                    - listitem [ref=e538]:
                      - img [ref=e540]
                      - link "LoxiLB Multi-Cloud VPN & Connectivity" [ref=e549] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=ccee413b-034d-4b49-af82-8e2727a24a26
                      - generic "Thu, May 14, 2026 2:30 AM" [ref=e551]:
                        - paragraph [ref=e552]: 11 hours ago
                    - listitem [ref=e553]:
                      - img [ref=e555]
                      - link "Azure Service Operator" [ref=e564] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=7f3db01d-8e70-4fd9-a273-7cef5f2cba44
                      - generic "Wed, May 13, 2026 10:59 PM" [ref=e566]:
                        - paragraph [ref=e567]: 14 hours ago
                    - listitem [ref=e568]:
                      - img [ref=e570]
                      - link "Untitled Design" [ref=e579] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=75c36844-a44c-476a-9534-3560856617f8
                      - generic "Wed, May 13, 2026 8:54 PM" [ref=e581]:
                        - paragraph [ref=e582]: 16 hours ago
                    - listitem [ref=e583]:
                      - img [ref=e585]
                      - link "Architecture Diagramming" [ref=e594] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=fe98eb6f-f594-40c9-985b-1760c8cdc3ab
                      - generic "Wed, May 13, 2026 8:42 PM" [ref=e596]:
                        - paragraph [ref=e597]: 17 hours ago
                  - generic [ref=e598]:
                    - link "See All Designs" [ref=e599] [cursor=pointer]:
                      - /url: https://cloud.meshery.io/catalog/content/my-designs
                    - button [ref=e600] [cursor=pointer]:
                      - img [ref=e601]
                - generic [ref=e604]:
                  - generic [ref=e605]:
                    - generic [ref=e606]:
                      - img [ref=e607]
                      - heading "WORKSPACE ACTIVITY" [level=6] [ref=e611]
                    - generic [ref=e612]:
                      - combobox [ref=e613] [cursor=pointer]: eks-sandbox
                      - textbox: d26aa57e-e9ec-4424-878c-a794bd3a3b7d
                      - img
                  - list [ref=e614]:
                    - generic [ref=e619]:
                      - strong [ref=e620]: "Mar 28:"
                      - text: lekaf974 created workspace eks-sandbox
                  - link "All Workspaces" [ref=e622] [cursor=pointer]:
                    - /url: /management/workspaces
                - link "KUBERNETES CLUSTER STATUS" [ref=e624] [cursor=pointer]:
                  - /url: /management/connections
                  - generic [ref=e625]:
                    - generic [ref=e626]:
                      - generic [ref=e627]:
                        - img [ref=e628]
                        - heading "KUBERNETES CLUSTER STATUS" [level=6] [ref=e631]
                      - img [ref=e634]
                    - img [ref=e638]:
                      - generic [ref=e641]:
                        - generic [ref=e642]: Clusters Status
                        - generic [ref=e643]:
                          - generic: "2"
                        - generic [ref=e646]:
                          - generic: "8"
                      - generic [ref=e649]:
                        - generic [ref=e650]:
                          - generic: connected
                        - generic [ref=e652]:
                          - generic: not found
              - button "Edit" [ref=e654] [cursor=pointer]:
                - generic [ref=e655]: Edit
                - img [ref=e657]
        - contentinfo [ref=e659]:
          - paragraph [ref=e660]:
            - generic [ref=e661] [cursor=pointer]:
              - text: Built with
              - img [ref=e662]
              - text: by the Meshery Community
  - alert [ref=e665]
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
  26 |   test('Verify Kanvas Snapshot UI elements', async () => {
  27 |     await extensionsPage.verifyKanvasSnapshotDetails();
  28 |   });
  29 | 
  30 |   test('Verify extension nav items use top-level layout', async () => {
  31 |     await extensionsPage.verifyExtensionNavItemsUseTopLevelLayout();
  32 |   });
  33 | 
  34 |   test('Verify Performance Analysis Details', async () => {
  35 |     await extensionsPage.verifyPerformanceAnalysisDetails();
  36 |   });
  37 | 
  38 |   test('Verify Meshery Docker Extension Details', async () => {
  39 |     await expect(extensionsPage.dockerExtensionHeading).toBeVisible();
  40 |     await extensionsPage.verifyNewTab(
  41 |       extensionsPage.dockerExtensionDownloadBtn,
  42 |       URLS.DOCKER.EXTENSION,
  43 |     );
  44 |   });
  45 | 
  46 |   test('Verify Meshery Design Embed Details', async () => {
  47 |     await expect(extensionsPage.designEmbedLearnMoreBtn).toBeVisible();
  48 |     await extensionsPage.verifyNewTab(
  49 |       extensionsPage.designEmbedLearnMoreBtn,
  50 |       URLS.DESIGNS.DESIGNER_EMBED,
  51 |     );
  52 |   });
  53 | 
  54 |   test('Verify Meshery Catalog Section Details', async () => {
> 55 |     await expect(extensionsPage.catalogSectionHeading).toBeVisible();
     |                                                        ^ Error: expect(locator).toBeVisible() failed
  56 |     await extensionsPage.toggleCatalog();
  57 |     await extensionsPage.verifyNewTab(extensionsPage.catalogLink, URLS.MESHERY.CATALOG);
  58 |   });
  59 | 
  60 |   test('Verify Meshery Adapter for Istio Section', async () => {
  61 |     await extensionsPage.verifyNewTab(
  62 |       extensionsPage.adapterDocsIstioLink,
  63 |       URLS.MESHERY.ADAPTER_DOCS,
  64 |     );
  65 |   });
  66 | });
  67 | 
```