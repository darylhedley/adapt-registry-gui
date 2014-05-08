define(function(require) {

	var Backbone = require('backbone');

	var Hub = require('js/hub');

	var TypeFiltersView = Backbone.View.extend({

		el:".type-filters",

		events: {
			"click .filter-type-container.all": "filterAll",
			"click .filter-type-container.theme": "filterThemes",
			"click .filter-type-container.extension": "filterExtensions",
			"click .filter-type-container.component": "filterComponents",
			"click .filter-type-container.menu": "filterMenus"
		},

		initialize: function() {
			this.listenTo(Hub, 'filters:hide', this.hideFilter);
			this.listenTo(Hub, 'filters:show', this.showFilter);
			this.render();
		},

		render: function() {
			var template = Handlebars.templates["typeFilters"];
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
		},

		filterAll: function(event) {
			event.preventDefault();
			console.log('filter-all');
			$('.plugin').removeClass('display-none');
		},

		filterThemes: function(event) {
			event.preventDefault();
			console.log('filter-themes');
			$('.plugin')
				.removeClass('display-none')
				.not('.theme')
				.addClass('display-none');
		},

		filterExtensions: function(event) {
			event.preventDefault();
			console.log('filter-extensions');
			$('.plugin')
				.removeClass('display-none')
				.not('.extension')
				.addClass('display-none');
		},

		filterComponents: function(event) {
			event.preventDefault();
			console.log('filter-components');
			$('.plugin')
				.removeClass('display-none')
				.not('.component')
				.addClass('display-none');
		},

		filterMenus: function(event) {
			event.preventDefault();
			console.log('filter-menus');
			$('.plugin')
				.removeClass('display-none')
				.not('.menu')
				.addClass('display-none');
		}

		
	});

	return TypeFiltersView;
})