// Categorize by sorted string
// Time complexity: O(NKlogK)
var groupAnagrams = function (strs) {
    let sortedStrs = strs.map(e => e.split('').sort().join(''))
    let hash = {}
    for (let i = 0; i < strs.length; i++) {
        let str = sortedStrs[i];
        if (!hash[str]) hash[str] = []
        hash[str].push(strs[i])
    }
    return Object.values(hash)
}

// Categorize by count
// Time complexity: O(NK)
var groupAnagrams = function (strs) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const getCountHash = (map) => {
        let hash = ''
        for (let i = 0; i < alphabets.length; i++) {
            map[alphabets[i]] ? hash += map[alphabets[i]] : hash += 0
            hash += '-'
        }
        return hash
    }

    const anagramMap = {}
    for (let i = 0; i < strs.length; i++) {
        const countMap = {}
        for (let j = 0; j < strs[i].length; j++) {
            countMap[strs[i][j]] ? countMap[strs[i][j]]++ : countMap[strs[i][j]] = 1
        }
        const hash = getCountHash(countMap)

        if (!anagramMap[hash]) anagramMap[hash] = []
        anagramMap[hash].push(strs[i])
    }
    return Object.values(anagramMap);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
