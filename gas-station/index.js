const canCompleteCircuit = (gas, cost) => {
    let currentSum = 0;
    let totalTankSum = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        const currentCost = gas[i] - cost[i];
        currentSum += currentCost;
        totalTankSum += currentCost;
        if (currentSum < 0) {
            startIndex = i + 1;
            currentSum = 0;
        }
    }
    return totalTankSum < 0 ? -1 : startIndex;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
