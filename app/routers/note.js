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

        // reload views that need the notes collection
        this.notes.bind("reset", this.reset, this);

    },

    // reload current view
    reset:function() {

        this.refresh();

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

        // check if notes are loaded
        if(this.notes.length > 0){

            // get note
            var note = this.notes.get(id);

            // get view
            var view = new APP.NoteReadView({
                note: note,
                container: $("#notes")
            });

            // show view
            this.viewManager.showView(view);

        }

    },

    // update record
    update: function(id) {

        // check if notes are loaded
        if(this.notes.length > 0){

            // get note object by id
            var note = this.notes.get(id);

            // create new object
            var view = new APP.NoteUpdateView({
                note: note,
                notes: this.notes,
                container: $("#notes")
            });

            // show view
            this.viewManager.showView(view);

        }
        
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

// Router refresher
_.extend(Backbone.Router.prototype,{

    refresh: function() {
        var _tmp = Backbone.history.fragment;
        this.navigate( _tmp + (new Date).getTime() );
        this.navigate( _tmp, { trigger:true } );
    }

});