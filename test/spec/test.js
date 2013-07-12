//Setup testing
chai.should;


/*global describe, it */
/*'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
})();
*/
//Create Fixture for testing
App.Store = DS.Store.extend({
	revision: 13,
	adapter: DS.FixtureAdapter.create({ simulateRemoteResponse: false})
});

App.Record.FIXTURES = [
	{
		id: 1,
		title: 'First',
		value: 100,
		comment: [101]
	}
];

App.Comment.FIXTURES = [
	{
		id: 101,
		text: 'This is the only comment',
		author: 'Alex'
	}
];

mocha.setup('bdd');

//Switch on ember testing
beforeEach(function(){
	Ember.testing = true;
});

//Turn off ember testing
afterEach(function(){
	Ember.testing = false;
});

// Record test
describe("App.Record", function (){
	it("Has a value", function(){
		var firstRec;
		Ember.run(function(){
			firstRec = App.Record.find(1);
		});
		firstRec.get("value").should.equal(100);
	});
});
