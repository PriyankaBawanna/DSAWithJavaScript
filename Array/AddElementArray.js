/**Add Array Element on the First position */
function addArrayElement() {
    let numbers = [1, 2, 3, 4, 5];
    numbers.unshift(2);
    numbers.push(3)
    console.log(numbers)

}
addArrayElement();

function addArrayElement() {
    function insertAtIndex(arr, index, value) {
        if (index < 0 || index > arr.length) {
            return arr; // Invalid indexs, return the array as is
        }

        const newArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                newArray.push(value); // Insert the new value at the specified index
            }
            newArray.push(arr[i]); // Copy the original element
        }

        return newArray;
    }

    let numbers = [1, 2, 3, 5];

    const indexToInsert = 3; // Index where the element should be inserted
    const newValue = 4;      // New element value
    numbers = insertAtIndex(numbers, indexToInsert, newValue);

    console.log(numbers); // Output: [1, 2, 3, 4, 5]

}
function addElement() {
    const number = [10, 20, 30, 40, 50, 70];
    const indexNumber = 5;
    for (let i = number.length; i >= 0; i--) {
        if (i >= indexNumber) {
            number[i + 1] = number[i]
            console.log(number)
        }
    }
}
addElement()