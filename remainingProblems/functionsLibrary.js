// Ascending order - Given an array of numbers, check if the array is in ascending order

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

const isArrayAscending = function(numbersArray){
  justification = "true";
  for(let index = 0; index<numbersArray.length ; index++){
    if(numbersArray[index] > numbersArray[index+1]){
      justification = "false";
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
