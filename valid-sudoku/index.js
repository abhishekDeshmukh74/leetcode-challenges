var isValidSudoku = function (board) {
  const visited = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cellVal = board[i][j];
      if (cellVal === '.') continue;

      const rowKey = `r${i}-${cellVal}`;
      const colKey = `c${j}-${cellVal}`;
      const subgridKey = `s${Math.floor(i / 3)}-${Math.floor(j / 3)}-${cellVal}`;

      if (visited.has(rowKey) || visited.has(colKey) || visited.has(subgridKey)) {
        return false;
      }

      visited.add(rowKey);
      visited.add(colKey);
      visited.add(subgridKey);
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
