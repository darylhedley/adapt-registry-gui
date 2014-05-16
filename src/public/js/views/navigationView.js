define(function(require) {

    var Backbone = require('backbone');

    var NavigationView = Backbone.View.extend({

        el:".navigation",

        initialize: function() {
        },

        events: {
            "click .mobile-menu-icon": "slideMenu"
        },

        slideMenu: function() {
            console.log('slide menu event');
            var $menuItems = this.$('.mobile-menu-items-container');

            $menuItems.toggleClass('menu-closed');
        }
        
    });
    
    return NavigationView;

});