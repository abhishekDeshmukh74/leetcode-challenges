var isAlienSorted = function (words, order) {

    const orderIndexMap = {}
    for (let i = 0; i < order.length; i++) orderIndexMap[order[i]] = i

    for (let i = 0; i < words.length - 1; i++) {
        w1 = words[i]
        w2 = words[i + 1]

        for (let j = 0; j < w1.length; j++) {
            // If word A is prefix of word B, word B must come after word A
            if (j === w2.length) return false
            const index1 = orderIndexMap[w1[j]]
            const index2 = orderIndexMap[w2[j]]

            if (w1[j] !== w2[j]) {
                if (index2 < index1) return false
                break
            }
        }

    }
    return true
};

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'))
