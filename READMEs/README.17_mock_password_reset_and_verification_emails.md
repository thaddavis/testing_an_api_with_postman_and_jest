# Mock password reset and verification emails

the routes will only be available in DEV mode or TEST mode

`POST mock-request-password-reset` - for obtaining the 'special code' for password resets from the server
`POST mock-receive-verification-token` - for obtaining the 'special code' for verification from the server

## Why not do another diff

git diff -- . ':(exclude)package-lock.json'
