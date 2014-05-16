define(["backbone", "handlebars", "js/hub", "templates"], function(Backbone, Handlebars, Hub) {

    var PluginsView = Backbone.View.extend({
        
        className: "plugins",
    
        initialize: function() {
            this.listenTo(Hub, "remove", this.remove);
            this.listenTo(Hub, 'plugins:show', this.render);
        },
        
        render: function() {
            var data = this.collection.toJSON();
            var template = Handlebars.templates["plugins"];
            this.$el.html(template({plugins:data})).appendTo("#wrapper");
            _.defer(_.bind(function() {
                this.$('.plugin').animate({opacity:1});
            }, this));
            return this;
        }

    });

    return PluginsView;

});