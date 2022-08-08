var searchMatrix = function (matrix, target) {
  let left = 0
  let right = matrix.length * matrix[0].length - 1

  while (left <= right) {
    let middle = Math.ceil((left + right) / 2)
    const middleI = Math.floor(middle / matrix[0].length)
    const middleJ = middle % matrix[0].length

    if (matrix[middleI][middleJ] === target) return true
    matrix[middleI][middleJ] > target ? right = middle - 1 : left = middle + 1
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
