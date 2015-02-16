function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	// with each Person object we create new function stored in memory
	// this.sayName = function() {
	//	return "My name is " + this.firstName + " " + this.lastName;
	//};
}

// Used only for constructor functions
// Any property defined on prototype is shared between all instances of constructor functions
Person.prototype.sayName = function() {
	return "My name is " + this.firstName + " " + this.lastName;
};

var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

// true
var isPerson = johnDoe instanceof Person; 
console.log(isPerson);

// false - in first case they are completely different functions
// true - in latter case 
var isSame = johnDoe.sayName === janeDoe.sayName; 
console.log(isSame);