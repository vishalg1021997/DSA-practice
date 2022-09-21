//Enter code here
function print(n,p,q,arr1,arr2){
  var sets = new Set([...arr1,...arr2])
  
  var sum = n * (n+1)/2
  
  // for(var i = 1;i <= n;i++){
  //     sum += i
  // }
  
  var sum1 = 0
  
  sets.forEach((el) => sum1 += el)
  
  return sum == sum1 ? 'Winner': 'Loser'
}

function runProgram(input) {
// Write code here
input = input.split('\n')
var [n,p,q] = input[0].split(' ').map(Number)

var arr1 = []
var arr2 = []

p === 0 ? arr1 = [] : arr1 = input[1].split(' ').map(Number)
q === 0 ? arr2 = [] : p === 0 ? arr2 = input[1].split(' ').map(Number):arr2 = input[2].split(' ').map(Number)

console.log(print(n,p,q,arr1,arr2))

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