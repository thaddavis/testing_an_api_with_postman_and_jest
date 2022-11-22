# Add Fastify packages

## General Information

- npm i -D @types/node@^18.11.9 @types/uuid@^8.3.4
- npm i @fastify/jwt@^6.3.3 argon2@^0.30.2 fastify@^4.10.2 fluent-json-schema@^4.0.0 pino@^8.7.0

- `https://expressjs.com/`
- `https://www.fastify.io/`
- `https://www.fastify.io/benchmarks/`
- `https://web-frameworks-benchmark.netlify.app/result?l=ruby,javascript`

## Inspiration and project template taken from Harsh Makwana

`https://github.com/hmake98`
`https://github.com/hmake98/fastify-typescript`

## Configure Fastify logging with `pino-pretty`

`https://github.com/pinojs/pino-pretty`

## Add boilerplate Fastify API code for sign-in, sign-up, is-authed, and healthcheck routes

src/controllers
src/logger
src/middleware
src/routes
src/schema
src/index.ts - This is the entrypoint

git diff -- . ':(exclude)package-lock.json'

## Do some testing, recap, and take a deep breath before outlining the next few steps

### 11 Jest Setup

- Notice how we are switching back and forth from Postman to test the API
- We will now setup Jest to automate triggering our tests to save us from re-running our tests manually

### 12 Mongoose Setup

- We need to store data about our accounts somewhere
- I will use MongoDB but you can use whichever database you prefer
- We will run a MongoDB database server in Docker with ONE command
- We will use Mongoose to connect to our API to the database server

### 13 Get JWT authentication working

- We will use JWTs for autheticating those who use the API

### 14 ESLint

- Prettier is doing great job at autoformatting code
- But we also want to automatically remove all unused imports and variables to make our code even more concise
