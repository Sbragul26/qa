# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.js >> Performance Section Tests >> Configure Metrics Navigation and Settings >> Grafana elements on metrics tab
- Location: tests/e2e/performance.spec.js:63:9

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
          - list [ref=e124]:
            - button "Kanvas" [ref=e125] [cursor=pointer]:
              - link "Kanvas" [ref=e126]:
                - /url: /extension/meshmap
                - generic [ref=e128]:
                  - img [ref=e130]
                  - generic [ref=e132]: Kanvas
          - separator [ref=e133]
        - generic [ref=e134]:
          - img [ref=e137] [cursor=pointer]
          - group [ref=e139]:
            - listitem [ref=e140]:
              - link [ref=e141] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e143]
            - listitem [ref=e145]:
              - link [ref=e146] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e148]
            - listitem [ref=e157]:
              - link [ref=e158] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e160]
            - listitem [ref=e162]:
              - link [ref=e163] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e165]
          - listitem [ref=e167]:
            - generic [ref=e168]:
              - text: v1.0.18
              - link [ref=e170] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.18
                - img [ref=e171]
              - text: Running latest
    - generic [ref=e173]:
      - banner [ref=e174]:
        - generic [ref=e176]:
          - generic [ref=e178]:
            - button [ref=e180] [cursor=pointer]:
              - img [ref=e181]
            - text: /
            - button [ref=e190] [cursor=pointer]:
              - img [ref=e191]
            - group [ref=e195]:
              - generic [ref=e200]:
                - combobox [ref=e201] [cursor=pointer]:
                  - generic [ref=e202]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Dashboard" [level=5] [ref=e203]
          - generic [ref=e205]:
            - button "contexts" [ref=e208] [cursor=pointer]:
              - generic [ref=e209]:
                - img [ref=e210]
                - generic [ref=e211]: "0"
            - button "99+" [ref=e214] [cursor=pointer]:
              - generic [ref=e215]:
                - img [ref=e216]
                - generic [ref=e219]: 99+
            - button [ref=e223] [cursor=pointer]:
              - img [ref=e225]
            - button [ref=e228] [cursor=pointer]:
              - img [ref=e229]
      - generic [ref=e231]:
        - main [ref=e232]:
          - tablist [ref=e236]:
            - tab "Overview" [selected] [ref=e237] [cursor=pointer]:
              - img [ref=e238]
              - text: Overview
            - tab "Node" [ref=e263] [cursor=pointer]:
              - img [ref=e264]
              - text: Node
            - tab "Namespace" [ref=e270] [cursor=pointer]:
              - img [ref=e271]
              - text: Namespace
            - tab "Workload" [ref=e277] [cursor=pointer]:
              - img [ref=e278]
              - text: Workload
            - tab "Configuration" [ref=e284] [cursor=pointer]:
              - img [ref=e285]
              - text: Configuration
            - tab "Network" [ref=e291] [cursor=pointer]:
              - img [ref=e292]
              - text: Network
            - tab "Security" [ref=e298] [cursor=pointer]:
              - img [ref=e299]
              - text: Security
            - tab "Storage" [ref=e305] [cursor=pointer]:
              - img [ref=e306]
              - text: Storage
            - tab "CRDS" [ref=e312] [cursor=pointer]:
              - img [ref=e313]
              - text: CRDS
          - tabpanel [ref=e320]:
            - generic [ref=e323]:
              - generic [ref=e325]:
                - generic [ref=e327]:
                  - generic [ref=e328]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e329]
                    - generic [ref=e330]:
                      - generic [ref=e331]:
                        - combobox [ref=e332] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e333] [cursor=pointer]:
                        - img [ref=e334]
                  - generic [ref=e336]:
                    - heading "No workloads found in your cluster(s)." [level=5] [ref=e337]
                    - link "Connect Clusters" [ref=e338] [cursor=pointer]:
                      - /url: /management/connections
                      - button "Connect Clusters" [ref=e339]:
                        - img [ref=e340]
                        - text: Connect Clusters
                - generic [ref=e344]:
                  - generic [ref=e345]:
                    - img [ref=e346]
                    - generic [ref=e349]: GETTING STARTED
                  - generic [ref=e350]:
                    - paragraph [ref=e351]: New here? Follow along these guided tasks to help you get the most of your account.
                    - paragraph [ref=e352]:
                      - generic [ref=e355]: 0%
                    - button "Start" [ref=e357] [cursor=pointer]
                - generic [ref=e361]:
                  - generic [ref=e362]:
                    - img [ref=e363]
                    - heading "HELP CENTER" [level=6] [ref=e367]
                  - list [ref=e369]:
                    - listitem [ref=e370]:
                      - img [ref=e372]
                      - link "Cloud Docs" [ref=e381] [cursor=pointer]:
                        - /url: https://docs.layer5.io/cloud
                      - superscript [ref=e382]:
                        - img [ref=e383]
                    - listitem [ref=e385]:
                      - img [ref=e387]
                      - link "Kanvas Docs" [ref=e396] [cursor=pointer]:
                        - /url: https://docs.layer5.io/kanvas
                      - superscript [ref=e397]:
                        - img [ref=e398]
                    - listitem [ref=e400]:
                      - img [ref=e402]
                      - link "Support Request" [ref=e411] [cursor=pointer]:
                        - /url: https://cloud.meshery.io/support
                      - superscript [ref=e412]:
                        - img [ref=e413]
                    - listitem [ref=e415]:
                      - img [ref=e417]
                      - link "Discussion Forum" [ref=e426] [cursor=pointer]:
                        - /url: https://meshery.io/community/#discussion-forums
                      - superscript [ref=e427]:
                        - img [ref=e428]
                    - listitem [ref=e430]:
                      - img [ref=e432]
                      - link "Slack" [ref=e441] [cursor=pointer]:
                        - /url: https://slack.meshery.io
                      - superscript [ref=e442]:
                        - img [ref=e443]
                - generic [ref=e447]:
                  - generic [ref=e448]:
                    - generic [ref=e449]:
                      - img [ref=e450]
                      - heading "MY RECENT DESIGNS" [level=6] [ref=e459]
                    - button "Sort by" [ref=e460] [cursor=pointer]:
                      - img [ref=e461]
                  - list [ref=e464]:
                    - listitem [ref=e465]:
                      - img [ref=e467]
                      - link "Untitled Design" [ref=e476] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=cd52d85d-db96-4578-ba91-d004e5fb43af
                      - generic "Wed, May 6, 2026 8:06 PM" [ref=e478]:
                        - paragraph [ref=e479]: 14 minutes ago
                    - listitem [ref=e480]:
                      - img [ref=e482]
                      - link "Untitled Design" [ref=e491] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=9741393f-1efe-458c-9137-afa91b5aed16
                      - generic "Wed, May 6, 2026 8:06 PM" [ref=e493]:
                        - paragraph [ref=e494]: 14 minutes ago
                    - listitem [ref=e495]:
                      - img [ref=e497]
                      - link "Untitled Design" [ref=e506] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=d3400230-ef58-4e31-ae93-781afb80fa43
                      - generic "Wed, May 6, 2026 8:04 PM" [ref=e508]:
                        - paragraph [ref=e509]: 15 minutes ago
                    - listitem [ref=e510]:
                      - img [ref=e512]
                      - link "Untitled Design" [ref=e521] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=1db08788-0e92-4db4-a513-b4f34a6a67c7
                      - generic "Wed, May 6, 2026 8:04 PM" [ref=e523]:
                        - paragraph [ref=e524]: 15 minutes ago
                    - listitem [ref=e525]:
                      - img [ref=e527]
                      - link "Untitled Design" [ref=e536] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=a8e6ca55-aebe-4c8f-a04e-674829aad103
                      - generic "Wed, May 6, 2026 8:03 PM" [ref=e538]:
                        - paragraph [ref=e539]: 16 minutes ago
                    - listitem [ref=e540]:
                      - img [ref=e542]
                      - link "Untitled Design" [ref=e551] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=e88d818b-a035-4d43-822d-5e24153d78a2
                      - generic "Wed, May 6, 2026 8:03 PM" [ref=e553]:
                        - paragraph [ref=e554]: 17 minutes ago
                    - listitem [ref=e555]:
                      - img [ref=e557]
                      - link "Untitled Design" [ref=e566] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=1e6e6daa-cafa-4b35-a0aa-580ff322d594
                      - generic "Wed, May 6, 2026 8:02 PM" [ref=e568]:
                        - paragraph [ref=e569]: 17 minutes ago
                  - generic [ref=e570]:
                    - link "See All Designs" [ref=e571] [cursor=pointer]:
                      - /url: https://cloud.meshery.io/catalog/content/my-designs
                    - button [ref=e572] [cursor=pointer]:
                      - img [ref=e573]
                - generic [ref=e576]:
                  - generic [ref=e577]:
                    - generic [ref=e578]:
                      - img [ref=e579]
                      - heading "WORKSPACE ACTIVITY" [level=6] [ref=e583]
                    - generic [ref=e584]:
                      - combobox [ref=e585] [cursor=pointer]: eks-sandbox
                      - textbox: d26aa57e-e9ec-4424-878c-a794bd3a3b7d
                      - img
                  - list [ref=e586]:
                    - generic [ref=e591]:
                      - strong [ref=e592]: "Mar 28:"
                      - text: lekaf974 created workspace eks-sandbox
                  - link "All Workspaces" [ref=e594] [cursor=pointer]:
                    - /url: /management/workspaces
                - link "KUBERNETES CLUSTER STATUS" [ref=e596] [cursor=pointer]:
                  - /url: /management/connections
                  - generic [ref=e597]:
                    - generic [ref=e598]:
                      - generic [ref=e599]:
                        - img [ref=e600]
                        - heading "KUBERNETES CLUSTER STATUS" [level=6] [ref=e603]
                      - img [ref=e606]
                    - img [ref=e610]:
                      - generic [ref=e613]:
                        - generic [ref=e614]: Clusters Status
                        - generic [ref=e615]:
                          - generic: "1"
                        - generic [ref=e618]:
                          - generic: "9"
                      - generic [ref=e621]:
                        - generic [ref=e622]:
                          - generic: connected
                        - generic [ref=e624]:
                          - generic: not found
              - button "Edit" [ref=e626] [cursor=pointer]:
                - generic [ref=e627]: Edit
                - img [ref=e629]
        - contentinfo [ref=e631]:
          - paragraph [ref=e632]:
            - generic [ref=e633] [cursor=pointer]:
              - text: Built with
              - img [ref=e634]
              - text: by the Meshery Community
  - alert [ref=e637]
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