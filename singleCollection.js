var request = require('request');
require('dotenv').config();

collectionId = process.env.COLLECTION_ID || 'COLLECTION_ID';

var options = {
  url: 'https://api.getpostman.com/collections/'+collectionId,
  headers: {
    'X-Api-Key': process.env.API_KEY || 'API_KEY'
  }
};
 
function callback(error, response, body) {
if (!error && response.statusCode == 200) {
  var info = JSON.parse(body);
    console.log(JSON.stringify(info, null, 4));
  }
}

 
request(options, callback);