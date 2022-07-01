var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const filteredRow = board[i].filter((e) => e !== '.');
    if (filteredRow.length !== new Set(filteredRow).size) return false;
    const columns = [
      board[0][i],
      board[1][i],
      board[2][i],
      board[3][i],
      board[4][i],
      board[5][i],
      board[6][i],
      board[7][i],
      board[8][i],
    ];
    const filteredCol = columns.filter((e) => e !== '.');
    if (filteredCol.length !== new Set(filteredCol).size) return false;
    if (i % 3 === 0) {
      for (let j = 0; j < board[i].length; j += 3) {
        const subGrid = [
          board[i][j],
          board[i][j + 1],
          board[i][j + 2],
          board[i + 1][j],
          board[i + 1][j + 1],
          board[i + 1][j + 2],
          board[i + 2][j],
          board[i + 2][j + 1],
          board[i + 2][j + 2],
        ];
        const filteredSubGrid = subGrid.filter((e) => e !== '.');
        if (filteredSubGrid.length !== new Set(filteredSubGrid).size) return false;
      }
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
