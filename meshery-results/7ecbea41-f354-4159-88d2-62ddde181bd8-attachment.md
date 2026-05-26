# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: models.spec.ts >> Model Workflow Tests >> Create a Model
- Location: tests/e2e/models.spec.ts:49:7

# Error details

```
Test timeout of 240000ms exceeded.
```

```
Error: locator.click: Test timeout of 240000ms exceeded.
Call log:
  - waiting for getByTestId('UrlStepper-Button-Finish')
    - locator resolved to <button tabindex="0" type="button" data-testid="UrlStepper-Button-Finish" class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-sizeMedium MuiButton-colorPrimary css-cavvm6">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p>Generated 33 components for model test-model-1779…</p> from <div id="__next" aria-hidden="true">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p>Generated 33 components for model test-model-1779…</p> from <div id="__next" aria-hidden="true">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    389 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <p>Generated 33 components for model test-model-1779…</p> from <div id="__next" aria-hidden="true">…</div> subtree intercepts pointer events
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
              - text: v1.0.29
              - link [ref=e145] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.29
                - img [ref=e146]
              - text: Running latest
    - generic [ref=e148]:
      - banner [ref=e149]:
        - generic [ref=e151]:
          - generic [ref=e153]:
            - button [ref=e155] [cursor=pointer]:
              - img [ref=e156]
            - text: /
            - button [ref=e165] [cursor=pointer]:
              - img [ref=e166]
            - text: /
            - heading [level=5] [ref=e170]: Settings
          - generic [ref=e172]:
            - button [ref=e175] [cursor=pointer]:
              - generic [ref=e176]:
                - img [ref=e177]
                - generic [ref=e178]: "1"
            - button [ref=e181] [cursor=pointer]:
              - img [ref=e182]
            - button [ref=e189] [cursor=pointer]:
              - img [ref=e191]
            - button [ref=e194] [cursor=pointer]:
              - img [ref=e195]
      - generic [ref=e197]:
        - main [ref=e198]:
          - generic [ref=e199]:
            - tablist [ref=e203]:
              - tab [ref=e204] [cursor=pointer]:
                - img [ref=e205]
                - text: Overview
              - tab [ref=e206] [cursor=pointer]:
                - img [ref=e207]
                - text: Adapters
              - tab [ref=e209] [cursor=pointer]:
                - img [ref=e210]
                - text: Metrics
              - tab [selected] [ref=e212] [cursor=pointer]:
                - img [ref=e213]
                - text: Registry
              - tab [ref=e215] [cursor=pointer]:
                - img [ref=e216]
                - text: Reset
            - generic [ref=e221]:
              - generic [ref=e223]:
                - button [ref=e224] [cursor=pointer]:
                  - img [ref=e226]
                  - text: Create Model
                - button [ref=e228] [cursor=pointer]:
                  - img [ref=e230]
                  - text: Import Model
              - generic [ref=e232]:
                - generic [ref=e233] [cursor=pointer]:
                  - generic [ref=e234]: (291)
                  - text: Models
                - generic [ref=e235] [cursor=pointer]:
                  - generic [ref=e236]: (0)
                  - text: Components
                - generic [ref=e237] [cursor=pointer]:
                  - generic [ref=e238]: (0)
                  - text: Relationships
                - generic [ref=e239] [cursor=pointer]:
                  - generic [ref=e240]: (0)
                  - text: Registrants
              - generic [ref=e241]:
                - generic [ref=e243]:
                  - generic [ref=e244]:
                    - generic [ref=e246]:
                      - button [ref=e248] [cursor=pointer]:
                        - img [ref=e249]
                      - button [ref=e256] [cursor=pointer]:
                        - img [ref=e257]
                      - generic [ref=e264] [cursor=pointer]:
                        - switch [ref=e267]
                        - generic [ref=e270]: Duplicates
                      - button [ref=e271] [cursor=pointer]:
                        - img [ref=e272]
                    - button [ref=e276] [cursor=pointer]:
                      - img [ref=e277]
                  - tree [ref=e280]:
                    - treeitem [ref=e281]:
                      - generic [ref=e282] [cursor=pointer]:
                        - img [ref=e284]
                        - generic [ref=e290]:
                          - img [ref=e291]
                          - generic [ref=e292]: AMD GPU
                    - treeitem [ref=e293]:
                      - generic [ref=e294] [cursor=pointer]:
                        - img [ref=e296]
                        - generic [ref=e302]:
                          - img [ref=e303]
                          - generic [ref=e304]: APISIX Ingress Controller
                    - treeitem [ref=e305]:
                      - generic [ref=e306] [cursor=pointer]:
                        - img [ref=e308]
                        - generic [ref=e315]: AWS API Gateway
                    - treeitem [ref=e316]:
                      - generic [ref=e317] [cursor=pointer]:
                        - img [ref=e319]
                        - generic [ref=e325]:
                          - img [ref=e326]
                          - generic [ref=e327]: AWS API Gateway v2
                    - treeitem [ref=e328]:
                      - generic [ref=e329] [cursor=pointer]:
                        - img [ref=e331]
                        - generic [ref=e337]:
                          - img [ref=e338]
                          - generic [ref=e339]: AWS App Mesh
                    - treeitem [ref=e340]:
                      - generic [ref=e341] [cursor=pointer]:
                        - img [ref=e343]
                        - generic [ref=e349]:
                          - img [ref=e350]
                          - generic [ref=e351]: AWS Applilcation Autoscaling
                    - treeitem [ref=e352]:
                      - generic [ref=e353] [cursor=pointer]:
                        - img [ref=e355]
                        - generic [ref=e361]:
                          - img [ref=e362]
                          - generic [ref=e363]: AWS CloudFront
                    - treeitem [ref=e364]:
                      - generic [ref=e365] [cursor=pointer]:
                        - img [ref=e367]
                        - generic [ref=e373]:
                          - img [ref=e374]
                          - generic [ref=e375]: AWS CloudTrail
                    - treeitem [ref=e376]:
                      - generic [ref=e377] [cursor=pointer]:
                        - img [ref=e379]
                        - generic [ref=e385]:
                          - img [ref=e386]
                          - generic [ref=e387]: AWS CloudWatch
                    - treeitem [ref=e388]:
                      - generic [ref=e389] [cursor=pointer]:
                        - img [ref=e391]
                        - generic [ref=e397]:
                          - img [ref=e398]
                          - generic [ref=e399]: AWS CloudWatch Logs
                    - treeitem [ref=e400]:
                      - generic [ref=e401] [cursor=pointer]:
                        - img [ref=e403]
                        - generic [ref=e409]:
                          - img [ref=e410]
                          - generic [ref=e411]: AWS DocumentDB
                    - treeitem [ref=e412]:
                      - generic [ref=e413] [cursor=pointer]:
                        - img [ref=e415]
                        - generic [ref=e421]:
                          - img [ref=e422]
                          - generic [ref=e423]: AWS DynamoDB
                    - treeitem [ref=e424]:
                      - generic [ref=e425] [cursor=pointer]:
                        - img [ref=e427]
                        - generic [ref=e433]:
                          - img [ref=e434]
                          - generic [ref=e435]: AWS EC2
                    - treeitem [ref=e436]:
                      - generic [ref=e437] [cursor=pointer]:
                        - img [ref=e439]
                        - generic [ref=e445]:
                          - img [ref=e446]
                          - generic [ref=e447]: AWS EMR Containers
                    - treeitem [ref=e448]:
                      - generic [ref=e449] [cursor=pointer]:
                        - img [ref=e451]
                        - generic [ref=e457]:
                          - img [ref=e458]
                          - generic [ref=e459]: AWS ElastiCache
                    - treeitem [ref=e460]:
                      - generic [ref=e461] [cursor=pointer]:
                        - img [ref=e463]
                        - generic [ref=e469]:
                          - img [ref=e470]
                          - generic [ref=e471]: AWS Elastic Container Registry
                    - treeitem [ref=e472]:
                      - generic [ref=e473] [cursor=pointer]:
                        - img [ref=e475]
                        - generic [ref=e481]:
                          - img [ref=e482]
                          - generic [ref=e483]: AWS Elastic Container Service
                    - treeitem [ref=e484]:
                      - generic [ref=e485] [cursor=pointer]:
                        - img [ref=e487]
                        - generic [ref=e493]:
                          - img [ref=e494]
                          - generic [ref=e495]: AWS Elastic File System
                    - treeitem [ref=e496]:
                      - generic [ref=e497] [cursor=pointer]:
                        - img [ref=e499]
                        - generic [ref=e505]:
                          - img [ref=e506]
                          - generic [ref=e507]: AWS Elastic Kubernetes Service
                    - treeitem [ref=e508]:
                      - generic [ref=e509] [cursor=pointer]:
                        - img [ref=e511]
                        - generic [ref=e517]:
                          - img [ref=e518]
                          - generic [ref=e519]: AWS ElasticSearch Service
                    - treeitem [ref=e520]:
                      - generic [ref=e521] [cursor=pointer]:
                        - img [ref=e523]
                        - generic [ref=e529]:
                          - img [ref=e530]
                          - generic [ref=e531]: AWS EventBridge
                    - treeitem [ref=e532]:
                      - generic [ref=e533] [cursor=pointer]:
                        - img [ref=e535]
                        - generic [ref=e541]:
                          - img [ref=e542]
                          - generic [ref=e543]: AWS Identity and Access Management
                    - treeitem [ref=e544]:
                      - generic [ref=e545] [cursor=pointer]:
                        - img [ref=e547]
                        - generic [ref=e553]:
                          - img [ref=e554]
                          - generic [ref=e555]: AWS KMS
                    - treeitem [ref=e556]:
                      - generic [ref=e557] [cursor=pointer]:
                        - img [ref=e559]
                        - generic [ref=e565]:
                          - img [ref=e566]
                          - generic [ref=e567]: AWS Kinesis
                    - treeitem [ref=e568]:
                      - generic [ref=e569] [cursor=pointer]:
                        - img [ref=e571]
                        - generic [ref=e577]:
                          - img [ref=e578]
                          - generic [ref=e579]: AWS Lambda
                - paragraph [ref=e582]: No Models selected
        - contentinfo [ref=e583]:
          - paragraph [ref=e584]:
            - generic [ref=e585] [cursor=pointer]:
              - text: Built with
              - img [ref=e586]
              - text: by the Meshery Community
      - generic [ref=e593]:
        - img [ref=e594]
        - paragraph [ref=e597]: Generated 33 components for model test-model-1779772130361
        - group [ref=e599]:
          - button [ref=e600] [cursor=pointer]:
            - img [ref=e601]
          - button [ref=e605] [cursor=pointer]:
            - img [ref=e606]
  - alert [ref=e609]: Settings | Meshery
  - dialog [ref=e612]:
    - generic [ref=e613]:
      - generic [ref=e614]: Create Model
      - button [ref=e616] [cursor=pointer]:
        - img [ref=e617]
    - generic [ref=e621]:
      - list [ref=e623]:
        - listitem [ref=e624]:
          - generic [ref=e625]:
            - img [ref=e628]
            - generic [ref=e631]: Model Details
        - listitem [ref=e632]:
          - generic [ref=e635]:
            - img [ref=e638]
            - generic [ref=e643]: Model Categorization
        - listitem [ref=e644]:
          - generic [ref=e647]:
            - img [ref=e650]
            - generic [ref=e653]: Styling
        - listitem [ref=e654]:
          - generic [ref=e657]:
            - img [ref=e660]
            - generic [ref=e663]: Source
        - listitem [ref=e664]:
          - generic [ref=e667]:
            - img [ref=e670]
            - generic [ref=e673]: Additional Details
        - listitem [ref=e674]:
          - generic [ref=e677]:
            - img [ref=e680]
            - generic [ref=e697]: Finalize Generation
        - listitem [ref=e698]:
          - generic [ref=e701]:
            - img [ref=e704]
            - generic [ref=e711]: Finish
      - generic [ref=e713]:
        - paragraph [ref=e714]: "SUMMARY: Imported model test-model-1779772130361 (11 components)"
        - generic [ref=e715]:
          - generic [ref=e716]:
            - paragraph [ref=e717]:
              - generic [ref=e718]: "MODEL:"
              - text: test-model-1779772130361
            - link "Registry" [ref=e719] [cursor=pointer]:
              - /url: settings?settingsCategory=Registry&tab=Models&searchText=test-model-1779772130361
              - heading "Registry" [level=5] [ref=e720]:
                - text: Registry
                - superscript [ref=e721]:
                  - img [ref=e722]
          - paragraph [ref=e724]: "COMPONENTS:"
          - generic [ref=e726]:
            - img "API" [ref=e729]
            - generic [ref=e730]: APIv1.0.0
          - generic [ref=e732]:
            - img "API Mapping" [ref=e735]
            - generic [ref=e736]: API Mappingv1.0.0
          - generic [ref=e738]:
            - img "Authorizer" [ref=e741]
            - generic [ref=e742]: Authorizerv1.0.0
          - generic [ref=e744]:
            - img "Deployment" [ref=e747]
            - generic [ref=e748]: Deploymentv1.0.0
          - generic [ref=e750]:
            - img "Domain Name" [ref=e753]
            - generic [ref=e754]: Domain Namev1.0.0
          - generic [ref=e756]:
            - img "Field Export" [ref=e759]
            - generic [ref=e760]: Field Exportv1.0.0
          - generic [ref=e762]:
            - img "IAM Role Selector" [ref=e765]
            - generic [ref=e766]: IAM Role Selectorv1.0.0
          - generic [ref=e768]:
            - img "Integration" [ref=e771]
            - generic [ref=e772]: Integrationv1.0.0
          - generic [ref=e774]:
            - img "Route" [ref=e777]
            - generic [ref=e778]: Routev1.0.0
          - generic [ref=e780]:
            - img "Stage" [ref=e783]
            - generic [ref=e784]: Stagev1.0.0
          - generic [ref=e786]:
            - img "VPC Link" [ref=e789]
            - generic [ref=e790]: VPC Linkv1.0.0
    - generic [ref=e792]:
      - button "Back" [ref=e793] [cursor=pointer]
      - button "Finish" [active] [ref=e794] [cursor=pointer]: Finish
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
  41  |   test.beforeEach(async ({ page }) => {
  42  |     const dashboardPage = new DashboardPage(page);
  43  |     await dashboardPage.navigateToDashboard();
  44  |     await dashboardPage.navigateToSettings();
  45  |     await expect(page.getByTestId('settings-tab-registry')).toBeVisible({ timeout: 120000 });
  46  |     await page.getByTestId('settings-tab-registry').click();
  47  |   });
  48  | 
  49  |   test('Create a Model', async ({ page }) => {
  50  |     // Model generation downloads from GitHub and can be very slow in CI.
  51  |     // test.slow() triples the default timeout (60s → 180s).
  52  |     test.slow();
  53  |     test.setTimeout(240_000);
  54  | 
  55  |     await page.getByTestId('TabBar-Button-CreateModel').click();
  56  | 
  57  |     await page.locator('#model-name').fill(model.MODEL_NAME);
  58  |     await page.locator('#model-display-name').fill(model.MODEL_DISPLAY_NAME);
  59  | 
  60  |     await page.getByTestId('UrlStepper-Button-Next').click();
  61  | 
  62  |     await expect(page.getByTestId('UrlStepper-Select-Category')).toBeVisible();
  63  |     await expect(page.getByTestId('UrlStepper-Select-Subcategory')).toBeVisible();
  64  | 
  65  |     await page.getByTestId('UrlStepper-Button-Next').click();
  66  | 
  67  |     await expect(page.getByTestId('UrlStepper-Select-Logo-Dark-Theme')).toBeVisible();
  68  |     await expect(page.getByTestId('UrlStepper-Select-Logo-Light-Theme')).toBeVisible();
  69  | 
  70  |     await expect(page.getByTestId('UrlStepper-Select-Primary-Color')).toBeVisible();
  71  |     await expect(page.getByTestId('UrlStepper-Select-Secondary-Color')).toBeVisible();
  72  |     await expect(page.getByTestId('UrlStepper-Select-Shape')).toBeVisible();
  73  | 
  74  |     await page.getByTestId('UrlStepper-Button-Next').click();
  75  | 
  76  |     await page.getByTestId('UrlStepper-Select-Source-GitHub').check();
  77  |     await page.locator('#model-url').fill(model.MODEL_URL);
  78  | 
  79  |     await page.getByTestId('UrlStepper-Button-Next').click();
  80  |     await page.getByTestId('UrlStepper-Visual-Annotation-Checkbox').check();
  81  |     await page.getByTestId('UrlStepper-Button-Next').click();
  82  | 
  83  |     await page.getByTestId('UrlStepper-Button-Generate').click();
  84  | 
  85  |     // Model generation fetches from GitHub — wait with extended timeout
  86  |     await expect(
  87  |       page.getByTestId(`ModelImportedSection-ModelHeader-${model.MODEL_NAME}`),
  88  |     ).toBeVisible({ timeout: 180_000 });
  89  |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  90  | 
> 91  |     await page.getByTestId('UrlStepper-Button-Finish').click();
      |                                                        ^ Error: locator.click: Test timeout of 240000ms exceeded.
  92  |   });
  93  | 
  94  |   test('Search a Model and Export it', async ({ page }) => {
  95  |     await page.getByTestId('search-icon').click();
  96  |     await page.locator('#searchClick').click();
  97  |     await page.locator('#searchClick').fill(model.MODEL_DISPLAY_NAME);
  98  |     await page.getByText(model.MODEL_DISPLAY_NAME).click();
  99  | 
  100 |     const downloadPromise = page.waitForEvent('download');
  101 |     await page.getByTestId('export-model-button').click();
  102 |     const download = await downloadPromise;
  103 |     expect(download).toBeDefined();
  104 |     await page.getByRole('combobox', { name: 'enabled' }).click();
  105 |     await page.getByRole('option', { name: 'ignored' }).click();
  106 |     await expect(page.getByRole('combobox', { name: 'ignored' })).toBeVisible();
  107 |   });
  108 | 
  109 |   test('Import a Model via File Import', async ({ page }) => {
  110 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  111 |     await page.getByRole('heading', { name: 'File Import', exact: true }).click();
  112 | 
  113 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_FILE_IMPORT);
  114 | 
  115 |     await page.getByRole('button', { name: 'Next' }).click();
  116 | 
  117 |     await expect(
  118 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
  119 |     ).toBeVisible();
  120 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  121 |     await page.getByRole('button', { name: 'Finish' }).click();
  122 |   });
  123 | 
  124 |   test('Import a Model via Url Import', async ({ page }) => {
  125 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  126 |     await page.getByRole('heading', { name: 'URL Import', exact: true }).click();
  127 | 
  128 |     await page.getByRole('textbox', { name: 'URL' }).click();
  129 |     await page.getByRole('textbox', { name: 'URL' }).fill(model_import.MODEL_URL_IMPORT);
  130 | 
  131 |     await page.getByRole('button', { name: 'Next' }).click();
  132 | 
  133 |     await expect(
  134 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
  135 |     ).toBeVisible();
  136 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  137 |     await page.getByRole('button', { name: 'Finish' }).click();
  138 |   });
  139 | 
  140 |   test('Import a Model via CSV Import', async ({ page }) => {
  141 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  142 |     await page.getByRole('heading', { name: 'CSV Import', exact: true }).click();
  143 | 
  144 |     await page.getByRole('button', { name: 'Next' }).click();
  145 | 
  146 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Models);
  147 |     await page.getByRole('button', { name: 'Next' }).click();
  148 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Components);
  149 |     await page.getByRole('button', { name: 'Next' }).click();
  150 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Relationships);
  151 | 
  152 |     await page.getByRole('button', { name: 'Generate' }).click();
  153 | 
  154 |     await expect(
  155 |       page.getByTestId(
  156 |         `ModelImportedSection-ModelHeader-${model_import.MODEL_CSV_IMPORT.Model_Name}`,
  157 |       ),
  158 |     ).toBeVisible();
  159 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  160 |     await page.getByRole('button', { name: 'Finish' }).click();
  161 |   });
  162 | });
  163 | 
```