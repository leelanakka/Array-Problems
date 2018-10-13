const assert = require('assert');
const result = require('./evenNumbersLib.js').result;

assert.deepEqual(result([1]),[]);
assert.deepEqual(result([1,2]),[2]);
assert.deepEqual(result([4,2]),[4,2]);
assert.deepEqual(result([2,3,4,5,6]),[2,4,6]);
