"use strict";
APP.NoteListView = Backbone.View.extend({

    // tag
    tagName: "div",

    // template
    template: _.template($("#template-list").html()),

    // dom elements used
    els: {
        test: '.test'
    },

    // the constructor
    initialize: function(options) {
        this.notes = options.notes;
        this.container = options.container;
        this.notes.bind("reset", this.render, this);
    },

    // event handlers for dynamically rendered html
    events: function() {
        // this.container.on('click',this.els.test,this.test);
    },

    // onclose event is automatically called on view change
    // use to remove dynamically bound events
    onClose: function() {
        this.container.unbind();
    },

    // populate the html to the dom
    render: function() {

        var notes = this.notes.map(function(model) { return model.toJSON(); });
        var compiled = this.template({ notes: notes });
        this.$el.html(compiled);
        this.container.html(this.el);

        return this;
        
    }

});