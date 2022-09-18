//Enter code here
function print(n,arrS,arrC){
    
  var sum = 0
  
  arrS.sort((a,b) => a-b)
  arrC.sort((a,b) => a-b)
  
  for(var i = 0;i < n;i++){
      sum += arrS[i] * arrC[i]
  }
  
  return sum
}

function runProgram(input) {
// Write code here
input = input.split('\n')
var n = +input[0]
var arrS = input[1].trim().split(' ').map(Number)
var arrC = input[2].trim().split(' ').map(Number)
console.log(print(n,arrS,arrC))
//   console.log(input)
}
if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}