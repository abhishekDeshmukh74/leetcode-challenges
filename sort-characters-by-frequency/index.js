// HashMap and Sort
// Time complexity: O(NlogN)
// Space complexity: O(N)
var frequencySort = function (s) {
    const map = {}
    for (const c of s) map[c] ? map[c]++ : map[c] = 1
    const sortedChars = Object.keys(map).sort((a, b) => map[b] - map[a])

    const result = []
    sortedChars.forEach(char => {
        let occurrences = map[char]
        while (occurrences--) result.push(char)
    })
    return result.join('')
}

// HashMap and Bucket sort
// Time complexity: O(N)
// Space complexity: O(N)
var frequencySort = function (s) {
    const map = new Map()
    const bucket = []
    let output = []

    for (let c of s) map.set(c, (map.get(c) || 0) + 1)

    for (let [char, freq] of map) {
        if (!bucket[freq]) bucket[freq] = []
        bucket[freq].push(char)
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (!bucket[i]) continue;
        for (let char of bucket[i]) output.push(char.repeat(i))
    }
    return output.join('')
}

console.log(frequencySort('tree'))
