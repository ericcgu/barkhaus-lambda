'use strict';

const db = require("../db.js")

module.exports.deleteClient = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const ClientID = parseInt(event.pathParameters.ClientID);
    db.result('DELETE FROM public."Clients" WHERE "ClientID" = $1', ClientID)
        .then(function (result) {
            const response = {
                statusCode: 200,
                body: JSON.stringify(result)
            };
            callback(null, response);
        })
        .catch(function (err) {
            callback(err);
        });
};