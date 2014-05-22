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
        this.notes.bind("reset", this.refresh, this);

    },

    // reload current view
    refresh:function() {

        var _tmp = Backbone.history.fragment;
        this.navigate( _tmp + (new Date).getTime() );
        this.navigate( _tmp, { trigger:true } );

    },

    // list records
    list: function() {

        // rendering flags
        var collectionLoaded = this.notes.length > 0;
        var isValid = collectionLoaded;

        // check if notes are loaded
        if(isValid){

            // get view
            var view = new APP.NoteListView({
                notes: this.notes,
                container: $("#notes")
            });

            // show view
            this.viewManager.showView(view);

        } else {

            this.error('no');

        }

    },

    // create new record
    create: function() {

        // rendering flags
        var collectionLoaded = this.notes.length > 0;
        var isValid = collectionLoaded;

        // check if notes are loaded
        if(isValid){

            // create new object
            var view = new APP.NoteCreateView({
                note: new APP.NoteModel(),
                notes: this.notes,
                container: $("#notes")
            });

            // show view
            this.viewManager.showView(view);

        } else {

            this.error('no');

        }

    },

    // read record
    read: function(id) {

        // rendering flags
        var collectionLoaded = this.notes.length > 0;
        var modelFound = this.notes.get(id) !== void 0;
        var isValid = collectionLoaded && modelFound;

        // check if notes are loaded
        if(isValid){

            // get note
            var note = this.notes.get(id);

            // get view
            var view = new APP.NoteReadView({
                note: note,
                container: $("#notes")
            });

            // show view
            this.viewManager.showView(view);

        } else {

            this.error('no');

        }

    },

    // update record
    update: function(id) {

        // rendering flags
        var collectionLoaded = this.notes.length > 0;
        var modelFound = this.notes.get(id) !== void 0;
        var isValid = collectionLoaded && modelFound;

        // check if notes are loaded
        if(isValid){

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

        } else {

            this.error('no');

        }
        
    },

    // delete record
    delete: function(id) {

        // rendering flags
        var collectionLoaded = this.notes.length > 0;
        var modelFound = this.notes.get(id) !== void 0;
        var isValid = collectionLoaded && modelFound;

        // check if notes are loaded
        if(isValid){

            // get note
            var note = this.notes.get(id);

            // remove from collection
            this.notes.remove(note);

            // destroy the object
            // note.destroy();

            // redirect
            window.location.hash = "notes";

        } else {

            this.error('no');

        }
    },

    // 404 error
    error:function(msg){

        // get view
        var view = new APP.errorView({
            msg:msg,
            container: $("#notes")
        });

        // show view
        this.viewManager.showView(view);

    }

});