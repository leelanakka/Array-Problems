const assert = require('assert');
const result = require('./evenNumbersLib.js').result;

//if I give the array with one odd number it should return with empty array;
assert.deepEqual(result([1]),[]);
//if I give the array with one odd and one even it should return me on even'
assert.deepEqual(result([1,2]),[2]);
//if I give the array with two even numbers it should return with two even numbers.
assert.deepEqual(result([4,2]),[4,2]);
//if I give any set of numbers it should return with the set of even numbers.
assert.deepEqual(result([2,3,4,5,6]),[2,4,6]);
