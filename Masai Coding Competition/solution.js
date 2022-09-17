//Enter code here
function print(n,arr){
  var q = []
  var q1 = []
  var q2 = []
  var q3 = []
  var q4 = []
  var remove = []
  
  for(var i = 0;i < arr.length;i++){
      if(arr[i][0] == 'E'){
          if(!q.includes(arr[i][1])){
              q.push(arr[i][1])
          }
          if(arr[i][1] == 1){
              q1.push(arr[i][2])
          }else if(arr[i][1] == 2){
              q2.push(arr[i][2])
          }else if(arr[i][1] == 3){
              q3.push(arr[i][2])
          }else if(arr[i][1] == 4){
              q4.push(arr[i][2])
          }
      }
      if(arr[i][0] == 'D'){
          if(q[0] == 1 && q1.length > 0){
              console.log(1,q1.shift())
              if(q1.length == 0){
                  q.shift()
              }
          }else if(q[0] == 2 && q2.length > 0){
              console.log(2,q2.shift())
              if(q2.length == 0){
                  q.shift()
              }
          }else if(q[0] == 3 && q3.length > 0){
              console.log(3,q3.shift())
              if(q3.length == 0){
                  q.shift()
              }
          }else if(q[0] == 4 && q4.length > 0){
              console.log(4,q4.shift())
              if(q4.length == 0){
                  q.shift()
              }
          }
      }
  }
}


function runProgram(input) {
// Write code here
input = input.split('\n').map((el)=>el.split(' '))
print(input[0][0],input.slice(1))
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