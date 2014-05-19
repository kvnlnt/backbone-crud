// manage views in backbone
function ViewManager(container) {

  this.container = container;

  this.showView = function(view) {

    if (this.currentView) {
      this.currentView.close();
    }

    this.currentView = view;
    this.currentView.render();

  };

}

// add a close method to all backbone views
Backbone.View.prototype.close = function() {
  this.remove();
  this.unbind();
  if (this.onClose) {
    this.onClose();
  }
}
