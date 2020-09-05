'use strict';

const logger = require('../lib/middleware/logger');
const timeStamp = require('../lib/middleware/timestamp');


describe('testing middleware', () =>{
  let req = {}
  let res = {}
  let next = jest.fn();
  let consoleSpy;

  beforeEach(() =>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  })
  afterEach(() =>{
    consoleSpy.mockRestore()
  })

  it('it should console.log', () =>{
    logger(req, res, next)
    expect(consoleSpy).toHaveBeenCalled()
  })
  
  it('should move to the next middleware', () =>{
    logger(req, res, next)
    expect(next).toHaveBeenCalledWith()
  })

  it('it should add the time stamp', () =>{
    timeStamp(req, res, next)
    expect(req.requestTime).not.toBeNull()
  })

  it('should move to the next middleware', () =>{
    timeStamp(req, res, next)
    expect(next).toHaveBeenCalledWith()
  })
})