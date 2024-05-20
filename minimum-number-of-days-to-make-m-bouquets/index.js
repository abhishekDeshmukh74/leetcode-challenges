const minDays = (bloomDay, m, k) => {
    if (bloomDay.length < m * k) return -1;

    const canMakeBouquets = (day) => {
        let currentWindow = 0;
        let bouquets = 0;

        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= day) {
                currentWindow++;
                if (currentWindow === k) {
                    bouquets++;
                    currentWindow = 0;
                }
            } else {
                currentWindow = 0;
            }
        }
        return bouquets >= m;
    };

    let minDays = Infinity;
    let maxDays = 0;

    for (const bloom of bloomDay) {
        if (bloom < minDays) minDays = bloom;
        if (bloom > maxDays) maxDays = bloom;
    }

    while (minDays <= maxDays) {
        const middle = minDays + Math.floor((maxDays - minDays) / 2);
        canMakeBouquets(middle) ? (maxDays = middle - 1) : (minDays = middle + 1);
    }
    return minDays;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
console.log(minDays([1, 10, 3, 10, 2], 3, 3));
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
console.log(minDays([1000000000, 1000000000], 1, 1));
