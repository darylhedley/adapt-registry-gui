require.config({
    baseUrl: "",
    paths: {
        jquery: 'js/libraries/jquery',
        underscore: 'js/libraries/underscore',
        backbone: 'js/libraries/backbone',
        modernizr: 'js/libraries/modernizr',
        handlebars: 'js/libraries/handlebars',
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