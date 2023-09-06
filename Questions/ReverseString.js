/*
Input : Hello World
Output : olleH dlroW
*/

function reverseString(str){
    let resulStr = "";
    const s = str.split("").reverse().join("");
    console.log(s)
    
}
const str = "Hello World";
reverseString(str);


/**reverse  String  */
/*
Input : Hello World
Output : olleH dlroW
*/

function reverseString(s){
  
    let resultArr = " ";

   for(let i=s.length-1;i>=0;i--){
     
       let word = s[i];
       for(let j=word.length-1;j>=0;j--){
           
         resultArr += word[j]   
       }
   }
   console.log(resultArr.split(" ").reverse().join(" "))

}
const str2 = "Hello World";
reverseString(str2);
