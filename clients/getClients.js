'use strict';

const db = require("../db.js")

module.exports.getClients = (event, context, callback) => {
  db.any('SELECT * FROM public."Clients";')
  .then(function (data) {
    const response = {
      statusCode: 200,
      body: data
      ,
    };
    callback(null, response);
  })
  .catch(function (err) {
    return next(err);
  });
};
