"use strict";
APP.NoteUpdateView = Backbone.View.extend({

    // name of the parent
    tagName: "div",

    // template
    template: _.template($("#template-update").html()),

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
            title: this.$el.find('#noteName').val()
        });

        if (this.note.isValid()) {
            this.note.save();
            window.location.hash = "notes";
        }

    },

    // populate the html to the dom
    render: function() {

        var compiled = this.template({ note:this.note });
        this.$el.html(compiled);
        this.container.html(this.el);

    }

});