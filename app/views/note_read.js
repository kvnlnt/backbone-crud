"use strict";
APP.NoteReadView = Backbone.View.extend({

  // name of the parent
  tagName:"div",

  // template
  template: 'app/templates/read.html',

  // the constructor
  initialize: function(options) {
    this.note = options.note;
    this.container = options.container;
  },

  events: {},

  // populate the html to the dom
  render: function() {
    // load template into container
    loadTemplate(this.template, this.$el, this.container, { note:this.note });
  }

});
