var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;
  const reshaped = [];
  let row = [];

  let newR = 0;
  let newC = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      row.push(mat[i][j]);
      newC++;
      if (newC === c) {
        newC = 0;
        newR++;
        reshaped.push(row);
        row = [];
      }
    }
  }
  return reshaped;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
