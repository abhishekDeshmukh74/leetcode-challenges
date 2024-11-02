
// Time complexity => O(9^m) where where m is the number of empty cells
var solveSudoku = function (board) {
    const visited = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cellVal = board[i][j];
            if (cellVal === '.') continue;

            const rowKey = `r${i}-${cellVal}`;
            const colKey = `c${j}-${cellVal}`;
            const subGridKey = `s${Math.floor(i / 3)}-${Math.floor(j / 3)}-${cellVal}`;

            visited.add(rowKey);
            visited.add(colKey);
            visited.add(subGridKey);
        }
    }

    const dfs = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') continue;

                for (let num = '1'; num <= '9'; num++) {
                    const rowKey = `r${i}-${num}`;
                    const colKey = `c${j}-${num}`;
                    const subGridKey = `s${Math.floor(i / 3)}-${Math.floor(j / 3)}-${num}`;

                    if (visited.has(rowKey) || visited.has(colKey) || visited.has(subGridKey)) continue;

                    board[i][j] = String(num);
                    visited.add(rowKey);
                    visited.add(colKey);
                    visited.add(subGridKey);

                    if (dfs()) return true;

                    board[i][j] = '.';
                    visited.delete(rowKey);
                    visited.delete(colKey);
                    visited.delete(subGridKey);
                }
                return false;
            }
        }
        return true;
    };

    dfs();
    return board;
};



console.log(solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))
