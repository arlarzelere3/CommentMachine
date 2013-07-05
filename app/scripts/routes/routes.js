App.Router.map(function () {
  // put your routes here
  this.resource('records', function() {
  	this.resource('record', { path: ':record_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
  	this.transitionTo('records');
  }
});

App.RecordsRoute = Ember.Route.extend({
	model: function() {
		return App.Record.find()
	}
});