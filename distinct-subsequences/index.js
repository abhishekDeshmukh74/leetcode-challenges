// Recursive - Top down
var numDistinct = function (s, t) {
    const dp = Array(s.length).fill().map(() => Array(t.length).fill())

    const dfs = (i, j) => {
        if (j < 0) return 1
        if (i < 0) return 0
        if (dp[i][j] !== undefined) return dp[i][j]

        dp[i][j] = dfs(i - 1, j)
        if (s[i] === t[j]) dp[i][j] += dfs(i - 1, j - 1)
        return dp[i][j]
    }
    return dfs(s.length - 1, t.length - 1)
}

// Iterative - Bottom up
var numDistinct = function (s, t) {
    const dp = Array(s.length + 1).fill().map(() => Array(t.length + 1).fill(0))

    for (let i = 0; i <= s.length; i++) dp[i][0] = 1
    // for (let j = 1; j <= t.length; j++) dp[0][j] = 0

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            dp[i][j] = dp[i - 1][j]
            if (s[i - 1] === t[j - 1]) dp[i][j] += dp[i - 1][j - 1]
        }
    }
    return dp[s.length][t.length]
}

// Iterative - 1D space optimization
var numDistinct = function (s, t) {
    let prev = Array(t.length + 1).fill(0)
    const current = Array(t.length + 1).fill(0)
    prev[0] = 1
    current[0] = 1

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            current[j] = prev[j]
            if (s[i - 1] === t[j - 1]) current[j] += prev[j - 1]
        }
        prev = [...current]
    }
    return prev[t.length]
}

console.log(numDistinct('rabbbit', 'rabbit'))
console.log(numDistinct('xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo', 'rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys'))
