define([
    "underscore",
    "backbone",
    "js/hub"
], function(_, Backbone, Hub) {
    
    console.log(Backbone)
    var Plugins = Backbone.Collection.extend({
        
        initialize: function() {
            this.sortedBy = "name";
            this.on('reset', this.collectionLoaded, this);
            this.fetch({
                reset:true
            });
        },
        
        comparator: function(collection) {
            return collection.get(this.sortedBy);
        },
        
        url:'api/plugins',
        
        collectionLoaded: function() {
            console.log(this);
            Hub.trigger('plugins:loaded');
        }
        
    });
    
    return Plugins;
    
});