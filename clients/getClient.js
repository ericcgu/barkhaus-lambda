'use strict';

const db = require("../db.js")

module.exports.getClient = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const ClientID = parseInt(event.pathParameters.ClientID);
    db.one('SELECT * from public."Clients" WHERE "ClientID" = $1', ClientID)
        .then(function (data) {
            const response = {
                statusCode: 200,
                body: JSON.stringify(data)
            };
            callback(null, response);
        })
        .catch(function (err) {
            return err;
        });
};

