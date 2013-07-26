App.RecordController = Ember.ObjectController.extend({
	createComment: function(){
		var comments = this.get('comments');

		var content = this.get('newComment');

		comments.createRecord({
			text: content
		});
	}
});