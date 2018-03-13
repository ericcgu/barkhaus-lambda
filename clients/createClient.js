'use strict';

const db = require("../db.js")

module.exports.createClient = (event, context, callback) => {
    const body = JSON.parse(event.body);
    db.none('INSERT INTO public."Clients"("FirstName", "LastName") VALUES(${FirstName}, ${LastName})',
      body)
      .then(function (result) {
        const response = {
            statusCode: 200,
            body: JSON.stringify(result)
        };
        callback(null, response);
    })
    .catch(function (err) {
      return err;
    });
};