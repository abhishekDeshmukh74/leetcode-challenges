// Recursive
const coinChange = (coins, amount, memo = {}) => {
    if (memo[amount] > 0) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let minimumLength = Infinity;

    for (const coin of coins) {
        const remainder = amount - coin
        const remainderResult = 1 + coinChange(coins, remainder, memo)
        if (remainderResult && remainderResult < minimumLength) minimumLength = remainderResult;
    }
    memo[amount] = minimumLength;
    if (memo[amount] === Infinity) return -1;
    return memo[amount];
};

// Iterative way
const coinChange = (coins, amount) => {

    const table = Array(amount + 1).fill(null)
    table[0] = 0;

    for (let i = 0; i <= amount; i++) {
        if (table[i] === null) continue
        for (const coin of coins) {
            if (i + coin > amount) continue;
            const comb = table[i] + 1
            if (table[i + coin] === null) {
                table[i + coin] = comb
            } else {
                table[i + coin] = Math.min(comb, table[i + coin])
            }
        }
    }
    return table[amount] !== null ? table[amount] : -1
};

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
