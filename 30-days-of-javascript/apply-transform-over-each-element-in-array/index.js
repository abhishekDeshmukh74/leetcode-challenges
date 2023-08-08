var map = function (arr, fn) {
    const transformedArr = [];
    arr.forEach((element, index) => {
        transformedArr[index] = fn(element, index);
    });
    return transformedArr;
};

console.log(map([1, 2, 3], function plusone(n) { return n + 1; }))
console.log(map([1, 2, 3], function plusI(n, i) { return n + i; }))
console.log(map([10, 20, 30], function constant() { return 42; }))
