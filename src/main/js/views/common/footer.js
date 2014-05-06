define(['text!templates/common/footer.html'], function(footerTemplate) {
  var FooterView = BaseView.extend({
    template : _.template(footerTemplate)
  });
  
  return FooterView;
});