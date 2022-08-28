var numOfMinutes = function (n, headID, manager, informTime) {
    const graph = {}
    for (let i = 0; i < manager.length; i++) {
        if (manager[i] === -1) continue;
        if (!graph[manager[i]]) graph[manager[i]] = []
        graph[manager[i]].push(i)
    }

    let answer = 0
    let max = 0
    const dfs = (manager) => {
        max = Math.max(max, answer)
        answer += informTime[manager]
        if (!graph[manager]) return
        for (const employee of graph[manager]) dfs(employee)
        answer -= informTime[manager]
    }

    dfs(headID)
    return max
}

console.log(numOfMinutes(1, 0, [-1], [0]))
console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]))
console.log(numOfMinutes(15, 0, [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(numOfMinutes(11, 4, [5, 9, 6, 10, -1, 8, 9, 1, 9, 3, 4],
    [0, 213, 0, 253, 686, 170, 975, 0, 261, 309, 337]))
