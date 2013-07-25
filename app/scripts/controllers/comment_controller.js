App.CommentController = Ember.ObjectController.extend({
	isEditing: false,

	editComment: function() {
		this.set('isEditing', true);
	}
});