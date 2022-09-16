//Enter code here
var flag = false
function print(arr,k,count,arr1){
    if(flag == true){
        return true
    }
    if(arr1.length == k){
        if(arr1.length == 1){
            flag = true
        }else{
                for(var m = 0; m < arr1.length-1;m++){
                if(arr1[m] == arr1[m+1]){
                    flag = true
                }else{
                    flag = false
                    break
                }
            }
        }
    }
    if(count == arr.length){
        return 
    }
    
    print(arr,k,count + 1,[...arr1])
    arr1.push(arr[count])
    print(arr,k,count + 1,[...arr1])
    
    return false 
}


function runProgram(input) {
  // Write code here
  input = input.split('\n')
  var arr = input[1].split(' ').map(Number)
  var k = input[2]
//   console.log(arr,k)
  print(arr,k,0,[])
  if(flag){
      console.log('True')
  }else{
      console.log('False')
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