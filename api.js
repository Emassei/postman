var request = require('request');
require('dotenv').config();

var options = {
  url: 'https://api.getpostman.com/collections',
  headers: {
    'X-Api-Key': process.env.API_KEY || 'API_KEY'
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    length = Object.keys(info.collections).length;
    for (var i = 0; i < length; i++) {
      console.log(info.collections[i].id + ' - ' +
        info.collections[i].name);
    }
  }
}
 
request(options, callback);