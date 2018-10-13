let selected2ndNumberArray = function(numbersArray){
  let resultArray = [];
  for(let index = 1; index<numbersArray.length; index+=2){
    resultArray.push(numbersArray[index]);
  }
  return resultArray;
}

exports.resultArray = selected2ndNumberArray;
