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
  - waiting for getByRole('heading', { name: 'File Import', exact: true })

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
          - button "Configuration" [ref=e33] [cursor=pointer]:
            - link "Configuration" [ref=e34]:
              - /url: /configuration/designs
              - generic [ref=e35]:
                - img [ref=e37]
                - generic [ref=e42]: Configuration
          - button "meshery-button-2 Performance" [ref=e44] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e45]:
              - /url: /performance
              - generic [ref=e46]:
                - img "meshery-button-2" [ref=e48]
                - generic [ref=e74]: Performance
          - button "Extensions" [ref=e76] [cursor=pointer]:
            - link "Extensions" [ref=e77]:
              - /url: /extensions
              - generic [ref=e78]:
                - img [ref=e80]
                - generic [ref=e107]: Extensions
          - separator [ref=e108]
          - list [ref=e109]:
            - button "Kanvas" [ref=e110] [cursor=pointer]:
              - link "Kanvas" [ref=e111]:
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
            - heading "Settings" [level=5] [ref=e188]
          - generic [ref=e190]:
            - button "contexts" [ref=e193] [cursor=pointer]:
              - generic [ref=e194]:
                - img [ref=e195]
                - generic [ref=e196]: "0"
            - button "99+" [ref=e199] [cursor=pointer]:
              - generic [ref=e200]:
                - img [ref=e201]
                - generic [ref=e204]: 99+
            - button [ref=e208] [cursor=pointer]:
              - img [ref=e210]
            - button [ref=e213] [cursor=pointer]:
              - img [ref=e214]
      - generic [ref=e216]:
        - main [ref=e217]:
          - alert [ref=e219]:
            - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e220]
            - generic [ref=e221]:
              - code [ref=e222]:
                - strong [ref=e223]: "Error:"
                - text: Cannot read properties of undefined (reading 'type')
              - strong [ref=e224]: "Version:"
            - paragraph [ref=e225]:
              - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
              - link "Discuss Forum" [ref=e226] [cursor=pointer]:
                - /url: https://discuss.layer5.io/
              - text: or
              - link "Slack" [ref=e227] [cursor=pointer]:
                - /url: https://slack.layer5.io/
            - generic [ref=e228]:
              - button "Get Help" [ref=e230] [cursor=pointer]:
                - generic [ref=e231]: Get Help
              - button "Try Again" [ref=e232] [cursor=pointer]:
                - generic [ref=e233]: Try Again
              - generic:
                - button "Feedback" [ref=e234] [cursor=pointer]
                - generic [ref=e236]:
                  - generic [ref=e237]:
                    - img [ref=e239]
                    - paragraph [ref=e242]: Feedback
                    - generic [ref=e243]:
                      - img [ref=e246]
                      - img [ref=e250] [cursor=pointer]
                  - generic [ref=e254]:
                    - generic [ref=e255]:
                      - button "Issue" [ref=e256] [cursor=pointer]:
                        - img [ref=e258]
                        - paragraph [ref=e260]: Issue
                      - button "Suggestion" [ref=e261] [cursor=pointer]:
                        - img [ref=e263]
                        - paragraph [ref=e269]: Suggestion
                      - button "Meet Request" [ref=e270] [cursor=pointer]:
                        - img [ref=e272]
                        - paragraph [ref=e277]: Meet Request
                    - textbox "I’m having an issue with..." [ref=e279]: "An error occurred on the page at http://localhost:9081/settings?settingsCategory=Registry on 5/11/2026, 9:40:13 PM. Error Details: Cannot read properties of undefined (reading 'type')."
                  - generic [ref=e281]:
                    - generic [ref=e282]:
                      - generic [ref=e283] [cursor=pointer]:
                        - checkbox [checked] [ref=e284]
                        - img [ref=e285]
                      - paragraph [ref=e287]: We may email you for more information or updates
                    - button "Send" [ref=e288] [cursor=pointer]
        - contentinfo [ref=e289]:
          - paragraph [ref=e290]:
            - generic [ref=e291] [cursor=pointer]:
              - text: Built with
              - img [ref=e292]
              - text: by the Meshery Community
  - alert [ref=e295]: Meshery
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
> 110 |     await page.getByRole('heading', { name: 'File Import', exact: true }).click();
      |                                                                           ^ Error: locator.click: Test timeout of 60000ms exceeded.
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