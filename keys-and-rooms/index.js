var canVisitAllRooms = function (rooms) {
    const visited = new Set()
    const queue = [0]
    visited.add(0)

    while (queue.length) {
        const current = queue.shift();

        for (const insideKey of rooms[current]) {
            if (visited.has(insideKey)) continue;
            visited.add(insideKey)
            queue.push(insideKey)
        }
    }
    return visited.size === rooms.length
};

console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))
