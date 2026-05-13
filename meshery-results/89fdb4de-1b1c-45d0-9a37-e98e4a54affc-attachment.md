# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: models.spec.ts >> Model Workflow Tests >> Create a Model
- Location: tests/e2e/models.spec.ts:48:7

# Error details

```
Test timeout of 240000ms exceeded.
```

```
Error: locator.click: Test timeout of 240000ms exceeded.
Call log:
  - waiting for getByTestId('TabBar-Button-CreateModel')

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
          - generic [ref=e32]:
            - button "Configuration":
              - link "Configuration":
                - /url: /configuration/designs
                - generic:
                  - generic:
                    - img
                  - generic:
                    - generic: Configuration
          - button "meshery-button-2 Performance" [ref=e34] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e35]:
              - /url: /performance
              - generic [ref=e36]:
                - img "meshery-button-2" [ref=e38]
                - generic [ref=e64]: Performance
          - button "Extensions" [ref=e66] [cursor=pointer]:
            - link "Extensions" [ref=e67]:
              - /url: /extensions
              - generic [ref=e68]:
                - img [ref=e70]
                - generic [ref=e97]: Extensions
          - generic [ref=e98]:
            - separator [ref=e99]
            - button "Kanvas" [ref=e101] [cursor=pointer]:
              - link "Kanvas" [ref=e102]:
                - /url: /extension/meshmap
                - generic [ref=e104]:
                  - img [ref=e106]
                  - generic [ref=e108]: Kanvas
          - separator [ref=e109]
        - generic [ref=e110]:
          - img [ref=e113] [cursor=pointer]
          - group [ref=e115]:
            - listitem [ref=e116]:
              - link [ref=e117] [cursor=pointer]:
                - /url: https://docs.meshery.io
                - img [ref=e119]
            - listitem [ref=e121]:
              - link [ref=e122] [cursor=pointer]:
                - /url: https://slack.meshery.io
                - img [ref=e124]
            - listitem [ref=e133]:
              - link [ref=e134] [cursor=pointer]:
                - /url: https://meshery.io/community#community-forums
                - img [ref=e136]
            - listitem [ref=e138]:
              - link [ref=e139] [cursor=pointer]:
                - /url: https://github.com/meshery/meshery/issues/new/choose
                - img [ref=e141]
          - listitem [ref=e143]:
            - generic [ref=e144]:
              - text: v1.0.22
              - link [ref=e146] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/v1.0.22
                - img [ref=e147]
              - text: Running latest
    - generic [ref=e149]:
      - banner [ref=e150]:
        - generic [ref=e152]:
          - generic [ref=e154]:
            - button [ref=e156] [cursor=pointer]:
              - img [ref=e157]
            - text: /
            - button [ref=e166] [cursor=pointer]:
              - img [ref=e167]
            - group [ref=e171]:
              - generic [ref=e176]:
                - combobox [ref=e177] [cursor=pointer]:
                  - generic [ref=e178]: My Workspace
                - textbox: 7ab472e8-3e13-422e-97b1-da98f968b11f
                - img
                - group
            - text: /
            - heading "Settings" [level=5] [ref=e179]
          - generic [ref=e181]:
            - button "contexts" [ref=e184] [cursor=pointer]:
              - generic [ref=e185]:
                - img [ref=e186]
                - generic [ref=e187]: "0"
            - button "99+" [ref=e190] [cursor=pointer]:
              - generic [ref=e191]:
                - img [ref=e192]
                - generic [ref=e195]: 99+
            - button [ref=e199] [cursor=pointer]:
              - img [ref=e201]
            - button [ref=e204] [cursor=pointer]:
              - img [ref=e205]
      - generic [ref=e207]:
        - main [ref=e208]:
          - alert [ref=e210]:
            - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e211]
            - generic [ref=e212]:
              - code [ref=e213]:
                - strong [ref=e214]: "Error:"
                - text: "Minified React error #130; visit https://react.dev/errors/130?args[]=undefined&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
              - strong [ref=e215]: "Version:"
            - paragraph [ref=e216]:
              - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
              - link "Discuss Forum" [ref=e217] [cursor=pointer]:
                - /url: https://discuss.layer5.io/
              - text: or
              - link "Slack" [ref=e218] [cursor=pointer]:
                - /url: https://slack.layer5.io/
            - generic [ref=e219]:
              - button "Get Help" [ref=e221] [cursor=pointer]:
                - generic [ref=e222]: Get Help
              - button "Try Again" [ref=e223] [cursor=pointer]:
                - generic [ref=e224]: Try Again
              - generic:
                - button "Feedback" [ref=e225] [cursor=pointer]
                - generic [ref=e227]:
                  - generic [ref=e228]:
                    - img [ref=e230]
                    - paragraph [ref=e233]: Feedback
                    - generic [ref=e234]:
                      - img [ref=e237]
                      - img [ref=e241] [cursor=pointer]
                  - generic [ref=e245]:
                    - generic [ref=e246]:
                      - button "Issue" [ref=e247] [cursor=pointer]:
                        - img [ref=e249]
                        - paragraph [ref=e251]: Issue
                      - button "Suggestion" [ref=e252] [cursor=pointer]:
                        - img [ref=e254]
                        - paragraph [ref=e260]: Suggestion
                      - button "Meet Request" [ref=e261] [cursor=pointer]:
                        - img [ref=e263]
                        - paragraph [ref=e268]: Meet Request
                    - textbox "I’m having an issue with..." [ref=e270]: "An error occurred on the page at http://localhost:9081/settings on 5/13/2026, 10:39:17 PM. Error Details: Minified React error #130; visit https://react.dev/errors/130?args[]=undefined&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.."
                  - generic [ref=e272]:
                    - generic [ref=e273]:
                      - generic [ref=e274] [cursor=pointer]:
                        - checkbox [checked] [ref=e275]
                        - img [ref=e276]
                      - paragraph [ref=e278]: We may email you for more information or updates
                    - button "Send" [ref=e279] [cursor=pointer]
        - contentinfo [ref=e280]:
          - paragraph [ref=e281]:
            - generic [ref=e282] [cursor=pointer]:
              - text: Built with
              - img [ref=e283]
              - text: by the Meshery Community
  - alert [ref=e286]: Meshery
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
  45  |     await page.getByTestId('settings-tab-registry').click();
  46  |   });
  47  | 
  48  |   test('Create a Model', async ({ page }) => {
  49  |     // Model generation downloads from GitHub and can be very slow in CI.
  50  |     // test.slow() triples the default timeout (60s → 180s).
  51  |     test.slow();
  52  |     test.setTimeout(240_000);
  53  | 
> 54  |     await page.getByTestId('TabBar-Button-CreateModel').click();
      |                                                         ^ Error: locator.click: Test timeout of 240000ms exceeded.
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
```