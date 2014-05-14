var express = require('express');
var http = require('http');
var app = express();
var _ = require('underscore');
/*var pluginRequest = require('./lib/pluginRequest');
var githubRequest = require('./lib/githubRequest');*/
var fs = require('fs');

if (!fs.existsSync('config/config.json')) {
    return console.log('ERROR: Please copy the sampleConfig.json and rename to config.json - then fill out with your github details');
}

var plugins = require('./lib/getPlugins');

app.use(app.router);
app.use('/', express.static(__dirname + '/public'));
//app.use(express.static('./public'));
app.locals.pretty = true;

app.get('/api/plugins', function(req, res) {
    plugins.getPlugins(function(plugins) {
        res.json(plugins);
    });
});

http.createServer(app).listen(4000, function() {
    console.log('Registry running on localhost:4000');
})