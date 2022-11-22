# Add VSCode debugger config

- touch .vscode/launch.json

```launch.json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Debug node on localhost",
            "protocol": "inspector",
            "port": 9229,
        }
    ]
}
```

## Notes

- "Property protocol is not allowed." is weird but everything seems to work
- I think the debugger needs to start first, and then you can run the program? hmmm :)
