//Enter code here
function print(n,arr){
  var obj = {}
  
  for(var i = 0;i < arr.length;i++){
      if(obj[arr[i]]){
          obj[arr[i]]++
      }else{
          obj[arr[i]] = 1
      }
  }
  
  for(key in obj){
      if(obj[key] > n/2){
          return key
      }
  }
  
  return -1
}
function runProgram(input) {
// Write code here
input = input.split('\n')
for(var _ = 1;_ < input.length;_ = _ + 2){
    var n = +input[_]
    var arr = input[_+1].split(' ').map(Number)
    console.log(print(n,arr))
}
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