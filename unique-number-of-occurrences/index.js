var uniqueOccurrences = function (arr) {
    const frequencyMap = new Map()
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }
    return frequencyMap.size === new Set(frequencyMap.values()).size;
};


console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1, 2]))
