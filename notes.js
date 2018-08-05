// Notes from Ian

var fetch = require('isomorphic-fetch');
require('dotenv').config();

  var options = {
    headers: {
      'X-Api-Key': process.env.API_KEY || 'API_KEY'
    }
  };

 
function getSuiteIds(){

  var url = 'https://api.getpostman.com/collections';

  var suiteIds = [];
  fetch(url, options)
    .then(response => {
      if (response.status !== 200) {
        throw new Error();
      }
      return response.json();
    })
    .then(info => {
      length = Object.keys(info.collections).length;
      for (var i = 0; i < length; i++) {
        if(info.collections[i].name.includes('WIP')===false){
          suiteIds.push(info.collections[i].id);
        }
      }
      return suiteIds;
    })
    .then(() => {
      console.log(suiteIds);
    })
    .catch(console.error);
}
getSuiteIds();









