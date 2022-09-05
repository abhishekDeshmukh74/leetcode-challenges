// TODO - Optimize
var floodFill = function (image, sr, sc, color) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const visited = new Set();
  const flooded = new Set();
  const queue = [[sr, sc]];

  while (queue.length) {
    const [x, y] = queue.shift();
    const key = `${x}-${y}`;
    visited.add(key);
    flooded.add(key);

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const xInbounds = newX >= 0 && newX < image.length;
      const yInbounds = newY >= 0 && newY < image[0].length;
      if (
        !xInbounds ||
        !yInbounds ||
        image[newX][newY] !== image[x][y] ||
        visited.has(`${newX}-${newY}`)
      )
        continue;

      flooded.add(`${newX}-${newY}`);
      queue.push([newX, newY]);
    }
  }

  for (const [entry] of flooded.entries()) {
    const [x, y] = entry.split('-');
    image[x][y] = color;
  }
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
