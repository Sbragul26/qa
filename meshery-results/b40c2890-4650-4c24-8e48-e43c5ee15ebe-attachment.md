# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: local.setup.js >> authenticate as None provider
- Location: tests/e2e/local.setup.js:12:6

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9081/provider
Call log:
  - navigating to "http://localhost:9081/provider", waiting until "load"

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
> 12 |     await this.page.goto('/provider');
     |                     ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:9081/provider
  13 |   }
  14 | 
  15 |   async selectProvider(providerName) {
  16 |     await this.providerDropdown.click();
  17 |     await this.getProviderMenuItem(providerName).click();
  18 |   }
  19 | }
  20 | 
```