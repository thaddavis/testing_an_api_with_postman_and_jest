# Add Prettier config

- mkdir .vscode
- touch .vscode/settings.json

```settings.json
{
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "editor.formatOnSave": true
}
```
