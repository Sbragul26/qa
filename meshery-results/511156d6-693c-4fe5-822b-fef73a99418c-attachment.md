# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e4]:
    - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e5]
    - generic [ref=e6]:
      - code [ref=e7]:
        - strong [ref=e8]: "Error:"
        - text: d is not a function
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