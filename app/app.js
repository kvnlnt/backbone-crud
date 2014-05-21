// routers
APP.notes = new APP.NoteRouter({
  notes: new APP.NoteCollection(),
  viewManager: new ViewManager()
});

APP.notes.notes.fetch({reset:true});

// now that everyting is setup we tell backbone to watch the urls
Backbone.history.start();
