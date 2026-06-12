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
    - locator resolved to <li tabindex="-1" role="menuitem" aria-disabled="true" class="MuiButtonBase-root Mui-disabled MuiMenuItem-root Mui-disabled MuiMenuItem-gutters mui-style-cdfip1">…</li>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <li tabindex="-1" role="menuitem" aria-disabled="true" class="MuiButtonBase-root Mui-disabled MuiMenuItem-root Mui-disabled MuiMenuItem-gutters mui-style-1tue69j">…</li>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not enabled
    - retrying click action
      - waiting 100ms
    114 × waiting for element to be visible, enabled and stable
        - element is not enabled
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e8]:
      - img [ref=e9]
      - link [ref=e10] [cursor=pointer]:
        - /url: "#provider-guidance-dialog"
        - text: Learn more about providers
      - group [ref=e12]:
        - button [ref=e13] [cursor=pointer]:
          - generic [ref=e15]: Select your provider
          - img [ref=e16]
    - contentinfo [ref=e18]:
      - paragraph [ref=e19]:
        - generic [ref=e20] [cursor=pointer]:
          - text: Built with
          - img [ref=e21]
          - text: by the Meshery Community
  - alert [ref=e24]
  - menu [ref=e27]:
    - generic [ref=e28]: Local
    - menuitem "Local More information about Local" [active] [ref=e29] [cursor=pointer]:
      - generic [ref=e30]: Local
      - button "More information about Local" [ref=e32]:
        - img [ref=e33]
    - separator [ref=e35]
    - generic [ref=e36]: Remote
    - menuitem "Intel Perf Platform More information about Intel Perf Platform" [ref=e37] [cursor=pointer]:
      - generic [ref=e38]: Intel Perf Platform
      - button "More information about Intel Perf Platform" [ref=e40]:
        - img [ref=e41]
    - separator [ref=e43]
    - generic [ref=e44]: Offline
    - menuitem "collab.eti.cisco.com Offline" [disabled]:
      - text: collab.eti.cisco.com
      - generic: Offline
    - menuitem "kickstart.metabit.com Offline" [disabled]:
      - text: kickstart.metabit.com
      - generic: Offline
    - menuitem "OD10 Offline" [disabled]:
      - text: OD10
      - generic: Offline
    - menuitem "Tata Consulting Offline" [disabled]:
      - text: Tata Consulting
      - generic: Offline
    - menuitem "Meshery Offline" [disabled]:
      - text: Meshery
      - generic: Offline
    - menuitem "Layer5 Offline" [disabled]:
      - text: Layer5
      - generic: Offline
    - separator [ref=e45]
    - link "Create Provider" [ref=e46] [cursor=pointer]:
      - /url: https://docs.meshery.io/extensibility/providers
      - text: Create Your Own Provider
      - img "External link" [ref=e47]
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