# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: indexui.spec.ts >> Index Page UI Tests >> Test if Left Navigation Panel is displayed
- Location: tests/e2e/indexui.spec.ts:12:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('navigation')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for getByTestId('navigation')

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
    - button "Try Again" [ref=e14] [cursor=pointer]:
      - generic [ref=e15]: Try Again
  - alert [ref=e16]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { DashboardPage } from './pages/DashboardPage';
  3  | 
  4  | test.describe('Index Page UI Tests', () => {
  5  |   let dashboardPage: DashboardPage;
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     dashboardPage = new DashboardPage(page);
  9  |     await dashboardPage.navigateToDashboard();
  10 |   });
  11 | 
  12 |   test('Test if Left Navigation Panel is displayed', async () => {
> 13 |     await expect(dashboardPage.navigationPanel).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  14 |   });
  15 | 
  16 |   test('Test if Notification button is displayed', async () => {
  17 |     await expect(dashboardPage.notificationButton).toBeVisible();
  18 |   });
  19 | 
  20 |   test('Test if Profile button is displayed', async () => {
  21 |     await expect(dashboardPage.profileButton).toBeVisible();
  22 |   });
  23 | });
  24 | 
```