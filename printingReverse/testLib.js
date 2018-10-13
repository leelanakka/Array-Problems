const assert = require('assert');
const result = require('./reverseLib.js').result;

assert.deepEqual(result([0]),[0]);
assert.deepEqual(result([1,2]),[2,1]);
assert.deepEqual(result([4,2]),[2,4]);
assert.deepEqual(result([2,3,4,5,6]),[6,5,4,3,2]);
