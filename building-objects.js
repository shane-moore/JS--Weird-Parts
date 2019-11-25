// use capital letters for function constructors
// helps you remember to use the new keyword to create a new object to place the function constructor properties and set methods in prototypes for the new obj to use


function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('billy', 'joel');
console.log(john);
Person.firstname = 'squirrel';
console.log(john);
console.log(Person.firstname);
john.firstname = "bip";
console.log(john);
console.log(john.__proto__)

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThan(3));
Object.prototype.squirrel = "banks";
console.log(john.squirrel);

Number.prototype.isPositive = function() {
    console.log(this);
    return this > 0;
}