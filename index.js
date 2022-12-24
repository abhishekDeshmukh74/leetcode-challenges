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


// var amountPainted = function (paint) {
//     const work = []
//     const painted = new Set();

//     for (let [start, end] of paint) {
//         const previouslyPainted = painted.size
//         while (start !== end) {
//             if (!painted.has(start)) painted.add(start)
//             start++
//         }
//         work.push(painted.size - previouslyPainted)
//     }
//     return work
// };

// console.log(amountPainted([[1, 4], [4, 7], [5, 8]]))
// console.log(amountPainted([[1, 4], [5, 8], [4, 7]]))
// console.log(amountPainted([[1, 5], [2, 4]]))



// var longestPalindrome = function (s) {
//     const table = Array(s.length).fill().map(() => Array(s.length).fill(0))

//     for (let i = 0; i < s.length; i++) {
//         table[i][i] = 1
//     }

//     for (let i = 0; i < s.length - 1; i++) {
//         if (s[i] === s[i + 1]) {
//             table[i][i + 1] = 2
//         }
//     }

//     for (let length = 3; length <= s.length; length++) {
//         for (let i = 0, j = i + length - 1; j < s.length; i++, j++) {
//             if (table[i + 1][j - 1] && s[i] === s[j]) {
//                 table[i][j] = table[i + 1][j - 1] + 1
//             }
//         }

//     }

//     console.table(table)

// }

// console.log(longestPalindrome('babad'))

// var combinationSum2 = function (candidates, target) {
//     const result = []
//     const dfs = (i, current, currentTotal) => {
//         if (i >= candidates.length || currentTotal > target) return
//         if (currentTotal === target) {
//             result.push([...current])
//             return
//         }

//         current.push(candidates[i])
//         dfs(i + 1, current, currentTotal + candidates[i])
//         current.pop()
//         dfs(i + 1, current, currentTotal)
//     }
//     dfs(0, [], 0)
//     return result
// };

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))


// let shortestDistance = function (grid) {

//     const bfs = (x, y, totalHouses) => {

//     }

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] == 1) totalHouses++
//         }
//     }

//     let minDistance = Number.MAX_VALUE;
//     let totalHouses = 0;
//     // Find the min distance sum for each empty cell.
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] == 0) {
//                 minDistance = Math.min(minDistance, bfs(i, j, totalHouses));
//             }
//         }
//     }

//     // If it is impossible to reach all houses from any empty cell, then return -1.
//     if (minDistance == Number.MAX_VALUE) return -1;

//     return minDistance;
// };

// var longestCycle = function (edges) {
//     const graph = {}
//     for (const [index, edge] of edges.entries()) {
//         if (!graph[index]) graph[index] = []
//         if (edge === -1) continue;
//         graph[index].push(edge)
//     }

//     const visited = new Set();
//     const nodeDistance = []

//     const dfs = (node, distance) => {
//         if (visited.has(String(node))) {
//             return distance - nodeDistance[node]
//         }

//         visited.add(String(node))
//         nodeDistance[node] = distance
//         if (!graph[node]) return 0

//         for (const neighbor of graph[node]) {
//             const result = dfs(neighbor, distance + 1)
//             if (result) return result
//         }
//         visited.delete(String(node))
//         return 0
//     }

//     let max = 0;
//     for (const node in graph) {
//         if (!visited.has(node)) {
//             max = Math.max(max, dfs(node, 0))
//         }
//     }
//     return max === 0 ? -1 : max
// };

// console.log(longestCycle([3, 3, 4, 2, 3]))
// console.log(longestCycle([3, 3, 4, 2, 3]))

// class PseudoMinHeap {
//     constructor() {
//         this.nodes = [];
//     }

//     findIndex(node) {
//         for (let i = 0; i < this.nodes.length; i += 1) {
//             if (this.nodes[i].node === node) {
//                 return i;
//             }
//         }

//         return -1;
//     }

//     add(node, weight) {
//         const index = this.findIndex(node);
//         if (index !== -1) {
//             if (this.nodes[index].weight < weight) {
//                 return;
//             }

//             this.nodes.splice(index, 1);
//         }

//         let low = 0;
//         let high = this.nodes.length - 1;
//         while (low <= high) {
//             const mid = low + Math.floor((high - low) / 2);
//             const weightMid = this.nodes[mid].weight;
//             if (weightMid < weight) {
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }
//         }

//         this.nodes.splice(low, 0, { node, weight });
//     }

//     poll() {
//         return this.nodes.pop();
//     }
// }

// var minCostConnectPoints = function (points) {

//     const graph = {}
//     for (let i = 0; i < points.length; i++) {
//         [x1, y1] = points[i]
//         for (let j = i + 1; j < points.length; j++) {
//             [x2, y2] = points[j]
//             const distance = Math.abs(x2 - x1) + Math.abs(y2 - y1)
//             if (!graph[i]) graph[i] = []
//             if (!graph[j]) graph[j] = []
//             graph[i].push([j, distance])
//             graph[j].push([i, distance])
//         }
//     }

//     // Prim's algorithm
//     let minSum = 0
//     const visited = new Set()
//     const minHeap = new PseudoMinHeap()
//     minHeap.add(0, 0)

//     while (visited.size < points.length) {

//         const { node: currentNode, weight: distance } = minHeap.poll();

//         if (visited.has(currentNode)) continue
//         visited.add(currentNode)
//         minSum += distance
//         if (!graph[String(currentNode)]) continue;

//         for (const [nNode, nDistance] of graph[String(currentNode)]) {
//             if (!visited.has(nNode)) {
//                 minHeap.add(nNode, nDistance)
//             }
//         }
//     }
//     return minSum
// };

// console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))


// var rob = function (nums) {

//     const robHelper = (slicedNums) => {
//         if (slicedNums.length === 0) return 0;
//         if (slicedNums.length === 1) return slicedNums[0];
//         if (slicedNums.length === 2) return Math.max(slicedNums[0], slicedNums[1]);

//         const table = [slicedNums[0], Math.max(slicedNums[0], slicedNums[1])];

//         for (let i = 2; i < slicedNums.length; i++) {
//             table[i] = Math.max(slicedNums[i] + table[i - 2], table[i - 1]);
//         }
//         return table[slicedNums.length - 1]
//     }

//     return Math.max(robHelper(nums.slice(1)), robHelper(nums.slice(0, nums.length - 1)))
// };


// console.log(rob([2, 3, 2])) // 3
// console.log(rob([1, 2, 1, 1])) // 3
// console.log(rob([1, 2, 3, 1])) // 4
// console.log(rob([1, 2, 3])) // 3
// console.log(rob([0])) // 0

// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
// }

// const root = new TreeNode(3);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
// const node3_2 = new TreeNode(3);
// const node1 = new TreeNode(1)
// root.left = node2;
// root.right = node3;
// node2.right = node3_2;
// node3.right = node1;

// var rob = function (root) {
//     if (!root) return [];
//     const queue = [root];
//     const table = []
//     while (queue.length) {
//         let currentLevelSum = 0;
//         const currentLevelQueueLength = queue.length;
//         for (let i = 0; i < currentLevelQueueLength; i++) {
//             const current = queue.shift()
//             if (current) {
//                 currentLevelSum += current.val
//                 queue.push(current.left)
//                 queue.push(current.right)
//             }
//         }
//         const currentTableLength = table.length
//         if (currentTableLength === 0) table.push(currentLevelSum)
//         if (currentTableLength === 1) table.push(Math.max(currentLevelSum, table[0]))
//         if (currentTableLength >= 2) table.push(Math.max(currentLevelSum + table[currentTableLength - 2], table[currentTableLength - 1]))
//     }
//     return table.pop();
// };

// console.log(rob(root))

// var search = function (nums, target) {



// }

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0))

// var search = function (nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)
//         if (nums[mid] === target) return mid
//         console.log('nums[mid]:', nums[mid])
//         nums[mid] < nums[right] ? right = mid - 1 : left = mid + 1
//     }
//     return -1
// }

// console.log(search([1, 3], 3))





// var cherryPickup = function (grid) {

//     if (grid[0][0] === -1) return 0



// }

// console.log(cherryPickup([
//     [0, 1, -1],
//     [1, 0, -1],
//     [1, 1, 1]
// ]))


// var minOperations = function (nums, x) {

//     const memo = {}

//     const dfs = (left, right, currentX, count) => {
//         if (currentX === 0) return count
//         if (left > right || currentX < 0) return Infinity
//         let key = `${left}-${right}-${currentX}`
//         if (key in memo) return memo[key]

//         const leftResult = dfs(left + 1, right, currentX - nums[left], count + 1)
//         const rightResult = dfs(left, right - 1, currentX - nums[right], count + 1)
//         memo[key] = Math.min(leftResult, rightResult)
//         return memo[key]
//     }

//     const result = dfs(0, nums.length - 1, x, 0)
//     return result === Infinity ? -1 : memo[`0-${nums.length - 1}-${x}`]
// }


// console.log(minOperations([1, 1, 4, 2, 3], 5))
// console.log(minOperations(
//     [8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], 134365))

// var duplicateZeros = function (arr) {
//   let deleted;
//   for (let i = 0; i < arr.length; i++) {
//     console.log('arr[i]:', arr[i]);
//     if (deleted) {
//       arr[i] = deleted;
//       deleted = null;
//       continue;
//     }
//     if (arr[i] === 0) {
//       deleted = arr[i + 1];
//       arr[i + 1] = 0;
//       i++;
//     }
//   }
//   return arr;
// };
// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// The time complexity is O(n/2 + n/3 + n/5 + n/7 + n/11 + ....) which is equivalent to O(n log log n)
// Space complexity is O(n)
// var duplicateZeros = function (arr) {
//   const queue = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       queue.push(0);
//       queue.push(0);
//     } else {
//       queue.push(arr[i]);
//     }
//     arr[i] = queue.shift();
//   }
// };

// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// var shortestBridge = function (grid) {

// };

// console.log(shortestBridge([[0, 1], [1, 0]]))
// console.log(shortestBridge([[0, 1, 0], [0, 0, 0], [0, 0, 1]]))
// console.log(shortestBridge([[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]))

// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
// }

// const root = new TreeNode(1)
// const node3_1 = new TreeNode(3);
// const node2 = new TreeNode(2);
// const node5 = new TreeNode(5);
// const node3_2 = new TreeNode(3);
// const node9 = new TreeNode(9);
// root.left = node3_1;
// root.right = node2;
// node3_1.left = node5;
// node3_1.right = node3_2;
// node2.right = node9;

// var widthOfBinaryTree = function(root) {
//     if (root == null) return 0
//     let max = 0
//     let queue = [[root, 0]]
//     while (queue.length){
//         let size = queue.length
//         let currentLevel = []
//         for (let i = 0; i < size; i++){
//             let [current, position] = queue.shift()
//             currentLevel.push(position)
//             current.left && queue.push([current.left, position * 2])
//             current.right && queue.push([current.right, position * 2 + 1])
//         }
//         let currLevelWidth = currentLevel.length === 1 ? 1 : currentLevel[currentLevel.length - 1] - currentLevel[0] + 1
//         max = Math.max(max, currLevelWidth)
//     }
//     return max
// }

// console.log(widthOfBinaryTree(root))


// var largestRectangleArea = function (heights) {
//     let maxArea = 0
//     for (const [index, height] of heights.entries()) {
//     }
//     return maxArea
// };

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))

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

// console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
// console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))

// var letterCasePermutation = function (S) {
//     let result = [];
//     dfs("", 0);

//     function dfs(current, i) {
//         if (current.length == S.length) {
//             result.push(current);
//             return;
//         }
//         if (S.charAt(i) >= '0' && S.charAt(i) <= '9') {
//             current += S.charAt(i);
//             dfs(current, i + 1);
//         } else {
//             dfs(current + S.charAt(i).toLowerCase(), i + 1);
//             dfs(current + S.charAt(i).toUpperCase(), i + 1);
//         }
//     }

//     return result;
// };

// var eraseOverlapIntervals = function(intervals) {
//     intervals.sort((a, b) => a[0] - b[0])
//     let count = 0
//     let lastEnd = 0

//     console.log('intervals:', intervals)
//     for (let i = 0; i < intervals.length; i++) {
//         const [start, end] = intervals[i]

//         if (lastEnd <= end) {
//             lastEnd = end
//         } else {
//             count++
//         }
//     }
//     return count
// };

// console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
// console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))
// console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))
