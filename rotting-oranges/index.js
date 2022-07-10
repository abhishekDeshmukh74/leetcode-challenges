var orangesRotting = function (grid) {
  let minMinutes = 0;
  let fresh = 0;
  const queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length && fresh > 0) {
    const qLength = queue.length;
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let i = 0; i < qLength; i++) {
      const [x, y] = queue.shift();

      for (const direction of directions) {
        const [offsetX, offsetY] = direction;
        const newX = x + offsetX;
        const newY = y + offsetY;
        const rInbounds = newX >= 0 && newX < grid.length;
        const cInbounds = newY >= 0 && newY < grid[0].length;

        if (!rInbounds || !cInbounds || grid[newX][newY] !== 1) continue;

        fresh--;
        grid[newX][newY] = 2;
        queue.push([newX, newY]);
      }
    }
    minMinutes++;
  }
  return fresh === 0 ? minMinutes : -1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
