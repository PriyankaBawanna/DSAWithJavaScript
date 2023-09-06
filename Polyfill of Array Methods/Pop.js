Array.prototype.pop = function() {

    //itreate the arrya  using for loop 
    // here this Represent the current index 
    for(let i=0;i<this.length;i++){
       
        if(i===this.length-1){
         
            this[i]=this[i-1]
            this.length= this.length-1
            return this;
        }
        
    }  

};



var myArray = [1, 2, 3];
const n=myArray.length;

var newLength = myArray.pop(n);
console.log("new Array",myArray)


