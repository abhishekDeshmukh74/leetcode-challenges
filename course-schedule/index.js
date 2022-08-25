// DAG cycle detection
var canFinish = function (numCourses, prerequisites) {
    const graph = {}
    for (let i = 0; i < prerequisites.length; i++) {
        const [a, b] = prerequisites[i]
        if (!graph[b]) graph[b] = []
        graph[b].push(a);
    }

    const visited = new Set();

    const dfs = function (sourceCourse) {
        if (visited.has(String(sourceCourse))) return false;
        if (!graph[sourceCourse]) return true;
        if (graph[sourceCourse] === []) return true;

        visited.add(String(sourceCourse))
        for (const course of graph[sourceCourse]) if (!dfs(course)) return false;

        visited.delete(String(sourceCourse));
        graph[sourceCourse] = []
        return true
    }

    for (let i = 0; i < numCourses; i++) if (!dfs(i)) return false
    return true;
};


// Time Complexity: O(E+V) where V is the number of courses and Eis the number of dependencies
var canFinish = function (numCourses, prerequisites) {
    const graph = {}
    const inDegrees = {}
    const queue = []

    for (let i = 0; i < numCourses; i++) {
        inDegrees[i] = 0
        graph[i] = []
    }
    for (const [a, b] of prerequisites) {
        graph[a].push(b)
        inDegrees[b]++
    }

    for (const node in inDegrees) {
        if (inDegrees[node] === 0) queue.push(node)
    }

    // BFS
    let count = 0
    while (queue.length) {
        const current = queue.shift()
        for (const neighbor of graph[current]) {
            inDegrees[neighbor]--
            if (inDegrees[neighbor] === 0) queue.push(String(neighbor))
        }
        count++
    }
    return count === numCourses ? true : false
}

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
console.log(canFinish(3, [[0, 2], [1, 2], [2, 0]]))
console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]))
console.log(canFinish(7, [[1, 0], [0, 3], [0, 2], [3, 2], [2, 5], [4, 5], [5, 6], [2, 4]]))
