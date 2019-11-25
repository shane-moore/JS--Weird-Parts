// seperate some concerns
// one function that will loop over an array and run a function on each value and push the new values into another array
// a function that will do the work on each array item
// there is a limiter value that should be set for the callback function so will curry it
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1,2,3];

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

let limiterCurry = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

// var arr4 = mapForEach(arr1, limiterCurry(1));
// console.log(arr4);

// for (var i =0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);

// }

// console.log(arr2);

var arr5 = mapForEach(arr1, limiterCurry(2));
console.log(arr5);
