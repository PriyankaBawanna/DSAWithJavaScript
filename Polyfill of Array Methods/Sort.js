Array.prototype.sort = function() {
    const resultArr =[];
    for(let i=0;i<this.length;i++){
        for(let j=i+1;j<this.length;j++){
            if(this[i]>this[j]){
              
                resultArr.push(this[j])
            }
        }
    }
    return resultArr;
 };
 var myArray = [10,20,30,405,50,60,70,80,90];

 var newLength = myArray.sort();
 console.log("new Array",myArray)