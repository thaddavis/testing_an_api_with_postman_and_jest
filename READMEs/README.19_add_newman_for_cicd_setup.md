# Add Newman

- Newman is the cli tool for running postman collections
- Newman will allow you to run the integration tests you develop with Postman in your CICD pipeline

npm install -D newman@^5.3.2 newman-reporter-htmlextra@^1.22.11 newman-reporter-json-summary@^1.0.14

## How to install Newman CLI

`https://github.com/postmanlabs/newman`

## Running collections in parallel and in sequence

- `https://m4nu56.dev/posts/multiple-postman-collection-stress-test` courtesy of Emmanuel Balpe
- `https://www.npmjs.com/package/newman-reporter-json-summary`

- here are 2 utility scripts for running your collections from the command line either in parallel on in sequence
- parallelization for the win : )

## Test commands

npx newman run postman/auth_flow_1__mock_password_reset.postman_collection.json -e postman/localhost.postman_environment.json

## Why not do another diff

git diff -- . ':(exclude)package-lock.json'
