# API-SERVER

## Author: Edgar Romero.

## Links and Resources:

Json server ci/cd (GitHub Actions)
## Setup

`.env` requirements

- PORT=3000
## Running the app

`nodemon` http (method) :3000/

Command method to manipulate the data:

- `POST` (CREATE) should return an object representing the newly added record
- `GET` should return a single object if a specific resource was requested, or an array of objects, with appropriate metadata.
- `PUT/PATCH` (UPDATE) should return an object representing the updated record, after the save
- `DELETE` should return either an empty object or null
## Tests

`npm test`

Tests are handled with the jest testing library. Install jest to the dev dependencies. Follow the command:

`npm i --save-dev jest`

To test a file, run the following command:   
`npm test`  
follow by the name of tha file to test.

## Changelog:
2020-Aug 27: Phase 1, build a simple API(with no code) using a product called 'json-server' to build a simple API server.