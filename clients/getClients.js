'use strict';

module.exports.getClients = (event, context, callback) => {
  const message = 'Thanks for hitting the get route.';
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
