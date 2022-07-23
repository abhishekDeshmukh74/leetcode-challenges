var setZeroes = function (matrix) {

    let rowZero = false;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                i > 0 ? matrix[i][0] = 0 : rowZero = true;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
        }
    }

    if (matrix[0][0] === 0) {
        for (let i = 0; i < matrix.length; i++) matrix[i][0] = 0
    }
    if (rowZero) {
        for (let j = 0; j < matrix[0].length; j++) matrix[0][j] = 0
    }
    return matrix
};

console.log(setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]))
console.log(setZeroes([
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0]
]))
