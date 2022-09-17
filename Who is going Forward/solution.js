//Enter code here
function print(n, k, arr) {
  var count = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[k - 1] && arr[i] > 0) {
      count++
    }
  }
  return count
}

function runProgram(input) {
  // Write code here
  input = input.split('\n')
  var [n, k] = input[0].split(' ').map(Number)
  var arr = input[1].split(' ').map(Number)
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