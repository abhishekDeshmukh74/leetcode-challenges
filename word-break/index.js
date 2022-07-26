// Recursive way(Top-down)
// Time complexity for Brute force is 0(m * n^m), when memoised is 0(n * m^2)
// Space complexity 0(m^2)

var wordBreak = function (s, wordDict, memo = {}) {
  if (memo[s]) return memo[s];
  if (s === '') return true;

  for (const word of wordDict) {
    if (s.indexOf(word) === 0) {
      const remainingStr = s.slice(word.length);
      const result = wordBreak(remainingStr, wordDict, memo);
      if (result) {
        memo[s] = result;
        return result;
      }
    }
  }
  memo[s] = false;
  return false;
};

// Iterative/tabular way(Bottom-up)
// Time complexity is 0(n * m^2)

var wordBreak = function (s, wordDict) {
  const table = Array(s.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= s.length; i++) {
    if (table[i]) {
      for (const word of wordDict) {
        const slice = s.slice(i, i + word.length);
        if (slice === word) table[i + word.length] = true;
      }
    }
  }
  return table[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
