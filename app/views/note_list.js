
"use strict";
APP.NoteListView = Backbone.View.extend({

  // tag
  tagName:"div",

  // template
  template:'app/templates/list.html',

  // the constructor
  initialize: function (options) {
    this.notes = options.notes;
    this.container = options.container;
    this.notes.bind("reset", this.render, this);
  },

  events:function(){

  },

  // populate the html to the dom
  render: function () {
    // load template into container
    var notes = this.notes.map(function(model){ return model.toJSON(); });
    loadTemplate(this.template, this.$el, this.container, {notes:notes});

    return this;
  }

});
