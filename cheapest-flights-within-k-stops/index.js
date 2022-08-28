// Bellman ford algorithm
var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = Array(n).fill(Infinity)
    prices[src] = 0

    for (let i = 0; i < k + 1; i++) {
        const tempPrices = [...prices]

        for (const [s, d, w] of flights) {
            if (prices[s] === Infinity) continue;
            const currentPrice = prices[s] + w
            if (currentPrice < tempPrices[d]) tempPrices[d] = currentPrice
        }
        prices = tempPrices
    }
    return prices[dst] === Infinity ? -1 : prices[dst]
};
console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))
