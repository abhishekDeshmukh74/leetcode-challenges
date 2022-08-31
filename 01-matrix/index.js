var updateMatrix = function (mat) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const queue = []

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
            } else {
                mat[i][j] = -1
            }
        }
    }
    let level = 0
    while (queue.length) {
        const currentLevelSize = queue.length
        level++
        for (let i = 0; i < currentLevelSize; i++) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX < 0 || newY < 0 || newX >= mat.length || newY >= mat[0].length) continue
                if (mat[newX][newY] !== -1) continue
                mat[newX][newY] = level
                queue.push([newX, newY])
            }
        }
    }
    return mat
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
console.log(updateMatrix([
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1]
]))
