# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: connections.spec.ts >> Connection Management Tests >> Verify that UI components are displayed
- Location: tests/e2e/connections.spec.ts:62:7

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
            - link "Extensions" [ref=e77]:
              - /url: /extensions
              - generic [ref=e78]:
                - img [ref=e80]
                - generic [ref=e107]: Extensions
          - generic [ref=e108]:
            - separator [ref=e109]
            - button "Kanvas" [ref=e111] [cursor=pointer]:
              - link "Kanvas" [ref=e112]:
                - /url: /extension/meshmap
                - generic [ref=e114]:
                  - img [ref=e116]
                  - generic [ref=e118]: Kanvas
          - separator [ref=e119]
        - generic [ref=e120]:
          - img [ref=e123] [cursor=pointer]
          - group [ref=e125]:
            - listitem [ref=e126]:
              - link [ref=e127] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e129]
            - listitem [ref=e131]:
              - link [ref=e132] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e134]
            - listitem [ref=e143]:
              - link [ref=e144] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e146]
            - listitem [ref=e148]:
              - link [ref=e149] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e151]
          - listitem [ref=e153]:
            - generic [ref=e154]:
              - text: v1.0.24
              - link [ref=e156] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.24
                - img [ref=e157]
              - text: Running latest
    - generic [ref=e159]:
      - banner [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - button [ref=e166] [cursor=pointer]:
              - img [ref=e167]
            - text: /
            - button [ref=e176] [cursor=pointer]:
              - img [ref=e177]
            - group [ref=e181]:
              - generic [ref=e186]:
                - combobox [ref=e187] [cursor=pointer]:
                  - generic [ref=e188]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Lifecycle" [level=5] [ref=e189]
          - generic [ref=e191]:
            - button "contexts" [ref=e194] [cursor=pointer]:
              - generic [ref=e195]:
                - img [ref=e196]
                - generic [ref=e197]: "0"
            - button "99+" [ref=e200] [cursor=pointer]:
              - generic [ref=e201]:
                - img [ref=e202]
                - generic [ref=e205]: 99+
            - button [ref=e209] [cursor=pointer]:
              - img [ref=e211]
            - button [ref=e214] [cursor=pointer]:
              - img [ref=e215]
      - generic [ref=e217]:
        - main [ref=e218]:
          - alert [ref=e221]:
            - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e222]
            - generic [ref=e223]:
              - code [ref=e224]:
                - strong [ref=e225]: "Error:"
                - text: "Minified React error #301; visit https://react.dev/errors/301 for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
              - strong [ref=e226]: "Version:"
            - paragraph [ref=e227]:
              - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
              - link "Discuss Forum" [ref=e228] [cursor=pointer]:
                - /url: https://discuss.layer5.io/
              - text: or
              - link "Slack" [ref=e229] [cursor=pointer]:
                - /url: https://slack.layer5.io/
            - generic [ref=e230]:
              - button "Get Help" [ref=e232] [cursor=pointer]:
                - generic [ref=e233]: Get Help
              - button "Try Again" [ref=e234] [cursor=pointer]:
                - generic [ref=e235]: Try Again
              - generic:
                - button "Feedback" [ref=e236] [cursor=pointer]
                - generic [ref=e238]:
                  - generic [ref=e239]:
                    - img [ref=e241]
                    - paragraph [ref=e244]: Feedback
                    - generic [ref=e245]:
                      - img [ref=e248]
                      - img [ref=e252] [cursor=pointer]
                  - generic [ref=e256]:
                    - generic [ref=e257]:
                      - button "Issue" [ref=e258] [cursor=pointer]:
                        - img [ref=e260]
                        - paragraph [ref=e262]: Issue
                      - button "Suggestion" [ref=e263] [cursor=pointer]:
                        - img [ref=e265]
                        - paragraph [ref=e271]: Suggestion
                      - button "Meet Request" [ref=e272] [cursor=pointer]:
                        - img [ref=e274]
                        - paragraph [ref=e279]: Meet Request
                    - textbox "I’m having an issue with..." [ref=e281]: "An error occurred on the page at http://localhost:9081/management/connections on 5/21/2026, 1:38:59 AM. Error Details: Minified React error #301; visit https://react.dev/errors/301 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.."
                  - generic [ref=e283]:
                    - generic [ref=e284]:
                      - generic [ref=e285] [cursor=pointer]:
                        - checkbox [checked] [ref=e286]
                        - img [ref=e287]
                      - paragraph [ref=e289]: We may email you for more information or updates
                    - button "Send" [ref=e290] [cursor=pointer]
        - contentinfo [ref=e291]:
          - paragraph [ref=e292]:
            - generic [ref=e293] [cursor=pointer]:
              - text: Built with
              - img [ref=e294]
              - text: by the Meshery Community
      - generic [ref=e301]:
        - img [ref=e302]
        - paragraph [ref=e305]: MeshSync connected in embedded mode
        - group [ref=e307]:
          - button "Open" [ref=e308] [cursor=pointer]:
            - img [ref=e309]
          - button "Close" [ref=e313] [cursor=pointer]:
            - img [ref=e314]
  - alert [ref=e317]
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
  50  |     // Navigate directly to the page under test rather than clicking through
  51  |     // the dashboard's left nav. The nav path was a known flake source: it
  52  |     // depends on `lifecycle` and `connection` data-testids being present
  53  |     // before either is clickable, and on the lifecycle sub-menu animating
  54  |     // open before the connection child accepts a click. Loading the URL
  55  |     // directly mirrors what real users do via deep links and isolates the
  56  |     // smoke test to the connections page itself.
  57  |     await page.goto('/management/connections', { waitUntil: 'domcontentloaded' });
  58  |     await page.waitForURL(/\/management\/connections/);
> 59  |     await expect(page.getByTestId('ConnectionTable-search')).toBeVisible();
      |                                                              ^ Error: expect(locator).toBeVisible() failed
  60  |   });
  61  | 
  62  |   test('Verify that UI components are displayed', async ({ page }) => {
  63  |     // Verify that connections table is displayed (by checking for table headings)
  64  |     const headings = ['Name', 'Environments', 'Kind', 'Category', 'Status', 'Actions'];
  65  |     for (const heading of headings) {
  66  |       await expect(page.getByRole('columnheader', { name: heading })).toBeVisible();
  67  |     }
  68  |   });
  69  | 
  70  |   // test('Add a cluster connection by uploading kubeconfig file', async ({
  71  |   //   page,
  72  |   //   clusterMetaData,
  73  |   // }) => {
  74  |   //   await page.getByRole('tab', { name: 'Connections' }).click();
  75  | 
  76  |   //   const addConnectionReq = page.waitForRequest(
  77  |   //     (request) =>
  78  |   //       request.url() === `${ENV.MESHERY_SERVER_URL}/api/system/kubernetes` &&
  79  |   //       request.method() === 'POST',
  80  |   //   );
  81  |   //   const addConnectionRes = page.waitForResponse(
  82  |   //     (response) =>
  83  |   //       response.url() === `${ENV.MESHERY_SERVER_URL}/api/system/kubernetes` &&
  84  |   //       response.status() === 200,
  85  |   //   );
  86  |   //   await page.getByTestId('connection-addCluster').click();
  87  | 
  88  |   //   // Verify "Add Kubernetes Cluster(s)" modal opens
  89  |   //   await expect(page.getByTestId('connection-addKubernetesModal')).toBeVisible();
  90  | 
  91  |   //   const fileChooserPromise = page.waitForEvent('filechooser');
  92  |   //   await page.getByTestId('connection-uploadKubeConfig').click();
  93  |   //   const fileChooser = await fileChooserPromise;
  94  |   //   // Attach existing kubeconfig file of the system, to test the upload without making any changes in configuration
  95  |   //   const kubeConfigPath = `${os.homedir()}/.kube/config`;
  96  |   //   await fileChooser.setFiles(kubeConfigPath);
  97  | 
  98  |   //   await page.getByRole('button', { name: 'IMPORT', exact: true }).click();
  99  | 
  100 |   //   await addConnectionReq;
  101 |   //   await addConnectionRes;
  102 | 
  103 |   //   await page.getByRole('button', { name: 'OK' }).click();
  104 | 
  105 |   //   // Search for the newly added cluster
  106 |   //   await page.getByTestId('ConnectionTable-search').getByRole('button').click();
  107 | 
  108 |   //   const getConnectionsRes = waitForConnectionsApiResponse(page);
  109 | 
  110 |   //   await page.getByRole('textbox', { name: 'Search Connections...' }).click();
  111 |   //   await page.getByRole('textbox', { name: 'Search Connections...' }).fill(clusterMetaData.name);
  112 | 
  113 |   //   await getConnectionsRes;
  114 | 
  115 |   //   const newConnectionRow = page.getByRole('menuitem', { hasText: clusterMetaData.name }).first();
  116 |   //   await expect(newConnectionRow).toContainText('connected');
  117 |   // });
  118 | 
  119 |   transitionTests.forEach((t) => {
  120 |     test(t.name, async ({ page, clusterMetaData }) => {
  121 |       const stateTransitionReq = page.waitForRequest(
  122 |         (request) =>
  123 |           request.url() ===
  124 |             `${ENV.MESHERY_SERVER_URL}/api/integrations/connections/kubernetes/status` &&
  125 |           request.method() === 'PUT',
  126 |       );
  127 | 
  128 |       const stateTransitionRes = page.waitForResponse(
  129 |         (response) =>
  130 |           response.url() ===
  131 |             `${ENV.MESHERY_SERVER_URL}/api/integrations/connections/kubernetes/status` &&
  132 |           response.status() === 202,
  133 |       );
  134 | 
  135 |       const getFilteredConnectionsRes = waitForConnectionsApiResponse(page);
  136 | 
  137 |       const getStatusUpdateConnectionsRes = waitForConnectionsApiResponse(page);
  138 | 
  139 |       await page.getByTestId('ConnectionTable-search').getByRole('button').click();
  140 |       await page.getByRole('textbox', { name: 'Search Connections...' }).fill(clusterMetaData.name);
  141 | 
  142 |       await getFilteredConnectionsRes;
  143 | 
  144 |       const matchingRows = page.getByRole('menuitem', { hasText: clusterMetaData.name });
  145 | 
  146 |       const connectedRow = matchingRows
  147 |         .filter({
  148 |           has: page.locator('span', { hasText: 'connected' }),
  149 |         })
  150 |         .first();
  151 | 
  152 |       await expect(connectedRow).toBeVisible();
  153 | 
  154 |       // ===== TRANSITIONING TO A NEW STATE =====
  155 | 
  156 |       // open state transition options dropdown
  157 |       await connectedRow.locator('span', { hasText: 'connected' }).click();
  158 |       await page.getByRole('option', { name: t.transitionOption }).click();
  159 | 
```