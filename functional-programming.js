// JS is more like Lisp because of first-class functions
// they can be stored as parameters or behave as objects or return them from functions
// we think and code in terms of functions

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

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

let limiterCurry = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, limiterCurry(2));
console.log(arr5);