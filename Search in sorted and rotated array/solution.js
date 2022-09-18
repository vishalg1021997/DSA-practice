//Enter code here
function findpivot(n,k,arr){
    var low = 0
    var high = n
    while(low < high){
        var mid = low + Math.floor((high-low)/2)
        
        // mid < high &&
        if( arr[mid] > arr[mid+1]){
            return mid
        }
        
        // mid > low && 
        if(arr[mid] < arr[mid-1]){
            return mid-1
        }
        
        if(arr[low] >= arr[mid]){
            high = mid -1
        }else{
            low = mid + 1
        }
        
         if(low == high){
            return low
        }
    }
    return -1
}


function print(arr,k,low,high){
    while(low < high){
        
        var mid = low + Math.floor((high - low)/2)
        
        if(arr[mid] == k){
            return mid
        }
        
        if(arr[mid] > k){
            high = mid - 1
        }else{
            low = mid + 1
        }
        
         if(low == high && arr[low] == k){
            return low
        }
    }
    return -1
}


function runProgram(input) {
  // Write code here
  input = input.split('\n')
  var [n,k] = input[0].split(' ').map(Number)
  var arr = input[1].split(' ').map(Number)
  
   var pivot = findpivot(n,k,arr)
   
   if(arr[pivot] == k){
       console.log(pivot)
       return
   }
   
    if(arr[0] > k){
       console.log(print(arr,k,pivot + 1,n-1))
       return
    }
    
    console.log(print(arr,k,0,pivot-1))
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