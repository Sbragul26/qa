# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Adapter for Istio Section
- Location: tests/e2e/extensions.spec.ts:60:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByTestId('extensions')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e4]:
    - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e5]
    - generic [ref=e6]:
      - code [ref=e7]:
        - strong [ref=e8]: "Error:"
        - text: e?.capabilities?.some is not a function
      - strong [ref=e9]: "Version:"
    - paragraph [ref=e10]:
      - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
      - link "Discuss Forum" [ref=e11] [cursor=pointer]:
        - /url: https://discuss.layer5.io/
      - text: or
      - link "Slack" [ref=e12] [cursor=pointer]:
        - /url: https://slack.layer5.io/
    - generic [ref=e13]:
      - button "Get Help" [ref=e15] [cursor=pointer]:
        - generic [ref=e16]: Get Help
      - button "Try Again" [ref=e17] [cursor=pointer]:
        - generic [ref=e18]: Try Again
      - generic:
        - button "Feedback" [ref=e19] [cursor=pointer]
        - generic [ref=e21]:
          - generic [ref=e22]:
            - img [ref=e24]
            - paragraph [ref=e27]: Feedback
            - generic [ref=e28]:
              - img [ref=e31]
              - img [ref=e35] [cursor=pointer]
          - generic [ref=e39]:
            - generic [ref=e40]:
              - button "Issue" [ref=e41] [cursor=pointer]:
                - img [ref=e43]
                - paragraph [ref=e45]: Issue
              - button "Suggestion" [ref=e46] [cursor=pointer]:
                - img [ref=e48]
                - paragraph [ref=e54]: Suggestion
              - button "Meet Request" [ref=e55] [cursor=pointer]:
                - img [ref=e57]
                - paragraph [ref=e62]: Meet Request
            - textbox "I’m having an issue with..." [ref=e64]: "An error occurred on the page at http://localhost:9081/ on 5/13/2026, 12:08:00 AM. Error Details: e?.capabilities?.some is not a function."
          - generic [ref=e66]:
            - generic [ref=e67]:
              - generic [ref=e68] [cursor=pointer]:
                - checkbox [checked] [ref=e69]
                - img [ref=e70]
              - paragraph [ref=e72]: We may email you for more information or updates
            - button "Send" [ref=e73] [cursor=pointer]
  - alert [ref=e74]
```

# Test source

```ts
  1   | const LEFT_NAV = {
  2   |   DASHBOARD: {
  3   |     name: 'Dashboard',
  4   |     path: '/',
  5   |     NAV_ITEMS: {},
  6   |   },
  7   |   LIFECYCLE: {
  8   |     name: 'lifecycle',
  9   |     NAV_ITEMS: {
  10  |       CONNECTIONS: 'connection',
  11  |       ENVIRONMENT: 'environment',
  12  |       WORKSPACE: 'Workspace',
  13  |       ADAPTERS: 'Adapters',
  14  |     },
  15  |   },
  16  |   CONFIGURATION: {
  17  |     name: 'configuration',
  18  |     NAV_ITEMS: {
  19  |       DESIGNS: 'design',
  20  |     },
  21  |   },
  22  |   PERFORMANCE: {
  23  |     name: 'performance',
  24  |     NAV_ITEMS: {
  25  |       PROFILES: 'profiles',
  26  |     },
  27  |   },
  28  |   EXTENSIONS: {
  29  |     name: 'extensions',
  30  |     NAV_ITEMS: {},
  31  |   },
  32  | };
  33  | 
  34  | const HEADER_NAV = {
  35  |   name: 'header-nav',
  36  |   NAV_ITEMS: {
  37  |     SETTINGS: 'nav-item-settings',
  38  |     LOGOUT: 'nav-item-logout',
  39  |     PREFERENCES: 'nav-item-preferences',
  40  |     NOTIFICATIONS: 'nav-item-notifications',
  41  |   },
  42  | };
  43  | 
  44  | export class DashboardPage {
  45  |   constructor(page) {
  46  |     this.page = page;
  47  |     this.navigationPanel = this.page.getByTestId('navigation');
  48  |     this.notificationButton = this.page.getByTestId('notification-button');
  49  |     this.profileButton = this.page.getByTestId('profile-button');
  50  |     this.headerMenu = this.page.getByTestId('header-menu');
  51  |   }
  52  | 
  53  |   async navigateToMenu(navItem) {
> 54  |     await this.page.getByTestId(navItem).click();
      |                                          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  55  |   }
  56  | 
  57  |   async navigateToSubMenuItem(parentItem, childItem) {
  58  |     await this.navigateToMenu(parentItem);
  59  |     await this.navigateToMenu(childItem);
  60  |   }
  61  | 
  62  |   async navigateToDashboard() {
  63  |     await this.page.goto(LEFT_NAV.DASHBOARD.path);
  64  |   }
  65  | 
  66  |   async navigateToPerformance() {
  67  |     await this.navigateToMenu(LEFT_NAV.PERFORMANCE.name);
  68  |   }
  69  | 
  70  |   async navigateToExtensions() {
  71  |     await this.navigateToMenu(LEFT_NAV.EXTENSIONS.name);
  72  |   }
  73  | 
  74  |   async navigateToLifecycle() {
  75  |     await this.navigateToMenu(LEFT_NAV.LIFECYCLE.name);
  76  |   }
  77  | 
  78  |   async navigateToConfiguration() {
  79  |     await this.navigateToMenu(LEFT_NAV.CONFIGURATION.name);
  80  |   }
  81  | 
  82  |   async navigateToConnections() {
  83  |     await this.navigateToSubMenuItem(
  84  |       LEFT_NAV.LIFECYCLE.name,
  85  |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.CONNECTIONS,
  86  |     );
  87  |   }
  88  | 
  89  |   async navigateToEnvironment() {
  90  |     await this.navigateToSubMenuItem(
  91  |       LEFT_NAV.LIFECYCLE.name,
  92  |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.ENVIRONMENT,
  93  |     );
  94  |   }
  95  | 
  96  |   async navigateToWorkspace() {
  97  |     await this.navigateToSubMenuItem(
  98  |       LEFT_NAV.LIFECYCLE.name,
  99  |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.WORKSPACE,
  100 |     );
  101 |   }
  102 | 
  103 |   async navigateToAdapters() {
  104 |     await this.navigateToSubMenuItem(
  105 |       LEFT_NAV.LIFECYCLE.name,
  106 |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.ADAPTERS,
  107 |     );
  108 |   }
  109 | 
  110 |   async navigateToProfiles() {
  111 |     await this.navigateToSubMenuItem(
  112 |       LEFT_NAV.PERFORMANCE.name,
  113 |       LEFT_NAV.PERFORMANCE.NAV_ITEMS.PROFILES,
  114 |     );
  115 |   }
  116 | 
  117 |   async navigateToHeaderItem(navItem) {
  118 |     await this.headerMenu.click();
  119 |     await this.page.getByTestId(navItem).click();
  120 |   }
  121 | 
  122 |   async navigateToSettings() {
  123 |     await this.navigateToHeaderItem(HEADER_NAV.NAV_ITEMS.SETTINGS);
  124 |   }
  125 | 
  126 |   async navigateToPreferences() {
  127 |     await this.navigateToHeaderItem(HEADER_NAV.NAV_ITEMS.PREFERENCES);
  128 |   }
  129 | 
  130 |   async navigateToDesigns() {
  131 |     await this.navigateToSubMenuItem(
  132 |       LEFT_NAV.CONFIGURATION.name,
  133 |       LEFT_NAV.CONFIGURATION.NAV_ITEMS.DESIGNS,
  134 |     );
  135 |   }
  136 | 
  137 |   async navigateToLogout() {
  138 |     await this.navigateToHeaderItem(HEADER_NAV.NAV_ITEMS.LOGOUT);
  139 |   }
  140 | }
  141 | 
```