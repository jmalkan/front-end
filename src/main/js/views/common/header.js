define(['text!templates/common/header.html'], function(headerTemplate) {
  var HeaderView = BaseView.extend({
    template : _.template(headerTemplate)
  });
  
  return HeaderView;
});