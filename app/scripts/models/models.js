App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});

//Models
App.User = DS.Model.extend({
	name: DS.attr('string')
})

App.Record = DS.Model.extend({
	title: DS.attr('string'),
	value: DS.attr('number'),
	comments: DS.hasMany('App.Comment'),
	isCommented: function() {
		var numComments = this.get('comments').get('length');
		console.debug(numComments);
		return numComments > 0;
	}.property('comments')
});

App.Comment = DS.Model.extend({
	record: DS.belongsTo('App.Record'),
	text: DS.attr('string'),
	author: DS.belongsTo('App.User')
});

//Fixtures
App.User.FIXTURES = [
	{
		id: 001,
		name: 'Alex'
	}
]

App.Record.FIXTURES = [
	{
		id: 1,
		title: 'First',
		value: 100,
		comments: [101, 102]
	},
	{
		id: 2,
		title: 'Something',
		value: 200
	},
	{
		id: 3,
		title: 'Third Thing',
		value: 300
	},
	{
		id: 4,
		title: 'Last',
		value: 400
	},
	{
		id: 5,
		title: 'Bonus',
		value: 500
	}
];

App.Comment.FIXTURES = [
	{
		id: 101,
		text: 'This is the only comment',
		author: 001,
		record: 1
	},
	{
		id:102,
		text: 'Lol jk another comment',
		author: 001,
		record: 1
	}
];