var findLonelyPixel = function (picture) {
    const xMap = {}
    const yMap = {}
    const blackPixels = []

    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < picture[i].length; j++) {
            if (picture[i][j] === 'B') {
                blackPixels.push([i, j])
                i in xMap ? xMap[i]++ : xMap[i] = 1
                j in yMap ? yMap[j]++ : yMap[j] = 1
            }
        }
    }
    let lonely = 0
    for (const [i, j] of blackPixels) {
        if (xMap[i] === 1 && yMap[j] === 1) lonely++
    }
    return lonely
};

console.log(findLonelyPixel([['W', 'W', 'B'], ['W', 'B', 'W'], ['B', 'W', 'W']]))
console.log(findLonelyPixel([['B', 'B', 'B'], ['B', 'B', 'W'], ['B', 'B', 'B']]))
