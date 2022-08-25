var findAllRecipes = function (recipes, ingredients, supplies) {

    const graph = {}
    const inDegrees = {}
    for (let i = 0; i < ingredients.length; i++) {
        for (let j = 0; j < ingredients[i].length; j++) {

            const recipe = recipes[i]
            const ingredient = ingredients[i][j]

            if (!graph[ingredient]) graph[ingredient] = []
            graph[ingredient].push(recipes[i])

            // Calculate indegree
            if (!inDegrees[recipe]) inDegrees[recipe] = 0
            inDegrees[recipe]++
        }
    }

    const answer = []
    const queue = []

    for (const supply of supplies) queue.push(supply)

    // BFS
    while (queue.length) {
        const currentRecipe = queue.shift()
        if (!graph[currentRecipe]) continue
        for (const neighborRecipe of graph[currentRecipe]) {
            inDegrees[neighborRecipe]--
            if (inDegrees[neighborRecipe] === 0) {
                queue.push(neighborRecipe)
                answer.push(neighborRecipe)
            }
        }
    }
    return answer
}
