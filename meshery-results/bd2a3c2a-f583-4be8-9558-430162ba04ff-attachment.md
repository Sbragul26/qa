# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.ts >> Logout Page Tests >> Logout from current user session
- Location: tests/e2e/logout.spec.ts:12:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForRequest: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for request "/user/logout"
============================================================
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
            - textbox "I’m having an issue with..." [ref=e64]: "An error occurred on the page at http://localhost:9081/ on 5/13/2026, 9:37:39 AM. Error Details: e?.capabilities?.some is not a function."
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
  1  | import { expect, test } from '@playwright/test';
  2  | import { DashboardPage } from './pages/DashboardPage';
  3  | 
  4  | test.describe('Logout Page Tests', () => {
  5  |   let dashboardPage: DashboardPage;
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     dashboardPage = new DashboardPage(page);
  9  |     await dashboardPage.navigateToDashboard();
  10 |   });
  11 | 
  12 |   test('Logout from current user session', async ({ page }) => {
  13 |     await page.route('/user/logout', async (route) => {
  14 |       await route.fulfill({
  15 |         status: 302,
  16 |         headers: {
  17 |           Location: '/provider',
  18 |         },
  19 |       });
  20 |     });
  21 | 
> 22 |     const waitForLogoutRequest = page.waitForRequest('/user/logout');
     |                                       ^ Error: page.waitForRequest: Test timeout of 60000ms exceeded.
  23 | 
  24 |     await dashboardPage.navigateToLogout();
  25 | 
  26 |     const request = await waitForLogoutRequest;
  27 |     expect(request.url()).toContain('/user/logout');
  28 | 
  29 |     await page.waitForURL('/provider');
  30 |     expect(page.url()).toContain(`/provider`);
  31 |   });
  32 | });
  33 | 
```