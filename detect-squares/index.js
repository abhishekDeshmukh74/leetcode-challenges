class DetectSquares {
    constructor() {
        this.counts = new Map();
    }

    add(point) {
        const key = `${point[0]}-${point[1]}`;
        this.counts.set(key, (this.counts.get(key) || 0) + 1);
    }

    count(point) {
        let sum = 0;
        const [px, py] = point;

        for (const key of this.counts.keys()) {
            const [x, y] = key.split("-").map(Number);

            // Check if the point forms a diagonal with the given point
            if (px === x || py === y || Math.abs(px - x) !== Math.abs(py - y))
                continue;

            // Calculate keys for the other two points needed to form a square
            const key1 = `${x}-${py}`;
            const key2 = `${px}-${y}`;
            sum +=
                (this.counts.get(key) || 0) *
                (this.counts.get(key1) || 0) *
                (this.counts.get(key2) || 0);
        }
        return sum;
    }
}

const detectSquares = new DetectSquares();
console.log(detectSquares.add([3, 10]));
console.log(detectSquares.add([11, 2]));
console.log(detectSquares.add([3, 2]));
console.log(detectSquares.count([11, 10]));
console.log(detectSquares.count([14, 8]));
console.log(detectSquares.add([11, 2]));
console.log(detectSquares.count([11, 10]));
