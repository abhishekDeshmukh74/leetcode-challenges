var solution = function (isBadVersion) {
  return function (n) {
    let l = 0;
    let r = n;
    let result = n;

    while (l <= r) {
      let middle = Math.ceil((l + r) / 2);
      if (isBadVersion(middle)) {
        result = middle;
        r = middle - 1;
      } else {
        l = middle + 1;
      }
    }
    return result;
  };
};
