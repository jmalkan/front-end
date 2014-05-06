require(['config'], function(Config) {
  // Let's kick off the application.
  
  require(['boilerplate', 'views/app', 'router', 'vm'], function(Boilerplate, AppView, Router, Vm) {
    //Setup Backbone
    //Backbone.emulateHTTP = true;
    
    //Setup Ajax
    $.ajaxSetup({
      cache : false,
      timeout : 60000
    });
    
    //common error handling.
    $(document)ajaxError(function(jqXHR, error, errorThrown) {
      if (error.status != 400 && error.ststus != 412 && errorThrown.url.search('keepAlive') == -1)
        return;
    })
    
    var appView = Vm.create({}, 'AppView', AppView);
    appView.render();
    
    Router.initialize({appView: appView});  // The router now has a copy of all main appview
  });
});