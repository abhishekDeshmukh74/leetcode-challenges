var findOrder = function (numCourses, prerequisites) {

    const graph = {};
    for (const [a, b] of prerequisites) {
        if (!graph[a]) graph[a] = []
        graph[a].push(String(b));
    }

    const visited = new Set();
    const cycle = new Set();
    let result = [];

    const dfs = function (startCourse) {

        if (cycle.has(startCourse)) return false;
        if (visited.has(startCourse)) return true;

        cycle.add(startCourse)

        if (graph[startCourse]) {
            for (const course of graph[startCourse]) if (!dfs(course)) return false
        }

        cycle.delete(startCourse)
        visited.add(startCourse)
        result.push(startCourse)
        return true;
    }

    for (let i = 0; i < numCourses; i++) if (!dfs(String(i))) return []
    return result
};

console.log(findOrder(2, [[1, 0]]))
console.log(findOrder(2, [[0, 1]]))
