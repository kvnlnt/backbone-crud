"use strict";
APP.NoteCreateView = Backbone.View.extend({

    // name of the parent
    tagName: "div",

    // template
    template: _.template($("#template-create").html()),

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

    showErrors: function(ibeacon, errors) {

        var that = this;

        // remove current errors
        that.container.find('.errors').remove();

        // create new error container
        var html = $("<ul>");
            html.addClass("errors");

        // loop and attach each error
        _.each(errors, function(error) {
            html.append('<li>'+error+'</li>');
        });

        that.container.find('h2').after(html);
    },

    save: function(event) {

        event.stopPropagation();
        event.preventDefault();

        // update our model with values from the form
        this.note.set({
            title: this.$el.find('#noteName').val(),
            id: Math.floor(Math.random() * 100) + 1
        });

        if (this.note.isValid()) {
            this.notes.add(this.note);
            window.location.hash = "notes";
        }

    },

    // populate the html to the dom
    render: function() {

        var compiled = this.template({});
        this.$el.html(compiled);
        this.container.html(this.el);

    }

});