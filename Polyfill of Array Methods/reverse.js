Array.prototype.myReverse= function (){
    const resultArr =[]
for(let i=this.length-1;i>=0;i--){
   resultArr.push(this[i]) 
}
return resultArr;
}
const x = arr.myReverse();
console.log(x)
