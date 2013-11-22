define(["backbone", "handlebars", "js/hub", "templates"], function(Backbone, Handlebars, Hub) {

    var PluginView = Backbone.View.extend({
        
        className: "plugin",
    
        initialize: function() {
            this.listenTo(Hub, "remove", this.remove);
            this.render();
        },
        
        render: function() {
            var data = this.model.toJSON();
            var template = Handlebars.templates["plugin"];
            this.$el.html(template(data)).appendTo("#wrapper");
            return this;
        }
    
    });
    
    return PluginView;

});