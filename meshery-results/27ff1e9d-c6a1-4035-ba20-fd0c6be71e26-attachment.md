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
          - generic [ref=e141]:
            - separator [ref=e142]
            - button "Kanvas" [ref=e144] [cursor=pointer]:
              - link "Kanvas" [ref=e145]:
                - /url: /extension/meshmap
                - generic [ref=e147]:
                  - img [ref=e149]
                  - generic [ref=e151]: Kanvas
          - separator [ref=e152]
        - generic [ref=e153]:
          - img [ref=e156] [cursor=pointer]
          - group [ref=e158]:
            - listitem [ref=e159]:
              - link [ref=e160] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e162]
            - listitem [ref=e164]:
              - link [ref=e165] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e167]
            - listitem [ref=e176]:
              - link [ref=e177] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e179]
            - listitem [ref=e181]:
              - link [ref=e182] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e184]
          - listitem [ref=e186]:
            - generic [ref=e187]:
              - text: v1.0.22
              - link [ref=e189] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e190]
              - text: Running latest
    - generic [ref=e192]:
      - banner [ref=e193]:
        - generic [ref=e195]:
          - generic [ref=e197]:
            - button [ref=e199] [cursor=pointer]:
              - img [ref=e200]
            - text: /
            - button [ref=e209] [cursor=pointer]:
              - img [ref=e210]
            - group [ref=e214]:
              - generic [ref=e219]:
                - combobox [ref=e220] [cursor=pointer]:
                  - generic [ref=e221]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Dashboard" [level=5] [ref=e222]
          - generic [ref=e224]:
            - button "contexts" [ref=e227] [cursor=pointer]:
              - generic [ref=e228]:
                - img [ref=e229]
                - generic [ref=e230]: "0"
            - button "99+" [ref=e233] [cursor=pointer]:
              - generic [ref=e234]:
                - img [ref=e235]
                - generic [ref=e238]: 99+
            - button [ref=e242] [cursor=pointer]:
              - img [ref=e244]
            - button [ref=e247] [cursor=pointer]:
              - img [ref=e248]
      - generic [ref=e250]:
        - main [ref=e251]:
          - tablist [ref=e255]:
            - tab "Overview" [selected] [ref=e256] [cursor=pointer]:
              - img [ref=e257]
              - text: Overview
            - tab "Node" [ref=e282] [cursor=pointer]:
              - img [ref=e283]
              - text: Node
            - tab "Namespace" [ref=e289] [cursor=pointer]:
              - img [ref=e290]
              - text: Namespace
            - tab "Workload" [ref=e296] [cursor=pointer]:
              - img [ref=e297]
              - text: Workload
            - tab "Configuration" [ref=e303] [cursor=pointer]:
              - img [ref=e304]
              - text: Configuration
            - tab "Network" [ref=e310] [cursor=pointer]:
              - img [ref=e311]
              - text: Network
            - tab "Security" [ref=e317] [cursor=pointer]:
              - img [ref=e318]
              - text: Security
            - tab "Storage" [ref=e324] [cursor=pointer]:
              - img [ref=e325]
              - text: Storage
            - tab "CRDS" [ref=e331] [cursor=pointer]:
              - img [ref=e332]
              - text: CRDS
          - tabpanel [ref=e339]:
            - generic [ref=e342]:
              - generic [ref=e344]:
                - generic [ref=e346]:
                  - generic [ref=e347]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e348]
                    - generic [ref=e349]:
                      - generic [ref=e350]:
                        - combobox [ref=e351] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e352] [cursor=pointer]:
                        - img [ref=e354]
                  - list [ref=e356]:
                    - listitem:
                      - generic [ref=e359]:
                        - img "APIService"
                        - heading "11" [level=6] [ref=e360]
                    - listitem:
                      - generic [ref=e363]:
                        - img "ConfigMap"
                        - heading "7" [level=6] [ref=e364]
                    - listitem:
                      - generic [ref=e367]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e368]
                    - listitem:
                      - generic [ref=e371]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e372]
                    - listitem:
                      - generic [ref=e375]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e376]
                    - listitem:
                      - generic [ref=e379]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e380]
                    - listitem:
                      - generic [ref=e383]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e384]
                    - listitem:
                      - generic [ref=e387]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e388]
                    - listitem:
                      - generic [ref=e391]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e392]
                    - listitem:
                      - generic [ref=e395]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e396]
                    - listitem:
                      - generic [ref=e399]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e400]
                    - listitem:
                      - generic [ref=e403]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e404]
                - generic [ref=e407]:
                  - generic [ref=e408]:
                    - img [ref=e409]
                    - generic [ref=e412]: GETTING STARTED
                  - generic [ref=e413]:
                    - paragraph [ref=e414]: New here? Follow along these guided tasks to help you get the most of your account.
                    - paragraph [ref=e415]:
                      - generic [ref=e418]: 0%
                    - button "Start" [ref=e420] [cursor=pointer]
                - generic [ref=e424]:
                  - generic [ref=e425]:
                    - img [ref=e426]
                    - heading "HELP CENTER" [level=6] [ref=e430]
                  - list [ref=e432]:
                    - listitem [ref=e433]:
                      - img [ref=e435]
                      - link "Cloud Docs" [ref=e444] [cursor=pointer]:
                        - /url: https://docs.layer5.io/cloud
                      - superscript [ref=e445]:
                        - img [ref=e446]
                    - listitem [ref=e448]:
                      - img [ref=e450]
                      - link "Kanvas Docs" [ref=e459] [cursor=pointer]:
                        - /url: https://docs.layer5.io/kanvas
                      - superscript [ref=e460]:
                        - img [ref=e461]
                    - listitem [ref=e463]:
                      - img [ref=e465]
                      - link "Support Request" [ref=e474] [cursor=pointer]:
                        - /url: https://cloud.meshery.io/support
                      - superscript [ref=e475]:
                        - img [ref=e476]
                    - listitem [ref=e478]:
                      - img [ref=e480]
                      - link "Discussion Forum" [ref=e489] [cursor=pointer]:
                        - /url: https://meshery.io/community/#discussion-forums
                      - superscript [ref=e490]:
                        - img [ref=e491]
                    - listitem [ref=e493]:
                      - img [ref=e495]
                      - link "Slack" [ref=e504] [cursor=pointer]:
                        - /url: https://slack.meshery.io
                      - superscript [ref=e505]:
                        - img [ref=e506]
                - generic [ref=e510]:
                  - generic [ref=e511]:
                    - generic [ref=e512]:
                      - img [ref=e513]
                      - heading "MY RECENT DESIGNS" [level=6] [ref=e522]
                    - button "Sort by" [ref=e523] [cursor=pointer]:
                      - img [ref=e524]
                  - list [ref=e527]:
                    - listitem [ref=e528]:
                      - img [ref=e530]
                      - link "AWS Three-Tier Architecture - ELB EC2 RDS" [ref=e539] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=f54f4163-4adb-4a49-87fa-f06abf9e3b60
                      - generic "Mon, May 18, 2026 2:31 PM" [ref=e541]:
                        - paragraph [ref=e542]: 3 hours ago
                    - listitem [ref=e543]:
                      - img [ref=e545]
                      - link "Design Reviews" [ref=e554] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=fb3f0936-9ab4-45fa-a50b-023639bb9e78
                      - generic "Mon, May 18, 2026 12:32 AM" [ref=e556]:
                        - paragraph [ref=e557]: 17 hours ago
                    - listitem [ref=e558]:
                      - img [ref=e560]
                      - link "Architecture Diagramming" [ref=e569] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=2d2bf908-77da-494c-a92c-19474511672d
                      - generic "Mon, May 18, 2026 12:31 AM" [ref=e571]:
                        - paragraph [ref=e572]: 17 hours ago
                    - listitem [ref=e573]:
                      - img [ref=e575]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=7537ceb9-4590-4fd7-ade4-be94ed9d0460
                      - generic "Sun, May 17, 2026 7:49 PM" [ref=e585]:
                        - paragraph [ref=e586]: a day ago
                    - listitem [ref=e587]:
                      - img [ref=e589]
                      - link "Untitled Design" [ref=e598] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=3d661738-2100-4a4f-a2fb-66ec60f63d72
                      - generic "Sun, May 17, 2026 4:14 PM" [ref=e600]:
                        - paragraph [ref=e601]: a day ago
                    - listitem [ref=e602]:
                      - img [ref=e604]
                      - link "Untitled Design" [ref=e613] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=1eb8522b-68b7-42cb-aa4a-7d619474006d
                      - generic "Sun, May 17, 2026 1:31 PM" [ref=e615]:
                        - paragraph [ref=e616]: a day ago
                    - listitem [ref=e617]:
                      - img [ref=e619]
                      - link "redis-leader-deployment" [ref=e628] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=8e223d00-5c23-4ba5-ac71-e132c5a9818d
                      - generic "Sun, May 17, 2026 10:21 AM" [ref=e630]:
                        - paragraph [ref=e631]: a day ago
                  - generic [ref=e632]:
                    - link "See All Designs" [ref=e633] [cursor=pointer]:
                      - /url: https://cloud.meshery.io/catalog/content/my-designs
                    - button [ref=e634] [cursor=pointer]:
                      - img [ref=e635]
                - generic [ref=e638]:
                  - generic [ref=e639]:
                    - generic [ref=e640]:
                      - img [ref=e641]
                      - heading "WORKSPACE ACTIVITY" [level=6] [ref=e645]
                    - generic [ref=e646]:
                      - combobox [ref=e647] [cursor=pointer]: eks-sandbox
                      - textbox: d26aa57e-e9ec-4424-878c-a794bd3a3b7d
                      - img
                  - list [ref=e648]:
                    - generic [ref=e653]:
                      - strong [ref=e654]: "Mar 28:"
                      - text: lekaf974 created workspace eks-sandbox
                  - link "All Workspaces" [ref=e656] [cursor=pointer]:
                    - /url: /management/workspaces
                - link "KUBERNETES CLUSTER STATUS" [ref=e658] [cursor=pointer]:
                  - /url: /management/connections
                  - generic [ref=e659]:
                    - generic [ref=e660]:
                      - generic [ref=e661]:
                        - img [ref=e662]
                        - heading "KUBERNETES CLUSTER STATUS" [level=6] [ref=e665]
                      - img [ref=e668]
                    - img [ref=e672]:
                      - generic [ref=e675]:
                        - generic [ref=e676]: Clusters Status
                        - generic [ref=e677]:
                          - generic: "1"
                        - generic [ref=e680]:
                          - generic: "9"
                      - generic [ref=e683]:
                        - generic [ref=e684]:
                          - generic: connected
                        - generic [ref=e686]:
                          - generic: not found
              - button "Edit" [ref=e688] [cursor=pointer]:
                - generic [ref=e689]: Edit
                - img [ref=e691]
        - contentinfo [ref=e693]:
          - paragraph [ref=e694]:
            - generic [ref=e695] [cursor=pointer]:
              - text: Built with
              - img [ref=e696]
              - text: by the Meshery Community
  - alert [ref=e699]
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