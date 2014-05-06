// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  //By default load modules Id from lib
  //baseUrl : 'lib',
  optimize : 'none',
  paths: {
    // Just a short cut so we can put our css/images/html outside the js dir
    // When you have HTML/CSS designers this aids in keeping them out of the js directory
	css : '/css',
	images : '/images',
	templates : '/templates',
	baseView : 'views/common/baseView',
	
    // Major libraries
    jquery : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
    backbone : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    underscore : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
    
    // Require.js plugins
    text: 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
  },
  shim : {
    'backbone' : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone' 
    },
    'baseView' : {
      deps : ['backbone'],
      exports : 'baseView'
    },
    'text' : {
      deps : ['backbone'],
      exports : 'text',
      useXhr : function(url, protocol, hostname, port) {
        //return true if you want to all ow this url, given that the
        //text plugin thinks the request is coming from protocol, hostname, port.
        return true;
      }
    }
  }

});