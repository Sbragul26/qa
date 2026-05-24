# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: local.setup.js >> authenticate as Local provider
- Location: tests/e2e/local.setup.js:12:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e8]:
      - img [ref=e9]
      - generic [ref=e10]:
        - link [ref=e11] [cursor=pointer]:
          - /url: "#provider-guidance-dialog"
          - text: Learn more about providers
        - group [ref=e12]:
          - button [ref=e13] [cursor=pointer]:
            - text: Select your provider
            - img [ref=e14]
    - contentinfo [ref=e16]:
      - paragraph [ref=e17]:
        - generic [ref=e18] [cursor=pointer]:
          - text: Built with
          - img [ref=e19]
          - text: by the Meshery Community
  - alert [ref=e22]
  - menu [ref=e25]:
    - separator [ref=e26]
    - menuitem "Exoscale Labs Offline" [disabled]:
      - text: Exoscale Labs
      - generic: Offline
    - menuitem "Equinix US-DAL Offline" [disabled]:
      - text: Equinix US-DAL
      - generic: Offline
    - menuitem "HPE Security Offline" [disabled]:
      - text: HPE Security
      - generic: Offline
    - menuitem "F5 BIG IP iHealth Offline" [disabled]:
      - text: F5 BIG IP iHealth
      - generic: Offline
    - menuitem "The University of Texas at Austin Offline" [disabled]:
      - text: The University of Texas at Austin
      - generic: Offline
    - separator [ref=e27]
    - link "Create Provider" [ref=e28] [cursor=pointer]:
      - /url: https://docs.meshery.io/extensibility/providers
      - text: Create Your Own Provider
      - img "External link" [ref=e29]
```

# Test source

```ts
  1  | export const waitForAuthRedirection = async (page) => {
> 2  |   await page.waitForURL((url) => {
     |              ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
  3  |     const pathname = new URL(url).pathname;
  4  |     return ['/', '/dashboard'].includes(pathname);
  5  |   });
  6  | };
  7  | 
  8  | export class LoginPage {
  9  |   constructor(page) {
  10 |     this.page = page;
  11 |     this.emailInput = this.page.locator('input[name="identifier"]');
  12 |     this.passwordInput = this.page.locator('input[name="password"]');
  13 |     this.loginButton = this.page.locator('button[name="method"][value="password"]');
  14 |   }
  15 | 
  16 |   async navigateToLogin() {
  17 |     await this.page.goto('/login');
  18 |   }
  19 | 
  20 |   async loginWithToken(token, baseURL, provider = 'Layer5') {
  21 |     if (!token) {
  22 |       throw new Error('Token is required for token-based authentication');
  23 |     }
  24 |     if (!baseURL) {
  25 |       throw new Error('Base URL is required for token-based authentication');
  26 |     }
  27 | 
  28 |     await this.page.context().addCookies([
  29 |       {
  30 |         name: 'token',
  31 |         value: token,
  32 |         url: baseURL,
  33 |         expires: Math.floor(Date.now() / 1000) + 60 * 60,
  34 |       },
  35 |       {
  36 |         name: 'meshery-provider',
  37 |         value: provider,
  38 |         url: baseURL,
  39 |         expires: -1,
  40 |       },
  41 |     ]);
  42 | 
  43 |     // Navigate to the baseURL after setting cookies
  44 |     await this.page.goto(baseURL);
  45 |   }
  46 | 
  47 |   async loginWithEmail(email, password) {
  48 |     if (!email) {
  49 |       throw new Error('Email is required for login');
  50 |     }
  51 |     if (!password) {
  52 |       throw new Error('Password is required for login');
  53 |     }
  54 | 
  55 |     await this.emailInput.evaluate((el, value) => {
  56 |       el.value = value;
  57 |     }, email);
  58 |     await this.passwordInput.evaluate((el, value) => {
  59 |       el.value = value;
  60 |     }, password);
  61 |     await this.loginButton.click();
  62 |   }
  63 | 
  64 |   async waitForRedirection() {
  65 |     await waitForAuthRedirection(this.page);
  66 |   }
  67 | }
  68 | 
```