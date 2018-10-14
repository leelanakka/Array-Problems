let countNumbersAboveThreshold = function(numbersArray,limit){
  let result = 0;
  for(let index = 0; index<numbersArray.length ; index++){
    if(numbersArray[index]>limit){
      result++
    }
  }
  return result;
}
exports.result = countNumbersAboveThreshold;

