// Use this as a quick template for future modules
define(['events'], function(Events) {
  var views = [];
  var create = function (context, name, View, options) {
    var foundView = views[name];
    
    // View clean up isn't actually implemented yet but will simply call .clean, .remove and .unbind
    if (typeof foundView !== 'undefined') {
      //console.log('Vm - foundView ==>>' + foundView);
      remove(context, foundView);
    }
    
    var view = new View(options);
    view._name = name;
    views[name] = view;
    
    if (typeof context.children === 'undefined')
      context.children = {};
    
    context.children[name] = view;
    
    Events.trigger('viewCreated');
    
    return view;
  };
  
  var remove = function (context, view) {
    if (typeof view !== 'object')
      view = context.children[view];
    
    //console.log('Vm - remove ==>>' + view);
    
    view.undelegateEvents();
    view.$el.empty();
    view.unbind();
    
    if (typeof view.remove === 'function')
      view.remove();
    
    Events.trigger('viewRemoved');
    
    delete views[view._name];
  };
  
  return {
    create : create,
    remove : remove
  };
});