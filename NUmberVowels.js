function numberVowel(str){
      let vowel=["a","i","u","o","e"]
      let times=0
      for(let i=0;i<str.length;i++){
        
        if(vowel.includes(str[i])){
          times++
        }
      }
      return times
    }
    console.log(numberVowel("keynessss"))