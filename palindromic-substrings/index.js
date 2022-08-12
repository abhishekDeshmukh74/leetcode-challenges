// Time Complexity: O(n^2)
var countSubstrings = function (s) {

    const table = Array(s.length).fill().map(() => Array(s.length).fill(false))

    // Base case: single letter substrings
    for (let i = 0; i < s.length; i++) table[i][i] = true

    // Base case: double letter substrings
    for (let i = 0; i < s.length - 1; i++) table[i][i + 1] = s[i] === s[i + 1]

    // All other cases: substrings of length 3 to n
    for (let length = 3; length <= s.length; length++) {
        for (let i = 0, j = i + length - 1; j < s.length; i++, j++) {
            table[i][j] = table[i + 1][j - 1] && s[i] == s[j];
        }
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (table[i][j]) count++
        }
    }
    return count
};

console.log(countSubstrings('abc'))
console.log(countSubstrings('aaa'))
