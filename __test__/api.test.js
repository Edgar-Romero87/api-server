'use strict';

const { app } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(app);


describe('testing get method', () =>{

  it('It Should Get Products', () => {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200)
      })
  })

  it('is should get Categories', ()=>{
    return mockRequest
    .get('/categories')
    .then(results =>{
      expect(results.status).toBe(200)
    })
  })

  it('it should get Products/id', () => {
    return mockRequest
    .get('/products/:id')
    .then(results =>{
      expect(results.status).toBe(200)
    })
  })

  it('it should get Categories/id', () => {
    return mockRequest
    .get('/categories/:id')
    .then(results =>{
      expect(results.status).toBe(200)
    })
  })

})

describe('test error handling', () =>{
  it('It should respond with 404 on bad route', () =>{
    return mockRequest
    .get('/badroute')
    .then(results => {
      expect(results.status).toBe(404);
    })
  })

  // it('it should respond with 500 server error', () => {
  //   return mockRequest
  //   .get('/middleware/500.js')
  //   .then(results =>{
  //     expect(results.status).toBe(500);
  //   })
  // })
})

describe('testing post', () =>{
  it('it should respond with status 200', () =>{
    return mockRequest
    .post('/products')
    .then(results => {
      expect(results.status).toBe(200);
    })
  })

  it('it should respond with status 200', () =>{
    return mockRequest
    .post('/categories')
    .then(results => {
      expect(results.status).toBe(200);
    })
  })

})