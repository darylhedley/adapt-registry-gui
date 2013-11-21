
/*
 * GET Plugin list
 */
var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

var getGithubDetail = function(user, repo, callback) {
    console.log(user, repo);
    github.repos.get({
        user: user,
        repo: repo 
    }, function(err, res) {
        return callback(res);
    });
}

exports.getGithubDetail = getGithubDetail;