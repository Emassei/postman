var request = require('request');
var newman = require('newman');

require('dotenv').config();

apiKey = process.env.API_KEY || 'API_KEY';

collectionUrl = 'https://api.getpostman.com/collections/';
environmentUrl= 'https://api.getpostman.com/environments/';
params = "\?apikey\=";


collectionId = process.env.COLLECTION_ID || 'COLLECTION_ID';
environmentId = process.env.ENVIRONMENT_ID || 'ENVIRONMENT_ID';

newman.run({
  collection: collectionUrl + collectionId + params + apiKey,
  environment: environmentUrl +environmentId + params + apiKey,
  reporters: 'cli',
  noColor: true
}, function (err) {
  if (err) { throw err; }
  console.log('collection run complete!');
});