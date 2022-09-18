//Enter code here
function print(n, k, arr) {
  var low = 0
  var high = n
  while (low < high) {
    var mid = low + Math.floor((high - low) / 2)
    if (arr[mid] > k) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return low
}


function runProgram(input) {
  // Write code here
  input = input.split('\n')
  var [n, k] = input[0].split(' ').map(Number)
  var arr = input[1].split(' ').map(Number)
  //   console.log(input)
  console.log(print(n, k, arr))
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