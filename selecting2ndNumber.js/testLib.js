const assert = require('assert');
const result = require('./print2ndNumberLib.js').resultArray;

assert.deepEqual(result([0]),[]);
assert.deepEqual(result([1,2]),[2]);
assert.deepEqual(result([4,2]),[2]);
assert.deepEqual(result([2,3,4,5,6]),[3,5]);
assert.deepEqual(result([10,9,3,22,100]),[9,22]);
assert.deepEqual(result([22,44,-21,33]),[44,33]);
assert.deepEqual(result([-1,-33,-39,-100,-21]),[-33,-100]);
