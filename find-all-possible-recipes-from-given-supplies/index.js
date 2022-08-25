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

console.log(findAllRecipes(['bread'], [['yeast', 'flour']], ['yeast']))
console.log(findAllRecipes(['bread'], [['yeast', 'flour']], ['yeast', 'flour', 'corn']))
console.log(findAllRecipes(['bread', 'sandwich'], [['yeast', 'flour'], ['bread', 'meat']], ['yeast', 'flour', 'meat']))
console.log(findAllRecipes(['bread', 'sandwich', 'burger'], [['yeast', 'flour'], ['bread', 'meat'], ['sandwich', 'meat', 'bread']], ['yeast', 'flour', 'meat']))
console.log(findAllRecipes(['xevvq', 'izcad', 'p', 'we', 'bxgnm', 'vpio', 'i', 'hjvu', 'igi', 'anp', 'tokfq', 'z', 'kwdmb', 'g', 'qb', 'q', 'b', 'hthy'], [['wbjr'], ['otr', 'fzr', 'g'], ['fzr', 'wi', 'otr', 'xgp', 'wbjr', 'igi', 'b'], ['fzr', 'xgp', 'wi', 'otr', 'tokfq', 'izcad', 'igi', 'xevvq', 'i', 'anp'], ['wi', 'xgp', 'wbjr'], ['wbjr', 'bxgnm', 'i', 'b', 'hjvu', 'izcad', 'igi', 'z', 'g'], ['xgp', 'otr', 'wbjr'], ['wbjr', 'otr'], ['wbjr', 'otr', 'fzr', 'wi', 'xgp', 'hjvu', 'tokfq', 'z', 'kwdmb'], ['xgp', 'wi', 'wbjr', 'bxgnm', 'izcad', 'p', 'xevvq'], ['bxgnm'], ['wi', 'fzr', 'otr', 'wbjr'], ['wbjr', 'wi', 'fzr', 'xgp', 'otr', 'g', 'b', 'p'], ['otr', 'fzr', 'xgp', 'wbjr'], ['xgp', 'wbjr', 'q', 'vpio', 'tokfq', 'we'], ['wbjr', 'wi', 'xgp', 'we'], ['wbjr'], ['wi']], ['wi', 'otr', 'wbjr', 'fzr', 'xgp']))
