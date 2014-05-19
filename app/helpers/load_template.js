window.loadTemplate = function(template, el, container, json) {
  var url = template;
  $.ajax({
    url: url,
    method: 'GET',
    async: false,
    dataType: 'html',
    success: function(data) {
      var compiled = _.template(data, json);
      el.html(compiled);
      container.html(el);
    }
  });
}
