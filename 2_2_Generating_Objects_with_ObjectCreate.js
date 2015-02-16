var johnDoe = {
	firstName: "John",
	lastName: "Doe",
	sayName: function() {
		return "My name is " + this.firstName + " " + this.lastName;
	}
};

var janeDoe = Object.create(johnDoe, {
	firstName: { value: "Jane"},
	greet: {
		value: function(person) {
			return "Hello, " + person.firstName;
		}
	}
});

var jimSmith = Object.create(janeDoe, {
	firstName: { value: "Jim"},
	lastName: { value: "Smith"}
});

process.stderr.write(johnDoe.sayName() + "\n");
process.stderr.write(janeDoe.sayName() + " " + janeDoe.greet(johnDoe) + "\n");
process.stderr.write(jimSmith.sayName() + " " + jimSmith.greet(janeDoe) + "\n");

console.log(janeDoe.__proto__ === johnDoe);
console.log(jimSmith.__proto__ === janeDoe);