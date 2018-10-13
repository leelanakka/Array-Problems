const assert = require('assert');
const result = require('./sumLib.js').result;

assert.deepEqual(result([0]),0);
assert.deepEqual(result([1,2]),3);
assert.deepEqual(result([4,2]),6);
assert.deepEqual(result([2,3,4,5,6]),20);
