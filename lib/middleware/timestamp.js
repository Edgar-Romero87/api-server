'use strict';

module.exports = (req, res, next) =>{
  req.requestTime = new Date().toString().slice(0,24);
  next();
}

// function timeStamp() = {
//   let date = new Date();
//   return console.log.log(date.toString());
// }

// module.exports = timeStamp();