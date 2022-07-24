var searchMatrix = function (matrix, target) {
    r = 0;
    c = matrix[0].length
    while (r < matrix.length && c >= 0) {
        if (matrix[r][c] === target) return true
        matrix[r][c] < target ? r++ : c--
    }
    return false
};

console.log(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5))
