var minCostClimbingStairs = function (cost) {
    const memo = Array(cost.length).fill(null);
    const minCost = (i) => {
        if (i < 0) return 0;
        if (memo[i] !== null) return memo[i]
        if (i == 0 || i == 1) return cost[i];
        memo[i] = cost[i] + Math.min(minCost(i - 1), minCost(i - 2));
        return memo[i]
    }
    return Math.min(minCost(cost.length - 1), minCost(cost.length - 2))
};

function minCostClimbingStairs(cost) {
    const table = Array(cost.length);
    for (let i = 0; i < cost.length; i++) {
        if (i < 2) table[i] = cost[i];
        else table[i] = cost[i] + Math.min(table[i - 1], table[i - 2]);
    }
    return Math.min(table[cost.length - 1], table[cost.length - 2]);
}


console.log(minCostClimbingStairs([10, 15, 20]))
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
console.log(minCostClimbingStairs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]))
