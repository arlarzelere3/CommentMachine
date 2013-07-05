App.Store = DS.Store.extend({
	revision: 13,
	adapter: 'DS.FixtureAdapter'
});

App.Record = DS.Model.extend({
	title: DS.attr('string'),
	value: DS.attr('number'),
	comments: DS.hasMany('App.Comment')
});

App.Comment = DS.Model.extend({
	record: DS.belongsTo('App.Record'),
	text: DS.attr('string'),
	author: DS.attr('string')
});

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
		author: 'Alex',
		record: 1
	},
	{
		id:102,
		text: 'Lol jk another comment',
		author: 'Alex',
		record: 1
	}
];