//Enter code here
function print(n, arr) {
  var low = 0
  var high = n
  while (low < high) {

    var mid = low + Math.floor((high - low) / 2)

    if (arr[mid] > arr[mid + 1]) {
      return mid
    }

    if (arr[mid] < arr[mid - 1]) {
      return mid - 1
    }

    if (arr[low] >= arr[mid]) {
      high = mid - 1
    } else {
      low = mid
    }

    if (low == high) {
      return low
    }
  }
  return -1
}

function runProgram(input) {
  // Write code here
  input = input.split('\n')
  var n = +input[0]
  var arr = input[1].split(' ').map(Number)
  //   console.log(input)
  console.log(arr[print(n, arr) + 1])
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