var maximumEvenSplit = function (finalSum) {
    const result = [];
    if (finalSum % 2) return result

    let remainder = finalSum;

    for (let currentNum = 2; remainder >= currentNum; currentNum += 2) {
        result.push(currentNum);
        remainder -= currentNum;
    }

    result[result.length - 1] += remainder;
    return result;
};

console.log(maximumEvenSplit(3))
console.log(maximumEvenSplit(2))
console.log(maximumEvenSplit(4))
console.log(maximumEvenSplit(12))
