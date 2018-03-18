'use strict';

const db = require("../db.js")

module.exports.updateTime = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const TimeID = parseInt(event.pathParameters.TimeID);
    const body = (event.body);
    db.result('UPDATE public."Times" SET "FirstName" = $2, "LastName" = $3 WHERE "TimeID" = $1', [TimeID, body.FirstName, body.LastName])
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
