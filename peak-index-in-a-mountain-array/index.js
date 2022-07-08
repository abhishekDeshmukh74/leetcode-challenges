var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle + 1] > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
