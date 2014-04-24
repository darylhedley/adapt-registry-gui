/*
 * GET Plugin list
 */

var http = require('http');
var _ = require('underscore');
var GitHubApi = require("github");
var url = 'http://adapt-bower-repository.herokuapp.com/packages/';
var config = require('../config/config.json');
var jsonResponse;
var jsonData;
var pluginCount;
var pluginLength;
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 2000
});

github.authenticate({
    type: "basic",
    username: config.username,
    password: config.password
});

var getPlugins = function(callback) {
    
    if (jsonResponse) return callback(jsonResponse);
    
    http.get(url, function(response) {
        
        var body = '';
        
        response.on('data', function(chunk){
            body += chunk;
        });
        
        response.on('end', function() {
            jsonData = JSON.parse(body); 
            getGithubDetail(callback);           
        });
        
    });
    
}

var getGithubDetail = function(callback) {
    var pluginLength = jsonData.length;
    var pluginCount = 0;
    _.each(jsonData, function(plugin, index) {
        var currentUser = plugin.url.split('/')[3];
        var currentPluginName = plugin.name;
        github.repos.get({
            user: currentUser,
            repo: currentPluginName 
        }, function(err, response) {
            pluginCount++;
            if (err) {
                jsonData[index].stargazers_count = undefined;
                jsonData[index].html_url = undefined;
                jsonData[index].description = undefined;
                jsonData[index].open_issues_count = undefined;
                jsonData[index].open_issues = undefined;
                jsonData[index].watchers = undefined;
                jsonData[index].subscribers_count = undefined;

            } else {
                jsonData[index].stargazers_count = response.stargazers_count;
                jsonData[index].html_url = response.html_url;
                jsonData[index].description = response.description;
                jsonData[index].open_issues_count = response.open_issues_count;
                jsonData[index].open_issues = response.open_issues;
                jsonData[index].watchers = response.watchers;
                jsonData[index].subscribers_count = response.subscribers_count;
            }
            if (pluginCount === pluginLength) {
                return callback(jsonData);
            }

        });

    });

    

}

exports.getPlugins = getPlugins;