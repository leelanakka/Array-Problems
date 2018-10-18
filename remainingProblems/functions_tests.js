const assert = require('assert');
const{ 
  insertElementsZip, 
  generateReverseFibonacci, 
  greatestNumber, 
  lowestNumber, 
  averageOfArray, 
  mappingLength, 
  countOddNumbers, 
  countEvenNumbers,
  findIndexOfNumber} = require('./functionsLibrary.js');

// if I give two arrays of two elements each it should return with two arrays of two elements each.
assert.deepEqual(insertElementsZip([1,2],[3,4]),[[1,3],[2,4]]);
// if I give the three elements in each of the array it should return with three different arrays containing each of two consequtive elements.
assert.deepEqual(insertElementsZip([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);
//  if I give the unequal number of elements in two arrays it should print only the minimum number of element length
assert.deepEqual(insertElementsZip([1,2,3,4],[4,5,6]),[[1,4],[2,5],[3,6]]);

// if the user gives number it should generate that many  number of fibonacci serieses in reverse order
assert.deepEqual(generateReverseFibonacci(9),[21,13,8,5,3,2,1,1,0]);
assert.deepEqual(generateReverseFibonacci(1),[0]);
assert.deepEqual(generateReverseFibonacci(2),[1,0]);

// if the user gives the array of numbers it should print the greatest number in that array
assert.equal(greatestNumber([0,1]),1);
assert.equal(greatestNumber([0,1,2]),2);
assert.equal(greatestNumber([0,0]),0);
assert.equal(greatestNumber([0,-1]),0);
assert.equal(greatestNumber([-1,-2,-3,-0]),0);
assert.equal(greatestNumber([1,26,3,5]),26);

// if the user gives the array of numbers it should print the greatest number in that array
assert.equal(lowestNumber([0,1,-1]),-1);
assert.equal(lowestNumber([0,1]),0);
assert.equal(lowestNumber([1,26,3,5,-99]),-99);

// if the user gives the array of numbers it should print the average of all the numbers whether the array contains positive pr negative numbers.
assert.equal(averageOfArray([1,2]),1.5);
assert.equal(averageOfArray([0,0]),0);
assert.equal(averageOfArray([1,2,3,4,5]),3);
assert.equal(averageOfArray([-1,-2]),-1.5);

// if the user gives you the a array of names or words it should return array of lenths of their words in an order
assert.deepEqual(mappingLength(["leela"]),[5]);
assert.deepEqual(mappingLength([""]),[0]);
assert.deepEqual(mappingLength(["mary","had","a","little","lamb"]),[4,3,1,6,4]);

// if the user gives you the array of numbers it should return the count of the odd numbers present in it.
assert.equal(countOddNumbers([0,1]),1);
assert.equal(countOddNumbers([1,2,3,4,5]),3);
assert.equal(countOddNumbers([2,4,6,8]),0);

// if the user gives you the array of numbers it should return the count of the even numbers present in it.
assert.equal(countEvenNumbers([2]),1);
assert.equal(countEvenNumbers([1]),0);
assert.equal(countEvenNumbers([0,2,4,6,8]),5);
assert.equal(countEvenNumbers([-2]),1);
assert.equal(countEvenNumbers([-1]),0);

// if the user gives you the array of numbers and number to find the index then it should return the first index of that number
assert.equal(findIndexOfNumber([0],0),0);
assert.equal(findIndexOfNumber([0,1],1),1);
assert.equal(findIndexOfNumber([0,1,1],1),1);
assert.equal(findIndexOfNumber([0,1,1],2),"");
