// Time Complexity: 3^L*N where N is the number of cells in the board and L is the length of the word to be matched. For the backtracking function, initially we could have at most 4 directions to explore, but further the choices are reduced into 3(since we won't go back to where we come from). As a result, the execution trace after the first step could be visualized as a 3-ary tree, each of the branches represent a potential exploration in the corresponding direction. Therefore, in the worst case, the total number of invocation would be the number of nodes in a full 3-nary tree, which is about 3^L.We iterate through the board for backtracking, i.e.there could be N times invocation for the backtracking function in the worst case.As a result, overall the time complexity of the algorithm would be 3^L*N

// Space Complexity: O(L) where L is the length of the word to be matched. The main consumption of the memory lies in the recursion call of the backtracking function. The maximum length of the call stack would be the length of the word.Therefore, the space complexity of the algorithm is O(L)

// Follow-up? Could you use search pruning to make your solution faster with a larger board?
// If the length of the 'word' is greater than the size of the 'board'(#rows * #cols) we can simply return False.Also, we can check if each character in 'word' exists in 'board', if there is at least one character that does not exist in 'board' we can simply return False. Performing these two prunings we can return False immediately instead of computing further.

const exist = (board, word) => {

    if (board.length === 0 || word.length === 0) return false;

    const visited = new Set();

    const dfs = (i, j, wordIndex) => {

        if (wordIndex === word.length) return true
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return false;
        if (word[wordIndex] !== board[i][j]) return false;
        const key = `${i}-${j}`
        if (visited.has(key)) return false;

        visited.add(key)
        const result = dfs(i + 1, j, wordIndex + 1) || dfs(i - 1, j, wordIndex + 1) ||
            dfs(i, j + 1, wordIndex + 1) || dfs(i, j - 1, wordIndex + 1)

        visited.delete(key)
        return result
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false
};

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'))
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'))
console.log(exist([['a']], 'a'))
console.log(exist([['a', 'a']], 'aaa'))
