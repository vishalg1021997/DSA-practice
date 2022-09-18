//Enter code here
function print(m,n,arr){

  if(arr[0] == 0 && arr[1] == 0){
      arr[0] = 1
      n--
  }
  
  for(var i = 1;i < m-1;i++){
      if(arr[i] == 0 && arr[i+1] == 0 && arr[i-1] == 0){
          arr[i] = 1
          n--
      }
      if(n == 0){
          return 'Yes'
      }
  }
  
  if(arr[m-1] == 0 && arr[m-2] == 0){
      arr[m-1] = 1
      n--
  }
  
  if(n == 0){
      return 'Yes'
  }else{
      return 'No'
  }
}

function runProgram(input) {
// Write code here
input = input.split('\n')
for(var _ = 1;_ < input.length;_ = _ + 2){
    var [m,n] = input[_].split(' ').map(Number)
    var arr = input[_+1].split(' ').map(Number)
    console.log(print(m,n,arr))
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