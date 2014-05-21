"use strict";
APP.NoteReadView = Backbone.View.extend({

    // name of the parent
    tagName: "div",

    // template
    template: _.template($("#template-read").html()),

    // the constructor
    initialize: function(options) {
        this.note = options.note;
        this.container = options.container;
    },

    events: {},

    // populate the html to the dom
    render: function() {

        var compiled = this.template({ note: this.note });
        this.$el.html(compiled);
        this.container.html(this.el);

    }

});