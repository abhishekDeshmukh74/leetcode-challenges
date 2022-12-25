var calculateTime = function (keyboard, word) {
    const map = {}
    for (let i = 0; i < keyboard.length; i++) map[keyboard[i]] = i

    let currentIndex = 0
    let time = 0
    for (let i = 0; i < word.length; i++) {
        const currentLetterIndex = map[word[i]]
        const distance = Math.abs(currentLetterIndex - currentIndex)
        time += distance
        currentIndex = currentLetterIndex
    }
    return time
}

console.log(calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba'))
console.log(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode'))
