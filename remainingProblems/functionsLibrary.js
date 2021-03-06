const compliment = function(functionToCompliment){
  return function(arguements){
    return !functionToCompliment(arguements);
  }
}

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
      outputArray.push(number);
    }
  }
  return outputArray;
}

const findIntersection = function(array1,array2){
  let outputArray = [];
  uniqueArray1 = findUniqueArray(array1);
  uniqueArray2 = findUniqueArray(array2);
  for(let number of uniqueArray1){
    if(uniqueArray2.includes(number)){
      outputArray.push(number);
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
  let uniqueArray2 = findUniqueArray(array2);
  unionArray = uniqueArray1.concat(uniqueArray2);
  return findUniqueArray(unionArray);
}

const extractDigits = function(numberToExtract){
  let digitsArray = [];
  string = ""+numberToExtract;
  for(let index = 0; index < string.length ; index++){
    if(string[index]<=9){
      digitsArray.push(string[index]);
    }
  }
  return digitsArray;
}

const returnSameInput = function(number){
  return number;
}

const findIndexOfNumber = function(numbersArray,number){
  return numbersArray.indexOf(returnSameInput(number)); 
}

const ascending = function(state,number){
  let {element,decision} = state;
  decision = (element>number && decision == true)?false:decision;
  return {element:number, decision:decision};
}

const isArrayDescending = function(numbersArray){
  reversedArray = numbersArray.reverse();
  return reversedArray.reduce(ascending,{element:reversedArray[0],decision:true}).decision;
}

const isArrayAscending = function(numbersArray){
  return numbersArray.reduce(ascending,{element:numbersArray[0],decision:true}).decision;
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

const isOdd = compliment(isEven);

const filterOddNumbers = function(numbersArray){
  return numbersArray.filter(isOdd);
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

const findSumOfArray = function(numbersArray){
  return numbersArray.reduce(findSum);
}

const findingAverageOfArray = function(numbersArray){
  let length = numbersArray.length;
  return numbersArray.reduce(findSum)/length;
}

const findLowestNumber = function(numbersArray){
  return Math.min.apply(0,numbersArray);
}

const findGreatestNumber = function(numbersArray){
  return Math.max.apply(0,numbersArray);
}

const reverseArray = function(inputArray){
  return inputArray.reverse();
}

const selectNthNumber = function(array,index){
  return index%2 != 0;
}

const select2ndNumberInArray = function(numbersArray){
  return numbersArray.filter(selectNthNumber);
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
    return "please enter positive integer";
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

const insertElementsZip = function(arrayA,arrayB){
  let finalArray = [];
  let count = arrayA.length;
  if(count>arrayB.length){
    count = arrayB.length;
  }
  for(let index=0; index < count ; index++){
    finalArray.push([arrayA[index],arrayB[index]]);
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
exports.findSumOfArray = findSumOfArray;
exports.reverseArray = reverseArray;
exports.select2ndNumberInArray = select2ndNumberInArray;
