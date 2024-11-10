var mergeTriplets = function (triplets, target) {
    const merged = [0, 0, 0];

    for (const triplet of triplets) {
        if (triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) continue;

        merged[0] = Math.max(merged[0], triplet[0]);
        merged[1] = Math.max(merged[1], triplet[1]);
        merged[2] = Math.max(merged[2], triplet[2]);
    }

    return merged[0] === target[0] && merged[1] === target[1] && merged[2] === target[2];
};

console.log(mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5]))
