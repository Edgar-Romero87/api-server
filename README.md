# API-SERVER


## Author: Edgar Romero.

## Links and Resources:

* Json server
ci/cd (GitHub Actions)


## Setup

`.env` requirements
* PORT=3000 



## Running the app
`nodemon`
`http (method) :3000/

Command method to manipulate the data:
* `POST` (CREATE) should return an object representing the newly added record
* `GET` should return a single object if a specific resource was requested, or an array of objects, with appropriate metadata.
* `PUT/PATCH` (UPDATE) should return an object representing the updated record, after the save
* `DELETE` should return either an empty object or null

## Tests

`$ npm test`

- Generally, avoid starting the actual server for testing
- Instead, export your server as a module in a library
- Then, you can use `supertest` or `supergoose` to run your tests. 


## Changelog
- 2020-Aug 27: Phase 1, build a simple API(with no code) using a product called 'json-server' to build a simple API server.
- 2020-Aug 29: Moving away from 'jason-server' and creating a real API of our own, using Express. Replicating the input/output of json-server but storing data in memory to simulate full CRUD functionality, but without persistence.

- 2020-Sep 3: Phase 3,of development, modularize our server, making it easier to manage as well as adding a much needed persistence layer, saving all API data to a Mongo database.