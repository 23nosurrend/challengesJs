function revered(str){
    let result=str.split("")
    arr2=[]
    for(let i=result.length-1;i>=0;i--){
      arr2.push(result[i])
      
    }
    return arr2.join("")
  }
  console.log(revered("keynes"))