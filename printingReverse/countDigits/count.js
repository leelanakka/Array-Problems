let lib = require('./count_lib.js');

const main = function(){
  let number = +process.argv[2];
  console.log(lib.countDigits(number));
}

main();
