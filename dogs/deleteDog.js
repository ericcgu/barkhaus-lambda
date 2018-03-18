'use strict';

const db = require("../db.js")

module.exports.deleteDog = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const DogID = parseInt(event.pathParameters.DogID);
    db.result('DELETE FROM public."Dogs" WHERE "DogID" = $1', DogID)
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