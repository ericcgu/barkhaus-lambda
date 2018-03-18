'use strict';

const db = require("../db.js")

module.exports.updateClient = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const ClientID = parseInt(event.pathParameters.ClientID);
    const body = (event.body);
    db.result('UPDATE public."Clients" SET "FirstName" = $2, "LastName" = $3 WHERE "ClientID" = $1', [ClientID, body.FirstName, body.LastName])
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
