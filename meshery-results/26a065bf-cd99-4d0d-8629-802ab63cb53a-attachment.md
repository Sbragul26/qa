# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: connections.spec.ts >> Connection Management Tests >> Verify that UI components are displayed
- Location: tests/e2e/connections.spec.ts:57:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByTestId('connection-addCluster') to be visible

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
          - separator [ref=e151]
        - generic [ref=e152]:
          - img [ref=e155] [cursor=pointer]
          - group [ref=e157]:
            - listitem [ref=e158]:
              - link [ref=e159] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e161]
            - listitem [ref=e163]:
              - link [ref=e164] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e166]
            - listitem [ref=e175]:
              - link [ref=e176] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e178]
            - listitem [ref=e180]:
              - link [ref=e181] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e183]
          - listitem [ref=e185]:
            - generic [ref=e186]:
              - text: v1.0.18
              - link [ref=e188] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.18
                - img [ref=e189]
              - text: Running latest
    - generic [ref=e191]:
      - banner [ref=e192]:
        - generic [ref=e194]:
          - generic [ref=e196]:
            - button [ref=e198] [cursor=pointer]:
              - img [ref=e199]
            - text: /
            - button [ref=e208] [cursor=pointer]:
              - img [ref=e209]
            - text: /
            - heading "Connections" [level=5] [ref=e213]
          - generic [ref=e215]:
            - button "contexts" [ref=e218] [cursor=pointer]:
              - generic [ref=e219]:
                - img [ref=e220]
                - generic [ref=e221]: "0"
            - button [ref=e224] [cursor=pointer]:
              - img [ref=e225]
            - button [ref=e232] [cursor=pointer]:
              - img [ref=e234]
            - button [ref=e237] [cursor=pointer]:
              - img [ref=e238]
      - generic [ref=e240]:
        - main [ref=e241]:
          - alert [ref=e244]:
            - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e245]
            - generic [ref=e246]:
              - code [ref=e247]:
                - strong [ref=e248]: "Error:"
                - text: "MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList."
              - strong [ref=e249]: "Version:"
            - paragraph [ref=e250]:
              - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
              - link "Discuss Forum" [ref=e251] [cursor=pointer]:
                - /url: https://discuss.layer5.io/
              - text: or
              - link "Slack" [ref=e252] [cursor=pointer]:
                - /url: https://slack.layer5.io/
            - button "Try Again" [ref=e254] [cursor=pointer]:
              - generic [ref=e255]: Try Again
        - contentinfo [ref=e256]:
          - paragraph [ref=e257]:
            - generic [ref=e258] [cursor=pointer]:
              - text: Built with
              - img [ref=e259]
              - text: by the Meshery Community
  - alert [ref=e262]: Meshery
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
> 54  |     await page.getByTestId('connection-addCluster').waitFor();
      |                                                     ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  55  |   });
  56  | 
  57  |   test('Verify that UI components are displayed', async ({ page }) => {
  58  |     // Verify that connections table is displayed (by checking for table headings)
  59  |     const headings = ['Name', 'Environments', 'Kind', 'Category', 'Status', 'Actions'];
  60  |     for (const heading of headings) {
  61  |       await expect(page.getByRole('columnheader', { name: heading })).toBeVisible();
  62  |     }
  63  |   });
  64  | 
  65  |   // test('Add a cluster connection by uploading kubeconfig file', async ({
  66  |   //   page,
  67  |   //   clusterMetaData,
  68  |   // }) => {
  69  |   //   await page.getByRole('tab', { name: 'Connections' }).click();
  70  | 
  71  |   //   const addConnectionReq = page.waitForRequest(
  72  |   //     (request) =>
  73  |   //       request.url() === `${ENV.MESHERY_SERVER_URL}/api/system/kubernetes` &&
  74  |   //       request.method() === 'POST',
  75  |   //   );
  76  |   //   const addConnectionRes = page.waitForResponse(
  77  |   //     (response) =>
  78  |   //       response.url() === `${ENV.MESHERY_SERVER_URL}/api/system/kubernetes` &&
  79  |   //       response.status() === 200,
  80  |   //   );
  81  |   //   await page.getByTestId('connection-addCluster').click();
  82  | 
  83  |   //   // Verify "Add Kubernetes Cluster(s)" modal opens
  84  |   //   await expect(page.getByTestId('connection-addKubernetesModal')).toBeVisible();
  85  | 
  86  |   //   const fileChooserPromise = page.waitForEvent('filechooser');
  87  |   //   await page.getByTestId('connection-uploadKubeConfig').click();
  88  |   //   const fileChooser = await fileChooserPromise;
  89  |   //   // Attach existing kubeconfig file of the system, to test the upload without making any changes in configuration
  90  |   //   const kubeConfigPath = `${os.homedir()}/.kube/config`;
  91  |   //   await fileChooser.setFiles(kubeConfigPath);
  92  | 
  93  |   //   await page.getByRole('button', { name: 'IMPORT', exact: true }).click();
  94  | 
  95  |   //   await addConnectionReq;
  96  |   //   await addConnectionRes;
  97  | 
  98  |   //   await page.getByRole('button', { name: 'OK' }).click();
  99  | 
  100 |   //   // Search for the newly added cluster
  101 |   //   await page.getByTestId('ConnectionTable-search').getByRole('button').click();
  102 | 
  103 |   //   const getConnectionsRes = waitForConnectionsApiResponse(page);
  104 | 
  105 |   //   await page.getByRole('textbox', { name: 'Search Connections...' }).click();
  106 |   //   await page.getByRole('textbox', { name: 'Search Connections...' }).fill(clusterMetaData.name);
  107 | 
  108 |   //   await getConnectionsRes;
  109 | 
  110 |   //   const newConnectionRow = page.getByRole('menuitem', { hasText: clusterMetaData.name }).first();
  111 |   //   await expect(newConnectionRow).toContainText('connected');
  112 |   // });
  113 | 
  114 |   transitionTests.forEach((t) => {
  115 |     test(t.name, async ({ page, clusterMetaData }) => {
  116 |       const stateTransitionReq = page.waitForRequest(
  117 |         (request) =>
  118 |           request.url() ===
  119 |             `${ENV.MESHERY_SERVER_URL}/api/integrations/connections/kubernetes/status` &&
  120 |           request.method() === 'PUT',
  121 |       );
  122 | 
  123 |       const stateTransitionRes = page.waitForResponse(
  124 |         (response) =>
  125 |           response.url() ===
  126 |             `${ENV.MESHERY_SERVER_URL}/api/integrations/connections/kubernetes/status` &&
  127 |           response.status() === 202,
  128 |       );
  129 | 
  130 |       const getFilteredConnectionsRes = waitForConnectionsApiResponse(page);
  131 | 
  132 |       const getStatusUpdateConnectionsRes = waitForConnectionsApiResponse(page);
  133 | 
  134 |       await page.getByTestId('ConnectionTable-search').getByRole('button').click();
  135 |       await page.getByRole('textbox', { name: 'Search Connections...' }).fill(clusterMetaData.name);
  136 | 
  137 |       await getFilteredConnectionsRes;
  138 | 
  139 |       const matchingRows = page.getByRole('menuitem', { hasText: clusterMetaData.name });
  140 | 
  141 |       const connectedRow = matchingRows
  142 |         .filter({
  143 |           has: page.locator('span', { hasText: 'connected' }),
  144 |         })
  145 |         .first();
  146 | 
  147 |       await expect(connectedRow).toBeVisible();
  148 | 
  149 |       // ===== TRANSITIONING TO A NEW STATE =====
  150 | 
  151 |       // open state transition options dropdown
  152 |       await connectedRow.locator('span', { hasText: 'connected' }).click();
  153 |       await page.getByRole('option', { name: t.transitionOption }).click();
  154 | 
```