var minWindow = function (s, t) {
    if (t === '' || t.length > s.length) return ''

    const tMap = {}
    const sWindowMap = {}
    let have = 0
    let need = 0
    let resultLength = Infinity
    let result = [0, t.length - 1]

    for (let i = 0; i < t.length; i++) {
        if (!tMap[t[i]]) {
            tMap[t[i]] = 0
            need++
        }
        tMap[t[i]]++
    }

    let left = 0
    for (let right = 0; right < s.length; right++) {
        const char = s[right]
        if (!sWindowMap[char]) sWindowMap[char] = 0
        sWindowMap[char]++

        if (tMap[char] && sWindowMap[char] === tMap[char]) {
            have++
        }

        // substring found
        while (have === need) {

            const currentWindowLength = right - left + 1

            // update the result
            if (currentWindowLength < resultLength) {
                resultLength = currentWindowLength
                result = [left, right]
            }
            // pop left from our window
            sWindowMap[s[left]]--
            if (tMap[s[left]] && sWindowMap[s[left]] < tMap[s[left]]) {
                have--
            }
            left++
        }
    }
    return resultLength === Infinity ? '' : s.slice(result[0], result[1] + 1)
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('a', 'a'))
console.log(minWindow('a', 'aa'))
console.log(minWindow('aa', 'aa'))
