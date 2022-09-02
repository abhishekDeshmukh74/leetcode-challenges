const getCoordinates = (pos, boardLength) => {
    let row = Math.floor((pos - 1) / boardLength);
    let col = (pos - 1) % boardLength;
    col = (row % 2) === 1 ? boardLength - col - 1 : col;
    row = boardLength - row - 1;
    return [row, col];
}

var snakesAndLadders = function (board) {
    const boardLength = board.length
    const queue = [1]
    const visited = new Set()
    let steps = 0

    while (queue.length) {
        steps++
        let currentLevelLength = queue.length

        while (currentLevelLength--) {
            const currentNum = queue.shift()
            if (currentNum === boardLength * boardLength) return steps - 1

            for (let i = currentNum + 1; i <= Math.min(currentNum + 6, boardLength * boardLength); i++) {
                const [r, c] = getCoordinates(i, boardLength)
                const next = board[r][c] === -1 ? i : board[r][c]
                if (visited.has(next)) continue
                visited.add(next)
                queue.push(next)
            }
        }
    }
    return -1
}

console.log(snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1]
]))
console.log(snakesAndLadders([
    [1, 1, -1],
    [1, 1, 1],
    [-1, 1, 1]
]))
