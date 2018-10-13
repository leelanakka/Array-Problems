const assert = require('assert');
const lib = require('./count_lib.js');
const countDigits = lib.countDigits;

assert.equal(countDigits(1),1);
assert.equal(countDigits(12),2);
assert.equal(countDigits(123),3);
