/*
* ScriptLoader
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley
*/

Modernizr.load([
    {
        test: window.JSON,
        nope: 'core/js/vendor/json2.js'
    },
    {
        test: Modernizr.video || Modernizr.audio,
        nope: 'core/js/vendor/swfObject.js',
        complete: function() {
            yepnope.injectJs("js/libraries/require.js", function () {   
            }, {
                type:"text/javascript",
                language:"javascript",
                "data-main":"js/app.js"
            }, 5000);
        }
    }
]);