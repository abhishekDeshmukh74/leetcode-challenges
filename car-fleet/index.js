
const carFleet = (target, position, speed) => {
    const tuples = position.map((pos, index) => [pos, (target - pos) / speed[index]])
    tuples.sort((a, b) => a[0] - b[0])
    const stack = []

    for (const tuple of tuples) {
        while (stack.length && stack[stack.length - 1][1] <= tuple[1]) {
            stack.pop()
        }
        stack.push(tuple)
    }
    return stack.length
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
