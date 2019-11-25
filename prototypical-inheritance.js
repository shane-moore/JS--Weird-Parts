// OOJ and Prototypical Inheritance

// Conceptual Aside

// inheritance - one objects gets access to the properties and methods of another object

// classical is what's currently best known and popular like C#

// prototypal is more simple, flexible, extensible, and easy to understand

let person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}



// don't do this ever! for demo purposes only
let john = {
    firstname: 'John',
    lastname: "Doe"
};


// let jane = {
//     firstname: 'jane'
// };

// jane.__proto__ = person;
// console.log(jane.getFullName());

for( let prop in john ) {
    if(john.hasOwnProperty)('firstname')
    console.log(prop + ': ' + john[prop]);
}

var jane = {
    address: '111 main st.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);
console.log(john);