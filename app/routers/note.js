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

    // setup router
    initialize: function(options) {

        // get all notes
        this.notes = options.notes;

        // assign view manager object
        this.viewManager = options.viewManager;

    },

    // list records
    list: function() {

        // get view
        var view = new APP.NoteListView({
            notes: this.notes,
            container: $("#notes")
        });

        // show view
        this.viewManager.showView(view);
    },

    // create new record
    create: function() {

        // create new object
        var view = new APP.NoteCreateView({
            note: new APP.NoteModel(),
            notes: this.notes,
            container: $("#notes")
        });

        // show view
        this.viewManager.showView(view);

    },

    // read record
    read: function(id) {

        // get note
        var note = this.notes.get(id);

        // if not found, redirect home
        var inValid = note === void 0;
        if (inValid) {
            window.location.hash = "notes";
            return;
        }

        // get view
        var view = new APP.NoteReadView({
            note: note,
            container: $("#notes")
        });

        // show view
        this.viewManager.showView(view);

    },

    // update record
    update: function(id) {
        // var note = this.collection.get(id);
        // this.view = new APP.NoteUpdateView({ note: note });
        // this.container.html(this.view.render().el);
    },

    // delete record
    delete: function(id) {

        // get note
        var note = this.notes.get(id);

        // delete it
        this.notes.remove(note);

        // redirect
        window.location.hash = "notes";
    }

});