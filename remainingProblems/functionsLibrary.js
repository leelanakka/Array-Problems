const partitionOfArray = function(numbersArray,limit){
  let array1 = [];
  let array2 = [];
  for(let index = 0; index < numbersArray.length ; index++){
    if(numbersArray[index] <= limit){
      array1.push(numbersArray[index]);
    } else{
      array2.push(numbersArray[index]);
       }
  }
  return [array1,array2];
}

const rotateArray = function(inputArray,position){
  let outputArray = inputArray;
  for(let index = 0; index < position ; index++){
    outputArray.push(outputArray.shift());
  }
  return outputArray;
}

const isSubset = function(array1,array2){
  uniqueArray1 = findUniqueArray(array1);
  uniqueArray2 = findUniqueArray(array2);
  let decision = true;
  for(let number of uniqueArray1){
    if(!uniqueArray2.includes(number)){
      return false;
    }
  }
  return decision;
}

const findDifference = function(array1,array2) {
  let outputArray = [];
  uniqueArray1 = findUniqueArray(array1);
  uniqueArray2 = findUniqueArray(array2)
  for(let number of uniqueArray1){
    if(!uniqueArray2.includes(number)){
      outputArray.push(number)
    }
  }
  return outputArray;
}


const findIntersection = function(array1,array2){
  let outputArray = [];
  uniqueArray1 = findUniqueArray(array1);
  uniqueArray2 = findUniqueArray(array2)
  for(let number of uniqueArray1){
    if(uniqueArray2.includes(number)){
      outputArray.push(number)
    }
  }
  return outputArray;
}

const findUniqueArray = function(inputArray){
  let outputArray = [];
  for(let number of inputArray){
    let numberToAdd = (!outputArray.includes(number))
    if(numberToAdd){
      outputArray.push(number);
    }
  }
  return outputArray;
}

const findUnionArray = function(array1,array2){
  let uniqueArray1 = findUniqueArray(array1);
  let uniqueArray2 = findUniqueArray(array2)
  unionArray = uniqueArray1.concat(uniqueArray2);
  return findUniqueArray(unionArray);
}

const extractDigits = function(numberToExtract){
  let digitsArray = [];
  string = ""+numberToExtract;
  for(let index = 0; index < string.length ; index++){
    digitsArray.push(string[index]);
  }
  return digitsArray;
}

const findIndexOfNumber = function(numbersArray,number){
  let position = 0;
  for(let index = 0; index < numbersArray.length ; index++){
    if(numbersArray[index] == number){
      position = index;
      return position;
    }
  }
  return ""; 
}

const isArrayDescending = function(numbersArray){
  let justification = true;
  for(let index = 0; index<numbersArray.length ; index++){
    if(numbersArray[index] < numbersArray[index+1]){
      justification = false;
      return justification;
    }
  }
  return justification;
}

const isArrayAscending = function(numbersArray){
  let justification = true;
  for(let index = 0; index<numbersArray.length ; index++){
    if(numbersArray[index] > numbersArray[index+1]){
      justification = false;
      return justification;
    }
  }
  return justification;
}

const isEven = function(number) {
  return number%2 == 0;
}

const countEvenNumbers = function(numbersArray){
  return numbersArray.filter(isEven).length;
}

const filterEvenNumbers = function(numbersArray){
  return numbersArray.filter(isEven);
}

const filterOddNumbers = function(numbersArray){
  return numbersArray.filter(isOdd);
}

const isOdd = function(number) {
  return number%2 != 0;
}

const countOddNumbers = function(numbersArray){
  return numbersArray.filter(isOdd).length;
}

const findLengthOfString = function(string){
  return string.length;
}

const mappingLengthsOfWords = function(array){
  return array.map(findLengthOfString);
}

const findSum = function(num1,num2) {
  return num1+num2;
}

const findingAverageOfArray = function(numbersArray){
  let length = numbersArray.length;
  return numbersArray.reduce(findSum)/length;
}

const lowestNumber = function(num1,num2) {
  if(num1<num2){
    return num1;
  }
  return num2;
}

const findLowestNumber = function(numbersArray){
  return numbersArray.reduce(lowestNumber);
}

const generateFibonacci = function(remainingNoOfSeries,first,second,reverseFibonacci){
  for(let index=1; index<=remainingNoOfSeries; index++){
    fibonacciNumber=first+second;
    first=second;
    second=fibonacciNumber;
    reverseFibonacci.unshift(fibonacciNumber);
  }
  return reverseFibonacci;
}

const generateReverseFibonacci = function(limit){
  let first=0;
  let second=1;
  let fibonacciNumber=0;
  let reverseFibonacci = [];
  reverseFibonacci.unshift(first);
  if(limit<0){
    return "please enter positive integer"
  }
  if(limit == 1){
    return reverseFibonacci;
  }
  reverseFibonacci.unshift(second);
  if(limit == 2){
    return reverseFibonacci;
  }
  let remainingNoOfSeries=limit-2;
  return generateFibonacci(remainingNoOfSeries,first,second,reverseFibonacci);
}

const findGreatestNumber = function(numbersArray){
  const greatestNumber = function(num1,num2) {
    if(num1>num2){
      return num1;
    }
    return num2;
  }
  return numbersArray.reduce(greatestNumber);
}

const insertElementsZip = function(arrayA,arrayB){
  let finalArray = [];
  let count = arrayA.length;
  if(count>arrayB.length){
    count = arrayB.length;
  }
  for(let index=0; index < count ; index++){
    finalArray.push([arrayA[index],arrayB[index]])
  }
  return finalArray;
}

exports.insertElementsZip = insertElementsZip;
exports.generateReverseFibonacci = generateReverseFibonacci;
exports.greatestNumber = findGreatestNumber;
exports.lowestNumber = findLowestNumber;
exports.averageOfArray = findingAverageOfArray;
exports.mappingLength = mappingLengthsOfWords;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.findIndexOfNumber = findIndexOfNumber;
exports.isArrayAscending = isArrayAscending;
exports.isArrayDescending = isArrayDescending;
exports.extractDigits = extractDigits;
exports.findUniqueArray = findUniqueArray;
exports.findUnionArray = findUnionArray
exports.findIntersection = findIntersection;
exports.findDifference = findDifference;
exports.isSubset = isSubset;
exports.rotateArray = rotateArray;
exports.partitionOfArray = partitionOfArray;
exports.filterEvenNumbers = filterEvenNumbers;
exports.filterOddNumbers = filterOddNumbers;
