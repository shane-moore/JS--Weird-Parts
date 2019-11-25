let person = {
    firstname: 'default',
    lastname: 'default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

let john = Object.create(person);
john.firstname = "paul";
john.lastname = "lipsey";
console.log(john);
john.greet()