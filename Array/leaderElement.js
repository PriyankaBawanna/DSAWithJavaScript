const arr = [31 ,40 ,93 ,40 ,98];
class Solution {
    //Function to find the leaders in the array.
    leaders(arr, n){
        // code here
           const resultArr =[];
          for(let i=1;i<arr.length;i++){
              if(arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
                  console.log(arr[i])
                  resultArr.push(arr[i])
              }
              
              if(i==arr.length-1){
                resultArr.push(arr[i])
              }
          }
          return resultArr;
    }
}
let obj = new Solution();
const n= arr.length;
let x = obj.leaders(arr, n);
console.log(x)