//Enter code here
function print(s,count){
  if(s == ''){
      return count
  }
  return print(s.slice(1),count+1)
}

function runProgram(input) {
// Write code here
//   console.log(input)
  console.log(print(input,0))
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