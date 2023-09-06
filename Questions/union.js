class Solution {
    //Function to return the count of number of elements in union of two arrays.
    
    doUnion(a, n, b, m){
        // code here
        const x = [...a,...b]
         console.log(x)
         const mySet = new Set(x);
         
         return mySet.size;
       
        }
        
         
    }
    

let obj = new Solution();
const a = [85, 25, 1, 32, 54, 6,85];
const b = [85,2]
const n = a.length;
const m = b.length;
let x = obj.doUnion(a, n, b, m);