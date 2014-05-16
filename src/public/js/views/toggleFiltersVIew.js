define(function(require) {

	var Backbone = require('backbone');

	var Hub = require('js/hub');

	var ToggleFiltersView = Backbone.View.extend({

		el:".toggle-filters",


		events: {
			"click .hide-filters": "hideFilters",
			"click .show-filters": "showFilters"
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			var template = Handlebars.templates["toggleFilters"];
			this.$el.html(template());
			return this;
		},

		hideFilters: function() {
			this.$('.hide-filters').addClass('display-none');
			this.$('.show-filters').removeClass('display-none');
			Hub.trigger('filters:hide');
		},

		showFilters: function() {
			this.$('.show-filters').addClass('display-none');
			this.$('.hide-filters').removeClass('display-none');
			Hub.trigger('filters:show');
		}

	});

		return ToggleFiltersView;
})