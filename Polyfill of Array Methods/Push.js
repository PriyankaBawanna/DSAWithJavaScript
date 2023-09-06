Array.prototype.push = function() {

    for (var i = 0; i < arguments.length; i++) {
     this[this.length] = arguments[i];
   }
   return this.length;
 
 };



var myArray = [1, 2, 3];
var newLength = myArray.push(4, 5, 6,9,10);