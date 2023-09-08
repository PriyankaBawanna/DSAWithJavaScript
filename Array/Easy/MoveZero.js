const arr = [1, 2, 0, 4, 3, 0, 5, 0];
const n = arr.length;
function MoveZero(arr, n) {



    const swap = (arr, i, j) => {

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    let j = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] != 0) {
            //   Swap - A[j] , A[i]
            swap(arr, j, i); // Partitioning the array
            j++;
        }
    }

}
MoveZero(arr, n)