define(function(require) {

	var Backbone = require('backbone');

	var Hub = require('js/hub');

	var GlobalFiltersView = Backbone.View.extend({

		el:".global-filters",
    
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
        	console.log('hide-filters');
        	this.$el.addClass('display-none');
        },

        showFilter: function() {
        	console.log('show-filters');
        	this.$el.removeClass('display-none');
        }
        
    });
    
    return GlobalFiltersView;

})