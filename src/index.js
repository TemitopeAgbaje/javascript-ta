// complete the function
function palindrom(str) {
  // code goes here
  const arrayOne = str.split('');
  const arrayTwo = [...arrayOne].reverse();
  console.log (arrayOne);
  console.log (arrayTwo);

  
  if(JSON.stringify(arrayOne)==JSON.stringify(arrayTwo)){
      console.log("True"); 
      return 'True';
  }else{
      console.log("False");
      return 'False';
  } 
}
palindrom("tenet")


function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
