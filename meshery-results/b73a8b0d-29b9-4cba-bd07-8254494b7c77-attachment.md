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
    - text: v1.0.29
    - link:
      - /url: https://docs.meshery.io/project/releases/v1.0.29
      - img
    - text: Running latest
- banner:
  - button:
    - img
  - text: /
  - button:
    - img
  - text: /
  - heading "Lifecycle" [level=5]
  - button "contexts":
    - img
    - text: "1"
  - button:
    - img
  - button
  - button:
    - img
- main:
  - alert:
    - heading "Uh-oh!😔 Please pardon the mesh." [level=2]
    - code:
      - strong: "Error:"
      - text: "Minified React error #301; visit https://react.dev/errors/301 for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    - strong: "Version:"
    - paragraph:
      - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
      - link "Discuss Forum":
        - /url: https://discuss.layer5.io/
      - text: or
      - link "Slack":
        - /url: https://slack.layer5.io/
    - button "Try Again"
- contentinfo:
  - paragraph:
    - text: Built with
    - img
    - text: by the Meshery Community
- alert
```

# Test source

```ts
  1   | import { expect, Page, Response } from '@playwright/test';
  2   | import { test } from './fixtures/project';
  3   | import { ENV } from './env';
  4   | import { waitForSnackBar } from './utils/waitForSnackBar';
  5   | 
  6   | // Define the shape of the transition test objects
  7   | interface TransitionTest {
  8   |   name: string;
  9   |   transitionOption: string;
  10  |   statusAfterTransition: string;
  11  |   restorationOption: string;
  12  | }
  13  | 
  14  | // These tests need to be updated to reflect the latest connection api changes
  15  | function waitForConnectionsApiResponse(page: Page): Promise<Response> {
  16  |   return page.waitForResponse(
  17  |     (response) =>
  18  |       response.url().includes('/api/integrations/connections') && response.status() === 200,
  19  |   );
  20  | }
  21  | 
  22  | // name: Name of the test
  23  | // transitionOption: Option to be chosen from dropdown to transition to another state
  24  | // statusAfterTransition: Text shown in current state after transition
  25  | // restorationOption: Option to be chosen from dropdown to transition back to connected state
  26  | const transitionTests: TransitionTest[] = [
  27  |   // skip: this is broken
  28  |   // {
  29  |   //   name: 'Transition to disconnected state and then back to connected state',
  30  |   //   transitionOption: 'disconnected',
  31  |   //   statusAfterTransition: 'disconnected',
  32  |   //   restorationOption: 'connected',
  33  |   // },
  34  |   // {
  35  |   //   name: 'Transition to ignored state and then back to connected state',
  36  |   //   transitionOption: 'ignored',
  37  |   //   statusAfterTransition: 'ignored',
  38  |   //   restorationOption: 'registered',
  39  |   // },
  40  |   // {
  41  |   //   name: 'Transition to not found state and then back to connected state',
  42  |   //   transitionOption: 'not found',
  43  |   //   statusAfterTransition: 'not found',
  44  |   //   restorationOption: 'discovered',
  45  |   // },
  46  | ];
  47  | 
  48  | test.describe.serial('Connection Management Tests', () => {
  49  |   test.beforeEach(async ({ page }) => {
  50  |     const initialConnectionsRes = waitForConnectionsApiResponse(page);
  51  |     await page.goto('/management/connections', { waitUntil: 'domcontentloaded' });
  52  |     await page.waitForURL(/\/management\/connections/);
  53  |     await initialConnectionsRes;
  54  |     await page.waitForLoadState('networkidle');
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