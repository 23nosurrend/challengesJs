function convert(obj){
      let arr=[]
      for(key in obj){
        arr.push([key,obj[key]])
        
      }
      return arr
    }
    console.log(convert({name:1,age:100}))
    