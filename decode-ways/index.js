var numDecodings = function (s) {

    const memo = {}
    const dfs = (i) => {
        if (i > s.length) return 0;
        if (i === s.length) return 1
        if (i in memo) return memo[i]
        if (s[i] === '0') return 0

        let result = dfs(i + 1)

        if (s[i] == '1' ||
            (s[i] == '2' && '0123456'.includes(s[i + 1]))
        ) {
            result += dfs(i + 2)
        }

        memo[i] = result
        return result
    }
    return dfs(0)
};

console.log(numDecodings('12'))
console.log(numDecodings('26'))
console.log(numDecodings('27'))
console.log(numDecodings('226'))
