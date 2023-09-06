let numbers = [1, 2, 3, 4, 5];

const indexToDelete = 3; // Index of the element to delete

for (let i = 0; i < numbers.length; i++) {
    if (i === indexToDelete) {
        numbers.splice(i, 1); // Remove one element at index i
        break; // Exit the loop after deletion
    }
}

console.log(numbers);  // Output: [1, 2, 3, 5]

//second way-
function DeleteNum() {
    const data = [1, 2, 3, 4, 5, 5, 5, 6, 7];
    for (let i = 4; i < data.length; i++) {
        data[i] = data[i + 1];
    }
    data.length = data.length - 1
    console.log(data)
}