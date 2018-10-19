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
  findIndexOfNumber,
  isArrayAscending,
  isArrayDescending,
  extractDigits,
  findUniqueArray,
  findUnionArray,
  findIntersection,
  findDifference,
  isSubset,
  rotateArray,
  partitionOfArray} = require('./functionsLibrary.js');

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

// if the user gives the array of numbers then it should return whether the array is in ascending order or not
assert.equal(isArrayAscending([0,1]),true);
assert.equal(isArrayAscending([0,1,-1]),false);
assert.equal(isArrayAscending([0,1,2,3,4,5]),true);
assert.equal(isArrayAscending([0,1,2,3,4,5]),true);

// if the user gives the array of numbers then it should return whether the array is in descending order or not
assert.equal(isArrayDescending([1,0]),true);
assert.equal(isArrayDescending([1,0,1]),false);
assert.equal(isArrayDescending([5,4,3,2,-1,-1]),true);
assert.equal(isArrayDescending([0,0,0,0]),true);

// if the user gives a number it should return with each digits in an array.
assert.deepEqual(extractDigits(1),[1]);
assert.deepEqual(extractDigits(12),[1,2]);
assert.deepEqual(extractDigits(00),[0]);
assert.deepEqual(extractDigits(20345),[2,0,3,4,5]);

// If the user gives you an input array it should return with an unique array
assert.deepEqual(findUniqueArray([1,2]),[1,2]);
assert.deepEqual(findUniqueArray([1,1]),[1]);
assert.deepEqual(findUniqueArray([1,2,3,1,2]),[1,2,3]);
assert.deepEqual(findUniqueArray([0,0,1,2,3,1,2]),[0,1,2,3]);
 
// if the user gives input as two sets of numbers(arrays) then it should return the union of the two arrays in an array
assert.deepEqual(findUnionArray([1],[2]),[1,2]);
assert.deepEqual(findUnionArray([1,2],[2]),[1,2]);
assert.deepEqual(findUnionArray([1,2,3],[4,5]),[1,2,3,4,5]);
assert.deepEqual(findUnionArray([1,2,3],[1,2,3,4,5]),[1,2,3,4,5]);
assert.deepEqual(findUnionArray([1,2,3,4,5],[1,2,3]),[1,2,3,4,5]);

// if the user gives input of two arrays then the it should return the intersection of the two arrays;
assert.deepEqual(findIntersection([1],[2]),[]);
assert.deepEqual(findIntersection([1],[1]),[1]);
assert.deepEqual(findIntersection([1,1],[1,1]),[1]);
assert.deepEqual(findIntersection([1,2],[1,1]),[1]);
assert.deepEqual(findIntersection([1,2],[1,2]),[1,2]);
assert.deepEqual(findIntersection([1,1],[2,2]),[]);
assert.deepEqual(findIntersection([1,2],[1,2,3]),[1,2]);

// if the user gives input of two arrays then it should return the the elements that are not present in the second array but present in the first array
assert.deepEqual(findDifference([1],[1]),[])
assert.deepEqual(findDifference([1],[2]),[1])
assert.deepEqual(findDifference([1,2],[2]),[1])
assert.deepEqual(findDifference([1,2],[]),[1,2])
assert.deepEqual(findDifference([1,2,1,2],[3,4,2,2,2]),[1])

// if the user gives the two arrays of numbers it should return the bullion value for whether the array 1 is proper subset of array 2 or not 
assert.equal(isSubset([1],[1]),true);
assert.equal(isSubset([1],[2]),false);
assert.equal(isSubset([1,1,1],[2,1,1]),true);
assert.equal(isSubset([1,1,2,3],[2,1,1,3,4,5,2,3,1,4]),true);

// if the user gives one array of numbers and an position value to rotate it should rotate as per teh position 
assert.deepEqual(rotateArray([1,2],1),[2,1])
assert.deepEqual(rotateArray([1,2,3,4,5],2),[3,4,5,1,2])
assert.deepEqual(rotateArray([1,2,3,4,5],4),[5,1,2,3,4])
assert.deepEqual(rotateArray([1,2,3,4,5],0),[1,2,3,4,5])

// if the user gives an array of numbers and limit then it will seperate two arrays of the numbers
assert.deepEqual(partitionOfArray([1,2],1),[[1],[2]])
assert.deepEqual(partitionOfArray([1,2,7,4,9,10,5],5),[[1,2,4,5], [7,9,10]])
assert.deepEqual(partitionOfArray([1,2,3,4,1,2,3,4,9,10,1,2],5),[[1,2,3,4,1,2,3,4,1,2],[9,10]])
assert.deepEqual(partitionOfArray([1,2],3),[[1,2],[]])
