# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: connections.spec.ts >> Connection Management Tests >> Verify that UI components are displayed
- Location: tests/e2e/connections.spec.ts:68:7

# Error details

```
Test timeout of 180000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 180000ms exceeded.
Call log:
  - waiting for getByTestId('connection')
    - locator resolved to <a tabindex="0" role="button" data-testid="connection" class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-aeic5k">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - locator resolved to <a tabindex="0" role="button" data-testid="connection" class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters css-yh57m5">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    247 × waiting for element to be visible, enabled and stable
        - element is not visible
      - retrying click action
        - waiting 500ms
    - waiting for element to be visible, enabled and stable

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
            - img [ref=e32]:
              - img [ref=e33]
          - button "Configuration" [ref=e36] [cursor=pointer]:
            - link "Configuration" [ref=e37]:
              - /url: /configuration/designs
              - generic [ref=e38]:
                - img [ref=e40]
                - generic [ref=e45]: Configuration
          - button "meshery-button-2 Performance" [ref=e47] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e48]:
              - /url: /performance
              - generic [ref=e49]:
                - img "meshery-button-2" [ref=e51]
                - generic [ref=e77]: Performance
          - button "Extensions" [ref=e79] [cursor=pointer]:
            - link "Extensions" [ref=e80]:
              - /url: /extensions
              - generic [ref=e81]:
                - img [ref=e83]
                - generic [ref=e110]: Extensions
          - separator [ref=e111]
        - generic [ref=e112]:
          - img [ref=e115] [cursor=pointer]
          - group [ref=e117]:
            - listitem [ref=e118]:
              - link [ref=e119] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e121]
            - listitem [ref=e123]:
              - link [ref=e124] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e126]
            - listitem [ref=e135]:
              - link [ref=e136] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e138]
            - listitem [ref=e140]:
              - link [ref=e141] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e143]
          - listitem [ref=e145]:
            - generic [ref=e146]:
              - text: undefined
              - link [ref=e148] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/undefined
                - img [ref=e149]
              - generic [ref=e151]:
                - text: Update available
                - link [ref=e152] [cursor=pointer]:
                  - /url: https://docs.meshery.io/project/releases/v1.0.39
                  - img [ref=e153]
    - generic [ref=e155]:
      - banner [ref=e156]:
        - generic [ref=e158]:
          - generic [ref=e160]:
            - button [ref=e162] [cursor=pointer]:
              - img [ref=e163]
            - text: /
            - button [ref=e172] [cursor=pointer]:
              - img [ref=e173]
            - text: /
            - heading "Lifecycle" [level=5] [ref=e177]
          - generic [ref=e179]:
            - button "contexts" [ref=e182] [cursor=pointer]:
              - generic [ref=e183]:
                - img [ref=e184]
                - generic [ref=e185]: "0"
            - button [ref=e188] [cursor=pointer]:
              - img [ref=e189]
            - button [ref=e196] [cursor=pointer]:
              - img [ref=e198]
            - button [ref=e201] [cursor=pointer]:
              - img [ref=e202]
      - generic [ref=e204]:
        - main [ref=e205]:
          - generic [ref=e206]:
            - tablist [ref=e210]:
              - tab "Connections" [selected] [ref=e211] [cursor=pointer]:
                - generic [ref=e212]:
                  - generic [ref=e213]: Connections
                  - img [ref=e214]
              - tab "MeshSync" [ref=e248] [cursor=pointer]:
                - generic [ref=e249]:
                  - generic [ref=e250]: MeshSync
                  - img [ref=e251]
            - generic [ref=e261]:
              - button "Add Cluster" [ref=e264] [cursor=pointer]:
                - img [ref=e265]
                - paragraph [ref=e268]: Add Cluster
              - generic [ref=e269]:
                - generic [ref=e271]:
                  - generic:
                    - generic:
                      - textbox "Search Connections..."
                  - button [ref=e273] [cursor=pointer]:
                    - img [ref=e274]
                - button [ref=e278] [cursor=pointer]:
                  - img [ref=e279]
                - button [ref=e284] [cursor=pointer]:
                  - img [ref=e285]
            - generic [ref=e287]:
              - grid [ref=e289]:
                - caption [ref=e290]
                - rowgroup [ref=e291]:
                  - row "Name Environments Kind Category Status Actions" [ref=e292]:
                    - columnheader [ref=e293]:
                      - generic [ref=e295] [cursor=pointer]:
                        - checkbox [ref=e296]
                        - img [ref=e297]
                    - columnheader "Name" [ref=e299]:
                      - generic [ref=e300]:
                        - paragraph [ref=e302]: Name
                        - button [ref=e303] [cursor=pointer]:
                          - img [ref=e304]
                    - columnheader "Environments" [ref=e306]:
                      - generic [ref=e308]:
                        - paragraph [ref=e309]: Environments
                        - button [ref=e311] [cursor=pointer]:
                          - img [ref=e312]
                    - columnheader "Kind" [ref=e314]:
                      - generic [ref=e315]:
                        - paragraph [ref=e317]: Kind
                        - button [ref=e318] [cursor=pointer]:
                          - img [ref=e319]
                    - columnheader "Category" [ref=e321]:
                      - generic [ref=e322]:
                        - paragraph [ref=e324]: Category
                        - button [ref=e325] [cursor=pointer]:
                          - img [ref=e326]
                    - columnheader "Status" [ref=e328]:
                      - generic [ref=e329]:
                        - generic [ref=e330]:
                          - paragraph [ref=e331]: Status
                          - button [ref=e333] [cursor=pointer]:
                            - img [ref=e334]
                        - button [ref=e336] [cursor=pointer]:
                          - img [ref=e337]
                    - columnheader "Actions" [ref=e339]
                - rowgroup [ref=e340]:
                  - row "meshery Assigned Environments meshery registry -" [ref=e341] [cursor=pointer]:
                    - gridcell [ref=e342]:
                      - generic [ref=e344]:
                        - checkbox [ref=e345]
                        - img [ref=e346]
                    - gridcell "meshery" [ref=e348]:
                      - button "meshery" [ref=e351]:
                        - img [ref=e355]
                        - generic [ref=e357]: meshery
                        - img [ref=e358]
                    - gridcell "Assigned Environments" [ref=e360]:
                      - generic [ref=e365]:
                        - log [ref=e367]
                        - generic [ref=e368]:
                          - generic [ref=e369]:
                            - generic [ref=e370]: Assigned Environments
                            - combobox [ref=e372]
                          - img [ref=e376]
                    - gridcell "meshery" [ref=e378]:
                      - generic [ref=e379]: meshery
                    - gridcell "registry" [ref=e380]:
                      - generic [ref=e381]: registry
                    - gridcell [ref=e382]:
                      - generic [ref=e385]:
                        - combobox [ref=e386]:
                          - generic [ref=e387]:
                            - img [ref=e388]
                            - generic [ref=e390]: registered
                        - textbox: registered
                        - img
                        - group
                    - gridcell "-" [ref=e391]:
                      - generic [ref=e393]: "-"
                  - row "Artifact Hub Assigned Environments artifacthub registry -" [ref=e394] [cursor=pointer]:
                    - gridcell [ref=e395]:
                      - generic [ref=e397]:
                        - checkbox [ref=e398]
                        - img [ref=e399]
                    - gridcell "Artifact Hub" [ref=e401]:
                      - button "Artifact Hub" [ref=e404]:
                        - img [ref=e408]
                        - generic [ref=e443]: Artifact Hub
                        - img [ref=e444]
                    - gridcell "Assigned Environments" [ref=e446]:
                      - generic [ref=e451]:
                        - log [ref=e453]
                        - generic [ref=e454]:
                          - generic [ref=e455]:
                            - generic [ref=e456]: Assigned Environments
                            - combobox [ref=e458]
                          - img [ref=e462]
                    - gridcell "artifacthub" [ref=e464]:
                      - generic [ref=e465]: artifacthub
                    - gridcell "registry" [ref=e466]:
                      - generic [ref=e467]: registry
                    - gridcell [ref=e468]:
                      - generic [ref=e471]:
                        - combobox [ref=e472]:
                          - generic [ref=e473]:
                            - img [ref=e474]
                            - generic [ref=e476]: registered
                        - textbox: registered
                        - img
                        - group
                    - gridcell "-" [ref=e477]:
                      - generic [ref=e479]: "-"
                  - row "Github Assigned Environments github registry -" [ref=e480] [cursor=pointer]:
                    - gridcell [ref=e481]:
                      - generic [ref=e483]:
                        - checkbox [ref=e484]
                        - img [ref=e485]
                    - gridcell "Github" [ref=e487]:
                      - button "Github" [ref=e490]:
                        - img [ref=e494]
                        - generic [ref=e529]: Github
                        - img [ref=e530]
                    - gridcell "Assigned Environments" [ref=e532]:
                      - generic [ref=e537]:
                        - log [ref=e539]
                        - generic [ref=e540]:
                          - generic [ref=e541]:
                            - generic [ref=e542]: Assigned Environments
                            - combobox [ref=e544]
                          - img [ref=e548]
                    - gridcell "github" [ref=e550]:
                      - generic [ref=e551]: github
                    - gridcell "registry" [ref=e552]:
                      - generic [ref=e553]: registry
                    - gridcell [ref=e554]:
                      - generic [ref=e557]:
                        - combobox [ref=e558]:
                          - generic [ref=e559]:
                            - img [ref=e560]
                            - generic [ref=e562]: registered
                        - textbox: registered
                        - img
                        - group
                    - gridcell "-" [ref=e563]:
                      - generic [ref=e565]: "-"
                  - row "Artifact Hub Assigned Environments artifacthub registry -" [ref=e566] [cursor=pointer]:
                    - gridcell [ref=e567]:
                      - generic [ref=e569]:
                        - checkbox [ref=e570]
                        - img [ref=e571]
                    - gridcell "Artifact Hub" [ref=e573]:
                      - button "Artifact Hub" [ref=e576]:
                        - img [ref=e580]
                        - generic [ref=e615]: Artifact Hub
                        - img [ref=e616]
                    - gridcell "Assigned Environments" [ref=e618]:
                      - generic [ref=e623]:
                        - log [ref=e625]
                        - generic [ref=e626]:
                          - generic [ref=e627]:
                            - generic [ref=e628]: Assigned Environments
                            - combobox [ref=e630]
                          - img [ref=e634]
                    - gridcell "artifacthub" [ref=e636]:
                      - generic [ref=e637]: artifacthub
                    - gridcell "registry" [ref=e638]:
                      - generic [ref=e639]: registry
                    - gridcell [ref=e640]:
                      - generic [ref=e643]:
                        - combobox [ref=e644]:
                          - generic [ref=e645]:
                            - img [ref=e646]
                            - generic [ref=e648]: registered
                        - textbox: registered
                        - img
                        - group
                    - gridcell "-" [ref=e649]:
                      - generic [ref=e651]: "-"
              - table [ref=e652]:
                - rowgroup [ref=e653]:
                  - 'row "Rows per page: 1-4 of 4 Previous Page Next Page" [ref=e654]':
                    - 'cell "Rows per page: 1-4 of 4 Previous Page Next Page" [ref=e655]':
                      - generic [ref=e658]:
                        - paragraph [ref=e659]: "Rows per page:"
                        - generic [ref=e660]:
                          - combobox "Rows per page:" [ref=e661] [cursor=pointer]: "10"
                          - textbox: "10"
                          - img
                        - paragraph [ref=e662]: 1-4 of 4
                        - generic [ref=e663]:
                          - button "Previous Page" [disabled]:
                            - img
                          - button "Next Page" [disabled]:
                            - img
        - contentinfo [ref=e665]:
          - paragraph [ref=e666]:
            - generic [ref=e667] [cursor=pointer]:
              - text: Built with
              - img [ref=e668]
              - text: by the Meshery Community
  - alert [ref=e671]
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | const LEFT_NAV = {
  3   |   DASHBOARD: {
  4   |     name: 'Dashboard',
  5   |     path: '/',
  6   |     NAV_ITEMS: {},
  7   |   },
  8   |   LIFECYCLE: {
  9   |     name: 'lifecycle',
  10  |     NAV_ITEMS: {
  11  |       CONNECTIONS: 'connection',
  12  |       ENVIRONMENT: 'environment',
  13  |       WORKSPACE: 'Workspace',
  14  |       ADAPTERS: 'Adapters',
  15  |     },
  16  |   },
  17  |   CONFIGURATION: {
  18  |     name: 'configuration',
  19  |     NAV_ITEMS: {
  20  |       DESIGNS: 'design',
  21  |     },
  22  |   },
  23  |   PERFORMANCE: {
  24  |     name: 'performance',
  25  |     NAV_ITEMS: {
  26  |       PROFILES: 'profiles',
  27  |     },
  28  |   },
  29  |   EXTENSIONS: {
  30  |     name: 'extensions',
  31  |     NAV_ITEMS: {},
  32  |   },
  33  | };
  34  | 
  35  | const HEADER_NAV = {
  36  |   name: 'header-nav',
  37  |   NAV_ITEMS: {
  38  |     SETTINGS: 'nav-item-settings',
  39  |     LOGOUT: 'nav-item-logout',
  40  |     PREFERENCES: 'nav-item-preferences',
  41  |     NOTIFICATIONS: 'nav-item-notifications',
  42  |   },
  43  | };
  44  | 
  45  | export class DashboardPage {
  46  |   constructor(page) {
  47  |     this.page = page;
  48  |     this.navigationPanel = this.page.getByTestId('navigation');
  49  |     this.notificationButton = this.page.getByTestId('notification-button');
  50  |     this.profileButton = this.page.getByTestId('profile-button');
  51  |     this.headerMenu = this.page.getByTestId('header-menu');
  52  |   }
  53  | 
  54  |   async navigateToMenu(navItem) {
  55  |     const menuItem = this.page.getByTestId(navItem);
  56  |     await expect(menuItem).toBeVisible();
  57  |     await menuItem.click();
  58  |   }
  59  | 
  60  |   async navigateToSubMenuItem(parentItem, childItem) {
  61  |     await this.navigateToMenu(parentItem);
  62  |     const submenuItem = this.page.getByTestId(childItem);
  63  |     await expect(submenuItem).toBeVisible();
> 64  |     await submenuItem.click();
      |                       ^ Error: locator.click: Test timeout of 180000ms exceeded.
  65  |   }
  66  | 
  67  |   async navigateToDashboard() {
  68  |     await this.page.goto(LEFT_NAV.DASHBOARD.path, { waitUntil: 'domcontentloaded' });
  69  |     await expect(this.navigationPanel).toBeVisible();
  70  |     await expect(this.headerMenu).toBeVisible();
  71  |   }
  72  | 
  73  |   async navigateToPerformance() {
  74  |     await this.navigateToMenu(LEFT_NAV.PERFORMANCE.name);
  75  |   }
  76  | 
  77  |   async navigateToExtensions() {
  78  |     await this.navigateToMenu(LEFT_NAV.EXTENSIONS.name);
  79  |   }
  80  | 
  81  |   async navigateToLifecycle() {
  82  |     await this.navigateToMenu(LEFT_NAV.LIFECYCLE.name);
  83  |   }
  84  | 
  85  |   async navigateToConfiguration() {
  86  |     await this.navigateToMenu(LEFT_NAV.CONFIGURATION.name);
  87  |   }
  88  | 
  89  |   async navigateToConnections() {
  90  |     await this.navigateToSubMenuItem(
  91  |       LEFT_NAV.LIFECYCLE.name,
  92  |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.CONNECTIONS,
  93  |     );
  94  |   }
  95  | 
  96  |   async navigateToEnvironment() {
  97  |     await this.navigateToSubMenuItem(
  98  |       LEFT_NAV.LIFECYCLE.name,
  99  |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.ENVIRONMENT,
  100 |     );
  101 |   }
  102 | 
  103 |   async navigateToWorkspace() {
  104 |     await this.navigateToSubMenuItem(
  105 |       LEFT_NAV.LIFECYCLE.name,
  106 |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.WORKSPACE,
  107 |     );
  108 |   }
  109 | 
  110 |   async navigateToAdapters() {
  111 |     await this.navigateToSubMenuItem(
  112 |       LEFT_NAV.LIFECYCLE.name,
  113 |       LEFT_NAV.LIFECYCLE.NAV_ITEMS.ADAPTERS,
  114 |     );
  115 |   }
  116 | 
  117 |   async navigateToProfiles() {
  118 |     await this.navigateToSubMenuItem(
  119 |       LEFT_NAV.PERFORMANCE.name,
  120 |       LEFT_NAV.PERFORMANCE.NAV_ITEMS.PROFILES,
  121 |     );
  122 |   }
  123 | 
  124 |   async navigateToHeaderItem(navItem) {
  125 |     await expect(this.headerMenu).toBeVisible();
  126 |     await this.headerMenu.click();
  127 |     const headerItem = this.page.getByTestId(navItem);
  128 |     await expect(headerItem).toBeVisible();
  129 |     await headerItem.click();
  130 |   }
  131 | 
  132 |   async navigateToSettings() {
  133 |     await this.navigateToHeaderItem(HEADER_NAV.NAV_ITEMS.SETTINGS);
  134 |   }
  135 | 
  136 |   async navigateToPreferences() {
  137 |     await this.navigateToHeaderItem(HEADER_NAV.NAV_ITEMS.PREFERENCES);
  138 |   }
  139 | 
  140 |   async navigateToDesigns() {
  141 |     await this.navigateToSubMenuItem(
  142 |       LEFT_NAV.CONFIGURATION.name,
  143 |       LEFT_NAV.CONFIGURATION.NAV_ITEMS.DESIGNS,
  144 |     );
  145 |   }
  146 | 
  147 |   async navigateToLogout() {
  148 |     await this.navigateToHeaderItem(HEADER_NAV.NAV_ITEMS.LOGOUT);
  149 |   }
  150 | }
  151 | 
```