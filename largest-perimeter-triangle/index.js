function largestPerimeter(A) {
    A.sort((a, b) => a - b);
    for (let i = A.length - 3; i >= 0; --i) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return A[i] + A[i + 1] + A[i + 2];
        }
    }
    return 0;
}

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
