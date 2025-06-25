function divide(arr, n) {
  const result = [];
  let subarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if adding current element stays within the max sum
    if (currentSum + arr[i] <= n) {
      subarray.push(arr[i]);
      currentSum += arr[i];
    } else {
      // Push the current subarray and start a new one
      if (subarray.length > 0) {
        result.push(subarray);
      }
      subarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Push any remaining subarray
  if (subarray.length > 0) {
    result.push(subarray);
  }

  return result;
}
