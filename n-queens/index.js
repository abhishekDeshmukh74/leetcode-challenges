// Time complexity: O(N!)
// Unlike the brute force approach, we will only place queens on squares that aren't under attack. For the first queen, we have N options. For the next queen, we won't attempt to place it in the same column as the first queen, and there must be at least one square attacked diagonally by the first queen as well.Thus, the maximum number of squares we can consider for the second queen is N-2. For the third queen, we won't attempt to place it in 2 columns already occupied by the first 2 queens, and there must be at least two squares attacked diagonally from the first 2 queens. Thus, the maximum number of squares we can consider for the third queen is N - 4. This pattern continues, resulting in an approximate time complexity of N!.
// Space complexity: O(N^2)
// Extra memory used includes the 3 sets used to store board state, as well as the recursion call stack. All of this scales linearly with the number of queens. However, to keep the board state costs O(N^2), since the board is of size N*N. Space used for the output does not count towards space complexity.

const solveNQueens = (n) => {
    const column = new Set();
    const leftDiag = new Set();
    const rightDiag = new Set();
    const result = []
    const board = Array(n).fill().map(() => Array(n).fill('.'));

    const backtrack = (r) => {

        for (let c = 0; c < n; c++) {

            if (r === n) return result.push(board.map(r => r.join('')))

            if (column.has(c)) continue;
            if (leftDiag.has(r + c)) continue;
            if (rightDiag.has(r - c)) continue;

            board[r][c] = 'Q';
            column.add(c)
            leftDiag.add(r + c)
            rightDiag.add(r - c)

            backtrack(r + 1)

            column.delete(c)
            leftDiag.delete(r + c)
            rightDiag.delete(r - c)
            board[r][c] = '.';
        }
    }
    backtrack(0)
    return result
}

console.log(solveNQueens(4))
