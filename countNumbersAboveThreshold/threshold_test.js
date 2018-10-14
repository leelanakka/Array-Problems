const assert = require('assert');
const result = require('./sourceFile.js').result;

//if I give 1 in an array and limit as 0 it should print 1
assert.equal(result([1],0),1);
// if I give 1,2 in an aray and limit as 0 it should print 2
assert.equal(result([1,2],0),2);
