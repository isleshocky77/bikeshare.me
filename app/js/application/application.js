/* App */

// Create the app.
var app = new Backbone.Marionette.Application();

// Define regions.
app.addRegions({
  main: '#stations'
});

// Create the router and controller.
app.addInitializer(function() {
  app.router = new AppRouter({
    controller: new AppController()
  });
});

// Start the history listener.
app.on('initialize:after', function() {
  Backbone.history.start({pushState: true});
});
