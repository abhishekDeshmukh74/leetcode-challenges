// we can't go by typical pick or non pic way due to problem constraints

// Time Complexity: Approximately O(k * 2^n), where k is the average number of combinations.
// Space Complexity: Approximately O(k * n) for storing valid combinations and O(n) for recursion depth.
var combinationSum2 = function (candidates, target) {

    // Sort the candidates to handle duplicates
    candidates.sort((a, b) => a - b)
    const answer = []

    const dfs = (i, target, arr) => {
        if (target === 0) {
            answer.push([...arr])
            return;
        }

        for (let j = i; j < candidates.length; j++) {
            //  // Skip duplicate elements to prevent duplicate combinations
            if (j > i && candidates[j] === candidates[j - 1]) continue;
            if (candidates[j] > target) continue;
            arr.push(candidates[j]);
            dfs(j + 1, target - candidates[j], arr);
            arr.pop();
        }

    }
    dfs(0, target, [])
    return answer
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
