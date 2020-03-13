const config = require('./src/config');
module.exports = config.knex;

require('dotenv/config');
const http = require('http');
const port =  process.env.PORT || 3000;
http.createServer().listen(port)
