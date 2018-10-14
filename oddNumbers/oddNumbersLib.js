let isOdd=function(oddCandidate){
  let result=[];
  for(let index = 0; index<oddCandidate.length; index++){
    if(oddCandidate[index]%2 == 1){
      result.push(oddCandidate[index]);
    }
  }
  return result;
}

exports.result = isOdd;
