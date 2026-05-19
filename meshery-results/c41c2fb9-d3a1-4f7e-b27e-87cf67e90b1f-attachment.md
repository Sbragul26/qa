# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: extensions.spec.ts >> Extensions Section Tests >> Verify Meshery Design Embed Details
- Location: tests/e2e/extensions.spec.ts:42:7

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
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - generic:
            - img
            - img
        - list [ref=e8]:
          - separator [ref=e9]
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic:
              - img
          - group [ref=e12]:
            - listitem [ref=e13]:
              - link [ref=e14] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e16]
            - listitem [ref=e18]:
              - link [ref=e19] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e21]
            - listitem [ref=e30]:
              - link [ref=e31] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e33]
            - listitem [ref=e35]:
              - link [ref=e36] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e38]
          - listitem [ref=e40]:
            - generic [ref=e41]:
              - text: v1.0.24
              - link [ref=e43] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.24
                - img [ref=e44]
              - text: Running latest
    - generic [ref=e46]:
      - banner [ref=e47]:
        - generic [ref=e49]:
          - generic [ref=e51]:
            - button [ref=e53] [cursor=pointer]:
              - img [ref=e54]
            - text: /
            - button [ref=e63] [cursor=pointer]:
              - img [ref=e64]
            - group [ref=e68]:
              - generic [ref=e73]:
                - combobox [ref=e74] [cursor=pointer]:
                  - generic [ref=e75]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Dashboard" [level=5] [ref=e76]
          - generic [ref=e78]:
            - button "contexts" [ref=e81] [cursor=pointer]:
              - generic [ref=e82]:
                - img [ref=e83]
                - generic [ref=e84]: "0"
            - button "99+" [ref=e87] [cursor=pointer]:
              - generic [ref=e88]:
                - img [ref=e89]
                - generic [ref=e92]: 99+
            - button [ref=e96] [cursor=pointer]:
              - img [ref=e98]
            - button [ref=e101] [cursor=pointer]:
              - img [ref=e102]
      - generic [ref=e104]:
        - main [ref=e105]:
          - tablist [ref=e109]:
            - tab "Overview" [selected] [ref=e110] [cursor=pointer]:
              - img [ref=e111]
              - text: Overview
            - tab "Node" [ref=e136] [cursor=pointer]:
              - img [ref=e137]
              - text: Node
            - tab "Namespace" [ref=e143] [cursor=pointer]:
              - img [ref=e144]
              - text: Namespace
            - tab "Workload" [ref=e150] [cursor=pointer]:
              - img [ref=e151]
              - text: Workload
            - tab "Configuration" [ref=e157] [cursor=pointer]:
              - img [ref=e158]
              - text: Configuration
            - tab "Network" [ref=e164] [cursor=pointer]:
              - img [ref=e165]
              - text: Network
            - tab "Security" [ref=e171] [cursor=pointer]:
              - img [ref=e172]
              - text: Security
            - tab "Storage" [ref=e178] [cursor=pointer]:
              - img [ref=e179]
              - text: Storage
            - tab "CRDS" [ref=e185] [cursor=pointer]:
              - img [ref=e186]
              - text: CRDS
          - tabpanel [ref=e193]:
            - generic [ref=e196]:
              - generic [ref=e198]:
                - generic [ref=e200]:
                  - generic [ref=e201]:
                    - heading "Cluster Resource Overview" [level=6] [ref=e202]
                    - generic [ref=e203]:
                      - generic [ref=e204]:
                        - combobox [ref=e205] [cursor=pointer]: All Resources
                        - textbox: all
                        - img
                      - button [ref=e206] [cursor=pointer]:
                        - img [ref=e208]
                  - list [ref=e210]:
                    - listitem:
                      - generic [ref=e213]:
                        - img "APIService"
                        - heading "21" [level=6] [ref=e214]
                    - listitem:
                      - generic [ref=e217]:
                        - img "ClusterRole"
                        - heading "72" [level=6] [ref=e218]
                    - listitem:
                      - generic [ref=e221]:
                        - img "ConfigMap"
                        - heading "13" [level=6] [ref=e222]
                    - listitem:
                      - generic [ref=e225]:
                        - img "DaemonSet"
                        - heading "2" [level=6] [ref=e226]
                    - listitem:
                      - generic [ref=e229]:
                        - img "Deployment"
                        - heading "2" [level=6] [ref=e230]
                    - listitem:
                      - generic [ref=e233]:
                        - img "EndpointSlice"
                        - heading "2" [level=6] [ref=e234]
                    - listitem:
                      - generic [ref=e237]:
                        - img "Endpoints"
                        - heading "2" [level=6] [ref=e238]
                    - listitem:
                      - generic [ref=e241]:
                        - img "Namespace"
                        - heading "5" [level=6] [ref=e242]
                    - listitem:
                      - generic [ref=e245]:
                        - img "Node"
                        - heading "1" [level=6] [ref=e246]
                    - listitem:
                      - generic [ref=e249]:
                        - img "Pod"
                        - heading "9" [level=6] [ref=e250]
                    - listitem:
                      - generic [ref=e253]:
                        - img "ReplicaSet"
                        - heading "2" [level=6] [ref=e254]
                    - listitem:
                      - generic [ref=e257]:
                        - img "Secret"
                        - heading "1" [level=6] [ref=e258]
                    - listitem:
                      - generic [ref=e261]:
                        - img "Service"
                        - heading "2" [level=6] [ref=e262]
                    - listitem:
                      - generic [ref=e265]:
                        - img "StorageClass"
                        - heading "1" [level=6] [ref=e266]
                - generic [ref=e269]:
                  - generic [ref=e270]:
                    - img [ref=e271]
                    - generic [ref=e274]: GETTING STARTED
                  - generic [ref=e275]:
                    - paragraph [ref=e276]: New here? Follow along these guided tasks to help you get the most of your account.
                    - paragraph [ref=e277]:
                      - generic [ref=e280]: 0%
                    - button "Start" [ref=e282] [cursor=pointer]
                - generic [ref=e286]:
                  - generic [ref=e287]:
                    - img [ref=e288]
                    - heading "HELP CENTER" [level=6] [ref=e292]
                  - list [ref=e294]:
                    - listitem [ref=e295]:
                      - img [ref=e297]
                      - link "Cloud Docs" [ref=e306] [cursor=pointer]:
                        - /url: https://docs.layer5.io/cloud
                      - superscript [ref=e307]:
                        - img [ref=e308]
                    - listitem [ref=e310]:
                      - img [ref=e312]
                      - link "Kanvas Docs" [ref=e321] [cursor=pointer]:
                        - /url: https://docs.layer5.io/kanvas
                      - superscript [ref=e322]:
                        - img [ref=e323]
                    - listitem [ref=e325]:
                      - img [ref=e327]
                      - link "Support Request" [ref=e336] [cursor=pointer]:
                        - /url: https://cloud.meshery.io/support
                      - superscript [ref=e337]:
                        - img [ref=e338]
                    - listitem [ref=e340]:
                      - img [ref=e342]
                      - link "Discussion Forum" [ref=e351] [cursor=pointer]:
                        - /url: https://meshery.io/community/#discussion-forums
                      - superscript [ref=e352]:
                        - img [ref=e353]
                    - listitem [ref=e355]:
                      - img [ref=e357]
                      - link "Slack" [ref=e366] [cursor=pointer]:
                        - /url: https://slack.meshery.io
                      - superscript [ref=e367]:
                        - img [ref=e368]
                - generic [ref=e372]:
                  - generic [ref=e373]:
                    - generic [ref=e374]:
                      - img [ref=e375]
                      - heading "MY RECENT DESIGNS" [level=6] [ref=e384]
                    - button "Sort by" [ref=e385] [cursor=pointer]:
                      - img [ref=e386]
                  - list [ref=e389]:
                    - listitem [ref=e390]:
                      - img [ref=e392]
                      - link "Untitled Design" [ref=e401] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=04f2b09f-855d-4a59-be1e-8455ade9fd36
                      - generic "Tue, May 19, 2026 6:05 AM" [ref=e403]:
                        - paragraph [ref=e404]: 2 hours ago
                    - listitem [ref=e405]:
                      - img [ref=e407]
                      - link:
                        - /url: /extension/meshmap?mode=design&design=384058cd-553e-445e-9ae9-6dc9d5679c7c
                      - generic "Tue, May 19, 2026 3:16 AM" [ref=e417]:
                        - paragraph [ref=e418]: 4 hours ago
                    - listitem [ref=e419]:
                      - img [ref=e421]
                      - link "Architecture Diagramming" [ref=e430] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=3bbc5fb1-1bab-4945-aadf-6adb6d84747e
                      - generic "Mon, May 18, 2026 9:36 PM" [ref=e432]:
                        - paragraph [ref=e433]: 10 hours ago
                    - listitem [ref=e434]:
                      - img [ref=e436]
                      - link "Untitled Design" [ref=e445] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=7c51b3be-d272-4980-a1ba-bc2487ff0790
                      - generic "Mon, May 18, 2026 7:21 PM" [ref=e447]:
                        - paragraph [ref=e448]: 12 hours ago
                    - listitem [ref=e449]:
                      - img [ref=e451]
                      - link "Architecture Diagramming" [ref=e460] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=6af85396-e190-4e7b-865c-2937da6c8827
                      - generic "Mon, May 18, 2026 7:19 PM" [ref=e462]:
                        - paragraph [ref=e463]: 12 hours ago
                    - listitem [ref=e464]:
                      - img [ref=e466]
                      - link "Untitled Design" [ref=e475] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=70f1f7e6-3407-449f-9436-4e118d4d6073
                      - generic "Mon, May 18, 2026 7:12 PM" [ref=e477]:
                        - paragraph [ref=e478]: 13 hours ago
                    - listitem [ref=e479]:
                      - img [ref=e481]
                      - link "AWS Three-Tier Architecture - ELB EC2 RDS" [ref=e490] [cursor=pointer]:
                        - /url: /extension/meshmap?mode=design&design=f54f4163-4adb-4a49-87fa-f06abf9e3b60
                      - generic "Mon, May 18, 2026 2:31 PM" [ref=e492]:
                        - paragraph [ref=e493]: 17 hours ago
                  - generic [ref=e494]:
                    - link "See All Designs" [ref=e495] [cursor=pointer]:
                      - /url: https://cloud.meshery.io/catalog/content/my-designs
                    - button [ref=e496] [cursor=pointer]:
                      - img [ref=e497]
                - generic [ref=e500]:
                  - generic [ref=e501]:
                    - generic [ref=e502]:
                      - img [ref=e503]
                      - heading "WORKSPACE ACTIVITY" [level=6] [ref=e507]
                    - generic [ref=e508]:
                      - combobox [ref=e509] [cursor=pointer]: eks-sandbox
                      - textbox: d26aa57e-e9ec-4424-878c-a794bd3a3b7d
                      - img
                  - list [ref=e510]:
                    - generic [ref=e515]:
                      - strong [ref=e516]: "Mar 28:"
                      - text: lekaf974 created workspace eks-sandbox
                  - link "All Workspaces" [ref=e518] [cursor=pointer]:
                    - /url: /management/workspaces
                - link "KUBERNETES CLUSTER STATUS" [ref=e520] [cursor=pointer]:
                  - /url: /management/connections
                  - generic [ref=e521]:
                    - generic [ref=e522]:
                      - generic [ref=e523]:
                        - img [ref=e524]
                        - heading "KUBERNETES CLUSTER STATUS" [level=6] [ref=e527]
                      - img [ref=e530]
                    - img [ref=e534]:
                      - generic [ref=e537]:
                        - generic [ref=e538]: Clusters Status
                        - generic [ref=e539]:
                          - generic: "1"
                        - generic [ref=e542]:
                          - generic: "9"
                      - generic [ref=e545]:
                        - generic [ref=e546]:
                          - generic: connected
                        - generic [ref=e548]:
                          - generic: not found
              - button "Edit" [ref=e550] [cursor=pointer]:
                - generic [ref=e551]: Edit
                - img [ref=e553]
        - contentinfo [ref=e555]:
          - paragraph [ref=e556]:
            - generic [ref=e557] [cursor=pointer]:
              - text: Built with
              - img [ref=e558]
              - text: by the Meshery Community
  - alert [ref=e561]
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