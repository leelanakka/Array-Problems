let reverseArray = function(numbersAray){
  let result = [];
  for(let index=0; index < numbersAray.length ; index++){
    result.push(numbersAray[numbersAray.length-index-1]);
  }
  return result;
}

exports.result = reverseArray; 
