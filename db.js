var promise = require('bluebird');
var secretConfig = require('./secretConfig')

var options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = secretConfig.connectionString;
const db = pgp(connectionString);


  function getClient(req, res, next) {
    var clientID = parseInt(req.params.clientID);
    db.one('SELECT * from public."Clients" where "ClientID" = $1', clientID)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved Client'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }  

  function createClient(req, res, next) {
    //req.body.age = parseInt(req.body.age);
    db.none('insert into public."Clients"("FirstName", "LastName", "Email", "Phone", "Address", "City", "State", "ZipCode")' +
        'VALUES(${FirstName}, ${LastName}, ${Email}, ${Phone}, ${Address}, ${City}, ${State}, ${ZipCode})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Added Client'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function updateClient(req, res, next) {
    db.none('update public."Clients" set "FirstName"=$1, "LastName"=$2 where "ClientID"=$3',
      [req.body.FirstName, req.body.LastName, parseInt(req.params.clientID)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated Client'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }


// Dogs
function getDogs(req, res, next) {
    db.any('SELECT * FROM public."Dogs";')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL Dogs'
          });

      })
      .catch(function (err) {
        return next(err);
      });
  }

  module.exports = db;