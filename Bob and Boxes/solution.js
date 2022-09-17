//Enter code here
function print(n) {
  if (n == 0) {
    return 1
  }
  if (n < 0) {
    return 0
  }

  return print(n - 1) + print(n - 3) + print(n - 5)
}

function runProgram(input) {
  // Write code here
  console.log(print(input))
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