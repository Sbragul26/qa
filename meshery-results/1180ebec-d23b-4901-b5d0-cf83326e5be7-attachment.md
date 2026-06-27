# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: models.spec.ts >> Model Workflow Tests >> Search a Model and Export it
- Location: tests/e2e/models.spec.ts:104:7

# Error details

```
Test timeout of 240000ms exceeded.
```

```
Error: locator.click: Test timeout of 240000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'enabled' })

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
          - button "Telemetry" [ref=e44] [cursor=pointer]:
            - link "Telemetry" [ref=e45]:
              - /url: /telemetry
              - generic [ref=e46]:
                - img [ref=e48]
                - generic [ref=e52]: Telemetry
          - button "meshery-button-2 Performance" [ref=e54] [cursor=pointer]:
            - link "meshery-button-2 Performance" [ref=e55]:
              - /url: /performance
              - generic [ref=e56]:
                - img "meshery-button-2" [ref=e58]
                - generic [ref=e84]: Performance
          - button "Extensions" [ref=e86] [cursor=pointer]:
            - link "Extensions" [ref=e87]:
              - /url: /extensions
              - generic [ref=e88]:
                - img [ref=e90]
                - generic [ref=e117]: Extensions
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
              - text: undefined
              - link [ref=e155] [cursor=pointer]:
                - /url: https://docs.meshery.io/project/releases/undefined
                - img [ref=e156]
              - generic [ref=e158]:
                - text: Update available
                - link [ref=e159] [cursor=pointer]:
                  - /url: https://docs.meshery.io/project/releases/v1.0.49
                  - img [ref=e160]
    - generic [ref=e162]:
      - banner [ref=e163]:
        - generic [ref=e165]:
          - generic [ref=e167]:
            - button [ref=e169] [cursor=pointer]:
              - img [ref=e170]
            - text: /
            - button [ref=e179] [cursor=pointer]:
              - img [ref=e180]
            - text: /
            - heading "Settings" [level=5] [ref=e184]
          - generic [ref=e186]:
            - button "contexts" [ref=e189] [cursor=pointer]:
              - generic [ref=e190]:
                - img [ref=e191]
                - generic [ref=e192]: "0"
            - button [ref=e195] [cursor=pointer]:
              - img [ref=e196]
            - button [ref=e203] [cursor=pointer]:
              - img [ref=e205]
            - button [ref=e208] [cursor=pointer]:
              - img [ref=e209]
      - generic [ref=e211]:
        - main [ref=e212]:
          - generic [ref=e213]:
            - tablist [ref=e217]:
              - tab "Meshery logo Overview" [ref=e218] [cursor=pointer]:
                - img "Meshery logo" [ref=e219]
                - text: Overview
              - tab "Adapters" [ref=e220] [cursor=pointer]:
                - img [ref=e221]
                - text: Adapters
              - tab "Registry" [selected] [ref=e223] [cursor=pointer]:
                - img [ref=e224]
                - text: Registry
              - tab "Reset" [ref=e226] [cursor=pointer]:
                - img [ref=e227]
                - text: Reset
            - generic [ref=e232]:
              - generic [ref=e234]:
                - button "Create Model" [ref=e235] [cursor=pointer]:
                  - img [ref=e237]
                  - text: Create Model
                - button "Import Model" [ref=e239] [cursor=pointer]:
                  - img [ref=e241]
                  - text: Import Model
              - generic [ref=e243]:
                - generic [ref=e244] [cursor=pointer]:
                  - generic [ref=e245]: (1)
                  - text: Models
                - generic [ref=e246] [cursor=pointer]:
                  - generic [ref=e247]: (3,935)
                  - text: Components
                - generic [ref=e248] [cursor=pointer]:
                  - generic [ref=e249]: (589)
                  - text: Relationships
                - generic [ref=e250] [cursor=pointer]:
                  - generic [ref=e251]: (4)
                  - text: Registrants
                - generic [ref=e252] [cursor=pointer]:
                  - generic [ref=e253]: (0)
                  - text: Connections
              - generic [ref=e254]:
                - generic [ref=e256]:
                  - generic [ref=e259]:
                    - textbox "Search" [ref=e262]: Test Model 1782528736683
                    - button [ref=e263] [cursor=pointer]:
                      - img [ref=e264]
                  - tree "controlled" [ref=e268]:
                    - treeitem "Test Model 1782528736683" [ref=e269]:
                      - generic [ref=e270] [cursor=pointer]:
                        - img [ref=e272]
                        - generic [ref=e279]: Test Model 1782528736683
                - generic [ref=e282]:
                  - generic [ref=e283]:
                    - generic [ref=e284]:
                      - img [ref=e285]
                      - generic [ref=e286]: Test Model 1782528736683
                    - generic [ref=e287]:
                      - button "Export Model" [active] [ref=e288] [cursor=pointer]:
                        - img [ref=e289]
                        - text: Export
                      - generic [ref=e292]:
                        - combobox [ref=e293] [cursor=pointer]: enabled
                        - textbox: enabled
                        - img
                        - group
                  - generic [ref=e294]:
                    - generic [ref=e295]:
                      - generic [ref=e297]:
                        - generic [ref=e299]:
                          - paragraph [ref=e300]: API Version
                          - generic [ref=e301]: v1.3.2
                        - generic [ref=e303]:
                          - paragraph [ref=e304]: Components
                          - generic [ref=e305]: "11"
                        - generic [ref=e307]:
                          - paragraph [ref=e308]: Registrant
                          - generic [ref=e309]: Github
                      - generic [ref=e311]:
                        - generic [ref=e313]:
                          - paragraph [ref=e314]: Category
                          - generic [ref=e315]: Uncategorized
                        - generic [ref=e317]:
                          - paragraph [ref=e318]: Duplicates
                          - generic [ref=e319]: "0"
                        - generic [ref=e321]:
                          - paragraph [ref=e322]: Relationships
                          - generic [ref=e323]: "0"
                    - heading "Advanced Details" [level=3] [ref=e325]:
                      - button "Advanced Details" [ref=e326] [cursor=pointer]:
                        - generic [ref=e327]: Advanced Details
                        - img [ref=e329]
        - contentinfo [ref=e331]:
          - paragraph [ref=e332]:
            - generic [ref=e333] [cursor=pointer]:
              - text: Built with
              - img [ref=e334]
              - text: by the Meshery Community
  - alert [ref=e337]: Settings | Meshery
```

# Test source

```ts
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
  101 |     await page.getByTestId('UrlStepper-Button-Finish').click();
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
> 114 |     await page.getByRole('combobox', { name: 'enabled' }).click();
      |                                                           ^ Error: locator.click: Test timeout of 240000ms exceeded.
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