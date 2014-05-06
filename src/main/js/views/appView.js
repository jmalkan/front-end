define(['vm', 'text!templates/layout.html'], function(Vm, layoutTemplate) {
  var AppView = Backbone.View.extend({
    el: '.container',
    initialize: function () {
      /*
      var NestedView2 = Backbone.View.extend({});
      var NestedView1 = Backbone.View.extend({
        initialize: function () {
          Vm.create(this, 'Nested View 2', NestedView2);
        }
      });
      
      Vm.create(this, 'Nested View 1', NestedView1);
      */
    },
    render: function () {
      var that = this;
      
      $(this.el).html(layoutTemplate);
      
      require(['views/common/header'], function (HeaderView) {
        // Pass the appView down into the footer so we can render the visualisation
        var headerView = Vm.create(that, 'HeaderView', HeaderView, {appView: that});
        //headerView.render();
        //that.$el.find('.header').html(headerView.render().$el);
        headerView.render({el : '.header'});
      });
      
      require(['views/common/footer'], function (FooterView) {
        // Pass the appView down into the footer so we can render the visualisation
        var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
        //footerView.render();
        //that.$el.find('.footer').html(footerView.render().$el);
        footerView.render({el : '.footer'});
      });
    }
  });
  
  return AppView;
});