# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - img "meshery-logo-light-text" [ref=e5]
    - 'heading "Tip: Relationships characterize how components are connected and interact with each other." [level=1] [ref=e37]'
  - alert [ref=e40]:
    - heading "Uh-oh!😔 Please pardon the mesh." [level=2] [ref=e41]
    - generic [ref=e42]:
      - code [ref=e43]:
        - strong [ref=e44]: "Error:"
        - text: d is not a function
      - strong [ref=e45]: "Version:"
    - paragraph [ref=e46]:
      - text: We apologize for the inconvenience. The issue may be on our end. If troubleshooting doesn't work, please check out our support channels
      - link "Discuss Forum" [ref=e47] [cursor=pointer]:
        - /url: https://discuss.layer5.io/
      - text: or
      - link "Slack" [ref=e48] [cursor=pointer]:
        - /url: https://slack.layer5.io/
    - button "Try Again" [ref=e50] [cursor=pointer]:
      - generic [ref=e51]: Try Again
  - alert [ref=e52]
```