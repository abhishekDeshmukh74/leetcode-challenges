// Recursive way(Top-down)
// Time complexity: O(N)
// Space complexity: O(N)
var minCost = function (costs) {
    // red => 0, blue => 1, green => 2, unpainted => 3

    const dp = Array(costs.length).fill().map(() => Array(4).fill())

    const dfs = (day, lastTask) => {
        if (day === 0) {
            let minCost = Infinity;
            for (let task = 0; task < costs[0].length; task++) {
                if (task === lastTask) continue;
                minCost = Math.min(minCost, costs[day][task]);
            }
            return minCost;
        }
        if (dp[day][lastTask]) return dp[day][lastTask]

        let minCost = Infinity
        for (let task = 0; task < costs[0].length; task++) {
            if (task === lastTask) continue;
            const currentMeritPoints = costs[day][task] + dfs(day - 1, task)
            minCost = Math.min(minCost, currentMeritPoints)
        }
        return dp[day][lastTask] = minCost
    }
    return dfs(costs.length - 1, 3)
};

// Iterative/tabular way(Bottom-up)
// Time complexity: O(N)
// Space complexity: O(N)
var minCost = function (costs) {
    // red => 0, blue => 1, green => 2, unpainted => 3

    const dp = Array(costs.length).fill().map(() => Array(4).fill())

    dp[0][0] = Math.min(costs[0][1], costs[0][2])
    dp[0][1] = Math.min(costs[0][0], costs[0][2])
    dp[0][2] = Math.min(costs[0][0], costs[0][1])
    dp[0][3] = Math.min(costs[0][0], costs[0][1], costs[0][2])

    for (let day = 1; day < costs.length; day++) {
        for (let lastTask = 0; lastTask < 4; lastTask++) {
            dp[day][lastTask] = Infinity
            for (let task = 0; task < costs[0].length; task++) {
                if (task === lastTask) continue;
                const currentMeritPoints = costs[day][task] + dp[day - 1][task]
                dp[day][lastTask] = Math.min(dp[day][lastTask], currentMeritPoints)
            }
        }
    }
    return dp[costs.length - 1][3]
};

// Iterative/tabular way(Bottom-up) 1D space optimization
// Time complexity: O(N)
// Space complexity: O(1)
var minCost = function (costs) {
    // red => 0, blue => 1, green => 2, unpainted => 3

    let prev = Array(4).fill()

    prev[0] = Math.min(costs[0][1], costs[0][2])
    prev[1] = Math.min(costs[0][0], costs[0][2])
    prev[2] = Math.min(costs[0][0], costs[0][1])
    prev[3] = Math.min(costs[0][0], costs[0][1], costs[0][2])

    for (let day = 1; day < costs.length; day++) {
        const current = Array(4).fill()
        for (let lastTask = 0; lastTask < 4; lastTask++) {
            current[lastTask] = Infinity
            for (let task = 0; task < costs[0].length; task++) {
                if (task === lastTask) continue;
                const currentMeritPoints = costs[day][task] + prev[task]
                current[lastTask] = Math.min(current[lastTask], currentMeritPoints)
            }
        }
        prev = current
    }
    return prev[3]
};

console.log(minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]]))
console.log(minCost([[7, 6, 2]]))
console.log(minCost([[11, 13, 20], [13, 20, 12], [15, 18, 9], [8, 1, 2], [20, 18, 20], [5, 15, 11], [2, 11, 8], [3, 20, 12], [5, 16, 14], [11, 7, 9], [16, 6, 1], [12, 9, 9], [11, 18, 13], [16, 12, 17], [8, 6, 12], [6, 5, 7], [2, 17, 4], [5, 20, 1], [4, 7, 15], [4, 16, 2], [2, 11, 20], [5, 18, 14], [11, 15, 11], [6, 6, 14], [13, 11, 19], [2, 10, 16], [3, 10, 11]]))
