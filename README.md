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
         JWT es un standard para la generación de tokens, lo que se define es la forma del token. Es utilizado para conceder al portador privilegios de accesos, 
         oauth es un protocolo de authorización que explica el flujo requerido para que un tercero pueda acceder a los recursos en nombre del dueño de esos recursos.
         resumiendo jwt define la forma standarizada de crear un token y oauth define el flujo de acceso a recursos en nombre del dueño de un recurso
      - English </br>
          JWT is an standard to generate tokens, it defines shape of token. this is used to grant privileges access to the bearer.
          oauth is authorization protocol that explain required flow to a third party can access to resources behalf owner of this resources. 
          in summary jwt define a standard way to create token and oauth define flow access to resources behalf resource owner
  - Explain how asymmetric encryption works. </br>
    - Spanish </br>
       la encriptación asimétrica es un proceso donde se generan un par de llaves a traves de un algoritmo. resultando la llave pública y la llave privada. la llave pública generada puede ser utilizada por cualquier persona para encriptar un mensaje. este mensaje puede ser desencriptado solo por el portador de la llave privada.
       en el caso opuesto el portador de la llave privada puede encriptar un mensaje y mediante la llave pública al desencriptarlo se podrá comprobar que fue firmado por el portador de la llave.
      
    - English </br>
      asymetric encryption is a process where a pair of keys are generated through some pair key generation algorithm,one know as public key and the other private key.
      public key can be used for anyone to encrypt a message. this message can be descrypt only by the private key bearer.
      in the opposite case private key bearer can encrypt a message and thourgh public key by decrypt it can be verified that it was sign by private key bearer. 
 - What are the main differences between a GraphQL and REST API ?
    - Spanish </br>
         - Graphql tiene un solo endpoint donde se envian todas las consultas mientras que REST tiene un conjunto de endpoints que hacen uso de los verbos HTTP para hacer determinadas acciones sobre los recursos.
         - en Graphql se anuncia la disponibilidad de los recursos y quien los consume es el que determina lo que necesita, en REST el servidor define la forma de la respuesta y suele venir información extra a la que requiere el consumidor de la API.
         - Para el acceso a recursos anidados en REST generalmente se requiere consultar a mas de una ruta mientras que en graphql podemos solicitar toda esta información en una sola consulta.
         - En Rest cualquier cambio puede quebrar el código por lo cual es requerido un versionamiento, en graphql solo se devuelve la información solicitada por lo que al agregar nuevas características solo estaremos ampliando la cantidad de recursos disponibles que el usuario puede obtener lo que no romperia el codigo por lo que no requiere de versionamiento.
    - English </br>
        - Graphql has only one endpoint where all queries are sent while REST has a set of endpoints that makes use of HTTP verbs to make a specifics actions over resources.
        - Graphql announces availability of resources and consumer determines what it needs, in Rest server defines response shape and additional information usually comes to which consumer does not requires.
        - To access nested resources in REST, it is generally required to consult more than one route, while in graphql we can request all this information in a single query.
        - In Rest, any change can break the code for which a versioning is required, in graphql only the requested information is returned so when adding new features we will only be expanding the amount of available resources that the user can obtain, which would not break the code so it does not require versioning.
