# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: remote.setup.js >> authenticate with Remote Provider
- Location: tests/e2e/remote.setup.js:12:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('menuitem', { name: 'Meshery' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - 'heading "Application error: a client-side exception has occurred while loading localhost (see the browser console for more information)." [level=2] [ref=e11]'
    - contentinfo [ref=e12]:
      - paragraph [ref=e13]:
        - generic [ref=e14] [cursor=pointer]:
          - text: Built with
          - img [ref=e15]
          - text: by the Meshery Community
  - alert [ref=e18]
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