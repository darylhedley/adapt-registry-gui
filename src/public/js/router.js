/*
* Router
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley
*/

define(["backbone", "js/hub", "views/pluginsView"], function(Backbone, Hub, PluginsView) {

    var Router = Backbone.Router.extend({
    
        initialize: function() {
            this.showLoading();
        },
        
        routes: {
            "":"index",
            "plugin/:id":"handlePlugin",
            "most-used":"handleMostUsed",
            "most-starred":"handleMostStarred",
            "most-watched":"handleMostWatched"
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
        
        handleMostUsed: function() {
            this.removeViews();
            var sortedModels = Hub.plugins.sortBy(function(model){ 
                return -model.get('hits');
            }, this);
            
            var sortedCollection = new Backbone.Collection(sortedModels);
            new PluginsView({collection:sortedCollection});
        },
        
        handleMostStarred: function() {
            this.removeViews();
            var sortedModels = Hub.plugins.sortBy(function(model){ 
                return -model.get('stargazers_count');
            }, this);
            
            var sortedCollection = new Backbone.Collection(sortedModels);
            new PluginsView({collection:sortedCollection});
        },
        
        handleMostWatched: function() {
            this.removeViews();
            var sortedModels = Hub.plugins.sortBy(function(model){ 
                return -model.get('watchers');
            }, this);
            
            var sortedCollection = new Backbone.Collection(sortedModels);
            new PluginsView({collection:sortedCollection});
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