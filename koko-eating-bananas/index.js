// Time complexity: O(n⋅logm) nnn be the length of the input array piles and m be the
//  maximum number of bananas in a single pile from piles

var minEatingSpeed = function (piles, h) {
    const getSpentHours = (speed) =>
        piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

    let maxPile = 0;
    let sum = 0;

    for (const pile of piles) {
        sum += pile;
        if (pile > maxPile) maxPile = pile;
    }
    let minPile = Math.ceil(sum / h);

    while (minPile <= maxPile) {
        let middlePile = Math.floor((minPile + maxPile) / 2);

        const hoursSpent = getSpentHours(middlePile);
        if (hoursSpent <= h) {
            maxPile = middlePile - 1;
        } else {
            minPile = middlePile + 1;
        }
    }
    return minPile;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
