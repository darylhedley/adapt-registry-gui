define(["backbone", "handlebars", "js/hub", "templates"], function(Backbone, Handlebars, Hub) {

    var PluginsView = Backbone.View.extend({
        
        className: "plugins",
    
        initialize: function() {
            console.log('view created');
            this.listenTo(Hub, "remove", this.remove);
            this.render();
        },
        
        render: function() {
            var data = this.collection.toJSON();
            var template = Handlebars.templates["plugins"];
            this.$el.html(template({plugins:data})).appendTo("#wrapper");
            return this;
        }
    
    });
    
    return PluginsView;

});