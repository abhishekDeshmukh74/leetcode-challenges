var maxScore = function (cardPoints, k) {
    let left = 0;
    let right = cardPoints.length - k
    let total = 0;

    for (let i = right; i < cardPoints.length; i++) total += cardPoints[i]
    let maxSum = total;

    while (left < k) {
        total += cardPoints[left] - cardPoints[right]
        maxSum = Math.max(maxSum, total)
        left++
        right++
    }
    return maxSum;
};

console.log(maxScore([2, 2, 2], 2))
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3))
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7))
console.log(maxScore([100, 40, 17, 9, 73, 75], 3))
