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
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('menuitem', { name: 'Local' })

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
  1  | export class ProviderSelectionPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.providerDropdown = this.page.getByLabel('Select Provider');
  5  |   }
  6  | 
  7  |   getProviderMenuItem(providerName) {
  8  |     return this.page.getByRole('menuitem', { name: providerName });
  9  |   }
  10 | 
  11 |   async navigateToProviderSelection() {
  12 |     await this.page.goto('/provider');
  13 |   }
  14 | 
  15 |   async selectProvider(providerName) {
  16 |     await this.providerDropdown.click();
> 17 |     await this.getProviderMenuItem(providerName).click();
     |                                                  ^ Error: locator.click: Test timeout of 60000ms exceeded.
  18 |   }
  19 | }
  20 | 
```