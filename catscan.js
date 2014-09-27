/*

	Catscan 

	A mixin library that creates a report of the existence of objects in memory, tryies to determine whether or not they are ZOMBIES and then takes a stab at helping you find the reference(s) that is(are) preventing the garbage collector from tossing them.

	Wheel re-intenteur: David Erwin

	Dependencies:
	Backbone, Underscore or simlar

*/

var catscan = {
};

catscan.catscan_startListening = function () {

	
	// ensure that this is object uses backbone events
	_.extend(this, Backbone.event);

	// start listening for the report call
	this.listenTo(this, "catscan:report", this.catscan_report);
	return 'cheese';

};

catscan.catscan_report = function () {

	console.log('hello, it is', this);

};

catscan._scan = function () {

	//this.trigger('catscan:report', this);

};

(function () {


	setInterval(catscan._scan(), 1000);


}());

