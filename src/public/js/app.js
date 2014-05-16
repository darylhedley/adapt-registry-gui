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
    'views/navigationView',
    "views/globalFiltersView",
    "views/typeFiltersView",
    "views/toggleFiltersView",
    "js/plugins",
    "js/hub",
    "js/router",
    "handlebars"
], function (NavigationView, GlobalFiltersView, TypeFiltersView, ToggleFiltersView, Plugins, Hub, Router) {
    
    new Router();
    new NavigationView();
    new GlobalFiltersView();
    new TypeFiltersView();
    new ToggleFiltersView();

    $('.loading').animate({opacity:1, top:0});
    
    Hub.once('plugins:loaded', function() {
        $('.loading').animate({opacity:0, top:'-20px'}, function() {
            $(this).hide();
            Backbone.history.start();
            Hub.trigger('plugins:show');
        });
    });
    
    Hub.plugins = new Plugins();
    
});
