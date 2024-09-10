var minInsertions = function (s, t = s.split('').reverse().join('')) {

    const table = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0))

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                table[i][j] = 1 + table[i - 1][j - 1]
            } else {
                table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
            }
        }
    }

    const diff = s.length + t.length - 2 * table[s.length][t.length]
    return Math.floor(diff / 2)
};

console.log(minInsertions('zzazz'))
console.log(minInsertions('mbadm'))
console.log(minInsertions('leetcode'))
