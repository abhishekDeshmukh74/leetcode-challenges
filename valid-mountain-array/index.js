// var validMountainArray = function (arr) {
//   let isIncreasing = true;
//   if (arr.length === 1) return false;
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0 && arr[i + 1] <= arr[i]) return false;
//     if (i === arr.length - 1 && isIncreasing) return false;

//     if (arr[i + 1] <= arr[i]) isIncreasing = false;
//     if (!isIncreasing && arr[i + 1] >= arr[i]) return false;
//   }
//   return true;
// };

var validMountainArray = function (arr) {
  let i = 0;
  while (i < arr.length - 1 && arr[i] < arr[i + 1]) i++;

  if (i === 0 || i === arr.length - 1) return false;

  while (i < arr.length - 1) {
    if (arr[i] <= arr[i + 1]) return false;
    i++;
  }
  return true;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([2]));
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
