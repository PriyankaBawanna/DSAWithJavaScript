function RemoveDuplicate (str){
    let myMap = new Map();
    let  newString = "";
   for(let i=0;i<str.length;i++){
     if(!myMap.has(str[i])){
         myMap.set(str[i])
         //console.log(str[i])
          newString +=str[i];
     }
   }
   return newString;
  
}
function RemoveDuplicate2 (str){
    const mySet = new Set(str);
    console.log(mySet)
  }
 RemoveDuplicate2(str);


 function RemoveDuplicate3(str){
    let  resultString =  " ";
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                 resultString += str[i]
                // newString +=str[i];
            }
        }
    }
    console.log(resultString)
}
const str1 ="xxyyZZ";
RemoveDuplicate3(str1)


const str = "abcabc";
RemoveDuplicate(str)