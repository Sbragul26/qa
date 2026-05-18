# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: connections.spec.ts >> Connection Management Tests >> Verify that UI components are displayed
- Location: tests/e2e/connections.spec.ts:58:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
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
          - generic [ref=e23]:
            - button "Lifecycle" [ref=e24] [cursor=pointer]:
              - link "Lifecycle" [ref=e25]:
                - /url: /management/connections
                - generic [ref=e26]:
                  - img [ref=e28]
                  - generic [ref=e31]: Lifecycle
            - list [ref=e35]:
              - button "Connections" [active] [ref=e37] [cursor=pointer]:
                - generic [ref=e38]:
                  - img [ref=e40]
                  - generic [ref=e42]: Connections
              - button "Environments" [ref=e44] [cursor=pointer]:
                - generic [ref=e45]:
                  - img [ref=e47]
                  - generic [ref=e49]: Environments
              - button "Workspaces" [ref=e51] [cursor=pointer]:
                - generic [ref=e52]:
                  - img [ref=e54]
                  - generic [ref=e56]: Workspaces
              - button "Adapters" [ref=e58] [cursor=pointer]:
                - generic [ref=e59]:
                  - img [ref=e61]
                  - generic [ref=e74]: Adapters
          - generic [ref=e75]:
            - button "Configuration":
              - link "Configuration":
                - /url: /configuration/designs
                - generic:
                  - generic:
                    - img
                  - generic:
                    - generic: Configuration
          - button "meshery-button-2 Performance" [ref=e77] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e78]:
              - /url: /performance
              - generic [ref=e79]:
                - img "meshery-button-2" [ref=e81]
                - generic [ref=e107]: Performance
          - button "Extensions" [ref=e109] [cursor=pointer]:
            - link "Extensions" [ref=e110]:
              - /url: /extensions
              - generic [ref=e111]:
                - img [ref=e113]
                - generic [ref=e140]: Extensions
          - separator [ref=e141]
        - generic [ref=e142]:
          - img [ref=e145] [cursor=pointer]
          - group [ref=e147]:
            - listitem [ref=e148]:
              - link [ref=e149] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e151]
            - listitem [ref=e153]:
              - link [ref=e154] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e156]
            - listitem [ref=e165]:
              - link [ref=e166] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e168]
            - listitem [ref=e170]:
              - link [ref=e171] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e173]
          - listitem [ref=e175]:
            - generic [ref=e176]:
              - text: v1.0.22
              - link [ref=e178] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e179]
              - text: Running latest
    - generic [ref=e181]:
      - banner [ref=e182]:
        - generic [ref=e184]:
          - generic [ref=e186]:
            - button [ref=e188] [cursor=pointer]:
              - img [ref=e189]
            - text: /
            - button [ref=e198] [cursor=pointer]:
              - img [ref=e199]
            - text: /
            - heading "Dashboard" [level=5] [ref=e203]
          - generic [ref=e205]:
            - button "contexts" [ref=e208] [cursor=pointer]:
              - generic [ref=e209]:
                - img [ref=e210]
                - generic [ref=e211]: "0"
            - button [ref=e214] [cursor=pointer]:
              - img [ref=e215]
            - button [ref=e222] [cursor=pointer]:
              - img [ref=e224]
            - button [ref=e227] [cursor=pointer]:
              - img [ref=e228]
      - generic [ref=e230]:
        - main [ref=e231]:
          - tablist [ref=e235]:
            - tab "Overview" [selected] [ref=e236] [cursor=pointer]:
              - img [ref=e237]
              - text: Overview
            - tab "Node" [ref=e262] [cursor=pointer]:
              - img [ref=e263]
              - text: Node
            - tab "Namespace" [ref=e269] [cursor=pointer]:
              - img [ref=e270]
              - text: Namespace
            - tab "Workload" [ref=e276] [cursor=pointer]:
              - img [ref=e277]
              - text: Workload
            - tab "Configuration" [ref=e283] [cursor=pointer]:
              - img [ref=e284]
              - text: Configuration
            - tab "Network" [ref=e290] [cursor=pointer]:
              - img [ref=e291]
              - text: Network
            - tab "Security" [ref=e297] [cursor=pointer]:
              - img [ref=e298]
              - text: Security
            - tab "Storage" [ref=e304] [cursor=pointer]:
              - img [ref=e305]
              - text: Storage
            - tab "CRDS" [ref=e311] [cursor=pointer]:
              - img [ref=e312]
              - text: CRDS
          - tabpanel [ref=e319]:
            - generic [ref=e322]:
              - generic [ref=e324]:
                - generic [ref=e326]:
                  - generic [ref=e327]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e328]
                    - generic [ref=e329]:
                      - generic [ref=e330]:
                        - combobox [ref=e331] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e332] [cursor=pointer]:
                        - img [ref=e334]
                  - list [ref=e336]:
                    - listitem:
                      - generic [ref=e339]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e340]
                    - listitem:
                      - generic [ref=e343]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e344]
                    - listitem:
                      - generic [ref=e347]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e348]
                    - listitem:
                      - generic [ref=e351]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e352]
                    - listitem:
                      - generic [ref=e355]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e356]
                    - listitem:
                      - generic [ref=e359]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e360]
                    - listitem:
                      - generic [ref=e363]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e364]
                    - listitem:
                      - generic [ref=e367]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e368]
                    - listitem:
                      - generic [ref=e371]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e372]
                    - listitem:
                      - generic [ref=e375]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e376]
                    - listitem:
                      - generic [ref=e379]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e380]
                    - listitem:
                      - generic [ref=e383]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e384]
                    - listitem:
                      - generic [ref=e387]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e388]
                    - listitem:
                      - generic [ref=e391]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e392]
                - generic [ref=e395]:
                  - generic [ref=e396]:
                    - img [ref=e397]
                    - heading "LATEST BLOGS" [level=6] [ref=e399]
                  - list [ref=e401]:
                    - listitem [ref=e402]:
                      - img [ref=e404]
                      - link "Meshery v1.0 is Generally Available" [ref=e413] [cursor=pointer]:
                        - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
                      - superscript [ref=e414]:
                        - img [ref=e415]
                    - listitem [ref=e417]:
                      - img [ref=e419]
                      - link "Mesheryctl Relationship Commands Promoted From Experimental" [ref=e428] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
                      - superscript [ref=e429]:
                        - img [ref=e430]
                    - listitem [ref=e432]:
                      - img [ref=e434]
                      - link "Meshery Workspaces" [ref=e443] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
                      - superscript [ref=e444]:
                        - img [ref=e445]
                    - listitem [ref=e447]:
                      - img [ref=e449]
                      - link "Certified Meshery Contributors Share Their Experiences" [ref=e458] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
                      - superscript [ref=e459]:
                        - img [ref=e460]
                    - listitem [ref=e462]:
                      - img [ref=e464]
                      - link "The Meshery Umbrella Expands" [ref=e473] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
                      - superscript [ref=e474]:
                        - img [ref=e475]
              - button "Edit" [ref=e477] [cursor=pointer]:
                - generic [ref=e478]: Edit
                - img [ref=e480]
        - contentinfo [ref=e482]:
          - paragraph [ref=e483]:
            - generic [ref=e484] [cursor=pointer]:
              - text: Built with
              - img [ref=e485]
              - text: by the Meshery Community
      - generic [ref=e492]:
        - img [ref=e493]
        - paragraph [ref=e496]: MeshSync connected in embedded mode
        - group [ref=e498]:
          - button "Open" [ref=e499] [cursor=pointer]:
            - img [ref=e500]
          - button "Close" [ref=e504] [cursor=pointer]:
            - img [ref=e505]
  - alert [ref=e508]
```

# Test source

```ts
  1   | import { expect, Page, Response } from '@playwright/test';
  2   | import { test } from './fixtures/project';
  3   | import { ENV } from './env';
  4   | import { waitForSnackBar } from './utils/waitForSnackBar';
  5   | import { DashboardPage } from './pages/DashboardPage';
  6   | 
  7   | // Define the shape of the transition test objects
  8   | interface TransitionTest {
  9   |   name: string;
  10  |   transitionOption: string;
  11  |   statusAfterTransition: string;
  12  |   restorationOption: string;
  13  | }
  14  | 
  15  | // These tests need to be updated to reflect the latest connection api changes
  16  | function waitForConnectionsApiResponse(page: Page): Promise<Response> {
  17  |   return page.waitForResponse(
  18  |     (response) =>
  19  |       response.url().includes('/api/integrations/connections') && response.status() === 200,
  20  |   );
  21  | }
  22  | 
  23  | // name: Name of the test
  24  | // transitionOption: Option to be chosen from dropdown to transition to another state
  25  | // statusAfterTransition: Text shown in current state after transition
  26  | // restorationOption: Option to be chosen from dropdown to transition back to connected state
  27  | const transitionTests: TransitionTest[] = [
  28  |   // skip: this is broken
  29  |   // {
  30  |   //   name: 'Transition to disconnected state and then back to connected state',
  31  |   //   transitionOption: 'disconnected',
  32  |   //   statusAfterTransition: 'disconnected',
  33  |   //   restorationOption: 'connected',
  34  |   // },
  35  |   // {
  36  |   //   name: 'Transition to ignored state and then back to connected state',
  37  |   //   transitionOption: 'ignored',
  38  |   //   statusAfterTransition: 'ignored',
  39  |   //   restorationOption: 'registered',
  40  |   // },
  41  |   // {
  42  |   //   name: 'Transition to not found state and then back to connected state',
  43  |   //   transitionOption: 'not found',
  44  |   //   statusAfterTransition: 'not found',
  45  |   //   restorationOption: 'discovered',
  46  |   // },
  47  | ];
  48  | 
  49  | test.describe.serial('Connection Management Tests', () => {
  50  |   test.beforeEach(async ({ page }) => {
  51  |     const dashboardPage = new DashboardPage(page);
  52  |     await dashboardPage.navigateToDashboard();
  53  |     await dashboardPage.navigateToConnections();
> 54  |     await page.waitForURL(/\/management\/connections/);
      |                ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  55  |     await expect(page.getByTestId('ConnectionTable-search')).toBeVisible();
  56  |   });
  57  | 
  58  |   test('Verify that UI components are displayed', async ({ page }) => {
  59  |     // Verify that connections table is displayed (by checking for table headings)
  60  |     const headings = ['Name', 'Environments', 'Kind', 'Category', 'Status', 'Actions'];
  61  |     for (const heading of headings) {
  62  |       await expect(page.getByRole('columnheader', { name: heading })).toBeVisible();
  63  |     }
  64  |   });
  65  | 
  66  |   // test('Add a cluster connection by uploading kubeconfig file', async ({
  67  |   //   page,
  68  |   //   clusterMetaData,
  69  |   // }) => {
  70  |   //   await page.getByRole('tab', { name: 'Connections' }).click();
  71  | 
  72  |   //   const addConnectionReq = page.waitForRequest(
  73  |   //     (request) =>
  74  |   //       request.url() === `${ENV.MESHERY_SERVER_URL}/api/system/kubernetes` &&
  75  |   //       request.method() === 'POST',
  76  |   //   );
  77  |   //   const addConnectionRes = page.waitForResponse(
  78  |   //     (response) =>
  79  |   //       response.url() === `${ENV.MESHERY_SERVER_URL}/api/system/kubernetes` &&
  80  |   //       response.status() === 200,
  81  |   //   );
  82  |   //   await page.getByTestId('connection-addCluster').click();
  83  | 
  84  |   //   // Verify "Add Kubernetes Cluster(s)" modal opens
  85  |   //   await expect(page.getByTestId('connection-addKubernetesModal')).toBeVisible();
  86  | 
  87  |   //   const fileChooserPromise = page.waitForEvent('filechooser');
  88  |   //   await page.getByTestId('connection-uploadKubeConfig').click();
  89  |   //   const fileChooser = await fileChooserPromise;
  90  |   //   // Attach existing kubeconfig file of the system, to test the upload without making any changes in configuration
  91  |   //   const kubeConfigPath = `${os.homedir()}/.kube/config`;
  92  |   //   await fileChooser.setFiles(kubeConfigPath);
  93  | 
  94  |   //   await page.getByRole('button', { name: 'IMPORT', exact: true }).click();
  95  | 
  96  |   //   await addConnectionReq;
  97  |   //   await addConnectionRes;
  98  | 
  99  |   //   await page.getByRole('button', { name: 'OK' }).click();
  100 | 
  101 |   //   // Search for the newly added cluster
  102 |   //   await page.getByTestId('ConnectionTable-search').getByRole('button').click();
  103 | 
  104 |   //   const getConnectionsRes = waitForConnectionsApiResponse(page);
  105 | 
  106 |   //   await page.getByRole('textbox', { name: 'Search Connections...' }).click();
  107 |   //   await page.getByRole('textbox', { name: 'Search Connections...' }).fill(clusterMetaData.name);
  108 | 
  109 |   //   await getConnectionsRes;
  110 | 
  111 |   //   const newConnectionRow = page.getByRole('menuitem', { hasText: clusterMetaData.name }).first();
  112 |   //   await expect(newConnectionRow).toContainText('connected');
  113 |   // });
  114 | 
  115 |   transitionTests.forEach((t) => {
  116 |     test(t.name, async ({ page, clusterMetaData }) => {
  117 |       const stateTransitionReq = page.waitForRequest(
  118 |         (request) =>
  119 |           request.url() ===
  120 |             `${ENV.MESHERY_SERVER_URL}/api/integrations/connections/kubernetes/status` &&
  121 |           request.method() === 'PUT',
  122 |       );
  123 | 
  124 |       const stateTransitionRes = page.waitForResponse(
  125 |         (response) =>
  126 |           response.url() ===
  127 |             `${ENV.MESHERY_SERVER_URL}/api/integrations/connections/kubernetes/status` &&
  128 |           response.status() === 202,
  129 |       );
  130 | 
  131 |       const getFilteredConnectionsRes = waitForConnectionsApiResponse(page);
  132 | 
  133 |       const getStatusUpdateConnectionsRes = waitForConnectionsApiResponse(page);
  134 | 
  135 |       await page.getByTestId('ConnectionTable-search').getByRole('button').click();
  136 |       await page.getByRole('textbox', { name: 'Search Connections...' }).fill(clusterMetaData.name);
  137 | 
  138 |       await getFilteredConnectionsRes;
  139 | 
  140 |       const matchingRows = page.getByRole('menuitem', { hasText: clusterMetaData.name });
  141 | 
  142 |       const connectedRow = matchingRows
  143 |         .filter({
  144 |           has: page.locator('span', { hasText: 'connected' }),
  145 |         })
  146 |         .first();
  147 | 
  148 |       await expect(connectedRow).toBeVisible();
  149 | 
  150 |       // ===== TRANSITIONING TO A NEW STATE =====
  151 | 
  152 |       // open state transition options dropdown
  153 |       await connectedRow.locator('span', { hasText: 'connected' }).click();
  154 |       await page.getByRole('option', { name: t.transitionOption }).click();
```