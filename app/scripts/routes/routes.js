App.Router.map(function () {
  // put your routes here
  this.resource('records', function() {
  	this.resource('record', { 
      path: ':record_id' 
    });
  });
  this.resource('users', function() {
    this.resource('user', { 
      path: ':user_id' 
    });
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
  	this.transitionTo('records');
  }
});

App.RecordsRoute = Ember.Route.extend({
	model: function() {
		return App.Record.find();
	}
});

App.UsersRoute = Ember.Route.extend({
  mode: function() {
    return App.User.find();
  }
});