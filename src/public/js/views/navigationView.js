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

            var $menuItems = this.$('.mobile-menu-items-container');
            //toggle class of 'menu-close' on menu items
            $menuItems.toggleClass('menu-closed');
        }
        
    });
    
    return NavigationView;

});