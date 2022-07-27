// Time complexity: Log(n)
var racecar = function (target) {

    const queue = [[0, 0, 1]]
    const visited = new Set();

    while (queue.length) {
        let [moves, position, speed] = queue.shift();
        if (position === target) return moves
        const key = `${position}-${speed}`
        if (visited.has(key)) continue

        visited.add(key)
        queue.push([moves + 1, position + speed, speed * 2])

        if ((position + speed > target && speed > 0) || (position + speed < target && speed < 0)) {
            speed > 0 ? speed = -1 : speed = 1
        }

        queue.push([moves + 1, position, speed])
    }
};

console.log(racecar(3))
