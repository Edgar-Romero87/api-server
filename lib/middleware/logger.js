'use strict';

module.exports = (req, res, next) => {
  console.log(`request method ${req.method}route ${req.path} time ${req.requestTime}`)
  next();
}

// module.exports = ( req, res, next){
//   console.log(req.method, req.path)
//   next();
// }