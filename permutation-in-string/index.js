// Time complexity: O(l1 + 26 * l1 * (l2-l1)).The hashmap contains at most 26 keys
// Space complexity: O(1). Hashmap contains at most 26 key - value pairs
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false
    const s1Map = {};
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] ? s1Map[s1[i]]++ : s1Map[s1[i]] = 1
    }

    let left = 0
    let right = s1.length - 1

    const windowMatch = (l, r) => {
        const windowMap = {}
        while (l <= r) {
            const char = s2[l]
            if (!s1Map[char]) return false
            windowMap[char] ? windowMap[char]++ : windowMap[char] = 1
            l++
        }

        for (const key in s1Map) {
            if (s1Map[key] !== windowMap[key]) return false
        }
        return true
    }

    while (right < s2.length) {
        if (windowMatch(left, right)) return true
        left++
        right++
    }
    return false
}

// Rather than finding anagrams for each window, we can slide each window and remove left and add right char.
// Time complexity: O(n).
// Space complexity: O(1). Hashmap contains at most 26 key - value pairs

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false
    const s1Map = {}
    const s2Map = {}
    const abcd = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < abcd.length; i++) {
        s1Map[abcd[i]] = 0
        s2Map[abcd[i]] = 0
    }

    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] ? s1Map[s1[i]]++ : s1Map[s1[i]] = 1
        s2Map[s2[i]] ? s2Map[s2[i]]++ : s2Map[s2[i]] = 1
    }

    let matches = 0
    for (let i = 0; i < abcd.length; i++) {
        if (s1Map[abcd[i]] === s2Map[abcd[i]]) matches++
    }

    let left = 0
    let right = s1.length

    while (right < s2.length) {
        const s2LeftChar = s2[left]
        const s2RightChar = s2[right]

        if (matches === 26) return true

        // remove left
        s2Map[s2LeftChar]--
        if (s2Map[s2LeftChar] === s1Map[s2LeftChar]) {
            matches++
        } else if (s2Map[s2LeftChar] === s1Map[s2LeftChar] - 1) {
            matches--
        }

        // add right
        s2Map[s2RightChar]++
        if (s2Map[s2RightChar] === s1Map[s2RightChar]) {
            matches++
        } else if (s2Map[s2RightChar] === s1Map[s2RightChar] + 1) {
            matches--
        }
        left++
        right++
    }
    return matches === 26
}

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
