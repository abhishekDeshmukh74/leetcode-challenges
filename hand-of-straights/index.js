var isNStraightHand = function (hands, groupSize) {
    if (hands.length % groupSize !== 0) return false;

    const frequencyMap = {};
    for (let i = 0; i < hands.length; i++) {
        frequencyMap[hands[i]] = (frequencyMap[hands[i]] || 0) + 1;
    }

    hands.sort((a, b) => a - b);

    for (const num of hands) {
        if (frequencyMap[num] > 0) {
            for (let cur = num; cur < num + groupSize; cur++) {
                if (!frequencyMap[cur] || frequencyMap[cur] <= 0) return false;
                frequencyMap[cur]--;
            }
        }
    }
    return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
