# MongoDB

## Run a MongoDB database server in Docker with ONE command

- docker -v => Docker version 20.10.12, build e91ed5
- docker pull mongo
- docker run --name auth-api-test -p 27017:27017 -d mongo:latest
- docker ps
- docker logs -f auth-api-test

## Setup MongoDb with Typescript support

- npm i mongoose@^6.7.3

## Add Connector and Models

- mkdir src/db
- etc.

## Install Mongo Compass

- `https://www.mongodb.com/products/compass`

## Test sign-up route with Compass

git diff -- . ':(exclude)package-lock.json'
