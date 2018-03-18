'use strict';

const db = require("../db.js")

module.exports.updateDog = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const DogID = parseInt(event.pathParameters.DogID);
    const body = (event.body);
    db.result('UPDATE public."Dogs" SET "FirstName" = $2, "LastName" = $3 WHERE "DogID" = $1', [DogID, body.FirstName, body.LastName])
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
