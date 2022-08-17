// Let N be the number of words in the list and LL be the maximum possible length of a word.
// Time complexity: O(N⋅(logN + L^2))
// Sorting a list of size N takes O(N*logN) time.Next, we use two for loops in which the outer loop runs for O(N) iterations and the inner loop runs for O(L^2) iterations in the worst case scenario.The first L is for the inner loop and the second LL is for creating each predecessor.Thus the overall time complexity is O(N*(logN + O(N⋅L^2))) which equals O(N*(log N + L^2)))

var longestStrChain = function (words) {
    words.sort((a, b) => a.length - b.length)
    const dp = {}

    let maxChainLength = 0;
    for (const word of words) {
        // remove characters one by one from word and check if obtained str is predecessor
        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1)
            dp[word] = Math.max(dp[word] || 0, predecessor in dp ? dp[predecessor] + 1 : 1)
        }
        maxChainLength = Math.max(maxChainLength, dp[word])
    }
    return maxChainLength
};

console.log(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']))
console.log(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']))
