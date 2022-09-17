function spirallyTraversingAMatrix(N, matrix){
  //write code here
  var s = ''
  var stopI = 0
  var stopJ = 0
  if(N % 2 == 0){
      stopI = N/2
      stopJ = (N/2) - 1
  }else{
      stopI = Math.floor(N/2)
      stopJ = Math.floor(N/2)
  }
  
  var i = 0;
  var j = 0;
  var rightI = N
  var rightJ = N
  var leftI = 0
  var leftJ = 0
  while(i != stopI){
      
      while(j < rightJ){
          s += matrix[i][j] + ' '
          j++
      }
      
      j--
      i++
      
      while(i < rightI-1){
          s += matrix[i][j] + ' '
          i++
      }
      
      while(j > leftJ){
          s += matrix[i][j] + ' '
          j--
      }
      
      while(i > leftI){
          s += matrix[i][j] + ' '
          i--
      }
      
      i++
      j++
      leftI++
      rightJ--
      rightI--
      leftJ++
      
  }
      console.log(s)
}
