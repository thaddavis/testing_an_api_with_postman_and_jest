# Flesh out remaining routes

npm i @aws-sdk/client-ses@^3.216.0

## we will now add routes for the remaining authentication features

`POST verify-account` - for email verifying new accounts before they can use the system
`POST request-password-reset` - for requesting an email of a 'special code' for resetting passwords
`POST reset-password` - for using the 'special code' to reset passwords
`DELETE delete-account` - for deleting individual accounts : )

## in the next step we will MOCK some of these features to simplify testing our code

the routes will only be available in DEV mode or TEST mode

`POST mock-request-password-reset` - for obtaining the 'special code' for password resets from the server
`POST mock-receive-verification-token` - for obtaining the 'special code' for verification from the server

## ignore the routers for easier overview

- `https://prettier.io/docs/en/ignore.html`

## Run Postman Collection

test with `Rough_Auth_Flow_2`

## Why not do another diff

git diff -- . ':(exclude)package-lock.json'
