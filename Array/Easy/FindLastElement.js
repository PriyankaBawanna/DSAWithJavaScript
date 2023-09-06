const arr = [1, 5, 5, 6, 6, 7];
const n = arr.length;
function findLastDuplicate(arr, n) {
    for (let i = n; i > 0; i--) {
        if (arr[i] === arr[i - 1]) {

            return arr[i]
        }
    }
}
let x = findLastDuplicate(arr, n);
console.log(x)