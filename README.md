## Description

[Nest] Rokket API 

## Installation

```bash
$ npm install
```

## Configure enviroment variables
copy .env.example in the source project and rename by .env , replace variables by your environment config.
for example if your database is located in localhost it will be 'MONGO_HOST=localhost' and default port 27017 or another that you use in 'MONGO_PORT=27017'

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```