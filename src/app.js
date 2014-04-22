var express = require('express');
var http = require('http');
var app = express();
var _ = require('underscore');
/*var pluginRequest = require('./lib/pluginRequest');
var githubRequest = require('./lib/githubRequest');*/
var plugins = require('./lib/getPlugins');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(app.router);
app.use(express.static('./public'));
app.locals.pretty = true;

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api/plugins', function(req, res) {
    plugins.getPlugins(function(plugins) {
        res.json(plugins);
    });
});

http.createServer(app).listen(4000, function() {
    console.log('app running');
})