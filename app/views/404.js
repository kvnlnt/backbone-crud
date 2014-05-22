"use strict";
APP.errorView = Backbone.View.extend({

    // name of the parent
    tagName: "div",

    // the constructor
    initialize: function(options) {
        this.msg = options.msg;
        this.container = options.container;
    },

    // populate the html to the dom
    render: function() {

        this.$el.html(this.msg);
        this.container.html(this.el);

    }

});