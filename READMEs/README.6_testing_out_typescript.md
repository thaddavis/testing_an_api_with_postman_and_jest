# Testing out typescript compilation

create `src` directory - `mkdir src`
create `src/test.ts` file - `touch src/test.ts`

```typescript - src/test.ts
function addition(a,b) {
    return a + b
}

console.log(addition(7,11))
```

- npx tsc -p .
- node build/test.js
