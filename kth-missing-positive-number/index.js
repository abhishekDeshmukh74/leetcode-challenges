// O(n)
// var findKthPositive = function (arr, k) {
//   for (const num of arr) {
//     if (num > k) {
//       return k;
//     }
//     k++;
//   }
//   return k;
// };

const findKthPositive = (arr, k) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        arr[middle] - middle - 1 < k ? (left = middle + 1) : (right = middle - 1);
    }
    return left + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
