class Solution{
    segregateElements(arr,n){
        //code here
        const postiveArr=[];
        const negativeArr=[];

           let resultArr =[];
        for(let i=0;i<n;i++){
            if(arr[i]>0){
             
                postiveArr.push(arr[i])
            }
            else{
                negativeArr.push(arr[i])
            }
        }
         resultArr = [...postiveArr,...negativeArr]

    return resultArr
    }
   
}
let obj =  new Solution();
const arr = [-5, 7, -3, -4, 9, 10, -1, 11];
const n = arr.length;
const x = obj.segregateElements(arr,n)
console.log(x)
//7  9  10  11  -5  -3  -4  -1







//optimized solution

class Solution {
    segregateElements(arr, n) {
        let j = 0;

        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) {
                if (i !== j) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                j++;
            }
        }

        return arr;
    }
}


// -5 -3 -4 -1 7 9 10 11



