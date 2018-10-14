const insertElements = require('./functionsLibrary.js').insertElements;
const assert = require('assert');

assert.deepEqual(insertElements([1,2],[3,4]),[[1,3],[2,4]])
assert.deepEqual(insertElements([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]])
