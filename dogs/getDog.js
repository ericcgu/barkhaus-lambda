'use strict';

const db = require("../db.js")

module.exports.getDog = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const DogID = parseInt(event.pathParameters.DogID);
    db.one('SELECT * from public."Dogs" WHERE "DogID" = $1', DogID)
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

