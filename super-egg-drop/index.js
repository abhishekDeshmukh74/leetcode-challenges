// Time Complexity: O(K∗N^2)
// Space Complexity: O(K∗N)
// Recursive
var superEggDrop = function (k, n) {

    const memo = {};

    const dfs = (eggs, floors) => {
        const key = `${eggs}-${floors}`
        if (key in memo) return memo[key]
        if (eggs === 1 || floors <= 1) return floors
        let min = Infinity;

        for (let i = 1; i <= floors; i++) {
            const breaks = dfs(eggs - 1, i - 1);
            const notBreaks = dfs(eggs, floors - i);
            ans = Math.max(breaks, notBreaks)
            min = Math.min(min, ans + 1)
        }
        memo[key] = min;
        return memo[key];
    }
    return dfs(k, n)
};

// Time Complexity: O(K∗NlogN)
// Space Complexity: O(K∗N)
// Recursive binary search
var superEggDrop = function (k, n) {
    const memo = {};

    const dfs = (eggs, floors) => {
        const key = `${eggs}-${floors}`
        if (key in memo) return memo[key]
        if (eggs === 1 || floors <= 1) return floors
        let min = Infinity

        let left = 0;
        let right = n

        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            const breaks = dfs(eggs - 1, middle - 1)
            const notBreaks = dfs(eggs, floors - middle)
            if (breaks < notBreaks) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
            ans = 1 + Math.max(breaks, notBreaks)
            min = Math.min(min, ans)
            memo[key] = min;
        }
        return memo[key];
    }
    return dfs(k, n)
};

console.log(superEggDrop(3, 14))
