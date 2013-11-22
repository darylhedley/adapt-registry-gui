this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navigation-inner\">\n    <a href=\"#\">Plugins</a>\n    <a href=\"#/most-used\">Most used</a>\n    <a href=\"#/most-starred\">Most starred</a>\n</div>";
  });

this["Handlebars"]["templates"]["plugin"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"plugin\">\n    <div class=\"plugin-inner\">\n        <div class=\"plugin-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class=\"plugin-hits\">";
  if (stack1 = helpers.hits) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hits; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class=\"plugin-stars\">";
  if (stack1 = helpers.stargazers_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stargazers_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <a class=\"plugin-git\">";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        <div class=\"plugin-created\">";
  if (stack1 = helpers.createdAt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.createdAt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <div class=\"plugin-updated\">";
  if (stack1 = helpers.updatedAt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.updatedAt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n        <a href=\"";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" class=\"plugin-url\">";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.html_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </div>    \n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["plugins"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"plugin\">\n    <div class=\"plugin-inner\">\n        <a href=\"#/plugin/";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        <div>";
  if (stack1 = helpers.hits) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hits; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n    </div>    \n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.plugins, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });