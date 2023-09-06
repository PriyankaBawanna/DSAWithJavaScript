const array = [1, 2, 3, 4, 5, 78, 65, 34, 55, 89, 90, 78];
const binarySearch = (arr, searchEleme) => {
    let left = 0;
    let right = arr.length;
    while (left <= right) {
        const midElem = Math.floor((left + right) / 2);
        if (arr[midElem] === searchEleme) {
            console.log("return ", arr[midElem])
            return [arr[midElem], midElem]
        }
        if (arr[midElem] > left) {
            left = midElem + 1
        } else {
            left = midElem - 1
        }
        if (left === arr.length) {
            return "element not present "
        }

    }

}
const searchEleme = 178;
let x = binarySearch(array, searchEleme)
console.log(x)