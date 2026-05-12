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
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('ConnectionTable-search')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('ConnectionTable-search')

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
          - button "Configuration" [ref=e76] [cursor=pointer]:
            - link "Configuration" [ref=e77]:
              - /url: /configuration/designs
              - generic [ref=e78]:
                - img [ref=e80]
                - generic [ref=e85]: Configuration
          - button "meshery-button-2 Performance" [ref=e87] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e88]:
              - /url: /performance
              - generic [ref=e89]:
                - img "meshery-button-2" [ref=e91]
                - generic [ref=e117]: Performance
          - button "Extensions" [ref=e119] [cursor=pointer]:
            - link "Extensions" [ref=e120]:
              - /url: /extensions
              - generic [ref=e121]:
                - img [ref=e123]
                - generic [ref=e150]: Extensions
          - generic [ref=e151]:
            - separator [ref=e152]
            - button "Kanvas" [ref=e154] [cursor=pointer]:
              - link "Kanvas" [ref=e155]:
                - /url: /extension/meshmap
                - generic [ref=e157]:
                  - img [ref=e159]
                  - generic [ref=e161]: Kanvas
          - separator [ref=e162]
        - generic [ref=e163]:
          - img [ref=e166] [cursor=pointer]
          - group [ref=e168]:
            - listitem [ref=e169]:
              - link [ref=e170] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e172]
            - listitem [ref=e174]:
              - link [ref=e175] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e177]
            - listitem [ref=e186]:
              - link [ref=e187] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e189]
            - listitem [ref=e191]:
              - link [ref=e192] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e194]
          - listitem [ref=e196]:
            - generic [ref=e197]:
              - text: v1.0.22
              - link [ref=e199] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e200]
              - text: Running latest
    - generic [ref=e202]:
      - banner [ref=e203]:
        - generic [ref=e205]:
          - generic [ref=e207]:
            - button [ref=e209] [cursor=pointer]:
              - img [ref=e210]
            - text: /
            - button [ref=e219] [cursor=pointer]:
              - img [ref=e220]
            - group [ref=e224]:
              - generic [ref=e229]:
                - combobox [ref=e230] [cursor=pointer]:
                  - generic [ref=e231]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Connections" [level=5] [ref=e232]
          - generic [ref=e234]:
            - button "contexts" [ref=e237] [cursor=pointer]:
              - generic [ref=e238]:
                - img [ref=e239]
                - generic [ref=e240]: "0"
            - button "99+" [ref=e243] [cursor=pointer]:
              - generic [ref=e244]:
                - img [ref=e245]
                - generic [ref=e248]: 99+
            - button [ref=e252] [cursor=pointer]:
              - img [ref=e254]
            - button [ref=e257] [cursor=pointer]:
              - img [ref=e258]
      - generic [ref=e260]:
        - main [ref=e261]:
          - alert [ref=e264]:
            - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e265]
            - generic [ref=e266]:
              - code [ref=e267]:
                - strong [ref=e268]: "Error:"
                - text: "Minified React error #185; visit https://react.dev/errors/185 for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
              - strong [ref=e269]: "Version:"
            - paragraph [ref=e270]:
              - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
              - link "Discuss Forum" [ref=e271] [cursor=pointer]:
                - /url: https://discuss.layer5.io/
              - text: or
              - link "Slack" [ref=e272] [cursor=pointer]:
                - /url: https://slack.layer5.io/
            - generic [ref=e273]:
              - button "Get Help" [ref=e275] [cursor=pointer]:
                - generic [ref=e276]: Get Help
              - button "Try Again" [ref=e277] [cursor=pointer]:
                - generic [ref=e278]: Try Again
              - generic:
                - button "Feedback" [ref=e279] [cursor=pointer]
                - generic [ref=e281]:
                  - generic [ref=e282]:
                    - img [ref=e284]
                    - paragraph [ref=e287]: Feedback
                    - generic [ref=e288]:
                      - img [ref=e291]
                      - img [ref=e295] [cursor=pointer]
                  - generic [ref=e299]:
                    - generic [ref=e300]:
                      - button "Issue" [ref=e301] [cursor=pointer]:
                        - img [ref=e303]
                        - paragraph [ref=e305]: Issue
                      - button "Suggestion" [ref=e306] [cursor=pointer]:
                        - img [ref=e308]
                        - paragraph [ref=e314]: Suggestion
                      - button "Meet Request" [ref=e315] [cursor=pointer]:
                        - img [ref=e317]
                        - paragraph [ref=e322]: Meet Request
                    - textbox "I’m having an issue with..." [ref=e324]: "An error occurred on the page at http://localhost:9081/management/connections on 5/12/2026, 6:44:49 PM. Error Details: Minified React error #185; visit https://react.dev/errors/185 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.."
                  - generic [ref=e326]:
                    - generic [ref=e327]:
                      - generic [ref=e328] [cursor=pointer]:
                        - checkbox [checked] [ref=e329]
                        - img [ref=e330]
                      - paragraph [ref=e332]: We may email you for more information or updates
                    - button "Send" [ref=e333] [cursor=pointer]
        - contentinfo [ref=e334]:
          - paragraph [ref=e335]:
            - generic [ref=e336] [cursor=pointer]:
              - text: Built with
              - img [ref=e337]
              - text: by the Meshery Community
      - generic:
        - generic [ref=e344]:
          - img [ref=e345]
          - paragraph [ref=e348]: MeshSync connected in embedded mode
          - group [ref=e350]:
            - button "Open" [ref=e351] [cursor=pointer]:
              - img [ref=e352]
            - button "Close" [ref=e356] [cursor=pointer]:
              - img [ref=e357]
        - generic [ref=e364]:
          - img [ref=e365]
          - paragraph [ref=e368]: MeshSync connected in embedded mode
          - group [ref=e370]:
            - button "Open" [ref=e371] [cursor=pointer]:
              - img [ref=e372]
            - button "Close" [ref=e376] [cursor=pointer]:
              - img [ref=e377]
        - generic [ref=e384]:
          - img [ref=e385]
          - paragraph [ref=e388]: MeshSync connected in embedded mode
          - group [ref=e390]:
            - button "Open" [ref=e391] [cursor=pointer]:
              - img [ref=e392]
            - button "Close" [ref=e396] [cursor=pointer]:
              - img [ref=e397]
  - alert [ref=e400]: Meshery
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
  54  |     await page.waitForURL(/\/management\/connections/);
> 55  |     await expect(page.getByTestId('ConnectionTable-search')).toBeVisible();
      |                                                              ^ Error: expect(locator).toBeVisible() failed
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
  155 | 
```