window.loadTemplate = function(template, el, container, json) {
  $.ajax({
    url: template,
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
