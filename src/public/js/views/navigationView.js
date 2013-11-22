define(["backbone", "handlebars"], function(Backbone, Handlebars) {

    var NavigationView = Backbone.View.extend({
    
        initialize: function() {
            this.render();
        },
        
        render: function() {
            var template = Handlebars.templates["navigation"];
            this.$el.html(template()).appendTo("#wrapper");
            return this;
        }
        
    });
    
    return NavigationView;

});