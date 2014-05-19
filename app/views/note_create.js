"use strict";
APP.NoteCreateView = Backbone.View.extend({

  // name of the parent
  tagName:"div",

  // template
  template: 'app/templates/create.html',

  // the constructor
  initialize: function(options) {
    this.note = options.note;
    this.notes = options.notes;
    this.container = options.container;
    this.note.bind('invalid', this.showErrors, this);
  },

  events: {

    "click #noteFormSubmit": "save"

  },

  showErrors: function(note, errors) {
    var that = this;
    _.each(errors, function(error){
      that.container.prepend(error);
    });
  },

  save: function(event) {

    event.stopPropagation();
    event.preventDefault();

    // update our model with values from the form
    this.note.set({ title: this.$el.find('#noteName').val(), id: Math.floor(Math.random() * 100) + 1 });

    if (this.note.isValid()) {
      this.notes.add(this.note);
      window.location.hash = "notes";
    }

  },


  // populate the html to the dom
  render: function() {
    // load template into container
    loadTemplate(this.template, this.$el, this.container, {});
  }

});
