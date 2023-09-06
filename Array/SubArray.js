function findSubarrayWithSum(arr, targetSum) {
    let start = 0;
    let end = 0;
    let currentSum = 0;
  
    while (end < arr.length) {
      currentSum += arr[end];
  
      while (currentSum > targetSum) {
        currentSum -= arr[start];
        start++;
      }
  
      if (currentSum === targetSum) {
        return arr.slice(start, end + 1);
      }
  
      end++;
    }
  
    return null; // No subarray found
  }

  
  if (subarray) {
    console.log("Subarray with the target sum:", subarray);
  } else {
    console.log("No subarray found with the target sum.");
  }
  



  function findSubarrayWithSum(arr, targetSum) {
  let start = 0;
  let currentSum = arr[0];

  for (let end = 1; end <= arr.length; end++) {
    while (currentSum > targetSum && start < end - 1) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === targetSum) {
      return arr.slice(start, end);
    }

    if (end < arr.length) {
      currentSum += arr[end];
    }
  }

  return null; // No subarray found
}

const array = [1, 4, 20, 3, 10, 5];
const targetSum = 33;
const subarray = findSubarrayWithSum(array, targetSum);

if (subarray) {
  console.log("Subarray with the target sum:", subarray);
} else {
  console.log("No subarray found with the target sum.");
}
