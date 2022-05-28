// Recursive DFS
var numIslands = function (grid) {
  let count = 0;
  const visited = new Set();

  const explore = (r, c) => {
    const rInbounds = r >= 0 && r < grid.length;
    const cInbounds = c >= 0 && c < grid[0].length;
    const pos = r + '-' + c;
    if (!rInbounds || !cInbounds || grid[r][c] === '0' || visited.has(pos)) return false;
    visited.add(pos);
    explore(r + 1, c);
    explore(r - 1, c);
    explore(r, c + 1);
    explore(r, c - 1);
    return true;
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(r, c)) count++;
    }
  }

  return count;
};

// Iterative BFS
var numIslands = function (grid) {
  let islands = 0;
  const visited = new Set();

  const bfs = (r, c, pos) => {
    visited.add(pos);

    const queue = [[r, c]];

    while (queue.length) {
      const [row, col] = queue.shift();
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (const [rOffset, cOffset] of directions) {
        const newR = row + rOffset;
        const newC = col + cOffset;
        const newRInbounds = newR >= 0 && newR < grid.length;
        const newCInbounds = newC >= 0 && newC < grid[0].length;
        const newPos = newR + '-' + newC;

        if (!newRInbounds || !newCInbounds || grid[newR][newC] === '0' || visited.has(newPos))
          continue;
        visited.add(newPos);
        queue.push([newR, newC]);
      }
    }
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const pos = r + '-' + c;
      if (grid[r][c] === '1' && !visited.has(pos)) {
        bfs(r, c);
        islands++;
      }
    }
  }
  return islands;
};

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
