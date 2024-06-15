const isHappy = (n) => {
    const squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];

    const sumOfSquares = (num) => {
        let sum = 0;

        while (num) {
            digit = num % 10;
            sum += squares[digit];
            num = Math.floor(num / 10);
        }
        return sum;
    };

    const visited = new Set();

    while (!visited.has(n)) {
        visited.add(n);
        n = sumOfSquares(n);
        if (n === 1) return true;
    }
    return false;
};

console.log(isHappy(19));
console.log(isHappy(2));
