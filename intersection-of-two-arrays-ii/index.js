var intersect = function (nums1, nums2) {
  const map = {};
  for (const num of nums1) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  const result = [];
  for (const num of nums2) {
    if (map[num]) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
