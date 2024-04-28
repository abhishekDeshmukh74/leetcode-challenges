// var isToeplitzMatrix = function (matrix) {
//     const map = new Map();

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             const key = i - j;
//             if (!map.has(key)) {
//                 map.set(key, matrix[i][j])
//             } else {
//                 if (map.get(key) !== matrix[i][j]) return false
//             }
//         }
//     }
//     return true
// };


var isToeplitzMatrix = function (matrix) {

    if (matrix.length === 1) return true

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] !== matrix[i-1][j-1]) return false
        }
    }
    return true
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]))
console.log(isToeplitzMatrix([[1, 2], [2, 2]]))
