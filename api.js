var request = require('request');
var newman = require('newman');

require('dotenv').config();

newmanUrl = 'https://api.getpostman.com/collections/';
params = "\?apikey\=";

environmentId = process.env.ENVIRONMENT_ID || 'ENVIRONMENT_ID';
apiKey = process.env.API_KEY || 'API_KEY';



var options = {
  url: 'https://api.getpostman.com/collections',
  headers: {
    'X-Api-Key': apiKey
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    length = Object.keys(info.collections).length;
    for (var i = 0; i < length; i++) {
      console.log(info.collections[i].uid + ' ' + info.collections[i].name);
    }
  }
}
 
request(options, callback);