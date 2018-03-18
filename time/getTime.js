'use strict';

const db = require("../db.js")

module.exports.getTime = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const TimeID = parseInt(event.pathParameters.TimeID);
    db.one('SELECT * from public."Times" WHERE "TimeID" = $1', TimeID)
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

