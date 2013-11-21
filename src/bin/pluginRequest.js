/*
 * GET Plugin list
 */
var http = require('http');
var url = 'http://adapt-bower-repository.herokuapp.com/packages/';
var jsonResponse;
http.get(url, function(response) {
    var body = '';
    response.on('data', function(chunk) {
        body += chunk;
    });
    response.on('end', function() {
        jsonResponse = JSON.parse(body)
        exports.plugins = jsonResponse;
    });
}).on('error', function(e) {
      console.log("Got error: ", e);
});