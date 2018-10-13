const assert = require('assert');
const result = require('./oddNumbersLib.js').result;

assert.deepEqual(result([1,2,3]),[1,3])
assert.deepEqual(result([11,22,23,34]),[11,23])
