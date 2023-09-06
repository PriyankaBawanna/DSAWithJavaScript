function factorialOFNumber(num){
    let sum =1;
    for(let i=num;i>=1;i--){
        sum = sum * i;
    }
 
   return sum 
}
const number = 5;

let x = factorialOFNumber(number)
console.log(x )