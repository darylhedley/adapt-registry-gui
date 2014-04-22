/*
* App
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley
*/

require.config({
    baseUrl: "",
    paths: {
        jquery: 'js/libraries/jquery',
        underscore: 'js/libraries/underscore',
        backbone: 'js/libraries/backbone',
        modernizr: 'js/libraries/modernizr',
        handlebars: 'js/libraries/handlebars',
        imageReady: 'js/libraries/imageReady',
        inview: 'js/libraries/inview',
        scrollTo: 'js/libraries/scrollTo',
        views: 'js/views',
        models: 'js/models',
        collections: 'js/collections',
        templates: 'templates/templates'
    },
    shim: {
        jquery: [

        ],
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    "views/navigationView",
    "js/plugins",
    "js/hub",
    "js/router",
    "handlebars"
], function (NavigationView, Plugins, Hub, Router) {
    console.log('Running');
    
    new Router();
    new NavigationView();
    
    Hub.once('plugins:loaded', function() {
        console.log('plugins loaded');
        $('.loading').fadeOut();
        Backbone.history.start();
    });
    
    Hub.plugins = new Plugins();
    
});
