'use strict';

module.exports = (req, res ) =>{
  res.status(404).send('page not found');
}

// module.exports = (req, res ) =>{
//   let output = {
//     error: err
//   }
//   res.status(404).json('output');
// }