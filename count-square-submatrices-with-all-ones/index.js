// Dp
var countSquares = function (matrix) {
    const dp = Array(matrix.length)
        .fill()
        .map(() => Array(matrix[0].length).fill());

    for (let i = 0; i < matrix.length; i++) dp[i][0] = matrix[i][0];
    for (let j = 0; j < matrix[0].length; j++) dp[0][j] = matrix[0][j];

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }

    let sum = 0;
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            sum += dp[i][j];
        }
    }
    return sum;
};

// Otimization 1
var countSquares = function (matrix) {
    const dp = Array(matrix.length)
        .fill()
        .map(() => Array(matrix[0].length).fill(0));

    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = matrix[i][j];
            } else if (matrix[i][j] === 0) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
            }
            sum += dp[i][j];
        }
    }
    return sum;
};

// Otimization 2
var countSquares = function (matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) continue;
            if (i > 0 && j > 0) {
                matrix[i][j] += Math.min(
                    matrix[i - 1][j],
                    matrix[i - 1][j - 1],
                    matrix[i][j - 1]
                );
            }
            sum += matrix[i][j];
        }
    }
    return sum;
};

console.log(
    countSquares([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
    ])
);
console.log(
    countSquares([
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0],
    ])
);
