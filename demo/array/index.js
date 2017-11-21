const array = require('array');

// arrayEqual demo
let arr1 = [1, 2, '11'];
let arr2 = [1, 2, '11'];
let arr3 = [1, 2, '11', 2];

console.log(array.arrayEqual(arr1, arr2));
console.log(array.arrayEqual(arr2, arr3));

// concat
console.log(array.concat(arr1, arr2, arr3));

// inArray
console.log(array.inArray(2, arr3));
console.log(array.inArray(2, arr3, 3));

// isArray
console.log(array.isArray(arr1));

// join
console.log(array.join('_', arr1, arr2, arr3));

// unique
console.log(array.unique(arr3));
