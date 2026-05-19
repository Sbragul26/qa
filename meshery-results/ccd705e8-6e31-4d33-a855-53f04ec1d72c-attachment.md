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
                  - generic [ref=e75]: Connections
              - button "Environments" [ref=e77] [cursor=pointer]:
                - generic [ref=e78]:
                  - img [ref=e80]
                  - generic [ref=e86]: Environments
              - button "Workspaces" [ref=e88] [cursor=pointer]:
                - generic [ref=e89]:
                  - img [ref=e91]
                  - generic [ref=e95]: Workspaces
              - button "Adapters" [ref=e97] [cursor=pointer]:
                - generic [ref=e98]:
                  - img [ref=e100]
                  - generic [ref=e113]: Adapters
          - button "Configuration" [ref=e115] [cursor=pointer]:
            - link "Configuration" [ref=e116]:
              - /url: /configuration/designs
              - generic [ref=e117]:
                - img [ref=e119]
                - generic [ref=e124]: Configuration
          - button "meshery-button-2 Performance" [ref=e126] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e127]:
              - /url: /performance
              - generic [ref=e128]:
                - img "meshery-button-2" [ref=e130]
                - generic [ref=e156]: Performance
          - button "Extensions" [ref=e158] [cursor=pointer]:
            - link "Extensions" [ref=e159]:
              - /url: /extensions
              - generic [ref=e160]:
                - img [ref=e162]
                - generic [ref=e189]: Extensions
          - generic [ref=e190]:
            - separator [ref=e191]
            - button "Kanvas" [ref=e193] [cursor=pointer]:
              - link "Kanvas" [ref=e194]:
                - /url: /extension/meshmap
                - generic [ref=e196]:
                  - img [ref=e198]
                  - generic [ref=e200]: Kanvas
          - separator [ref=e201]
        - generic [ref=e202]:
          - img [ref=e205] [cursor=pointer]
          - group [ref=e207]:
            - listitem [ref=e208]:
              - link [ref=e209] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e211]
            - listitem [ref=e213]:
              - link [ref=e214] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e216]
            - listitem [ref=e225]:
              - link [ref=e226] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e228]
            - listitem [ref=e230]:
              - link [ref=e231] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e233]
          - listitem [ref=e235]:
            - generic [ref=e236]:
              - text: v1.0.24
              - link [ref=e238] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.24
                - img [ref=e239]
              - text: Running latest
    - generic [ref=e241]:
      - banner [ref=e242]:
        - generic [ref=e244]:
          - generic [ref=e246]:
            - button [ref=e248] [cursor=pointer]:
              - img [ref=e249]
            - text: /
            - button [ref=e258] [cursor=pointer]:
              - img [ref=e259]
            - group [ref=e263]:
              - generic [ref=e268]:
                - combobox [ref=e269] [cursor=pointer]:
                  - generic [ref=e270]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Connections" [level=5] [ref=e271]
          - generic [ref=e273]:
            - button "contexts" [ref=e276] [cursor=pointer]:
              - generic [ref=e277]:
                - img [ref=e278]
                - generic [ref=e279]: "0"
            - button "99+" [ref=e282] [cursor=pointer]:
              - generic [ref=e283]:
                - img [ref=e284]
                - generic [ref=e287]: 99+
            - button [ref=e291] [cursor=pointer]:
              - img [ref=e293]
            - button [ref=e296] [cursor=pointer]:
              - img [ref=e297]
      - generic [ref=e299]:
        - main [ref=e300]:
          - alert [ref=e303]:
            - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e304]
            - generic [ref=e305]:
              - code [ref=e306]:
                - strong [ref=e307]: "Error:"
                - text: "Minified React error #185; visit https://react.dev/errors/185 for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
              - strong [ref=e308]: "Version:"
            - paragraph [ref=e309]:
              - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
              - link "Discuss Forum" [ref=e310] [cursor=pointer]:
                - /url: https://discuss.layer5.io/
              - text: or
              - link "Slack" [ref=e311] [cursor=pointer]:
                - /url: https://slack.layer5.io/
            - generic [ref=e312]:
              - button "Get Help" [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: Get Help
              - button "Try Again" [ref=e316] [cursor=pointer]:
                - generic [ref=e317]: Try Again
              - generic:
                - button "Feedback" [ref=e318] [cursor=pointer]
                - generic [ref=e320]:
                  - generic [ref=e321]:
                    - img [ref=e323]
                    - paragraph [ref=e326]: Feedback
                    - generic [ref=e327]:
                      - img [ref=e330]
                      - img [ref=e334] [cursor=pointer]
                  - generic [ref=e338]:
                    - generic [ref=e339]:
                      - button "Issue" [ref=e340] [cursor=pointer]:
                        - img [ref=e342]
                        - paragraph [ref=e344]: Issue
                      - button "Suggestion" [ref=e345] [cursor=pointer]:
                        - img [ref=e347]
                        - paragraph [ref=e353]: Suggestion
                      - button "Meet Request" [ref=e354] [cursor=pointer]:
                        - img [ref=e356]
                        - paragraph [ref=e361]: Meet Request
                    - textbox "I’m having an issue with..." [ref=e363]: "An error occurred on the page at http://localhost:9081/management/connections on 5/19/2026, 7:37:06 AM. Error Details: Minified React error #185; visit https://react.dev/errors/185 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.."
                  - generic [ref=e365]:
                    - generic [ref=e366]:
                      - generic [ref=e367] [cursor=pointer]:
                        - checkbox [checked] [ref=e368]
                        - img [ref=e369]
                      - paragraph [ref=e371]: We may email you for more information or updates
                    - button "Send" [ref=e372] [cursor=pointer]
        - contentinfo [ref=e373]:
          - paragraph [ref=e374]:
            - generic [ref=e375] [cursor=pointer]:
              - text: Built with
              - img [ref=e376]
              - text: by the Meshery Community
  - alert [ref=e379]: Meshery
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