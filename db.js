var promise = require('bluebird');
var secretConfig = require('./secretConfig')

var options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = secretConfig.connectionString;
const db = pgp(connectionString);

module.exports = db;