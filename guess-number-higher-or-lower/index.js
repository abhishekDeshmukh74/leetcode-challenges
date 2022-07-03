var guessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (guess(middle) === 0) return middle;
    if (guess(middle) === 1) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
};
