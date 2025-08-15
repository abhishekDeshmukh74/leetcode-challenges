var combinationSum3 = function (k, n) {

    const result = [];
    const dfs = (num, target, combination) => {
        if (combination.length === k) {
            if (target === 0) {
                result.push([...combination])
            }
            return;
        }
        if (target < 0 || num > 9) return;

        combination.push(num)
        dfs(num + 1, target - num, combination)
        combination.pop();
        dfs(num + 1, target, combination)
    }

    dfs(1, n, []);
    return result;
};

console.log(combinationSum3(3, 7)); // [[1,2,4]]
console.log(combinationSum3(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // []
console.log(combinationSum3(9, 45)); // [[1,2,3,4,5,6,7,8,9]]
