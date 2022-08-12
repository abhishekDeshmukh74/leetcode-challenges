// Expand around center
var longestPalindrome = function (s) {

    const expandLeftAndRight = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return right - left - 1
    }

    if (!s || s.length === 0) return ''
    let start = 0
    let end = 0

    for (let i = 0; i < s.length; i++) {
        const odd = expandLeftAndRight(i, i)
        const even = expandLeftAndRight(i, i + 1)
        const maxLength = Math.max(odd, even)
        if (maxLength > end - start) {
            start = i - (maxLength - 1) / 2
            end = i + maxLength / 2
        }
    }
    return s.slice(Math.ceil(start), end + 1)
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('abacdfgdcaba'))
console.log(longestPalindrome('aacabdkacaa'))
console.log(longestPalindrome('cbbd'))
