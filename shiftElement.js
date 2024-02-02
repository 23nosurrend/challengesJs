function changePosition(arr){
    if(arr.length<=1){
        return arr
    }
    let lastElement=arr.shift()
    arr.push(lastElement)
    return arr
}

console.log(changePosition([1,2,3,4]))