// Let N be the number of candidates, T be the target value, and MM be the minimal value among the candidates.

// Time Complexity: O(N^T/M +1)
// As we illustrated before, the execution of the backtracking is unfolded as a DFS traversal in a n - ary tree.The total number of steps during the backtracking would be the number of nodes in the tree.
// At each node, it takes a constant time to process, except the leaf nodes which could take a linear time to make a copy of combination.So we can say that the time complexity is linear to the number of nodes of the execution tree.
// Here we provide a loose upper bound on the number of nodes.
// First of all, the fan - out of each node would be bounded to N, i.e.the total number of candidates.
// The maximal depth of the tree, would be T/M, where we keep on adding the smallest element to the combination.
// As we know, the maximal number of nodes in N - ary tree of T/M height would be N^T/M +1
// Note that, the actual number of nodes in the execution tree would be much smaller than the upper bound, since the fan - out of the nodes are decreasing level by level.

// Space Complexity: O(T/M)
// We implement the algorithm in recursion, which consumes some additional memory in the function call stack.
// The number of recursive calls can pile up to T/M, where we keep on adding the smallest element to the combination.As a result, the space overhead of the recursion is O(T/M)
// In addition, we keep a combination of numbers during the execution, which requires at most O(T/M) space as well.
// To sum up, the total space complexity of the algorithm would be O(T/M)
// Note that, we did not take into the account the space used to hold the final results for the space complexity.

var combinationSum = function (candidates, target) {
    const result = []
    const dfs = (i, current, currentTotal) => {
        if (i >= candidates.length || currentTotal > target) return
        if (currentTotal === target) {
            result.push([...current])
            return
        }

        current.push(candidates[i])
        dfs(i, current, currentTotal + candidates[i])
        current.pop()
        dfs(i + 1, current, currentTotal)
    }
    dfs(0, [], 0)
    return result
};

console.log(combinationSum([2, 3, 6, 7], 7))
