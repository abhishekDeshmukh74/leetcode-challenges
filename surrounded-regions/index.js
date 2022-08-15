var solve = function (board) {
    let convertTo = 'T'

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return
        if (board[i][j] !== 'O') return

        board[i][j] = convertTo

        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }

    // DFS on boundary and mark 'O' into 'T'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i === 0 || j === 0 || i === board.length - 1 || j === board[i].length - 1) {
                dfs(i, j)
            }
        }
    }

    convertTo = 'X'

    // DFS on 'O' and convert them to 'X'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            dfs(i, j)
        }
    }
    // Convert 'T' them to 'O'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'T') {
                board[i][j] = 'O'
            }
        }
    }
    return board
};

console.log(solve([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
]))
