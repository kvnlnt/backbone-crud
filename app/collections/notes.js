"use strict";
APP.NoteCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: APP.NoteModel,

  initialize:function(){

    // prepopulate collection
    for(var i = 0; i < 10; i++){
      this.push({ title:"test"+i });
    }

  }

});
