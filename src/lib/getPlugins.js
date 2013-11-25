/*
 * GET Plugin list
 */

var http = require('http');
var _ = require('underscore');
var GitHubApi = require("github");
var url = 'http://adapt-bower-repository.herokuapp.com/packages/';
var jsonResponse;
var jsonData;
var pluginCount;
var pluginLength;
var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 1000
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
            pluginCount = 0;
            pluginLength = jsonData.length;
            
            findGithubAccount(callback);
            
        });
        
    });
    
}

var findGithubAccount = function(callback) {
    var currentUser = jsonData[pluginCount].url.split('/')[3];
    var currentPluginName = jsonData[pluginCount].name;
    getGithubDetail(currentUser, currentPluginName, function(response) {
        jsonData[pluginCount].stargazers_count = response.stargazers_count;
        jsonData[pluginCount].html_url = response.html_url;
        jsonData[pluginCount].description = response.description;
        jsonData[pluginCount].open_issues_count = response.open_issues_count;
        jsonData[pluginCount].open_issues = response.open_issues;
        jsonData[pluginCount].watchers = response.watchers;
        jsonData[pluginCount].subscribers_count = response.subscribers_count;
        pluginCount ++;
        if (pluginCount < pluginLength) {
            var currentUser = jsonData[pluginCount].url.split('/')[3];
            var currentPluginName = jsonData[pluginCount].name;
            findGithubAccount(callback);
        } else {
            return callback(jsonData);
        }
    });
}



var getGithubDetail = function(user, repo, callback) {
    console.log(user, repo);
    github.repos.get({
        user: user,
        repo: repo 
    }, function(err, response) {
        if (err) {
            console.log('getting error')
            return callback({
                stargazers_count:undefined,
                html_url:undefined,
                description:undefined,
                open_issues_count:undefined,
                open_issues:undefined,
                watchers:undefined,
                subscribers_count:undefined
            })
        }
        return callback(response);
    });
}

exports.getPlugins = getPlugins;