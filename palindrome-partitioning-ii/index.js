var minCut = function (s) {

    const isPalindrome = (i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) return false
            i++
            j--
        }
        return true
    }

    const memo = {}
    const dfs = (i, j) => {
        // case "" && 'a'
        if (j <= i) return 0
        const key = `${i}-${j}`
        if (isPalindrome(i, j)) return 0
        if (key in memo) return memo[key]

        let min = Infinity
        for (let k = i; k < j; k++) {
            // only cut of str(i,k) is palindrome
            if (isPalindrome(i, k)) {
                ans = 1 + dfs(i, k) + dfs(k + 1, j)
                min = Math.min(min, ans)
            }
        }
        return memo[key] = min
    }
    return dfs(0, s.length - 1)
};

console.log(minCut('aab'))
console.log(minCut('nitik'))
console.log(minCut('nitin'))
console.log(minCut('eegiicgaeadbcfacfhifdbiehbgejcaeggcgbahfcajfhjjdgj'))
console.log(minCut('apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp'))
