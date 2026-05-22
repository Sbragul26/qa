# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Performance Section Tests >> Configure Metrics Navigation and Settings >> All settings tabs
- Location: tests/e2e/performance.spec.ts:48:9

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
          - button "Configuration" [ref=e33] [cursor=pointer]:
            - link "Configuration" [ref=e34]:
              - /url: /configuration/designs
              - generic [ref=e35]:
                - img [ref=e37]
                - generic [ref=e42]: Configuration
          - generic [ref=e43]:
            - button "meshery-button-2 Performance" [ref=e44] [cursor=pointer]:
              - link "meshery-button-2 Performance" [active] [ref=e45]:
                - /url: /performance
                - generic [ref=e46]:
                  - img "meshery-button-2" [ref=e48]
                  - generic [ref=e74]: Performance
              - img [ref=e75]:
                - img [ref=e76]
            - list [ref=e81]:
              - button "Profiles" [ref=e83] [cursor=pointer]:
                - generic [ref=e84]:
                  - img [ref=e86]
                  - generic [ref=e89]: Profiles
          - button "Extensions" [ref=e91] [cursor=pointer]:
            - link "Extensions" [ref=e92]:
              - /url: /extensions
              - generic [ref=e93]:
                - img [ref=e95]
                - generic [ref=e122]: Extensions
          - separator [ref=e123]
        - generic [ref=e124]:
          - img [ref=e127] [cursor=pointer]
          - group [ref=e129]:
            - listitem [ref=e130]:
              - link [ref=e131] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e133]
            - listitem [ref=e135]:
              - link [ref=e136] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e138]
            - listitem [ref=e147]:
              - link [ref=e148] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e150]
            - listitem [ref=e152]:
              - link [ref=e153] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e155]
          - listitem [ref=e157]:
            - generic [ref=e158]:
              - text: v1.0.26
              - link [ref=e160] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.26
                - img [ref=e161]
              - text: Running latest
    - generic [ref=e163]:
      - banner [ref=e164]:
        - generic [ref=e166]:
          - generic [ref=e168]:
            - button [ref=e170] [cursor=pointer]:
              - img [ref=e171]
            - text: /
            - button [ref=e180] [cursor=pointer]:
              - img [ref=e181]
            - text: /
            - heading "Dashboard" [level=5] [ref=e185]
          - generic [ref=e187]:
            - button "contexts" [ref=e190] [cursor=pointer]:
              - generic [ref=e191]:
                - img [ref=e192]
                - generic [ref=e193]: "0"
            - button [ref=e196] [cursor=pointer]:
              - img [ref=e197]
            - button [ref=e204] [cursor=pointer]:
              - img [ref=e206]
            - button [ref=e209] [cursor=pointer]:
              - img [ref=e210]
      - generic [ref=e212]:
        - main [ref=e213]:
          - tablist [ref=e217]:
            - tab "Overview" [selected] [ref=e218] [cursor=pointer]:
              - img [ref=e219]
              - text: Overview
            - tab "Node" [ref=e244] [cursor=pointer]:
              - img [ref=e245]
              - text: Node
            - tab "Namespace" [ref=e251] [cursor=pointer]:
              - img [ref=e252]
              - text: Namespace
            - tab "Workload" [ref=e258] [cursor=pointer]:
              - img [ref=e259]
              - text: Workload
            - tab "Configuration" [ref=e265] [cursor=pointer]:
              - img [ref=e266]
              - text: Configuration
            - tab "Network" [ref=e272] [cursor=pointer]:
              - img [ref=e273]
              - text: Network
            - tab "Security" [ref=e279] [cursor=pointer]:
              - img [ref=e280]
              - text: Security
            - tab "Storage" [ref=e286] [cursor=pointer]:
              - img [ref=e287]
              - text: Storage
            - tab "CRDS" [ref=e293] [cursor=pointer]:
              - img [ref=e294]
              - text: CRDS
          - tabpanel [ref=e301]:
            - generic [ref=e304]:
              - generic [ref=e306]:
                - generic [ref=e308]:
                  - generic [ref=e309]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e310]
                    - generic [ref=e311]:
                      - generic [ref=e312]:
                        - combobox [ref=e313] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e314] [cursor=pointer]:
                        - img [ref=e316]
                  - list [ref=e318]:
                    - listitem:
                      - generic [ref=e321]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e322]
                    - listitem:
                      - generic [ref=e325]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e326]
                    - listitem:
                      - generic [ref=e329]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e330]
                    - listitem:
                      - generic [ref=e333]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e334]
                    - listitem:
                      - generic [ref=e337]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e338]
                    - listitem:
                      - generic [ref=e341]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e342]
                    - listitem:
                      - generic [ref=e345]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e346]
                    - listitem:
                      - generic [ref=e349]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e350]
                    - listitem:
                      - generic [ref=e353]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e354]
                    - listitem:
                      - generic [ref=e357]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e358]
                    - listitem:
                      - generic [ref=e361]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e362]
                    - listitem:
                      - generic [ref=e365]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e366]
                    - listitem:
                      - generic [ref=e369]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e370]
                    - listitem:
                      - generic [ref=e373]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e374]
                - generic [ref=e377]:
                  - generic [ref=e378]:
                    - img [ref=e379]
                    - heading "LATEST BLOGS" [level=6] [ref=e381]
                  - list [ref=e383]:
                    - listitem [ref=e384]:
                      - img [ref=e386]
                      - link "Meshery v1.0 is Generally Available" [ref=e395] [cursor=pointer]:
                        - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
                      - superscript [ref=e396]:
                        - img [ref=e397]
                    - listitem [ref=e399]:
                      - img [ref=e401]
                      - link "Mesheryctl Relationship Commands Promoted From Experimental" [ref=e410] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
                      - superscript [ref=e411]:
                        - img [ref=e412]
                    - listitem [ref=e414]:
                      - img [ref=e416]
                      - link "Meshery Workspaces" [ref=e425] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
                      - superscript [ref=e426]:
                        - img [ref=e427]
                    - listitem [ref=e429]:
                      - img [ref=e431]
                      - link "Certified Meshery Contributors Share Their Experiences" [ref=e440] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
                      - superscript [ref=e441]:
                        - img [ref=e442]
                    - listitem [ref=e444]:
                      - img [ref=e446]
                      - link "The Meshery Umbrella Expands" [ref=e455] [cursor=pointer]:
                        - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
                      - superscript [ref=e456]:
                        - img [ref=e457]
              - button "Edit" [ref=e459] [cursor=pointer]:
                - generic [ref=e460]: Edit
                - img [ref=e462]
        - contentinfo [ref=e464]:
          - paragraph [ref=e465]:
            - generic [ref=e466] [cursor=pointer]:
              - text: Built with
              - img [ref=e467]
              - text: by the Meshery Community
  - alert [ref=e470]
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