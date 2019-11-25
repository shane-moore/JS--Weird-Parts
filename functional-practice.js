let numbers = [1, 4, 7, 9, 12];
function numbersMin(numbers, fn) {
    return fn(numbers);
}
let numbersFinal = numbersMin(numbers, () => Math.min(...numbers));
console.log(numbersFinal);