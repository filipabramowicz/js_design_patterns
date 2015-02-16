var obj = {};

obj.firstName = "Jeremy";
obj["lastName"] = "McPeak";

var firstName = obj["firstName"];
var lastName = obj.lastName;

// Notation with square notation is better as we can use reserved words or
// for example space which is not allowed when using attribute notation

Object.defineProperty(obj,"coutry",{
	value : "USA"
});

// defineProperty takes 3 arguments:
// - the object which we are modifying
// - the name of the property we are defining
// - the descriptor object

Object.defineProperties(obj, {
	twitter : {
		value: "twitter_account"
	},
	email : {
		value : "aaa@aaa.pl"
	}
});
