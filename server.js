'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const stamper = require('./middleware/stamper.js');

app.get('/', stamper, (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/data', stamper, (req, res) => {
  let outputObject = {
    10: 'even',
    5: 'odd',
    time: req.timestamp, // we get this from middleware
  };

  res.status(200).json(outputObject);
});

app.get('/bad', (req, res, next) => { // route-level middleware gets applied to individual routes
  next('you messed up'); // next tells us to move to the next middleware in the chain
});

app.use('*', notFoundHandler); // app.use get applied to every request (global middleware)
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`));
}

module.exports = { // is how we pass objects around in node.js 
  app: app,
  start: start,
};
