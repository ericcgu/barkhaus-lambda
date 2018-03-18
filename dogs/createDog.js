'use strict';

const db = require("../db.js")

module.exports.createDog = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const body = JSON.parse(event.body);
    db.none('INSERT INTO public."Dogs"("DogName", "ClientId") VALUES(${DogName}, ${ClientId})',
            body)
        .then(function () {
            const response = {
                statusCode: 200,
                body: JSON.stringify(body)
            };
            callback(null, response);
        })
        .catch(function (err) {
            callback(JSON.stringify(err));
        });
};

