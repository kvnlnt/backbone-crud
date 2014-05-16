"use strict";
window.APP = window.APP || {};

APP.NoteRouter = Backbone.Router.extend({

  routes: {

    "notes": "list",
    "note/new": "create",
    "note/:id/view": "read",
    "note/:id/edit": "update",
    "note/:id/delete": "delete",

  },

  initialize: function(options) {
    this.collection = options.collection;
    this.container = $("#notes");
    this.list();
  },

  list: function() {
    this.view = new APP.NoteListView({
      collection: this.collection
    });
    this.view.render(this.container);
  },

  create: function() {
    this.view = new APP.NoteCreateView({
      note: new APP.NoteModel()
    });
    this.container.html(this.view.render().el);
  },

  read: function(id) {
    var note = this.collection.get(id);
    this.view = new APP.NoteReadView({
      note: note
    });
    this.container.html(this.view.render().el);
  },

  update: function(id) {
    var note = this.collection.get(id);
    this.view = new APP.NoteUpdateView({
      note: note
    });
    this.container.html(this.view.render().el);
  },

  delete: function(id) {
    var note = this.collection.get(id);
    this.view = new APP.NoteDeleteView({
      note: note
    });
    this.container.html(this.view.render().el);
  }

});
