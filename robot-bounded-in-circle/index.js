var isRobotBounded = function (instructions) {
    let currentXPosition = 0
    let currentYPosition = 0
    let currentDirection = 'N'
    const travel = {
        'N': [0, 1, 'W', 'E'],
        'E': [1, 0, 'N', 'S'],
        'S': [0, -1, 'E', 'W'],
        'W': [-1, 0, 'S', 'N'],
    }
    const getDirection = (turn) => {
        if (turn === 'L') return travel[currentDirection][2]
        if (turn === 'R') return travel[currentDirection][3]
    }

    for (const instruction of instructions) {
        if (instruction === 'L' || instruction === 'R') {
            currentDirection = getDirection(instruction)
        }
        if (instruction === 'G') {
            const [dx, dy] = travel[currentDirection]
            currentXPosition = currentXPosition + dx
            currentYPosition = currentYPosition + dy
            console.log(`${currentXPosition}:${currentYPosition}`)
        }
    }
    return (currentXPosition === 0 && currentYPosition === 0) || currentDirection !== 'N'
};

console.log(isRobotBounded("GGLLGG"))
console.log(isRobotBounded("GG"))
console.log(isRobotBounded("GL"))
