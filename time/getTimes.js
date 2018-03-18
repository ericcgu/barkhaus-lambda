'use strict';

const db = require("../db.js")

module.exports.getTimes = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  db.any('SELECT * FROM public."Times";')
  .then(function (data) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(data)
    };
    callback(null, response);
  })
  .catch(function (err) {
    callback(err);
  });
};

