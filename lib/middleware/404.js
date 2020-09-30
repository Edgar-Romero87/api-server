'use strict';

module.exports = (req, res ) =>{
  res.status(404).send('Page Not Found');
}

//ANOTHER WAY TO WRITE THIS ERROR FUNCTION
// module.exports = (req, res ) =>{
//   const output = {
//     error: 'Page not Found'
//   };
//   res.status(404).json('output');
// }