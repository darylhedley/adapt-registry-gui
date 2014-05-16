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
            //jsonData = {};
            getGithubDetail(callback);           
        });
        
    });
    
}

var getGithubDetail = function(callback) {
    var pluginLength = jsonData.length;
    var githubDetailsCount = 0;
    var bowerDetailsCount = 0;
    _.each(jsonData, function(plugin, index) {
        var currentUser = plugin.url.split('/')[3];
        var currentPluginName = plugin.url.split('/')[4];
        currentPluginName = currentPluginName.split('.')[0];
        console.log(currentUser, currentPluginName);
        github.repos.get({
            user: currentUser,
            repo: currentPluginName 
        }, function(err, response) {
            githubDetailsCount++;
            console.log(response);
            if (err) {
                jsonData[index].owner = undefined;
                jsonData[index].stargazers_count = undefined;
                jsonData[index].html_url = undefined;
                jsonData[index].description = undefined;
                jsonData[index].open_issues_count = undefined;
                jsonData[index].open_issues = undefined;
                jsonData[index].watchers = undefined;
                jsonData[index].subscribers_count = undefined;

            } else {
                jsonData[index].owner = {};
                jsonData[index].owner.username = response.owner.login;
                jsonData[index].owner.avatar = response.owner.avatar_url;
                jsonData[index].owner.url = response.owner.html_url;
                jsonData[index].stargazers_count = response.stargazers_count;
                jsonData[index].html_url = response.html_url;
                jsonData[index].description = response.description;
                jsonData[index].open_issues_count = response.open_issues_count;
                jsonData[index].open_issues = response.open_issues;
                jsonData[index].watchers = response.watchers;
                jsonData[index].subscribers_count = response.subscribers_count;
            }
            if (githubDetailsCount === pluginLength && bowerDetailsCount === pluginLength) {
                return callback(jsonData);
            }

        });

        github.repos.getContent({
            user: currentUser,
            repo: currentPluginName,
            path:"bower.json"
        }, function(err, response) {
            bowerDetailsCount++;
            if (err) {
                jsonData[index].type = undefined;
            } else {
                if (response) {
                    var decodedJSON = new Buffer(response.content, 'base64').toString('utf8');
                    var parsedJSON = JSON.parse(decodedJSON);
                    var type;
                    if (_.contains(parsedJSON.keywords, 'adapt-extension')) {
                        type = 'extension';
                    } else if (_.contains(parsedJSON.keywords, 'adapt-theme')) {
                        type = 'theme';
                    } else if (_.contains(parsedJSON.keywords, 'adapt-menu')) {
                        type = 'menu';
                    } else if (_.contains(parsedJSON.keywords, 'adapt-component')) {
                        type = 'component';
                    }
                    jsonData[index].type = type;
                } else {
                    console.log("This plugin doesn't have a bower.json file", pluginName);
                }
            }
            if (githubDetailsCount === pluginLength && bowerDetailsCount === pluginLength) {
                return callback(jsonData);
            }

        });

    });

}

exports.getPlugins = getPlugins;