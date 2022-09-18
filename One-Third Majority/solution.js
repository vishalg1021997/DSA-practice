//Enter code here
function print(n,arr){
    
  var obj = {}
  
  for(var i = 0;i < n;i++){
      if(obj[arr[i]]){
          obj[arr[i]]++
      }else{
          obj[arr[i]] = 1
      }
  }
  
  for(var k in obj){
      if(obj[k] > Math.floor(n/3)){
          return k
      }
  }
  
  return ''
}


function runProgram(input) {
// Write code here
input = input.split('\n')
var n = +input[0]
var arr = input[1].split(' ').map(Number)
console.log(print(n,arr))
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