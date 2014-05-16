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
            var $menuItems = this.$('.menu-items-container');

            $menuItems.toggleClass('menu-closed');

                // if(!$menuItems.hasClass('menu-closed')) {
                //     return;
                // } else if($menuItems.hasClass('menu-closed')) {
                //     $menuItems.slideDown(800).removeClass('menu-closed');
                // };
        }
        
    });
    
    return NavigationView;

});