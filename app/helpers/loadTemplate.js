window.loadTemplate = function(template, container, json) {
  var url = template;
  $.ajax({
    url: url,
    method: 'GET',
    async: false,
    dataType: 'html',
    success: function(data) {
      var compiled = _.template(data, json);
      container.html(compiled);
    }
  });
}
