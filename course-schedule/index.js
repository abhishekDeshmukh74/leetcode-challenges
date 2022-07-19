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

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
console.log(canFinish(3, [[0, 2], [1, 2], [2, 0]]))
console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]))
console.log(canFinish(7, [[1, 0], [0, 3], [0, 2], [3, 2], [2, 5], [4, 5], [5, 6], [2, 4]]))
