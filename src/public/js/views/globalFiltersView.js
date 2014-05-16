define(function(require) {

	var Backbone = require('backbone');

	var Hub = require('js/hub');

	var GlobalFiltersView = Backbone.View.extend({

		el:".global-filters",

        events: {
            "click .search-button": "searchPlugins",
            "keyup": "searchPlugins"
        },

        initialize: function() {
        	this.listenTo(Hub, 'filters:hide', this.hideFilter);
        	this.listenTo(Hub, 'filters:show', this.showFilter);
            this.render();
        },
        
        render: function() {
            var template = Handlebars.templates["globalFilters"];
            this.$el.html(template());
            return this;
        },

        hideFilter: function() {
        	this.$el.addClass('display-none');
        },

        showFilter: function() {
        	this.$el.removeClass('display-none');
        },

        searchPlugins: function() {

            // Get value from search input and convert to lower case
            var searchValue = $('input.global-filter-search').val().toLowerCase();

            // Check there is a value
            if (searchValue.length == 0) {
                return;
            }

            // Store all the plugins and add class of display none

            var $plugins = $('.plugin').addClass('display-none');

            // Go through each plugin and get the plugin-name text to lower case
            $plugins.each(function() {

                var pluginName = $(".plugin-name", this).text().toLowerCase();

                // Compare the search value with the plugin name and remove class of display none if there's a match
                if (pluginName.indexOf(searchValue) != -1) {
                    $(this).removeClass('display-none');
                };

            });

        },
        
    });
    
    return GlobalFiltersView;

})