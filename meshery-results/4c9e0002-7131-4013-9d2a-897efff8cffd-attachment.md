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
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('ModelImportedSection-ModelHeader-test')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('ModelImportedSection-ModelHeader-test')

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
          - list [ref=e109]:
            - button [ref=e110] [cursor=pointer]:
              - link [ref=e111]:
                - /url: /extension/meshmap
                - generic [ref=e113]:
                  - img [ref=e115]
                  - generic [ref=e117]: Kanvas
          - separator [ref=e118]
        - generic [ref=e119]:
          - img [ref=e122] [cursor=pointer]
          - group [ref=e124]:
            - listitem [ref=e125]:
              - link [ref=e126] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e128]
            - listitem [ref=e130]:
              - link [ref=e131] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e133]
            - listitem [ref=e142]:
              - link [ref=e143] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e145]
            - listitem [ref=e147]:
              - link [ref=e148] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e150]
          - listitem [ref=e152]:
            - generic [ref=e153]:
              - text: v1.0.20
              - link [ref=e155] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.20
                - img [ref=e156]
              - text: Running latest
    - generic [ref=e158]:
      - banner [ref=e159]:
        - generic [ref=e161]:
          - generic [ref=e163]:
            - button [ref=e165] [cursor=pointer]:
              - img [ref=e166]
            - text: /
            - button [ref=e175] [cursor=pointer]:
              - img [ref=e176]
            - group [ref=e180]:
              - generic [ref=e185]:
                - combobox [ref=e186] [cursor=pointer]:
                  - generic [ref=e187]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading [level=5] [ref=e188]: Settings
          - generic [ref=e190]:
            - button [ref=e193] [cursor=pointer]:
              - generic [ref=e194]:
                - img [ref=e195]
                - generic [ref=e196]: "0"
            - button [ref=e199] [cursor=pointer]:
              - generic [ref=e200]:
                - img [ref=e201]
                - generic [ref=e204]: 99+
            - button [ref=e208] [cursor=pointer]:
              - img [ref=e210]
            - button [ref=e213] [cursor=pointer]:
              - img [ref=e214]
      - generic [ref=e216]:
        - main [ref=e217]:
          - generic [ref=e218]:
            - tablist [ref=e222]:
              - tab [ref=e223] [cursor=pointer]:
                - img [ref=e224]
                - text: Overview
              - tab [ref=e225] [cursor=pointer]:
                - img [ref=e226]
                - text: Adapters
              - tab [ref=e228] [cursor=pointer]:
                - img [ref=e229]
                - text: Metrics
              - tab [selected] [ref=e231] [cursor=pointer]:
                - img [ref=e232]
                - text: Registry
              - tab [ref=e234] [cursor=pointer]:
                - img [ref=e235]
                - text: Reset
            - generic [ref=e240]:
              - generic [ref=e242]:
                - button [ref=e243] [cursor=pointer]:
                  - img [ref=e245]
                  - text: Create Model
                - button [ref=e247] [cursor=pointer]:
                  - img [ref=e249]
                  - text: Import Model
              - generic [ref=e251]:
                - generic [ref=e252] [cursor=pointer]:
                  - generic [ref=e253]: (291)
                  - text: Models
                - generic [ref=e254] [cursor=pointer]:
                  - generic [ref=e255]: (0)
                  - text: Components
                - generic [ref=e256] [cursor=pointer]:
                  - generic [ref=e257]: (0)
                  - text: Relationships
                - generic [ref=e258] [cursor=pointer]:
                  - generic [ref=e259]: (0)
                  - text: Registrants
              - generic [ref=e260]:
                - generic [ref=e262]:
                  - generic [ref=e263]:
                    - generic [ref=e265]:
                      - button [ref=e267] [cursor=pointer]:
                        - img [ref=e268]
                      - button [ref=e275] [cursor=pointer]:
                        - img [ref=e276]
                      - generic [ref=e283] [cursor=pointer]:
                        - switch [ref=e286]
                        - generic [ref=e289]: Duplicates
                      - button [ref=e290] [cursor=pointer]:
                        - img [ref=e291]
                    - button [ref=e295] [cursor=pointer]:
                      - img [ref=e296]
                  - tree [ref=e299]:
                    - treeitem [ref=e300]:
                      - generic [ref=e301] [cursor=pointer]:
                        - img [ref=e303]
                        - generic [ref=e309]:
                          - img [ref=e310]
                          - generic [ref=e311]: AMD GPU
                    - treeitem [ref=e312]:
                      - generic [ref=e313] [cursor=pointer]:
                        - img [ref=e315]
                        - generic [ref=e321]:
                          - img [ref=e322]
                          - generic [ref=e323]: APISIX Ingress Controller
                    - treeitem [ref=e324]:
                      - generic [ref=e325] [cursor=pointer]:
                        - img [ref=e327]
                        - generic [ref=e334]: AWS API Gateway
                    - treeitem [ref=e335]:
                      - generic [ref=e336] [cursor=pointer]:
                        - img [ref=e338]
                        - generic [ref=e344]:
                          - img [ref=e345]
                          - generic [ref=e346]: AWS API Gateway v2
                    - treeitem [ref=e347]:
                      - generic [ref=e348] [cursor=pointer]:
                        - img [ref=e350]
                        - generic [ref=e356]:
                          - img [ref=e357]
                          - generic [ref=e358]: AWS App Mesh
                    - treeitem [ref=e359]:
                      - generic [ref=e360] [cursor=pointer]:
                        - img [ref=e362]
                        - generic [ref=e368]:
                          - img [ref=e369]
                          - generic [ref=e370]: AWS Applilcation Autoscaling
                    - treeitem [ref=e371]:
                      - generic [ref=e372] [cursor=pointer]:
                        - img [ref=e374]
                        - generic [ref=e380]:
                          - img [ref=e381]
                          - generic [ref=e382]: AWS CloudFront
                    - treeitem [ref=e383]:
                      - generic [ref=e384] [cursor=pointer]:
                        - img [ref=e386]
                        - generic [ref=e392]:
                          - img [ref=e393]
                          - generic [ref=e394]: AWS CloudTrail
                    - treeitem [ref=e395]:
                      - generic [ref=e396] [cursor=pointer]:
                        - img [ref=e398]
                        - generic [ref=e404]:
                          - img [ref=e405]
                          - generic [ref=e406]: AWS CloudWatch
                    - treeitem [ref=e407]:
                      - generic [ref=e408] [cursor=pointer]:
                        - img [ref=e410]
                        - generic [ref=e416]:
                          - img [ref=e417]
                          - generic [ref=e418]: AWS CloudWatch Logs
                    - treeitem [ref=e419]:
                      - generic [ref=e420] [cursor=pointer]:
                        - img [ref=e422]
                        - generic [ref=e428]:
                          - img [ref=e429]
                          - generic [ref=e430]: AWS DocumentDB
                    - treeitem [ref=e431]:
                      - generic [ref=e432] [cursor=pointer]:
                        - img [ref=e434]
                        - generic [ref=e440]:
                          - img [ref=e441]
                          - generic [ref=e442]: AWS DynamoDB
                    - treeitem [ref=e443]:
                      - generic [ref=e444] [cursor=pointer]:
                        - img [ref=e446]
                        - generic [ref=e452]:
                          - img [ref=e453]
                          - generic [ref=e454]: AWS EC2
                    - treeitem [ref=e455]:
                      - generic [ref=e456] [cursor=pointer]:
                        - img [ref=e458]
                        - generic [ref=e464]:
                          - img [ref=e465]
                          - generic [ref=e466]: AWS EMR Containers
                    - treeitem [ref=e467]:
                      - generic [ref=e468] [cursor=pointer]:
                        - img [ref=e470]
                        - generic [ref=e476]:
                          - img [ref=e477]
                          - generic [ref=e478]: AWS ElastiCache
                    - treeitem [ref=e479]:
                      - generic [ref=e480] [cursor=pointer]:
                        - img [ref=e482]
                        - generic [ref=e488]:
                          - img [ref=e489]
                          - generic [ref=e490]: AWS Elastic Container Registry
                    - treeitem [ref=e491]:
                      - generic [ref=e492] [cursor=pointer]:
                        - img [ref=e494]
                        - generic [ref=e500]:
                          - img [ref=e501]
                          - generic [ref=e502]: AWS Elastic Container Service
                    - treeitem [ref=e503]:
                      - generic [ref=e504] [cursor=pointer]:
                        - img [ref=e506]
                        - generic [ref=e512]:
                          - img [ref=e513]
                          - generic [ref=e514]: AWS Elastic File System
                    - treeitem [ref=e515]:
                      - generic [ref=e516] [cursor=pointer]:
                        - img [ref=e518]
                        - generic [ref=e524]:
                          - img [ref=e525]
                          - generic [ref=e526]: AWS Elastic Kubernetes Service
                    - treeitem [ref=e527]:
                      - generic [ref=e528] [cursor=pointer]:
                        - img [ref=e530]
                        - generic [ref=e536]:
                          - img [ref=e537]
                          - generic [ref=e538]: AWS ElasticSearch Service
                    - treeitem [ref=e539]:
                      - generic [ref=e540] [cursor=pointer]:
                        - img [ref=e542]
                        - generic [ref=e548]:
                          - img [ref=e549]
                          - generic [ref=e550]: AWS EventBridge
                    - treeitem [ref=e551]:
                      - generic [ref=e552] [cursor=pointer]:
                        - img [ref=e554]
                        - generic [ref=e560]:
                          - img [ref=e561]
                          - generic [ref=e562]: AWS Identity and Access Management
                    - treeitem [ref=e563]:
                      - generic [ref=e564] [cursor=pointer]:
                        - img [ref=e566]
                        - generic [ref=e572]:
                          - img [ref=e573]
                          - generic [ref=e574]: AWS KMS
                    - treeitem [ref=e575]:
                      - generic [ref=e576] [cursor=pointer]:
                        - img [ref=e578]
                        - generic [ref=e584]:
                          - img [ref=e585]
                          - generic [ref=e586]: AWS Kinesis
                    - treeitem [ref=e587]:
                      - generic [ref=e588] [cursor=pointer]:
                        - img [ref=e590]
                        - generic [ref=e596]:
                          - img [ref=e597]
                          - generic [ref=e598]: AWS Lambda
                - paragraph [ref=e601]: No Models selected
        - contentinfo [ref=e602]:
          - paragraph [ref=e603]:
            - generic [ref=e604] [cursor=pointer]:
              - text: Built with
              - img [ref=e605]
              - text: by the Meshery Community
      - generic [ref=e612]:
        - img [ref=e613]
        - paragraph [ref=e616]: MeshSync connected in embedded mode
        - group [ref=e618]:
          - button [ref=e619] [cursor=pointer]:
            - img [ref=e620]
          - button [ref=e624] [cursor=pointer]:
            - img [ref=e625]
  - alert [ref=e628]: Settings | Meshery
  - dialog [ref=e631]:
    - generic [ref=e632]:
      - generic [ref=e633]: Import Model
      - button [ref=e635] [cursor=pointer]:
        - img [ref=e636]
    - generic [ref=e642]:
      - group [ref=e645]:
        - radiogroup [ref=e646]:
          - paragraph [ref=e647]: Upload method
          - generic [ref=e648] [cursor=pointer]:
            - generic [ref=e649]:
              - radio "File Import" [checked] [ref=e650]
              - generic [ref=e651]:
                - img [ref=e652]
                - img [ref=e654]
            - generic [ref=e657]:
              - heading "File Import" [level=6] [ref=e658]
              - paragraph
          - generic [ref=e659] [cursor=pointer]:
            - generic [ref=e660]:
              - radio "URL Import" [ref=e661]
              - img [ref=e663]
            - generic [ref=e666]:
              - heading "URL Import" [level=6] [ref=e667]
              - paragraph
          - generic [ref=e668] [cursor=pointer]:
            - generic [ref=e669]:
              - radio "CSV Import" [ref=e670]
              - img [ref=e672]
            - generic [ref=e675]:
              - heading "CSV Import" [level=6] [ref=e676]
              - paragraph
      - generic [ref=e679]:
        - generic [ref=e680]: Model file
        - generic [ref=e682]:
          - button "Model file" [ref=e683]
          - group
      - generic [ref=e686]:
        - generic [ref=e687]: URL
        - generic [ref=e689]:
          - textbox "URL" [ref=e690]
          - group
    - generic [ref=e691]:
      - button [ref=e692] [cursor=pointer]:
        - img [ref=e693]
      - generic [ref=e695]:
        - button "Cancel" [ref=e696] [cursor=pointer]
        - button "Next" [active] [ref=e697] [cursor=pointer]: Next
```

# Test source

```ts
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
  110 |     await page.getByRole('heading', { name: 'File Import', exact: true }).click();
  111 | 
  112 |     await page.setInputFiles('input[type="file"]', model_import.MODEL_FILE_IMPORT);
  113 | 
  114 |     await page.getByRole('button', { name: 'Next' }).click();
  115 | 
  116 |     await expect(
  117 |       page.getByTestId(`ModelImportedSection-ModelHeader-${model_import.MODEL_NAME}`),
> 118 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  119 |     await expect(page.getByTestId('ModelImportMessages-Wrapper')).toBeVisible();
  120 |     await page.getByRole('button', { name: 'Finish' }).click();
  121 |   });
  122 | 
  123 |   test('Import a Model via Url Import', async ({ page }) => {
  124 |     await page.getByTestId('TabBar-Button-ImportModel').click();
  125 |     await page.getByRole('heading', { name: 'URL Import', exact: true }).click();
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
  141 |     await page.getByRole('heading', { name: 'CSV Import', exact: true }).click();
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