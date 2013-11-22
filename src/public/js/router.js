/*
* Router
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley
*/

define(["backbone", "js/hub", "views/pluginsView", "views/pluginView"], function(Backbone, Hub, PluginsView, PluginView) {

    var Router = Backbone.Router.extend({
    
        initialize: function() {
            this.showLoading();
        },
        
        routes: {
            "":"index",
            "plugin/:id":"handlePlugin"
        },
        
        index: function() {
            this.removeViews();
            new PluginsView({collection:Hub.plugins});
        },
        
        handlePlugin: function(name) {
            this.removeViews();
            console.log(name);
            var currentPlugin = Hub.plugins.findWhere({name:name});
            console.log(currentPlugin)
            new PluginView({model: currentPlugin});
        },
        
        removeViews: function() {
            Hub.trigger('remove');
        },
        
        showLoading: function() {
            $('.loading').fadeIn('fast');
        }
    
    });
    
    return Router;

});