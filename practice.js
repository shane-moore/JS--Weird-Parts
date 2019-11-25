// // create a function that compares values in an array to a limiter that you set
// // one function will loop over the array and run a comparison function on each value
// // another function will define the limiter and comparison function
// // last function will take in the array and the comparison function to be called at any moment by the looping function

// let arr1 = [3, 5, 7, 9];

// function loopingOver(arr, fn) {
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++) {
//         arr2[i]=
//             fn(arr[i]);
//     }
//     return arr2;
// }

// function comparison(limiter) {
//     return function( limiter, value ) {
//         return value > limiter;
//     }
// }

// // let toCall = loopingOver(arr1, comparison());
// // console.log(toCall);

// // let anotherCall = loopingOver([-1, 5, 12, 1], comparison();
// // console.log(anotherCall);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let pablo = new Person("pablo", "escabar");
console.log(pablo.firstName);
console.log(pablo);

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
console.log(pablo.getFullName());
console.log(pablo);
// let jane = new Person("Jane", "Fonda");
// jane.level = 4;
// let _john = _.extend(pablo, jane);

// let defaultPeeps = {
//     firstName: 'default',
//     lastName: 'default',
//     getFullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// let bill = Object.create(defaultPeeps);
// bill.firstName = "roger";

// console.log(bill.getFullName());
// console.log(bill.__proto__);
// console.log(defaultPeeps.__proto__);

// let a = [];
// console.log( typeof a );
// console.log(Object.prototype.toString.call(a));

// function Person(name) {
//     this.name = name;
// }

// let e = new Person('Jane');
// console.log( e instanceof Person );

// console.log(typeof null);