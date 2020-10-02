## Description

Rokket API 1.0.0
## Services and Tools
   
  - NodeJS 14.11 </br>
  - npm 6.14.7 </br>
  - docker 19.03.13 </br>
  - docker-compose 1.27.4
## Framework and libraries
  - NestJS (back-end framework)
  - class-validator (to implement dto validation schema)
  - passport (to implement local and jwt strategies)
  - mongoose (object modeling data for mongodb)
  - swagger (to document endpoints in open api 3)
  - bcrypt (to hash password and verify validity)
## Installation
Clone repository
```bash
$ git clone https://github.com/pipe27febrero/rokket_test
$ cd rokket_test
```
Install project dependencies 
```bash
$ npm install
```
## Configure Environment variables </br>
  - copy .env.example in the source project and rename by .env , replace variables by your environment config. </br>
      For example: </br>
```bash
$ cp .env.example .env
````
```bash
JWT_SECRET=mySecretToSignAndVerifyJwtTokens
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DATABASE=yourdatabase
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Open http://localhost:3000 to check project and http://localhost:3000/api to check documentation
## Deploy with Containers 📦📦📦📦
- Configure environment variables </br>
    copy .env.example in the source project and rename by .env , write your values or for testing purpose keep the same values </br>
For example: .env file </br>

```bash
JWT_SECRET=HereYourSecretPhraseToEncrypt
MONGO_HOST=mongo
MONGO_PORT=27017
MONGO_DATABASE=databaseName
```
Deploy containers in the root project running this command
```bash
# development
$ docker-compose up -d --build
```
## Check demostration of api on my website
   - https://api.test.digitalaccount.store/api/   (Open API Documentation) you can make requests to endpoints here!
## Questions
  - What is the difference between JWT and OAuth authentication? </br>
      - Spanish </br>
         JWT es un standard para la generacion de token , este es utilizado para conceder al portador privilegios de accesos, lo que se define es la forma del token.
         oauth es un protocolo de authorización que explica el flujo requerido para que un tercero pueda acceder a los recursos en nombre del dueño de esos recursos.
         resumiendo jwt define la forma standarizada de crear un token y oauth permite el acceso a recursos en nombre del dueño de un recurso
      - English </br>
          JWT is an standard to generate tokens, this is used to grant privileges access to the bearer , it defines shape of token.
          oauth is authorization protocol that explain required flow to a third party can access to resources behalf owner of this resources. 
          in summary jwt define a standard way to create token and oauth allow access to resources behalf resource owner
