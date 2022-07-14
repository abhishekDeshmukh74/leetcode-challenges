var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0) return -1;
  const destination = [grid.length - 1, grid[0].length - 1];
  const visited = new Set();
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [destX, destY] = destination;
    const [x, y, distance] = queue.shift();
    if (destX === x && destY === y) return distance;
    const key = `${x}-${y}`;
    if (visited.has(key)) continue;
    visited.add(key);

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      [1, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
    ];
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const newKey = `${newX}-${newY}`;
      const xInbounds = newX >= 0 && newX < grid.length;
      const yInbounds = newY >= 0 && newY < grid[0].length;
      if (!xInbounds || !yInbounds || grid[newX][newY] === 1 || visited.has(newKey)) continue;

      visited.add(key);
      queue.push([newX, newY, distance + 1]);
    }
  }
  return -1;
};

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);

console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
