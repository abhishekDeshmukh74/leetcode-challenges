// // var duplicateZeros = function (arr) {
// //   let deleted;
// //   for (let i = 0; i < arr.length; i++) {
// //     console.log('arr[i]:', arr[i]);
// //     if (deleted) {
// //       arr[i] = deleted;
// //       deleted = null;
// //       continue;
// //     }
// //     if (arr[i] === 0) {
// //       deleted = arr[i + 1];
// //       arr[i + 1] = 0;
// //       i++;
// //     }
// //   }
// //   return arr;
// // };
// // console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// // const outer = function () {

// //     let count = 0;

// //     return function () {
// //         return count++
// //     }
// //     count = 1;
// // }

// // const exp = outer();
// // console.log(exp());
// // exp(); // 1
// // exp(); // 2
// // exp(); // 3

// // let count = 0;
// // (function immediate() {
// //   let count = 1;
// //   setTimeout(() => {
// //     console.log(count); // What is logged?
// //   }, 1000);
// //   count = 2;
// // })();

// // const object = {
// //   price: 10,
// //   getPrice: function () {
// //     return this.price;
// //   }
// // }

// // const copy = Object.create(object);
// // copy.price = 20;
// // delete copy.price;
// // console.log(copy.price);

// // for (var i = 0; i < 5; i++) {
// //   (function (x) {
// //     setTimeout(function () {
// //       console.log(x);
// //     }, x * 1000);
// //   })(i);
// // }

// // (function () {
// //   console.log(1);
// //   setTimeout(function () {
// //     console.log(2);
// //   }, 1000);
// //   setTimeout(function () {
// //     console.log(3);
// //   }, 0);
// //   console.log(4);
// // })();

// // console.log(a);

// // var a = 5;

// // function abc() {
// //   a = 10;
// //   console.log(a); // 10
// // }

// // abc();

// // console.log(a);

// // console.log(a); // undefined
// // console.log(b); // Rede
// // var a;
// // let b;

// // const myObject = {
// //   price: 20.99,
// //   get_price: function () {
// //     return this.price;
// //   },
// // };
// // const customObject = Object.create(myObject);
// // customObject.price = 19.99;
// // delete customObject.price;
// // console.log(customObject.get_price());

// // The time complexity is O(n/2 + n/3 + n/5 + n/7 + n/11 + ....) which is equivalent to O(n log log n)
// // Space complexity is O(n)
// // var duplicateZeros = function (arr) {
// //   const queue = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === 0) {
// //       queue.push(0);
// //       queue.push(0);
// //     } else {
// //       queue.push(arr[i]);
// //     }
// //     arr[i] = queue.shift();
// //   }
// // };

// // console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// // var makesquare = function (matchsticks) {
// //   const sum = matchsticks.reduce((a, c) => a + c);
// //   if (sum % 4 !== 0) return false;
// //   const sideLength = sum / 4;
// //   const sides = Array(4).fill(0);

// //   matchsticks.sort((x, y) => y - x);

// //   const backTrack = (i) => {
// //     if (i === matchsticks.length) return true;

// //     for (let j = 0; j < 4; j++) {
// //       if (sides[j] + matchsticks[i] <= sideLength) {
// //         sides[j] += matchsticks[i];
// //         if (backTrack(i + 1)) return true;
// //         sides[j] -= matchsticks[i];
// //       }
// //     }
// //     return false;
// //   };
// //   return backTrack(0);
// // };

// // console.log(makesquare([1, 1, 2, 2, 2]));



// var networkDelayTime = function (times, n, k) {
//   const graph = {};
//   for (const [a, b, w] of times) {
//     if (!graph[a]) graph[a] = [];
//     if (!graph[b]) graph[b] = [];
//     graph[a].push([b, w]);
//     graph[b].push([a, w]);
//   }

//   console.log('graph:', graph);
//   const queue = [[k, 0]];
//   const visited = new Set();
//   while (queue.length) {
//     const [currentNode, distance] = queue.shift();
//     if (visited.has(currentNode)) continue;
//     visited.add(currentNode);

//     for (const neighbor of graph[String(currentNode)]) {
//       const [nNode, nDistance] = neighbor;
//       queue.push([nNode, distance + nDistance]);
//     }
//   }
// };
// console.log(
//   networkDelayTime(
//     [
//       [2, 1, 1],
//       [2, 3, 1],
//       [3, 4, 1],
//     ],
//     4,
//     2
//   )
// );





// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   if (left >= right) return
//   const partitionIndex = partition(arr, left, right)
//   quickSort(arr, left, partitionIndex - 1)
//   quickSort(arr, partitionIndex, right)
//   return arr
// }

// const partition = (arr, left, right) => {
//   const pivotIndex = Math.floor((left + right) / 2)
//   const pivot = arr[pivotIndex]
//   while (left <= right) {
//     while (arr[left] < pivot) left++
//     while (arr[right] > pivot) right--
//     if (left <= right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]]
//       left++
//       right--
//     }
//   }
//   return left
// }
// console.log(quickSort([2, 0, 2, 1, 1, 0]))

// const union = (n1, n2) => {
//     p1 = find(n1);
//     p2 = find(n2);

//     if (p1 === p2) return false

//     if (rank[p1] > rank[p2]) {
//         parent[p2] = p1;
//         rank[p1] += rank[p2]
//     } else {
//         parent[p1] = p2;
//         rank[p2] += rank[p1]
//     }
//     return true
// }

// for (const [n1, n2] of edges) if (!union(n1, n2)) return [n1, n2]



// const trie = new Trie();
// trie.insert('apple');
// trie.search('apple');
// trie.search('app');
// trie.startsWith('app');
// trie.insert('app');
// trie.search('app');




// var checkInclusion = function (s1, s2) {
//   const map = {};
//   for (let i = 0; i < s1.length; i++) map[s1[i]] ? map[s1[i]]++ : (map[s1[i]] = 1);

//   var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false;

//     let mapS = {};
//     let mapT = {};
//     for (let i = 0; i < s; i++) mapS[s[i]] ? mapS[s[i]]++ : (mapS[s[i]] = 1);
//     for (let i = 0; i < t; i++) mapT[s[t]] ? mapT[s[t]]++ : (mapT[s[t]] = 1);

//     for (const key in mapS) {
//       if (mapS[key] !== mapT[key]) return false;
//     }
//     return true;
//   };

//   for (let i = 0; i < s2.length; i++) {
//     if (map[s2[i]]) {
//       if (isAnagram(s2.slice(i, i + s1.length), s1)) return true;
//     }
//   }
//   return false;
// };
// console.log(checkInclusion('ab', 'eidbaooo'));
// console.log(checkInclusion('ab', 'eidboaoo'));


// var updateMatrix = function (mat) {


//     const result = []
//     for (let i = 0; i < mat.length; i++) {
//         result[i] = []
//         for (let j = 0; j < mat[i].length; j++) {
//             result[i][j] = bfs(i, j, 0)
//         }
//     }
//     return result
// };

// // console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
// console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(5);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node6 = new TreeNode(6);
const node4 = new TreeNode(4);

root.left = node1;
root.right = node2;
node1.left = node3;
node2.left = node6;
node2.right = node4;

// var getDirections = function (root, startValue, destValue) {

//     const graph = {}
//     const btQueue = [root]

//     while (btQueue.length) {

//         const current = btQueue.shift();
//         if (!graph[current.val]) graph[current.val] = []

//         if (current.left) {
//             if (!graph[current.left.val]) graph[current.left.val] = []
//             graph[current.left.val].push([current.val, 'U'])
//             graph[current.val].push([current.left.val, 'L'])
//             btQueue.push(current.left)
//         }

//         if (current.right) {
//             if (!graph[current.right.val]) graph[current.right.val] = []
//             graph[current.right.val].push([current.val, 'U'])
//             graph[current.val].push([current.right.val, 'R'])
//             btQueue.push(current.right)
//         }
//     }

//     const queue = [[startValue, '']]
//     // const visited = new Set();
//     while (queue.length) {
//         const [value, path] = queue.shift();
//         if (value == destValue) return path
//         // if (visited.has(value)) continue;
//         for (const [neighborVal, neighborPath] of graph[value]) {
//             // visited.add(value)
//             // if (visited.has(neighborVal)) continue;
//             queue.push([neighborVal, path + neighborPath])
//         }
//     }
// };

// console.log(getDirections(root, 3, 6))

// const cyclicDirectedGraph = {
//     '0': ['1'],
//     '1': [],
//     '2': ['1', '3'],
//     '3': ['4'],
//     '4': ['0', '2'],
// };


// const detectCycleInDirectedGraphIterativeDFS = (graph) => {

// }

// console.log(detectCycleInDirectedGraphIterativeDFS(cyclicDirectedGraph))


// var shortestPath = function (grid, k) {

//     const target = [grid.length - 1, grid[0].length - 1]

//     const queue = [[0, 0, 0, k]]

//     const directions = [
//         [0, 1],
//         [1, 0],
//         [0, -1],
//         [-1, 0],
//     ];

//     const visited = new Set();

//     while (queue.length) {

//         const [x, y, stepsTaken, obstaclesLeft] = queue.shift();

//         for (const [dx, dy] of directions) {
//             const newX = x + dx;
//             const newY = y + dy;
//             const xInbounds = newX >= 0 && newX < grid.length;
//             const yInbounds = newY >= 0 && newY < grid[0].length;
//             if (!xInbounds || !yInbounds) continue;

//             const newObstaclesLeft = obstaclesLeft - grid[newY][newY]
//             if (newObstaclesLeft <= 0) continue
//             if (!visited.has(`${newX}${newY}${newObstaclesLeft}`)) continue

//             visited.add(`${newX}${newY}${newObstaclesLeft}`)

//             queue.push([newX, newY, stepsTaken + 1, newObstaclesLeft])
//         }
//     }
//     return -1

// };
// console.log(shortestPath([
//     [0, 0, 0],
//     [1, 1, 0],
//     [0, 0, 0],
//     [0, 1, 1],
//     [0, 0, 0]
// ], 1))


var minKnightMoves = function (x, y) {

    const knightDirections = [[2, 1], [-2, 1], [2, -1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]
    const visited = new Set();
    const queue = [[0, 0, 0]]

    while (queue.length) {

        const [currentX, currentY, currentDistance] = queue.shift();
        if (currentX === x && currentY === y) return currentDistance;

        for (const [dx, dy] of knightDirections) {
            const newX = currentX + dx;
            const newY = currentY + dy;
            if (visited.has(`${newX}-${newY}`)) continue

            visited.add(`${newX}-${newY}`)
            queue.push([newX, newY, currentDistance + 1])
        }
    }
};

console.log(minKnightMoves(1, 1))
console.log(minKnightMoves(5, 5))
console.log(minKnightMoves(2, 1))
