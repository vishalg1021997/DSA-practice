//Enter code here
function print(n, arr) {
  var stack = []
  var lane = []
  for (var i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > stack[stack.length - 1]) {
      lane.push(stack.pop())
    }

    if (arr[i] > arr[i + 1]) {
      stack.push(arr[i])
    } else {
      lane.push(arr[i])
    }
  }

  while (stack.length > 0) {
    lane.push(stack.pop())
  }
  return lane
}

function runProgram(input) {
  // Write code here
  input = input.split('\n')
  for (var _ = 0; _ < input.length; _ = _ + 2) {
    if (input[_] == 0) {
      return
    } else {
      var n = input[_]
      var arr = input[_ + 1].trim().split(' ').map(Number)

      var newarr = print(n, arr)
      var flag = false

      arr.sort((a, b) => a - b)

      for (var j = 0; j < arr.length; j++) {
        if (arr[j] == newarr[j]) {
          flag = true
        } else {
          flag = false
          break
        }
      }

      if (flag) {
        console.log('yes')
      } else {
        console.log('no')
      }
    }
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