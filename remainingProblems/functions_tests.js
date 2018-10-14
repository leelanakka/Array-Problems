const insertElements = require('./functionsLibrary.js').insertElementsZip;
const assert = require('assert');

assert.deepEqual(insertElements([1,2],[3,4]),[[1,3],[2,4]])
assert.deepEqual(insertElements([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]])
// if I give the unequal number of elements in two arrays it should print only the minimum number of element length
assert.deepEqual(insertElements([1,2,3,4],[4,5,6]),[[1,4],[2,5],[3,6]])
