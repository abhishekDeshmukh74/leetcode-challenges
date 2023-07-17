var characterReplacement = function (s, k) {

    const charCountMap = new Map()
    let result = 0
    let left = 0
    let maxFreq = 0

    for (let right = 0; right < s.length; right++) {

        charCountMap.set(s[right], (charCountMap.get(s[right]) || 0) + 1)

        maxFreq = Math.max(maxFreq, charCountMap.get(s[right]))

        // shrink window from left
        while (right - left + 1 - maxFreq > k) {
            charCountMap.set(s[left], charCountMap.get(s[left]) - 1)
            left++
        }
        result = Math.max(result, right - left + 1)
    }
    return result
};

console.log(characterReplacement('ABAB', 2))
console.log(characterReplacement('AABABBA', 1))
