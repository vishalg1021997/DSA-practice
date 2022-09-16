//Enter code here
function print(n){
  // console.log(n%10)
  var sum = 0
  while(n > 0 || sum > 9){
      if(n == 0) {
          n = sum;
          sum = 0;
      }
      sum += n%10
      n = Math.floor(n/10)
  }
  console.log(sum)
}


function runProgram(input) {
// Write code here
input = input.split('\n').map(Number)
//   console.log(input)
for(var i = 1;i < input.length;i++){
    print(input[i])
}
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