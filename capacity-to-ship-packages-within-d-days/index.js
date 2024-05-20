const shipWithinDays = (weights, days) => {
    const isPossible = (currentCapacity) => {
        let requiredDays = 1;
        let currentLoad = 0;

        for (const weight of weights) {
            currentLoad += weight;
            if (currentLoad > currentCapacity) {
                requiredDays++;
                currentLoad = weight;
            }
        }
        return requiredDays <= days;
    };

    let sumOfWeights = 0;
    let maxWeight = 0;
    for (const weight of weights) {
        sumOfWeights += weight;
        if (weight > maxWeight) maxWeight = weight;
    }

    let left = Math.max(maxWeight, Math.ceil(sumOfWeights / days));
    let right = sumOfWeights;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        isPossible(middle) ? (right = middle - 1) : (left = middle + 1);
    }
    return left;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
