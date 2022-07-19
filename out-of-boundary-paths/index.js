var findPaths = function (m, n, maxMove, startRow, startColumn, memo = new Map()) {

    const key = maxMove + '-' + startRow + '-' + startColumn;
    if (memo.has(key)) return memo.get(key);

    if (startRow === -1 || startRow === m || startColumn === -1 || startColumn === n) return 1;
    if (maxMove <= 0) return 0;

    memo.set(key, (
        findPaths(m, n, maxMove - 1, startRow - 1, startColumn, memo)
        + findPaths(m, n, maxMove - 1, startRow + 1, startColumn, memo)
        + findPaths(m, n, maxMove - 1, startRow, startColumn + 1, memo)
        + findPaths(m, n, maxMove - 1, startRow, startColumn - 1, memo)
    ) % 1000000007);

    return memo.get(key)
};

console.log(findPaths(2, 2, 2, 0, 0))
