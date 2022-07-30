//Time complexity:O(M(4*3^L−1), where MM is the number of cells in the board and LL is the maximum length of words. It is tricky is calculate the exact number of steps that a backtracking algorithm would perform.We provide a upper bound of steps for the worst scenario for this problem.The algorithm loops over all the cells in the board, therefore we have MM as a factor in the complexity formula.It then boils down to the maximum number of steps we would need for each starting cell i.e 4*3^L−1

//Assume the maximum length of word is LL, starting from a cell, initially we would have at most 4 directions to explore.Assume each direction is valid(i.e.worst case), during the following exploration, we have at most 3 neighbor cells(excluding the cell where we come from) to explore.As a result, we would traverse at most 4*3^L−1 cells during the backtracking exploration.

// One might wonder what the worst case scenario looks like.Well, here is an example.Imagine, each of the cells in the board contains the letter a, and the word dictionary contains a single word['aaaa'].Voila.This is one of the worst scenarios that the algorithm would encounter.pic

// Note that, the above time complexity is estimated under the assumption that the Trie data structure would not change once built.If we apply the optimization trick to gradually remove the nodes in Trie, we could greatly improve the time complexity, since the cost of backtracking would reduced to zero once we match all the words in the dictionary, i.e.the Trie becomes empty.

// Space Complexity: O(N), where NN is the total number of letters in the dictionary.

function TrieNode() {
    this.children = {}
    this.end = false;
}

TrieNode.prototype.insert = function (word) {
    let current = this;
    for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) current.children[word[i]] = new TrieNode();
        current = current.children[word[i]]
    }
    current.end = true;
}


var findWords = function (board, words) {
    const root = new TrieNode()
    for (const word of words) root.insert(word)

    const results = new Set();
    const visited = new Set();

    const dfs = (i, j, node, word) => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return
        if (visited.has(`${i}${j}`)) return
        if (!node.children[board[i][j]]) return

        visited.add(`${i}${j}`);
        node = node.children[board[i][j]]
        word += board[i][j]
        if (node.end) results.add(word)

        dfs(i + 1, j, node, word)
        dfs(i - 1, j, node, word)
        dfs(i, j - 1, node, word)
        dfs(i, j + 1, node, word)

        visited.delete(`${i}${j}`);
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(i, j, root, '')
        }
    }
    return [...results];
};

console.log(findWords([
    ["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]],
    ["oath", "pea", "eat", "rain"
    ]))
