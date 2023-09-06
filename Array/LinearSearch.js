const array = [1, 2, 3, 4, 5, 65, 34, 55, 89, 90, 78];
const LinerarSearch = (array, n, searchElement) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
}
const n = array.length;
const searchElement = 3;
let x = LinerarSearch(array, n, searchElement);
console.log(x);
array.splice(4, 0, 100)//add element on particular index
console.log(array)
array.splice(2, 1)//delete element on specific index
console.log(array)
