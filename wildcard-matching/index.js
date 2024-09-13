var isMatch = function (s, p) {
    const dp = Array(s.length).fill().map(() => Array(p.length).fill())

    const dfs = (i, j) => {
        if (i === -1 && j === -1) return true
        if (j === -1 && i >= 0) return false
        if (i === -1 && j >= 0) {
            for (let k = 0; k <= j; k++) if (p[k] !== '*') return false
            return true
        }
        66
        if (dp[i][j] !== undefined) return dp[i][j]

        if (p[j] === s[i] || p[j] === '?') return dp[i][j] = dfs(i - 1, j - 1)

        // 1 char       // empty
        if (p[j] === '*') return dp[i][j] = dfs(i - 1, j) || dfs(i, j - 1)
        return dp[i][j] = false
    }

    return dfs(s.length - 1, p.length - 1)
};

var isMatch = function (s, p) {
    const dp = Array(s.length + 1).fill().map(() => Array(p.length + 1).fill())

    dp[0][0] = true
    for (let i = 1; i <= s.length; i++) dp[i][0] = false

    for (let j = 1; j <= p.length; j++) {
        for (let jj = 1; jj <= j; jj++) {
            if (p[jj - 1] !== '*') {
                dp[0][j] = false
                break;
            }
            dp[0][j] = true
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1]
            } else {
                dp[i][j] = false
            }
        }
    }
    return dp[s.length][p.length]
};

var isMatch = function (s, p) {
    let prev = Array(p.length + 1).fill(false)
    let current = Array(p.length + 1).fill(false)

    prev[0] = true;
    // for (let i = 1; i <= s.length; i++) prev[0] = false;

    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            prev[j] = prev[j - 1];
        } else {
            break;
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                current[j] = prev[j - 1]
            } else if (p[j - 1] === '*') {
                current[j] = prev[j] || current[j - 1]
            } else {
                current[j] = false
            }
        }
        prev = [...current]
    }
    return prev[p.length]
};

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', '*'))
console.log(isMatch('cb', '?a'))
console.log(isMatch('aab', 'c*a*b'))
console.log(isMatch('aa', 'aa'))
