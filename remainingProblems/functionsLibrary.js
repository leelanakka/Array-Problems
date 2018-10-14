//Zip - insert elements from two arrays as follows:
//let a = [1,2,3]
//let b = [4,5,6] 
//zip(a,b) => [[1,4],[2,5],[3,6]]


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
