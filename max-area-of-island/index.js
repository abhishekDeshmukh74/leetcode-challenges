var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  const exploreArea = (i, j) => {
    let area = 0;
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    const queue = [[i, j]];

    while (queue.length) {
      const [i, j] = queue.shift();
      if (grid[i][j] === 0) continue;
      grid[i][j] = 0;
      area++;
      for (const [di, dj] of directions) {
        const newI = i + di;
        const newJ = j + dj;
        if (
          newI < 0 ||
          newJ < 0 ||
          newI >= grid.length ||
          newJ >= grid[0].length ||
          grid[newI][newJ] === 0
        )
          continue;
        queue.push([newI, newJ]);
      }
    }
    return area;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        const currentArea = exploreArea(i, j);
        if (currentArea > maxArea) maxArea = currentArea;
      }
    }
  }
  return maxArea;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ])
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
