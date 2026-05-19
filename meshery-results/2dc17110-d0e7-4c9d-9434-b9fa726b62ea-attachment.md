# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Performance Section Tests >> Configure Metrics Navigation and Settings >> Grafana elements on metrics tab
- Location: tests/e2e/performance.spec.ts:68:9

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
          - separator [ref=e113]
        - generic [ref=e114]:
          - img [ref=e117] [cursor=pointer]
          - group [ref=e119]:
            - listitem [ref=e120]:
              - link [ref=e121] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e123]
            - listitem [ref=e125]:
              - link [ref=e126] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e128]
            - listitem [ref=e137]:
              - link [ref=e138] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e140]
            - listitem [ref=e142]:
              - link [ref=e143] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e145]
          - listitem [ref=e147]:
            - generic [ref=e148]:
              - text: v1.0.23
              - link [ref=e150] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.23
                - img [ref=e151]
              - text: Running latest
    - generic [ref=e153]:
      - banner [ref=e154]:
        - generic [ref=e156]:
          - generic [ref=e158]:
            - button [ref=e160] [cursor=pointer]:
              - img [ref=e161]
            - text: /
            - button [ref=e170] [cursor=pointer]:
              - img [ref=e171]
            - text: /
            - heading "Dashboard" [level=5] [ref=e175]
          - generic [ref=e177]:
            - button "contexts" [ref=e180] [cursor=pointer]:
              - generic [ref=e181]:
                - img [ref=e182]
                - generic [ref=e183]: "0"
            - button [ref=e186] [cursor=pointer]:
              - img [ref=e187]
            - button [ref=e194] [cursor=pointer]:
              - img [ref=e196]
            - button [ref=e199] [cursor=pointer]:
              - img [ref=e200]
      - generic [ref=e202]:
        - main [ref=e203]:
          - tablist [ref=e207]:
            - tab "Overview" [selected] [ref=e208] [cursor=pointer]:
              - img [ref=e209]
              - text: Overview
            - tab "Node" [ref=e234] [cursor=pointer]:
              - img [ref=e235]
              - text: Node
            - tab "Namespace" [ref=e241] [cursor=pointer]:
              - img [ref=e242]
              - text: Namespace
            - tab "Workload" [ref=e248] [cursor=pointer]:
              - img [ref=e249]
              - text: Workload
            - tab "Configuration" [ref=e255] [cursor=pointer]:
              - img [ref=e256]
              - text: Configuration
            - tab "Network" [ref=e262] [cursor=pointer]:
              - img [ref=e263]
              - text: Network
            - tab "Security" [ref=e269] [cursor=pointer]:
              - img [ref=e270]
              - text: Security
            - tab "Storage" [ref=e276] [cursor=pointer]:
              - img [ref=e277]
              - text: Storage
            - tab "CRDS" [ref=e283] [cursor=pointer]:
              - img [ref=e284]
              - text: CRDS
          - tabpanel [ref=e291]:
            - generic [ref=e294]:
              - generic [ref=e296]:
                - generic [ref=e298]:
                  - generic [ref=e299]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e300]
                    - generic [ref=e301]:
                      - generic [ref=e302]:
                        - combobox [ref=e303] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e304] [cursor=pointer]:
                        - img [ref=e306]
                  - list [ref=e308]:
                    - listitem:
                      - generic [ref=e311]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e312]
                    - listitem:
                      - generic [ref=e315]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e316]
                    - listitem:
                      - generic [ref=e319]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e320]
                    - listitem:
                      - generic [ref=e323]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e324]
                    - listitem:
                      - generic [ref=e327]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e328]
                    - listitem:
                      - generic [ref=e331]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e332]
                    - listitem:
                      - generic [ref=e335]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e336]
                    - listitem:
                      - generic [ref=e339]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e340]
                    - listitem:
                      - generic [ref=e343]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e344]
                    - listitem:
                      - generic [ref=e347]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e348]
                    - listitem:
                      - generic [ref=e351]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e352]
                    - listitem:
                      - generic [ref=e355]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e356]
                    - listitem:
                      - generic [ref=e359]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e360]
                    - listitem:
                      - generic [ref=e363]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e364]
                - generic [ref=e367]:
                  - generic [ref=e368]:
                    - img [ref=e369]
                    - heading "LATEST BLOGS" [level=6] [ref=e371]
                  - list [ref=e373]:
                    - listitem [ref=e374]:
                      - img [ref=e376]
                      - link "Meshery v1.0 is Generally Available" [ref=e385] [cursor=pointer]:
                        - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
                      - superscript [ref=e386]:
                        - img [ref=e387]
                    - listitem [ref=e389]:
                      - img [ref=e391]
                      - link "Mesheryctl Relationship Commands Promoted From Experimental" [ref=e400] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
                      - superscript [ref=e401]:
                        - img [ref=e402]
                    - listitem [ref=e404]:
                      - img [ref=e406]
                      - link "Meshery Workspaces" [ref=e415] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
                      - superscript [ref=e416]:
                        - img [ref=e417]
                    - listitem [ref=e419]:
                      - img [ref=e421]
                      - link "Certified Meshery Contributors Share Their Experiences" [ref=e430] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
                      - superscript [ref=e431]:
                        - img [ref=e432]
                    - listitem [ref=e434]:
                      - img [ref=e436]
                      - link "The Meshery Umbrella Expands" [ref=e445] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
                      - superscript [ref=e446]:
                        - img [ref=e447]
              - button "Edit" [ref=e449] [cursor=pointer]:
                - generic [ref=e450]: Edit
                - img [ref=e452]
        - contentinfo [ref=e454]:
          - paragraph [ref=e455]:
            - generic [ref=e456] [cursor=pointer]:
              - text: Built with
              - img [ref=e457]
              - text: by the Meshery Community
  - alert [ref=e460]
```

# Test source

```ts
  1  | import { expect, test, Page } from '@playwright/test';
  2  | import { DashboardPage } from './pages/DashboardPage';
  3  | 
  4  | const SETTINGS_TABS: string[] = [
  5  |   'settings-tab-adapters',
  6  |   'settings-tab-metrics',
  7  |   'settings-tab-registry',
  8  |   'settings-tab-reset',
  9  | ];
  10 | 
  11 | const ACTION_BUTTONS: string[] = [
  12 |   'adapter-undeploy-button',
  13 |   'adapter-connect-button',
  14 |   'adapter-deploy-button',
  15 | ];
  16 | 
  17 | const GRAFANA_ELEMENTS: string[] = ['grafana-api-key'];
  18 | 
  19 | const COMMON_UI_ELEMENTS: string[] = [
  20 |   'navigation',
  21 |   'notification-button',
  22 |   'profile-button',
  23 |   'header-menu',
  24 | ];
  25 | 
  26 | test.describe('Performance Section Tests', () => {
  27 |   test.beforeEach(async ({ page }: { page: Page }) => {
  28 |     const dashboardPage = new DashboardPage(page);
  29 |     await dashboardPage.navigateToDashboard();
  30 |     await dashboardPage.navigateToPerformance();
  31 |   });
  32 | 
  33 |   test('Common UI elements', async ({ page }: { page: Page }) => {
  34 |     for (const elementId of COMMON_UI_ELEMENTS) {
  35 |       await expect(
  36 |         page.getByTestId(elementId),
  37 |         `UI element with ID ${elementId} should be visible`,
  38 |       ).toBeVisible();
  39 |     }
  40 |   });
  41 | 
  42 |   test.describe('Configure Metrics Navigation and Settings', () => {
  43 |     test.beforeEach(async ({ page }: { page: Page }) => {
> 44 |       await page.getByTestId('configure-metrics-button').click();
     |                                                          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  45 |       await expect(page).toHaveURL(/metrics/i);
  46 |     });
  47 | 
  48 |     test('All settings tabs', async ({ page }: { page: Page }) => {
  49 |       for (const tabId of SETTINGS_TABS) {
  50 |         await expect(
  51 |           page.getByTestId(tabId),
  52 |           `Tab with ID ${tabId} should be visible`,
  53 |         ).toBeVisible();
  54 |       }
  55 |     });
  56 | 
  57 |     test('Action buttons on adapters tab', async ({ page }: { page: Page }) => {
  58 |       await page.getByTestId('settings-tab-adapters').click();
  59 | 
  60 |       for (const buttonId of ACTION_BUTTONS) {
  61 |         await expect(
  62 |           page.getByTestId(buttonId),
  63 |           `Button with ID ${buttonId} should be visible`,
  64 |         ).toBeVisible();
  65 |       }
  66 |     });
  67 | 
  68 |     test('Grafana elements on metrics tab', async ({ page }: { page: Page }) => {
  69 |       await page.getByTestId('settings-tab-metrics').click();
  70 |       for (const grafanaId of GRAFANA_ELEMENTS) {
  71 |         await expect(
  72 |           page.getByTestId(grafanaId),
  73 |           `Grafana element with ID ${grafanaId} should be visible`,
  74 |         ).toBeVisible();
  75 |       }
  76 |     });
  77 |   });
  78 | });
  79 | 
```