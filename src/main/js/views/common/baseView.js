define(function() {
  /**
   * Base View extended from Backbone view with common functionality.
   */
  var BaseView = Backbone.View.extend({
    initialize : function(options) {
      if (options && options.trackChanges) {
        if (this.model)
          this.model.on('change', this.render, this);
        else if (this.collection)
          this.collection.on('change', this.render, this);
      }
    },
    render : function(args) {
      this.preRender();
      
      var json = (this.model ? this.model.toJSON() : (this.collection ? this.collection.toJSON() : {}));
      
      this.$el.html(this.template(json));
      
      if (args && args.el)
    	$(args.el).html(this.$el);
      
      this.postRender();
    }
  });
  
  return BaseView;
});