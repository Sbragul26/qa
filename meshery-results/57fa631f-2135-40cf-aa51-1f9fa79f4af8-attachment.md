# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: designConfig.spec.js >> Design Configurator Tests >> should edit design in Design Configurator
- Location: tests/e2e/designConfig.spec.js:110:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByTestId('category-selector')

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
            - textbox "I’m having an issue with..." [ref=e64]: "An error occurred on the page at http://localhost:9081/configuration/designs/configurator?design_id=test-design on 5/13/2026, 9:25:49 AM. Error Details: e?.capabilities?.some is not a function."
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
  11  | const MOCK_MODEL = 'azure-db-for-mysql';
  12  | const MOCK_MODEL_VERSION = '1.0.0';
  13  | 
  14  | test.describe('Design Configurator Tests', () => {
  15  |   let designConfigPage;
  16  | 
  17  |   test.beforeEach(async ({ page }) => {
  18  |     // Mock design fetch
  19  |     await page.route(`**/api/pattern/${DESIGN_ID}`, async (route) => {
  20  |       await route.fulfill({
  21  |         status: 200,
  22  |         contentType: 'application/json',
  23  |         body: JSON.stringify({
  24  |           id: DESIGN_ID,
  25  |           patternFile: DESIGN_PATTERN,
  26  |         }),
  27  |       });
  28  |     });
  29  | 
  30  |     await page.route('**/api/pattern', async (route) => {
  31  |       if (route.request().method() === 'GET') {
  32  |         await route.fulfill({
  33  |           status: 200,
  34  |           contentType: 'application/json',
  35  |           body: JSON.stringify([{ id: DESIGN_ID }]),
  36  |         });
  37  |         return;
  38  |       }
  39  | 
  40  |       await route.fulfill({
  41  |         status: 200,
  42  |         contentType: 'application/json',
  43  |         body: JSON.stringify([{ id: DESIGN_ID }]),
  44  |       });
  45  |     });
  46  | 
  47  |     // Mock meshmodel categories
  48  |     await page.route('**/api/meshmodels/categories**', async (route) => {
  49  |       await route.fulfill({
  50  |         status: 200,
  51  |         contentType: 'application/json',
  52  |         body: JSON.stringify({
  53  |           categories: [{ name: MOCK_CATEGORY }],
  54  |         }),
  55  |       });
  56  |     });
  57  | 
  58  |     // Mock meshmodel models for the selected category
  59  |     await page.route(`**/api/meshmodels/categories/${MOCK_CATEGORY}/models**`, async (route) => {
  60  |       await route.fulfill({
  61  |         status: 200,
  62  |         contentType: 'application/json',
  63  |         body: JSON.stringify({
  64  |           models: [
  65  |             {
  66  |               name: MOCK_MODEL,
  67  |               displayName: 'Azure DB for MySQL',
  68  |               version: MOCK_MODEL_VERSION,
  69  |             },
  70  |           ],
  71  |         }),
  72  |       });
  73  |     });
  74  | 
  75  |     // Mock meshmodel components for the selected model
  76  |     await page.route(`**/api/meshmodels/models/${MOCK_MODEL}/components**`, async (route) => {
  77  |       await route.fulfill({
  78  |         status: 200,
  79  |         contentType: 'application/json',
  80  |         body: JSON.stringify({
  81  |           components: [
  82  |             {
  83  |               id: 'comp-1',
  84  |               component: { kind: 'FlexibleServer', version: 'v1', schema: '{}' },
  85  |               displayName: 'Flexible Server',
  86  |               model: {
  87  |                 name: MOCK_MODEL,
  88  |                 version: MOCK_MODEL_VERSION,
  89  |                 category: { name: MOCK_CATEGORY, metadata: null },
  90  |                 registrant: { hostname: 'artifacthub', kind: 'artifacthub' },
  91  |                 metadata: {},
  92  |                 model: { version: MOCK_MODEL_VERSION },
  93  |               },
  94  |               metadata: {},
  95  |             },
  96  |           ],
  97  |         }),
  98  |       });
  99  |     });
  100 | 
  101 |     designConfigPage = new DesignConfiguratorPage(page);
  102 |     await designConfigPage.navigateTo(DESIGN_ID);
  103 |   });
  104 | 
  105 |   test('should verify Design Configurator page elements', async () => {
  106 |     await expect(designConfigPage.appBar).toBeVisible();
  107 |     await expect(designConfigPage.codeEditor).toBeVisible();
  108 |   });
  109 | 
  110 |   test('should edit design in Design Configurator', async ({ page }) => {
> 111 |     await designConfigPage.categorySelector.click();
      |                                             ^ Error: locator.click: Test timeout of 60000ms exceeded.
  112 |     await designConfigPage.databaseCategory.click();
  113 | 
  114 |     await designConfigPage.modelSelector.click();
  115 |     await designConfigPage.modelAzure.click();
  116 | 
  117 |     await expect(designConfigPage.modelContainer).toBeVisible();
  118 | 
  119 |     const updateRequest = page.waitForRequest(
  120 |       (request) => request.url().includes('/api/pattern') && request.method() === 'POST',
  121 |     );
  122 | 
  123 |     await designConfigPage.updateDesign();
  124 | 
  125 |     const updatePayload = (await updateRequest).postDataJSON();
  126 |     await expect(updatePayload).toMatchObject({
  127 |       id: DESIGN_ID,
  128 |       name: 'Sample Design',
  129 |     });
  130 |   });
  131 | });
  132 | 
```