# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Performance Section Tests >> Configure Metrics Navigation and Settings >> Action buttons on adapters tab
- Location: tests/e2e/performance.spec.ts:68:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('meshery-metrics')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('meshery-metrics')

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
      - img:
        - img
    - list:
      - button "Profiles":
        - img
        - text: Profiles
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
    - text: undefined
    - link:
      - /url: https://docs.meshery.io/project/releases/undefined
      - img
    - text: Update available
    - link:
      - /url: https://docs.meshery.io/project/releases/v1.0.45
      - img
- banner:
  - button:
    - img
  - text: /
  - button:
    - img
  - text: /
  - heading "Dashboard" [level=5]
  - button "contexts":
    - img
    - text: "0"
  - button:
    - img
  - button
  - button:
    - img
- main:
  - tablist:
    - tab "Overview" [selected]:
      - img
      - text: Overview
    - tab "Node":
      - img
      - text: Node
    - tab "Namespace":
      - img
      - text: Namespace
    - tab "Workload":
      - img
      - text: Workload
    - tab "Configuration":
      - img
      - text: Configuration
    - tab "Network":
      - img
      - text: Network
    - tab "Security":
      - img
      - text: Security
    - tab "Storage":
      - img
      - text: Storage
    - tab "CRDS":
      - img
      - text: CRDS
  - tabpanel:
    - heading "No clusters available. Please connect your clusters to proceed." [level=5]
    - link "Connect Clusters":
      - /url: /management/connections
      - button "Connect Clusters":
        - img
        - text: Connect Clusters
    - img
    - heading "LATEST BLOGS" [level=6]
    - list:
      - listitem:
        - img
        - link "Meshery v1.0 is Generally Available":
          - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
        - superscript:
          - img
      - listitem:
        - img
        - link "Mesheryctl Relationship Commands Promoted From Experimental":
          - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
        - superscript:
          - img
      - listitem:
        - img
        - link "Meshery Workspaces":
          - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
        - superscript:
          - img
      - listitem:
        - img
        - link "Certified Meshery Contributors Share Their Experiences":
          - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
        - superscript:
          - img
      - listitem:
        - img
        - link "The Meshery Umbrella Expands":
          - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
        - superscript:
          - img
    - button "Edit":
      - text: Edit
      - img
- contentinfo:
  - paragraph:
    - text: Built with
    - img
    - text: by the Meshery Community
- alert
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('configure-metrics-button')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('configure-metrics-button')

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
      - img:
        - img
    - list:
      - button "Profiles":
        - img
        - text: Profiles
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
    - text: undefined
    - link:
      - /url: https://docs.meshery.io/project/releases/undefined
      - img
    - text: Update available
    - link:
      - /url: https://docs.meshery.io/project/releases/v1.0.45
      - img
- banner:
  - button:
    - img
  - text: /
  - button:
    - img
  - text: /
  - heading "Dashboard" [level=5]
  - button "contexts":
    - img
    - text: "0"
  - button:
    - img
  - button
  - button:
    - img
- main:
  - tablist:
    - tab "Overview" [selected]:
      - img
      - text: Overview
    - tab "Node":
      - img
      - text: Node
    - tab "Namespace":
      - img
      - text: Namespace
    - tab "Workload":
      - img
      - text: Workload
    - tab "Configuration":
      - img
      - text: Configuration
    - tab "Network":
      - img
      - text: Network
    - tab "Security":
      - img
      - text: Security
    - tab "Storage":
      - img
      - text: Storage
    - tab "CRDS":
      - img
      - text: CRDS
  - tabpanel:
    - heading "No clusters available. Please connect your clusters to proceed." [level=5]
    - link "Connect Clusters":
      - /url: /management/connections
      - button "Connect Clusters":
        - img
        - text: Connect Clusters
    - img
    - heading "LATEST BLOGS" [level=6]
    - list:
      - listitem:
        - img
        - link "Meshery v1.0 is Generally Available":
          - /url: https://meshery.io/blog/meshery-v1.0-general-availability/
        - superscript:
          - img
      - listitem:
        - img
        - link "Mesheryctl Relationship Commands Promoted From Experimental":
          - /url: https://meshery.io/blog/2026/03/2026-03-10-mesheryctl-relationship-cmds/
        - superscript:
          - img
      - listitem:
        - img
        - link "Meshery Workspaces":
          - /url: https://meshery.io/blog/2026/02/2026-02-16-meshery-workspaces-enabling-cross-team-collaboration/
        - superscript:
          - img
      - listitem:
        - img
        - link "Certified Meshery Contributors Share Their Experiences":
          - /url: https://meshery.io/blog/2026/01/2026-01-28-certified-meshery-contributors-share-their-experience/
        - superscript:
          - img
      - listitem:
        - img
        - link "The Meshery Umbrella Expands":
          - /url: https://meshery.io/blog/2025/meshery-ecosystem-expansion
        - superscript:
          - img
    - button "Edit":
      - text: Edit
      - img
- contentinfo:
  - paragraph:
    - text: Built with
    - img
    - text: by the Meshery Community
- alert
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
  27 |   // The shared beforeEach + the nested "Configure Metrics" beforeEach
  28 |   // together call navigateToDashboard() (two 120s visibility waits),
  29 |   // navigateToPerformance() (120s wait), and then wait on the
  30 |   // configure-metrics-button. Under the default BASE_TIMEOUT=60s the hook
  31 |   // dies before those inner waits resolve when CI is slow. 180s gives the
  32 |   // chain enough wall-clock and supersedes the prior CI-only inline
  33 |   // testInfo.setTimeout(120000), which only extended one hook layer.
  34 |   test.describe.configure({ timeout: 180_000 });
  35 | 
  36 |   test.beforeEach(async ({ page }: { page: Page }) => {
  37 |     const dashboardPage = new DashboardPage(page);
  38 |     await dashboardPage.navigateToDashboard();
  39 |     await dashboardPage.navigateToPerformance();
  40 |     await expect(page.getByTestId('meshery-metrics')).toBeVisible();
  41 |   });
  42 | 
  43 |   test('Common UI elements', async ({ page }: { page: Page }) => {
  44 |     for (const elementId of COMMON_UI_ELEMENTS) {
  45 |       await expect(
  46 |         page.getByTestId(elementId),
  47 |         `UI element with ID ${elementId} should be visible`,
  48 |       ).toBeVisible();
  49 |     }
  50 |   });
  51 | 
  52 |   test.describe('Configure Metrics Navigation and Settings', () => {
  53 |     test.beforeEach(async ({ page }: { page: Page }) => {
> 54 |       await expect(page.getByTestId('configure-metrics-button')).toBeVisible();
     |                                                                  ^ Error: expect(locator).toBeVisible() failed
  55 |       await page.getByTestId('configure-metrics-button').click();
  56 |       await expect(page).toHaveURL(/metrics/i);
  57 |     });
  58 | 
  59 |     test('All settings tabs', async ({ page }: { page: Page }) => {
  60 |       for (const tabId of SETTINGS_TABS) {
  61 |         await expect(
  62 |           page.getByTestId(tabId),
  63 |           `Tab with ID ${tabId} should be visible`,
  64 |         ).toBeVisible();
  65 |       }
  66 |     });
  67 | 
  68 |     test('Action buttons on adapters tab', async ({ page }: { page: Page }) => {
  69 |       await page.getByTestId('settings-tab-adapters').click();
  70 | 
  71 |       for (const buttonId of ACTION_BUTTONS) {
  72 |         await expect(
  73 |           page.getByTestId(buttonId),
  74 |           `Button with ID ${buttonId} should be visible`,
  75 |         ).toBeVisible();
  76 |       }
  77 |     });
  78 | 
  79 |     test('Grafana elements on metrics tab', async ({ page }: { page: Page }) => {
  80 |       await page.getByTestId('settings-tab-metrics').click();
  81 |       for (const grafanaId of GRAFANA_ELEMENTS) {
  82 |         await expect(
  83 |           page.getByTestId(grafanaId),
  84 |           `Grafana element with ID ${grafanaId} should be visible`,
  85 |         ).toBeVisible();
  86 |       }
  87 |     });
  88 |   });
  89 | });
  90 | 
```