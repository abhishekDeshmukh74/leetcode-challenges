var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  const visited = new Set();

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
      const key = `${i}-${j}`;
      if (visited.has(key)) continue;
      visited.add(key);
      area++;
      for (const [di, dj] of directions) {
        const newI = i + di;
        const newJ = j + dj;
        const newKey = `${newI}-${newJ}`;
        const iInbounds = newI >= 0 && newI < grid.length;
        const jInbounds = newJ >= 0 && newJ < grid[0].length;
        if (!iInbounds || !jInbounds || grid[newI][newJ] !== 1 || visited.has(newKey)) continue;
        queue.push([newI, newJ]);
      }
    }
    return area;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const key = `${i}-${j}`;
      if (grid[i][j] === 1 && !visited.has(key)) {
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
