// Basic Module Pattern uses immediately invoked function taht return an object
// It emulates privacy

var dom = (function() {

	var _counter = 0;

	return {
			generateId: function() {
				return "customId" + _counter++;
			},
			create: function(tagName, id) {
				var el = document.createElement(tagName);

				el.id = id || this.generateId();

				return el;
		 	}
	};

}());


//***********************************************************************************


// Variation of the pattern
// functions are moved before return function and can be reused elsewhere in the code

// var dom = (function(jq) {

// 	var _counter = 0;

// 	function generateId() {
// 		return "customId" + _counter++;
// 	}
	
// 	function create(tagName, id) {
// 		var el = document.createElement(tagName);
// 		el.id = id || generateId();
// 		return el;
// 	}

// 	return {
// 			generateId: generateId,
// 			create: create
// 	};

// }(jQuery));


//***********************************************************************************


// This works but there is no prevention of chaning the _counter variable
// It can be set to string and generation of custom ids will fail

// var dom = {

// 	_counter : 0,

// 	generateId : function() {
// 		return "customId" + this._counter++;
// 	},

// 	create : function(tagName, id) {
// 		var el = document.createElement(tagName);

// 		el.id = id || this.generateId();

// 		return el;
// 	}
// };