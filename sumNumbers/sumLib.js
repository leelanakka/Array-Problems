let sum = function(numbersAray){
  let result = 0;
  for(let index=0; index < numbersAray.length ; index++){
    result = result+numbersAray[index];
  }
  return result;
}

exports.result = sum; 
