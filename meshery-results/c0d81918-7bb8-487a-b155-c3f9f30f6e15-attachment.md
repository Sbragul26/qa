# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: models.spec.ts >> Model Workflow Tests >> Import a Model via File Import
- Location: tests/e2e/models.spec.ts:108:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'File Import' })

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
              - text: v1.0.18
              - link [ref=e145] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.18
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
                - generic [ref=e178]: "0"
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
                  - generic [ref=e234]: (292)
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
  - alert [ref=e589]: Settings | Meshery
  - dialog [ref=e592]:
    - generic [ref=e593]:
      - generic [ref=e594]: Import Model
      - button [ref=e596] [cursor=pointer]:
        - img [ref=e597]
    - alert [ref=e602]:
      - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e603]
      - generic [ref=e604]:
        - code [ref=e605]:
          - strong [ref=e606]: "Error:"
          - text: Cannot read properties of undefined (reading '0')
        - strong [ref=e607]: "Version:"
      - paragraph [ref=e608]:
        - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
        - link "Discuss Forum" [ref=e609] [cursor=pointer]:
          - /url: https://discuss.layer5.io/
        - text: or
        - link "Slack" [ref=e610] [cursor=pointer]:
          - /url: https://slack.layer5.io/
      - button "Try Again" [ref=e612] [cursor=pointer]:
        - generic [ref=e613]: Try Again
    - generic [ref=e614]:
      - button [ref=e615] [cursor=pointer]:
        - img [ref=e616]
      - generic [ref=e618]:
        - button "Cancel" [ref=e619] [cursor=pointer]
        - button "Next" [ref=e620] [cursor=pointer]
```

# Test source

```ts
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
  45  |     await page.getByTestId('settings-tab-registry').click();
  46  |   });
  47  | 
  48  |   test('Create a Model', async ({ page }) => {
  49  |     // Model generation downloads from GitHub and can be very slow in CI.
  50  |     // test.slow() triples the default timeout (60s → 180s).
  51  |     test.slow();
  52  |     test.setTimeout(240_000);
  53  | 
  54  |     await page.getByTestId('TabBar-Button-CreateModel').click();
  55  | 
  56  |     await page.locator('#model-name').fill(model.MODEL_NAME);
  57  |     await page.locator('#model-display-name').fill(model.MODEL_DISPLAY_NAME);
  58  | 
  59  |     await page.getByTestId('UrlStepper-Button-Next').click();
  60  | 
  61  |     await expect(page.getByTestId('UrlStepper-Select-Category')).toBeVisible();
  62  |     await expect(page.getByTestId('UrlStepper-Select-Subcategory')).toBeVisible();
  63  | 
  64  |     await page.getByTestId('UrlStepper-Button-Next').click();
  65  | 
  66  |     await expect(page.getByTestId('UrlStepper-Select-Logo-Dark-Theme')).toBeVisible();
  67  |     await expect(page.getByTestId('UrlStepper-Select-Logo-Light-Theme')).toBeVisible();
  68  | 
  69  |     await expect(page.getByTestId('UrlStepper-Select-Primary-Color')).toBeVisible();
  70  |     await expect(page.getByTestId('UrlStepper-Select-Secondary-Color')).toBeVisible();
  71  |     await expect(page.getByTestId('UrlStepper-Select-Shape')).toBeVisible();
  72  | 
  73  |     await page.getByTestId('UrlStepper-Button-Next').click();
  74  | 
  75  |     await page.getByTestId('UrlStepper-Select-Source-GitHub').check();
  76  |     await page.locator('#model-url').fill(model.MODEL_URL);
  77  | 
  78  |     await page.getByTestId('UrlStepper-Button-Next').click();
  79  |     await page.getByTestId('UrlStepper-Visual-Annotation-Checkbox').check();
  80  |     await page.getByTestId('UrlStepper-Button-Next').click();
  81  | 
  82  |     await page.getByTestId('UrlStepper-Button-Generate').click();
  83  | 
  84  |     // Model generation fetches from GitHub — wait with extended timeout
  85  |     await expect(
  86  |       page.getByTestId(`ModelImportedSection-ModelHeader-${model.MODEL_NAME}`),
  87  |     ).toBeVisible({ timeout: 180_000 });
  88  |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  89  | 
  90  |     await page.getByTestId('UrlStepper-Button-Finish').click();
  91  |   });
  92  | 
  93  |   test('Search a Model and Export it', async ({ page }) => {
  94  |     await page.getByTestId('search-icon').click();
  95  |     await page.locator('#searchClick').click();
  96  |     await page.locator('#searchClick').fill(model.MODEL_DISPLAY_NAME);
  97  |     await page.getByText(model.MODEL_DISPLAY_NAME).click();
  98  | 
  99  |     const downloadPromise = page.waitForEvent('download');
  100 |     await page.getByTestId('export-model-button').click();
  101 |     const download = await downloadPromise;
  102 |     expect(download).toBeDefined();
  103 |     await page.getByRole('combobox', { name: 'enabled' }).click();
  104 |     await page.getByRole('option', { name: 'ignored' }).click();
  105 |     await expect(page.getByRole('combobox', { name: 'ignored' })).toBeVisible();
  106 |   });
  107 | 
  108 |   test('Import a Model via File Import', async ({ page }) => {
  109 |     await page.getByTestId('TabBar-Button-ImportModel').click();
> 110 |     await page.getByRole('heading', { name: 'File Import' }).click();
      |                                                              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  111 | 
  112 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_FILE_IMPORT);
  113 | 
  114 |     await page.getByRole('button', { name: 'Next' }).click();
  115 | 
  116 |     await expect(
  117 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
  118 |     ).toBeVisible();
  119 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  120 |     await page.getByRole('button', { name: 'Finish' }).click();
  121 |   });
  122 | 
  123 |   test('Import a Model via Url Import', async ({ page }) => {
  124 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  125 |     await page.getByRole('heading', { name: 'URL Import' }).click();
  126 | 
  127 |     await page.getByRole('textbox', { name: 'URL' }).click();
  128 |     await page.getByRole('textbox', { name: 'URL' }).fill(model_import.MODEL_URL_IMPORT);
  129 | 
  130 |     await page.getByRole('button', { name: 'Next' }).click();
  131 | 
  132 |     await expect(
  133 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
  134 |     ).toBeVisible();
  135 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  136 |     await page.getByRole('button', { name: 'Finish' }).click();
  137 |   });
  138 | 
  139 |   test('Import a Model via CSV Import', async ({ page }) => {
  140 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  141 |     await page.getByRole('heading', { name: 'CSV Import' }).click();
  142 | 
  143 |     await page.getByRole('button', { name: 'Next' }).click();
  144 | 
  145 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Models);
  146 |     await page.getByRole('button', { name: 'Next' }).click();
  147 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Components);
  148 |     await page.getByRole('button', { name: 'Next' }).click();
  149 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_CSV_IMPORT.Relationships);
  150 | 
  151 |     await page.getByRole('button', { name: 'Generate' }).click();
  152 | 
  153 |     await expect(
  154 |       page.getByTestId(
  155 |         `ModelImportedSection-ModelHeader-${model_import.MODEL_CSV_IMPORT.Model_Name}`,
  156 |       ),
  157 |     ).toBeVisible();
  158 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  159 |     await page.getByRole('button', { name: 'Finish' }).click();
  160 |   });
  161 | });
  162 | 
```