"use strict";
APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: APP.NoteModel,

  url:'/notes',

  parse:function(resp, xhr){

    // get data
    var notes = resp.notes;

    // add data
    for(var note in notes){
      this.push({ title:notes[note].title });
    }

  }

});
