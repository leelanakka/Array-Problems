let separateEven = function(evenCandidate){
  let result = [];
  for(let index = 0; index<evenCandidate.length; index++){
    if(evenCandidate[index]%2 == 0){
      result.push(evenCandidate[index]);
    }
  }
  return result;
}

exports.result = separateEven;
