'use strict';
const db = require("../db.js")
module.exports.createClient = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const body = JSON.parse(event.body);
    db.none('INSERT INTO public."Clients"("FirstName", "LastName") VALUES(${FirstName}, ${LastName})',
            body)
        .then(function () {
            const response = {
                statusCode: 200,
                body: JSON.stringify(body)
            };
            callback(null, response);
        })
        .catch(function (err) {
            return err;
        });
};