const assert = require('assert');
const lib = require('./functionsLibrary.js');
const insertElements = lib.insertElementsZip;
const reverseFibonacci = lib.generateReverseFibonacci;
const greatestNumber = lib.greatestNumber;
const lowestNumber = lib.lowestNumber;
const averageOfArray = lib.averageOfArray;

//if I give two arrays of two elements each it should return with two arrays of two elements each.
assert.deepEqual(insertElements([1,2],[3,4]),[[1,3],[2,4]])
//if I give the three elements in each of the array it should return with three different arrays containing each of two consequtive elements.
assert.deepEqual(insertElements([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]])
// if I give the unequal number of elements in two arrays it should print only the minimum number of element length
assert.deepEqual(insertElements([1,2,3,4],[4,5,6]),[[1,4],[2,5],[3,6]])

//if the user gives number it should generate that many  number of fibonacci serieses in reverse order
assert.deepEqual(reverseFibonacci(9),[21,13,8,5,3,2,1,1,0]);
assert.deepEqual(reverseFibonacci(1),[0]);
assert.deepEqual(reverseFibonacci(2),[1,0]);

//if the user gives the array of numbers it should print the greatest number in that array
assert.equal(greatestNumber([0,1]),1);
assert.equal(greatestNumber([0,1,2]),2);
assert.equal(greatestNumber([0,0]),0);
assert.equal(greatestNumber([0,-1]),0);
assert.equal(greatestNumber([-1,-2,-3,-0]),0);
assert.equal(greatestNumber([1,26,3,5]),26);

//if the user gives the array of numbers it should print the greatest number in that array
assert.equal(lowestNumber([0,1,-1]),-1);
assert.equal(lowestNumber([0,1]),0);
assert.equal(lowestNumber([1,26,3,5,-99]),-99);

//if the user gives the array of numbers it should print the average of all the numbers.
assert.equal(averageOfArray([1,2]),1.5);
assert.equal(averageOfArray([0,0]),0);
assert.equal(averageOfArray([1,2,3,4,5]),3);
