function TrieNode() {
    this.children = {};
    this.end = false;
};

function Trie() {
    this.root = new TrieNode()
}

Trie.prototype.insert = function (word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) current.children[word[i]] = new TrieNode()
        current = current.children[word[i]]
    }
    current.end = true
}

Trie.prototype.search = function (word) {
    let current = this.root
    for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) return false
        current = current.children[word[i]]
    }
    return current.end
}

Trie.prototype.startsWith = function (prefix) {
    let current = this.root
    for (let i = 0; i < prefix.length; i++) {
        if (!current.children[prefix[i]]) return false
        current = current.children[prefix[i]]
    }
    return true
}

const trie = new Trie();
trie.insert('apple');
trie.search('apple');
trie.search('app');
trie.startsWith('app');
trie.insert('app');
trie.search('app');
