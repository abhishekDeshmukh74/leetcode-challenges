// Bellman ford algorithm
var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = Array(n).fill(Infinity)
    prices[src] = 0

    for (let i = 0; i < k + 1; i++) {
        const tempPrices = [...prices]
        for (const flight of flights) {
            const [s, d, p] = flight;
            if (prices[s] === Infinity) continue;
            const possibleCheapPrice = prices[s] + p
            if (possibleCheapPrice < tempPrices[d]) tempPrices[d] = possibleCheapPrice;
        }
        prices = tempPrices
    }
    if (prices[dst] === Infinity) return -1;
    return prices[dst]
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))
