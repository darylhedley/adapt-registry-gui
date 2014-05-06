this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["globalFilters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"global-filters-inner\">\n	<a class=\"global-filter-container\" href=\"#\">\n		<div class=\"global-filter-container-inner\">\n			<span class=\"global-filter-title icon-powercord\"> Plugins</span>\n		</div>\n	</a>\n\n    <a class=\"global-filter-container\" href=\"#/most-used\">\n		<div class=\"global-filter-container-inner\">\n			<span class=\"global-filter-title icon-download\"> Most used</span>\n		</div>\n	</a>\n\n    <a class=\"global-filter-container\" href=\"#/most-starred\">\n		<div class=\"global-filter-container-inner\">\n			<span class=\"global-filter-title icon-star2\"> Most starred</span>\n		</div>\n	</a>\n\n    <a class=\"global-filter-container\" href=\"#/most-watched\">\n    	<div class=\"global-filter-container-inner\">\n			<span class=\"global-filter-title icon-eye\"> Most watched</span>\n		</div>\n	</a>\n	\n	<a class=\"global-filter-container\">\n		<input type=\"search\" name\"search_plugins\" placeholder=\"Search\" class=\"global-filter-search\">\n	</a>\n</div>";
  });

this["Handlebars"]["templates"]["navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"global-filters\">\n	\n</div>\n\n<div class=\"plugin-type-filters\">\n	\n	\n	<div class=\"hide-filters\"> > Hide filters</div>\n	<div class=\"show-filters\"> > Show filters</div>\n</div>\n";
  });

this["Handlebars"]["templates"]["plugin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"plugin\">\n    <div class=\"plugin-inner\">\n        <div class=\"plugin-type-tab\">\n            <div class=\"plugin-stars\">";
  if (stack1 = helpers.stargazers_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stargazers_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"plugin-hits\">";
  if (stack1 = helpers.hits) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hits; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </div>\n        <div class=\"plugin-body-holder\">\n            <div class=\"plugin-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"plugin-description\">\n            	";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n            <a class=\"plugin-git\">";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n            <div class=\"plugin-created\">";
  if (stack1 = helpers.createdAt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.createdAt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"plugin-updated\">";
  if (stack1 = helpers.updatedAt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.updatedAt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <a href=\"";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" class=\"plugin-url\">";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </div>\n    </div>    \n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["plugins"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"plugin ";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"plugin-inner\">\n        <div class=\"plugin-type-tab\">\n        	<div class=\"plugin-type\">\n                <div class=\"plugin-type-icon icon-powercord\"></div>   \n            </div>\n            <div class=\"plugin-hits icon-uniE600\"> ";
  if (stack1 = helpers.hits) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hits; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"plugin-stars icon-share\"> ";
  if (stack1 = helpers.stargazers_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stargazers_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        </div>\n        <div class=\"plugin-body-holder\">\n            <div class=\"plugin-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"plugin-description\">\n            	";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n            "
    + "\n            <div class=\"git-hub-footer\">\n                <div class=\"git-hub-author\">Git Hub Author</div>\n                <a href=\"";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"git-hub-link\">GitHub</a>\n            </div>\n        </div>\n    </div>    \n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.plugins, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["toggleFilters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"hide-filters\"> > Hide filters</div>\n<div class=\"show-filters display-none\"> > Show filters</div>";
  });

this["Handlebars"]["templates"]["typeFilters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"plugin-type-filters-inner\">\n	<a class=\"filter-type-container all\" href=\"#\">\n		<div class=\"filter-type-container-inner\">\n			<div class=\"filter-type all\">\n				<div class=\"filter-type-icon icon-powercord\"></div>\n			</div>\n		</div>\n		<span class=\"filter-type-title\">All</span>	\n	</a>\n\n    <a class=\"filter-type-container theme\" href=\"#\">\n    	<div class=\"filter-type-container-inner\">\n			<div class=\"filter-type theme\">\n				<div class=\"filter-type-icon icon-paint-format\"></div>\n			</div>\n		</div>\n		<span class=\"filter-type-title\">Theme</span>\n	</a>\n\n    <a class=\"filter-type-container extension\" href=\"#\">\n    	<div class=\"filter-type-container-inner\">\n			<div class=\"filter-type extension\">\n				<div class=\"filter-type-icon icon-tree\"></div>\n			</div>\n		</div>\n		<span class=\"filter-type-title\">Extension</span>\n	</a>\n\n    <a class=\"filter-type-container component\" href=\"#\">\n    	<div class=\"filter-type-container-inner\">\n			<div class=\"filter-type component\">\n				<div class=\"filter-type-icon icon-cogs\"></div>\n			</div>\n		</div>\n		<span class=\"filter-type-title\">Component</span>\n	</a>\n\n    <a class=\"filter-type-container menu\" href=\"#\">\n    	<div class=\"filter-type-container-inner\">\n			<div class=\"filter-type menu\">\n				<div class=\"filter-type-icon icon-file\"></div>\n			</div>\n		</div>\n		<span class=\"filter-type-title\">Menu</span>\n	</a>\n</div>";
  });