# Add Jest Testing

`https://jestjs.io/docs/cli`

## STEP 1 - install packages

- npm i -D ts-jest@^29.0.3 jest@^29.3.1

## STEP 2 - add NPM script and setup Jest with Typescript support

- "test": "jest"
- `https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file`
- We want to write tests in Typescript as well so we need ts-jest to make things work
- generate jest config file with the following command -> `npx ts-jest config:init`

```add the following config to jest.config.ts
preset: "ts-jest",
testEnvironment: "node",
verbose: true,
testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
```

## STEP 3 - test the NPM script

Oops we have no tests!

## STEP 4 - Add a test

- `src/addition.test.ts`
- `jest test`

## STEP 5 - Add another NPM script

- Like nodemon will automate restarting our server, jest has an auto restart option as well
- "test-watch": "jest --watch"

## STEP 6 - Explain that Jest will look for test code

- in files ending with `.test.ts`
- every file in the `__tests__`
- Jest will look for 'describe' blocks and 'test' blocks
- Explain that if you are testing a specific file I would recommend the convention of
placing a `.test.ts` file side-by-side with the file you are testing
- Explain that tests ran across multiple files or the entire project can go in the `__tests__` folder

## STEP 7 - Start building the Authentication Flow 1 test

- npm i -D axios@^1.2.0 axios-cookiejar-support@^4.0.3 tough-cookie@^4.1.2 @types/tough-cookie@^4.0.2
- touch `authentication_flow_1.ts`
- test the sign-up, sign-in, and is-authed endpoints

## STEP 8 - Show off watch modes for Jest

- `jest --watch`
- point out the delay hack in the beforeAll hook for the test suite
