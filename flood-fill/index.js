var floodFill = function (image, sr, sc, color) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [[sr, sc]]
  const startingPixelColor = image[sr][sc]
  image[sr][sc] = color

  while (queue.length) {
    const [x, y] = queue.shift()

    for (const [dx, dy] of directions) {
      const newX = x + dx
      const newY = y + dy
      if (newX < 0 || newY < 0 || newX >= image.length || newY >= image[0].length) continue;
      if (image[newX][newY] !== startingPixelColor) continue;
      if (startingPixelColor === color) continue;

      image[newX][newY] = color
      queue.push([newX, newY]);
    }
  }
  return image
}

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0))
