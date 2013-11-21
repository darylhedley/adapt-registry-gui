var express = require('express');
var http = require('http');
var app = express();
var _ = require('underscore');
var pluginRequest = require('./bin/pluginRequest');
var githubRequest = require('./bin/githubRequest');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(app.router);
app.use(express.static('./public'));
app.locals.pretty = true;



app.get('/', function(req, res) {
    var plugins = _.sortBy(pluginRequest.plugins, function(plugin){ return plugin.name; });
    res.render('index', {plugins: plugins});
});

app.get('/:id', function(req, res, next) {
    var currentPlugin = _.findWhere(pluginRequest.plugins, {name:req.params.id});
    if (currentPlugin != undefined) {
        var currentUser = currentPlugin.url.split('/')[3];
        var currentPluginName = currentPlugin.name;
        githubRequest.getGithubDetail(currentUser, currentPluginName, function(githubResponse){
            currentPlugin.stargazers_count = githubResponse.stargazers_count;
            currentPlugin.open_issues = githubResponse.open_issues;
            console.log(githubResponse);
            res.render('plugin', currentPlugin);
        });
    } else {
        next();
    }
});

app.get('/starred', function(req, res) {
    var starredPlugins = _.sortBy(pluginRequest.plugins, function(plugin){ return -plugin.hits; });
    console.log(starredPlugins);
    //var starredPlugins = _.findWhere(pluginRequest.plugins, {name:req.params.id});
    res.render('starred', {plugins: starredPlugins});
});

http.createServer(app).listen(3030, function() {
    console.log('app running');
})