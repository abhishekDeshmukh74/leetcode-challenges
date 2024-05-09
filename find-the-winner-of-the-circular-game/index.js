var findTheWinner = function (n, k) {
    if (n === 1) return 1
    return (findTheWinner(n - 1, k) + k - 1) % n + 1;
}

console.log(findTheWinner(5,2))
console.log(findTheWinner(6, 5))
