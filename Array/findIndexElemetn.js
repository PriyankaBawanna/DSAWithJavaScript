const arr = [42, 1, 335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 12, 828, 962, 492, 996, 943, 828, 437, 392, 605, 903, 154, 293, 383, 422, 717, 719, 896, 448, 727, 772, 539, 870, 913, 668, 300, 36]
const n = arr.length;
function xyz(arr, n) {
    const resultArr = []
    for (let i = 0; i < n; i++) {
        if (arr[i] === i) {
            resultArr.push(arr[i])
        }
        if (i === n) {
            return -1
        }
    }
    return resultArr;
}
const res = xyz(arr, n);
console.log(res)