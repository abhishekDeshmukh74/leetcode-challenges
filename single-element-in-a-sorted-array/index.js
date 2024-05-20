var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] !== nums[middle - 1] && nums[middle] !== nums[middle + 1])
            return nums[middle];

        if ((nums[middle] !== nums[middle + 1] ? middle + 1 : middle) % 2 === 0) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
