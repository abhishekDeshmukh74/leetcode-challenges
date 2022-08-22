var uniquePathsWithObstacles = function (obstacleGrid) {

    // If the starting cell has an obstacle, then simply return as there would be no paths to the destination
    if (obstacleGrid[0][0]) return 0

    // Number of ways of reaching the starting cell = 1
    obstacleGrid[0][0] = 1

    // Filling the values for the first column
    for (let i = 1; i < obstacleGrid.length; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1) ? 1 : 0;
    }

    // Filling the values for the first row
    for (let i = 1; i < obstacleGrid[0].length; i++) {
        obstacleGrid[0][i] = (obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1) ? 1 : 0;
    }
    // Starting from cell(1,1) fill up the values
    // No of ways of reaching cell[i][j] = cell[i - 1][j] + cell[i][j - 1]
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[i].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0
            } else {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            }
        }
    }
    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
