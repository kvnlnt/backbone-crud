// routers
APP.notes = new APP.NoteRouter({ collection:new APP.NoteCollection() });

 // now that everyting is setup we tell backbone to watch the urls
Backbone.history.start();
