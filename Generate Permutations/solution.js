//Enter code here
function print(arr,count){
  if(count == arr.length){
      console.log(arr.join(' '))
  }
  for(var i = count;i < arr.length;i++){
      [arr[i],arr[count]] = [arr[count],arr[i]]
      print([...arr],count+1)
  }
}


function runProgram(input) {
// Write code here
input = input.split('\n')
var arr = input[1].split(' ').map(Number)
//   console.log(arr)
print(arr,0)
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