"use strict";
window.APP = window.APP || {};

APP.NoteRouter = Backbone.Router.extend({

  routes: {

    "": "list",
    "notes": "list",
    "note/new": "create",
    "note/:id/view": "read",
    "note/:id/edit": "update",
    "note/:id/delete": "delete",

  },

  initialize: function(options) {
    this.notes = options.notes;
    this.viewManager = options.viewManager;
  },

  list: function() {
    var view = new APP.NoteListView({
      notes: this.notes,
      container: $("#notes")
    });
    this.viewManager.showView(view);
  },

  create: function() {
    var view = new APP.NoteCreateView({
      note: new APP.NoteModel(),
      notes: this.notes,
      container: $("#notes")
    });
    this.viewManager.showView(view);
  },

  read: function(id) {
    // var note = this.collection.get(id);
    // this.view = new APP.NoteReadView({ note: note });
    // this.container.html(this.view.render().el);
  },

  update: function(id) {
    // var note = this.collection.get(id);
    // this.view = new APP.NoteUpdateView({ note: note });
    // this.container.html(this.view.render().el);
  },

  delete: function(id) {
    var note = this.notes.get(id);
    this.notes.remove(note);
    window.location.hash = "notes";
  }

});
