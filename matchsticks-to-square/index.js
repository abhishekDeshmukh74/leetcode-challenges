// Time Complexity: O(4^N)because we have a total of N sticks and for each one of those matchsticks, we have 44 different possibilities for the subsets they might belong to or the side of the square they might be a part of.

// Space Complexity: O(N).For recursive solutions, the space complexity is the stack space occupied by all the recursive calls.The deepest recursive call here would be of size NN and hence the space complexity is O(N).There is no additional space other than the recursion stack in this solution.

var makesquare = function (matchsticks) {
    const sum = matchsticks.reduce((a, c) => a + c);
    if (sum % 4 !== 0) return false;
    const sideLength = sum / 4;
    const sides = Array(4).fill(0);

    matchsticks.sort((x, y) => y - x);

    const backTrack = (i) => {
        if (i === matchsticks.length) return true;

        for (let j = 0; j < 4; j++) {
            if (sides[j] + matchsticks[i] <= sideLength) {
                sides[j] += matchsticks[i];
                if (backTrack(i + 1)) return true;
                sides[j] -= matchsticks[i];
            }
        }
        return false;
    };
    return backTrack(0);
};

console.log(makesquare([1, 1, 2, 2, 2]));
