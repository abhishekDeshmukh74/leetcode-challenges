var rotate = function (matrix) {
  let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      // store top left
      const topLeft = matrix[l][l + i];

      // top left <== bottom left
      matrix[l][l + i] = matrix[r - i][l];

      // bottom left <== bottom right
      matrix[r - i][l] = matrix[r][r - i];

      // bottom right <== top right
      matrix[r][r - i] = matrix[l + i][r];

      // top right <== top left
      matrix[l + i][r] = topLeft;
    }
    l++;
    r--;
  }
  return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
