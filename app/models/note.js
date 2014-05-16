
"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    title: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.title) errors.title = "Hey! Give this thing a title.";

    if (!_.isEmpty(errors)) {
      return errors;
    }
  }

});
