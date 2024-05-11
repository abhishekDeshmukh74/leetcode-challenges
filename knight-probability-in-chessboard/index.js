// Time complexity O(k⋅n^2)
// dfs
const knightProbability = function (n, k, row, column, visited = new Map()) {
  if (k < 0) return 1;
  if (row < 0 || row >= n || column < 0 || column >= n) return 0;
  const key = `${row}-${column}-${k}`;
  if (visited.has(key)) return visited.get(key);

  const a = knightProbability(n, k - 1, row + 2, column + 1, visited) / 8;
  const b = knightProbability(n, k - 1, row + 2, column - 1, visited) / 8;
  const c = knightProbability(n, k - 1, row - 2, column + 1, visited) / 8;
  const d = knightProbability(n, k - 1, row - 2, column - 1, visited) / 8;
  const e = knightProbability(n, k - 1, row + 1, column + 2, visited) / 8;
  const f = knightProbability(n, k - 1, row + 1, column - 2, visited) / 8;
  const g = knightProbability(n, k - 1, row - 1, column + 2, visited) / 8;
  const h = knightProbability(n, k - 1, row - 1, column - 2, visited) / 8;
  visited.set(key, a + b + c + d + e + f + g + h);
  return a + b + c + d + e + f + g + h;
};

console.log(knightProbability(3, 2, 0, 0));
