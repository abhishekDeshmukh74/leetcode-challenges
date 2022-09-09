var numberOfWeakCharacters = function (properties) {

    properties.sort(([attA, defA], [attB, defB]) => attB - attA || defA - defB)

    let maxDefense = 0
    let answer = 0
    for (let i = 0; i < properties.length; i++) {
        const currentDefense = properties[i][1]
        if (currentDefense < maxDefense) answer++
        maxDefense = Math.max(maxDefense, currentDefense)
    }
    return answer
};

console.log(numberOfWeakCharacters([[5, 5], [6, 3], [3, 6]]))
console.log(numberOfWeakCharacters([[7, 9], [10, 7], [6, 9], [10, 4], [7, 5], [7, 10]]))
console.log(numberOfWeakCharacters([[7, 7], [1, 2], [9, 7], [7, 3], [3, 10], [9, 8], [8, 10], [4, 3], [1, 5], [1, 5]]))
