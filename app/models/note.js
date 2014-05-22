
"use strict";
APP.NoteModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    title: ""
  },

  validate: function (attrs) {

    // errors object
    var errors = {};

    // validations
    if (!attrs.title) errors.title = "Please provide a title";

    // return errors
    return !_.isEmpty(errors) ? errors : false;
    
  }

});
