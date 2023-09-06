const array = [78, 90, 44, 55, 78, 90, 1, 867, 1, 2, 3, 4, 5, 78, 65, 34, 55, 89, 90, 78];
const findMinMax = (arr) => {
    let min = arr[0];
    let max = 0;

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]

        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log(min, max)
}
findMinMax(array);