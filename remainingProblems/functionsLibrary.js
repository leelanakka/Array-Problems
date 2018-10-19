// Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.

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

const countEvenNumbers = function(numbersArray){
  let count = 0;
  for(let index=0; index<numbersArray.length ; index++){
    if(numbersArray[index]%2 == 0){
      count++
    }
  }
  return count;
}

const countOddNumbers = function(numbersArray){
  let count = 0;
  for(let index=0; index < numbersArray.length ; index++){
    if(numbersArray[index]%2 != 0){
      count++
    }
  }
  return count;
}
const mappingLengthsOfWords = function(wordsArray){
  let mappingLength = [];
  for(let index=0; index<wordsArray.length ; index++){
    mappingLength.push(wordsArray[index].length);
  }
  return mappingLength;
}

const findingAverageOfArray = function(numbersArray){
  let average = 0;
  let sum = 0;
  let length = numbersArray.length;
  for(let index=0; index<numbersArray.length; index++){
    sum += numbersArray[index];
  }
  average = sum/length
  return average;
}


const findLowestNumber = function(numbersArray){
  let lowestNumber = numbersArray[0];
  for(let index=0; index<numbersArray.length; index++){
    if(numbersArray[index] < lowestNumber){
      lowestNumber = numbersArray[index];
    }
  }
  return lowestNumber;
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
  let greatestNumber = numbersArray[0];
  for(let index=0; index<numbersArray.length; index++){
    if(numbersArray[index] > greatestNumber){
      greatestNumber = numbersArray[index];
    }
  }
  return greatestNumber;
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
