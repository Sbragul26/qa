# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: models.spec.ts >> Model Workflow Tests >> Create a Model
- Location: tests/e2e/models.spec.ts:59:7

# Error details

```
Test timeout of 600000ms exceeded.
```

```
Error: locator.click: Test timeout of 600000ms exceeded.
Call log:
  - waiting for getByTestId('UrlStepper-Button-Finish')
    - locator resolved to <button tabindex="0" type="button" data-testid="UrlStepper-Button-Finish" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-sizeMedium MuiButton-colorPrimary css-cavvm6">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p>Generated 33 components for model test-model-1781…</p> from <div id="__next" aria-hidden="true">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p>Generated 33 components for model test-model-1781…</p> from <div id="__next" aria-hidden="true">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    1127 × waiting for element to be visible, enabled and stable
         - element is visible, enabled and stable
         - scrolling into view if needed
         - done scrolling
         - <p>Generated 33 components for model test-model-1781…</p> from <div id="__next" aria-hidden="true">…</div> subtree intercepts pointer events
       - retrying click action
         - waiting 500ms

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
          - button [ref=e13] [cursor=pointer]:
            - link [ref=e14]:
              - /url: /
              - generic [ref=e15]:
                - img [ref=e17]
                - generic [ref=e22]: Dashboard
          - button [ref=e24] [cursor=pointer]:
            - link [ref=e25]:
              - /url: /management/connections
              - generic [ref=e26]:
                - img [ref=e28]
                - generic [ref=e31]: Lifecycle
          - button [ref=e33] [cursor=pointer]:
            - link [ref=e34]:
              - /url: /configuration/designs
              - generic [ref=e35]:
                - img [ref=e37]
                - generic [ref=e42]: Configuration
          - button [ref=e44] [cursor=pointer]:
            - link [ref=e45]:
              - /url: /performance
              - generic [ref=e46]:
                - img [ref=e48]
                - generic [ref=e74]: Performance
          - button [ref=e76] [cursor=pointer]:
            - link [ref=e77]:
              - /url: /extensions
              - generic [ref=e78]:
                - img [ref=e80]
                - generic [ref=e107]: Extensions
          - separator [ref=e108]
        - generic [ref=e109]:
          - img [ref=e112] [cursor=pointer]
          - group [ref=e114]:
            - listitem [ref=e115]:
              - link [ref=e116] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e118]
            - listitem [ref=e120]:
              - link [ref=e121] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e123]
            - listitem [ref=e132]:
              - link [ref=e133] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e135]
            - listitem [ref=e137]:
              - link [ref=e138] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e140]
          - listitem [ref=e142]:
            - generic [ref=e143]:
              - text: undefined
              - link [ref=e145] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/undefined
                - img [ref=e146]
              - generic [ref=e148]:
                - text: Update available
                - link [ref=e149] [cursor=pointer]:
                  - /url: https://docs.meshery.io/project/releases/v1.0.42
                  - img [ref=e150]
    - generic [ref=e152]:
      - banner [ref=e153]:
        - generic [ref=e155]:
          - generic [ref=e157]:
            - button [ref=e159] [cursor=pointer]:
              - img [ref=e160]
            - text: /
            - button [ref=e169] [cursor=pointer]:
              - img [ref=e170]
            - text: /
            - heading [level=5] [ref=e174]: Settings
          - generic [ref=e176]:
            - button [ref=e179] [cursor=pointer]:
              - generic [ref=e180]:
                - img [ref=e181]
                - generic [ref=e182]: "0"
            - button [ref=e185] [cursor=pointer]:
              - img [ref=e186]
            - button [ref=e193] [cursor=pointer]:
              - img [ref=e195]
            - button [ref=e198] [cursor=pointer]:
              - img [ref=e199]
      - generic [ref=e201]:
        - main [ref=e202]:
          - generic [ref=e203]:
            - tablist [ref=e207]:
              - tab [ref=e208] [cursor=pointer]:
                - img [ref=e209]
                - text: Overview
              - tab [ref=e210] [cursor=pointer]:
                - img [ref=e211]
                - text: Adapters
              - tab [ref=e213] [cursor=pointer]:
                - img [ref=e214]
                - text: Metrics
              - tab [selected] [ref=e216] [cursor=pointer]:
                - img [ref=e217]
                - text: Registry
              - tab [ref=e219] [cursor=pointer]:
                - img [ref=e220]
                - text: Reset
            - generic [ref=e225]:
              - generic [ref=e227]:
                - button [ref=e228] [cursor=pointer]:
                  - img [ref=e230]
                  - text: Create Model
                - button [ref=e232] [cursor=pointer]:
                  - img [ref=e234]
                  - text: Import Model
              - generic [ref=e236]:
                - generic [ref=e237] [cursor=pointer]:
                  - generic [ref=e238]: (291)
                  - text: Models
                - generic [ref=e239] [cursor=pointer]:
                  - generic [ref=e240]: (3,928)
                  - text: Components
                - generic [ref=e241] [cursor=pointer]:
                  - generic [ref=e242]: (589)
                  - text: Relationships
                - generic [ref=e243] [cursor=pointer]:
                  - generic [ref=e244]: (4)
                  - text: Registrants
              - generic [ref=e245]:
                - generic [ref=e247]:
                  - generic [ref=e248]:
                    - generic [ref=e250]:
                      - button [ref=e252] [cursor=pointer]:
                        - img [ref=e253]
                      - button [ref=e260] [cursor=pointer]:
                        - img [ref=e261]
                      - generic [ref=e268] [cursor=pointer]:
                        - switch [ref=e271]
                        - generic [ref=e274]: Duplicates
                      - button [ref=e275] [cursor=pointer]:
                        - img [ref=e276]
                    - button [ref=e280] [cursor=pointer]:
                      - img [ref=e281]
                  - tree [ref=e284]:
                    - treeitem [ref=e285]:
                      - generic [ref=e286] [cursor=pointer]:
                        - img [ref=e288]
                        - generic [ref=e294]:
                          - img [ref=e295]
                          - generic [ref=e296]: AMD GPU
                    - treeitem [ref=e297]:
                      - generic [ref=e298] [cursor=pointer]:
                        - img [ref=e300]
                        - generic [ref=e306]:
                          - img [ref=e307]
                          - generic [ref=e308]: APISIX Ingress Controller
                    - treeitem [ref=e309]:
                      - generic [ref=e310] [cursor=pointer]:
                        - img [ref=e312]
                        - generic [ref=e319]: AWS API Gateway
                    - treeitem [ref=e320]:
                      - generic [ref=e321] [cursor=pointer]:
                        - img [ref=e323]
                        - generic [ref=e329]:
                          - img [ref=e330]
                          - generic [ref=e331]: AWS API Gateway v2
                    - treeitem [ref=e332]:
                      - generic [ref=e333] [cursor=pointer]:
                        - img [ref=e335]
                        - generic [ref=e341]:
                          - img [ref=e342]
                          - generic [ref=e343]: AWS App Mesh
                    - treeitem [ref=e344]:
                      - generic [ref=e345] [cursor=pointer]:
                        - img [ref=e347]
                        - generic [ref=e353]:
                          - img [ref=e354]
                          - generic [ref=e355]: AWS Applilcation Autoscaling
                    - treeitem [ref=e356]:
                      - generic [ref=e357] [cursor=pointer]:
                        - img [ref=e359]
                        - generic [ref=e365]:
                          - img [ref=e366]
                          - generic [ref=e367]: AWS CloudFront
                    - treeitem [ref=e368]:
                      - generic [ref=e369] [cursor=pointer]:
                        - img [ref=e371]
                        - generic [ref=e377]:
                          - img [ref=e378]
                          - generic [ref=e379]: AWS CloudTrail
                    - treeitem [ref=e380]:
                      - generic [ref=e381] [cursor=pointer]:
                        - img [ref=e383]
                        - generic [ref=e389]:
                          - img [ref=e390]
                          - generic [ref=e391]: AWS CloudWatch
                    - treeitem [ref=e392]:
                      - generic [ref=e393] [cursor=pointer]:
                        - img [ref=e395]
                        - generic [ref=e401]:
                          - img [ref=e402]
                          - generic [ref=e403]: AWS CloudWatch Logs
                    - treeitem [ref=e404]:
                      - generic [ref=e405] [cursor=pointer]:
                        - img [ref=e407]
                        - generic [ref=e413]:
                          - img [ref=e414]
                          - generic [ref=e415]: AWS DocumentDB
                    - treeitem [ref=e416]:
                      - generic [ref=e417] [cursor=pointer]:
                        - img [ref=e419]
                        - generic [ref=e425]:
                          - img [ref=e426]
                          - generic [ref=e427]: AWS DynamoDB
                    - treeitem [ref=e428]:
                      - generic [ref=e429] [cursor=pointer]:
                        - img [ref=e431]
                        - generic [ref=e437]:
                          - img [ref=e438]
                          - generic [ref=e439]: AWS EC2
                    - treeitem [ref=e440]:
                      - generic [ref=e441] [cursor=pointer]:
                        - img [ref=e443]
                        - generic [ref=e449]:
                          - img [ref=e450]
                          - generic [ref=e451]: AWS EMR Containers
                    - treeitem [ref=e452]:
                      - generic [ref=e453] [cursor=pointer]:
                        - img [ref=e455]
                        - generic [ref=e461]:
                          - img [ref=e462]
                          - generic [ref=e463]: AWS ElastiCache
                    - treeitem [ref=e464]:
                      - generic [ref=e465] [cursor=pointer]:
                        - img [ref=e467]
                        - generic [ref=e473]:
                          - img [ref=e474]
                          - generic [ref=e475]: AWS Elastic Container Registry
                    - treeitem [ref=e476]:
                      - generic [ref=e477] [cursor=pointer]:
                        - img [ref=e479]
                        - generic [ref=e485]:
                          - img [ref=e486]
                          - generic [ref=e487]: AWS Elastic Container Service
                    - treeitem [ref=e488]:
                      - generic [ref=e489] [cursor=pointer]:
                        - img [ref=e491]
                        - generic [ref=e497]:
                          - img [ref=e498]
                          - generic [ref=e499]: AWS Elastic File System
                    - treeitem [ref=e500]:
                      - generic [ref=e501] [cursor=pointer]:
                        - img [ref=e503]
                        - generic [ref=e509]:
                          - img [ref=e510]
                          - generic [ref=e511]: AWS Elastic Kubernetes Service
                    - treeitem [ref=e512]:
                      - generic [ref=e513] [cursor=pointer]:
                        - img [ref=e515]
                        - generic [ref=e521]:
                          - img [ref=e522]
                          - generic [ref=e523]: AWS ElasticSearch Service
                    - treeitem [ref=e524]:
                      - generic [ref=e525] [cursor=pointer]:
                        - img [ref=e527]
                        - generic [ref=e533]:
                          - img [ref=e534]
                          - generic [ref=e535]: AWS EventBridge
                    - treeitem [ref=e536]:
                      - generic [ref=e537] [cursor=pointer]:
                        - img [ref=e539]
                        - generic [ref=e545]:
                          - img [ref=e546]
                          - generic [ref=e547]: AWS Identity and Access Management
                    - treeitem [ref=e548]:
                      - generic [ref=e549] [cursor=pointer]:
                        - img [ref=e551]
                        - generic [ref=e557]:
                          - img [ref=e558]
                          - generic [ref=e559]: AWS KMS
                    - treeitem [ref=e560]:
                      - generic [ref=e561] [cursor=pointer]:
                        - img [ref=e563]
                        - generic [ref=e569]:
                          - img [ref=e570]
                          - generic [ref=e571]: AWS Kinesis
                    - treeitem [ref=e572]:
                      - generic [ref=e573] [cursor=pointer]:
                        - img [ref=e575]
                        - generic [ref=e581]:
                          - img [ref=e582]
                          - generic [ref=e583]: AWS Lambda
                - paragraph [ref=e586]: No Models selected
        - contentinfo [ref=e587]:
          - paragraph [ref=e588]:
            - generic [ref=e589] [cursor=pointer]:
              - text: Built with
              - img [ref=e590]
              - text: by the Meshery Community
      - generic [ref=e597]:
        - img [ref=e598]
        - paragraph [ref=e601]: Generated 33 components for model test-model-1781315904344
        - group [ref=e603]:
          - button [ref=e604] [cursor=pointer]:
            - img [ref=e605]
          - button [ref=e609] [cursor=pointer]:
            - img [ref=e610]
  - alert [ref=e613]: Settings | Meshery
  - dialog [ref=e616]:
    - generic [ref=e617]:
      - generic [ref=e618]: Create Model
      - button [ref=e620] [cursor=pointer]:
        - img [ref=e621]
    - generic [ref=e625]:
      - list [ref=e627]:
        - listitem [ref=e628]:
          - generic [ref=e629]:
            - img [ref=e632]
            - generic [ref=e635]: Model Details
        - listitem [ref=e636]:
          - generic [ref=e639]:
            - img [ref=e642]
            - generic [ref=e647]: Model Categorization
        - listitem [ref=e648]:
          - generic [ref=e651]:
            - img [ref=e654]
            - generic [ref=e657]: Styling
        - listitem [ref=e658]:
          - generic [ref=e661]:
            - img [ref=e664]
            - generic [ref=e667]: Source
        - listitem [ref=e668]:
          - generic [ref=e671]:
            - img [ref=e674]
            - generic [ref=e677]: Additional Details
        - listitem [ref=e678]:
          - generic [ref=e681]:
            - img [ref=e684]
            - generic [ref=e701]: Finalize Generation
        - listitem [ref=e702]:
          - generic [ref=e705]:
            - img [ref=e708]
            - generic [ref=e715]: Finish
      - generic [ref=e717]:
        - paragraph [ref=e718]: "SUMMARY: Imported model test-model-1781315904344 (11 components)"
        - generic [ref=e719]:
          - generic [ref=e720]:
            - paragraph [ref=e721]:
              - generic [ref=e722]: "MODEL:"
              - text: test-model-1781315904344
            - link "Registry" [ref=e723] [cursor=pointer]:
              - /url: settings?settingsCategory=Registry&tab=Models&searchText=test-model-1781315904344
              - heading "Registry" [level=5] [ref=e724]:
                - text: Registry
                - superscript [ref=e725]:
                  - img [ref=e726]
          - paragraph [ref=e728]: "COMPONENTS:"
          - generic [ref=e730]:
            - img "API" [ref=e733]
            - generic [ref=e734]: APIv1.0.0
          - generic [ref=e736]:
            - img "API Mapping" [ref=e739]
            - generic [ref=e740]: API Mappingv1.0.0
          - generic [ref=e742]:
            - img "Authorizer" [ref=e745]
            - generic [ref=e746]: Authorizerv1.0.0
          - generic [ref=e748]:
            - img "Deployment" [ref=e751]
            - generic [ref=e752]: Deploymentv1.0.0
          - generic [ref=e754]:
            - img "Domain Name" [ref=e757]
            - generic [ref=e758]: Domain Namev1.0.0
          - generic [ref=e760]:
            - img "Field Export" [ref=e763]
            - generic [ref=e764]: Field Exportv1.0.0
          - generic [ref=e766]:
            - img "IAM Role Selector" [ref=e769]
            - generic [ref=e770]: IAM Role Selectorv1.0.0
          - generic [ref=e772]:
            - img "Integration" [ref=e775]
            - generic [ref=e776]: Integrationv1.0.0
          - generic [ref=e778]:
            - img "Route" [ref=e781]
            - generic [ref=e782]: Routev1.0.0
          - generic [ref=e784]:
            - img "Stage" [ref=e787]
            - generic [ref=e788]: Stagev1.0.0
          - generic [ref=e790]:
            - img "VPC Link" [ref=e793]
            - generic [ref=e794]: VPC Linkv1.0.0
    - generic [ref=e796]:
      - button "Back" [ref=e797] [cursor=pointer]
      - button "Finish" [active] [ref=e798] [cursor=pointer]: Finish
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import path from 'path';
  3   | import { DashboardPage } from './pages/DashboardPage';
  4   | 
  5   | // Strongly typed inline to avoid JS linter false positives
  6   | const model: {
  7   |   MODEL_URL: string;
  8   |   MODEL_NAME: string;
  9   |   MODEL_DISPLAY_NAME: string;
  10  | } = {
  11  |   MODEL_URL: 'git://github.com/aws-controllers-k8s/apigatewayv2-controller/main/helm',
  12  |   MODEL_NAME: `test-model-${Date.now()}`,
  13  |   MODEL_DISPLAY_NAME: `Test Model ${Date.now()}`,
  14  | };
  15  | 
  16  | // Strongly typed inline
  17  | const model_import: {
  18  |   MODEL_NAME: string;
  19  |   MODEL_URL_IMPORT: string;
  20  |   MODEL_FILE_IMPORT: string;
  21  |   MODEL_CSV_IMPORT: {
  22  |     Model_Name: string;
  23  |     Models: string;
  24  |     Components: string;
  25  |     Relationships: string;
  26  |   };
  27  | } = {
  28  |   MODEL_NAME: `test`,
  29  |   MODEL_URL_IMPORT:
  30  |     'https://raw.githubusercontent.com/meshery/meshery/master/ui/tests/e2e/assets/test.tar',
  31  |   MODEL_FILE_IMPORT: path.resolve('tests/e2e/assets/test.tar'),
  32  |   MODEL_CSV_IMPORT: {
  33  |     Model_Name: 'couchbase',
  34  |     Models: path.resolve('tests/e2e/assets/models.csv'),
  35  |     Components: path.resolve('tests/e2e/assets/components.csv'),
  36  |     Relationships: path.resolve('tests/e2e/assets/relationships.csv'),
  37  |   },
  38  | };
  39  | 
  40  | test.describe.serial('Model Workflow Tests', () => {
  41  |   // "Create a Model" downloads a model from GitHub during the test body
  42  |   // and extends its own timeout to 600s via test.setTimeout. The shared
  43  |   // beforeEach calls navigateToDashboard() + navigateToSettings() + waits
  44  |   // on settings-tab-registry, each with their own 120s inner timeouts.
  45  |   // Default BASE_TIMEOUT=60s is too short for the hook on slow CI.
  46  |   // Configure 240s as the describe default so the hook has enough room on
  47  |   // every test in this group; Create a Model still extends further in its
  48  |   // body for the GitHub fetch.
  49  |   test.describe.configure({ timeout: 240_000 });
  50  | 
  51  |   test.beforeEach(async ({ page }) => {
  52  |     const dashboardPage = new DashboardPage(page);
  53  |     await dashboardPage.navigateToDashboard();
  54  |     await dashboardPage.navigateToSettings();
  55  |     await expect(page.getByTestId('settings-tab-registry')).toBeVisible();
  56  |     await page.getByTestId('settings-tab-registry').click();
  57  |   });
  58  | 
  59  |   test('Create a Model', async ({ page }) => {
  60  |     // Model generation downloads from GitHub and can be very slow in CI.
  61  |     // test.slow() triples the default timeout (60s → 180s).
  62  |     test.slow();
  63  |     test.setTimeout(600_000);
  64  | 
  65  |     await page.getByTestId('TabBar-Button-CreateModel').click();
  66  | 
  67  |     await page.locator('#model-name').fill(model.MODEL_NAME);
  68  |     await page.locator('#model-display-name').fill(model.MODEL_DISPLAY_NAME);
  69  | 
  70  |     await page.getByTestId('UrlStepper-Button-Next').click();
  71  | 
  72  |     await expect(page.getByTestId('UrlStepper-Select-Category')).toBeVisible();
  73  |     await expect(page.getByTestId('UrlStepper-Select-Subcategory')).toBeVisible();
  74  | 
  75  |     await page.getByTestId('UrlStepper-Button-Next').click();
  76  | 
  77  |     await expect(page.getByTestId('UrlStepper-Select-Logo-Dark-Theme')).toBeVisible();
  78  |     await expect(page.getByTestId('UrlStepper-Select-Logo-Light-Theme')).toBeVisible();
  79  | 
  80  |     await expect(page.getByTestId('UrlStepper-Select-Primary-Color')).toBeVisible();
  81  |     await expect(page.getByTestId('UrlStepper-Select-Secondary-Color')).toBeVisible();
  82  |     await expect(page.getByTestId('UrlStepper-Select-Shape')).toBeVisible();
  83  | 
  84  |     await page.getByTestId('UrlStepper-Button-Next').click();
  85  | 
  86  |     await page.getByTestId('UrlStepper-Select-Source-GitHub').check();
  87  |     await page.locator('#model-url').fill(model.MODEL_URL);
  88  | 
  89  |     await page.getByTestId('UrlStepper-Button-Next').click();
  90  |     await page.getByTestId('UrlStepper-Visual-Annotation-Checkbox').check();
  91  |     await page.getByTestId('UrlStepper-Button-Next').click();
  92  | 
  93  |     await page.getByTestId('UrlStepper-Button-Generate').click();
  94  | 
  95  |     // Model generation fetches from GitHub — wait with extended timeout
  96  |     await expect(
  97  |       page.getByTestId(`ModelImportedSection-ModelHeader-${model.MODEL_NAME}`),
  98  |     ).toBeVisible({ timeout: 540_000 });
  99  |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  100 | 
> 101 |     await page.getByTestId('UrlStepper-Button-Finish').click();
      |                                                        ^ Error: locator.click: Test timeout of 600000ms exceeded.
  102 |   });
  103 | 
  104 |   test('Search a Model and Export it', async ({ page }) => {
  105 |     await page.getByTestId('search-icon').click();
  106 |     await page.locator('#searchClick').click();
  107 |     await page.locator('#searchClick').fill(model.MODEL_DISPLAY_NAME);
  108 |     await page.getByText(model.MODEL_DISPLAY_NAME).click();
  109 | 
  110 |     const downloadPromise = page.waitForEvent('download');
  111 |     await page.getByTestId('export-model-button').click();
  112 |     const download = await downloadPromise;
  113 |     expect(download).toBeDefined();
  114 |     await page.getByRole('combobox', { name: 'enabled' }).click();
  115 |     await page.getByRole('option', { name: 'ignored' }).click();
  116 |     await expect(page.getByRole('combobox', { name: 'ignored' })).toBeVisible();
  117 |   });
  118 | 
  119 |   test('Import a Model via File Import', async ({ page }) => {
  120 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  121 |     await page.getByRole('heading', { name: 'File Import', exact: true }).click();
  122 | 
  123 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_FILE_IMPORT);
  124 | 
  125 |     await page.getByRole('button', { name: 'Next' }).click();
  126 | 
  127 |     await expect(
  128 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
  129 |     ).toBeVisible();
  130 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  131 |     await page.getByRole('button', { name: 'Finish' }).click();
  132 |   });
  133 | 
  134 |   test('Import a Model via Url Import', async ({ page }) => {
  135 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  136 |     await page.getByRole('heading', { name: 'URL Import', exact: true }).click();
  137 | 
  138 |     await page.getByRole('textbox', { name: 'URL' }).click();
  139 |     await page.getByRole('textbox', { name: 'URL' }).fill(model_import.MODEL_URL_IMPORT);
  140 | 
  141 |     await page.getByRole('button', { name: 'Next' }).click();
  142 | 
  143 |     await expect(
  144 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
  145 |     ).toBeVisible();
  146 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  147 |     await page.getByRole('button', { name: 'Finish' }).click();
  148 |   });
  149 | 
  150 |   test('Import a Model via CSV Import', async ({ page }) => {
  151 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  152 |     await page.getByRole('heading', { name: 'CSV Import', exact: true }).click();
  153 | 
  154 |     await page.getByRole('button', { name: 'Next' }).click();
  155 | 
  156 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Models);
  157 |     await page.getByRole('button', { name: 'Next' }).click();
  158 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Components);
  159 |     await page.getByRole('button', { name: 'Next' }).click();
  160 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Relationships);
  161 | 
  162 |     await page.getByRole('button', { name: 'Generate' }).click();
  163 | 
  164 |     await expect(
  165 |       page.getByTestId(
  166 |         `ModelImportedSection-ModelHeader-${model_import.MODEL_CSV_IMPORT.Model_Name}`,
  167 |       ),
  168 |     ).toBeVisible();
  169 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  170 |     await page.getByRole('button', { name: 'Finish' }).click();
  171 |   });
  172 | });
  173 | 
```