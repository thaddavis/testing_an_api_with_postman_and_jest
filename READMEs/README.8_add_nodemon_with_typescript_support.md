# Add Nodemon with typescript support

- `touch nodemon.json`

```nodemon.json
{
  "verbose": true,
  "watch": ["src/**/*.ts"],
  "execMap": {
    "ts": "if [ $(lsof -t -i:9229) ]; then kill -9 $(lsof -t -i:9229); fi; node --inspect=0.0.0.0:9229 -r ts-node/register"
  },
  "delay": 0
}
```

- edit package.json

```package.json
"dev": "nodemon src/test.ts"
```