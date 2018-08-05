var request = require('request');
var newman = require('newman');

require('dotenv').config();

newmanUrl = 'https://api.getpostman.com/collections/';
params = "\?apikey\=";

apiKey = process.env.API_KEY || 'API_KEY';



var options = {
  url: 'https://api.getpostman.com/environments',
  headers: {
    'X-Api-Key': apiKey
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    length = Object.keys(info.environments).length;
    for (var i = 0; i < length; i++) {
      console.log(info);
    }
  }
}
 
request(options, callback);