let numberOfDigits = function(number){
  let countDigits = 0;
  for(let index = 0; index < 1000; index++){
    if(number<10){
      countDigits += 1;
      break;
    }
    countDigits += 1;
    number = number/10;
  }
  return countDigits;
}

exports.countDigits = numberOfDigits;
