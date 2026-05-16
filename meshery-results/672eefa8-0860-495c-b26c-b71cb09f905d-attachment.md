# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.js >> Performance Section Tests >> Configure Metrics Navigation and Settings >> Action buttons on adapters tab
- Location: tests/e2e/performance.spec.js:52:9

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByTestId('configure-metrics-button')

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
          - generic [ref=e33]:
            - button "meshery-button-2 Performance" [ref=e34] [cursor=pointer]:
              - link "meshery-button-2 Performance" [active] [ref=e35]:
                - /url: /performance
                - generic [ref=e36]:
                  - img "meshery-button-2" [ref=e38]
                  - generic [ref=e64]: Performance
              - img [ref=e65]:
                - img [ref=e66]
            - list [ref=e71]:
              - button "Profiles" [ref=e73] [cursor=pointer]:
                - generic [ref=e74]:
                  - img [ref=e76]
                  - generic [ref=e79]: Profiles
          - button "Extensions" [ref=e81] [cursor=pointer]:
            - link "Extensions" [ref=e82]:
              - /url: /extensions
              - generic [ref=e83]:
                - img [ref=e85]
                - generic [ref=e112]: Extensions
          - generic [ref=e113]:
            - separator [ref=e114]
            - button "Kanvas" [ref=e116] [cursor=pointer]:
              - link "Kanvas" [ref=e117]:
                - /url: /extension/meshmap
                - generic [ref=e119]:
                  - img [ref=e121]
                  - generic [ref=e123]: Kanvas
          - separator [ref=e124]
        - generic [ref=e125]:
          - img [ref=e128] [cursor=pointer]
          - group [ref=e130]:
            - listitem [ref=e131]:
              - link [ref=e132] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e134]
            - listitem [ref=e136]:
              - link [ref=e137] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e139]
            - listitem [ref=e148]:
              - link [ref=e149] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e151]
            - listitem [ref=e153]:
              - link [ref=e154] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e156]
          - listitem [ref=e158]:
            - generic [ref=e159]:
              - text: v1.0.22
              - link [ref=e161] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e162]
              - text: Running latest
    - generic [ref=e164]:
      - banner [ref=e165]:
        - generic [ref=e167]:
          - generic [ref=e169]:
            - button [ref=e171] [cursor=pointer]:
              - img [ref=e172]
            - text: /
            - button [ref=e181] [cursor=pointer]:
              - img [ref=e182]
            - group [ref=e186]:
              - generic [ref=e191]:
                - combobox [ref=e192] [cursor=pointer]:
                  - generic [ref=e193]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Dashboard" [level=5] [ref=e194]
          - generic [ref=e196]:
            - button "contexts" [ref=e199] [cursor=pointer]:
              - generic [ref=e200]:
                - img [ref=e201]
                - generic [ref=e202]: "0"
            - button "99+" [ref=e205] [cursor=pointer]:
              - generic [ref=e206]:
                - img [ref=e207]
                - generic [ref=e210]: 99+
            - button [ref=e214] [cursor=pointer]:
              - img [ref=e216]
            - button [ref=e219] [cursor=pointer]:
              - img [ref=e220]
      - generic [ref=e222]:
        - main [ref=e223]:
          - tablist [ref=e227]:
            - tab "Overview" [selected] [ref=e228] [cursor=pointer]:
              - img [ref=e229]
              - text: Overview
            - tab "Node" [ref=e254] [cursor=pointer]:
              - img [ref=e255]
              - text: Node
            - tab "Namespace" [ref=e261] [cursor=pointer]:
              - img [ref=e262]
              - text: Namespace
            - tab "Workload" [ref=e268] [cursor=pointer]:
              - img [ref=e269]
              - text: Workload
            - tab "Configuration" [ref=e275] [cursor=pointer]:
              - img [ref=e276]
              - text: Configuration
            - tab "Network" [ref=e282] [cursor=pointer]:
              - img [ref=e283]
              - text: Network
            - tab "Security" [ref=e289] [cursor=pointer]:
              - img [ref=e290]
              - text: Security
            - tab "Storage" [ref=e296] [cursor=pointer]:
              - img [ref=e297]
              - text: Storage
            - tab "CRDS" [ref=e303] [cursor=pointer]:
              - img [ref=e304]
              - text: CRDS
          - tabpanel [ref=e311]:
            - generic [ref=e314]:
              - generic [ref=e316]:
                - generic [ref=e318]:
                  - generic [ref=e319]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e320]
                    - generic [ref=e321]:
                      - generic [ref=e322]:
                        - combobox [ref=e323] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e324] [cursor=pointer]:
                        - img [ref=e326]
                  - list [ref=e328]:
                    - listitem:
                      - generic [ref=e331]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e332]
                    - listitem:
                      - generic [ref=e335]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e336]
                    - listitem:
                      - generic [ref=e339]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e340]
                    - listitem:
                      - generic [ref=e343]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e344]
                    - listitem:
                      - generic [ref=e347]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e348]
                    - listitem:
                      - generic [ref=e351]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e352]
                    - listitem:
                      - generic [ref=e355]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e356]
                    - listitem:
                      - generic [ref=e359]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e360]
                    - listitem:
                      - generic [ref=e363]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e364]
                    - listitem:
                      - generic [ref=e367]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e368]
                    - listitem:
                      - generic [ref=e371]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e372]
                    - listitem:
                      - generic [ref=e375]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e376]
                    - listitem:
                      - generic [ref=e379]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e380]
                    - listitem:
                      - generic [ref=e383]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e384]
                - generic [ref=e387]:
                  - generic [ref=e388]:
                    - img [ref=e389]
                    - generic [ref=e392]: GETTING STARTED
                  - generic [ref=e393]:
                    - paragraph [ref=e394]: New here? Follow along these guided tasks to help you get the most of your account.
                    - paragraph [ref=e395]:
                      - generic [ref=e398]: 0%
                    - button "Start" [ref=e400] [cursor=pointer]
                - generic [ref=e404]:
                  - generic [ref=e405]:
                    - img [ref=e406]
                    - heading "HELP CENTER" [level=6] [ref=e410]
                  - list [ref=e412]:
                    - listitem [ref=e413]:
                      - img [ref=e415]
                      - link "Cloud Docs" [ref=e424] [cursor=pointer]:
                        - /url: https://docs.layer5.io/cloud
                      - superscript [ref=e425]:
                        - img [ref=e426]
                    - listitem [ref=e428]:
                      - img [ref=e430]
                      - link "Kanvas Docs" [ref=e439] [cursor=pointer]:
                        - /url: https://docs.layer5.io/kanvas
                      - superscript [ref=e440]:
                        - img [ref=e441]
                    - listitem [ref=e443]:
                      - img [ref=e445]
                      - link "Support Request" [ref=e454] [cursor=pointer]:
                        - /url: https://cloud.meshery.io/support
                      - superscript [ref=e455]:
                        - img [ref=e456]
                    - listitem [ref=e458]:
                      - img [ref=e460]
                      - link "Discussion Forum" [ref=e469] [cursor=pointer]:
                        - /url: https://meshery.io/community/#discussion-forums
                      - superscript [ref=e470]:
                        - img [ref=e471]
                    - listitem [ref=e473]:
                      - img [ref=e475]
                      - link "Slack" [ref=e484] [cursor=pointer]:
                        - /url: https://slack.meshery.io
                      - superscript [ref=e485]:
                        - img [ref=e486]
                - generic [ref=e490]:
                  - generic [ref=e491]:
                    - generic [ref=e492]:
                      - img [ref=e493]
                      - heading "MY RECENT DESIGNS" [level=6] [ref=e502]
                    - button "Sort by" [ref=e503] [cursor=pointer]:
                      - img [ref=e504]
                  - list [ref=e507]:
                    - listitem [ref=e508]:
                      - img [ref=e510]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=49875664-6648-418b-93a1-0cb9147dc97a
                      - generic "Fri, May 15, 2026 11:01 PM" [ref=e520]:
                        - paragraph [ref=e521]: an hour ago
                    - listitem [ref=e522]:
                      - img [ref=e524]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=d307c888-e32e-4f54-8ba8-ad425aab7b89
                      - generic "Fri, May 15, 2026 10:33 PM" [ref=e534]:
                        - paragraph [ref=e535]: an hour ago
                    - listitem [ref=e536]:
                      - img [ref=e538]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=68c80309-2b81-49b3-9239-0bc98fea4afb
                      - generic "Fri, May 15, 2026 10:32 PM" [ref=e548]:
                        - paragraph [ref=e549]: an hour ago
                    - listitem [ref=e550]:
                      - img [ref=e552]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=7cb1d02d-db91-43c5-a127-920da9eaf099
                      - generic "Fri, May 15, 2026 9:03 PM" [ref=e562]:
                        - paragraph [ref=e563]: 3 hours ago
                    - listitem [ref=e564]:
                      - img [ref=e566]
                      - link "Azure Service Operator" [ref=e575] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=2a03868b-722f-490d-a7b7-f508b5fe2ebc
                      - generic "Fri, May 15, 2026 7:50 PM" [ref=e577]:
                        - paragraph [ref=e578]: 4 hours ago
                    - listitem [ref=e579]:
                      - img [ref=e581]
                      - link "Untitled Design" [ref=e590] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=3d661738-2100-4a4f-a2fb-66ec60f63d72
                      - generic "Fri, May 15, 2026 7:37 PM" [ref=e592]:
                        - paragraph [ref=e593]: 4 hours ago
                    - listitem [ref=e594]:
                      - img [ref=e596]
                      - link "Azure Service Operator" [ref=e605] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=137a201a-0b57-4526-8eb4-f414b0cb9723
                      - generic "Fri, May 15, 2026 3:35 PM" [ref=e607]:
                        - paragraph [ref=e608]: 8 hours ago
                  - generic [ref=e609]:
                    - link "See All Designs" [ref=e610] [cursor=pointer]:
                      - /url: https://cloud.meshery.io/catalog/content/my-designs
                    - button [ref=e611] [cursor=pointer]:
                      - img [ref=e612]
                - generic [ref=e615]:
                  - generic [ref=e616]:
                    - generic [ref=e617]:
                      - img [ref=e618]
                      - heading "WORKSPACE ACTIVITY" [level=6] [ref=e622]
                    - generic [ref=e623]:
                      - combobox [ref=e624] [cursor=pointer]: eks-sandbox
                      - textbox: d26aa57e-e9ec-4424-878c-a794bd3a3b7d
                      - img
                  - list [ref=e625]:
                    - generic [ref=e630]:
                      - strong [ref=e631]: "Mar 28:"
                      - text: lekaf974 created workspace eks-sandbox
                  - link "All Workspaces" [ref=e633] [cursor=pointer]:
                    - /url: /management/workspaces
                - link "KUBERNETES CLUSTER STATUS" [ref=e635] [cursor=pointer]:
                  - /url: /management/connections
                  - generic [ref=e636]:
                    - generic [ref=e637]:
                      - generic [ref=e638]:
                        - img [ref=e639]
                        - heading "KUBERNETES CLUSTER STATUS" [level=6] [ref=e642]
                      - img [ref=e645]
                    - img [ref=e649]:
                      - generic [ref=e652]:
                        - generic [ref=e653]: Clusters Status
                        - generic [ref=e654]:
                          - generic: "1"
                        - generic [ref=e657]:
                          - generic: "9"
                      - generic [ref=e660]:
                        - generic [ref=e661]:
                          - generic: connected
                        - generic [ref=e663]:
                          - generic: not found
              - button "Edit" [ref=e665] [cursor=pointer]:
                - generic [ref=e666]: Edit
                - img [ref=e668]
        - contentinfo [ref=e670]:
          - paragraph [ref=e671]:
            - generic [ref=e672] [cursor=pointer]:
              - text: Built with
              - img [ref=e673]
              - text: by the Meshery Community
      - generic [ref=e680]:
        - img [ref=e681]
        - paragraph [ref=e684]: MeshSync connected in embedded mode
        - group [ref=e686]:
          - button "Open" [ref=e687] [cursor=pointer]:
            - img [ref=e688]
          - button "Close" [ref=e692] [cursor=pointer]:
            - img [ref=e693]
  - alert [ref=e696]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { DashboardPage } from './pages/DashboardPage';
  3  | 
  4  | const SETTINGS_TABS = [
  5  |   'settings-tab-adapters',
  6  |   'settings-tab-metrics',
  7  |   'settings-tab-registry',
  8  |   'settings-tab-reset',
  9  | ];
  10 | 
  11 | const ACTION_BUTTONS = [
  12 |   'adapter-undeploy-button',
  13 |   'adapter-connect-button',
  14 |   'adapter-deploy-button',
  15 | ];
  16 | 
  17 | const GRAFANA_ELEMENTS = ['grafana-api-key'];
  18 | 
  19 | const COMMON_UI_ELEMENTS = ['navigation', 'notification-button', 'profile-button', 'header-menu'];
  20 | 
  21 | test.describe('Performance Section Tests', () => {
  22 |   test.beforeEach(async ({ page }) => {
  23 |     const dashboardPage = new DashboardPage(page);
  24 |     await dashboardPage.navigateToDashboard();
  25 |     await dashboardPage.navigateToPerformance();
  26 |   });
  27 | 
  28 |   test('Common UI elements', async ({ page }) => {
  29 |     for (const elementId of COMMON_UI_ELEMENTS) {
  30 |       await expect(
  31 |         page.getByTestId(elementId),
  32 |         `UI element with ID ${elementId} should be visible`,
  33 |       ).toBeVisible();
  34 |     }
  35 |   });
  36 | 
  37 |   test.describe('Configure Metrics Navigation and Settings', () => {
  38 |     test.beforeEach(async ({ page }) => {
> 39 |       await page.getByTestId('configure-metrics-button').click();
     |                                                          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  40 |       await expect(page).toHaveURL(/metrics/i);
  41 |     });
  42 | 
  43 |     test('All settings tabs', async ({ page }) => {
  44 |       for (const tabId of SETTINGS_TABS) {
  45 |         await expect(
  46 |           page.getByTestId(tabId),
  47 |           `Tab with ID ${tabId} should be visible`,
  48 |         ).toBeVisible();
  49 |       }
  50 |     });
  51 | 
  52 |     test('Action buttons on adapters tab', async ({ page }) => {
  53 |       await page.getByTestId('settings-tab-adapters').click();
  54 | 
  55 |       for (const buttonId of ACTION_BUTTONS) {
  56 |         await expect(
  57 |           page.getByTestId(buttonId),
  58 |           `Button with ID ${buttonId} should be visible`,
  59 |         ).toBeVisible();
  60 |       }
  61 |     });
  62 | 
  63 |     test('Grafana elements on metrics tab', async ({ page }) => {
  64 |       await page.getByTestId('settings-tab-metrics').click();
  65 |       for (const grafanaId of GRAFANA_ELEMENTS) {
  66 |         await expect(
  67 |           page.getByTestId(grafanaId),
  68 |           `Grafana element with ID ${grafanaId} should be visible`,
  69 |         ).toBeVisible();
  70 |       }
  71 |     });
  72 |   });
  73 | });
  74 | 
```