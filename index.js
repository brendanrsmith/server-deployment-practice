'use strict';

require('dotenv').config();

const server = require('./server-deployment-practice');

server.start(process.env.PORT);