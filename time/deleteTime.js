'use strict';

const db = require("../db.js")

module.exports.deleteTime = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const TimeID = parseInt(event.pathParameters.TimeID);
    db.result('DELETE FROM public."Times" WHERE "TimeID" = $1', TimeID)
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