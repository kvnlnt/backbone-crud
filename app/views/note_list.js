
"use strict";
APP.NoteListView = Backbone.View.extend({

  // template
  template:'app/templates/notes.html',

  // the constructor
  initialize: function (options) {
    this.collection = options.collection;
  },

  // populate the html to the dom
  render: function (container) {
    // load template into container
    var notes = this.collection.map(function(model){ return model.toJSON(); });
    loadTemplate(this.template, container, {notes:notes});
  }

});
