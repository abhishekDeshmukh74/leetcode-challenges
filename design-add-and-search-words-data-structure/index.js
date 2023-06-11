function TrieNode() {
    this.children = {};
    this.end = false;
}

var WordDictionary = function () {
    this.root = new TrieNode()
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let current = this.root

    for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) current.children[word[i]] = new TrieNode()
        current = current.children[word[i]]
    }
    current.end = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const dfs = (j, root) => {
        let current = root

        for (let i = j; i < word.length; i++) {
            const char = word[i]

            if (char === '.') {
                return Object.keys(current.children).some(k => dfs(i + 1, current.children[k]))
            } else {
                if (!current.children[char]) return false
                current = current.children[char]
            }
        }
        return current.end
    }
    return dfs(0, this.root)
};

const wordDictionary = new WordDictionary()
wordDictionary.addWord('bad');
wordDictionary.addWord('dad');
wordDictionary.addWord('mad');
console.log(wordDictionary.search('pad'))  // return false
console.log(wordDictionary.search('bad'))  // return true
console.log(wordDictionary.search('.ad'))  // return true
console.log(wordDictionary.search('b..'))  // return true
