// create a reusable utility to check if an inputted name matches that of a name stored in an array

let validNames = ['Bob', 'Joe', 'John', 'Bill'];
let replyToUser = false;

// function to loop over the names and run some validation function on each element
function namesToCheckAgainst( nameToCheck, fn) {
    validNames.forEach( name => fn(name, nameToCheck) );
}

// function that returns the validation function
function includesNames() {
    return function( validName, nameToCheck ) {
        if(validName.toLocaleLowerCase().includes(nameToCheck.toLocaleLowerCase())) {
            replyToUser = true;
        } else replyToUser = false;
        console.log(replyToUser);
    }
}

// call the looping function and pass in the validation function and the name to check against
namesToCheckAgainst('Bob', includesNames());
namesToCheckAgainst('bob', includesNames());
namesToCheckAgainst('susan', includesNames());
